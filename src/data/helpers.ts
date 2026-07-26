/**
 * Factory dùng khi khai báo dữ liệu.
 *
 * Mục đích là loại bỏ trường lặp lại (mảng rỗng, null) chứ KHÔNG phải để sinh
 * nội dung tự động. Mọi trường mang nội dung — mục tiêu học, safety note,
 * root cause, remediation — vẫn phải khai báo tường minh cho từng mục.
 */
import type {
  CompletionCriterion,
  Concept,
  Lab,
  LearningModule,
  LearningResource,
  LearningTrack,
  Weakness,
} from '@/schemas/entities';

type Required<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;

const emptyModule: Omit<
  LearningModule,
  'id' | 'trackId' | 'titleVi' | 'summaryVi' | 'learningObjectives' | 'safetyNoteVi' | 'difficulty'
> = {
  estimatedHours: null,
  prerequisiteModuleIds: [],
  conceptIds: [],
  weaknessIds: [],
  methodologyVi: [],
  safeImpactProofVi: [],
  requiredResourceIds: [],
  optionalResourceIds: [],
  labIds: [],
  checklistIds: [],
  quizIds: [],
  reportExerciseIds: [],
  remediationTopicIds: [],
  completionCriteria: [],
  contentStatus: 'draft',
  lastReviewed: null,
};

/** Tiêu chí hoàn thành mặc định: đọc hết nội dung module. */
function readCriterion(moduleId: string): CompletionCriterion {
  return {
    id: `${moduleId}-read`,
    labelVi: 'Đọc hết nội dung module và ghi lại ít nhất một câu hỏi còn thắc mắc',
    kind: 'read',
    targetId: null,
  };
}

export function defineModule(
  input: Required<
    LearningModule,
    | 'id'
    | 'trackId'
    | 'titleVi'
    | 'summaryVi'
    | 'difficulty'
    | 'learningObjectives'
    | 'safetyNoteVi'
  >,
): LearningModule {
  const merged = { ...emptyModule, ...input } as LearningModule;
  const criteria: CompletionCriterion[] = [...(input.completionCriteria ?? [])];
  if (criteria.length === 0) criteria.push(readCriterion(input.id));
  for (const quizId of merged.quizIds) {
    if (!criteria.some((c) => c.targetId === quizId)) {
      criteria.push({
        id: `${input.id}-quiz-${quizId}`,
        labelVi: 'Đạt bài tự đánh giá của module',
        kind: 'quiz',
        targetId: quizId,
      });
    }
  }
  for (const labId of merged.labIds) {
    if (!criteria.some((c) => c.targetId === labId)) {
      criteria.push({
        id: `${input.id}-lab-${labId}`,
        labelVi: 'Hoàn thành lab tương ứng trong môi trường hợp pháp',
        kind: 'lab',
        targetId: labId,
      });
    }
  }
  for (const rexId of merged.reportExerciseIds) {
    if (!criteria.some((c) => c.targetId === rexId)) {
      criteria.push({
        id: `${input.id}-report-${rexId}`,
        labelVi: 'Viết bản báo cáo cho tình huống thực hành',
        kind: 'report',
        targetId: rexId,
      });
    }
  }
  merged.completionCriteria = criteria;
  return merged;
}

export function defineTrack(
  input: Required<LearningTrack, 'id' | 'domainId' | 'titleVi' | 'summaryVi' | 'moduleIds'>,
): LearningTrack {
  return {
    prerequisiteTrackIds: [],
    skillIds: [],
    standardIds: [],
    status: 'draft',
    ...input,
  };
}

export function defineConcept(
  input: Required<
    Concept,
    'id' | 'titleVi' | 'definitionVi' | 'whyItMattersVi' | 'architectureContextVi'
  >,
): Concept {
  return {
    commonWeaknessIds: [],
    relatedConceptIds: [],
    standardReferences: [],
    contentStatus: 'draft',
    ...input,
  };
}

export function defineWeakness(
  input: Required<
    Weakness,
    | 'id'
    | 'titleVi'
    | 'rootCauseVi'
    | 'safeValidationPrinciplesVi'
    | 'impactDimensions'
    | 'remediationPrinciplesVi'
  >,
): Weakness {
  return {
    aliases: [],
    cweIds: [],
    capecIds: [],
    owaspReferences: [],
    bugcrowdVrtReferences: [],
    affectedSurfaceIds: [],
    preconditionsVi: [],
    indicatorsVi: [],
    relatedLabIds: [],
    relatedReportExerciseIds: [],
    contentStatus: 'draft',
    ...input,
  };
}

export function defineResource(
  input: Required<
    LearningResource,
    | 'id'
    | 'title'
    | 'url'
    | 'provider'
    | 'descriptionVi'
    | 'resourceType'
    | 'domainIds'
    | 'sourceClass'
    | 'sourceOriginNoteVi'
  >,
): LearningResource {
  return {
    authors: [],
    trackIds: [],
    moduleIds: [],
    language: 'en',
    difficulty: 'mixed',
    accessType: 'free',
    accountRequired: 'unknown',
    handsOn: false,
    licenseNote: null,
    contentReuseAllowed: 'unknown',
    metadataLastUpdated: '2026-07-26',
    lastContentReviewed: null,
    linkLastChecked: null,
    linkStatus: 'unknown',
    contentStatus: 'draft',
    ...input,
  };
}

export function defineLab(
  input: Required<
    Lab,
    | 'id'
    | 'titleVi'
    | 'provider'
    | 'url'
    | 'descriptionVi'
    | 'domainIds'
    | 'difficulty'
    | 'environment'
    | 'allowedTargetsNoteVi'
    | 'safetyNoteVi'
  >,
): Lab {
  return {
    moduleIds: [],
    requiresAccount: 'unknown',
    requiresPayment: false,
    requiresLocalInstall: false,
    estimatedCost: null,
    cleanupRequired: false,
    cleanupInstructionsUrl: null,
    evidenceSuggestionsVi: [
      'Ghi lại bước tái hiện tối thiểu bằng lời, không cần chụp toàn bộ dữ liệu.',
      'Chụp màn hình phần chứng minh tác động, che thông tin định danh nếu có.',
    ],
    solutionPolicy: 'no-solution',
    cloud: null,
    contentStatus: 'draft',
    ...input,
  };
}
