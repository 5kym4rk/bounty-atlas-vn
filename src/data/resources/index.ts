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
import { CONTENT_REVIEW_DATE, CONTENT_REVIEWED } from './reviewed';

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
  const reviewNote = CONTENT_REVIEWED[resource.id];

  return {
    ...resource,
    ...(linkStatus && LINK_CHECK_DATE ? { linkStatus, linkLastChecked: LINK_CHECK_DATE } : {}),
    // Chi nguon da duoc mo va doc that moi thanh 'verified'. Trang thai link
    // khong bao gio duoc dung de suy ra dieu nay.
    ...(reviewNote
      ? { contentStatus: 'verified' as const, lastContentReviewed: CONTENT_REVIEW_DATE }
      : {}),
  };
});
