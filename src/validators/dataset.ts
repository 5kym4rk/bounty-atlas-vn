/**
 * Validator dữ liệu kiến thức.
 *
 * Dùng chung bởi `scripts/validate-data` và bộ test. Mọi ràng buộc trong
 * DATA_SCHEMA.md §5 được thực thi ở đây.
 */
import { z } from 'zod';
import type { KnowledgeDataset } from '@/schemas/entities';
import {
  ISO_DATE_PATTERN,
  knowledgeDomainSchema,
  labSchema,
  learningModuleSchema,
  learningPathSchema,
  learningResourceSchema,
  learningTrackSchema,
  practicalAssessmentSchema,
  quizSchema,
  reportExerciseSchema,
  skillSchema,
  standardSchema,
  testingChecklistSchema,
  toolSchema,
  triageScenarioSchema,
  weaknessSchema,
  conceptSchema,
} from '@/schemas/zod';
import { findCycles } from '@/utils/graph';
import { isSafeExternalUrl } from '@/utils/url';

export type IssueSeverity = 'error' | 'warning';

export interface ValidationIssue {
  code: string;
  severity: IssueSeverity;
  entity: string;
  id: string;
  messageVi: string;
}

export interface ValidationResult {
  issues: ValidationIssue[];
  errorCount: number;
  warningCount: number;
  ok: boolean;
}

const err = (code: string, entity: string, id: string, messageVi: string): ValidationIssue => ({
  code,
  severity: 'error',
  entity,
  id,
  messageVi,
});

const warn = (code: string, entity: string, id: string, messageVi: string): ValidationIssue => ({
  code,
  severity: 'warning',
  entity,
  id,
  messageVi,
});

/** Cụm từ bị cấm xuất hiện trong dữ liệu. Xem SAFETY_MODEL.md §6. */
const FORBIDDEN_CONTENT_PATTERNS: { pattern: RegExp; reasonVi: string }[] = [
  {
    pattern: /\bcredential stuffing (?:script|tool|list)\b/i,
    reasonVi: 'công cụ credential stuffing',
  },
  {
    pattern: /\b(?:cách|huong dan|hướng dẫn) (?:gửi|gui) phishing\b/i,
    reasonVi: 'hướng dẫn phishing',
  },
  { pattern: /\bmalware (?:builder|dropper|loader)\b/i, reasonVi: 'công cụ tạo malware' },
  { pattern: /\b(?:ddos|dos) (?:script|tool|booter|stresser)\b/i, reasonVi: 'công cụ DoS/DDoS' },
  { pattern: /\b(?:bypass|evade) (?:edr|av|antivirus|detection)\b/i, reasonVi: 'né phát hiện' },
  { pattern: /\blời giải (?:đầy đủ|chi tiết) của lab\b/i, reasonVi: 'sao chép lời giải lab' },
];

/** Ngày quá hạn rà soát (tháng). */
export const REVIEW_STALE_MONTHS = 12;

function collectIds(dataset: KnowledgeDataset): Map<string, string> {
  const owner = new Map<string, string>();
  const add = (entity: string, ids: string[]) => {
    for (const id of ids) {
      if (!owner.has(id)) owner.set(id, entity);
    }
  };
  add(
    'domain',
    dataset.domains.map((d) => d.id),
  );
  add(
    'track',
    dataset.tracks.map((t) => t.id),
  );
  add(
    'module',
    dataset.modules.map((m) => m.id),
  );
  add(
    'concept',
    dataset.concepts.map((c) => c.id),
  );
  add(
    'weakness',
    dataset.weaknesses.map((w) => w.id),
  );
  add(
    'resource',
    dataset.resources.map((r) => r.id),
  );
  add(
    'lab',
    dataset.labs.map((l) => l.id),
  );
  add(
    'tool',
    dataset.tools.map((t) => t.id),
  );
  add(
    'checklist',
    dataset.checklists.map((c) => c.id),
  );
  add(
    'quiz',
    dataset.quizzes.map((q) => q.id),
  );
  add(
    'assessment',
    dataset.assessments.map((a) => a.id),
  );
  add(
    'reportExercise',
    dataset.reportExercises.map((r) => r.id),
  );
  add(
    'triageScenario',
    dataset.triageScenarios.map((t) => t.id),
  );
  add(
    'standard',
    dataset.standards.map((s) => s.id),
  );
  add(
    'skill',
    dataset.skills.map((s) => s.id),
  );
  add(
    'learningPath',
    dataset.learningPaths.map((p) => p.id),
  );
  return owner;
}

function checkDuplicateIds(dataset: KnowledgeDataset): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const seen = new Map<string, string>();
  const scan = (entity: string, ids: string[]) => {
    for (const id of ids) {
      const previous = seen.get(id);
      if (previous) {
        issues.push(err('DUPLICATE_ID', entity, id, `ID trùng với ${previous} đã dùng trước đó.`));
      } else {
        seen.set(id, entity);
      }
    }
  };
  scan(
    'domain',
    dataset.domains.map((d) => d.id),
  );
  scan(
    'track',
    dataset.tracks.map((t) => t.id),
  );
  scan(
    'module',
    dataset.modules.map((m) => m.id),
  );
  scan(
    'concept',
    dataset.concepts.map((c) => c.id),
  );
  scan(
    'weakness',
    dataset.weaknesses.map((w) => w.id),
  );
  scan(
    'resource',
    dataset.resources.map((r) => r.id),
  );
  scan(
    'lab',
    dataset.labs.map((l) => l.id),
  );
  scan(
    'tool',
    dataset.tools.map((t) => t.id),
  );
  scan(
    'checklist',
    dataset.checklists.map((c) => c.id),
  );
  scan(
    'quiz',
    dataset.quizzes.map((q) => q.id),
  );
  scan(
    'assessment',
    dataset.assessments.map((a) => a.id),
  );
  scan(
    'reportExercise',
    dataset.reportExercises.map((r) => r.id),
  );
  scan(
    'triageScenario',
    dataset.triageScenarios.map((t) => t.id),
  );
  scan(
    'standard',
    dataset.standards.map((s) => s.id),
  );
  scan(
    'skill',
    dataset.skills.map((s) => s.id),
  );
  scan(
    'learningPath',
    dataset.learningPaths.map((p) => p.id),
  );
  return issues;
}

function zodIssues<T>(
  entity: string,
  schema: z.ZodType<T>,
  items: T[],
  idOf: (item: T) => string,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  for (const item of items) {
    const parsed = schema.safeParse(item);
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const path = issue.path.join('.') || '(gốc)';
        issues.push(err('SCHEMA', entity, idOf(item), `${path}: ${issue.message}`));
      }
    }
  }
  return issues;
}

function checkReferences(dataset: KnowledgeDataset): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const known = collectIds(dataset);
  const ref = (entity: string, id: string, field: string, targets: string[]) => {
    for (const target of targets) {
      if (!known.has(target)) {
        issues.push(
          err('DANGLING_REF', entity, id, `${field} trỏ tới ID không tồn tại: ${target}`),
        );
      }
    }
  };

  for (const d of dataset.domains) {
    ref('domain', d.id, 'trackIds', d.trackIds);
    ref('domain', d.id, 'prerequisiteDomainIds', d.prerequisiteDomainIds);
    ref('domain', d.id, 'standardIds', d.standardIds);
    ref('domain', d.id, 'toolIds', d.toolIds);
  }
  for (const t of dataset.tracks) {
    ref('track', t.id, 'domainId', [t.domainId]);
    ref('track', t.id, 'moduleIds', t.moduleIds);
    ref('track', t.id, 'prerequisiteTrackIds', t.prerequisiteTrackIds);
    ref('track', t.id, 'skillIds', t.skillIds);
    ref('track', t.id, 'standardIds', t.standardIds);
  }
  for (const m of dataset.modules) {
    ref('module', m.id, 'trackId', [m.trackId]);
    ref('module', m.id, 'conceptIds', m.conceptIds);
    ref('module', m.id, 'weaknessIds', m.weaknessIds);
    ref('module', m.id, 'prerequisiteModuleIds', m.prerequisiteModuleIds);
    ref('module', m.id, 'requiredResourceIds', m.requiredResourceIds);
    ref('module', m.id, 'optionalResourceIds', m.optionalResourceIds);
    ref('module', m.id, 'labIds', m.labIds);
    ref('module', m.id, 'checklistIds', m.checklistIds);
    ref('module', m.id, 'quizIds', m.quizIds);
    ref('module', m.id, 'reportExerciseIds', m.reportExerciseIds);
  }
  for (const c of dataset.concepts) {
    ref('concept', c.id, 'commonWeaknessIds', c.commonWeaknessIds);
    ref('concept', c.id, 'relatedConceptIds', c.relatedConceptIds);
    ref(
      'concept',
      c.id,
      'standardReferences',
      c.standardReferences.map((s) => s.standardId),
    );
  }
  for (const w of dataset.weaknesses) {
    ref('weakness', w.id, 'relatedLabIds', w.relatedLabIds);
    ref('weakness', w.id, 'relatedReportExerciseIds', w.relatedReportExerciseIds);
  }
  for (const r of dataset.resources) {
    ref('resource', r.id, 'domainIds', r.domainIds);
    ref('resource', r.id, 'trackIds', r.trackIds);
    ref('resource', r.id, 'moduleIds', r.moduleIds);
  }
  for (const l of dataset.labs) {
    ref('lab', l.id, 'domainIds', l.domainIds);
    ref('lab', l.id, 'moduleIds', l.moduleIds);
  }
  for (const t of dataset.tools) {
    ref('tool', t.id, 'domainIds', t.domainIds);
    ref('tool', t.id, 'relatedLabIds', t.relatedLabIds);
  }
  for (const c of dataset.checklists) {
    ref('checklist', c.id, 'domainId', [c.domainId]);
    for (const item of c.items) {
      ref('checklist', c.id, `items.${item.id}.relatedWeaknessIds`, item.relatedWeaknessIds);
    }
  }
  for (const q of dataset.quizzes) ref('quiz', q.id, 'moduleId', [q.moduleId]);
  for (const a of dataset.assessments) {
    ref('assessment', a.id, 'moduleIds', a.moduleIds);
    ref('assessment', a.id, 'labId', [a.labId]);
    ref('assessment', a.id, 'reportExerciseId', [a.reportExerciseId]);
  }
  for (const t of dataset.triageScenarios) {
    ref('triageScenario', t.id, 'relatedModuleIds', t.relatedModuleIds);
  }
  for (const s of dataset.skills) ref('skill', s.id, 'domainIds', s.domainIds);
  for (const p of dataset.learningPaths) {
    ref(
      'learningPath',
      p.id,
      'steps.domainId',
      p.steps.map((s) => s.domainId).filter((v): v is string => v !== null),
    );
  }
  return issues;
}

function checkCycles(dataset: KnowledgeDataset): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const graphs: [string, { id: string; prerequisiteIds: string[] }[]][] = [
    [
      'domain',
      dataset.domains.map((d) => ({ id: d.id, prerequisiteIds: d.prerequisiteDomainIds })),
    ],
    ['track', dataset.tracks.map((t) => ({ id: t.id, prerequisiteIds: t.prerequisiteTrackIds }))],
    [
      'module',
      dataset.modules.map((m) => ({ id: m.id, prerequisiteIds: m.prerequisiteModuleIds })),
    ],
  ];
  for (const [entity, nodes] of graphs) {
    for (const cycle of findCycles(nodes)) {
      issues.push(
        err('PREREQ_CYCLE', entity, cycle[0] ?? '', `Chu trình prerequisite: ${cycle.join(' → ')}`),
      );
    }
  }
  return issues;
}

function checkContentRules(dataset: KnowledgeDataset): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const domainById = new Map(dataset.domains.map((d) => [d.id, d]));
  const checklistsByDomain = new Map<string, number>();
  for (const c of dataset.checklists) {
    checklistsByDomain.set(c.domainId, (checklistsByDomain.get(c.domainId) ?? 0) + 1);
  }
  const reportExercisesByDomain = new Set<string>();
  const modulesById = new Map(dataset.modules.map((m) => [m.id, m]));
  const trackById = new Map(dataset.tracks.map((t) => [t.id, t]));
  for (const m of dataset.modules) {
    if (m.reportExerciseIds.length > 0) {
      const domainId = trackById.get(m.trackId)?.domainId;
      if (domainId) reportExercisesByDomain.add(domainId);
    }
  }

  for (const d of dataset.domains) {
    if (!d.safetyNoteVi.trim()) {
      issues.push(err('DOMAIN_NO_SAFETY', 'domain', d.id, 'Domain thiếu safety note.'));
    }
    if (d.status === 'specialist') {
      if (d.prerequisiteDomainIds.length === 0) {
        issues.push(
          err(
            'SPECIALIST_NO_PREREQ',
            'domain',
            d.id,
            'Domain specialist phải khai báo prerequisite rõ ràng.',
          ),
        );
      }
      if ((checklistsByDomain.get(d.id) ?? 0) === 0) {
        issues.push(
          err(
            'SPECIALIST_NO_CHECKLIST',
            'domain',
            d.id,
            'Domain specialist phải có ít nhất một checklist tối thiểu.',
          ),
        );
      }
      if (!reportExercisesByDomain.has(d.id)) {
        issues.push(
          err(
            'SPECIALIST_NO_REPORT_EXERCISE',
            'domain',
            d.id,
            'Domain specialist phải có ít nhất một report exercise mẫu.',
          ),
        );
      }
    }
    if (d.contentStatus === 'verified' && !d.lastReviewed) {
      issues.push(
        err(
          'VERIFIED_NO_REVIEW_DATE',
          'domain',
          d.id,
          'contentStatus=verified nhưng thiếu lastReviewed.',
        ),
      );
    }
  }

  for (const t of dataset.tracks) {
    if (!domainById.has(t.domainId)) continue;
    if (t.moduleIds.length === 0) {
      issues.push(err('TRACK_NO_MODULE', 'track', t.id, 'Track không có module nào.'));
    }
  }

  for (const m of dataset.modules) {
    if (m.learningObjectives.length === 0) {
      issues.push(err('MODULE_NO_OBJECTIVE', 'module', m.id, 'Module không có mục tiêu học.'));
    }
    if (!m.safetyNoteVi.trim()) {
      issues.push(err('MODULE_NO_SAFETY', 'module', m.id, 'Module thiếu safety note.'));
    }
    if (m.contentStatus === 'verified' && !m.lastReviewed) {
      issues.push(
        err(
          'VERIFIED_NO_REVIEW_DATE',
          'module',
          m.id,
          'contentStatus=verified nhưng thiếu lastReviewed.',
        ),
      );
    }
    if (m.labIds.length === 0) {
      issues.push(warn('MODULE_NO_LAB', 'module', m.id, 'Module chưa có lab thực hành.'));
    }
    if (m.reportExerciseIds.length === 0) {
      issues.push(
        warn('MODULE_NO_REPORT_EXERCISE', 'module', m.id, 'Module chưa có bài tập viết report.'),
      );
    }
    if (m.remediationTopicIds.length === 0) {
      issues.push(
        warn('MODULE_NO_REMEDIATION', 'module', m.id, 'Module chưa có nội dung khắc phục.'),
      );
    }
    if (m.quizIds.length === 0) {
      issues.push(warn('MODULE_NO_QUIZ', 'module', m.id, 'Module chưa có bài tự đánh giá.'));
    }
    for (const p of m.prerequisiteModuleIds) {
      if (p === m.id) {
        issues.push(err('PREREQ_CYCLE', 'module', m.id, 'Module là prerequisite của chính nó.'));
      }
      if (!modulesById.has(p)) continue;
    }
  }

  for (const w of dataset.weaknesses) {
    if (!w.rootCauseVi.trim()) {
      issues.push(err('WEAKNESS_NO_ROOT_CAUSE', 'weakness', w.id, 'Weakness thiếu root cause.'));
    }
    if (w.remediationPrinciplesVi.length === 0) {
      issues.push(
        err('WEAKNESS_NO_REMEDIATION', 'weakness', w.id, 'Weakness thiếu nguyên tắc khắc phục.'),
      );
    }
  }

  for (const l of dataset.labs) {
    if (!l.allowedTargetsNoteVi.trim()) {
      issues.push(
        err('LAB_NO_ALLOWED_TARGETS', 'lab', l.id, 'Lab thiếu ghi chú mục tiêu được phép.'),
      );
    }
    if (l.environment === 'cloud-owned-account') {
      const c = l.cloud;
      if (!c) {
        issues.push(
          err('CLOUD_LAB_NO_CLEANUP', 'lab', l.id, 'Cloud lab thiếu metadata billing/cleanup.'),
        );
      } else {
        if (!c.cleanupRequired) {
          issues.push(
            err('CLOUD_LAB_NO_CLEANUP', 'lab', l.id, 'Cloud lab phải đặt cleanupRequired = true.'),
          );
        }
        if (!c.billingWarning.trim() || !c.estimatedCost.trim()) {
          issues.push(
            err('CLOUD_LAB_NO_BILLING', 'lab', l.id, 'Cloud lab thiếu cảnh báo chi phí.'),
          );
        }
        if (!c.productionWarning.trim()) {
          issues.push(
            err(
              'CLOUD_LAB_NO_PROD_WARNING',
              'lab',
              l.id,
              'Cloud lab thiếu cảnh báo môi trường production.',
            ),
          );
        }
      }
    }
  }

  for (const r of dataset.resources) {
    for (const domainId of r.domainIds) {
      if (!domainById.has(domainId)) {
        issues.push(
          err('RESOURCE_DOMAIN_MISMATCH', 'resource', r.id, `Domain không tồn tại: ${domainId}`),
        );
      }
    }
    if (r.sourceClass === 'community' && !r.sourceOriginNoteVi.trim()) {
      issues.push(
        err('COMMUNITY_NO_REASON', 'resource', r.id, 'Nguồn cộng đồng phải nêu lý do chọn.'),
      );
    }
    if (r.contentStatus === 'verified' && !r.lastContentReviewed) {
      issues.push(
        err(
          'VERIFIED_NO_REVIEW_DATE',
          'resource',
          r.id,
          'contentStatus=verified nhưng thiếu lastContentReviewed.',
        ),
      );
    }
    if (r.linkStatus === 'active' && !r.linkLastChecked) {
      issues.push(
        err(
          'LINK_ACTIVE_NO_CHECK_DATE',
          'resource',
          r.id,
          'linkStatus=active nhưng thiếu linkLastChecked.',
        ),
      );
    }
    if (isStale(r.lastContentReviewed)) {
      issues.push(
        warn(
          'RESOURCE_REVIEW_STALE',
          'resource',
          r.id,
          `Quá ${REVIEW_STALE_MONTHS} tháng chưa rà soát nội dung.`,
        ),
      );
    }
  }

  for (const q of dataset.quizzes) {
    for (const question of q.questions) {
      const valid = question.correctOptionIds.filter((cid) =>
        question.options.some((o) => o.id === cid),
      );
      if (valid.length === 0) {
        issues.push(
          err(
            'QUIZ_NO_VALID_ANSWER',
            'quiz',
            q.id,
            `Câu hỏi ${question.id} không có đáp án hợp lệ.`,
          ),
        );
      }
      if (valid.length === question.options.length) {
        issues.push(
          warn(
            'QUIZ_ALL_CORRECT',
            'quiz',
            q.id,
            `Câu hỏi ${question.id} có mọi lựa chọn đều đúng.`,
          ),
        );
      }
    }
    if (q.passingScorePercent < 1 || q.passingScorePercent > 100) {
      issues.push(err('QUIZ_BAD_PASSING_SCORE', 'quiz', q.id, 'Điểm đạt phải trong khoảng 1–100.'));
    }
  }

  for (const r of dataset.reportExercises) {
    if (r.rubric.length === 0) {
      issues.push(
        err('REPORT_EXERCISE_NO_RUBRIC', 'reportExercise', r.id, 'Thiếu rubric chấm điểm.'),
      );
    }
  }

  return issues;
}

function checkUrls(dataset: KnowledgeDataset): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const check = (entity: string, id: string, field: string, url: string | null) => {
    if (!url) return;
    if (!isSafeExternalUrl(url)) {
      issues.push(err('UNSAFE_URL', entity, id, `${field} dùng URL không an toàn: ${url}`));
    }
  };
  for (const r of dataset.resources) check('resource', r.id, 'url', r.url);
  for (const l of dataset.labs) {
    check('lab', l.id, 'url', l.url);
    check('lab', l.id, 'cleanupInstructionsUrl', l.cleanupInstructionsUrl);
    check('lab', l.id, 'cloud.cleanupInstructionsUrl', l.cloud?.cleanupInstructionsUrl ?? null);
  }
  for (const t of dataset.tools) check('tool', t.id, 'officialUrl', t.officialUrl);
  for (const s of dataset.standards) check('standard', s.id, 'url', s.url);
  return issues;
}

function checkDates(dataset: KnowledgeDataset): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const check = (entity: string, id: string, field: string, value: string | null) => {
    if (value !== null && !ISO_DATE_PATTERN.test(value)) {
      issues.push(err('DATE_FORMAT', entity, id, `${field} không đúng YYYY-MM-DD: ${value}`));
    }
  };
  for (const d of dataset.domains) check('domain', d.id, 'lastReviewed', d.lastReviewed);
  for (const m of dataset.modules) check('module', m.id, 'lastReviewed', m.lastReviewed);
  for (const r of dataset.resources) {
    check('resource', r.id, 'metadataLastUpdated', r.metadataLastUpdated);
    check('resource', r.id, 'lastContentReviewed', r.lastContentReviewed);
    check('resource', r.id, 'linkLastChecked', r.linkLastChecked);
  }
  return issues;
}

function checkForbiddenContent(dataset: KnowledgeDataset): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const scan = (entity: string, id: string, text: string) => {
    for (const rule of FORBIDDEN_CONTENT_PATTERNS) {
      if (rule.pattern.test(text)) {
        issues.push(err('FORBIDDEN_CONTENT', entity, id, `Nội dung có dấu hiệu ${rule.reasonVi}.`));
      }
    }
  };
  for (const w of dataset.weaknesses) {
    scan(
      'weakness',
      w.id,
      [w.rootCauseVi, ...w.safeValidationPrinciplesVi, ...w.indicatorsVi].join(' '),
    );
  }
  for (const c of dataset.checklists) {
    scan('checklist', c.id, c.items.map((i) => `${i.questionVi} ${i.whyVi}`).join(' '));
  }
  for (const l of dataset.labs) scan('lab', l.id, `${l.descriptionVi} ${l.safetyNoteVi}`);
  for (const m of dataset.modules) {
    scan('module', m.id, [...m.methodologyVi, ...m.safeImpactProofVi, m.summaryVi].join(' '));
  }
  return issues;
}

function isStale(date: string | null): boolean {
  if (!date) return false;
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return false;
  const limit = new Date();
  limit.setMonth(limit.getMonth() - REVIEW_STALE_MONTHS);
  return parsed < limit;
}

/** Chạy toàn bộ kiểm tra trên dataset. */
export function validateDataset(dataset: KnowledgeDataset): ValidationResult {
  const issues: ValidationIssue[] = [
    ...checkDuplicateIds(dataset),
    ...zodIssues('domain', knowledgeDomainSchema, dataset.domains, (d) => d.id),
    ...zodIssues('track', learningTrackSchema, dataset.tracks, (t) => t.id),
    ...zodIssues('module', learningModuleSchema, dataset.modules, (m) => m.id),
    ...zodIssues('concept', conceptSchema, dataset.concepts, (c) => c.id),
    ...zodIssues('weakness', weaknessSchema, dataset.weaknesses, (w) => w.id),
    ...zodIssues('resource', learningResourceSchema, dataset.resources, (r) => r.id),
    ...zodIssues('lab', labSchema, dataset.labs, (l) => l.id),
    ...zodIssues('tool', toolSchema, dataset.tools, (t) => t.id),
    ...zodIssues('checklist', testingChecklistSchema, dataset.checklists, (c) => c.id),
    ...zodIssues('quiz', quizSchema, dataset.quizzes, (q) => q.id),
    ...zodIssues('assessment', practicalAssessmentSchema, dataset.assessments, (a) => a.id),
    ...zodIssues('reportExercise', reportExerciseSchema, dataset.reportExercises, (r) => r.id),
    ...zodIssues('triageScenario', triageScenarioSchema, dataset.triageScenarios, (t) => t.id),
    ...zodIssues('standard', standardSchema, dataset.standards, (s) => s.id),
    ...zodIssues('skill', skillSchema, dataset.skills, (s) => s.id),
    ...zodIssues('learningPath', learningPathSchema, dataset.learningPaths, (p) => p.id),
    ...checkReferences(dataset),
    ...checkCycles(dataset),
    ...checkContentRules(dataset),
    ...checkUrls(dataset),
    ...checkDates(dataset),
    ...checkForbiddenContent(dataset),
  ];

  const errorCount = issues.filter((i) => i.severity === 'error').length;
  const warningCount = issues.length - errorCount;
  return { issues, errorCount, warningCount, ok: errorCount === 0 };
}
