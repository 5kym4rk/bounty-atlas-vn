/**
 * Schema Zod cho dữ liệu kiến thức.
 *
 * Mỗi schema được khai báo là `z.ZodType<T>` với T là interface tương ứng trong
 * `entities.ts`, nên nếu interface và schema lệch nhau thì biên dịch sẽ báo lỗi.
 */
import { z } from 'zod';
import type {
  ChecklistItem,
  CloudLabMetadata,
  CompletionCriterion,
  Concept,
  KnowledgeDomain,
  Lab,
  LessonSection,
  LearningModule,
  LearningPath,
  LearningResource,
  LearningTrack,
  PracticalAssessment,
  Quiz,
  QuizQuestion,
  ReportExercise,
  Skill,
  Standard,
  StandardReference,
  TestingChecklist,
  Tool,
  TriageScenario,
  Weakness,
} from './entities';

export const ID_PATTERN = /^[a-z]{2,4}-[a-z0-9-]+$/;
export const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

const id = (prefix: string) =>
  z
    .string()
    .regex(ID_PATTERN, 'ID phải là kebab-case ASCII dạng "pre-xxx"')
    .refine((v) => v.startsWith(`${prefix}-`), `ID phải bắt đầu bằng "${prefix}-"`);

const refId = z.string().regex(ID_PATTERN, 'Tham chiếu ID không đúng định dạng');

const isoDate = z.string().regex(ISO_DATE_PATTERN, 'Ngày phải theo định dạng YYYY-MM-DD');
const nullableIsoDate = isoDate.nullable();

/** URL an toàn: chỉ https, hoặc http trên localhost cho lab chạy cục bộ. */
export const safeUrl = z.string().refine((value) => {
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    return false;
  }
  if (parsed.protocol === 'https:') return true;
  if (parsed.protocol === 'http:') {
    return parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1';
  }
  return false;
}, 'URL phải dùng https (hoặc http://localhost cho lab cục bộ). javascript:, data:, vbscript: bị cấm.');

const nonEmptyText = z.string().trim().min(1, 'Không được để trống');

export const difficultySchema = z.enum([
  'foundation',
  'beginner',
  'intermediate',
  'advanced',
  'specialist',
  'research',
]);

export const contentStatusSchema = z.enum([
  'draft',
  'review-needed',
  'verified',
  'outdated',
  'archived',
]);

export const domainStatusSchema = z.enum(['core', 'advanced', 'specialist', 'planned']);

export const linkStatusSchema = z.enum([
  'active',
  'redirected',
  'login-required',
  'blocked',
  'rate-limited',
  'unavailable',
  'timeout',
  'unknown',
]);

export const sourceClassSchema = z.enum([
  'official-standard',
  'official-vendor',
  'project-primary',
  'academic',
  'community',
]);

export const resourceTypeSchema = z.enum([
  'standard',
  'specification',
  'testing-guide',
  'documentation',
  'course',
  'lab-platform',
  'repository',
  'book',
  'video',
  'article',
  'taxonomy',
]);

export const labEnvironmentSchema = z.enum([
  'controlled-online',
  'browser',
  'docker',
  'vm',
  'android-emulator',
  'ios-simulator',
  'cloud-owned-account',
  'testnet',
  'local-chain',
  'owned-hardware',
  'network-simulator',
  'other',
]);

export const checklistContextSchema = z.enum([
  'program-policy',
  'asset-mapping',
  'authentication',
  'authorization',
  'business-flow',
  'web-feature',
  'api',
  'identity',
  'mobile',
  'cloud',
  'container',
  'network',
  'desktop',
  'binary',
  'code-review',
  'supply-chain',
  'iot',
  'wireless',
  'automotive',
  'ics-ot',
  'web3',
  'ai',
  'privacy',
  'reporting',
]);

export const standardReferenceSchema: z.ZodType<StandardReference> = z.object({
  standardId: refId,
  sectionId: z.string().min(1),
  noteVi: z.string().optional(),
});

export const standardSchema: z.ZodType<Standard> = z.object({
  id: id('std'),
  title: nonEmptyText,
  organization: nonEmptyText,
  url: safeUrl,
  descriptionVi: nonEmptyText,
  sourceClass: sourceClassSchema,
});

export const skillSchema: z.ZodType<Skill> = z.object({
  id: id('skl'),
  titleVi: nonEmptyText,
  descriptionVi: nonEmptyText,
  domainIds: z.array(refId).min(1),
  difficulty: difficultySchema,
});

export const lessonSectionSchema: z.ZodType<LessonSection> = z.object({
  headingVi: nonEmptyText,
  paragraphsVi: z.array(nonEmptyText).min(1, 'Mỗi phần bài học phải có ít nhất một đoạn'),
  bulletsVi: z.array(nonEmptyText).optional(),
  example: z
    .object({
      language: z.string().min(1),
      content: z.string().min(1),
      captionVi: nonEmptyText,
    })
    .optional(),
});

export const completionCriterionSchema: z.ZodType<CompletionCriterion> = z.object({
  id: z.string().min(1),
  labelVi: nonEmptyText,
  kind: z.enum(['read', 'quiz', 'lab', 'report', 'checklist', 'reflection']),
  targetId: refId.nullable(),
});

export const knowledgeDomainSchema: z.ZodType<KnowledgeDomain> = z.object({
  id: id('dom'),
  code: z.string().regex(/^[A-Z]$/, 'Mã domain phải là một chữ cái hoa'),
  titleVi: nonEmptyText,
  descriptionVi: nonEmptyText,
  order: z.number().int().positive(),
  status: domainStatusSchema,
  trackIds: z.array(refId),
  prerequisiteDomainIds: z.array(refId),
  safetyNoteVi: nonEmptyText,
  architectureVi: z.array(nonEmptyText).min(1),
  attackSurfaceVi: z.array(nonEmptyText).min(1),
  trustBoundariesVi: z.array(nonEmptyText).min(1),
  careerNoteVi: nonEmptyText,
  standardIds: z.array(refId),
  toolIds: z.array(refId),
  contentStatus: contentStatusSchema,
  lastReviewed: nullableIsoDate,
});

export const learningTrackSchema: z.ZodType<LearningTrack> = z.object({
  id: id('trk'),
  domainId: refId,
  titleVi: nonEmptyText,
  summaryVi: nonEmptyText,
  prerequisiteTrackIds: z.array(refId),
  moduleIds: z.array(refId).min(1),
  skillIds: z.array(refId),
  standardIds: z.array(refId),
  status: contentStatusSchema,
});

export const learningModuleSchema: z.ZodType<LearningModule> = z.object({
  id: id('mod'),
  trackId: refId,
  titleVi: nonEmptyText,
  summaryVi: nonEmptyText,
  difficulty: difficultySchema,
  estimatedHours: z.number().positive().nullable(),
  learningObjectives: z.array(nonEmptyText).min(1, 'Module phải có ít nhất một mục tiêu học'),
  lessonVi: z.array(lessonSectionSchema).min(1, 'Module phải có thân bài học'),
  prerequisiteModuleIds: z.array(refId),
  conceptIds: z.array(refId),
  weaknessIds: z.array(refId),
  methodologyVi: z.array(nonEmptyText),
  safeImpactProofVi: z.array(nonEmptyText),
  requiredResourceIds: z.array(refId),
  optionalResourceIds: z.array(refId),
  labIds: z.array(refId),
  checklistIds: z.array(refId),
  quizIds: z.array(refId),
  reportExerciseIds: z.array(refId),
  remediationTopicIds: z.array(z.string().min(1)),
  safetyNoteVi: nonEmptyText,
  completionCriteria: z.array(completionCriterionSchema).min(1),
  contentStatus: contentStatusSchema,
  lastReviewed: nullableIsoDate,
});

export const conceptSchema: z.ZodType<Concept> = z.object({
  id: id('cpt'),
  titleVi: nonEmptyText,
  definitionVi: nonEmptyText,
  whyItMattersVi: nonEmptyText,
  architectureContextVi: nonEmptyText,
  commonWeaknessIds: z.array(refId),
  relatedConceptIds: z.array(refId),
  standardReferences: z.array(standardReferenceSchema),
  contentStatus: contentStatusSchema,
});

export const weaknessSchema: z.ZodType<Weakness> = z.object({
  id: id('wkn'),
  titleVi: nonEmptyText,
  aliases: z.array(z.string().min(1)),
  cweIds: z.array(z.string().regex(/^CWE-\d+$/, 'CWE ID phải dạng CWE-123')),
  capecIds: z.array(z.string().regex(/^CAPEC-\d+$/, 'CAPEC ID phải dạng CAPEC-123')),
  owaspReferences: z.array(z.string().min(1)),
  bugcrowdVrtReferences: z.array(z.string().min(1)),
  affectedSurfaceIds: z.array(refId),
  rootCauseVi: nonEmptyText,
  preconditionsVi: z.array(nonEmptyText),
  indicatorsVi: z.array(nonEmptyText),
  safeValidationPrinciplesVi: z.array(nonEmptyText).min(1),
  impactDimensions: z.array(nonEmptyText).min(1),
  remediationPrinciplesVi: z
    .array(nonEmptyText)
    .min(1, 'Mỗi weakness phải có nguyên tắc khắc phục'),
  relatedLabIds: z.array(refId),
  relatedReportExerciseIds: z.array(refId),
  contentStatus: contentStatusSchema,
});

export const learningResourceSchema: z.ZodType<LearningResource> = z.object({
  id: id('res'),
  title: nonEmptyText,
  url: safeUrl,
  provider: nonEmptyText,
  authors: z.array(z.string().min(1)),
  descriptionVi: nonEmptyText,
  resourceType: resourceTypeSchema,
  domainIds: z.array(refId).min(1),
  trackIds: z.array(refId),
  moduleIds: z.array(refId),
  language: z.enum(['vi', 'en', 'mixed', 'unknown']),
  difficulty: z.union([difficultySchema, z.literal('mixed')]),
  accessType: z.enum(['free', 'paid', 'mixed', 'unknown']),
  accountRequired: z.union([z.boolean(), z.literal('unknown')]),
  handsOn: z.boolean(),
  sourceClass: sourceClassSchema,
  sourceOriginNoteVi: nonEmptyText,
  licenseNote: z.string().nullable(),
  contentReuseAllowed: z.union([z.boolean(), z.literal('unknown')]),
  metadataLastUpdated: nullableIsoDate,
  lastContentReviewed: nullableIsoDate,
  linkLastChecked: nullableIsoDate,
  linkStatus: linkStatusSchema,
  contentStatus: contentStatusSchema,
});

export const cloudLabMetadataSchema: z.ZodType<CloudLabMetadata> = z.object({
  estimatedCost: nonEmptyText,
  billingWarning: nonEmptyText,
  requiresDedicatedAccount: z.boolean(),
  cleanupRequired: z.boolean(),
  cleanupInstructionsUrl: safeUrl.nullable(),
  regionNote: nonEmptyText,
  productionWarning: nonEmptyText,
});

export const labSchema: z.ZodType<Lab> = z.object({
  id: id('lab'),
  titleVi: nonEmptyText,
  provider: nonEmptyText,
  url: safeUrl,
  descriptionVi: nonEmptyText,
  domainIds: z.array(refId).min(1),
  moduleIds: z.array(refId),
  difficulty: difficultySchema,
  environment: labEnvironmentSchema,
  requiresAccount: z.union([z.boolean(), z.literal('unknown')]),
  requiresPayment: z.union([z.boolean(), z.literal('unknown')]),
  requiresLocalInstall: z.boolean(),
  estimatedCost: z.string().nullable(),
  cleanupRequired: z.boolean(),
  cleanupInstructionsUrl: safeUrl.nullable(),
  allowedTargetsNoteVi: nonEmptyText,
  safetyNoteVi: nonEmptyText,
  evidenceSuggestionsVi: z.array(nonEmptyText),
  solutionPolicy: z.enum(['no-solution', 'external-official-solution']),
  cloud: cloudLabMetadataSchema.nullable(),
  contentStatus: contentStatusSchema,
});

export const checklistItemSchema: z.ZodType<ChecklistItem> = z.object({
  id: z.string().min(1),
  questionVi: nonEmptyText,
  whyVi: nonEmptyText,
  appliesWhen: z.object({
    assetTypes: z.array(z.string().min(1)),
    roles: z.array(z.string().min(1)),
    dataTypes: z.array(z.string().min(1)),
  }),
  relatedWeaknessIds: z.array(refId),
  stopConditionVi: z.string().nullable(),
});

export const testingChecklistSchema: z.ZodType<TestingChecklist> = z.object({
  id: id('chk'),
  titleVi: nonEmptyText,
  domainId: refId,
  context: checklistContextSchema,
  items: z.array(checklistItemSchema).min(1),
  safetyNoteVi: nonEmptyText,
});

export const quizQuestionSchema: z.ZodType<QuizQuestion> = z
  .object({
    id: z.string().min(1),
    promptVi: nonEmptyText,
    contextBlock: z.object({ language: z.string().min(1), content: z.string().min(1) }).nullable(),
    options: z.array(z.object({ id: z.string().min(1), textVi: nonEmptyText })).min(2),
    correctOptionIds: z.array(z.string().min(1)).min(1),
    explanationVi: nonEmptyText,
    difficulty: difficultySchema,
  })
  .refine(
    (q) => q.correctOptionIds.every((cid) => q.options.some((o) => o.id === cid)),
    'Đáp án đúng phải trỏ tới một option có thật',
  );

export const quizSchema: z.ZodType<Quiz> = z.object({
  id: id('qz'),
  moduleId: refId,
  titleVi: nonEmptyText,
  questions: z.array(quizQuestionSchema).min(1),
  passingScorePercent: z.number().int().min(1).max(100),
  randomize: z.boolean(),
});

export const practicalAssessmentSchema: z.ZodType<PracticalAssessment> = z.object({
  id: id('pas'),
  titleVi: nonEmptyText,
  moduleIds: z.array(refId).min(1),
  labId: refId,
  hiddenCategory: z.boolean(),
  requiredEvidence: z.array(nonEmptyText).min(1),
  reportExerciseId: refId,
});

export const reportExerciseSchema: z.ZodType<ReportExercise> = z.object({
  id: id('rex'),
  titleVi: nonEmptyText,
  scenarioVi: nonEmptyText,
  assetVi: nonEmptyText,
  scopeVi: nonEmptyText,
  evidenceVi: z.array(nonEmptyText),
  expectedSections: z.array(nonEmptyText).min(1),
  rubric: z
    .array(
      z.object({
        id: z.string().min(1),
        criterionVi: nonEmptyText,
        maxPoints: z.number().int().positive(),
        guidanceVi: nonEmptyText,
      }),
    )
    .min(1, 'Report exercise phải có rubric'),
  sampleAnswerMode: z.enum(['hidden-until-submit', 'not-provided']),
  sampleAnswerVi: z.string().nullable(),
});

export const toolSchema: z.ZodType<Tool> = z.object({
  id: id('tool'),
  name: nonEmptyText,
  purposeVi: nonEmptyText,
  domainIds: z.array(refId).min(1),
  officialUrl: safeUrl,
  operatingSystems: z.array(z.string().min(1)).min(1),
  license: nonEmptyText,
  difficulty: difficultySchema,
  relatedLabIds: z.array(refId),
  limitationsVi: z.array(nonEmptyText).min(1),
  commonMistakesVi: z.array(nonEmptyText).min(1),
  notEvidenceForVi: z.array(nonEmptyText).min(1),
  safeUsageVi: z.array(nonEmptyText).min(1),
  contentStatus: contentStatusSchema,
});

export const triageScenarioSchema: z.ZodType<TriageScenario> = z
  .object({
    id: id('trg'),
    titleVi: nonEmptyText,
    category: z.enum([
      'missing-steps',
      'unclear-scope',
      'duplicate',
      'informative',
      'scanner-only',
      'no-impact',
      'overclaim',
      'excessive-data',
      'high-quality',
      'failed-retest',
      'evidence-request',
    ]),
    submissionVi: nonEmptyText,
    triagerNoteVi: nonEmptyText,
    choices: z
      .array(
        z.object({
          id: z.string().min(1),
          labelVi: nonEmptyText,
          isBest: z.boolean(),
          feedbackVi: nonEmptyText,
        }),
      )
      .min(2),
    lessonVi: nonEmptyText,
    relatedModuleIds: z.array(refId),
  })
  .refine(
    (s) => s.choices.some((c) => c.isBest),
    'Mỗi tình huống triage phải có một lựa chọn tốt nhất',
  );

export const learningPathSchema: z.ZodType<LearningPath> = z.object({
  id: id('pth'),
  titleVi: nonEmptyText,
  summaryVi: nonEmptyText,
  audienceVi: nonEmptyText,
  steps: z.array(z.object({ label: nonEmptyText, domainId: refId.nullable() })).min(2),
});
