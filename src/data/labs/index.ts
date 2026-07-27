import type { Lab } from '@/schemas/entities';
import { defineLab } from '../helpers';

const CONTROLLED_ONLY =
  'Lab này chạy trong môi trường do nhà cung cấp lab kiểm soát. Chỉ tương tác với chính lab đó; không áp dụng kỹ thuật học được lên bất kỳ hệ thống nào khác nếu không có cho phép rõ ràng.';

const LOCAL_ONLY =
  'Lab này chạy trên máy của bạn. Chỉ tương tác với instance cục bộ; không triển khai nó ra Internet công khai vì đây là ứng dụng cố ý dễ tổn thương.';

/** Danh mục lab hợp pháp. Mọi lab đều phải có allowedTargetsNoteVi. */
export const labs: Lab[] = [
  // ── Web ────────────────────────────────────────────────────────────
  defineLab({
    id: 'lab-psa-access-control',
    titleVi: 'Lab kiểm soát truy cập — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/access-control',
    descriptionVi:
      'Chuỗi lab về phân quyền: IDOR, leo thang đặc quyền, phân quyền ở mức chức năng và endpoint quản trị ẩn.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-idor', 'mod-web-privilege-escalation'],
    difficulty: 'intermediate',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi:
      'Chỉ instance lab do PortSwigger cấp cho tài khoản của bạn. Mỗi lần mở lab sinh một instance riêng và tạm thời.',
    safetyNoteVi: CONTROLLED_ONLY,
    solutionPolicy: 'external-official-solution',
    evidenceSuggestionsVi: [
      'Ghi lại request tối thiểu đã dùng để vượt kiểm tra phân quyền.',
      'Ghi lại vai trò của tài khoản trước và sau khi thao tác.',
    ],
  }),
  defineLab({
    id: 'lab-psa-sqli',
    titleVi: 'Lab SQL injection — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/sql-injection',
    descriptionVi:
      'Chuỗi lab về SQL injection, từ nhận biết dấu hiệu tới các biến thể mù, trong môi trường có kiểm soát.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-sqli'],
    difficulty: 'intermediate',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ instance lab tạm thời do nhà cung cấp cấp cho tài khoản của bạn.',
    safetyNoteVi: CONTROLLED_ONLY,
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-psa-xss',
    titleVi: 'Lab XSS — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/cross-site-scripting',
    descriptionVi: 'Chuỗi lab XSS phản chiếu, lưu trữ và DOM-based theo từng ngữ cảnh đầu ra.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-xss', 'mod-web-dom-xss'],
    difficulty: 'intermediate',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ instance lab tạm thời do nhà cung cấp cấp cho tài khoản của bạn.',
    safetyNoteVi: CONTROLLED_ONLY,
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-psa-csrf',
    titleVi: 'Lab CSRF — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/csrf',
    descriptionVi: 'Lab về CSRF, token chống CSRF và ảnh hưởng của thuộc tính SameSite.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-csrf'],
    difficulty: 'intermediate',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi:
      'Chỉ instance lab và máy chủ khai thác do nhà cung cấp cấp kèm theo lab. Không đặt trang khai thác ở nơi khác.',
    safetyNoteVi: CONTROLLED_ONLY,
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-psa-ssrf',
    titleVi: 'Lab SSRF — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/ssrf',
    descriptionVi: 'Lab về SSRF và SSRF mù, gồm cả tình huống chạm tới dịch vụ nội bộ giả lập.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-ssrf'],
    difficulty: 'advanced',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi:
      'Chỉ instance lab và dịch vụ collaborator do nhà cung cấp cấp. Không nhắm tới địa chỉ nội bộ của bất kỳ tổ chức nào.',
    safetyNoteVi: CONTROLLED_ONLY,
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-psa-cache-poisoning',
    titleVi: 'Lab đầu độc cache web — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/web-cache-poisoning',
    descriptionVi: 'Lab về khoá cache và cách phản hồi bị đầu độc lan tới người dùng khác.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-cache'],
    difficulty: 'advanced',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ instance lab tạm thời do nhà cung cấp cấp.',
    safetyNoteVi:
      'Đầu độc cache ảnh hưởng tới mọi người dùng của một hệ thống. Kỹ thuật này chỉ được thực hành trong lab, không áp dụng lên hệ thống thật khi chưa có cho phép rõ ràng.',
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-psa-request-smuggling',
    titleVi: 'Lab HTTP request smuggling — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/request-smuggling',
    descriptionVi: 'Lab về bất đồng bộ giữa proxy và máy chủ ứng dụng.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-smuggling'],
    difficulty: 'research',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ instance lab tạm thời do nhà cung cấp cấp.',
    safetyNoteVi:
      'Kỹ thuật này có nguy cơ ảnh hưởng trực tiếp tới request của người dùng thật. Nhiều chương trình cấm thử nghiệm trên môi trường sản xuất. Chỉ thực hành trong lab.',
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-psa-file-upload',
    titleVi: 'Lab tải tệp lên — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/file-upload',
    descriptionVi: 'Lab về kiểm tra loại tệp, nơi lưu và cách phục vụ lại tệp tải lên.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-file-upload'],
    difficulty: 'intermediate',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ instance lab tạm thời do nhà cung cấp cấp.',
    safetyNoteVi: CONTROLLED_ONLY,
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-psa-path-traversal',
    titleVi: 'Lab path traversal — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/file-path-traversal',
    descriptionVi: 'Lab về chuẩn hoá đường dẫn và kiểm tra thư mục cho phép.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-path-traversal'],
    difficulty: 'intermediate',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ instance lab tạm thời do nhà cung cấp cấp.',
    safetyNoteVi: CONTROLLED_ONLY,
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-psa-deserialization',
    titleVi: 'Lab deserialization không an toàn — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/deserialization',
    descriptionVi: 'Lab về khôi phục đối tượng từ dữ liệu do người dùng cung cấp.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-deserialization'],
    difficulty: 'research',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ instance lab tạm thời do nhà cung cấp cấp.',
    safetyNoteVi: CONTROLLED_ONLY,
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-psa-race-conditions',
    titleVi: 'Lab race condition — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/race-conditions',
    descriptionVi: 'Lab về khoảng thời gian giữa kiểm tra và sử dụng trong ứng dụng web.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-race-condition'],
    difficulty: 'advanced',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ instance lab tạm thời do nhà cung cấp cấp.',
    safetyNoteVi:
      'Kỹ thuật gửi nhiều request song song có thể gây tải. Trong lab thì an toàn; trên hệ thống thật hãy giữ số request ở mức tối thiểu.',
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-psa-business-logic',
    titleVi: 'Lab logic nghiệp vụ — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/logic-flaws',
    descriptionVi: 'Lab về các giả định ẩn trong quy trình nghiệp vụ.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-business-logic', 'mod-web-payment-flow'],
    difficulty: 'advanced',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ instance lab tạm thời do nhà cung cấp cấp.',
    safetyNoteVi: CONTROLLED_ONLY,
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-psa-auth',
    titleVi: 'Lab xác thực — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/authentication',
    descriptionVi: 'Lab về đăng nhập, liệt kê tài khoản, MFA và đặt lại mật khẩu.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-login', 'mod-web-password-reset'],
    difficulty: 'intermediate',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ instance lab tạm thời do nhà cung cấp cấp.',
    safetyNoteVi:
      'Lab có bài liên quan tới thử mật khẩu. Kỹ thuật này chỉ hợp lệ trong lab; không áp dụng lên tài khoản thật của bất kỳ ai.',
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-psa-cors',
    titleVi: 'Lab CORS — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/cors',
    descriptionVi: 'Lab về cấu hình CORS sai và hệ quả khi kết hợp với credentials.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-cors'],
    difficulty: 'intermediate',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ instance lab tạm thời do nhà cung cấp cấp.',
    safetyNoteVi: CONTROLLED_ONLY,
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-psa-websockets',
    titleVi: 'Lab WebSocket — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/websockets',
    descriptionVi: 'Lab về bảo mật WebSocket, gồm cả chiếm kết nối từ site khác.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-websocket'],
    difficulty: 'advanced',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ instance lab tạm thời do nhà cung cấp cấp.',
    safetyNoteVi: CONTROLLED_ONLY,
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-juice-shop',
    titleVi: 'OWASP Juice Shop (chạy cục bộ)',
    provider: 'OWASP',
    url: 'https://github.com/juice-shop/juice-shop',
    descriptionVi:
      'Ứng dụng web cố ý dễ tổn thương với nhiều thử thách trải rộng nhiều nhóm lỗ hổng. Chạy bằng container trên máy của bạn.',
    domainIds: ['dom-web', 'dom-api'],
    moduleIds: ['mod-web-architecture', 'mod-web-idor', 'mod-web-info-disclosure'],
    difficulty: 'intermediate',
    environment: 'docker',
    requiresAccount: false,
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ instance chạy trên máy của bạn, thường ở địa chỉ localhost. Không triển khai ra Internet công khai.',
    safetyNoteVi: LOCAL_ONLY,
    solutionPolicy: 'external-official-solution',
    evidenceSuggestionsVi: [
      'Ghi lại phiên bản Juice Shop đã dùng để thử thách tái hiện được.',
      'Chụp màn hình phần chứng minh, không cần chụp toàn bộ cơ sở dữ liệu.',
    ],
  }),
  defineLab({
    id: 'lab-webgoat',
    titleVi: 'OWASP WebGoat (chạy cục bộ)',
    provider: 'OWASP',
    url: 'https://github.com/WebGoat/WebGoat',
    descriptionVi:
      'Ứng dụng học tập có bài hướng dẫn từng bước, phù hợp cho người mới bắt đầu với bảo mật web.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-sqli', 'mod-web-xss'],
    difficulty: 'beginner',
    environment: 'docker',
    requiresAccount: false,
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ instance chạy trên máy của bạn. Không triển khai ra Internet công khai.',
    safetyNoteVi: LOCAL_ONLY,
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-hacker101-ctf',
    titleVi: 'Hacker101 CTF',
    provider: 'HackerOne',
    url: 'https://ctf.hacker101.com/',
    descriptionVi: 'Tập bài thực hành dạng CTF trong môi trường có kiểm soát của nền tảng.',
    domainIds: ['dom-web'],
    moduleIds: ['mod-web-architecture'],
    difficulty: 'beginner',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ các bài trong CTF do nền tảng cung cấp cho tài khoản của bạn.',
    safetyNoteVi: CONTROLLED_ONLY,
    solutionPolicy: 'no-solution',
  }),

  // ── API ────────────────────────────────────────────────────────────
  defineLab({
    id: 'lab-crapi',
    titleVi: 'OWASP crAPI (chạy cục bộ)',
    provider: 'OWASP',
    url: 'https://github.com/OWASP/crAPI',
    descriptionVi:
      'Ứng dụng API cố ý dễ tổn thương, bao phủ các rủi ro trong OWASP API Security Top 10.',
    domainIds: ['dom-api'],
    moduleIds: ['mod-api-bola', 'mod-api-mass-assignment', 'mod-api-excessive-data'],
    difficulty: 'intermediate',
    environment: 'docker',
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ instance chạy trên máy của bạn. Không triển khai ra Internet công khai.',
    safetyNoteVi: LOCAL_ONLY,
    solutionPolicy: 'external-official-solution',
    evidenceSuggestionsVi: [
      'Ghi lại cặp tài khoản đã dùng và định danh đối tượng của từng tài khoản.',
      'Ghi request tối thiểu chứng minh truy cập chéo.',
    ],
  }),
  defineLab({
    id: 'lab-psa-api-testing',
    titleVi: 'Lab kiểm thử API — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/api-testing',
    descriptionVi: 'Lab về khám phá và kiểm thử API, gồm cả mass assignment.',
    domainIds: ['dom-api'],
    moduleIds: ['mod-api-fundamentals', 'mod-api-testing-workflow'],
    difficulty: 'intermediate',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ instance lab tạm thời do nhà cung cấp cấp.',
    safetyNoteVi: CONTROLLED_ONLY,
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-psa-graphql',
    titleVi: 'Lab GraphQL — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/graphql',
    descriptionVi: 'Lab về introspection, phân quyền ở tầng resolver và truy vấn lồng nhau.',
    domainIds: ['dom-api'],
    moduleIds: ['mod-api-graphql'],
    difficulty: 'advanced',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ instance lab tạm thời do nhà cung cấp cấp.',
    safetyNoteVi: CONTROLLED_ONLY,
    solutionPolicy: 'external-official-solution',
  }),

  // ── Identity ───────────────────────────────────────────────────────
  defineLab({
    id: 'lab-psa-oauth',
    titleVi: 'Lab OAuth — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/oauth',
    descriptionVi: 'Lab về so khớp redirect URI, thiếu state và các lỗi triển khai OAuth khác.',
    domainIds: ['dom-identity'],
    moduleIds: ['mod-identity-oauth'],
    difficulty: 'advanced',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi:
      'Chỉ instance lab và máy chủ khai thác do nhà cung cấp cấp. Không thực hiện luồng OAuth nhắm tới tài khoản của người khác.',
    safetyNoteVi: CONTROLLED_ONLY,
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-psa-jwt',
    titleVi: 'Lab JWT — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/jwt',
    descriptionVi: 'Lab về các thiếu sót khi xác minh chữ ký và claim của JWT.',
    domainIds: ['dom-identity', 'dom-api'],
    moduleIds: ['mod-api-jwt', 'mod-identity-oidc-jwt'],
    difficulty: 'advanced',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ instance lab tạm thời do nhà cung cấp cấp.',
    safetyNoteVi: CONTROLLED_ONLY,
    solutionPolicy: 'external-official-solution',
  }),

  // ── Mobile ─────────────────────────────────────────────────────────
  defineLab({
    id: 'lab-mastg-apps',
    titleVi: 'MASTG Apps — ứng dụng lab di động',
    provider: 'OWASP',
    url: 'https://mas.owasp.org/MASTG/apps/',
    descriptionVi:
      'Bộ ứng dụng cố ý dễ tổn thương cho Android và iOS, dùng để thực hành các test của MASTG.',
    domainIds: ['dom-mobile'],
    moduleIds: ['mod-mobile-android-components', 'mod-mobile-ios-platform'],
    difficulty: 'advanced',
    environment: 'android-emulator',
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ các ứng dụng lab này, cài trên máy ảo hoặc thiết bị thử nghiệm thuộc sở hữu của bạn. Không phân tích ứng dụng của người khác.',
    safetyNoteVi:
      'Dùng thiết bị hoặc máy ảo riêng cho việc học, không dùng thiết bị cá nhân đang đăng nhập tài khoản thật.',
    solutionPolicy: 'external-official-solution',
    evidenceSuggestionsVi: [
      'Ghi lại đường dẫn tệp và nội dung đã che của dữ liệu tìm thấy trên thiết bị.',
      'Ghi lại lệnh đã dùng để tái hiện.',
    ],
  }),
  defineLab({
    id: 'lab-mobile-android-storage',
    titleVi: 'Lab lưu trữ Android trong máy ảo',
    provider: 'Tự dựng theo MASTG',
    url: 'https://mas.owasp.org/MASTG/tests/',
    descriptionVi:
      'Bài thực hành tự dựng: cài ứng dụng lab lên máy ảo Android, khảo sát dữ liệu ứng dụng lưu trên thiết bị theo hướng dẫn MASTG.',
    domainIds: ['dom-mobile'],
    moduleIds: ['mod-mobile-android-storage', 'mod-mobile-test-env'],
    difficulty: 'intermediate',
    environment: 'android-emulator',
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ ứng dụng lab do bạn cài trên máy ảo của bạn. Không khảo sát dữ liệu của ứng dụng khác trên thiết bị cá nhân.',
    safetyNoteVi: 'Dùng máy ảo sạch, không đăng nhập tài khoản thật vào máy ảo dùng cho việc học.',
    solutionPolicy: 'no-solution',
  }),

  // ── Cloud (có metadata bắt buộc) ───────────────────────────────────
  defineLab({
    id: 'lab-cloudgoat',
    titleVi: 'CloudGoat — kịch bản AWS cố ý dễ tổn thương',
    provider: 'Rhino Security Labs',
    url: 'https://github.com/RhinoSecurityLabs/cloudgoat',
    descriptionVi:
      'Triển khai các kịch bản AWS cố ý dễ tổn thương vào tài khoản của chính bạn để thực hành leo thang đặc quyền và khai thác cấu hình IAM sai.',
    domainIds: ['dom-cloud'],
    moduleIds: ['mod-cloud-aws-iam', 'mod-cloud-attack-classes'],
    difficulty: 'advanced',
    environment: 'cloud-owned-account',
    requiresAccount: true,
    requiresPayment: true,
    requiresLocalInstall: true,
    estimatedCost:
      'Thường vài USD mỗi kịch bản nếu dọn dẹp ngay; có thể tăng nhanh nếu quên xoá tài nguyên.',
    cleanupRequired: true,
    cleanupInstructionsUrl: 'https://github.com/RhinoSecurityLabs/cloudgoat',
    allowedTargetsNoteVi:
      'Chỉ tài nguyên do chính CloudGoat tạo ra trong tài khoản AWS riêng mà bạn lập cho việc học. Không chạy trên tài khoản của công ty hoặc khách hàng.',
    safetyNoteVi:
      'Lab này tạo tài nguyên thật và phát sinh chi phí thật. Dùng tài khoản riêng biệt, đặt ngân sách và cảnh báo chi phí trước khi bắt đầu, và chạy lệnh dọn dẹp ngay sau khi học xong.',
    solutionPolicy: 'external-official-solution',
    cloud: {
      estimatedCost:
        'Vài USD mỗi kịch bản nếu dọn dẹp trong ngày. Chi phí tăng theo thời gian tài nguyên còn tồn tại.',
      billingWarning:
        'Lab tạo tài nguyên tính phí trong tài khoản của bạn. Bật cảnh báo ngân sách trước khi triển khai và kiểm tra hoá đơn sau khi hoàn thành.',
      requiresDedicatedAccount: true,
      cleanupRequired: true,
      cleanupInstructionsUrl: 'https://github.com/RhinoSecurityLabs/cloudgoat',
      regionNote:
        'Chọn một vùng duy nhất và ghi lại vùng đó; tài nguyên sót lại ở vùng khác rất dễ bị bỏ quên.',
      productionWarning:
        'Tuyệt đối không triển khai vào tài khoản có tài nguyên sản xuất. Kịch bản cố ý tạo cấu hình không an toàn.',
    },
    evidenceSuggestionsVi: [
      'Ghi lại chuỗi quyền đã dùng để đi từ danh tính ban đầu tới mục tiêu.',
      'Chụp lại xác nhận đã dọn dẹp tài nguyên.',
    ],
  }),
  defineLab({
    id: 'lab-wrongsecrets',
    titleVi: 'OWASP WrongSecrets',
    provider: 'OWASP',
    url: 'https://github.com/OWASP/wrongsecrets',
    descriptionVi:
      'Chuỗi thử thách về quản lý bí mật sai cách, có thể chạy cục bộ bằng container hoặc triển khai lên cloud/Kubernetes.',
    domainIds: ['dom-supply-chain', 'dom-cloud', 'dom-container'],
    moduleIds: ['mod-supply-secrets', 'mod-container-basics'],
    difficulty: 'advanced',
    environment: 'docker',
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ instance do bạn triển khai. Nếu triển khai lên cloud, dùng tài khoản riêng cho việc học.',
    safetyNoteVi:
      'Nếu chọn biến thể chạy trên cloud hoặc Kubernetes, hãy áp dụng cùng nguyên tắc như lab cloud: tài khoản riêng, cảnh báo chi phí và dọn dẹp sau khi học xong.',
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-k8s-local-rbac',
    titleVi: 'Lab RBAC Kubernetes trên cụm cục bộ',
    provider: 'Tự dựng theo tài liệu Kubernetes',
    url: 'https://kubernetes.io/docs/concepts/security/security-checklist/',
    descriptionVi:
      'Bài thực hành tự dựng: tạo cụm Kubernetes cục bộ, cấu hình Role và RoleBinding, rồi kiểm tra quyền thực tế của một service account theo checklist bảo mật chính thức.',
    domainIds: ['dom-container'],
    moduleIds: ['mod-k8s-rbac', 'mod-k8s-workload-security'],
    difficulty: 'advanced',
    environment: 'docker',
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ cụm chạy trên máy của bạn. Không thử nghiệm trên cụm dùng chung hoặc cụm đang phục vụ người dùng thật.',
    safetyNoteVi:
      'Cụm cục bộ tiêu tốn tài nguyên máy. Xoá cụm sau khi học xong để tránh dịch vụ nền chạy ngoài ý muốn.',
    solutionPolicy: 'no-solution',
  }),

  // ── Network ────────────────────────────────────────────────────────
  defineLab({
    id: 'lab-network-local',
    titleVi: 'Lab mạng cục bộ với máy ảo',
    provider: 'Tự dựng',
    url: 'https://nmap.org/book/',
    descriptionVi:
      'Bài thực hành tự dựng: tạo hai máy ảo trong một mạng riêng, chạy vài dịch vụ, rồi thực hành khám phá dịch vụ và bắt gói giữa chúng.',
    domainIds: ['dom-network'],
    moduleIds: ['mod-net-services', 'mod-net-tools'],
    difficulty: 'beginner',
    environment: 'vm',
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ các máy ảo trong mạng riêng do bạn tạo. Không quét bất kỳ địa chỉ nào ngoài mạng đó.',
    safetyNoteVi:
      'Cấu hình mạng của máy ảo ở chế độ mạng riêng, không dùng chế độ cầu nối ra mạng thật, để tránh gửi lưu lượng ra ngoài ngoài ý muốn.',
    solutionPolicy: 'no-solution',
  }),
  defineLab({
    id: 'lab-tls-inspection',
    titleVi: 'Lab kiểm tra cấu hình TLS cục bộ',
    provider: 'Tự dựng',
    url: 'https://docs.openssl.org/',
    descriptionVi:
      'Bài thực hành tự dựng: chạy một máy chủ TLS cục bộ với các cấu hình khác nhau và quan sát bắt tay, chuỗi chứng chỉ và bộ mã được thương lượng.',
    domainIds: ['dom-network'],
    moduleIds: ['mod-net-tls-dns'],
    difficulty: 'intermediate',
    environment: 'vm',
    requiresLocalInstall: true,
    allowedTargetsNoteVi: 'Chỉ máy chủ TLS chạy trên máy của bạn.',
    safetyNoteVi:
      'Không dùng chứng chỉ tự ký cho việc gì khác ngoài lab, và gỡ chúng khỏi kho tin cậy sau khi học xong.',
    solutionPolicy: 'no-solution',
  }),

  // ── Desktop & binary ───────────────────────────────────────────────
  defineLab({
    id: 'lab-desktop-vm-analysis',
    titleVi: 'Lab phân tích ứng dụng desktop trong máy ảo',
    provider: 'Tự dựng',
    url: 'https://www.electronjs.org/docs/latest/tutorial/security',
    descriptionVi:
      'Bài thực hành tự dựng: viết một ứng dụng Electron nhỏ với cấu hình không an toàn, rồi quan sát hệ quả và sửa cấu hình theo hướng dẫn chính thức.',
    domainIds: ['dom-desktop'],
    moduleIds: ['mod-desktop-electron', 'mod-desktop-method'],
    difficulty: 'advanced',
    environment: 'vm',
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ ứng dụng do chính bạn viết, chạy trong máy ảo. Không phân tích phần mềm thương mại nếu giấy phép không cho phép.',
    safetyNoteVi:
      'Chụp ảnh trạng thái máy ảo trước khi cài đặt để có thể khôi phục. Không phân tích phần mềm độc hại trong lab này.',
    solutionPolicy: 'no-solution',
  }),
  defineLab({
    id: 'lab-pwn-college',
    titleVi: 'pwn.college',
    provider: 'Arizona State University',
    url: 'https://pwn.college/',
    descriptionVi:
      'Nền tảng bài tập tăng dần về hệ điều hành, dịch ngược và khai thác nhị phân, chạy trong môi trường có kiểm soát của trường.',
    domainIds: ['dom-binary', 'dom-foundations'],
    moduleIds: ['mod-binary-foundations', 'mod-binary-memory-safety'],
    difficulty: 'advanced',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi:
      'Chỉ các bài tập trong môi trường do nền tảng cung cấp cho tài khoản của bạn.',
    safetyNoteVi:
      'Kỹ thuật học ở đây chỉ áp dụng cho binary lab. Không xây dựng bộ khai thác nhắm tới phần mềm đang được sử dụng thực tế.',
    solutionPolicy: 'no-solution',
  }),
  defineLab({
    id: 'lab-fuzzing-local',
    titleVi: 'Lab fuzzing một bộ phân tích dữ liệu',
    provider: 'Tự dựng',
    url: 'https://aflplus.plus/',
    descriptionVi:
      'Bài thực hành tự dựng: viết một hàm phân tích định dạng đơn giản có lỗi cố ý, xây harness fuzzing kèm sanitizer, rồi phân loại và thu nhỏ crash tìm được.',
    domainIds: ['dom-binary'],
    moduleIds: ['mod-binary-fuzzing'],
    difficulty: 'research',
    environment: 'docker',
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ mã do bạn viết hoặc dự án nguồn mở mà bạn chạy trên máy của bạn. Không fuzz dịch vụ trực tuyến của người khác.',
    safetyNoteVi:
      'Fuzzing tiêu tốn nhiều CPU và có thể sinh ra lượng lớn tệp. Chạy trong container có giới hạn tài nguyên.',
    solutionPolicy: 'no-solution',
  }),

  // ── Code review & supply chain ─────────────────────────────────────
  defineLab({
    id: 'lab-codeql-local',
    titleVi: 'Lab viết truy vấn phân tích luồng dữ liệu',
    provider: 'Tự dựng theo tài liệu CodeQL',
    url: 'https://codeql.github.com/docs/',
    descriptionVi:
      'Bài thực hành tự dựng: viết truy vấn tìm mẫu nguồn tới điểm nhận trong một dự án nguồn mở nhỏ, rồi xác minh thủ công từng kết quả.',
    domainIds: ['dom-code-review'],
    moduleIds: ['mod-code-sast', 'mod-code-variant-analysis'],
    difficulty: 'research',
    environment: 'docker',
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ mã nguồn mà giấy phép cho phép bạn phân tích, đã tải về máy của bạn.',
    safetyNoteVi:
      'Nếu tìm thấy lỗ hổng thật trong dự án nguồn mở, báo cáo qua kênh riêng tư và không mở public issue.',
    solutionPolicy: 'no-solution',
  }),
  defineLab({
    id: 'lab-cicd-local',
    titleVi: 'Lab ranh giới tin cậy CI/CD trên repository của bạn',
    provider: 'Tự dựng theo tài liệu GitHub Actions',
    url: 'https://docs.github.com/en/actions/security-for-github-actions',
    descriptionVi:
      'Bài thực hành tự dựng: tạo repository của riêng bạn, cấu hình workflow với các mức quyền khác nhau, và quan sát bí mật khả dụng ở đâu.',
    domainIds: ['dom-supply-chain'],
    moduleIds: ['mod-supply-cicd-trust', 'mod-supply-secrets'],
    difficulty: 'advanced',
    environment: 'other',
    requiresAccount: true,
    allowedTargetsNoteVi:
      'Chỉ repository do chính bạn sở hữu. Không gửi pull request thử nghiệm nhằm kích hoạt workflow của dự án khác.',
    safetyNoteVi:
      'Dùng bí mật giả trong lab. Không đặt bí mật thật vào repository dùng để thử nghiệm.',
    solutionPolicy: 'no-solution',
  }),

  // ── IoT ────────────────────────────────────────────────────────────
  defineLab({
    id: 'lab-iotgoat',
    titleVi: 'OWASP IoTGoat',
    provider: 'OWASP',
    url: 'https://github.com/OWASP/IoTGoat',
    descriptionVi:
      'Firmware cố ý dễ tổn thương chạy trong môi trường giả lập, dùng để thực hành trích xuất và phân tích firmware.',
    domainIds: ['dom-iot'],
    moduleIds: ['mod-iot-firmware', 'mod-iot-ecosystem'],
    difficulty: 'specialist',
    environment: 'vm',
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ ảnh firmware của dự án này, chạy trong môi trường giả lập trên máy của bạn.',
    safetyNoteVi:
      'Không nạp firmware lab lên thiết bị phần cứng thật; việc đó có thể làm hỏng thiết bị vĩnh viễn.',
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-firmware-static',
    titleVi: 'Lab phân tích tĩnh ảnh firmware',
    provider: 'Tự dựng theo OWASP ISTG',
    url: 'https://owasp.org/owasp-istg/index.html',
    descriptionVi:
      'Bài thực hành tự dựng: trích xuất hệ thống tệp từ một ảnh firmware lấy hợp pháp và lập bản đồ cấu hình, script, chứng chỉ và binary bên trong.',
    domainIds: ['dom-iot'],
    moduleIds: ['mod-iot-firmware'],
    difficulty: 'specialist',
    environment: 'docker',
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ ảnh firmware của thiết bị thuộc sở hữu của bạn hoặc firmware lab công khai. Không phân phối lại firmware có bản quyền.',
    safetyNoteVi:
      'Nếu tìm thấy thông tin xác thực nhúng sẵn, không dùng nó để truy cập thiết bị của người khác. Báo cáo cho nhà sản xuất.',
    solutionPolicy: 'no-solution',
  }),

  // ── Wireless (specialist) ──────────────────────────────────────────
  defineLab({
    id: 'lab-ble-owned-device',
    titleVi: 'Lab BLE với thiết bị của chính bạn',
    provider: 'Tự dựng',
    url: 'https://owasp.org/www-project-iot-security-testing-guide/',
    descriptionVi:
      'Bài thực hành tự dựng: dùng một bo mạch phát triển BLE thuộc sở hữu của bạn, khảo sát cấu trúc GATT và các mức bảo vệ được thương lượng khi ghép nối.',
    domainIds: ['dom-wireless'],
    moduleIds: ['mod-wireless-ble'],
    difficulty: 'specialist',
    environment: 'owned-hardware',
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ bo mạch phát triển và thiết bị thuộc sở hữu của bạn. Không kết nối tới thiết bị của người khác kể cả khi chúng đang quảng bá công khai.',
    safetyNoteVi:
      'Quy định về vô tuyến khác nhau theo quốc gia. Chỉ thu và tương tác với thiết bị của bạn, tốt nhất trong môi trường che chắn. Không gây nhiễu và không phát ở băng tần không được phép.',
    solutionPolicy: 'no-solution',
  }),

  // ── Automotive (specialist) ────────────────────────────────────────
  defineLab({
    id: 'lab-automotive-simulator',
    titleVi: 'Lab mô phỏng mạng trong xe',
    provider: 'Tự dựng',
    url: 'https://csrc.nist.gov/pubs/sp/800/82/r3/final',
    descriptionVi:
      'Bài thực hành tự dựng: dùng phần mềm mô phỏng bus trong xe trên máy của bạn để quan sát cấu trúc bản tin, không kết nối tới phương tiện thật.',
    domainIds: ['dom-automotive'],
    moduleIds: ['mod-automotive-architecture'],
    difficulty: 'specialist',
    environment: 'network-simulator',
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ môi trường mô phỏng chạy trên máy của bạn, hoặc test bench thuộc sở hữu của bạn.',
    safetyNoteVi:
      'Tuyệt đối không kết nối tới phương tiện đang vận hành và không can thiệp vào hệ thống liên quan tới an toàn.',
    solutionPolicy: 'no-solution',
  }),

  // ── ICS/OT (specialist) ────────────────────────────────────────────
  defineLab({
    id: 'lab-ics-simulator',
    titleVi: 'Lab mô phỏng giao thức công nghiệp',
    provider: 'Tự dựng',
    url: 'https://www.cisa.gov/topics/industrial-control-systems',
    descriptionVi:
      'Bài thực hành tự dựng: chạy một bộ mô phỏng thiết bị công nghiệp trên máy của bạn và quan sát cấu trúc bản tin giao thức để hiểu vì sao chúng không có xác thực sẵn.',
    domainIds: ['dom-ics-ot'],
    moduleIds: ['mod-ics-architecture', 'mod-ics-safety-constraints'],
    difficulty: 'specialist',
    environment: 'network-simulator',
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ bộ mô phỏng chạy trên máy của bạn. Tuyệt đối không kết nối tới bất kỳ thiết bị công nghiệp đang vận hành nào.',
    safetyNoteVi:
      'Một gói tin sai trong môi trường OT thật có thể gây mất điều khiển và nguy hiểm tới con người. Lab này chỉ để hiểu kiến trúc và phục vụ phòng thủ.',
    solutionPolicy: 'no-solution',
  }),

  // ── Web3 ───────────────────────────────────────────────────────────
  defineLab({
    id: 'lab-ethernaut',
    titleVi: 'Ethernaut',
    provider: 'OpenZeppelin',
    url: 'https://ethernaut.openzeppelin.com/',
    descriptionVi:
      'Chuỗi thử thách về lỗ hổng hợp đồng thông minh, giải bằng cách tương tác với hợp đồng trên testnet.',
    domainIds: ['dom-web3'],
    moduleIds: ['mod-web3-access-control', 'mod-web3-reentrancy'],
    difficulty: 'advanced',
    environment: 'testnet',
    requiresAccount: true,
    allowedTargetsNoteVi:
      'Chỉ các hợp đồng thử thách do Ethernaut triển khai trên testnet, tương tác bằng ví riêng dùng cho việc học.',
    safetyNoteVi:
      'Dùng một ví riêng không chứa tài sản thật. Không bao giờ dùng ví chính cho lab. Chỉ thao tác trên testnet.',
    solutionPolicy: 'no-solution',
  }),
  defineLab({
    id: 'lab-damn-vulnerable-defi',
    titleVi: 'Damn Vulnerable DeFi',
    provider: 'Damn Vulnerable DeFi',
    url: 'https://www.damnvulnerabledefi.xyz/',
    descriptionVi:
      'Bộ thử thách về lỗ hổng giao thức DeFi, giải bằng cách viết test chạy hoàn toàn trên môi trường cục bộ.',
    domainIds: ['dom-web3'],
    moduleIds: ['mod-web3-economic', 'mod-web3-testing'],
    difficulty: 'research',
    environment: 'local-chain',
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ các hợp đồng của thử thách, chạy trên chain cục bộ trên máy của bạn. Không gửi giao dịch nào lên mạng chính.',
    safetyNoteVi:
      'Toàn bộ thử thách chạy cục bộ nên không có rủi ro tài chính. Không áp dụng kỹ thuật học được lên giao thức đang vận hành.',
    solutionPolicy: 'no-solution',
  }),
  defineLab({
    id: 'lab-foundry-invariant',
    titleVi: 'Lab viết invariant test cho hợp đồng',
    provider: 'Tự dựng theo Foundry Book',
    url: 'https://getfoundry.sh/',
    descriptionVi:
      'Bài thực hành tự dựng: viết một hợp đồng đơn giản, phát biểu bất biến kế toán của nó, rồi dùng fuzzing để tìm chuỗi thao tác phá vỡ bất biến đó.',
    domainIds: ['dom-web3'],
    moduleIds: ['mod-web3-testing'],
    difficulty: 'advanced',
    environment: 'local-chain',
    requiresLocalInstall: true,
    allowedTargetsNoteVi: 'Chỉ hợp đồng do bạn viết, chạy trên chain cục bộ.',
    safetyNoteVi: 'Không kết nối ví chứa tài sản thật vào môi trường phát triển.',
    solutionPolicy: 'no-solution',
  }),

  // ── AI ─────────────────────────────────────────────────────────────
  defineLab({
    id: 'lab-psa-llm-attacks',
    titleVi: 'Lab tấn công LLM trong ứng dụng web — Web Security Academy',
    provider: 'PortSwigger',
    url: 'https://portswigger.net/web-security/llm-attacks',
    descriptionVi:
      'Lab về prompt injection gián tiếp và lạm dụng công cụ mà tính năng LLM được phép gọi.',
    domainIds: ['dom-ai', 'dom-web'],
    moduleIds: ['mod-ai-prompt-injection', 'mod-ai-agent-authz'],
    difficulty: 'advanced',
    environment: 'controlled-online',
    requiresAccount: true,
    allowedTargetsNoteVi: 'Chỉ instance lab tạm thời do nhà cung cấp cấp.',
    safetyNoteVi:
      'Kỹ thuật ở đây chỉ áp dụng trong lab. Trên hệ thống thật, không khai thác dữ liệu người dùng và không tạo chi phí suy luận lớn.',
    solutionPolicy: 'external-official-solution',
  }),
  defineLab({
    id: 'lab-rag-isolation-local',
    titleVi: 'Lab cô lập RAG trên ứng dụng tự viết',
    provider: 'Tự dựng',
    url: 'https://genai.owasp.org/',
    descriptionVi:
      'Bài thực hành tự dựng: viết một ứng dụng truy xuất tài liệu nhỏ với hai người thuê, đặt bộ lọc người thuê ở tầng prompt rồi chuyển xuống tầng truy vấn, và so sánh kết quả.',
    domainIds: ['dom-ai'],
    moduleIds: ['mod-ai-rag-isolation'],
    difficulty: 'advanced',
    environment: 'docker',
    requiresLocalInstall: true,
    allowedTargetsNoteVi: 'Chỉ ứng dụng và tài liệu do bạn tạo, chạy trên máy của bạn.',
    safetyNoteVi:
      'Dùng tài liệu giả do bạn tự soạn. Không nạp dữ liệu thật của người khác vào lab.',
    solutionPolicy: 'no-solution',
  }),

  // ── Browser extension ──────────────────────────────────────────────
  defineLab({
    id: 'lab-extension-local',
    titleVi: 'Lab tiện ích trình duyệt cố ý dễ tổn thương',
    provider: 'Tự dựng',
    url: 'https://developer.chrome.com/docs/extensions/develop/security-privacy/stay-secure',
    descriptionVi:
      'Bài thực hành tự dựng: viết một tiện ích nhỏ có trình xử lý thông điệp không kiểm tra nguồn gửi, quan sát hệ quả, rồi sửa theo hướng dẫn chính thức.',
    domainIds: ['dom-browser-ext'],
    moduleIds: ['mod-ext-architecture', 'mod-ext-message-boundary'],
    difficulty: 'advanced',
    environment: 'browser',
    requiresLocalInstall: true,
    allowedTargetsNoteVi:
      'Chỉ tiện ích do bạn viết, cài ở chế độ nhà phát triển trong hồ sơ trình duyệt riêng cho việc học.',
    safetyNoteVi:
      'Dùng hồ sơ trình duyệt riêng, không đăng nhập tài khoản thật. Gỡ tiện ích sau khi học xong.',
    solutionPolicy: 'no-solution',
  }),

  // ── SaaS & privacy ─────────────────────────────────────────────────
  defineLab({
    id: 'lab-saas-tenancy-selfhosted',
    titleVi: 'Lab cô lập người thuê trên ứng dụng tự triển khai',
    provider: 'Tự dựng',
    url: 'https://owasp.org/www-project-application-security-verification-standard/',
    descriptionVi:
      'Bài thực hành tự dựng: triển khai một ứng dụng cộng tác nguồn mở, tạo hai tổ chức, rồi lập ma trận vai trò và kiểm thử mọi thao tác chéo giữa hai tổ chức.',
    domainIds: ['dom-saas', 'dom-privacy'],
    moduleIds: ['mod-saas-tenancy', 'mod-privacy-classification'],
    difficulty: 'advanced',
    environment: 'docker',
    requiresLocalInstall: true,
    allowedTargetsNoteVi: 'Chỉ instance do bạn triển khai với dữ liệu giả do bạn tạo.',
    safetyNoteVi: 'Dùng dữ liệu giả. Không nạp dữ liệu thật của tổ chức nào vào môi trường lab.',
    solutionPolicy: 'no-solution',
  }),
  defineLab({
    id: 'lab-privacy-evidence',
    titleVi: 'Lab viết bằng chứng rò rỉ dữ liệu có che thông tin',
    provider: 'Tự dựng',
    url: 'https://owasp.org/www-project-application-security-verification-standard/',
    descriptionVi:
      'Bài thực hành tự dựng: từ một phản hồi API chứa dữ liệu giả, luyện viết phần bằng chứng và phần mô tả tác động mà không cần giữ lại dữ liệu.',
    domainIds: ['dom-privacy'],
    moduleIds: ['mod-privacy-impact-without-harm'],
    difficulty: 'intermediate',
    environment: 'other',
    allowedTargetsNoteVi: 'Chỉ dữ liệu giả do bạn tự tạo.',
    safetyNoteVi:
      'Đây là bài luyện kỹ năng viết, không có thao tác lên hệ thống nào. Nguyên tắc quan trọng nhất: không tải hàng loạt dữ liệu để chứng minh.',
    solutionPolicy: 'no-solution',
  }),

  // ── Methodology ────────────────────────────────────────────────────
  defineLab({
    id: 'lab-policy-reading',
    titleVi: 'Bài thực hành đọc chính sách chương trình',
    provider: 'Tự dựng',
    url: 'https://docs.hackerone.com/en/articles/8494552-defining-scope',
    descriptionVi:
      'Bài thực hành không kỹ thuật: chọn ba chính sách chương trình công khai, lập bảng so sánh phạm vi, hành vi bị cấm, quy định dữ liệu và điều khoản công bố.',
    domainIds: ['dom-policy'],
    moduleIds: ['mod-policy-scope-reading', 'mod-policy-asset-identifiers'],
    difficulty: 'foundation',
    environment: 'other',
    allowedTargetsNoteVi:
      'Chỉ đọc trang chính sách công khai. Bài này không có thao tác kỹ thuật nào lên tài sản của chương trình.',
    safetyNoteVi:
      'Đọc chính sách là hoàn toàn hợp pháp. Đừng chuyển sang thử nghiệm cho tới khi bạn đã hoàn thành phần phạm vi và hiểu rõ giới hạn.',
    solutionPolicy: 'no-solution',
    evidenceSuggestionsVi: [
      'Lưu bảng so sánh kèm ngày đọc chính sách, vì chương trình có thể thay đổi phạm vi.',
    ],
  }),
  defineLab({
    id: 'lab-proxy-setup',
    titleVi: 'Lab dựng proxy quan sát lưu lượng của chính bạn',
    provider: 'Tự dựng',
    url: 'https://portswigger.net/burp/documentation',
    descriptionVi:
      'Bài thực hành tự dựng: cấu hình proxy chặn bắt cho một trình duyệt riêng, quan sát một luồng đăng nhập trong lab và ghi lại toàn bộ header liên quan tới phiên.',
    domainIds: ['dom-methodology'],
    moduleIds: ['mod-method-proxy', 'mod-method-evidence'],
    difficulty: 'beginner',
    environment: 'other',
    requiresLocalInstall: true,
    allowedTargetsNoteVi: 'Chỉ lưu lượng của chính bạn tới các lab đã liệt kê trong ứng dụng này.',
    safetyNoteVi:
      'Cài chứng chỉ CA của proxy làm thay đổi mô hình tin cậy của máy bạn. Dùng hồ sơ trình duyệt riêng và gỡ chứng chỉ sau khi học xong.',
    solutionPolicy: 'no-solution',
  }),
  defineLab({
    id: 'lab-emerging-surface-eval',
    titleVi: 'Bài thực hành đánh giá một bề mặt mới',
    provider: 'Tự dựng',
    url: 'https://csrc.nist.gov/pubs/sp/800/115/final',
    descriptionVi:
      'Bài thực hành không kỹ thuật: chọn một lĩnh vực chưa có trong bản đồ, áp dụng chuỗi 12 bước và bảy điều kiện mở specialization, rồi viết đề xuất.',
    domainIds: ['dom-emerging'],
    moduleIds: ['mod-emerging-evaluating-new-surfaces'],
    difficulty: 'research',
    environment: 'other',
    allowedTargetsNoteVi:
      'Bài này chỉ gồm nghiên cứu tài liệu, không có thao tác lên bất kỳ hệ thống nào.',
    safetyNoteVi:
      'Bắt đầu bằng câu hỏi pháp lý và an toàn của lĩnh vực đó trước khi bàn tới kỹ thuật.',
    solutionPolicy: 'no-solution',
  }),
];
