/**
 * Schema dữ liệu người học lưu trong IndexedDB. Xem DATA_SCHEMA.md §6.
 */
import { z } from 'zod';

/** Tăng số này mỗi khi thêm store hoặc đổi hình dạng dữ liệu, kèm một migration. */
export const SCHEMA_VERSION = 2;

export const DB_NAME = 'bounty-atlas-vn';

export const STORES = {
  progress: 'progress',
  notes: 'notes',
  evidence: 'evidence',
  checklistRuns: 'checklistRuns',
  reports: 'reports',
  quizAttempts: 'quizAttempts',
  profile: 'profile',
  meta: 'meta',
} as const;

export type StoreName = (typeof STORES)[keyof typeof STORES];

/**
 * Trạng thái học của một module. Không chỉ có "đã đọc" — xem PHẦN V §14
 * của đặc tả: tiến trình phản ánh mức độ thành thạo thật.
 */
export const progressStateSchema = z.enum([
  'not-started',
  'viewed',
  'studied',
  'quiz-passed',
  'lab-guided',
  'lab-unguided',
  'report-written',
  'assessment-passed',
  'needs-review',
  'refreshed',
]);

export type ProgressState = z.infer<typeof progressStateSchema>;

/** Thứ tự tăng dần về độ sâu, dùng để tính coverage và "kiến thức sắp quên". */
export const PROGRESS_ORDER: ProgressState[] = [
  'not-started',
  'viewed',
  'studied',
  'quiz-passed',
  'lab-guided',
  'lab-unguided',
  'report-written',
  'assessment-passed',
];

export const PROGRESS_LABEL_VI: Record<ProgressState, string> = {
  'not-started': 'Chưa bắt đầu',
  viewed: 'Đã xem',
  studied: 'Đã học',
  'quiz-passed': 'Đã làm quiz',
  'lab-guided': 'Đã làm lab có hướng dẫn',
  'lab-unguided': 'Đã làm lab không xem lời giải',
  'report-written': 'Đã viết report',
  'assessment-passed': 'Đã đạt practical assessment',
  'needs-review': 'Cần ôn lại',
  refreshed: 'Đã làm mới kiến thức',
};

export const progressRecordSchema = z.object({
  moduleId: z.string().min(1),
  state: progressStateSchema,
  updatedAt: z.string().min(1),
  /** Thời điểm nên ôn lại (ISO). Null nghĩa là chưa lên lịch. */
  reviewDueAt: z.string().nullable(),
  minutesSpent: z.number().int().min(0),
});
export type ProgressRecord = z.infer<typeof progressRecordSchema>;

export const noteRecordSchema = z.object({
  id: z.string().min(1),
  /** Gắn với module / lab / checklist / report. */
  subjectType: z.enum(['module', 'lab', 'checklist', 'report', 'free']),
  subjectId: z.string().nullable(),
  titleVi: z.string(),
  body: z.string(),
  tags: z.array(z.string()),
  createdAt: z.string().min(1),
  updatedAt: z.string().min(1),
  /** true nếu người dùng đã được cảnh báo nội dung giống credential. */
  sensitiveAcknowledged: z.boolean(),
});
export type NoteRecord = z.infer<typeof noteRecordSchema>;

export const evidenceRecordSchema = z.object({
  id: z.string().min(1),
  subjectType: z.enum(['module', 'lab', 'report']),
  subjectId: z.string().nullable(),
  kind: z.enum(['reference', 'text', 'image']),
  descriptionVi: z.string(),
  /** Với kind = 'reference' đây là mô tả vị trí file; với 'image' là data URL nhỏ. */
  payload: z.string(),
  byteSize: z.number().int().min(0),
  createdAt: z.string().min(1),
});
export type EvidenceRecord = z.infer<typeof evidenceRecordSchema>;

export const checklistItemStateSchema = z.enum([
  'unchecked',
  'checked',
  'not-applicable',
  'needs-review',
  'notable-observation',
  'stopped-scope',
]);
export type ChecklistItemState = z.infer<typeof checklistItemStateSchema>;

export const CHECKLIST_STATE_LABEL_VI: Record<ChecklistItemState, string> = {
  unchecked: 'Chưa kiểm tra',
  checked: 'Đã kiểm tra',
  'not-applicable': 'Không áp dụng',
  'needs-review': 'Cần xem lại',
  'notable-observation': 'Có quan sát đáng chú ý',
  'stopped-scope': 'Đã dừng vì phạm vi',
};

export const checklistRunSchema = z.object({
  id: z.string().min(1),
  checklistIds: z.array(z.string()),
  labelVi: z.string(),
  context: z.object({
    assetType: z.string(),
    feature: z.string(),
    role: z.string(),
    dataType: z.string(),
    trustBoundary: z.string(),
  }),
  items: z.record(z.string(), z.object({ state: checklistItemStateSchema, noteVi: z.string() })),
  createdAt: z.string().min(1),
  updatedAt: z.string().min(1),
});
export type ChecklistRun = z.infer<typeof checklistRunSchema>;

export const reportDraftSchema = z.object({
  id: z.string().min(1),
  program: z.string(),
  asset: z.string(),
  scopeEvidence: z.string(),
  title: z.string(),
  summary: z.string(),
  preconditions: z.string(),
  steps: z.string(),
  actualResult: z.string(),
  expectedResult: z.string(),
  impact: z.string(),
  affectedRoles: z.string(),
  affectedRecords: z.string(),
  dataExposure: z.string(),
  minimalPoc: z.string(),
  safetyActions: z.string(),
  evidence: z.string(),
  cwe: z.string(),
  cvssVector: z.string(),
  vrtCategory: z.string(),
  remediation: z.string(),
  timeline: z.string(),
  disclosureNote: z.string(),
  linkedExerciseId: z.string().nullable(),
  createdAt: z.string().min(1),
  updatedAt: z.string().min(1),
});
export type ReportDraft = z.infer<typeof reportDraftSchema>;

export const quizAttemptSchema = z.object({
  id: z.string().min(1),
  quizId: z.string().min(1),
  moduleId: z.string().min(1),
  scorePercent: z.number().min(0).max(100),
  passed: z.boolean(),
  answers: z.record(z.string(), z.array(z.string())),
  createdAt: z.string().min(1),
});
export type QuizAttempt = z.infer<typeof quizAttemptSchema>;

export const learnerProfileSchema = z.object({
  id: z.literal('singleton'),
  onboardingCompleted: z.boolean(),
  safetyAcknowledgedAt: z.string().nullable(),
  baseLevel: z.enum(['none', 'some-it', 'developer', 'security-adjacent', 'security-pro']),
  knownLanguages: z.array(z.string()),
  interestDomainIds: z.array(z.string()),
  hasDockerOrVm: z.boolean(),
  hasAndroidEnv: z.boolean(),
  hasIosEnv: z.boolean(),
  hasCloudSandbox: z.boolean(),
  hasOwnedHardware: z.boolean(),
  goal: z.enum([
    'general',
    'web-api',
    'mobile',
    'cloud',
    'native',
    'iot',
    'web3',
    'ai',
    'code-review',
  ]),
  hoursPerWeek: z.number().int().min(0).max(80),
  /** Kết quả diagnostic: điểm 0–100 theo domain. */
  skillProfile: z.record(z.string(), z.number()),
  diagnosticCompletedAt: z.string().nullable(),
  createdAt: z.string().min(1),
  updatedAt: z.string().min(1),
});
export type LearnerProfile = z.infer<typeof learnerProfileSchema>;

export const exportBundleSchema = z.object({
  app: z.literal(DB_NAME),
  schemaVersion: z.number().int().positive(),
  exportedAt: z.string().min(1),
  redacted: z.boolean(),
  data: z.object({
    progress: z.array(progressRecordSchema),
    notes: z.array(noteRecordSchema),
    evidence: z.array(evidenceRecordSchema),
    checklistRuns: z.array(checklistRunSchema),
    reports: z.array(reportDraftSchema),
    quizAttempts: z.array(quizAttemptSchema),
    profile: learnerProfileSchema.nullable(),
  }),
});
export type ExportBundle = z.infer<typeof exportBundleSchema>;

export function createDefaultProfile(now: string): LearnerProfile {
  return {
    id: 'singleton',
    onboardingCompleted: false,
    safetyAcknowledgedAt: null,
    baseLevel: 'none',
    knownLanguages: [],
    interestDomainIds: [],
    hasDockerOrVm: false,
    hasAndroidEnv: false,
    hasIosEnv: false,
    hasCloudSandbox: false,
    hasOwnedHardware: false,
    goal: 'general',
    hoursPerWeek: 5,
    skillProfile: {},
    diagnosticCompletedAt: null,
    createdAt: now,
    updatedAt: now,
  };
}
