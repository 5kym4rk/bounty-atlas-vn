/**
 * Store ứng dụng, dùng Zustand. Xem IMPLEMENTATION_PLAN.md §2 để biết lý do
 * chọn Zustand thay vì Context + reducer.
 *
 * Store chia theo slice: cài đặt UI, hồ sơ người học, tiến trình, ghi chú,
 * phiên checklist và bản nháp báo cáo. Mọi thay đổi được ghi xuống IndexedDB.
 */
import { create } from 'zustand';
import { clearAllUserData, getAll, getOne, isStorageAvailable, put, remove } from '@/storage/db';
import {
  createDefaultProfile,
  type ChecklistRun,
  type EvidenceRecord,
  type LearnerProfile,
  type NoteRecord,
  type ProgressRecord,
  type ProgressState,
  type QuizAttempt,
  type ReportDraft,
} from '@/storage/schema';

export type ThemeMode = 'light' | 'dark';

interface UiSettings {
  theme: ThemeMode;
  atlasView: 'graph' | 'list';
  showDraftContent: boolean;
}

const SETTINGS_KEY = 'bounty-atlas-vn:settings';

function loadSettings(): UiSettings {
  const fallback: UiSettings = { theme: 'dark', atlasView: 'graph', showDraftContent: true };
  if (typeof localStorage === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<UiSettings>;
    return {
      theme: parsed.theme === 'light' ? 'light' : 'dark',
      atlasView: parsed.atlasView === 'list' ? 'list' : 'graph',
      showDraftContent: parsed.showDraftContent !== false,
    };
  } catch {
    return fallback;
  }
}

function saveSettings(settings: UiSettings): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // LocalStorage có thể bị chặn; cài đặt chỉ là tiện ích nên bỏ qua lỗi.
  }
}

function applyTheme(theme: ThemeMode): void {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

interface AppState {
  ready: boolean;
  storageAvailable: boolean;
  storageError: string | null;

  settings: UiSettings;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  setAtlasView: (view: 'graph' | 'list') => void;
  setShowDraftContent: (value: boolean) => void;

  profile: LearnerProfile | null;
  saveProfile: (patch: Partial<LearnerProfile>) => Promise<void>;
  acknowledgeSafety: () => Promise<void>;

  progress: Record<string, ProgressRecord>;
  setProgress: (moduleId: string, state: ProgressState) => Promise<void>;

  notes: NoteRecord[];
  saveNote: (note: NoteRecord) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;

  evidence: EvidenceRecord[];
  saveEvidence: (record: EvidenceRecord) => Promise<void>;
  deleteEvidence: (id: string) => Promise<void>;

  checklistRuns: ChecklistRun[];
  saveChecklistRun: (run: ChecklistRun) => Promise<void>;
  deleteChecklistRun: (id: string) => Promise<void>;

  reports: ReportDraft[];
  saveReport: (report: ReportDraft) => Promise<void>;
  deleteReport: (id: string) => Promise<void>;

  quizAttempts: QuizAttempt[];
  saveQuizAttempt: (attempt: QuizAttempt) => Promise<void>;

  initialize: () => Promise<void>;
  reload: () => Promise<void>;
  wipeAll: () => Promise<void>;
}

export const useAppStore = create<AppState>((set, get) => ({
  ready: false,
  storageAvailable: true,
  storageError: null,

  settings: loadSettings(),
  setTheme: (theme) => {
    const settings = { ...get().settings, theme };
    saveSettings(settings);
    applyTheme(theme);
    set({ settings });
  },
  toggleTheme: () => get().setTheme(get().settings.theme === 'dark' ? 'light' : 'dark'),
  setAtlasView: (atlasView) => {
    const settings = { ...get().settings, atlasView };
    saveSettings(settings);
    set({ settings });
  },
  setShowDraftContent: (showDraftContent) => {
    const settings = { ...get().settings, showDraftContent };
    saveSettings(settings);
    set({ settings });
  },

  profile: null,
  saveProfile: async (patch) => {
    const now = new Date().toISOString();
    const current = get().profile ?? createDefaultProfile(now);
    const next: LearnerProfile = { ...current, ...patch, id: 'singleton', updatedAt: now };
    set({ profile: next });
    if (get().storageAvailable) await put('profile', next);
  },
  acknowledgeSafety: async () => {
    await get().saveProfile({ safetyAcknowledgedAt: new Date().toISOString() });
  },

  progress: {},
  setProgress: async (moduleId, state) => {
    const now = new Date().toISOString();
    const existing = get().progress[moduleId];
    const record: ProgressRecord = {
      moduleId,
      state,
      updatedAt: now,
      reviewDueAt: existing?.reviewDueAt ?? null,
      minutesSpent: existing?.minutesSpent ?? 0,
    };
    set({ progress: { ...get().progress, [moduleId]: record } });
    if (get().storageAvailable) await put('progress', record);
  },

  notes: [],
  saveNote: async (note) => {
    const others = get().notes.filter((n) => n.id !== note.id);
    set({ notes: [note, ...others] });
    if (get().storageAvailable) await put('notes', note);
  },
  deleteNote: async (id) => {
    set({ notes: get().notes.filter((n) => n.id !== id) });
    if (get().storageAvailable) await remove('notes', id);
  },

  evidence: [],
  saveEvidence: async (record) => {
    const others = get().evidence.filter((e) => e.id !== record.id);
    set({ evidence: [record, ...others] });
    if (get().storageAvailable) await put('evidence', record);
  },
  deleteEvidence: async (id) => {
    set({ evidence: get().evidence.filter((e) => e.id !== id) });
    if (get().storageAvailable) await remove('evidence', id);
  },

  checklistRuns: [],
  saveChecklistRun: async (run) => {
    const others = get().checklistRuns.filter((r) => r.id !== run.id);
    set({ checklistRuns: [run, ...others] });
    if (get().storageAvailable) await put('checklistRuns', run);
  },
  deleteChecklistRun: async (id) => {
    set({ checklistRuns: get().checklistRuns.filter((r) => r.id !== id) });
    if (get().storageAvailable) await remove('checklistRuns', id);
  },

  reports: [],
  saveReport: async (report) => {
    const others = get().reports.filter((r) => r.id !== report.id);
    set({ reports: [report, ...others] });
    if (get().storageAvailable) await put('reports', report);
  },
  deleteReport: async (id) => {
    set({ reports: get().reports.filter((r) => r.id !== id) });
    if (get().storageAvailable) await remove('reports', id);
  },

  quizAttempts: [],
  saveQuizAttempt: async (attempt) => {
    set({ quizAttempts: [attempt, ...get().quizAttempts] });
    if (get().storageAvailable) await put('quizAttempts', attempt);
  },

  initialize: async () => {
    applyTheme(get().settings.theme);
    if (!isStorageAvailable()) {
      set({
        ready: true,
        storageAvailable: false,
        storageError:
          'Trình duyệt không hỗ trợ IndexedDB nên tiến trình học sẽ không được lưu lại.',
      });
      return;
    }
    await get().reload();
  },

  reload: async () => {
    try {
      const [profile, progressList, notes, evidence, checklistRuns, reports, quizAttempts] =
        await Promise.all([
          getOne<LearnerProfile>('profile', 'singleton'),
          getAll<ProgressRecord>('progress'),
          getAll<NoteRecord>('notes'),
          getAll<EvidenceRecord>('evidence'),
          getAll<ChecklistRun>('checklistRuns'),
          getAll<ReportDraft>('reports'),
          getAll<QuizAttempt>('quizAttempts'),
        ]);
      const progress: Record<string, ProgressRecord> = {};
      for (const record of progressList) progress[record.moduleId] = record;
      set({
        ready: true,
        storageAvailable: true,
        storageError: null,
        profile: profile ?? null,
        progress,
        notes,
        evidence,
        checklistRuns,
        reports,
        quizAttempts,
      });
    } catch (error) {
      set({
        ready: true,
        storageAvailable: false,
        storageError:
          error instanceof Error
            ? `Không mở được kho dữ liệu cục bộ: ${error.message}`
            : 'Không mở được kho dữ liệu cục bộ.',
      });
    }
  },

  wipeAll: async () => {
    if (get().storageAvailable) await clearAllUserData();
    set({
      profile: null,
      progress: {},
      notes: [],
      evidence: [],
      checklistRuns: [],
      reports: [],
      quizAttempts: [],
    });
  },
}));

/** Người dùng đã xác nhận tuyên bố an toàn chưa. */
export function useSafetyAcknowledged(): boolean {
  return useAppStore((s) => Boolean(s.profile?.safetyAcknowledgedAt));
}
