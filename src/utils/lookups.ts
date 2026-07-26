/**
 * Chỉ mục tra cứu dựng một lần từ dataset, dùng chung cho toàn ứng dụng.
 */
import { dataset } from '@/data';
import type {
  Concept,
  KnowledgeDomain,
  Lab,
  LearningModule,
  LearningResource,
  LearningTrack,
  Quiz,
  ReportExercise,
  Standard,
  TestingChecklist,
  Tool,
  Weakness,
} from '@/schemas/entities';

function index<T extends { id: string }>(items: T[]): Map<string, T> {
  return new Map(items.map((item) => [item.id, item]));
}

export const domainById = index<KnowledgeDomain>(dataset.domains);
export const trackById = index<LearningTrack>(dataset.tracks);
export const moduleById = index<LearningModule>(dataset.modules);
export const conceptById = index<Concept>(dataset.concepts);
export const weaknessById = index<Weakness>(dataset.weaknesses);
export const resourceById = index<LearningResource>(dataset.resources);
export const labById = index<Lab>(dataset.labs);
export const toolById = index<Tool>(dataset.tools);
export const checklistById = index<TestingChecklist>(dataset.checklists);
export const quizById = index<Quiz>(dataset.quizzes);
export const reportExerciseById = index<ReportExercise>(dataset.reportExercises);
export const standardById = index<Standard>(dataset.standards);

/** Domain của một module, đi qua track. */
export function domainOfModule(moduleId: string): KnowledgeDomain | undefined {
  const module = moduleById.get(moduleId);
  if (!module) return undefined;
  const track = trackById.get(module.trackId);
  if (!track) return undefined;
  return domainById.get(track.domainId);
}

/** Mọi module thuộc một domain. */
export function modulesOfDomain(domainId: string): LearningModule[] {
  const trackIds = new Set(dataset.tracks.filter((t) => t.domainId === domainId).map((t) => t.id));
  return dataset.modules.filter((m) => trackIds.has(m.trackId));
}

/** Mọi track thuộc một domain, giữ thứ tự khai báo. */
export function tracksOfDomain(domainId: string): LearningTrack[] {
  return dataset.tracks.filter((t) => t.domainId === domainId);
}

/** Lab thuộc một domain. */
export function labsOfDomain(domainId: string): Lab[] {
  return dataset.labs.filter((l) => l.domainIds.includes(domainId));
}

/** Resource thuộc một domain. */
export function resourcesOfDomain(domainId: string): LearningResource[] {
  return dataset.resources.filter((r) => r.domainIds.includes(domainId));
}

/** Checklist thuộc một domain. */
export function checklistsOfDomain(domainId: string): TestingChecklist[] {
  return dataset.checklists.filter((c) => c.domainId === domainId);
}

/** Công cụ thuộc một domain. */
export function toolsOfDomain(domainId: string): Tool[] {
  return dataset.tools.filter((t) => t.domainIds.includes(domainId));
}

/** Lấy nhiều mục theo danh sách id, bỏ qua id không tồn tại. */
export function pick<T>(map: Map<string, T>, ids: string[]): T[] {
  return ids.map((id) => map.get(id)).filter((v): v is T => v !== undefined);
}

/** Domain đã sắp xếp theo `order`. */
export const orderedDomains = [...dataset.domains].sort((a, b) => a.order - b.order);
