import type { Standard } from '@/schemas/entities';

/**
 * Chuẩn và taxonomy được tham chiếu xuyên suốt dataset.
 * Mô tả tiếng Việt do dự án tự biên soạn; không sao chép nội dung chuẩn.
 */
export const standards: Standard[] = [
  {
    id: 'std-cwe',
    title: 'Common Weakness Enumeration (CWE)',
    organization: 'MITRE / CISA',
    url: 'https://cwe.mitre.org/',
    descriptionVi:
      'Danh mục cộng đồng phân loại điểm yếu phần mềm và phần cứng. Dùng để đặt tên nhóm nguyên nhân gốc trong báo cáo lỗ hổng, thay vì mô tả tự do.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-capec',
    title: 'Common Attack Pattern Enumeration and Classification (CAPEC)',
    organization: 'MITRE',
    url: 'https://capec.mitre.org/',
    descriptionVi:
      'Danh mục mẫu tấn công, bổ sung cho CWE ở góc nhìn "kẻ tấn công làm gì" thay vì "điểm yếu nằm ở đâu".',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-cvss4',
    title: 'CVSS v4.0',
    organization: 'FIRST.Org',
    url: 'https://www.first.org/cvss/v4.0/',
    descriptionVi:
      'Hệ thống chấm điểm mức độ nghiêm trọng gồm bốn nhóm chỉ số: Base, Threat, Environmental và Supplemental. Điểm CVSS là mức nghiêm trọng kỹ thuật, không phải mức rủi ro kinh doanh.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-owasp-asvs',
    title: 'OWASP Application Security Verification Standard',
    organization: 'OWASP',
    url: 'https://owasp.org/www-project-application-security-verification-standard/',
    descriptionVi:
      'Bộ yêu cầu kiểm chứng bảo mật cho ứng dụng, chia theo mức độ. Hữu ích để biến một quan sát mơ hồ thành một yêu cầu cụ thể bị vi phạm.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-owasp-wstg',
    title: 'OWASP Web Security Testing Guide',
    organization: 'OWASP',
    url: 'https://owasp.org/www-project-web-security-testing-guide/',
    descriptionVi:
      'Hướng dẫn kiểm thử web có cấu trúc theo hạng mục, dùng làm khung khi lập checklist cho một tính năng web.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-owasp-api-top10',
    title: 'OWASP API Security Top 10 (2023)',
    organization: 'OWASP',
    url: 'https://owasp.org/API-Security/',
    descriptionVi:
      'Mười nhóm rủi ro API phổ biến của ấn bản 2023, từ API1 Broken Object Level Authorization tới API10 Unsafe Consumption of APIs.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-owasp-masvs',
    title: 'OWASP MASVS',
    organization: 'OWASP',
    url: 'https://mas.owasp.org/MASVS/',
    descriptionVi:
      'Bộ yêu cầu bảo mật cho ứng dụng di động, chia theo nhóm: lưu trữ, mật mã, xác thực, mạng, tương tác nền tảng, chất lượng mã, khả năng chống can thiệp và quyền riêng tư.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-owasp-mastg',
    title: 'OWASP MASTG',
    organization: 'OWASP',
    url: 'https://mas.owasp.org/MASTG/',
    descriptionVi:
      'Hướng dẫn kiểm thử di động đi kèm MASVS: MASVS nói "cần đạt gì", MASTG nói "kiểm tra thế nào", có phần riêng cho Android và iOS.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-owasp-scsvs',
    title: 'OWASP SCSVS',
    organization: 'OWASP',
    url: 'https://scs.owasp.org/',
    descriptionVi:
      'Bộ tiêu chuẩn kiểm chứng bảo mật smart contract, chia thành 11 nhóm control từ kiến trúc, quản trị mã, logic kinh tế tới oracle, bridge và DeFi.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-owasp-llm-top10',
    title: 'OWASP Top 10 for LLM Applications',
    organization: 'OWASP GenAI Security Project',
    url: 'https://genai.owasp.org/',
    descriptionVi:
      'Danh mục rủi ro cho ứng dụng dùng mô hình ngôn ngữ lớn. Bản hiện hành là ấn bản 2025 do OWASP GenAI Security Project duy trì.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-bugcrowd-vrt',
    title: 'Bugcrowd Vulnerability Rating Taxonomy',
    organization: 'Bugcrowd',
    url: 'https://github.com/bugcrowd/vulnerability-rating-taxonomy',
    descriptionVi:
      'Taxonomy phân loại lỗ hổng kèm mức ưu tiên từ P1 tới P5, thường được nền tảng và chương trình dùng để thống nhất cách gọi tên. Repository chính thức cũng chứa ánh xạ sang CVSS và CWE.',
    sourceClass: 'official-vendor',
  },
  {
    id: 'std-nist-ssdf',
    title: 'NIST SP 800-218 Secure Software Development Framework',
    organization: 'NIST',
    url: 'https://csrc.nist.gov/pubs/sp/800/218/final',
    descriptionVi:
      'Khung thực hành phát triển phần mềm an toàn. Dùng khi cần chỉ ra một khuyến nghị khắc phục thuộc về quy trình chứ không chỉ một dòng mã.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-nist-800-115',
    title: 'NIST SP 800-115 Technical Guide to Information Security Testing',
    organization: 'NIST',
    url: 'https://csrc.nist.gov/pubs/sp/800/115/final',
    descriptionVi:
      'Hướng dẫn kỹ thuật về lập kế hoạch, thực hiện và báo cáo kiểm thử an ninh thông tin, gồm cả ràng buộc pháp lý và quy tắc ứng xử.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-nist-800-82',
    title: 'NIST SP 800-82 Rev. 3 Guide to OT Security',
    organization: 'NIST',
    url: 'https://csrc.nist.gov/pubs/sp/800/82/r3/final',
    descriptionVi:
      'Hướng dẫn bảo mật hệ thống vận hành công nghiệp, nhấn mạnh tính khả dụng và an toàn con người được ưu tiên hơn tính bí mật.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-attack-ics',
    title: 'MITRE ATT&CK for ICS',
    organization: 'MITRE',
    url: 'https://attack.mitre.org/matrices/ics/',
    descriptionVi:
      'Ma trận chiến thuật và kỹ thuật quan sát được trong môi trường ICS, dùng để mô tả tác động ở mức hệ thống vận hành.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-slsa',
    title: 'SLSA — Supply-chain Levels for Software Artifacts',
    organization: 'OpenSSF / Linux Foundation',
    url: 'https://slsa.dev/',
    descriptionVi:
      'Khung với các build level tăng dần nhằm chống can thiệp vào chuỗi cung ứng phần mềm, do một steering group đa tổ chức thuộc OpenSSF duy trì.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-owasp-scvs',
    title: 'OWASP Software Component Verification Standard',
    organization: 'OWASP',
    url: 'https://owasp.org/www-project-software-component-verification-standard/',
    descriptionVi:
      'Bộ yêu cầu kiểm chứng cho thành phần phần mềm bên thứ ba, gắn với SBOM và quản trị phụ thuộc.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-owasp-istg',
    title: 'OWASP IoT Security Testing Guide',
    organization: 'OWASP',
    url: 'https://owasp.org/www-project-iot-security-testing-guide/',
    descriptionVi:
      'Hướng dẫn kiểm thử thiết bị IoT theo từng bề mặt: firmware, giao diện vật lý, dịch vụ mạng, ứng dụng đồng hành và backend.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-openapi',
    title: 'OpenAPI Specification',
    organization: 'OpenAPI Initiative',
    url: 'https://spec.openapis.org/oas/latest.html',
    descriptionVi:
      'Đặc tả mô tả API HTTP. Là điểm khởi đầu tốt nhất cho kiểm thử API theo schema và cho việc lập ma trận role × object.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-graphql',
    title: 'GraphQL Specification',
    organization: 'GraphQL Foundation',
    url: 'https://spec.graphql.org/',
    descriptionVi:
      'Đặc tả ngôn ngữ truy vấn GraphQL, cần đọc để hiểu vì sao độ sâu và độ phức tạp truy vấn là vấn đề tài nguyên.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-rfc9700',
    title: 'RFC 9700 — OAuth 2.0 Security Best Current Practice',
    organization: 'IETF',
    url: 'https://www.rfc-editor.org/rfc/rfc9700',
    descriptionVi:
      'Thực hành tốt nhất hiện hành cho OAuth 2.0: redirect URI, PKCE, state, nonce, xử lý token và các luồng nên tránh.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-oidc-core',
    title: 'OpenID Connect Core 1.0',
    organization: 'OpenID Foundation',
    url: 'https://openid.net/specs/openid-connect-core-1_0.html',
    descriptionVi:
      'Lớp danh tính đặt trên OAuth 2.0: ID token, claim, luồng xác thực và yêu cầu kiểm tra chữ ký, issuer, audience.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-webauthn',
    title: 'Web Authentication (WebAuthn) Level 3',
    organization: 'W3C',
    url: 'https://www.w3.org/TR/webauthn-3/',
    descriptionVi:
      'Chuẩn xác thực bằng khoá công khai trong trình duyệt, nền tảng của passkey; quan trọng khi đánh giá luồng khôi phục tài khoản.',
    sourceClass: 'official-standard',
  },
  {
    id: 'std-nist-ai-rmf',
    title: 'NIST AI Risk Management Framework',
    organization: 'NIST',
    url: 'https://www.nist.gov/itl/ai-risk-management-framework',
    descriptionVi:
      'Khung quản trị rủi ro cho hệ thống AI, dùng để phân biệt vấn đề hành vi mô hình với lỗ hổng bảo mật thực sự.',
    sourceClass: 'official-standard',
  },
];
