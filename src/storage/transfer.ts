/**
 * Export / import dữ liệu người học.
 *
 * Không có bước nào gửi dữ liệu ra mạng. Export tạo Blob tải về; import đọc file
 * người dùng chọn, validate bằng Zod, và hiển thị conflict preview trước khi ghi.
 */
import { MAX_IMPORT_BYTES } from '@/config/safety';
import { redactSensitive } from '@/utils/sensitive';
import { clearStore, getAll, getOne, putMany, put } from './db';
import {
  DB_NAME,
  SCHEMA_VERSION,
  exportBundleSchema,
  type ChecklistRun,
  type EvidenceRecord,
  type ExportBundle,
  type LearnerProfile,
  type NoteRecord,
  type ProgressRecord,
  type QuizAttempt,
  type ReportDraft,
} from './schema';

export interface ImportConflict {
  store: string;
  key: string;
  labelVi: string;
}

export interface ImportPreview {
  bundle: ExportBundle;
  conflicts: ImportConflict[];
  incomingCounts: Record<string, number>;
  existingCounts: Record<string, number>;
  schemaVersionMismatch: boolean;
}

export type ImportMode = 'merge' | 'overwrite';

/** Đọc toàn bộ dữ liệu người học thành một bundle. */
export async function buildExportBundle(options: { redact: boolean }): Promise<ExportBundle> {
  const [progress, notes, evidence, checklistRuns, reports, quizAttempts, profile] =
    await Promise.all([
      getAll<ProgressRecord>('progress'),
      getAll<NoteRecord>('notes'),
      getAll<EvidenceRecord>('evidence'),
      getAll<ChecklistRun>('checklistRuns'),
      getAll<ReportDraft>('reports'),
      getAll<QuizAttempt>('quizAttempts'),
      getOne<LearnerProfile>('profile', 'singleton'),
    ]);

  const bundle: ExportBundle = {
    app: DB_NAME,
    schemaVersion: SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    redacted: options.redact,
    data: {
      progress,
      notes: options.redact ? [] : notes.map(redactNote),
      evidence: options.redact ? [] : evidence,
      checklistRuns: options.redact ? checklistRuns.map(stripRunNotes) : checklistRuns,
      reports: options.redact ? [] : reports.map(redactReport),
      quizAttempts,
      profile: profile ?? null,
    },
  };
  return bundle;
}

function redactNote(note: NoteRecord): NoteRecord {
  return { ...note, body: redactSensitive(note.body) };
}

function stripRunNotes(run: ChecklistRun): ChecklistRun {
  const items: ChecklistRun['items'] = {};
  for (const [key, value] of Object.entries(run.items)) {
    items[key] = { state: value.state, noteVi: '' };
  }
  return { ...run, items };
}

function redactReport(report: ReportDraft): ReportDraft {
  const redactedFields: (keyof ReportDraft)[] = [
    'steps',
    'evidence',
    'minimalPoc',
    'dataExposure',
    'summary',
  ];
  const next = { ...report };
  for (const field of redactedFields) {
    const value = next[field];
    if (typeof value === 'string') {
      (next[field] as string) = redactSensitive(value);
    }
  }
  return next;
}

/** Chuỗi JSON đẹp để tải về. */
export function serializeBundle(bundle: ExportBundle): string {
  return JSON.stringify(bundle, null, 2);
}

/** Phân tích và kiểm tra file import, KHÔNG ghi gì vào DB. */
export async function previewImport(text: string): Promise<ImportPreview> {
  const byteLength = new TextEncoder().encode(text).length;
  if (byteLength > MAX_IMPORT_BYTES) {
    throw new Error(
      `File import lớn hơn giới hạn ${Math.round(MAX_IMPORT_BYTES / 1024 / 1024)} MB.`,
    );
  }

  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    throw new Error('File không phải JSON hợp lệ.');
  }

  const parsed = exportBundleSchema.safeParse(raw);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    throw new Error(
      `Dữ liệu import không đúng định dạng: ${first ? `${first.path.join('.')} — ${first.message}` : 'không rõ'}`,
    );
  }
  const bundle = parsed.data;

  const [progress, notes, evidence, checklistRuns, reports, quizAttempts] = await Promise.all([
    getAll<ProgressRecord>('progress'),
    getAll<NoteRecord>('notes'),
    getAll<EvidenceRecord>('evidence'),
    getAll<ChecklistRun>('checklistRuns'),
    getAll<ReportDraft>('reports'),
    getAll<QuizAttempt>('quizAttempts'),
  ]);

  const conflicts: ImportConflict[] = [];
  const collide = <T>(
    store: string,
    existing: T[],
    incoming: T[],
    keyOf: (item: T) => string,
    labelOf: (item: T) => string,
  ) => {
    const existingKeys = new Set(existing.map(keyOf));
    for (const item of incoming) {
      if (existingKeys.has(keyOf(item))) {
        conflicts.push({ store, key: keyOf(item), labelVi: labelOf(item) });
      }
    }
  };

  collide(
    'progress',
    progress,
    bundle.data.progress,
    (p) => p.moduleId,
    (p) => p.moduleId,
  );
  collide(
    'notes',
    notes,
    bundle.data.notes,
    (n) => n.id,
    (n) => n.titleVi || n.id,
  );
  collide(
    'evidence',
    evidence,
    bundle.data.evidence,
    (e) => e.id,
    (e) => e.descriptionVi || e.id,
  );
  collide(
    'checklistRuns',
    checklistRuns,
    bundle.data.checklistRuns,
    (c) => c.id,
    (c) => c.labelVi,
  );
  collide(
    'reports',
    reports,
    bundle.data.reports,
    (r) => r.id,
    (r) => r.title || r.id,
  );
  collide(
    'quizAttempts',
    quizAttempts,
    bundle.data.quizAttempts,
    (q) => q.id,
    (q) => q.quizId,
  );

  return {
    bundle,
    conflicts,
    incomingCounts: {
      progress: bundle.data.progress.length,
      notes: bundle.data.notes.length,
      evidence: bundle.data.evidence.length,
      checklistRuns: bundle.data.checklistRuns.length,
      reports: bundle.data.reports.length,
      quizAttempts: bundle.data.quizAttempts.length,
    },
    existingCounts: {
      progress: progress.length,
      notes: notes.length,
      evidence: evidence.length,
      checklistRuns: checklistRuns.length,
      reports: reports.length,
      quizAttempts: quizAttempts.length,
    },
    schemaVersionMismatch: bundle.schemaVersion !== SCHEMA_VERSION,
  };
}

/** Ghi bundle vào IndexedDB sau khi người dùng chọn chế độ. */
export async function applyImport(bundle: ExportBundle, mode: ImportMode): Promise<void> {
  if (mode === 'overwrite') {
    for (const store of [
      'progress',
      'notes',
      'evidence',
      'checklistRuns',
      'reports',
      'quizAttempts',
    ] as const) {
      await clearStore(store);
    }
  }
  await putMany('progress', bundle.data.progress);
  await putMany('notes', bundle.data.notes);
  await putMany('evidence', bundle.data.evidence);
  await putMany('checklistRuns', bundle.data.checklistRuns);
  await putMany('reports', bundle.data.reports);
  await putMany('quizAttempts', bundle.data.quizAttempts);
  if (bundle.data.profile) await put('profile', bundle.data.profile);
}
