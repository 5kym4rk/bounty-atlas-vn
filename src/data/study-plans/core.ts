import { core, extra, type PlanMap } from './helpers';

/** Lộ trình học cho lĩnh vực A (chính sách), B (nền tảng) và C (phương pháp). */
export const corePlans: PlanMap = {
  // ── A. Chính sách và đạo đức ─────────────────────────────────────────────
  'mod-policy-program-types': [
    core(
      'res-cisa-vdp-guidance',
      'Mẫu chính sách công bố lỗ hổng đầy đủ — mốc để so sánh các loại chương trình.',
    ),
    core(
      'res-h1-safe-harbor',
      'Cách một nền tảng lớn định nghĩa phạm vi bảo vệ cho người nghiên cứu.',
    ),
    core(
      'res-google-bughunters-rules',
      'Một chương trình thật của hãng lớn, đọc để thấy khác biệt với VDP.',
    ),
    extra('res-cert-cvd-guide', 'Vai trò các bên trong công bố có phối hợp.'),
  ],
  'mod-policy-safe-harbor': [
    core('res-h1-safe-harbor', 'Giải thích safe harbor từ phía nền tảng.'),
    core('res-disclose-io', 'Bộ điều khoản chuẩn hoá mà nhiều chương trình dẫn chiếu trực tiếp.'),
    core('res-cert-cvd-guide', 'Xử lý bất đồng và các tình huống khó khi công bố.'),
    extra('res-iso-29147', 'Tiêu chuẩn quốc tế về quy trình công bố lỗ hổng.'),
  ],
  'mod-policy-scope-reading': [
    core('res-h1-defining-scope', 'Cách phạm vi được định nghĩa từ phía chương trình.'),
    core('res-google-bughunters-rules', 'Đọc một chính sách thật từ đầu đến cuối.'),
    core('res-msrc-bounty-terms', 'So sánh cách hai hãng lớn viết phạm vi khác nhau thế nào.'),
    extra(
      'res-h1-scope-best-practices',
      'Thực hành tốt khi viết phạm vi, hữu ích để đọc ngược lại.',
    ),
  ],
  'mod-policy-asset-identifiers': [
    core('res-h1-defining-scope', 'Các loại định danh tài sản mà nền tảng hỗ trợ.'),
    core(
      'res-owasp-subdomain-takeover',
      'Wildcard tên miền kéo theo rủi ro riêng — hiểu trước khi mở rộng phạm vi.',
    ),
    extra(
      'res-msrc-bounty-terms',
      'Ví dụ về phạm vi được liệt kê theo sản phẩm thay vì theo tên miền.',
    ),
  ],
  'mod-policy-stop-rules': [
    core('res-h1-safe-harbor', 'Giới hạn của safe harbor chính là ranh giới phải dừng.'),
    core('res-aws-pentesting-policy', 'Một ví dụ rất rõ về những gì tuyệt đối không được thử.'),
    core('res-gdpr-text', 'Ràng buộc pháp lý khi vô tình chạm vào dữ liệu cá nhân.'),
    extra('res-vn-pdpd', 'Quy định bảo vệ dữ liệu cá nhân áp dụng tại Việt Nam.'),
  ],
  'mod-policy-worklog': [
    core('res-nist-800-115', 'Hướng dẫn kiểm thử của NIST, gồm phần ghi nhận và xử lý dữ liệu.'),
    core('res-cs-logging', 'Nên ghi gì và không nên ghi gì — áp dụng cho chính nhật ký của bạn.'),
    extra('res-nist-privacy-framework', 'Phân loại mức nhạy cảm của thứ bạn vô tình thu được.'),
  ],
  'mod-policy-practice-plan': [
    core(
      'res-portswigger-learning-paths',
      'Lộ trình học có sẵn, dùng làm khung kế hoạch theo tuần.',
    ),
    core('res-cwe-top25', 'Định hướng thứ tự học theo lớp điểm yếu gặp nhiều nhất.'),
    extra('res-hacker101', 'Khoá miễn phí có cấu trúc, phù hợp làm nhịp luyện tập đều.'),
  ],
  'mod-policy-report-structure': [
    core('res-h1-report-quality', 'Hướng dẫn chính thức về cấu trúc và bằng chứng cần có.'),
    core('res-h1-hacktivity', 'Đọc báo cáo thật đã được công khai để thấy cách viết hiệu quả.'),
    extra('res-cs-abuse-case', 'Diễn đạt tác động dưới dạng kịch bản lạm dụng cụ thể.'),
  ],
  'mod-policy-severity': [
    core('res-cvss31-spec', 'Đọc định nghĩa từng chỉ số trước khi tự chấm điểm.'),
    core('res-cvss31-calculator', 'Sinh chuỗi vector để dán vào báo cáo.'),
    core('res-bugcrowd-vrt', 'Thang phân loại theo loại lỗi, nhiều chương trình dùng thay CVSS.'),
    extra('res-cvss4', 'Phiên bản mới hơn, đã có chương trình bắt đầu áp dụng.'),
    extra('res-immunefi-severity', 'Thang riêng cho Web3, tính theo thiệt hại tài sản.'),
  ],
  'mod-policy-triage-states': [
    core('res-h1-report-states', 'Ý nghĩa từng trạng thái và điều gì khiến trạng thái đổi.'),
    core('res-first-psirt-framework', 'Phía nhận báo cáo làm gì với báo cáo của bạn.'),
    extra('res-h1-report-quality', 'Chất lượng báo cáo quyết định phần lớn tốc độ xử lý.'),
  ],

  // ── B. Nền tảng ──────────────────────────────────────────────────────────
  'mod-found-linux': [
    core('res-linux-journey', 'Khoá tự học chia bài ngắn, đủ để dùng được dòng lệnh Linux.'),
    core('res-linux-man-pages', 'Tài liệu tham chiếu gốc cho lời gọi hệ thống và tệp cấu hình.'),
    extra('res-docker-security', 'Quyền và namespace của Linux là nền của cách ly container.'),
  ],
  'mod-found-windows': [
    core('res-ms-windows-security-docs', 'Mô hình bảo mật Windows từ tài liệu chính thức.'),
    core('res-ms-access-tokens', 'Token truy cập quyết định một tiến trình làm được gì.'),
    core('res-sysinternals', 'Công cụ quan sát tiến trình, registry và mạng để hiểu hệ thống.'),
  ],
  'mod-found-tcpip': [
    core('res-rfc1122', 'Tài liệu nền mô tả chồng giao thức Internet kèm lý do thiết kế.'),
    core('res-wireshark-guide', 'Bắt và đọc gói tin thật thay vì học lý thuyết suông.'),
    extra('res-nmap-host-discovery', 'Ý nghĩa thật của việc một máy trả lời hay không trả lời.'),
  ],
  'mod-found-dns-tls': [
    core('res-cloudflare-learning-dns', 'Quy trình phân giải tên miền theo từng bước, có sơ đồ.'),
    core('res-rfc1035', 'Đặc tả DNS: bản ghi, truy vấn và uỷ quyền vùng.'),
    core('res-rfc8446', 'TLS 1.3: bắt tay và xác thực danh tính máy chủ.'),
    extra('res-mozilla-tls-config', 'Mốc tham chiếu khi đánh giá một cấu hình TLS.'),
  ],
  'mod-found-http': [
    core('res-mdn-http', 'Tham chiếu đầy đủ về phương thức, header, mã trạng thái và cookie.'),
    core('res-rfc9110', 'Đặc tả ngữ nghĩa HTTP khi cần lập luận chính xác.'),
    core('res-mdn-cookies', 'Thuộc tính cookie và ảnh hưởng bảo mật của từng cái.'),
    extra(
      'res-rfc6265',
      'Đặc tả cookie gốc, cần tới khi phải lập luận chính xác về phạm vi domain và path.',
    ),
  ],
  'mod-found-browser-model': [
    core('res-mdn-sop', 'Origin và same-origin policy — nền của mọi ranh giới phía trình duyệt.'),
    core('res-mdn-cors', 'Cơ chế vượt same-origin có kiểm soát.'),
    core('res-mdn-csp', 'Lớp chính sách nội dung do trang tự khai báo.'),
    extra('res-cs-html5', 'Các tính năng nền tảng khác có ảnh hưởng bảo mật.'),
  ],
  'mod-found-reading-code': [
    core(
      'res-exercism',
      'Bài tập theo từng ngôn ngữ; mục tiêu là đọc hiểu, không cần thành thạo hết.',
    ),
    core(
      'res-owasp-code-review-guide',
      'Cách đọc mã với con mắt bảo mật thay vì con mắt sửa lỗi chức năng.',
    ),
    extra('res-semgrep-docs', 'Tìm mẫu mã theo cú pháp, hữu ích ngay cả khi mới đọc mã.'),
  ],
  'mod-found-encoding': [
    core('res-unicode-tr36', 'Vấn đề bảo mật của Unicode: ký tự nhìn giống nhau và chuẩn hoá.'),
    core('res-rfc8259', 'Các chỗ mơ hồ trong JSON mà mỗi bộ phân tích xử lý một kiểu.'),
    extra('res-cs-input-validation', 'Chuẩn hoá trước khi kiểm tra, không phải ngược lại.'),
  ],
  'mod-found-crypto-basics': [
    core('res-cs-crypto-storage', 'Chọn thuật toán và chế độ đúng cho từng mục đích.'),
    core('res-cs-key-management', 'Vòng đời khoá: sinh, lưu, xoay, thu hồi.'),
    extra('res-cryptopals', 'Bài tập tự làm để hiểu vì sao mật mã bị dùng sai.'),
  ],
  'mod-found-git': [
    core('res-pro-git', 'Sách chính thức; chương về nội bộ Git giải thích vì sao lịch sử khó xoá.'),
    core('res-gitleaks', 'Quét bí mật trong lịch sử repo của chính bạn để thấy điều đó.'),
    extra('res-gh-private-vuln-reporting', 'Kênh báo cáo riêng tư của GitHub cho dự án nguồn mở.'),
  ],
  'mod-found-sdlc': [
    core('res-cs-cicd', 'Ranh giới tin cậy trong pipeline và chỗ bí mật lộ ra.'),
    core('res-cs-vulnerable-deps', 'Quy trình xử lý khi một phụ thuộc bị công bố lỗ hổng.'),
    core('res-nist-ssdf', 'Khung phát triển phần mềm an toàn của NIST.'),
    extra('res-cyclonedx-spec', 'Định dạng SBOM để biết trong sản phẩm có gì.'),
  ],
  'mod-found-authn-authz-model': [
    core('res-cs-authentication', 'Xác thực: chứng minh bạn là ai.'),
    core('res-cs-authorization', 'Phân quyền: bạn được làm gì. Hai thứ này khác nhau.'),
    core('res-cs-logging', 'Ghi nhận: dấu vết để biết ai đã làm gì.'),
    extra('res-owasp-asvs', 'Tiêu chuẩn xác minh có yêu cầu cụ thể cho cả ba mảng.'),
  ],
  'mod-found-threat-model': [
    core('res-cs-threat-modeling', 'Quy trình bốn câu hỏi, đủ gọn để áp dụng cho một tính năng.'),
    core('res-cs-attack-surface', 'Liệt kê bề mặt tấn công một cách có hệ thống.'),
    core('res-owasp-threat-model-project', 'Các phương pháp khác nhau và khi nào dùng cái nào.'),
    extra('res-attack-enterprise', 'Ma trận kỹ thuật dùng làm bộ khung câu hỏi.'),
  ],

  // ── C. Phương pháp ───────────────────────────────────────────────────────
  'mod-method-asset-mapping': [
    core(
      'res-wstg-info-gathering',
      'Nhóm bài kiểm thử thu thập thông tin, mỗi bài có mục tiêu rõ ràng.',
    ),
    core('res-h1-defining-scope', 'Bản đồ tài sản phải nằm trong phạm vi chương trình cho phép.'),
    extra(
      'res-owasp-subdomain-takeover',
      'Bản ghi DNS trỏ tới dịch vụ đã bỏ là phát hiện hay gặp khi lập bản đồ.',
    ),
  ],
  'mod-method-passive-active': [
    core(
      'res-wstg-info-gathering',
      'Phân biệt bước nào chạm vào hệ thống mục tiêu và bước nào không.',
    ),
    core('res-nist-800-115', 'Hướng dẫn kiểm thử kỹ thuật của NIST, phân tầng theo mức xâm nhập.'),
    extra('res-nmap-host-discovery', 'Kỹ thuật chủ động cơ bản nhất và ý nghĩa thật của kết quả.'),
  ],
  'mod-method-workflow': [
    core('res-wstg-methodology', 'Các khung phương pháp kiểm thử và chỗ đứng của từng cái.'),
    core('res-owasp-wstg', 'Bộ hướng dẫn đầy đủ, dùng làm danh mục bước.'),
    core('res-nist-800-115', 'Quy trình bốn giai đoạn của NIST để đối chiếu.'),
  ],
  'mod-method-false-positive': [
    core('res-nmap-service-detection', 'Vì sao chuỗi banner không đủ để kết luận có lỗ hổng.'),
    core('res-osv-dev', 'Tra lỗ hổng theo đúng phiên bản gói thay vì theo tên sản phẩm.'),
    extra('res-cvss31-spec', 'Chấm điểm buộc bạn phải nói rõ tác động thật là gì.'),
  ],
  'mod-method-evidence': [
    core('res-h1-report-quality', 'Bằng chứng nào là đủ theo yêu cầu của nền tảng.'),
    core(
      'res-nist-privacy-framework',
      'Phân loại dữ liệu để biết cái gì tuyệt đối không được chụp lại.',
    ),
    core('res-cs-logging', 'Nguyên tắc ghi nhận, áp dụng cho chính bằng chứng của bạn.'),
    extra('res-vn-pdpd', 'Ràng buộc pháp lý tại Việt Nam khi bằng chứng chứa dữ liệu cá nhân.'),
  ],
  'mod-method-proxy': [
    core('res-burp-getting-started', 'Cài chứng chỉ, cấu hình proxy và chặn bắt request đầu tiên.'),
    core('res-chrome-devtools', 'Quan sát phần lớn hành vi phía client mà không cần proxy.'),
    extra('res-mitmproxy-docs', 'Proxy dòng lệnh cho client không phải trình duyệt.'),
  ],
  'mod-method-tool-output': [
    core(
      'res-nmap-service-detection',
      'Cách công cụ đoán phiên bản, và độ tin cậy của phỏng đoán đó.',
    ),
    core('res-osv-dev', 'Xác minh lại cảnh báo phụ thuộc bằng dữ liệu theo phiên bản.'),
    extra('res-semgrep-docs', 'Hiểu luật sinh ra cảnh báo thì mới đánh giá được cảnh báo.'),
  ],
};
