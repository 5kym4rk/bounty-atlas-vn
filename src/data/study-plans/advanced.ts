import { core, extra, type PlanMap } from './helpers';

/** Lộ trình học cho các lĩnh vực chuyên sâu M–X. */
export const advancedPlans: PlanMap = {
  // ── M. Rà soát mã ────────────────────────────────────────────────────────
  'mod-code-source-sink': [
    core('res-owasp-code-review-guide', 'Cách đọc mã theo luồng dữ liệu thay vì đọc tuần tự.'),
    core('res-semgrep-docs', 'Viết luật tìm mẫu để khoanh vùng điểm nhận nhanh hơn.'),
    core('res-codeql-query-help', 'Truy vấn theo luồng dữ liệu khi cần theo vết qua nhiều hàm.'),
    extra('res-owasp-code-review-cheatsheet', 'Bản rút gọn để dùng khi rà soát thật.'),
  ],
  'mod-code-authz-review': [
    core('res-cs-authorization', 'Biết thiết kế đúng thì mới nhận ra chỗ thiếu trong mã.'),
    core('res-owasp-code-review-guide', 'Chương về rà soát kiểm soát truy cập.'),
    extra('res-cs-error-handling', 'Xử lý lỗi sai cách thường làm lộ thông tin phân quyền.'),
  ],
  'mod-code-diff-review': [
    core('res-pro-git', 'Đọc commit, nhánh và bản vá cho thành thạo trước đã.'),
    core('res-gh-security-lab-research', 'Bài phân tích có ghi rõ cách tìm ra lỗi từ bản vá.'),
    extra('res-osv-dev', 'Đối chiếu bản vá với lỗ hổng đã công bố.'),
  ],
  'mod-code-variant-analysis': [
    core('res-codeql-query-help', 'Công cụ chính cho phân tích biến thể.'),
    core('res-gh-security-lab-research', 'Ví dụ thật về tìm lỗi anh em từ một lỗi đã biết.'),
    extra('res-semgrep-docs', 'Cách nhẹ hơn cho các mẫu đơn giản.'),
  ],
  'mod-code-sast': [
    core('res-semgrep-docs', 'Hiểu luật thì mới đánh giá được cảnh báo.'),
    core('res-codeql-query-help', 'Phân tích sâu hơn theo luồng dữ liệu.'),
    core('res-owasp-code-review-cheatsheet', 'Xác minh thủ công sau khi công cụ báo.'),
  ],
  'mod-code-oss-disclosure': [
    core('res-gh-private-vuln-reporting', 'Kênh báo cáo riêng tư có sẵn của GitHub.'),
    core('res-gh-coordinated-disclosure', 'Một chính sách cụ thể với mốc thời gian rõ ràng.'),
    core('res-cert-cvd-guide', 'Xử lý khi dự án không phản hồi hoặc không đồng ý.'),
    extra('res-cve-program', 'Xin mã CVE khi dự án không có CNA riêng.'),
  ],

  // ── N. Chuỗi cung ứng ────────────────────────────────────────────────────
  'mod-supply-dependencies': [
    core('res-cs-vulnerable-deps', 'Quy trình xử lý khi một phụ thuộc bị công bố lỗ hổng.'),
    core('res-osv-dev', 'Tra cứu theo đúng phiên bản gói.'),
    core('res-openssf-scorecard', 'Đánh giá mức lành mạnh của một dự án phụ thuộc.'),
    extra('res-owasp-scvs', 'Tiêu chuẩn xác minh thành phần phần mềm.'),
  ],
  'mod-supply-provenance': [
    core('res-slsa-levels', 'Bốn mức bảo đảm cho quy trình dựng và yêu cầu của từng mức.'),
    core('res-cyclonedx-spec', 'Định dạng SBOM phổ biến trong công cụ bảo mật.'),
    core('res-sigstore', 'Ký và xác minh bản phát hành mà không cần quản lý khoá dài hạn.'),
    extra('res-npm-provenance', 'Ví dụ cụ thể trên một registry thật.'),
    extra('res-spdx-spec', 'Định dạng SBOM còn lại, đồng thời là chuẩn ISO.'),
  ],
  'mod-supply-cicd-trust': [
    core('res-cs-cicd', 'Ranh giới tin cậy trong pipeline.'),
    core('res-gh-actions-hardening', 'Siết quyền token và ghim action theo commit.'),
    core('res-gh-actions-security', 'Tài liệu bảo mật đầy đủ của nền tảng CI.'),
    extra('res-gh-oidc', 'Cấp quyền cloud cho pipeline mà không lưu khoá dài hạn.'),
  ],
  'mod-supply-secrets': [
    core('res-cs-secrets-management', 'Lưu, phân phát, xoay và xử lý khi lộ.'),
    core('res-gitleaks', 'Quét lịch sử repo của chính bạn để thấy bí mật còn lại.'),
    core('res-gh-oidc', 'Bỏ hẳn bí mật dài hạn thay vì chỉ giấu kỹ hơn.'),
    extra('res-wrongsecrets', 'Môi trường luyện tập về bí mật bị lưu sai chỗ.'),
  ],

  // ── O. IoT ───────────────────────────────────────────────────────────────
  'mod-iot-ecosystem': [
    core('res-owasp-istg', 'Hướng dẫn kiểm thử IoT theo từng bề mặt của hệ sinh thái.'),
    core('res-etsi-en-303-645', 'Tiêu chuẩn nêu rõ yêu cầu tối thiểu cho thiết bị tiêu dùng.'),
    extra('res-owasp-iot-project', 'Trang dự án tổng hợp các tài liệu IoT của OWASP.'),
  ],
  'mod-iot-firmware': [
    core('res-firmware-analysis-toolkit', 'Phương pháp kiểm thử firmware theo chín giai đoạn.'),
    core('res-binwalk', 'Công cụ tách ảnh firmware — bước đầu tiên khi đọc firmware.'),
    extra('res-iotgoat', 'Firmware cố tình có lỗi để luyện tập hợp pháp.'),
  ],
  'mod-iot-hardware-interfaces': [
    core('res-owasp-istg', 'Chương về giao diện phần cứng trong hướng dẫn kiểm thử.'),
    core('res-owasp-iot-testing-guide', 'Tài liệu kiểm thử IoT kèm phần phần cứng.'),
    extra('res-etsi-en-303-645', 'Yêu cầu tiêu chuẩn về giao diện gỡ lỗi bị bỏ ngỏ.'),
  ],

  // ── P. Vô tuyến ──────────────────────────────────────────────────────────
  'mod-wireless-ble': [
    core(
      'res-nordic-ble-gatt',
      'Quảng bá, kết nối và cấu trúc dịch vụ GATT bằng ngôn ngữ thực hành.',
    ),
    core('res-bluetooth-specs', 'Đặc tả gốc, gồm phần ghép nối và mô hình bảo mật.'),
    extra('res-owasp-istg', 'BLE trong bối cảnh kiểm thử thiết bị IoT.'),
  ],
  'mod-wireless-regulation': [
    core('res-fcc-part15', 'Ví dụ cụ thể về ràng buộc pháp lý với việc phát sóng.'),
    core('res-h1-safe-harbor', 'Safe harbor của chương trình không mở rộng ra tới luật vô tuyến.'),
    extra('res-owasp-wifi-testing', 'Hướng dẫn kiểm thử Wi-Fi và ranh giới của nó.'),
  ],

  // ── Q. Ô tô ──────────────────────────────────────────────────────────────
  'mod-automotive-architecture': [
    core('res-unece-r155', 'Quy định buộc nhà sản xuất có hệ thống quản lý an ninh mạng.'),
    core('res-auto-isac', 'Thực hành tốt của ngành, gồm cả tiếp nhận báo cáo từ bên ngoài.'),
    extra('res-iso-21434', 'Tiêu chuẩn kỹ thuật đầy đủ; bản chi tiết là tài liệu trả phí.'),
  ],
  'mod-automotive-safety': [
    core('res-auto-isac', 'Quy trình công bố với nhà sản xuất xe.'),
    core('res-unece-r155', 'Nghĩa vụ pháp lý của nhà sản xuất khi nhận báo cáo.'),
    core('res-cert-cvd-guide', 'Công bố có phối hợp khi hệ quả chạm tới an toàn tính mạng.'),
  ],

  // ── R. ICS/OT ────────────────────────────────────────────────────────────
  'mod-ics-architecture': [
    core('res-nist-800-82', 'Hướng dẫn bảo mật hệ thống điều khiển công nghiệp của NIST.'),
    core('res-iec-62443', 'Bộ tiêu chuẩn ngành và cách nó chia vùng, chia ống dẫn.'),
    extra('res-attack-ics', 'Ma trận kỹ thuật riêng cho ICS.'),
  ],
  'mod-ics-safety-constraints': [
    core('res-nist-800-82', 'Vì sao thứ tự ưu tiên trong OT ngược với IT.'),
    core('res-cisa-ics', 'Trang chuyên đề của cơ quan an ninh mạng về ICS.'),
    core('res-cisa-ics-advisories', 'Cảnh báo thật để thấy loại lỗi và cách mô tả trong OT.'),
  ],

  // ── S. Web3 ──────────────────────────────────────────────────────────────
  'mod-web3-foundations': [
    core('res-ethereum-evm', 'Mô hình thực thi của EVM: trạng thái, gas và xử lý giao dịch.'),
    core('res-solidity-docs', 'Tài liệu ngôn ngữ Solidity.'),
    core('res-solidity-security', 'Chương an toàn — đọc ngay từ đầu, không để dành.'),
    extra('res-owasp-scs', 'Tiêu chuẩn bảo mật hợp đồng thông minh của OWASP.'),
  ],
  'mod-web3-access-control': [
    core('res-openzeppelin-upgrades', 'Proxy nâng cấp, xung đột lưu trữ và hàm khởi tạo.'),
    core('res-openzeppelin-docs', 'Thư viện kiểm soát truy cập chuẩn cho hợp đồng.'),
    core('res-scstg-tests', 'Bài kiểm thử cụ thể cho kiểm soát truy cập hợp đồng.'),
    extra('res-ethernaut', 'Bài luyện tập, gồm nhiều bài về khởi tạo và quyền sở hữu.'),
  ],
  'mod-web3-reentrancy': [
    core('res-solidity-security', 'Reentrancy được mô tả ngay trong tài liệu ngôn ngữ.'),
    core('res-scstg-tests', 'Bài kiểm thử về lời gọi ngoài và thứ tự cập nhật trạng thái.'),
    extra('res-ethernaut', 'Bài tập reentrancy kinh điển.'),
  ],
  'mod-web3-economic': [
    core('res-chainlink-oracle-security', 'Đọc dữ liệu oracle đúng cách, gồm kiểm tra độ tươi.'),
    core('res-damn-vulnerable-defi', 'Bài tập về thao túng giá và logic kinh tế.'),
    extra('res-immunefi-severity', 'Cách mức độ nghiêm trọng được tính theo thiệt hại tài sản.'),
  ],
  'mod-web3-testing': [
    core('res-foundry-fuzz', 'Viết test fuzz và kiểm tra bất biến cho hợp đồng.'),
    core('res-foundry-book', 'Sách hướng dẫn đầy đủ của bộ công cụ.'),
    extra('res-scstg-tests', 'Danh mục bài kiểm thử để biết cần phủ những gì.'),
  ],

  // ── T. AI ────────────────────────────────────────────────────────────────
  'mod-ai-architecture': [
    core('res-owasp-llm-top10', 'Danh sách rủi ro cho ứng dụng dùng mô hình ngôn ngữ.'),
    core('res-mitre-atlas', 'Ma trận chiến thuật và kỹ thuật nhắm vào hệ thống học máy.'),
    extra('res-owasp-aisvs', 'Tiêu chuẩn xác minh bảo mật AI.'),
  ],
  'mod-ai-prompt-injection': [
    core('res-owasp-llm01', 'Mục chuyên về prompt injection, gồm dạng gián tiếp.'),
    core('res-portswigger-llm-attacks', 'Lộ trình có lab thực hành trong môi trường được cấp.'),
    extra('res-mitre-atlas', 'Đặt kỹ thuật này vào bối cảnh chuỗi tấn công đầy đủ.'),
  ],
  'mod-ai-agent-authz': [
    core('res-owasp-llm06', 'Quyền hạn quá mức: công cụ, quyền và mức tự chủ vượt nhu cầu.'),
    core('res-mcp-security', 'Khuyến nghị bảo mật cho giao thức nối mô hình với công cụ ngoài.'),
    core('res-cs-authorization', 'Nguyên tắc phân quyền áp lên chính các công cụ của agent.'),
  ],
  'mod-ai-rag-isolation': [
    core(
      'res-owasp-llm08',
      'Điểm yếu của vector store: rò dữ liệu giữa người thuê, đầu độc chỉ mục.',
    ),
    core('res-owasp-llm01', 'Nội dung được nạp vào ngữ cảnh là vector injection gián tiếp.'),
    extra('res-owasp-llmsvs', 'Tiêu chuẩn xác minh cho ứng dụng mô hình ngôn ngữ.'),
  ],
  'mod-ai-policy': [
    core('res-h1-ai-safe-harbor', 'Tuyên bố safe harbor riêng cho nghiên cứu AI.'),
    core('res-nist-ai-rmf', 'Khung quản trị rủi ro AI, ngôn ngữ chung với phía nhận báo cáo.'),
    extra('res-nist-ai-600-1', 'Hồ sơ rủi ro riêng cho AI sinh nội dung.'),
  ],

  // ── U. Tiện ích trình duyệt ──────────────────────────────────────────────
  'mod-ext-architecture': [
    core('res-chrome-mv3-overview', 'Mô hình tiện ích hiện hành và những gì MV3 siết lại.'),
    core('res-chrome-permissions', 'Ý nghĩa thật của từng quyền khi bị lạm dụng.'),
    core('res-chrome-extension-security', 'Khuyến nghị bảo mật chính thức cho tiện ích.'),
    extra('res-mozilla-secure-extension', 'Cùng chủ đề từ phía Firefox.'),
  ],
  'mod-ext-message-boundary': [
    core(
      'res-chrome-message-passing',
      'Kênh thông điệp giữa content script, service worker và trang.',
    ),
    core('res-chrome-content-scripts', 'Thế giới cô lập và những gì vẫn dùng chung với trang.'),
    extra('res-mdn-postmessage', 'Cùng lớp vấn đề trên nền tảng web thuần.'),
  ],

  // ── V. SaaS ──────────────────────────────────────────────────────────────
  'mod-saas-tenancy': [
    core(
      'res-atlassian-domain-verification',
      'Xác nhận tên miền — chỗ then chốt của việc chiếm tổ chức.',
    ),
    core(
      'res-google-workspace-security',
      'Cấu hình tổ chức: chia sẻ ngoài, tài khoản khách, thiết bị.',
    ),
    core('res-cs-authorization', 'Ranh giới workspace vẫn là một bài toán phân quyền.'),
  ],
  'mod-saas-email-auth': [
    core('res-rfc7208', 'SPF: máy chủ nào được phép gửi thư cho tên miền.'),
    core('res-rfc7489', 'DMARC gắn kết SPF và DKIM với tên miền hiển thị.'),
    extra(
      'res-owasp-subdomain-takeover',
      'Tên miền phụ bị bỏ quên ảnh hưởng cả uy tín thư điện tử.',
    ),
  ],
  'mod-saas-integrations': [
    core('res-slack-app-security', 'Xác minh chữ ký request, phạm vi token và xử lý webhook.'),
    core('res-rfc6749', 'Ứng dụng OAuth bên thứ ba hoạt động trên nền đặc tả này.'),
    core('res-scim-rfc7644', 'Cấp phát tự động là một đường vào quyền quản trị.'),
    extra('res-rfc7009', 'Thu hồi token khi gỡ một tích hợp.'),
  ],

  // ── W. Quyền riêng tư ────────────────────────────────────────────────────
  'mod-privacy-classification': [
    core('res-nist-privacy-framework', 'Khung phân loại dữ liệu và xác định mức nhạy cảm.'),
    core('res-gdpr-text', 'Định nghĩa pháp lý về dữ liệu cá nhân và nguyên tắc tối thiểu hoá.'),
    core('res-vn-pdpd', 'Quy định áp dụng trực tiếp với người nghiên cứu ở Việt Nam.'),
    extra('res-cs-user-privacy', 'Biện pháp kỹ thuật ở phía ứng dụng.'),
  ],
  'mod-privacy-impact-without-harm': [
    core(
      'res-gdpr-text',
      'Vì sao thu thập thêm dữ liệu nạn nhân là vi phạm chứ không phải bằng chứng tốt hơn.',
    ),
    core('res-h1-report-quality', 'Bằng chứng nào là đủ theo yêu cầu của nền tảng.'),
    core('res-cs-user-privacy', 'Mô tả tác động qua thiết kế hệ thống thay vì qua dữ liệu thật.'),
  ],

  // ── X. Bề mặt mới nổi ────────────────────────────────────────────────────
  'mod-emerging-evaluating-new-surfaces': [
    core('res-cs-threat-modeling', 'Bộ câu hỏi áp dụng được cho một công nghệ chưa từng gặp.'),
    core('res-attack-enterprise', 'Ma trận kỹ thuật dùng làm khung rà soát.'),
    core('res-first-psirt-framework', 'Hiểu phía nhận báo cáo để biết cần trình bày gì.'),
    extra('res-cs-attack-surface', 'Liệt kê bề mặt một cách có hệ thống.'),
  ],
};
