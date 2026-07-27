import type { StudyStep } from '@/schemas/entities';

/** Lộ trình học của một module, khoá theo ID module. */
export type PlanMap = Record<string, StudyStep[]>;

/**
 * Một bước cần học để nắm được module.
 *
 * Thứ tự học chính là thứ tự xuất hiện trong mảng.
 */
export function core(resourceId: string, roleVi: string): StudyStep {
  return { resourceId, necessity: 'core', roleVi };
}

/** Một bước mở rộng, dành cho người muốn đi sâu hơn yêu cầu của module. */
export function extra(resourceId: string, roleVi: string): StudyStep {
  return { resourceId, necessity: 'optional', roleVi };
}
