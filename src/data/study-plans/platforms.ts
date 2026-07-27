import { core, extra, type PlanMap } from './helpers';

/** Lộ trình học cho di động, cloud, container, mạng, desktop và nhị phân. */
export const platformPlans: PlanMap = {
  // ── G. Di động ───────────────────────────────────────────────────────────
  'mod-mobile-architecture': [
    core(
      'res-owasp-masvs',
      'Tiêu chuẩn xác minh bảo mật ứng dụng di động — khung để biết cần kiểm gì.',
    ),
    core('res-owasp-mastg', 'Hướng dẫn kiểm thử đi kèm tiêu chuẩn.'),
    extra('res-cs-mobile-app-security', 'Bản rút gọn các nguyên tắc cho cả hai nền tảng.'),
  ],
  'mod-mobile-android-components': [
    core('res-android-app-components', 'Manifest khai báo gì và thuộc tính exported nghĩa là gì.'),
    core('res-mastg-tests', 'Bài kiểm thử cụ thể cho thành phần Android.'),
    extra('res-android-dev-security', 'Khuyến nghị bảo mật chung của nền tảng.'),
  ],
  'mod-mobile-android-storage': [
    core('res-android-data-storage', 'Các vùng lưu trữ và vùng nào ứng dụng khác đọc được.'),
    core('res-android-keystore', 'Lưu khoá sao cho không trích xuất được, và giới hạn của cơ chế.'),
    core('res-mastg-tests', 'Bài kiểm thử lưu trữ trong MASTG.'),
  ],
  'mod-mobile-ios-platform': [
    core('res-apple-universal-links', 'Universal link khác URL scheme tuỳ chỉnh thế nào.'),
    core('res-mastg-tests', 'Bài kiểm thử iOS trong MASTG.'),
    extra('res-apple-platform-security', 'Mô hình bảo mật nền tảng của Apple.'),
  ],
  'mod-mobile-ios-storage': [
    core('res-apple-keychain', 'Keychain: các mức bảo vệ và điều kiện truy cập.'),
    core('res-apple-data-protection', 'Lớp bảo vệ tệp và trạng thái khoá máy.'),
    core('res-mastg-tests', 'Bài kiểm thử lưu trữ iOS trong MASTG.'),
  ],
  'mod-mobile-network': [
    core('res-android-network-security-config', 'Cấu hình quyết định ứng dụng tin chứng chỉ nào.'),
    core('res-mitmproxy-docs', 'Proxy chặn bắt lưu lượng ứng dụng di động.'),
    core('res-mastg-tests', 'Bài kiểm thử mạng trong MASTG.'),
    extra('res-rfc8252', 'OAuth trên ứng dụng gốc: redirect URI tuỳ chỉnh và rủi ro đi kèm.'),
  ],
  'mod-mobile-test-env': [
    core('res-mastg-tools', 'Danh sách công cụ chính thức của MASTG, có hướng dẫn cài.'),
    core(
      'res-mastg-apps',
      'Trang điều hướng của bộ tài liệu MAS, dùng để tìm đúng phần cần đọc khi dựng môi trường.',
    ),
    core('res-frida-docs', 'Công cụ phân tích động, dùng trên thiết bị của chính bạn.'),
  ],

  // ── H. Cloud ─────────────────────────────────────────────────────────────
  'mod-cloud-shared-responsibility': [
    core(
      'res-aws-shared-responsibility',
      'Ranh giới trách nhiệm quyết định phát hiện thuộc chương trình nào.',
    ),
    core(
      'res-aws-pentesting-policy',
      'Những gì được và không được kiểm thử trên hạ tầng nhà cung cấp.',
    ),
    extra('res-cs-secure-cloud-architecture', 'Nguyên tắc kiến trúc cloud độc lập nhà cung cấp.'),
  ],
  'mod-cloud-iam': [
    core('res-gcp-iam-overview', 'Mô hình IAM đầy đủ: principal, vai trò, chính sách và kế thừa.'),
    core('res-aws-sts', 'Thông tin xác thực tạm thời — cơ chế nền của truy cập cloud hiện đại.'),
    core('res-aws-policy-evaluation', 'Thứ tự đánh giá chính sách, chỗ quyết định quyền thật.'),
    extra('res-azure-rbac', 'Cùng ý tưởng ở một nhà cung cấp khác, để thấy phần chung.'),
  ],
  'mod-cloud-aws-iam': [
    core(
      'res-aws-iam-best-practices',
      'Thực hành tốt chính thức, làm mốc để nhận ra cấu hình lệch.',
    ),
    core('res-aws-policy-evaluation', 'Logic đánh giá chính sách, gồm cả chính sách từ chối.'),
    core('res-aws-sts', 'Nhận vai trò và tin cậy giữa các tài khoản.'),
    extra(
      'res-cloudgoat',
      'Môi trường luyện tập trên tài khoản của chính bạn. Đọc kỹ cảnh báo chi phí.',
    ),
  ],
  'mod-cloud-aws-storage': [
    core(
      'res-aws-s3-block-public-access',
      'Các tầng kiểm soát truy cập công khai và thứ tự ghi đè.',
    ),
    core('res-aws-presigned-url', 'URL ký sẵn: quyền gắn vào URL và rủi ro khi bị chia sẻ lại.'),
    extra('res-aws-well-architected-security', 'Đặt cấu hình lưu trữ vào khung kiến trúc chung.'),
  ],
  'mod-cloud-azure': [
    core('res-azure-rbac', 'Mô hình phân quyền của Azure theo scope.'),
    core(
      'res-azure-managed-identity',
      'Danh tính do nền tảng quản lý thay cho bí mật nhúng trong mã.',
    ),
    core('res-msrc-cloud-bounty', 'Phạm vi chương trình cho hạ tầng Azure.'),
    extra('res-azure-best-practices', 'Thực hành tốt tổng hợp của nhà cung cấp.'),
  ],
  'mod-cloud-gcp': [
    core('res-gcp-iam-overview', 'IAM của Google Cloud và kế thừa theo phân cấp tài nguyên.'),
    core(
      'res-gcp-workload-identity',
      'Cấp danh tính cho workload bên ngoài mà không cần khoá dài hạn.',
    ),
    core('res-gcp-vrp', 'Quy tắc chương trình thưởng lỗi cho Google Cloud.'),
    extra('res-gcp-well-architected-security', 'Khung kiến trúc bảo mật của nhà cung cấp.'),
  ],
  'mod-cloud-attack-classes': [
    core(
      'res-cs-secure-cloud-architecture',
      'Các nhóm vấn đề kiến trúc lặp lại giữa mọi nhà cung cấp.',
    ),
    core('res-cs-secrets-management', 'Bí mật lộ trong cloud là nhóm phát hiện phổ biến nhất.'),
    core('res-aws-policy-evaluation', 'Quyền quá rộng: hiểu logic đánh giá mới nhận ra được.'),
    extra('res-cloudgoat', 'Kịch bản luyện tập trên tài khoản riêng của bạn.'),
  ],
  'mod-cloud-misconfig-vs-vuln': [
    core('res-aws-shared-responsibility', 'Ranh giới trách nhiệm là căn cứ để phân loại.'),
    core('res-msrc-cloud-bounty', 'Chương trình nói rõ cấu hình khách hàng không thuộc phạm vi.'),
    core('res-gcp-vrp', 'Cùng ranh giới đó ở một nhà cung cấp khác.'),
  ],

  // ── I. Container ─────────────────────────────────────────────────────────
  'mod-container-basics': [
    core(
      'res-oci-image-spec',
      'Cấu trúc image và các lớp — nền để hiểu vì sao bí mật xoá rồi vẫn còn.',
    ),
    core('res-docker-security', 'Ranh giới giữa container và host, và cách nó bị nới ra.'),
    core('res-cs-docker', 'Cấu hình an toàn: không chạy root, giới hạn capability.'),
  ],
  'mod-k8s-rbac': [
    core('res-k8s-rbac', 'Role, ClusterRole và binding.'),
    core('res-k8s-service-accounts', 'Danh tính của pod và vì sao gắn token tự động là rủi ro.'),
    core('res-k8s-security-checklist', 'Danh mục kiểm tra chính thức cho một cụm.'),
    extra('res-cs-kubernetes', 'Bản rút gọn các điểm cần siết.'),
  ],
  'mod-k8s-workload-security': [
    core('res-k8s-pod-security-standards', 'Ba mức privileged, baseline và restricted.'),
    core(
      'res-k8s-network-policies',
      'Mặc định mọi pod nói chuyện được với nhau; đây là cách giới hạn.',
    ),
    core('res-k8s-secrets', 'Secret mặc định chỉ mã hoá base64 chứ không mã hoá thật.'),
    extra(
      'res-k8s-admission-controllers',
      'Lớp kiểm soát cuối trước khi đối tượng được ghi vào cụm.',
    ),
  ],

  // ── J. Mạng ──────────────────────────────────────────────────────────────
  'mod-net-scope': [
    core('res-h1-defining-scope', 'Phạm vi mạng phải đọc từ chính sách, không suy đoán từ dải IP.'),
    core(
      'res-aws-pentesting-policy',
      'Tài sản chạy trên cloud có ràng buộc riêng của nhà cung cấp.',
    ),
    extra('res-nmap-host-discovery', 'Xác định máy còn sống trong phạm vi đã được phép.'),
  ],
  'mod-net-services': [
    core(
      'res-nmap-service-detection',
      'Nhận diện dịch vụ và phiên bản, kèm giới hạn của phỏng đoán.',
    ),
    core('res-nmap-book', 'Sách Nmap chính thức, dùng làm tham chiếu cho từng kỹ thuật.'),
    extra('res-wireshark-guide', 'Đọc gói tin khi kết quả quét không rõ ràng.'),
  ],
  'mod-net-flaws': [
    core('res-nmap-service-detection', 'Vì sao banner phiên bản không phải bằng chứng lỗ hổng.'),
    core('res-osv-dev', 'Xác minh lại theo đúng phiên bản dịch vụ trước khi báo cáo.'),
    core('res-cs-tls', 'Nhóm phát hiện hạ tầng hay gặp nhất, kèm mức tác động thật của từng loại.'),
    extra(
      'res-cvss31-spec',
      'Chấm điểm buộc phải nói rõ tác động thật thay vì trích dẫn phiên bản.',
    ),
  ],
  'mod-net-tls-dns': [
    core('res-cs-tls', 'Phát hiện TLS nào thực sự có tác động, phát hiện nào chỉ là cảnh báo.'),
    core('res-mozilla-tls-config', 'Mốc tham chiếu cấu hình để đối chiếu.'),
    core('res-owasp-subdomain-takeover', 'Bản ghi DNS trỏ tới dịch vụ đã ngừng dùng.'),
    extra('res-testssl', 'Công cụ kiểm tra cấu hình TLS có giải thích từng phát hiện.'),
  ],
  'mod-net-tools': [
    core('res-nmap-reference', 'Tham chiếu tuỳ chọn dòng lệnh, đọc để biết mình đang gửi gì.'),
    core('res-testssl', 'Kiểm tra TLS và đối chiếu kết quả với tiêu chuẩn.'),
    extra('res-wireshark-guide', 'Xác minh lại bằng gói tin thật khi nghi ngờ kết quả công cụ.'),
  ],

  // ── K. Desktop ───────────────────────────────────────────────────────────
  'mod-desktop-architecture': [
    core('res-owasp-tcasvs', 'Tiêu chuẩn xác minh cho ứng dụng thick client.'),
    core('res-owasp-thick-client-top10', 'Các nhóm vấn đề hay gặp nhất của ứng dụng desktop.'),
    extra('res-microsoft-sdl', 'Vòng đời phát triển an toàn ở phía nhà sản xuất.'),
  ],
  'mod-desktop-flaws': [
    core('res-owasp-thick-client-top10', 'Danh mục nhóm lỗi để kiểm theo.'),
    core(
      'res-ms-dll-search-order',
      'Thứ tự tìm thư viện — nền của nhóm lỗi chiếm quyền qua đường dẫn.',
    ),
    core('res-cs-secrets-management', 'Bí mật lưu trong ứng dụng desktop và cách xử lý đúng.'),
  ],
  'mod-desktop-electron': [
    core('res-electron-security', 'Trang bảo mật chính thức của Electron.'),
    core('res-electron-context-isolation', 'Ranh giới giữa mã trang và mã preload.'),
    core('res-electron-checklist', 'Danh sách kiểm tra để rà soát một ứng dụng cụ thể.'),
    extra('res-cs-csp', 'CSP vẫn áp dụng cho nội dung web nhúng trong ứng dụng desktop.'),
  ],
  'mod-desktop-method': [
    core('res-owasp-tcasvs', 'Dùng tiêu chuẩn làm danh mục bước kiểm thử.'),
    core('res-sysinternals', 'Quan sát tệp, registry và tiến trình khi ứng dụng chạy.'),
    extra('res-mitmproxy-docs', 'Chặn bắt lưu lượng của client không phải trình duyệt.'),
  ],

  // ── L. Nhị phân ──────────────────────────────────────────────────────────
  'mod-binary-foundations': [
    core(
      'res-pwn-college-binary',
      'Khoá học có bài tập, đi từ kiến trúc máy tới bố cục bộ nhớ tiến trình.',
    ),
    core('res-ghidra', 'Công cụ dịch ngược mã nguồn mở để đọc mã máy.'),
    extra('res-nightmare-fuzzing', 'Khoá tự học dựa trên bài CTF đã công bố.'),
  ],
  'mod-binary-memory-safety': [
    core(
      'res-pwn-college-software-exploitation',
      'Các lớp lỗi bộ nhớ, học kèm bài tập trong môi trường được cấp.',
    ),
    core('res-address-sanitizer', 'Phát hiện lỗi bộ nhớ lúc chạy thay vì suy đoán từ crash.'),
    extra('res-nightmare-fuzzing', 'Bài tập từ dễ tới khó theo từng lớp lỗi.'),
  ],
  'mod-binary-mitigations': [
    core(
      'res-pwn-college-software-exploitation',
      'Các cơ chế giảm thiểu và điều kiện chúng bị vượt qua.',
    ),
    core('res-ghidra', 'Kiểm tra cơ chế nào đang bật trên một tệp thực thi cụ thể.'),
    extra('res-llvm-sanitizers', 'Công cụ phát hiện hành vi không xác định lúc chạy.'),
  ],
  'mod-binary-fuzzing': [
    core('res-libfuzzer', 'Fuzzing dẫn hướng theo độ phủ và cách viết hàm đầu vào.'),
    core('res-address-sanitizer', 'Sanitizer biến crash mơ hồ thành báo cáo lỗi cụ thể.'),
    core('res-oss-fuzz', 'Cách đưa một dự án vào hệ thống fuzzing chạy liên tục ở quy mô lớn.'),
    extra('res-aflplusplus', 'Bộ fuzz phổ biến cho mục tiêu không biên dịch lại được.'),
  ],
};
