import type { LessonSection } from '@/schemas/entities';
import { policyLessons } from './policy';
import { foundationLessons } from './foundations';
import { webLessons } from './web';
import { apiIdentityLessons } from './api-identity';
import { platformLessons } from './platforms';
import { advancedLessons } from './advanced';

/**
 * Thân bài học của toàn bộ module, tra theo `moduleId`.
 *
 * Tách khỏi file định nghĩa module để mỗi module chỉ khai báo metadata ở một nơi
 * và nội dung dài ở một nơi khác. Validator bắt buộc mọi module phải có ít nhất
 * một phần bài học, nên thiếu ở đây sẽ làm fail `npm run validate:data`.
 */
export const LESSONS_BY_MODULE: Record<string, LessonSection[]> = {
  ...policyLessons,
  ...foundationLessons,
  ...webLessons,
  ...apiIdentityLessons,
  ...platformLessons,
  ...advancedLessons,
};
