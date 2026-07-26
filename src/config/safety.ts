/**
 * Nguồn duy nhất cho các tuyên bố an toàn. Xem SAFETY_MODEL.md.
 */

/** Tuyên bố an toàn bắt buộc, hiển thị ở onboarding, lab, checklist, report builder. */
export const SAFETY_STATEMENT_VI =
  'Chỉ kiểm thử hệ thống do bạn sở hữu, phòng lab được thiết kế để thực hành, ' +
  'thiết bị thuộc quyền sở hữu của bạn, testnet/local chain, hoặc tài sản được một ' +
  'chương trình còn hiệu lực cho phép rõ ràng. Luôn đọc phạm vi, giới hạn kỹ thuật, ' +
  'safe harbor, quy định xử lý dữ liệu và điều khoản công bố trước khi thử nghiệm.';

/** Chín tình huống bắt buộc dừng kiểm thử. */
export const STOP_TESTING_RULES_VI: readonly string[] = [
  'Bạn chạm tới dữ liệu của người khác.',
  'Có dấu hiệu gây suy giảm dịch vụ.',
  'Phải vượt quá PoC tối thiểu mới chứng minh được.',
  'Phải thay đổi hoặc xoá dữ liệu.',
  'Phải gửi email hoặc tin nhắn hàng loạt.',
  'Phải thao tác lên tài khoản thật của người khác.',
  'Phải tác động tới nhà cung cấp bên thứ ba.',
  'Chính sách chương trình không rõ ràng.',
  'Bạn không chắc asset nằm trong phạm vi.',
];

/** Những gì sản phẩm này không làm. Hiển thị ở trang Giới thiệu và onboarding. */
export const NOT_A_TOOL_FOR_VI: readonly string[] = [
  'Quét mục tiêu trên Internet',
  'Tự động săn bounty',
  'Tự động khai thác lỗ hổng',
  'Lưu trữ payload phá hoại',
  'Credential stuffing',
  'Phishing',
  'Tạo malware',
  'Tấn công từ chối dịch vụ',
  'Che giấu hoạt động kiểm thử',
  'Gửi báo cáo hàng loạt',
  'Khuyến khích kiểm thử ngoài phạm vi',
];

/** Các route yêu cầu người dùng xác nhận tuyên bố an toàn trước khi mở. */
export const SAFETY_GATED_ROUTES: readonly string[] = [
  '/labs',
  '/checklists',
  '/report-builder',
  '/triage',
];

/** Giới hạn kích thước file import (byte). */
export const MAX_IMPORT_BYTES = 8 * 1024 * 1024;

/** Giới hạn kích thước một ảnh bằng chứng lưu cục bộ (byte). */
export const MAX_EVIDENCE_IMAGE_BYTES = 512 * 1024;
