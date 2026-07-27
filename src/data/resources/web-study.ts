import type { LearningResource } from '@/schemas/entities';
import { defineResource } from '../helpers';

/**
 * Nguồn học cho lĩnh vực web, trỏ thẳng tới đúng chương hoặc đúng nhóm lab.
 *
 * Dự án không sao chép nội dung của các nguồn này. Người học bấm vào để mở và
 * học tại chính nguồn gốc; ở đây chỉ có mô tả ngắn tự viết và siêu dữ liệu.
 *
 * Mọi URL trong tệp này đều đã qua `npm run check:links` — xem trạng thái thật
 * trong `src/data/resources/link-status.generated.ts`. Link không phản hồi sẽ bị
 * gỡ khỏi tệp chứ không giữ lại kèm ghi chú.
 */

/** Một chương của Web Security Academy. Mỗi chương có lý thuyết và lab riêng. */
function academy(
  id: string,
  slug: string,
  title: string,
  descriptionVi: string,
  domainIds: string[] = ['dom-web'],
): LearningResource {
  return defineResource({
    id,
    title,
    url: `https://portswigger.net/web-security/${slug}`,
    provider: 'PortSwigger',
    descriptionVi,
    resourceType: 'course',
    domainIds,
    sourceClass: 'official-vendor',
    sourceOriginNoteVi:
      'Chương trong Web Security Academy. Lý thuyết miễn phí, lab chạy trên hạ tầng của PortSwigger nên không đụng tới hệ thống của ai khác.',
    difficulty: 'mixed',
    handsOn: true,
    accountRequired: true,
  });
}

/** Một cheat sheet của OWASP. Viết cho người sửa lỗi, dùng để đối chiếu khắc phục. */
function cheatSheet(
  id: string,
  file: string,
  title: string,
  descriptionVi: string,
  domainIds: string[] = ['dom-web'],
): LearningResource {
  return defineResource({
    id,
    title,
    url: `https://cheatsheetseries.owasp.org/cheatsheets/${file}.html`,
    provider: 'OWASP',
    descriptionVi,
    resourceType: 'documentation',
    domainIds,
    sourceClass: 'official-standard',
    sourceOriginNoteVi:
      'OWASP Cheat Sheet Series — tài liệu khắc phục ngắn gọn, dùng để viết phần đề xuất sửa lỗi trong báo cáo.',
    difficulty: 'intermediate',
    accountRequired: false,
  });
}

/** Một mục CWE. Dùng để phân loại nguyên nhân gốc khi viết báo cáo. */
function cwe(id: string, number: number, title: string, descriptionVi: string): LearningResource {
  return defineResource({
    id,
    title,
    url: `https://cwe.mitre.org/data/definitions/${number}.html`,
    provider: 'MITRE',
    descriptionVi,
    resourceType: 'taxonomy',
    domainIds: ['dom-web'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Mục chính thức trong danh mục CWE, dùng để gán nguyên nhân gốc.',
    difficulty: 'intermediate',
    accountRequired: false,
  });
}

/** Một trang tài liệu của MDN. */
function mdn(
  id: string,
  path: string,
  title: string,
  descriptionVi: string,
  domainIds: string[] = ['dom-web'],
): LearningResource {
  return defineResource({
    id,
    title,
    url: `https://developer.mozilla.org/en-US/docs/${path}`,
    provider: 'MDN Web Docs',
    descriptionVi,
    resourceType: 'documentation',
    domainIds,
    sourceClass: 'official-vendor',
    sourceOriginNoteVi: 'Tài liệu tham chiếu nền tảng web của Mozilla.',
    difficulty: 'beginner',
    accountRequired: false,
  });
}

export const webStudyResources: LearningResource[] = [
  // ── Kiến trúc và nền tảng ────────────────────────────────────────────────
  mdn(
    'res-mdn-http',
    'Web/HTTP',
    'HTTP — tài liệu tham chiếu',
    'Toàn bộ tham chiếu về HTTP: phương thức, header, mã trạng thái, cookie và cơ chế caching.',
    ['dom-web', 'dom-foundations'],
  ),
  mdn(
    'res-mdn-security',
    'Web/Security',
    'Web security — mục lục',
    'Trang gốc về bảo mật nền tảng web, dẫn tới từng cơ chế cụ thể.',
    ['dom-web', 'dom-foundations'],
  ),
  mdn(
    'res-mdn-sop',
    'Web/Security/Same-origin_policy',
    'Same-origin policy',
    'Origin là gì, khi nào hai trang được coi là cùng nguồn, và những ngoại lệ lịch sử.',
    ['dom-web', 'dom-foundations'],
  ),
  mdn(
    'res-mdn-cors',
    'Web/HTTP/Guides/CORS',
    'CORS',
    'Cơ chế cho phép vượt same-origin có kiểm soát, gồm preflight và các header liên quan.',
  ),
  mdn(
    'res-mdn-csp',
    'Web/HTTP/Guides/CSP',
    'Content Security Policy',
    'Cách khai báo CSP, ý nghĩa từng directive và các kiểu bỏ sót thường gặp.',
  ),
  mdn(
    'res-mdn-cookies',
    'Web/HTTP/Guides/Cookies',
    'HTTP cookie',
    'Thuộc tính cookie: Secure, HttpOnly, SameSite, Domain, Path và ảnh hưởng bảo mật của từng cái.',
  ),
  mdn(
    'res-mdn-postmessage',
    'Web/API/Window/postMessage',
    'Window.postMessage()',
    'API gửi thông điệp giữa các origin, gồm tham số targetOrigin thường bị đặt sai.',
  ),
  mdn(
    'res-mdn-websockets',
    'Web/API/WebSockets_API',
    'WebSockets API',
    'Giao thức kênh hai chiều, cách bắt tay và khác biệt với HTTP thường.',
  ),
  mdn(
    'res-mdn-serviceworker',
    'Web/API/Service_Worker_API',
    'Service Worker API',
    'Worker chạy nền chặn được request mạng — một bề mặt tấn công riêng khi bị chiếm quyền.',
  ),
  mdn(
    'res-mdn-storage',
    'Web/API/Web_Storage_API',
    'Web Storage API',
    'localStorage và sessionStorage: phạm vi lưu, vòng đời và vì sao không nên để token ở đó.',
  ),
  mdn(
    'res-mdn-wasm',
    'WebAssembly',
    'WebAssembly',
    'Định dạng bytecode chạy trong trình duyệt, mô hình bộ nhớ và ranh giới với JavaScript.',
  ),

  defineResource({
    id: 'res-rfc9110',
    title: 'RFC 9110 — HTTP Semantics',
    url: 'https://www.rfc-editor.org/rfc/rfc9110',
    provider: 'IETF',
    descriptionVi:
      'Đặc tả ngữ nghĩa HTTP hiện hành: phương thức, mã trạng thái, header và quy tắc xử lý. Dùng khi cần trích dẫn chuẩn trong báo cáo.',
    resourceType: 'specification',
    domainIds: ['dom-web', 'dom-foundations'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Tiêu chuẩn IETF, bản thay thế cho RFC 7230–7235.',
    difficulty: 'advanced',
  }),
  defineResource({
    id: 'res-rfc6265',
    title: 'RFC 6265 — HTTP State Management Mechanism',
    url: 'https://www.rfc-editor.org/rfc/rfc6265',
    provider: 'IETF',
    descriptionVi:
      'Đặc tả cookie: cú pháp, phạm vi theo domain và path, và các thuộc tính bảo mật.',
    resourceType: 'specification',
    domainIds: ['dom-web'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Tiêu chuẩn IETF về cookie.',
    difficulty: 'advanced',
  }),

  // ── Xác thực và phiên ────────────────────────────────────────────────────
  academy(
    'res-ps-authentication',
    'authentication',
    'Authentication vulnerabilities',
    'Chương về lỗi xác thực: liệt kê tài khoản, brute force, lỗi MFA và lỗi trong luồng khôi phục mật khẩu.',
  ),
  cheatSheet(
    'res-cs-authentication',
    'Authentication_Cheat_Sheet',
    'Authentication Cheat Sheet',
    'Nguyên tắc thiết kế đăng nhập đúng: thông báo lỗi thống nhất, giới hạn tần suất, xử lý khoá tài khoản.',
  ),
  cheatSheet(
    'res-cs-session',
    'Session_Management_Cheat_Sheet',
    'Session Management Cheat Sheet',
    'Vòng đời phiên: sinh, xoay, huỷ, thuộc tính cookie và xác thực lại cho thao tác nhạy cảm.',
  ),
  cheatSheet(
    'res-cs-forgot-password',
    'Forgot_Password_Cheat_Sheet',
    'Forgot Password Cheat Sheet',
    'Thiết kế luồng đặt lại mật khẩu an toàn: token dùng một lần, thời hạn, và không tiết lộ tài khoản tồn tại.',
  ),
  cheatSheet(
    'res-cs-password-storage',
    'Password_Storage_Cheat_Sheet',
    'Password Storage Cheat Sheet',
    'Lưu mật khẩu đúng cách bằng hàm băm có chi phí, và các sai lầm phổ biến.',
  ),
  cheatSheet(
    'res-cs-mfa',
    'Multifactor_Authentication_Cheat_Sheet',
    'Multifactor Authentication Cheat Sheet',
    'Các yếu tố xác thực, điểm yếu của từng loại và cách thiết kế luồng MFA không bỏ sót đường vòng.',
  ),
  cheatSheet(
    'res-cs-credential-stuffing',
    'Credential_Stuffing_Prevention_Cheat_Sheet',
    'Credential Stuffing Prevention Cheat Sheet',
    'Phòng thủ trước tấn công dùng lại mật khẩu rò rỉ. Đọc để hiểu phía phòng thủ, không phải để thực hiện.',
  ),
  cwe(
    'res-cwe-384',
    384,
    'CWE-384: Session Fixation',
    'Ứng dụng giữ nguyên định danh phiên sau khi đăng nhập, cho phép kẻ tấn công ấn định phiên trước.',
  ),
  cwe(
    'res-cwe-287',
    287,
    'CWE-287: Improper Authentication',
    'Nguyên nhân gốc chung cho các lỗi xác thực không kiểm tra đúng danh tính.',
  ),

  // ── Phân quyền ───────────────────────────────────────────────────────────
  academy(
    'res-ps-access-control',
    'access-control',
    'Access control vulnerabilities',
    'Chương về phân quyền: IDOR, leo thang ngang và dọc, phân quyền dựa trên tham số và trên tầng giao diện.',
  ),
  academy(
    'res-ps-idor',
    'access-control/idor',
    'Insecure direct object references',
    'Mục con nói riêng về IDOR, kèm lab dùng định danh có thể đoán được.',
  ),
  cheatSheet(
    'res-cs-authorization',
    'Authorization_Cheat_Sheet',
    'Authorization Cheat Sheet',
    'Nguyên tắc phân quyền: kiểm tra ở tầng máy chủ, mặc định từ chối, và gắn quyền vào truy vấn dữ liệu.',
  ),
  cheatSheet(
    'res-cs-idor',
    'Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet',
    'IDOR Prevention Cheat Sheet',
    'Vì sao định danh khó đoán không phải biện pháp khắc phục, và đâu mới là cách sửa đúng.',
  ),
  cwe(
    'res-cwe-639',
    639,
    'CWE-639: Authorization Bypass Through User-Controlled Key',
    'Mã CWE thường dùng nhất cho IDOR khi viết báo cáo.',
  ),
  cwe(
    'res-cwe-862',
    862,
    'CWE-862: Missing Authorization',
    'Chức năng hoàn toàn không kiểm tra quyền — khác với kiểm tra sai.',
  ),
  cwe(
    'res-cwe-863',
    863,
    'CWE-863: Incorrect Authorization',
    'Có kiểm tra quyền nhưng logic kiểm tra sai.',
  ),

  // ── Injection phía máy chủ ───────────────────────────────────────────────
  academy(
    'res-ps-sqli',
    'sql-injection',
    'SQL injection',
    'Chương SQL injection: nhận biết, khai thác có kiểm soát trong lab, và cách xác minh an toàn.',
  ),
  academy(
    'res-ps-nosqli',
    'nosql-injection',
    'NoSQL injection',
    'Injection trong cơ sở dữ liệu không quan hệ, gồm cả injection toán tử và injection cú pháp.',
  ),
  academy(
    'res-ps-command-injection',
    'os-command-injection',
    'OS command injection',
    'Khi dữ liệu người dùng đi vào lời gọi hệ điều hành, gồm cả trường hợp mù.',
  ),
  academy(
    'res-ps-ssti',
    'server-side-template-injection',
    'Server-side template injection',
    'Injection vào công cụ sinh khuôn mẫu phía máy chủ, cách nhận diện engine và giới hạn khi chứng minh.',
  ),
  academy(
    'res-ps-xxe',
    'xxe',
    'XML external entity injection',
    'XXE: đọc tệp, SSRF qua XML và các biến thể mù.',
  ),
  cheatSheet(
    'res-cs-sqli',
    'SQL_Injection_Prevention_Cheat_Sheet',
    'SQL Injection Prevention Cheat Sheet',
    'Truy vấn tham số hoá, danh sách cho phép cho tên bảng và cột, và các phòng thủ không hiệu quả.',
  ),
  cheatSheet(
    'res-cs-command-injection',
    'OS_Command_Injection_Defense_Cheat_Sheet',
    'OS Command Injection Defense Cheat Sheet',
    'Tránh gọi shell, truyền tham số dạng mảng và kiểm tra đầu vào theo danh sách cho phép.',
  ),
  cheatSheet(
    'res-cs-injection',
    'Injection_Prevention_Cheat_Sheet',
    'Injection Prevention Cheat Sheet',
    'Nguyên tắc chung cho mọi loại injection: tách dữ liệu khỏi lệnh, mã hoá theo ngữ cảnh.',
  ),
  cheatSheet(
    'res-cs-xxe',
    'XML_External_Entity_Prevention_Cheat_Sheet',
    'XXE Prevention Cheat Sheet',
    'Tắt entity ngoài theo từng thư viện phân tích XML cụ thể.',
  ),
  cheatSheet(
    'res-cs-input-validation',
    'Input_Validation_Cheat_Sheet',
    'Input Validation Cheat Sheet',
    'Kiểm tra đầu vào đúng chỗ và đúng cách, và vì sao nó không thay thế được mã hoá đầu ra.',
  ),
  cwe('res-cwe-89', 89, 'CWE-89: SQL Injection', 'Mã CWE chuẩn cho SQL injection.'),
  cwe('res-cwe-78', 78, 'CWE-78: OS Command Injection', 'Mã CWE chuẩn cho command injection.'),
  cwe(
    'res-cwe-611',
    611,
    'CWE-611: Improper Restriction of XML External Entity Reference',
    'Mã CWE chuẩn cho XXE.',
  ),
  cwe('res-cwe-1336', 1336, 'CWE-1336: Server-Side Template Injection', 'Mã CWE chuẩn cho SSTI.'),

  // ── Phía client ──────────────────────────────────────────────────────────
  academy(
    'res-ps-xss',
    'cross-site-scripting',
    'Cross-site scripting',
    'Chương XSS: phản chiếu, lưu trữ, DOM, và cách chứng minh tác động mà không gây hại.',
  ),
  academy(
    'res-ps-dom-based',
    'dom-based',
    'DOM-based vulnerabilities',
    'Nhóm lỗi phát sinh hoàn toàn trong trình duyệt, gồm DOM XSS và DOM clobbering.',
  ),
  academy(
    'res-ps-prototype-pollution',
    'prototype-pollution',
    'Prototype pollution',
    'Ô nhiễm prototype phía client và phía máy chủ, cách tìm gadget và giới hạn khi chứng minh.',
  ),
  academy(
    'res-ps-clickjacking',
    'clickjacking',
    'Clickjacking',
    'Lừa người dùng bấm vào giao diện bị che, và các biện pháp phòng thủ bằng header.',
  ),
  academy(
    'res-ps-websockets',
    'websockets',
    'WebSocket vulnerabilities',
    'Kiểm thử WebSocket: thiếu kiểm tra origin, thiếu phân quyền trên từng thông điệp.',
  ),
  cheatSheet(
    'res-cs-xss',
    'Cross_Site_Scripting_Prevention_Cheat_Sheet',
    'XSS Prevention Cheat Sheet',
    'Mã hoá đầu ra theo từng ngữ cảnh HTML, thuộc tính, JavaScript, CSS và URL.',
  ),
  cheatSheet(
    'res-cs-dom-xss',
    'DOM_based_XSS_Prevention_Cheat_Sheet',
    'DOM-based XSS Prevention Cheat Sheet',
    'Danh sách sink nguy hiểm trong DOM và cách thay bằng API an toàn.',
  ),
  cheatSheet(
    'res-cs-csp',
    'Content_Security_Policy_Cheat_Sheet',
    'Content Security Policy Cheat Sheet',
    'Xây CSP từng bước, dùng nonce hoặc hash thay vì unsafe-inline.',
  ),
  cheatSheet(
    'res-cs-prototype-pollution',
    'Prototype_Pollution_Prevention_Cheat_Sheet',
    'Prototype Pollution Prevention Cheat Sheet',
    'Cách chặn ô nhiễm prototype ở tầng ngôn ngữ và tầng thư viện.',
  ),
  cheatSheet(
    'res-cs-clickjacking',
    'Clickjacking_Defense_Cheat_Sheet',
    'Clickjacking Defense Cheat Sheet',
    'frame-ancestors và X-Frame-Options: khác nhau ở đâu và nên dùng cái nào.',
  ),
  cheatSheet(
    'res-cs-third-party-js',
    'Third_Party_Javascript_Management_Cheat_Sheet',
    'Third Party JavaScript Management Cheat Sheet',
    'Rủi ro khi nhúng script bên thứ ba và cách giảm bằng SRI, sandbox, CSP.',
  ),
  cheatSheet(
    'res-cs-html5',
    'HTML5_Security_Cheat_Sheet',
    'HTML5 Security Cheat Sheet',
    'Các tính năng HTML5 có ảnh hưởng bảo mật: postMessage, storage, sandbox, CORS.',
  ),
  cwe('res-cwe-79', 79, 'CWE-79: Cross-site Scripting', 'Mã CWE chuẩn cho XSS.'),
  cwe('res-cwe-1321', 1321, 'CWE-1321: Prototype Pollution', 'Mã CWE chuẩn cho ô nhiễm prototype.'),
  defineResource({
    id: 'res-trusted-types',
    title: 'Trusted Types',
    url: 'https://w3c.github.io/trusted-types/dist/spec/',
    provider: 'W3C',
    descriptionVi:
      'Đặc tả buộc mọi ghi vào sink nguy hiểm của DOM phải đi qua một chính sách, biến DOM XSS thành lỗi có thể chặn ở tầng nền tảng.',
    resourceType: 'specification',
    domainIds: ['dom-web'],
    sourceClass: 'official-standard',
    sourceOriginNoteVi: 'Bản thảo đặc tả của W3C.',
    difficulty: 'advanced',
  }),

  // ── Cross-origin ─────────────────────────────────────────────────────────
  academy(
    'res-ps-csrf',
    'csrf',
    'Cross-site request forgery',
    'CSRF: điều kiện cần, cách kiểm tra token bị làm sai, và các biến thể như login CSRF.',
  ),
  academy(
    'res-ps-cors',
    'cors',
    'CORS',
    'Cấu hình CORS sai: phản chiếu origin, tin cậy null, và kết hợp với credentials.',
  ),
  academy(
    'res-ps-ssrf',
    'ssrf',
    'Server-side request forgery',
    'SSRF: nhận biết, biến thể mù, và vì sao đích chứng minh phải là máy chủ của chính bạn.',
  ),
  academy(
    'res-ps-cache-poisoning',
    'web-cache-poisoning',
    'Web cache poisoning',
    'Đầu độc cache qua đầu vào không được đưa vào khoá cache.',
  ),
  academy(
    'res-ps-cache-deception',
    'web-cache-deception',
    'Web cache deception',
    'Lừa cache lưu nội dung riêng tư của người dùng khác.',
  ),
  academy(
    'res-ps-host-header',
    'host-header',
    'HTTP Host header attacks',
    'Lạm dụng Host header để đầu độc liên kết đặt lại mật khẩu, cache và định tuyến.',
  ),
  academy(
    'res-ps-request-smuggling',
    'request-smuggling',
    'HTTP request smuggling',
    'Bất đồng bộ trong cách hai máy chủ hiểu ranh giới request. Rất dễ ảnh hưởng người dùng khác nên đọc kỹ phần giới hạn.',
  ),
  cheatSheet(
    'res-cs-csrf',
    'Cross-Site_Request_Forgery_Prevention_Cheat_Sheet',
    'CSRF Prevention Cheat Sheet',
    'Token đồng bộ, SameSite và xác minh origin: dùng cái nào trong hoàn cảnh nào.',
  ),
  cheatSheet(
    'res-cs-ssrf',
    'Server_Side_Request_Forgery_Prevention_Cheat_Sheet',
    'SSRF Prevention Cheat Sheet',
    'Danh sách cho phép ở tầng ứng dụng và tầng mạng, và vì sao lọc theo danh sách cấm luôn thất bại.',
  ),
  cheatSheet(
    'res-cs-redirects',
    'Unvalidated_Redirects_and_Forwards_Cheat_Sheet',
    'Unvalidated Redirects and Forwards Cheat Sheet',
    'Chuyển hướng mở: tác động thật, và cách sửa bằng danh sách đích cho phép.',
  ),
  cwe('res-cwe-352', 352, 'CWE-352: Cross-Site Request Forgery', 'Mã CWE chuẩn cho CSRF.'),
  cwe('res-cwe-918', 918, 'CWE-918: Server-Side Request Forgery', 'Mã CWE chuẩn cho SSRF.'),
  cwe('res-cwe-601', 601, 'CWE-601: Open Redirect', 'Mã CWE chuẩn cho chuyển hướng mở.'),

  // ── Tệp và lộ thông tin ──────────────────────────────────────────────────
  academy(
    'res-ps-file-upload',
    'file-upload',
    'File upload vulnerabilities',
    'Tải tệp lên: kiểm tra loại tệp bị vượt qua, và điều kiện để tệp tải lên trở thành thực thi.',
  ),
  academy(
    'res-ps-path-traversal',
    'file-path-traversal',
    'Path traversal',
    'Đọc tệp ngoài thư mục dự kiến, gồm các biến thể mã hoá.',
  ),
  academy(
    'res-ps-info-disclosure',
    'information-disclosure',
    'Information disclosure',
    'Lộ thông tin qua thông báo lỗi, tệp sao lưu, source map và trang debug.',
  ),
  cheatSheet(
    'res-cs-file-upload',
    'File_Upload_Cheat_Sheet',
    'File Upload Cheat Sheet',
    'Xử lý tệp tải lên an toàn: lưu ngoài webroot, đổi tên, kiểm tra nội dung thật.',
  ),
  cheatSheet(
    'res-cs-error-handling',
    'Error_Handling_Cheat_Sheet',
    'Error Handling Cheat Sheet',
    'Thông báo lỗi cho người dùng và log cho hệ thống nên khác nhau thế nào.',
  ),
  cwe('res-cwe-22', 22, 'CWE-22: Path Traversal', 'Mã CWE chuẩn cho path traversal.'),
  cwe(
    'res-cwe-434',
    434,
    'CWE-434: Unrestricted Upload of File with Dangerous Type',
    'Mã CWE chuẩn cho tải tệp nguy hiểm.',
  ),
  cwe(
    'res-cwe-200',
    200,
    'CWE-200: Exposure of Sensitive Information',
    'Mã CWE chuẩn cho lộ thông tin.',
  ),

  // ── Serialization, race, logic ───────────────────────────────────────────
  academy(
    'res-ps-deserialization',
    'deserialization',
    'Insecure deserialization',
    'Deserialization không an toàn theo từng ngôn ngữ, và cách nhận biết định dạng đã tuần tự hoá.',
  ),
  academy(
    'res-ps-race-conditions',
    'race-conditions',
    'Race conditions',
    'Cửa sổ thời gian giữa kiểm tra và sử dụng, gồm kỹ thuật gửi song song để nhận biết.',
  ),
  academy(
    'res-ps-business-logic',
    'logic-flaws',
    'Business logic vulnerabilities',
    'Lỗi logic không có payload: giả định sai của người thiết kế về hành vi người dùng.',
  ),
  cheatSheet(
    'res-cs-deserialization',
    'Deserialization_Cheat_Sheet',
    'Deserialization Cheat Sheet',
    'Tránh deserialize dữ liệu không tin cậy, và cách giới hạn lớp được phép theo từng ngôn ngữ.',
  ),
  cwe(
    'res-cwe-502',
    502,
    'CWE-502: Deserialization of Untrusted Data',
    'Mã CWE chuẩn cho deserialization không an toàn.',
  ),
  cwe(
    'res-cwe-367',
    367,
    'CWE-367: Time-of-check Time-of-use Race Condition',
    'Mã CWE chuẩn cho TOCTOU.',
  ),
  cwe(
    'res-cwe-362',
    362,
    'CWE-362: Concurrent Execution using Shared Resource',
    'Mã CWE chuẩn cho race condition nói chung.',
  ),

  // ── Nâng cao ─────────────────────────────────────────────────────────────
  academy(
    'res-ps-essential-skills',
    'essential-skills',
    'Essential skills',
    'Kỹ năng nền cho toàn bộ Academy: đọc phản hồi khác thường, kiểm thử mù, khai thác theo chuỗi.',
  ),
  defineResource({
    id: 'res-grpc-web',
    title: 'gRPC-Web',
    url: 'https://grpc.io/docs/platforms/web/basics/',
    provider: 'gRPC',
    descriptionVi:
      'Cách gRPC chạy trong trình duyệt qua một lớp proxy, và định dạng khung dữ liệu khác hoàn toàn JSON.',
    resourceType: 'documentation',
    domainIds: ['dom-web', 'dom-api'],
    sourceClass: 'project-primary',
    sourceOriginNoteVi: 'Tài liệu chính thức của dự án gRPC.',
    difficulty: 'advanced',
  }),
  defineResource({
    id: 'res-cloudflare-workers-security',
    title: 'Cloudflare Workers — Security model',
    url: 'https://developers.cloudflare.com/workers/reference/security-model/',
    provider: 'Cloudflare',
    descriptionVi:
      'Mô hình cô lập của một nền tảng serverless chạy ở biên: ranh giới giữa các workload nằm ở đâu.',
    resourceType: 'documentation',
    domainIds: ['dom-web', 'dom-cloud'],
    sourceClass: 'official-vendor',
    sourceOriginNoteVi:
      'Tài liệu chính thức của nhà cung cấp, dùng làm ví dụ cụ thể cho web ở biên.',
    difficulty: 'advanced',
  }),
];
