/**
 * Tính độ bao phủ và khoảng trống của bản đồ kiến thức.
 *
 * Dùng chung bởi trang Gap Analysis và script `coverage:report`, nên số liệu
 * trong ứng dụng và trong báo cáo luôn đến từ cùng một phép tính.
 * KHÔNG hard-code bất kỳ con số nào.
 */
import type { KnowledgeDataset } from '@/schemas/entities';
import { REVIEW_STALE_MONTHS } from './dataset';

export interface DomainCoverage {
  domainId: string;
  code: string;
  titleVi: string;
  status: string;
  trackCount: number;
  moduleCount: number;
  modulesWithLab: number;
  modulesWithReportExercise: number;
  modulesWithQuiz: number;
  modulesWithRemediation: number;
  labCount: number;
  checklistCount: number;
  resourceCount: number;
  officialResourceCount: number;
  weaknessCount: number;
}

export interface CoverageGap {
  code: string;
  severity: 'error' | 'warning';
  entity: string;
  id: string;
  messageVi: string;
}

export interface CoverageReport {
  totals: Record<string, number>;
  ratios: Record<string, number>;
  perDomain: DomainCoverage[];
  gaps: CoverageGap[];
  resourcesNeverReviewed: { id: string; title: string }[];
  resourcesStale: { id: string; title: string; lastContentReviewed: string }[];
  resourcesLinkUnchecked: { id: string; title: string }[];
  draftContent: { entity: string; id: string; titleVi: string }[];
}

function ratio(part: number, total: number): number {
  return total === 0 ? 0 : Math.round((part / total) * 1000) / 10;
}

function isStale(date: string | null): boolean {
  if (!date) return false;
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return false;
  const limit = new Date();
  limit.setMonth(limit.getMonth() - REVIEW_STALE_MONTHS);
  return parsed < limit;
}

export function buildCoverageReport(dataset: KnowledgeDataset): CoverageReport {
  const trackById = new Map(dataset.tracks.map((t) => [t.id, t]));
  const gaps: CoverageGap[] = [];

  const modulesWithLab = dataset.modules.filter((m) => m.labIds.length > 0);
  const modulesWithExercise = dataset.modules.filter((m) => m.reportExerciseIds.length > 0);
  const modulesWithQuiz = dataset.modules.filter((m) => m.quizIds.length > 0);
  const modulesWithRemediation = dataset.modules.filter((m) => m.remediationTopicIds.length > 0);

  for (const module of dataset.modules) {
    if (module.labIds.length === 0) {
      gaps.push({
        code: 'MODULE_NO_LAB',
        severity: 'warning',
        entity: 'module',
        id: module.id,
        messageVi: `Module "${module.titleVi}" chưa có lab thực hành.`,
      });
    }
    if (module.reportExerciseIds.length === 0) {
      gaps.push({
        code: 'MODULE_NO_REPORT_EXERCISE',
        severity: 'warning',
        entity: 'module',
        id: module.id,
        messageVi: `Module "${module.titleVi}" chưa có bài tập viết báo cáo.`,
      });
    }
    if (module.quizIds.length === 0) {
      gaps.push({
        code: 'MODULE_NO_QUIZ',
        severity: 'warning',
        entity: 'module',
        id: module.id,
        messageVi: `Module "${module.titleVi}" chưa có bài tự đánh giá.`,
      });
    }
    if (module.remediationTopicIds.length === 0) {
      gaps.push({
        code: 'MODULE_NO_REMEDIATION',
        severity: 'warning',
        entity: 'module',
        id: module.id,
        messageVi: `Module "${module.titleVi}" chưa có nội dung khắc phục.`,
      });
    }
  }

  for (const track of dataset.tracks) {
    if (track.prerequisiteTrackIds.length === 0) {
      const others = dataset.tracks.filter((t) => t.domainId === track.domainId);
      if (others.length > 1 && others[0]?.id !== track.id) {
        gaps.push({
          code: 'TRACK_NO_PREREQ',
          severity: 'warning',
          entity: 'track',
          id: track.id,
          messageVi: `Track "${track.titleVi}" không khai báo prerequisite dù không phải track đầu tiên của lĩnh vực.`,
        });
      }
    }
  }

  for (const weakness of dataset.weaknesses) {
    if (weakness.remediationPrinciplesVi.length === 0) {
      gaps.push({
        code: 'WEAKNESS_NO_REMEDIATION',
        severity: 'error',
        entity: 'weakness',
        id: weakness.id,
        messageVi: `Điểm yếu "${weakness.titleVi}" chỉ có lý thuyết mà không có cách khắc phục.`,
      });
    }
  }

  const perDomain: DomainCoverage[] = dataset.domains
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((domain) => {
      const tracks = dataset.tracks.filter((t) => t.domainId === domain.id);
      const trackIds = new Set(tracks.map((t) => t.id));
      const modules = dataset.modules.filter((m) => trackIds.has(m.trackId));
      const resources = dataset.resources.filter((r) => r.domainIds.includes(domain.id));
      const official = resources.filter(
        (r) => r.sourceClass === 'official-standard' || r.sourceClass === 'official-vendor',
      );
      const labs = dataset.labs.filter((l) => l.domainIds.includes(domain.id));
      const checklists = dataset.checklists.filter((c) => c.domainId === domain.id);
      const weaknessIds = new Set(modules.flatMap((m) => m.weaknessIds));

      if (official.length === 0) {
        gaps.push({
          code: 'DOMAIN_NO_OFFICIAL_SOURCE',
          severity: 'warning',
          entity: 'domain',
          id: domain.id,
          messageVi: `Lĩnh vực "${domain.titleVi}" chưa có nguồn chuẩn chính thức.`,
        });
      }
      if (labs.length === 0) {
        gaps.push({
          code: 'DOMAIN_NO_LAB',
          severity: 'warning',
          entity: 'domain',
          id: domain.id,
          messageVi: `Lĩnh vực "${domain.titleVi}" chưa có lab nào.`,
        });
      }
      if (domain.status === 'specialist' && !domain.safetyNoteVi.trim()) {
        gaps.push({
          code: 'SPECIALIST_NO_SAFETY_NOTE',
          severity: 'error',
          entity: 'domain',
          id: domain.id,
          messageVi: `Specialization "${domain.titleVi}" chưa có cảnh báo an toàn.`,
        });
      }

      return {
        domainId: domain.id,
        code: domain.code,
        titleVi: domain.titleVi,
        status: domain.status,
        trackCount: tracks.length,
        moduleCount: modules.length,
        modulesWithLab: modules.filter((m) => m.labIds.length > 0).length,
        modulesWithReportExercise: modules.filter((m) => m.reportExerciseIds.length > 0).length,
        modulesWithQuiz: modules.filter((m) => m.quizIds.length > 0).length,
        modulesWithRemediation: modules.filter((m) => m.remediationTopicIds.length > 0).length,
        labCount: labs.length,
        checklistCount: checklists.length,
        resourceCount: resources.length,
        officialResourceCount: official.length,
        weaknessCount: weaknessIds.size,
      };
    });

  const resourcesNeverReviewed = dataset.resources
    .filter((r) => !r.lastContentReviewed)
    .map((r) => ({ id: r.id, title: r.title }));

  const resourcesStale = dataset.resources
    .filter((r) => isStale(r.lastContentReviewed))
    .map((r) => ({
      id: r.id,
      title: r.title,
      lastContentReviewed: r.lastContentReviewed as string,
    }));

  const resourcesLinkUnchecked = dataset.resources
    .filter((r) => !r.linkLastChecked)
    .map((r) => ({ id: r.id, title: r.title }));

  const draftContent = [
    ...dataset.domains
      .filter((d) => d.contentStatus === 'draft')
      .map((d) => ({ entity: 'domain', id: d.id, titleVi: d.titleVi })),
    ...dataset.modules
      .filter((m) => m.contentStatus === 'draft')
      .map((m) => ({ entity: 'module', id: m.id, titleVi: m.titleVi })),
    ...dataset.weaknesses
      .filter((w) => w.contentStatus === 'draft')
      .map((w) => ({ entity: 'weakness', id: w.id, titleVi: w.titleVi })),
    ...dataset.resources
      .filter((r) => r.contentStatus === 'draft')
      .map((r) => ({ entity: 'resource', id: r.id, titleVi: r.title })),
  ];

  const officialResources = dataset.resources.filter(
    (r) => r.sourceClass === 'official-standard' || r.sourceClass === 'official-vendor',
  );
  const communityResources = dataset.resources.filter((r) => r.sourceClass === 'community');

  const totals = {
    domain: dataset.domains.length,
    track: dataset.tracks.length,
    module: dataset.modules.length,
    concept: dataset.concepts.length,
    weakness: dataset.weaknesses.length,
    resource: dataset.resources.length,
    lab: dataset.labs.length,
    tool: dataset.tools.length,
    checklist: dataset.checklists.length,
    quiz: dataset.quizzes.length,
    quizQuestion: dataset.quizzes.reduce((n, q) => n + q.questions.length, 0),
    reportExercise: dataset.reportExercises.length,
    triageScenario: dataset.triageScenarios.length,
    assessment: dataset.assessments.length,
    standard: dataset.standards.length,
    skill: dataset.skills.length,
    learningPath: dataset.learningPaths.length,
    officialResource: officialResources.length,
    communityResource: communityResources.length,
    verifiedResource: dataset.resources.filter((r) => r.contentStatus === 'verified').length,
  };

  const ratios = {
    moduleWithLabPercent: ratio(modulesWithLab.length, dataset.modules.length),
    moduleWithReportExercisePercent: ratio(modulesWithExercise.length, dataset.modules.length),
    moduleWithQuizPercent: ratio(modulesWithQuiz.length, dataset.modules.length),
    moduleWithRemediationPercent: ratio(modulesWithRemediation.length, dataset.modules.length),
    officialResourcePercent: ratio(officialResources.length, dataset.resources.length),
    verifiedResourcePercent: ratio(totals.verifiedResource, dataset.resources.length),
  };

  // Chỉ dùng để bảo đảm mọi module đều gắn được về một domain hợp lệ.
  for (const module of dataset.modules) {
    if (!trackById.has(module.trackId)) {
      gaps.push({
        code: 'MODULE_ORPHAN',
        severity: 'error',
        entity: 'module',
        id: module.id,
        messageVi: `Module "${module.titleVi}" không thuộc track nào tồn tại.`,
      });
    }
  }

  return {
    totals,
    ratios,
    perDomain,
    gaps,
    resourcesNeverReviewed,
    resourcesStale,
    resourcesLinkUnchecked,
    draftContent,
  };
}
