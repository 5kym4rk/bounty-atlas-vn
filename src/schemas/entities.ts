/**
 * Kiểu dữ liệu kiến thức của BountyAtlas VN.
 * Xem DATA_SCHEMA.md. Schema Zod tương ứng nằm ở `./zod.ts`.
 */

export type Difficulty =
  | 'foundation'
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'specialist'
  | 'research';

export type ContentStatus = 'draft' | 'review-needed' | 'verified' | 'outdated' | 'archived';

export type DomainStatus = 'core' | 'advanced' | 'specialist' | 'planned';

export type LinkStatus =
  | 'active'
  | 'redirected'
  | 'login-required'
  | 'blocked'
  | 'rate-limited'
  | 'unavailable'
  | 'timeout'
  | 'unknown';

export type SourceClass =
  | 'official-standard'
  | 'official-vendor'
  | 'project-primary'
  | 'academic'
  | 'community';

export type ResourceType =
  | 'standard'
  | 'specification'
  | 'testing-guide'
  | 'documentation'
  | 'course'
  | 'lab-platform'
  | 'repository'
  | 'book'
  | 'video'
  | 'article'
  | 'taxonomy';

export type LabEnvironment =
  | 'controlled-online'
  | 'browser'
  | 'docker'
  | 'vm'
  | 'android-emulator'
  | 'ios-simulator'
  | 'cloud-owned-account'
  | 'testnet'
  | 'local-chain'
  | 'owned-hardware'
  | 'network-simulator'
  | 'other';

export type ChecklistContext =
  | 'program-policy'
  | 'asset-mapping'
  | 'authentication'
  | 'authorization'
  | 'business-flow'
  | 'web-feature'
  | 'api'
  | 'identity'
  | 'mobile'
  | 'cloud'
  | 'container'
  | 'network'
  | 'desktop'
  | 'binary'
  | 'code-review'
  | 'supply-chain'
  | 'iot'
  | 'wireless'
  | 'automotive'
  | 'ics-ot'
  | 'web3'
  | 'ai'
  | 'privacy'
  | 'reporting';

/** ISO date `YYYY-MM-DD`. */
export type IsoDate = string;

export interface StandardReference {
  standardId: string;
  /** Mã mục trong chuẩn, ví dụ 'API1:2023', 'MASVS-STORAGE-1', 'CWE-639'. */
  sectionId: string;
  noteVi?: string;
}

export interface Standard {
  id: string;
  title: string;
  organization: string;
  url: string;
  descriptionVi: string;
  sourceClass: SourceClass;
}

export interface Skill {
  id: string;
  titleVi: string;
  descriptionVi: string;
  domainIds: string[];
  difficulty: Difficulty;
}

/**
 * Một bước trong lộ trình học của module.
 *
 * Dự án KHÔNG tự viết bài giảng và KHÔNG sao chép nội dung của nguồn. Nội dung
 * chính của mỗi module là danh sách nguồn học uy tín, xếp theo thứ tự nên học;
 * người học bấm vào để mở và học tại chính nguồn gốc.
 *
 * Thứ tự học là vị trí trong mảng, không phải một trường riêng — như vậy thứ tự
 * hiển thị không thể mâu thuẫn với thứ tự lưu trữ.
 */
export interface StudyStep {
  resourceId: string;
  /** `core`: cần học để nắm module. `optional`: mở rộng khi muốn đi sâu. */
  necessity: 'core' | 'optional';
  /** Vì sao học nguồn này, ở đúng bước này. Một câu, do dự án tự viết. */
  roleVi: string;
}

export interface CompletionCriterion {
  id: string;
  labelVi: string;
  kind: 'read' | 'quiz' | 'lab' | 'report' | 'checklist' | 'reflection';
  /** ID của quiz/lab/report exercise/checklist tương ứng, nếu có. */
  targetId: string | null;
}

export interface KnowledgeDomain {
  id: string;
  /** Mã chữ cái theo taxonomy: A..X */
  code: string;
  titleVi: string;
  descriptionVi: string;
  order: number;
  status: DomainStatus;
  trackIds: string[];
  prerequisiteDomainIds: string[];
  /** Bắt buộc không rỗng. */
  safetyNoteVi: string;
  architectureVi: string[];
  attackSurfaceVi: string[];
  trustBoundariesVi: string[];
  /** Định hướng nghề nghiệp — KHÔNG được nói về thu nhập. */
  careerNoteVi: string;
  standardIds: string[];
  toolIds: string[];
  contentStatus: ContentStatus;
  lastReviewed: IsoDate | null;
}

export interface LearningTrack {
  id: string;
  domainId: string;
  titleVi: string;
  summaryVi: string;
  prerequisiteTrackIds: string[];
  moduleIds: string[];
  skillIds: string[];
  standardIds: string[];
  status: ContentStatus;
}

export interface LearningModule {
  id: string;
  trackId: string;
  titleVi: string;
  summaryVi: string;
  difficulty: Difficulty;
  estimatedHours: number | null;
  learningObjectives: string[];
  /**
   * Lộ trình học của module: các nguồn ngoài, xếp theo thứ tự nên học.
   * Đây là nội dung chính của module. Bắt buộc có ít nhất một bước.
   */
  studyPlan: StudyStep[];
  prerequisiteModuleIds: string[];
  conceptIds: string[];
  weaknessIds: string[];
  /** Bước 6 của chuỗi 12 bước: phương pháp kiểm thử. */
  methodologyVi: string[];
  /** Bước 9: cách chứng minh tác động một cách an toàn. */
  safeImpactProofVi: string[];
  labIds: string[];
  checklistIds: string[];
  quizIds: string[];
  reportExerciseIds: string[];
  /** Bước 10: chủ đề khắc phục (mô tả tự do, tiếng Việt). */
  remediationTopicIds: string[];
  safetyNoteVi: string;
  completionCriteria: CompletionCriterion[];
  contentStatus: ContentStatus;
  lastReviewed: IsoDate | null;
}

export interface Concept {
  id: string;
  titleVi: string;
  definitionVi: string;
  whyItMattersVi: string;
  architectureContextVi: string;
  commonWeaknessIds: string[];
  relatedConceptIds: string[];
  standardReferences: StandardReference[];
  contentStatus: ContentStatus;
}

export interface Weakness {
  id: string;
  titleVi: string;
  aliases: string[];
  cweIds: string[];
  capecIds: string[];
  owaspReferences: string[];
  bugcrowdVrtReferences: string[];
  affectedSurfaceIds: string[];
  rootCauseVi: string;
  preconditionsVi: string[];
  indicatorsVi: string[];
  /** Nguyên tắc xác minh an toàn — KHÔNG chứa payload. */
  safeValidationPrinciplesVi: string[];
  impactDimensions: string[];
  remediationPrinciplesVi: string[];
  relatedLabIds: string[];
  relatedReportExerciseIds: string[];
  contentStatus: ContentStatus;
}

export interface LearningResource {
  id: string;
  title: string;
  url: string;
  provider: string;
  authors: string[];
  descriptionVi: string;
  resourceType: ResourceType;
  domainIds: string[];
  trackIds: string[];
  moduleIds: string[];
  language: 'vi' | 'en' | 'mixed' | 'unknown';
  difficulty: Difficulty | 'mixed';
  accessType: 'free' | 'paid' | 'mixed' | 'unknown';
  accountRequired: boolean | 'unknown';
  handsOn: boolean;
  sourceClass: SourceClass;
  sourceOriginNoteVi: string;
  licenseNote: string | null;
  contentReuseAllowed: boolean | 'unknown';
  metadataLastUpdated: IsoDate | null;
  lastContentReviewed: IsoDate | null;
  linkLastChecked: IsoDate | null;
  linkStatus: LinkStatus;
  contentStatus: ContentStatus;
}

/** Metadata bắt buộc cho lab chạy trên tài khoản cloud của người học. */
export interface CloudLabMetadata {
  estimatedCost: string;
  billingWarning: string;
  requiresDedicatedAccount: boolean;
  cleanupRequired: boolean;
  cleanupInstructionsUrl: string | null;
  regionNote: string;
  productionWarning: string;
}

export interface Lab {
  id: string;
  titleVi: string;
  provider: string;
  url: string;
  descriptionVi: string;
  domainIds: string[];
  moduleIds: string[];
  difficulty: Difficulty;
  environment: LabEnvironment;
  requiresAccount: boolean | 'unknown';
  requiresPayment: boolean | 'unknown';
  requiresLocalInstall: boolean;
  estimatedCost: string | null;
  cleanupRequired: boolean;
  cleanupInstructionsUrl: string | null;
  /** Bắt buộc không rỗng: mục tiêu nào được phép đụng vào. */
  allowedTargetsNoteVi: string;
  safetyNoteVi: string;
  evidenceSuggestionsVi: string[];
  solutionPolicy: 'no-solution' | 'external-official-solution';
  /** Bắt buộc khi environment === 'cloud-owned-account'. */
  cloud: CloudLabMetadata | null;
  contentStatus: ContentStatus;
}

export interface ChecklistItem {
  id: string;
  /** Câu hỏi hoặc quan sát — KHÔNG phải payload. */
  questionVi: string;
  whyVi: string;
  /** Điều kiện áp dụng để Checklist Workspace lọc theo ngữ cảnh. */
  appliesWhen: {
    assetTypes: string[];
    roles: string[];
    dataTypes: string[];
  };
  relatedWeaknessIds: string[];
  stopConditionVi: string | null;
}

export interface TestingChecklist {
  id: string;
  titleVi: string;
  domainId: string;
  context: ChecklistContext;
  items: ChecklistItem[];
  safetyNoteVi: string;
}

export interface QuizOption {
  id: string;
  textVi: string;
}

export interface QuizQuestion {
  id: string;
  promptVi: string;
  /** Đoạn request/log/code để đọc hiểu, không phải mục tiêu thật. */
  contextBlock: { language: string; content: string } | null;
  options: QuizOption[];
  correctOptionIds: string[];
  explanationVi: string;
  difficulty: Difficulty;
}

export interface Quiz {
  id: string;
  moduleId: string;
  titleVi: string;
  questions: QuizQuestion[];
  passingScorePercent: number;
  randomize: boolean;
}

export interface PracticalAssessment {
  id: string;
  titleVi: string;
  moduleIds: string[];
  labId: string;
  hiddenCategory: boolean;
  requiredEvidence: string[];
  reportExerciseId: string;
}

export interface ReportRubricItem {
  id: string;
  criterionVi: string;
  maxPoints: number;
  guidanceVi: string;
}

export interface ReportExercise {
  id: string;
  titleVi: string;
  scenarioVi: string;
  assetVi: string;
  scopeVi: string;
  evidenceVi: string[];
  expectedSections: string[];
  rubric: ReportRubricItem[];
  sampleAnswerMode: 'hidden-until-submit' | 'not-provided';
  sampleAnswerVi: string | null;
}

export interface Tool {
  id: string;
  name: string;
  purposeVi: string;
  domainIds: string[];
  officialUrl: string;
  operatingSystems: string[];
  license: string;
  difficulty: Difficulty;
  relatedLabIds: string[];
  limitationsVi: string[];
  commonMistakesVi: string[];
  /** Kết luận KHÔNG được suy ra chỉ từ output của công cụ. */
  notEvidenceForVi: string[];
  safeUsageVi: string[];
  contentStatus: ContentStatus;
}

export interface TriageScenarioChoice {
  id: string;
  labelVi: string;
  isBest: boolean;
  feedbackVi: string;
}

export interface TriageScenario {
  id: string;
  titleVi: string;
  category:
    | 'missing-steps'
    | 'unclear-scope'
    | 'duplicate'
    | 'informative'
    | 'scanner-only'
    | 'no-impact'
    | 'overclaim'
    | 'excessive-data'
    | 'high-quality'
    | 'failed-retest'
    | 'evidence-request';
  submissionVi: string;
  triagerNoteVi: string;
  choices: TriageScenarioChoice[];
  lessonVi: string;
  relatedModuleIds: string[];
}

export interface LearningPath {
  id: string;
  titleVi: string;
  summaryVi: string;
  audienceVi: string;
  /** Chuỗi domain/track theo thứ tự gợi ý. */
  steps: { label: string; domainId: string | null }[];
}

/** Toàn bộ dataset, dùng cho validator, script và store. */
export interface KnowledgeDataset {
  domains: KnowledgeDomain[];
  tracks: LearningTrack[];
  modules: LearningModule[];
  concepts: Concept[];
  weaknesses: Weakness[];
  resources: LearningResource[];
  labs: Lab[];
  tools: Tool[];
  checklists: TestingChecklist[];
  quizzes: Quiz[];
  assessments: PracticalAssessment[];
  reportExercises: ReportExercise[];
  triageScenarios: TriageScenario[];
  standards: Standard[];
  skills: Skill[];
  learningPaths: LearningPath[];
}
