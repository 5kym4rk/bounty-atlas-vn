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
import { labs } from './labs';
import { tools } from './tools';
import { checklists } from './checklists';
import { quizzes } from './quizzes';
import { reportExercises } from './report-exercises';
import { triageScenarios } from './triage';
import { standards } from './standards';
import { assessments, skills } from './skills';
import { MODULE_LINKS } from './links';

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

  const resourcesByModule = new Map<string, string[]>();
  for (const resource of resources) {
    for (const moduleId of resource.moduleIds) {
      resourcesByModule.set(moduleId, [...(resourcesByModule.get(moduleId) ?? []), resource.id]);
    }
  }

  const trackById = new Map(tracks.map((t) => [t.id, t]));
  const resourcesByDomain = new Map<string, string[]>();
  for (const resource of resources) {
    for (const domainId of resource.domainIds) {
      resourcesByDomain.set(domainId, [...(resourcesByDomain.get(domainId) ?? []), resource.id]);
    }
  }

  return rawModules.map((module) => {
    const links = MODULE_LINKS[module.id] ?? {};
    const domainId = trackById.get(module.trackId)?.domainId;
    const required = resourcesByModule.get(module.id) ?? [];
    const optional = (domainId ? (resourcesByDomain.get(domainId) ?? []) : []).filter(
      (id) => !required.includes(id),
    );

    return {
      ...module,
      conceptIds: unique([...module.conceptIds, ...(links.conceptIds ?? [])]),
      weaknessIds: unique([...module.weaknessIds, ...(links.weaknessIds ?? [])]),
      checklistIds: unique([...module.checklistIds, ...(links.checklistIds ?? [])]),
      reportExerciseIds: unique([...module.reportExerciseIds, ...(links.reportExerciseIds ?? [])]),
      quizIds: unique([...module.quizIds, ...(quizByModule.get(module.id) ?? [])]),
      labIds: unique([...module.labIds, ...(labsByModule.get(module.id) ?? [])]),
      requiredResourceIds: unique([...module.requiredResourceIds, ...required]),
      optionalResourceIds: unique([...module.optionalResourceIds, ...optional]),
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
