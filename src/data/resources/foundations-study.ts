import type { LearningResource } from '@/schemas/entities';
import { defineResource } from '../helpers';

/**
 * Nguồn học cho nền tảng, phương pháp và chính sách chương trình.
 *
 * Cùng quy tắc như các tệp nguồn khác: chỉ liên kết, không sao chép nội dung.
 */

/** Mặc định là tài liệu ở mức nhập môn; mọi trường đều ghi đè được. */
type DocInput = Omit<Parameters<typeof defineResource>[0], 'resourceType'> &
  Partial<Pick<LearningResource, 'resourceType'>>;

function doc(input: DocInput): LearningResource {
  return defineResource({ resourceType: 'documentation', difficulty: 'beginner', ...input });
}

export const foundationsStudyResources: LearningResource[] = [
  // ── Hệ điều hành ─────────────────────────────────────────────────────────
  doc({
    id: 'res-linuxcommand',
    title: 'LinuxCommand.org',
    url: 'https://linuxcommand.org/',
    provider: 'William Shotts',
    descriptionVi:
      'Tài liệu tự học dòng lệnh Linux và shell script, dạy từ thao tác cơ bản tới viết script. Đọc trực tuyến miễn phí; có sách "The Linux Command Line" đi kèm.',
    resourceType: 'course',
    domainIds: ['dom-foundations'],
    sourceClass: 'community',
    sourceOriginNoteVi:
      'Nguồn cộng đồng miễn phí, giấy phép cho phép sao chép nguyên văn. Chọn thay cho Linux Journey vì tên miền linuxjourney.com nay chuyển hướng sang một nền tảng thương mại khác.',
    handsOn: true,
  }),
  doc({
    id: 'res-linux-man-pages',
    title: 'The Linux man-pages project',
    url: 'https://www.kernel.org/doc/man-pages/',
    provider: 'kernel.org',
    descriptionVi:
      'Tài liệu tham chiếu gốc cho lời gọi hệ thống, thư viện C và tệp cấu hình Linux.',
    domainIds: ['dom-foundations'],
    sourceClass: 'project-primary',
    sourceOriginNoteVi: 'Tài liệu chính thức của dự án man-pages.',
    difficulty: 'intermediate',
  }),
  doc({
    id: 'res-ms-windows-security-docs',
    title: 'Windows security documentation',
    url: 'https://learn.microsoft.com/en-us/windows/security/',
    provider: 'Microsoft',
    descriptionVi:
      'Tài liệu bảo mật Windows: mô hình danh tính, token truy cập, kiểm soát ứng dụng và mã hoá.',
    domainIds: ['dom-foundations'],
    sourceClass: 'official-vendor',
    sourceOriginNoteVi: 'Tài liệu chính thức của nhà cung cấp hệ điều hành.',
    difficulty: 'intermediate',
  }),
  doc({
    id: 'res-ms-access-tokens',
    title: 'Access tokens',
    url: 'https://learn.microsoft.com/en-us/windows/win32/secauthz/access-tokens',
    provider: 'Microsoft',
    descriptionVi:
      'Token truy cập của Windows: SID, nhóm, đặc quyền và cách chúng quyết định một tiến trình làm được gì.',
    domainIds: ['dom-foundations'],
    sourceClass: 'official-vendor',
    sourceOriginNoteVi: 'Tài liệu tham chiếu Win32 chính thức.',
    difficulty: 'intermediate',
  }),
  doc({
    id: 'res-sysinternals',
    title: 'Sysinternals',
    url: 'https://learn.microsoft.com/en-us/sysinternals/',
    provider: 'Microsoft',
    descriptionVi:
      'Bộ công cụ quan sát tiến trình, registry, tệp và mạng trên Windows — dùng để hiểu hệ thống chứ không phải để tấn công.',
    domainIds: ['dom-foundations'],
    sourceClass: 'official-vendor',
    sourceOriginNoteVi: 'Bộ công cụ chính thức của Microsoft.',
    handsOn: true,
    difficulty: 'intermediate',
  }),

  // ── Mạng ─────────────────────────────────────────────────────────────────
  doc({
    id: 'res-rfc1122',
    title: 'RFC 1122 — Requirements for Internet Hosts',
    url: 'https://www.rfc-editor.org/rfc/rfc1122',
    provider: 'IETF',
    descriptionVi:
      'Tài liệu nền mô tả chồng giao thức Internet ở tầng liên kết, IP và giao vận, kèm lý do thiết kế.',
    resourceType: 'specification',
    domainIds: ['dom-foundations', 'dom-network'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Tiêu chuẩn IETF.',
    difficulty: 'advanced',
  }),
  doc({
    id: 'res-cloudflare-learning-dns',
    title: 'What is DNS?',
    url: 'https://www.cloudflare.com/learning/dns/what-is-dns/',
    provider: 'Cloudflare',
    descriptionVi:
      'Giải thích quy trình phân giải tên miền theo từng bước, có sơ đồ. Điểm khởi đầu tốt trước khi đọc RFC.',
    resourceType: 'article',
    domainIds: ['dom-foundations', 'dom-network'],
    sourceClass: 'official-vendor',
    sourceOriginNoteVi: 'Trang học của một nhà cung cấp DNS lớn; nội dung trung lập về sản phẩm.',
  }),
  doc({
    id: 'res-rfc1035',
    title: 'RFC 1035 — Domain Names: Implementation and Specification',
    url: 'https://www.rfc-editor.org/rfc/rfc1035',
    provider: 'IETF',
    descriptionVi: 'Đặc tả DNS: định dạng bản ghi, truy vấn, phân cấp vùng và uỷ quyền.',
    resourceType: 'specification',
    domainIds: ['dom-foundations', 'dom-network'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Tiêu chuẩn IETF về DNS.',
    difficulty: 'advanced',
  }),
  doc({
    id: 'res-rfc8446',
    title: 'RFC 8446 — TLS 1.3',
    url: 'https://www.rfc-editor.org/rfc/rfc8446',
    provider: 'IETF',
    descriptionVi: 'Đặc tả TLS 1.3: bắt tay, xác thực danh tính máy chủ và các bộ mã được phép.',
    resourceType: 'specification',
    domainIds: ['dom-foundations', 'dom-network'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Tiêu chuẩn IETF về TLS.',
    difficulty: 'advanced',
  }),
  doc({
    id: 'res-mozilla-tls-config',
    title: 'TLS Configurator (TLSRef)',
    url: 'https://configurator.tlsref.org/',
    provider: 'TLSRef',
    descriptionVi:
      'Sinh cấu hình TLS theo ba mức tương thích. Dùng để đối chiếu khi báo cáo cấu hình TLS yếu.',
    resourceType: 'documentation',
    domainIds: ['dom-network'],
    sourceClass: 'official-vendor',
    sourceOriginNoteVi: 'Công cụ chính thức của Mozilla, là mốc tham chiếu phổ biến trong ngành.',
    handsOn: true,
    difficulty: 'intermediate',
  }),

  // ── Lập trình và mã hoá ──────────────────────────────────────────────────
  doc({
    id: 'res-exercism',
    title: 'Exercism',
    url: 'https://exercism.org/tracks',
    provider: 'Exercism',
    descriptionVi:
      'Bài tập lập trình theo từng ngôn ngữ, có phản hồi tự động. Dùng để đọc hiểu nhiều ngôn ngữ chứ không cần thành thạo tất cả.',
    resourceType: 'course',
    domainIds: ['dom-foundations'],
    sourceClass: 'community',
    sourceOriginNoteVi: 'Nền tảng phi lợi nhuận, miễn phí, chọn vì bao phủ nhiều ngôn ngữ.',
    handsOn: true,
    accountRequired: true,
    difficulty: 'beginner',
  }),
  doc({
    id: 'res-unicode-tr36',
    title: 'Unicode Technical Report #36 — Security Considerations',
    url: 'https://www.unicode.org/reports/tr36/',
    provider: 'Unicode Consortium',
    descriptionVi:
      'Vấn đề bảo mật của Unicode: ký tự nhìn giống nhau, chuẩn hoá, và văn bản đảo chiều hiển thị.',
    resourceType: 'specification',
    domainIds: ['dom-foundations'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Báo cáo kỹ thuật chính thức của Unicode Consortium.',
    difficulty: 'advanced',
  }),
  doc({
    id: 'res-rfc8259',
    title: 'RFC 8259 — The JavaScript Object Notation (JSON)',
    url: 'https://www.rfc-editor.org/rfc/rfc8259',
    provider: 'IETF',
    descriptionVi:
      'Đặc tả JSON, gồm các chỗ mơ hồ mà các bộ phân tích khác nhau xử lý khác nhau — nguồn gốc của nhiều lỗi bất đồng bộ.',
    resourceType: 'specification',
    domainIds: ['dom-foundations'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Tiêu chuẩn IETF về JSON.',
    difficulty: 'intermediate',
  }),
  doc({
    id: 'res-cryptopals',
    title: 'The Cryptopals Crypto Challenges',
    url: 'https://cryptopals.com/',
    provider: 'Cryptopals',
    descriptionVi:
      'Chuỗi bài tập tự làm để hiểu vì sao mật mã bị dùng sai, bắt đầu từ những lỗi cơ bản nhất.',
    resourceType: 'lab-platform',
    domainIds: ['dom-foundations'],
    sourceClass: 'community',
    sourceOriginNoteVi: 'Bộ bài tập cộng đồng đã thành chuẩn mực học mật mã ứng dụng.',
    handsOn: true,
    difficulty: 'advanced',
  }),
  doc({
    id: 'res-cs-crypto-storage',
    title: 'Cryptographic Storage Cheat Sheet',
    url: 'https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html',
    provider: 'OWASP',
    descriptionVi: 'Chọn thuật toán, độ dài khoá và chế độ đúng cho từng mục đích lưu trữ.',
    domainIds: ['dom-foundations'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'OWASP Cheat Sheet Series.',
    difficulty: 'intermediate',
  }),
  doc({
    id: 'res-cs-key-management',
    title: 'Key Management Cheat Sheet',
    url: 'https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html',
    provider: 'OWASP',
    descriptionVi: 'Vòng đời khoá: sinh, lưu, xoay, thu hồi và huỷ.',
    domainIds: ['dom-foundations'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'OWASP Cheat Sheet Series.',
    difficulty: 'intermediate',
  }),

  // ── Git và vòng đời phát triển ───────────────────────────────────────────
  doc({
    id: 'res-pro-git',
    title: 'Pro Git',
    url: 'https://git-scm.com/book/en/v2',
    provider: 'Git',
    descriptionVi:
      'Sách chính thức về Git, đọc trực tuyến miễn phí. Chương về nội bộ Git giải thích vì sao lịch sử không xoá được dễ dàng.',
    resourceType: 'book',
    domainIds: ['dom-foundations', 'dom-code-review'],
    sourceClass: 'project-primary',
    sourceOriginNoteVi: 'Sách chính thức của dự án Git, giấy phép Creative Commons.',
    difficulty: 'beginner',
  }),
  doc({
    id: 'res-cs-cicd',
    title: 'CI/CD Security Cheat Sheet',
    url: 'https://cheatsheetseries.owasp.org/cheatsheets/CI_CD_Security_Cheat_Sheet.html',
    provider: 'OWASP',
    descriptionVi: 'Ranh giới tin cậy trong pipeline: ai kích hoạt được gì, và bí mật lộ ra ở đâu.',
    domainIds: ['dom-foundations', 'dom-supply-chain'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'OWASP Cheat Sheet Series.',
    difficulty: 'intermediate',
  }),
  doc({
    id: 'res-cs-vulnerable-deps',
    title: 'Vulnerable Dependency Management Cheat Sheet',
    url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerable_Dependency_Management_Cheat_Sheet.html',
    provider: 'OWASP',
    descriptionVi:
      'Quy trình xử lý khi một phụ thuộc bị công bố lỗ hổng, gồm cách đánh giá mức khai thác thật.',
    domainIds: ['dom-foundations', 'dom-supply-chain'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'OWASP Cheat Sheet Series.',
    difficulty: 'intermediate',
  }),

  // ── Mô hình bảo mật ──────────────────────────────────────────────────────
  doc({
    id: 'res-cs-threat-modeling',
    title: 'Threat Modeling Cheat Sheet',
    url: 'https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html',
    provider: 'OWASP',
    descriptionVi:
      'Quy trình mô hình hoá mối đe doạ bốn câu hỏi, đủ gọn để áp dụng cho một tính năng.',
    domainIds: ['dom-foundations', 'dom-methodology'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'OWASP Cheat Sheet Series.',
    difficulty: 'intermediate',
  }),
  doc({
    id: 'res-cs-attack-surface',
    title: 'Attack Surface Analysis Cheat Sheet',
    url: 'https://cheatsheetseries.owasp.org/cheatsheets/Attack_Surface_Analysis_Cheat_Sheet.html',
    provider: 'OWASP',
    descriptionVi: 'Cách liệt kê bề mặt tấn công một cách có hệ thống thay vì dò ngẫu nhiên.',
    domainIds: ['dom-foundations', 'dom-methodology'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'OWASP Cheat Sheet Series.',
    difficulty: 'intermediate',
  }),
  doc({
    id: 'res-owasp-threat-model-project',
    title: 'OWASP Threat Modeling Project',
    url: 'https://owasp.org/www-community/Threat_Modeling',
    provider: 'OWASP',
    descriptionVi:
      'Trang cộng đồng tổng hợp các phương pháp mô hình hoá mối đe doạ và khi nào dùng cái nào.',
    resourceType: 'article',
    domainIds: ['dom-foundations'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Trang cộng đồng chính thức của OWASP.',
    difficulty: 'intermediate',
  }),
  doc({
    id: 'res-cs-logging',
    title: 'Logging Cheat Sheet',
    url: 'https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html',
    provider: 'OWASP',
    descriptionVi:
      'Ghi nhận sự kiện: nên ghi gì, không nên ghi gì, và vì sao thiếu log làm cả phòng thủ lẫn điều tra bế tắc.',
    domainIds: ['dom-foundations'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'OWASP Cheat Sheet Series.',
    difficulty: 'intermediate',
  }),

  // ── Phương pháp ──────────────────────────────────────────────────────────
  doc({
    id: 'res-wstg-methodology',
    title: 'WSTG — Testing methodology',
    url: 'https://owasp.org/www-project-web-security-testing-guide/latest/3-The_OWASP_Testing_Framework/1-Penetration_Testing_Methodologies',
    provider: 'OWASP',
    descriptionVi:
      'Chương về phương pháp kiểm thử trong Web Security Testing Guide: các khung phương pháp và chỗ đứng của từng cái.',
    resourceType: 'testing-guide',
    domainIds: ['dom-methodology'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Chương cụ thể trong WSTG, không phải trang chủ dự án.',
    difficulty: 'intermediate',
  }),
  doc({
    id: 'res-wstg-info-gathering',
    title: 'WSTG — Information Gathering',
    url: 'https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/01-Information_Gathering/',
    provider: 'OWASP',
    descriptionVi:
      'Nhóm bài kiểm thử thu thập thông tin, mỗi bài có mục tiêu và cách làm rõ ràng — dùng làm khung cho bước lập bản đồ tài sản.',
    resourceType: 'testing-guide',
    domainIds: ['dom-methodology'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Chương cụ thể trong WSTG.',
    difficulty: 'intermediate',
  }),
  doc({
    id: 'res-burp-getting-started',
    title: 'Burp Suite — Getting started',
    url: 'https://portswigger.net/burp/documentation/desktop/getting-started',
    provider: 'PortSwigger',
    descriptionVi:
      'Hướng dẫn cài chứng chỉ, cấu hình proxy và chặn bắt request đầu tiên. Bản Community miễn phí là đủ cho phần lớn module ở đây.',
    domainIds: ['dom-methodology'],
    sourceClass: 'official-vendor',
    sourceOriginNoteVi: 'Tài liệu chính thức của công cụ.',
    handsOn: true,
    difficulty: 'beginner',
  }),
  doc({
    id: 'res-chrome-devtools',
    title: 'Chrome DevTools documentation',
    url: 'https://developer.chrome.com/docs/devtools',
    provider: 'Google',
    descriptionVi:
      'Tài liệu DevTools: tab Network, Sources, Application và Console — đủ để quan sát phần lớn hành vi phía client mà không cần proxy.',
    domainIds: ['dom-methodology'],
    sourceClass: 'official-vendor',
    sourceOriginNoteVi: 'Tài liệu chính thức của trình duyệt.',
    handsOn: true,
    difficulty: 'beginner',
  }),
  doc({
    id: 'res-mitmproxy-docs',
    title: 'mitmproxy documentation',
    url: 'https://docs.mitmproxy.org/stable/',
    provider: 'mitmproxy',
    descriptionVi:
      'Proxy chặn bắt dòng lệnh, hữu ích khi kiểm thử ứng dụng di động và các client không phải trình duyệt.',
    domainIds: ['dom-methodology', 'dom-mobile'],
    sourceClass: 'project-primary',
    sourceOriginNoteVi: 'Tài liệu chính thức của dự án.',
    handsOn: true,
    difficulty: 'intermediate',
  }),

  // ── Chính sách chương trình ──────────────────────────────────────────────
  doc({
    id: 'res-cisa-vdp-guidance',
    title: 'CISA — Vulnerability Disclosure Policy template',
    url: 'https://www.cisa.gov/vulnerability-disclosure-policy-template',
    provider: 'CISA',
    descriptionVi:
      'Mẫu chính sách công bố lỗ hổng của cơ quan chính phủ Mỹ. Đọc để biết một chính sách đầy đủ gồm những mục nào.',
    resourceType: 'documentation',
    domainIds: ['dom-policy'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Tài liệu chính thức của cơ quan an ninh mạng liên bang Hoa Kỳ.',
    difficulty: 'beginner',
  }),
  doc({
    id: 'res-iso-29147',
    title: 'ISO/IEC 29147 — Vulnerability disclosure',
    url: 'https://www.iso.org/standard/72311.html',
    provider: 'ISO',
    descriptionVi:
      'Tiêu chuẩn quốc tế về quy trình tiếp nhận và công bố lỗ hổng. Trang này mô tả phạm vi; bản đầy đủ là tài liệu trả phí.',
    resourceType: 'standard',
    domainIds: ['dom-policy'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Trang mô tả tiêu chuẩn trên website chính thức của ISO.',
    accessType: 'paid',
    difficulty: 'advanced',
  }),
  doc({
    id: 'res-cert-cvd-guide',
    title: 'The CERT Guide to Coordinated Vulnerability Disclosure',
    url: 'https://certcc.github.io/CERT-Guide-to-CVD/',
    provider: 'CERT/CC',
    descriptionVi:
      'Sách hướng dẫn công bố có phối hợp: vai trò các bên, xử lý bất đồng và các tình huống khó.',
    resourceType: 'book',
    domainIds: ['dom-policy', 'dom-code-review'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Tài liệu chính thức của CERT Coordination Center.',
    difficulty: 'intermediate',
  }),
  doc({
    id: 'res-disclose-io',
    title: 'disclose.io — Safe harbor terms',
    url: 'https://github.com/disclose/dioterms',
    provider: 'disclose.io',
    descriptionVi:
      'Bộ điều khoản safe harbor chuẩn hoá mà nhiều chương trình tham chiếu tới, kèm bản giải thích từng đoạn.',
    resourceType: 'repository',
    domainIds: ['dom-policy'],
    sourceClass: 'community',
    sourceOriginNoteVi:
      'Dự án cộng đồng, chọn vì là bộ điều khoản được nhiều chương trình lớn dẫn chiếu trực tiếp.',
    difficulty: 'intermediate',
  }),
  doc({
    id: 'res-cvss31-spec',
    title: 'CVSS v3.1 Specification Document',
    url: 'https://www.first.org/cvss/v3-1/specification-document',
    provider: 'FIRST',
    descriptionVi:
      'Đặc tả CVSS 3.1 — vẫn là phiên bản nhiều chương trình dùng. Đọc phần định nghĩa từng chỉ số trước khi tự chấm điểm.',
    resourceType: 'standard',
    domainIds: ['dom-policy'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Đặc tả chính thức của FIRST.',
    difficulty: 'intermediate',
  }),
  doc({
    id: 'res-cvss31-calculator',
    title: 'CVSS v3.1 Calculator',
    url: 'https://www.first.org/cvss/calculator/3-1',
    provider: 'FIRST',
    descriptionVi: 'Công cụ chấm điểm chính thức, sinh ra chuỗi vector để dán vào báo cáo.',
    domainIds: ['dom-policy'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Công cụ chính thức của FIRST.',
    handsOn: true,
    difficulty: 'intermediate',
  }),
  doc({
    id: 'res-cwe-top25',
    title: 'CWE Top 25 Most Dangerous Software Weaknesses',
    url: 'https://cwe.mitre.org/top25/',
    provider: 'MITRE',
    descriptionVi:
      'Danh sách các lớp điểm yếu gặp nhiều nhất, tính từ dữ liệu lỗ hổng thật. Dùng để định hướng thứ tự học.',
    resourceType: 'taxonomy',
    domainIds: ['dom-policy', 'dom-methodology'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Danh sách chính thức của MITRE.',
    difficulty: 'beginner',
  }),
  doc({
    id: 'res-h1-report-quality',
    title: 'HackerOne — Submitting reports',
    url: 'https://docs.hackerone.com/en/articles/8473994-submitting-reports',
    provider: 'HackerOne',
    descriptionVi:
      'Hướng dẫn chính thức về cách nộp báo cáo: cấu trúc, bằng chứng cần có và những gì làm báo cáo bị đóng.',
    domainIds: ['dom-policy'],
    sourceClass: 'official-vendor',
    sourceOriginNoteVi: 'Tài liệu chính thức của nền tảng.',
    difficulty: 'beginner',
  }),
  doc({
    id: 'res-h1-report-states',
    title: 'HackerOne — Report states',
    url: 'https://docs.hackerone.com/en/articles/8475030-report-states',
    provider: 'HackerOne',
    descriptionVi:
      'Ý nghĩa từng trạng thái báo cáo, từ New tới Resolved, Informative và Duplicate — và điều gì khiến trạng thái đổi.',
    domainIds: ['dom-policy'],
    sourceClass: 'official-vendor',
    sourceOriginNoteVi: 'Tài liệu chính thức của nền tảng.',
    difficulty: 'beginner',
  }),
  doc({
    id: 'res-google-bughunters-rules',
    title: 'Google Bug Hunters — Program rules',
    url: 'https://bughunters.google.com/about/rules',
    provider: 'Google',
    descriptionVi:
      'Chính sách chương trình của một hãng lớn: phạm vi, những gì bị cấm và cách xác định mức thưởng.',
    domainIds: ['dom-policy'],
    sourceClass: 'official-vendor',
    sourceOriginNoteVi: 'Chính sách chính thức, dùng làm ví dụ thực tế để tập đọc phạm vi.',
    difficulty: 'beginner',
  }),
  doc({
    id: 'res-msrc-bounty-terms',
    title: 'Microsoft Bug Bounty — Terms and conditions',
    url: 'https://www.microsoft.com/en-us/msrc/bounty-terms',
    provider: 'Microsoft',
    descriptionVi:
      'Điều khoản chương trình của Microsoft — một ví dụ khác về cách một hãng lớn viết phạm vi và điều kiện.',
    domainIds: ['dom-policy'],
    sourceClass: 'official-vendor',
    sourceOriginNoteVi:
      'Điều khoản chính thức, dùng để so sánh cách viết chính sách giữa các hãng.',
    difficulty: 'beginner',
  }),
];
