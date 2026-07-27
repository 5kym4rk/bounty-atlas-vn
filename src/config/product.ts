/**
 * Tên sản phẩm và các hằng số nhận diện.
 *
 * Mọi nơi khác trong mã nguồn PHẢI đọc tên từ file này. Không hard-code chuỗi
 * "BountyAtlas VN" ở bất kỳ component nào — đổi tên sản phẩm chỉ cần sửa ở đây.
 */
export const PRODUCT = {
  /** Tên hiển thị đầy đủ. */
  name: 'BountyAtlas VN',
  /** Tên ngắn dùng cho header hẹp và tiêu đề tab. */
  shortName: 'BountyAtlas',
  /** Slug dùng cho repository, IndexedDB và base path. */
  slug: 'bounty-atlas-vn',
  /** Phiên bản nội dung + phần mềm. */
  version: '0.4.0',
  /** Ngày rà soát nội dung gần nhất ở mức sản phẩm (YYYY-MM-DD). */
  contentReviewDate: '2026-07-26',
  taglineVi: 'Bản đồ kiến thức Bug Bounty đa lĩnh vực bằng tiếng Việt',
  descriptionVi:
    'Bản đồ kiến thức mở, có version và ngày rà soát, giúp bạn biết cần học gì, học theo thứ tự nào, thực hành ở đâu cho hợp pháp, đánh giá kết quả ra sao và viết báo cáo lỗ hổng thế nào.',
  repositoryName: 'bounty-atlas-vn',
} as const;

/**
 * Tuyên bố giới hạn. Sản phẩm KHÔNG được quảng cáo là bao phủ tuyệt đối.
 */
export const COVERAGE_DISCLAIMER_VI =
  `${PRODUCT.name} cung cấp bản đồ kiến thức Bug Bounty đa lĩnh vực tại thời điểm rà soát. ` +
  'Đây là hệ thống mở và cần tiếp tục cập nhật khi tiêu chuẩn, công nghệ, chương trình ' +
  'và bề mặt tấn công thay đổi.';

export const NO_SPONSORSHIP_NOTE_VI =
  'Dự án không được bất kỳ tổ chức nguồn nào bảo trợ, xác nhận hay liên kết. ' +
  'Mọi tên gọi và thương hiệu thuộc về chủ sở hữu tương ứng.';

export const NO_INCOME_PROMISE_NOTE_VI =
  'Dự án không hứa hẹn thu nhập, không dự đoán tiền thưởng và không xếp hạng người học theo tiền thưởng.';
