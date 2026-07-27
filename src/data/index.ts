/**
 * Lắp ráp toàn bộ dataset kiến thức.
 *
 * Một số quan hệ được suy ra từ dữ liệu thay vì khai báo tay ở hai nơi, để
 * tránh lệch nhau: quiz → module, lab → module, resource → module.
 */
import type { KnowledgeDataset, LearningModule } from '@/schemas/entities';
import { domains } from './domains';
import { tracks } from './tracks';
import { learningPaths } from './tracks/learning-paths';
import { modules as rawModules } from './modules';
import { concepts } from './concepts';
import { weaknesses } from './weaknesses';
import { resources } from './resources';
import { CONTENT_REVIEW_DATE } from './resources/reviewed';
import { labs } from './labs';
import { tools } from './tools';
import { checklists } from './checklists';
import { quizzes } from './quizzes';
import { reportExercises } from './report-exercises';
import { triageScenarios } from './triage';
import { standards } from './standards';
import { assessments, skills } from './skills';
import { MODULE_LINKS } from './links';
import { STUDY_PLANS } from './study-plans';

function unique(values: string[]): string[] {
  return [...new Set(values)];
}

/** Gắn quan hệ chéo vào module: một phần khai báo tay, một phần suy ra. */
function linkModules(): LearningModule[] {
  const quizByModule = new Map<string, string[]>();
  for (const quiz of quizzes) {
    quizByModule.set(quiz.moduleId, [...(quizByModule.get(quiz.moduleId) ?? []), quiz.id]);
  }

  const labsByModule = new Map<string, string[]>();
  for (const lab of labs) {
    for (const moduleId of lab.moduleIds) {
      labsByModule.set(moduleId, [...(labsByModule.get(moduleId) ?? []), lab.id]);
    }
  }

  const verifiedResources = new Set(
    resources.filter((r) => r.contentStatus === 'verified').map((r) => r.id),
  );

  return rawModules.map((module) => {
    const links = MODULE_LINKS[module.id] ?? {};
    const studyPlan = STUDY_PLANS[module.id] ?? module.studyPlan;

    /*
     * Module chỉ hết trạng thái nháp khi MỌI nguồn "cần học" của nó đã được
     * người biên tập mở và đọc thật (xem resources/reviewed.ts).
     *
     * Suy ra thay vì đặt tay là có chủ đích: nếu sau này thêm một nguồn chưa
     * rà soát vào lộ trình, module tự quay về nháp. Một nhãn "đã rà soát" đặt
     * tay thì không có tính chất đó — nó đứng yên trong khi dữ liệu đổi.
     */
    const coreIds = studyPlan.filter((s) => s.necessity === 'core').map((s) => s.resourceId);
    const allCoreReviewed = coreIds.length > 0 && coreIds.every((id) => verifiedResources.has(id));

    return {
      ...module,
      studyPlan,
      contentStatus: allCoreReviewed ? ('verified' as const) : module.contentStatus,
      lastReviewed: allCoreReviewed ? CONTENT_REVIEW_DATE : module.lastReviewed,
      conceptIds: unique([...module.conceptIds, ...(links.conceptIds ?? [])]),
      weaknessIds: unique([...module.weaknessIds, ...(links.weaknessIds ?? [])]),
      checklistIds: unique([...module.checklistIds, ...(links.checklistIds ?? [])]),
      reportExerciseIds: unique([...module.reportExerciseIds, ...(links.reportExerciseIds ?? [])]),
      quizIds: unique([...module.quizIds, ...(quizByModule.get(module.id) ?? [])]),
      labIds: unique([...module.labIds, ...(labsByModule.get(module.id) ?? [])]),
    } satisfies LearningModule;
  });
}

const modules = linkModules();

/** Bổ sung quan hệ ngược cho weakness: lab và report exercise liên quan. */
function linkWeaknesses() {
  const labsByWeakness = new Map<string, string[]>();
  const exercisesByWeakness = new Map<string, string[]>();
  const moduleById = new Map(modules.map((m) => [m.id, m]));

  for (const module of modules) {
    for (const weaknessId of module.weaknessIds) {
      labsByWeakness.set(
        weaknessId,
        unique([...(labsByWeakness.get(weaknessId) ?? []), ...module.labIds]),
      );
      exercisesByWeakness.set(
        weaknessId,
        unique([
          ...(exercisesByWeakness.get(weaknessId) ?? []),
          ...(moduleById.get(module.id)?.reportExerciseIds ?? []),
        ]),
      );
    }
  }

  return weaknesses.map((weakness) => ({
    ...weakness,
    relatedLabIds: unique([...weakness.relatedLabIds, ...(labsByWeakness.get(weakness.id) ?? [])]),
    relatedReportExerciseIds: unique([
      ...weakness.relatedReportExerciseIds,
      ...(exercisesByWeakness.get(weakness.id) ?? []),
    ]),
  }));
}

export const dataset: KnowledgeDataset = {
  domains,
  tracks,
  modules,
  concepts,
  weaknesses: linkWeaknesses(),
  resources,
  labs,
  tools,
  checklists,
  quizzes,
  assessments,
  reportExercises,
  triageScenarios,
  standards,
  skills,
  learningPaths,
};

export {
  domains,
  tracks,
  modules,
  concepts,
  resources,
  labs,
  tools,
  checklists,
  quizzes,
  assessments,
  reportExercises,
  triageScenarios,
  standards,
  skills,
  learningPaths,
};
