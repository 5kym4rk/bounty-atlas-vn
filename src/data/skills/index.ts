import type { PracticalAssessment, Skill } from '@/schemas/entities';

/** Kỹ năng có thể đánh giá được, dùng cho skill profile và gap analysis. */
export const skills: Skill[] = [
  {
    id: 'skl-read-program-policy',
    titleVi: 'Đọc và diễn giải chính sách chương trình',
    descriptionVi:
      'Chuyển một trang chính sách thành checklist cá nhân, xác định được phạm vi, hành vi bị cấm, giới hạn kỹ thuật và quy định dữ liệu.',
    domainIds: ['dom-policy'],
    difficulty: 'foundation',
  },
  {
    id: 'skl-stop-discipline',
    titleVi: 'Kỷ luật dừng đúng lúc',
    descriptionVi:
      'Nhận ra chín điều kiện dừng trong tình huống thực tế và dừng lại thay vì đi tiếp theo quán tính.',
    domainIds: ['dom-policy', 'dom-methodology'],
    difficulty: 'foundation',
  },
  {
    id: 'skl-write-report',
    titleVi: 'Viết báo cáo lỗ hổng tái hiện được',
    descriptionVi:
      'Viết báo cáo có tiêu đề rõ, bước tái hiện đủ, tách tác động kỹ thuật và kinh doanh, nêu dữ liệu đã tiếp xúc và khuyến nghị ở mức nguyên tắc.',
    domainIds: ['dom-policy'],
    difficulty: 'beginner',
  },
  {
    id: 'skl-severity-scoring',
    titleVi: 'Chấm mức nghiêm trọng dựa trên bằng chứng',
    descriptionVi:
      'Chọn vector CVSS phù hợp, gán CWE đúng nguyên nhân gốc và giải thích được từng lựa chọn.',
    domainIds: ['dom-policy'],
    difficulty: 'intermediate',
  },
  {
    id: 'skl-read-http',
    titleVi: 'Đọc hiểu lưu lượng HTTP',
    descriptionVi:
      'Đọc một cặp request/response đầy đủ và giải thích vai trò của từng header liên quan tới phiên, cache và bảo mật.',
    domainIds: ['dom-foundations', 'dom-web'],
    difficulty: 'foundation',
  },
  {
    id: 'skl-map-attack-surface',
    titleVi: 'Lập bản đồ bề mặt tấn công',
    descriptionVi:
      'Chuyển danh sách tài sản thành sơ đồ hệ thống có vai trò, dữ liệu và trust boundary được chú thích.',
    domainIds: ['dom-methodology'],
    difficulty: 'beginner',
  },
  {
    id: 'skl-authz-matrix',
    titleVi: 'Lập và chạy ma trận phân quyền',
    descriptionVi:
      'Dựng ma trận vai trò × đối tượng × thao tác và kiểm thử có hệ thống thay vì thử ngẫu nhiên.',
    domainIds: ['dom-web', 'dom-api'],
    difficulty: 'intermediate',
  },
  {
    id: 'skl-safe-poc',
    titleVi: 'Thiết kế PoC tối thiểu an toàn',
    descriptionVi:
      'Chọn cách chứng minh nhỏ nhất đủ thuyết phục mà không chạm dữ liệu người thật và không gây ảnh hưởng dịch vụ.',
    domainIds: ['dom-methodology', 'dom-privacy'],
    difficulty: 'intermediate',
  },
  {
    id: 'skl-false-positive-triage',
    titleVi: 'Loại bỏ dương tính giả',
    descriptionVi:
      'Xác minh lại một quan sát bằng ít nhất hai cách độc lập trước khi coi nó là lỗ hổng.',
    domainIds: ['dom-methodology'],
    difficulty: 'intermediate',
  },
  {
    id: 'skl-source-sink-reading',
    titleVi: 'Đọc mã theo luồng nguồn tới điểm nhận',
    descriptionVi:
      'Lần theo một tham số từ điểm vào tới truy vấn, lệnh, tệp hoặc template và nhận ra phép biến đổi không thực sự làm sạch.',
    domainIds: ['dom-code-review'],
    difficulty: 'advanced',
  },
  {
    id: 'skl-cloud-iam-reading',
    titleVi: 'Đọc chính sách IAM',
    descriptionVi:
      'Xác định chính xác một chính sách cho phép gì, ai nhận được vai trò nào và điều kiện ràng buộc là gì.',
    domainIds: ['dom-cloud'],
    difficulty: 'advanced',
  },
  {
    id: 'skl-mobile-static-review',
    titleVi: 'Rà soát tĩnh ứng dụng di động',
    descriptionVi:
      'Đọc manifest và cấu hình để liệt kê thành phần truy cập được từ ngoài và điểm vào của ứng dụng.',
    domainIds: ['dom-mobile'],
    difficulty: 'intermediate',
  },
  {
    id: 'skl-invariant-testing',
    titleVi: 'Viết kiểm thử bất biến',
    descriptionVi:
      'Phát biểu một tính chất phải luôn đúng của hệ thống và dùng fuzzing để tìm chuỗi thao tác phá vỡ nó.',
    domainIds: ['dom-web3', 'dom-binary'],
    difficulty: 'research',
  },
  {
    id: 'skl-privacy-impact-writing',
    titleVi: 'Mô tả tác động quyền riêng tư mà không giữ dữ liệu',
    descriptionVi:
      'Định lượng phạm vi rò rỉ từ cấu trúc phản hồi thay vì từ việc thu thập dữ liệu.',
    domainIds: ['dom-privacy'],
    difficulty: 'intermediate',
  },
  {
    id: 'skl-ai-trust-boundary',
    titleVi: 'Xác định ranh giới tin cậy trong hệ thống AI',
    descriptionVi:
      'Chỉ ra nội dung không tin cậy đi vào ngữ cảnh mô hình ở đâu và đầu ra mô hình được tin tưởng ở đâu.',
    domainIds: ['dom-ai'],
    difficulty: 'advanced',
  },
  {
    id: 'skl-oss-disclosure',
    titleVi: 'Công bố có phối hợp với dự án nguồn mở',
    descriptionVi:
      'Tìm đúng kênh báo cáo riêng tư, viết cho maintainer tình nguyện và thoả thuận thời gian công bố hợp lý.',
    domainIds: ['dom-code-review', 'dom-supply-chain'],
    difficulty: 'intermediate',
  },
];

/** Bài đánh giá thực hành: kết hợp lab và bài tập viết báo cáo. */
export const assessments: PracticalAssessment[] = [
  {
    id: 'pas-web-authz',
    titleVi: 'Đánh giá thực hành: phân quyền web',
    moduleIds: ['mod-web-idor', 'mod-web-privilege-escalation'],
    labId: 'lab-psa-access-control',
    hiddenCategory: true,
    requiredEvidence: [
      'Ma trận vai trò × đối tượng đã lập cho lab',
      'Request tối thiểu chứng minh vượt kiểm tra phân quyền',
      'Bản báo cáo hoàn chỉnh theo bài tập tương ứng',
    ],
    reportExerciseId: 'rex-idor-basic',
  },
  {
    id: 'pas-api-bola',
    titleVi: 'Đánh giá thực hành: phân quyền API',
    moduleIds: ['mod-api-bola', 'mod-api-testing-workflow'],
    labId: 'lab-crapi',
    hiddenCategory: true,
    requiredEvidence: [
      'Ma trận vai trò × đối tượng × thao tác dựng từ schema',
      'Cặp request đối xứng chứng minh truy cập chéo',
      'Bản báo cáo hoàn chỉnh',
    ],
    reportExerciseId: 'rex-bola-api',
  },
  {
    id: 'pas-identity-oauth',
    titleVi: 'Đánh giá thực hành: luồng OAuth',
    moduleIds: ['mod-identity-oauth'],
    labId: 'lab-psa-oauth',
    hiddenCategory: true,
    requiredEvidence: [
      'Sơ đồ luồng uỷ quyền đã vẽ lại',
      'Bằng chứng chuyển hướng mã uỷ quyền tới đích do bạn kiểm soát',
      'Bản báo cáo hoàn chỉnh',
    ],
    reportExerciseId: 'rex-oauth-redirect',
  },
  {
    id: 'pas-cloud-iam',
    titleVi: 'Đánh giá thực hành: IAM trên cloud',
    moduleIds: ['mod-cloud-aws-iam', 'mod-cloud-attack-classes'],
    labId: 'lab-cloudgoat',
    hiddenCategory: true,
    requiredEvidence: [
      'Chuỗi quyền đi từ danh tính ban đầu tới mục tiêu',
      'Xác nhận đã dọn dẹp toàn bộ tài nguyên',
      'Bản báo cáo hoàn chỉnh',
    ],
    reportExerciseId: 'rex-cloud-public-storage',
  },
  {
    id: 'pas-web3-contract',
    titleVi: 'Đánh giá thực hành: hợp đồng thông minh',
    moduleIds: ['mod-web3-access-control', 'mod-web3-testing'],
    labId: 'lab-foundry-invariant',
    hiddenCategory: true,
    requiredEvidence: [
      'Bất biến đã phát biểu cho giao thức',
      'Test chạy được chứng minh vấn đề',
      'Bản báo cáo hoàn chỉnh',
    ],
    reportExerciseId: 'rex-web3-access-control',
  },
  {
    id: 'pas-ai-agent',
    titleVi: 'Đánh giá thực hành: phân quyền agent AI',
    moduleIds: ['mod-ai-agent-authz', 'mod-ai-rag-isolation'],
    labId: 'lab-rag-isolation-local',
    hiddenCategory: true,
    requiredEvidence: [
      'Ma trận công cụ × quyền đối chiếu với quyền người dùng',
      'Bằng chứng vượt ranh giới giữa hai tài khoản do bạn tạo',
      'Bản báo cáo hoàn chỉnh',
    ],
    reportExerciseId: 'rex-ai-agent-authz',
  },
  {
    id: 'pas-mobile-storage',
    titleVi: 'Đánh giá thực hành: lưu trữ ứng dụng di động',
    moduleIds: ['mod-mobile-android-storage'],
    labId: 'lab-mobile-android-storage',
    hiddenCategory: true,
    requiredEvidence: [
      'Danh sách vị trí lưu trữ đã khảo sát',
      'Bằng chứng đã che thông tin nhạy cảm',
      'Bản báo cáo hoàn chỉnh',
    ],
    reportExerciseId: 'rex-mobile-storage',
  },
  {
    id: 'pas-code-review',
    titleVi: 'Đánh giá thực hành: rà soát mã và phân tích biến thể',
    moduleIds: ['mod-code-source-sink', 'mod-code-variant-analysis'],
    labId: 'lab-codeql-local',
    hiddenCategory: true,
    requiredEvidence: [
      'Truy vấn hoặc mẫu tìm kiếm đã dùng',
      'Test case chứng minh biến thể là thật',
      'Bản báo cáo hoàn chỉnh gửi qua kênh riêng tư',
    ],
    reportExerciseId: 'rex-code-review-variant',
  },
];
