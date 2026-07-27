import type { LearningResource } from '@/schemas/entities';
import { policyStandardResources } from './policy-standards';
import { webApiIdentityResources } from './web-api-identity';
import { platformResources } from './platforms';
import { advancedResources } from './advanced';
import { foundationsStudyResources } from './foundations-study';
import { webStudyResources } from './web-study';
import { platformsStudyResources } from './platforms-study';
import { advancedStudyResources } from './advanced-study';
import { LINK_CHECK_DATE, LINK_STATUS_BY_RESOURCE } from './link-status.generated';

const handWritten: LearningResource[] = [
  ...policyStandardResources,
  ...webApiIdentityResources,
  ...platformResources,
  ...advancedResources,
  // Nguồn học gắn vào lộ trình từng module, trỏ thẳng tới chương/lab cụ thể.
  ...foundationsStudyResources,
  ...webStudyResources,
  ...platformsStudyResources,
  ...advancedStudyResources,
];

/**
 * Toàn bộ danh mục nguồn.
 *
 * `contentStatus: 'verified'` do người biên tập đặt tay, chỉ khi đã thực sự mở
 * nguồn và đối chiếu. `linkStatus` và `linkLastChecked` do `npm run check:links`
 * sinh ra và được ghép vào ở đây — hai loại thông tin này độc lập với nhau.
 * Xem SOURCE_REGISTRY.md §4–§6.
 */
export const resources: LearningResource[] = handWritten.map((resource) => {
  const linkStatus = LINK_STATUS_BY_RESOURCE[resource.id];
  if (!linkStatus || !LINK_CHECK_DATE) return resource;
  return { ...resource, linkStatus, linkLastChecked: LINK_CHECK_DATE };
});
