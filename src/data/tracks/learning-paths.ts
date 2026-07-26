import type { LearningPath } from '@/schemas/entities';

/**
 * Chín lộ trình gợi ý. Người học KHÔNG bị khoá vào một lộ trình — mọi domain
 * luôn mở, prerequisite chỉ là cảnh báo có giải thích lý do.
 */
export const learningPaths: LearningPath[] = [
  {
    id: 'pth-general',
    titleVi: 'Bug Bounty tổng quát',
    summaryVi: 'Lộ trình mặc định cho người muốn có nền tảng rộng trước khi chọn chuyên sâu.',
    audienceVi: 'Người mới bắt đầu, chưa xác định lĩnh vực muốn đi sâu.',
    steps: [
      { label: 'Chính sách và phạm vi', domainId: 'dom-policy' },
      { label: 'Kiến thức nền', domainId: 'dom-foundations' },
      { label: 'Phương pháp kiểm thử', domainId: 'dom-methodology' },
      { label: 'Web', domainId: 'dom-web' },
      { label: 'API', domainId: 'dom-api' },
      { label: 'Identity', domainId: 'dom-identity' },
      { label: 'Mobile', domainId: 'dom-mobile' },
      { label: 'Cloud', domainId: 'dom-cloud' },
      { label: 'Chuyên sâu về báo cáo', domainId: 'dom-policy' },
    ],
  },
  {
    id: 'pth-web-api',
    titleVi: 'Chuyên sâu Web và API',
    summaryVi:
      'Đi sâu vào bề mặt web và API, từ HTTP tới các chủ đề nâng cao về nhiều lớp trung gian.',
    audienceVi: 'Người đã có nền lập trình web và muốn tập trung vào ứng dụng.',
    steps: [
      { label: 'Kiến thức nền', domainId: 'dom-foundations' },
      { label: 'HTTP và trình duyệt', domainId: 'dom-foundations' },
      { label: 'Web phía máy chủ', domainId: 'dom-web' },
      { label: 'Web phía trình duyệt', domainId: 'dom-web' },
      { label: 'Phân quyền', domainId: 'dom-web' },
      { label: 'Logic nghiệp vụ', domainId: 'dom-web' },
      { label: 'API', domainId: 'dom-api' },
      { label: 'Identity', domainId: 'dom-identity' },
      { label: 'HTTP nâng cao', domainId: 'dom-web' },
    ],
  },
  {
    id: 'pth-mobile',
    titleVi: 'Chuyên sâu Mobile',
    summaryVi:
      'Android hoặc iOS, mạng và backend của ứng dụng di động, cùng phần dịch ngược cơ bản.',
    audienceVi: 'Người muốn tập trung vào ứng dụng di động và backend của chúng.',
    steps: [
      { label: 'Kiến thức nền', domainId: 'dom-foundations' },
      { label: 'Web và API', domainId: 'dom-api' },
      { label: 'Kiến trúc mobile', domainId: 'dom-mobile' },
      { label: 'Android hoặc iOS', domainId: 'dom-mobile' },
      { label: 'Mạng và API của ứng dụng', domainId: 'dom-mobile' },
      { label: 'Dịch ngược ứng dụng', domainId: 'dom-binary' },
      { label: 'Quyền riêng tư trên thiết bị', domainId: 'dom-privacy' },
    ],
  },
  {
    id: 'pth-cloud-native',
    titleVi: 'Chuyên sâu Cloud-native',
    summaryVi: 'Từ mạng và IAM tới container, Kubernetes, CI/CD và chuỗi cung ứng.',
    audienceVi: 'Người có nền vận hành hệ thống hoặc muốn đi về hướng hạ tầng.',
    steps: [
      { label: 'Kiến thức nền', domainId: 'dom-foundations' },
      { label: 'Mạng', domainId: 'dom-network' },
      { label: 'IAM và nền tảng cloud', domainId: 'dom-cloud' },
      { label: 'Nhóm vấn đề cloud', domainId: 'dom-cloud' },
      { label: 'Container', domainId: 'dom-container' },
      { label: 'Kubernetes', domainId: 'dom-container' },
      { label: 'CI/CD và chuỗi cung ứng', domainId: 'dom-supply-chain' },
    ],
  },
  {
    id: 'pth-native-iot',
    titleVi: 'Chuyên sâu Native và IoT',
    summaryVi:
      'Từ C/C++ và assembly tới dịch ngược, desktop, firmware, phần cứng và hệ sinh thái IoT.',
    audienceVi: 'Người thích đi sâu về hệ thống và chấp nhận đường học dốc.',
    steps: [
      { label: 'Kiến thức nền', domainId: 'dom-foundations' },
      { label: 'Desktop và thick client', domainId: 'dom-desktop' },
      { label: 'Nền tảng dịch ngược', domainId: 'dom-binary' },
      { label: 'Lỗi bộ nhớ và cơ chế giảm thiểu', domainId: 'dom-binary' },
      { label: 'Hệ sinh thái IoT', domainId: 'dom-iot' },
      { label: 'Firmware', domainId: 'dom-iot' },
      { label: 'Giao diện phần cứng', domainId: 'dom-iot' },
      { label: 'Không dây', domainId: 'dom-wireless' },
    ],
  },
  {
    id: 'pth-code-review',
    titleVi: 'Chuyên sâu Rà soát mã nguồn',
    summaryVi:
      'Từ lập trình và kiến trúc tới threat modeling, đọc mã, rà soát bản vá và công bố nguồn mở.',
    audienceVi: 'Người có nền lập trình vững và thích làm việc với mã nguồn.',
    steps: [
      { label: 'Kiến thức nền', domainId: 'dom-foundations' },
      { label: 'Kiến trúc web và API', domainId: 'dom-web' },
      { label: 'Mô hình hoá mối đe doạ', domainId: 'dom-foundations' },
      { label: 'Đọc mã theo luồng dữ liệu', domainId: 'dom-code-review' },
      { label: 'Rà soát bản vá và biến thể', domainId: 'dom-code-review' },
      { label: 'Công cụ hỗ trợ', domainId: 'dom-code-review' },
      { label: 'Chuỗi cung ứng', domainId: 'dom-supply-chain' },
      { label: 'Công bố nguồn mở', domainId: 'dom-code-review' },
    ],
  },
  {
    id: 'pth-web3',
    titleVi: 'Chuyên sâu Web3',
    summaryVi: 'Từ nền tảng blockchain và Solidity tới các nhóm lỗ hổng và kiểm thử bất biến.',
    audienceVi: 'Người quan tâm tới hợp đồng thông minh và logic kinh tế.',
    steps: [
      { label: 'Chính sách và phạm vi', domainId: 'dom-policy' },
      { label: 'Lập trình', domainId: 'dom-foundations' },
      { label: 'Blockchain và EVM', domainId: 'dom-web3' },
      { label: 'Nhóm lỗ hổng hợp đồng', domainId: 'dom-web3' },
      { label: 'Kiểm thử và bất biến', domainId: 'dom-web3' },
    ],
  },
  {
    id: 'pth-ai',
    titleVi: 'Chuyên sâu AI và LLM',
    summaryVi:
      'Từ web, API và identity tới kiến trúc AI, phân quyền công cụ, bảo mật agent và chính sách AI.',
    audienceVi: 'Người muốn làm việc với hệ thống AI và agent.',
    steps: [
      { label: 'Kiến thức nền', domainId: 'dom-foundations' },
      { label: 'Web và API', domainId: 'dom-api' },
      { label: 'Identity', domainId: 'dom-identity' },
      { label: 'Kiến trúc hệ thống AI', domainId: 'dom-ai' },
      { label: 'Prompt và RAG', domainId: 'dom-ai' },
      { label: 'Phân quyền công cụ và agent', domainId: 'dom-ai' },
      { label: 'Chính sách và safe harbor cho AI', domainId: 'dom-ai' },
    ],
  },
  {
    id: 'pth-ot-automotive',
    titleVi: 'Chuyên sâu OT và Automotive',
    summaryVi:
      'Từ mạng và hệ thống nhúng tới kiến trúc giao thức, ràng buộc an toàn và công bố với nhà cung cấp.',
    audienceVi: 'Người có nền kỹ thuật công nghiệp hoặc phương tiện.',
    steps: [
      { label: 'Kiến thức nền', domainId: 'dom-foundations' },
      { label: 'Mạng', domainId: 'dom-network' },
      { label: 'Hệ thống nhúng và firmware', domainId: 'dom-iot' },
      { label: 'Kiến trúc giao thức công nghiệp', domainId: 'dom-ics-ot' },
      { label: 'Ràng buộc an toàn', domainId: 'dom-ics-ot' },
      { label: 'Xe kết nối', domainId: 'dom-automotive' },
    ],
  },
];
