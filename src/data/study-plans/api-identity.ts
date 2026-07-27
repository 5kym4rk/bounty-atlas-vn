import { core, extra, type PlanMap } from './helpers';

/** Lộ trình học cho lĩnh vực E (API) và F (danh tính). */
export const apiIdentityPlans: PlanMap = {
  // ── E. API ───────────────────────────────────────────────────────────────
  'mod-api-fundamentals': [
    core('res-owasp-api-security', 'Trang gốc của OWASP API Security để nắm cấu trúc danh sách.'),
    core(
      'res-api9-inventory',
      'Phiên bản cũ và môi trường thử nghiệm bị bỏ quên — vấn đề vòng đời điển hình.',
    ),
    core('res-openapi-security-scheme', 'Một schema nói gì và không nói gì về phân quyền thật.'),
    extra('res-cs-rest-security', 'Nguyên tắc thiết kế REST an toàn ở phía sửa lỗi.'),
  ],
  'mod-api-graphql': [
    core(
      'res-portswigger-graphql',
      'Chương GraphQL có lab về introspection và phân quyền theo trường.',
    ),
    core('res-cs-graphql', 'Truy vấn lồng sâu, batching và giới hạn độ phức tạp.'),
    core(
      'res-graphql-security-docs',
      'Lập trường chính thức của dự án, gồm cả vấn đề introspection.',
    ),
    extra('res-graphql-spec', 'Đặc tả gốc khi cần lập luận chính xác về hành vi truy vấn.'),
  ],
  'mod-api-bola': [
    core('res-api1-bola', 'Mục đứng đầu OWASP API Top 10, có kịch bản và khuyến nghị cụ thể.'),
    core('res-portswigger-api-testing', 'Lab kiểm thử API, gồm cả tìm endpoint ẩn.'),
    core('res-cwe-639', 'Mã CWE thường dùng khi báo cáo lỗi phân quyền theo định danh.'),
    extra('res-cs-authorization', 'Nguyên tắc phân quyền ở phía thiết kế.'),
  ],
  'mod-api-mass-assignment': [
    core('res-api3-bopla', 'Quyền ở mức thuộc tính, gộp cả gán hàng loạt và lộ dữ liệu quá mức.'),
    core(
      'res-cs-mass-assignment',
      'Vì sao nó xảy ra theo từng framework và cách khai báo trường cho phép.',
    ),
    extra(
      'res-openapi-security-scheme',
      'Đối chiếu schema công bố với trường thực sự được chấp nhận.',
    ),
  ],
  'mod-api-bfla': [
    core(
      'res-api5-bfla',
      'Mục tiêu chuẩn cho lớp lỗi này, kèm kịch bản và khuyến nghị phòng ngừa.',
    ),
    core(
      'res-portswigger-api-testing',
      'Cách tìm endpoint đặc quyền từ tài liệu và mã phía client.',
    ),
    core('res-cwe-862', 'Mã CWE cho trường hợp thiếu hẳn kiểm tra quyền.'),
  ],
  'mod-api-tokens': [
    core('res-rfc6750', 'Cách dùng bearer token đúng và hệ quả khi token bị lộ.'),
    core('res-rfc7009', 'Thu hồi token — thiếu nó thì việc lộ token không khắc phục được.'),
    core('res-api2-broken-authn', 'Các cách xác thực API bị hỏng trong thực tế.'),
    extra('res-cs-secrets-management', 'Lưu và xoay bí mật ở phía vận hành.'),
  ],
  'mod-api-jwt': [
    core('res-rfc7519', 'Cấu trúc JWT và các claim chuẩn.'),
    core(
      'res-portswigger-jwt',
      'Lab về JWT: thuật toán none, khoá yếu, và tin cậy header sai chỗ.',
    ),
    core('res-rfc7517', 'JWKS: máy chủ công bố khoá công khai thế nào.'),
    extra('res-rfc8414', 'Metadata của máy chủ uỷ quyền, nơi đọc được thuật toán được hỗ trợ.'),
  ],
  'mod-api-resource-abuse': [
    core(
      'res-api4-resource-consumption',
      'Đọc kỹ phần ranh giới: chứng minh việc này rất dễ thành gây gián đoạn.',
    ),
    core('res-cs-graphql', 'Giới hạn độ phức tạp truy vấn — biện pháp cụ thể nhất cho GraphQL.'),
    extra('res-cs-rest-security', 'Giới hạn tần suất ở tầng REST.'),
  ],
  'mod-api-excessive-data': [
    core('res-api3-bopla', 'Lộ dữ liệu quá mức nằm chung mục với quyền ở mức thuộc tính.'),
    core('res-cs-rest-security', 'Trả về đúng trường cần thiết thay vì lọc ở phía client.'),
    extra(
      'res-nist-privacy-framework',
      'Phân loại mức nhạy cảm của dữ liệu bị lộ để mô tả tác động.',
    ),
  ],
  'mod-api-testing-workflow': [
    core('res-openapi-spec', 'Đọc schema để biết bề mặt API trước khi thử bất cứ thứ gì.'),
    core('res-portswigger-api-testing', 'Quy trình kiểm thử API có lab đi kèm.'),
    core('res-api9-inventory', 'Đối chiếu schema công bố với những gì thật sự đang chạy.'),
    extra('res-crapi', 'Ứng dụng API cố tình có lỗi, dùng để luyện toàn bộ quy trình.'),
  ],

  // ── F. Danh tính ─────────────────────────────────────────────────────────
  'mod-identity-oauth': [
    core('res-rfc6749', 'Đặc tả gốc: vai trò, loại cấp quyền và luồng trao đổi.'),
    core('res-portswigger-oauth', 'Lab OAuth: redirect URI lỏng, thiếu state, và rò mã uỷ quyền.'),
    core('res-rfc7636', 'PKCE, nay được khuyến nghị cho mọi loại client.'),
    core('res-rfc9700', 'Thực hành tốt nhất hiện hành, thay cho nhiều khuyến nghị cũ.'),
    extra('res-oauth-security-topics', 'Trang tổng hợp dẫn tới từng khuyến nghị kèm lý do.'),
  ],
  'mod-identity-oidc-jwt': [
    core('res-oidc-core', 'Đặc tả OpenID Connect: ID token và các claim danh tính.'),
    core('res-rfc7519', 'Cấu trúc JWT nằm dưới ID token.'),
    core('res-rfc8414', 'Metadata máy chủ uỷ quyền và cách client tìm khoá xác minh.'),
    extra('res-cs-saml', 'So sánh với SAML để thấy cùng loại lỗi tin cậy chữ ký.'),
  ],
  'mod-identity-account-linking': [
    core('res-oidc-core', 'Claim email và điều kiện để coi nó đã được xác minh.'),
    core('res-portswigger-oauth', 'Lab về liên kết tài khoản qua nhà cung cấp danh tính.'),
    core('res-rfc9700', 'Khuyến nghị hiện hành về xác minh danh tính trước khi ghép tài khoản.'),
  ],
  'mod-identity-tenant': [
    core(
      'res-atlassian-domain-verification',
      'Quy trình xác nhận tên miền thật của một nhà cung cấp SaaS lớn.',
    ),
    core('res-scim-rfc7644', 'Cấp phát và thu hồi tài khoản tự động giữa IdP và ứng dụng.'),
    core(
      'res-azure-rbac',
      'Mô hình phân quyền theo scope, làm ví dụ cụ thể cho ranh giới tổ chức.',
    ),
    extra('res-cs-authorization', 'Nguyên tắc phân quyền áp lên ranh giới người thuê.'),
  ],
  'mod-identity-passkey-recovery': [
    core(
      'res-webauthn-guide',
      'Hiểu luồng đăng ký và xác thực WebAuthn trước khi xét đường khôi phục.',
    ),
    core('res-passkeys-dev', 'Các mô hình khởi tạo và khôi phục — chỗ hay còn đường vòng yếu hơn.'),
    core('res-cs-mfa', 'Đường vòng của MFA nói chung.'),
    extra('res-webauthn', 'Đặc tả W3C khi cần lập luận chính xác.'),
  ],
};
