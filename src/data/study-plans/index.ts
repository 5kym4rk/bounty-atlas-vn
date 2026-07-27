import type { PlanMap } from './helpers';
import { corePlans } from './core';
import { webPlans } from './web';
import { apiIdentityPlans } from './api-identity';
import { platformPlans } from './platforms';
import { advancedPlans } from './advanced';

/**
 * Lộ trình học của toàn bộ module, khoá theo ID module.
 *
 * Nội dung chính của một module là danh sách nguồn ngoài xếp theo thứ tự nên
 * học. Dự án không tự viết bài giảng và không sao chép nội dung của nguồn —
 * người học bấm vào để mở và học tại chính nguồn gốc.
 *
 * Validator từ chối module có lộ trình rỗng, nên không module nào lọt lưới
 * mà không có nguồn học.
 */
export const STUDY_PLANS: PlanMap = {
  ...corePlans,
  ...webPlans,
  ...apiIdentityPlans,
  ...platformPlans,
  ...advancedPlans,
};
