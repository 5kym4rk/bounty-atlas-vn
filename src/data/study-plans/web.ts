import { core, extra, type PlanMap } from './helpers';

/** Lộ trình học cho lĩnh vực D — ứng dụng web. */
export const webPlans: PlanMap = {
  'mod-web-architecture': [
    core('res-mdn-http', 'Nắm lại tham chiếu HTTP trước khi nói tới lớp nào nằm trên lớp nào.'),
    core('res-mdn-security', 'Xem tổng quan các cơ chế bảo mật mà trình duyệt thực thi.'),
    core(
      'res-portswigger-all-topics',
      'Đối chiếu danh mục chủ đề để biết bề mặt web gồm những gì.',
    ),
    extra('res-rfc9110', 'Khi cần trích dẫn chuẩn HTTP trong báo cáo.'),
    extra(
      'res-cs-attack-surface',
      'Cách liệt kê bề mặt tấn công có hệ thống thay vì dò ngẫu nhiên.',
    ),
  ],
  'mod-web-login': [
    core('res-ps-authentication', 'Chương chính về lỗi xác thực, có lab cho từng dạng.'),
    core('res-cs-authentication', 'Đối chiếu phía sửa lỗi để viết phần khắc phục trong báo cáo.'),
    core('res-cs-mfa', 'MFA hay bị bỏ sót đường vòng; đọc để biết chỗ nào cần kiểm.'),
    extra('res-cwe-287', 'Gán nguyên nhân gốc khi báo cáo.'),
    extra('res-cs-credential-stuffing', 'Hiểu phía phòng thủ. Không dùng để thực hiện tấn công.'),
  ],
  'mod-web-password-reset': [
    core(
      'res-cs-forgot-password',
      'Thiết kế đúng của luồng đặt lại mật khẩu — làm mốc để thấy chỗ sai.',
    ),
    core(
      'res-ps-authentication',
      'Phần khôi phục tài khoản trong chương xác thực, có lab kèm theo.',
    ),
    core('res-ps-host-header', 'Host header đầu độc liên kết đặt lại là biến thể gặp nhiều.'),
    extra('res-cs-password-storage', 'Cách lưu mật khẩu đúng ở phía sau luồng này.'),
  ],
  'mod-web-session': [
    core('res-cs-session', 'Vòng đời phiên chuẩn: sinh, xoay, huỷ và xác thực lại.'),
    core('res-ps-authentication', 'Lab về phiên nằm trong chương xác thực.'),
    core('res-mdn-cookies', 'Thuộc tính cookie quyết định phiên bị lộ hay không.'),
    extra('res-cwe-384', 'Mã CWE cho session fixation.'),
    extra('res-rfc6265', 'Đặc tả cookie khi cần lập luận chính xác về phạm vi domain và path.'),
  ],
  'mod-web-idor': [
    core('res-ps-idor', 'Mục chuyên về IDOR, có lab dùng định danh đoán được.'),
    core('res-ps-access-control', 'Chương phân quyền đầy đủ, đặt IDOR vào bối cảnh rộng hơn.'),
    core('res-cs-idor', 'Vì sao định danh khó đoán không phải cách sửa, và đâu mới là cách đúng.'),
    core(
      'res-cwe-639',
      'Gán đúng mã CWE là việc bắt buộc khi nộp; đọc phần mô tả để trích cho chuẩn.',
    ),
    extra('res-cs-authorization', 'Nguyên tắc phân quyền chung ở phía thiết kế.'),
  ],
  'mod-web-privilege-escalation': [
    core('res-ps-access-control', 'Chương phân quyền, gồm cả leo thang ngang và dọc.'),
    core('res-cs-authorization', 'Mặc định từ chối và kiểm tra ở tầng máy chủ.'),
    core('res-cwe-863', 'Có kiểm tra quyền nhưng logic sai — khác với thiếu hẳn.'),
    extra('res-cwe-862', 'Trường hợp không kiểm tra quyền chút nào.'),
  ],
  'mod-web-tenant-isolation': [
    core('res-ps-access-control', 'Nền phân quyền, áp dụng lên ranh giới tổ chức.'),
    core('res-cs-authorization', 'Gắn điều kiện tổ chức vào chính truy vấn dữ liệu.'),
    core(
      'res-cs-microservices',
      'Truyền danh tính giữa các dịch vụ nội bộ — chỗ ranh giới người thuê hay rơi.',
    ),
    extra('res-api1-bola', 'Cùng lớp vấn đề nhìn từ phía API.'),
  ],
  'mod-web-sqli': [
    core('res-ps-sqli', 'Chương SQL injection với lab cho từng biến thể.'),
    core('res-cs-sqli', 'Truy vấn tham số hoá và các phòng thủ không hiệu quả.'),
    core('res-cwe-89', 'Mã CWE chuẩn để gán trong báo cáo.'),
    extra('res-ps-nosqli', 'Biến thể trong cơ sở dữ liệu không quan hệ.'),
  ],
  'mod-web-command-injection': [
    core('res-ps-command-injection', 'Chương command injection, gồm cả trường hợp mù.'),
    core('res-cs-command-injection', 'Tránh gọi shell và truyền tham số dạng mảng.'),
    core('res-cwe-78', 'Mã CWE chuẩn để gán trong báo cáo.'),
    extra('res-cs-injection', 'Nguyên tắc chung cho mọi loại injection theo ngữ cảnh.'),
  ],
  'mod-web-ssti': [
    core('res-ps-ssti', 'Chương SSTI: nhận diện engine trước, rồi mới nói tới tác động.'),
    core('res-cwe-1336', 'Mã CWE chuẩn cho SSTI, dùng khi gán nguyên nhân gốc trong báo cáo.'),
    extra('res-cs-injection', 'Đặt SSTI vào nhóm injection chung.'),
  ],
  'mod-web-xxe': [
    core('res-ps-xxe', 'Chương XXE, gồm biến thể mù và XXE dẫn tới SSRF.'),
    core('res-cs-xxe', 'Cách tắt entity ngoài theo từng thư viện phân tích cụ thể.'),
    core('res-cwe-611', 'Mã CWE chuẩn cho XXE, dùng khi gán nguyên nhân gốc trong báo cáo.'),
  ],
  'mod-web-xss': [
    core('res-ps-xss', 'Chương XSS đầy đủ, có lab cho phản chiếu và lưu trữ.'),
    core('res-cs-xss', 'Mã hoá đầu ra theo từng ngữ cảnh — cốt lõi của phần khắc phục.'),
    core('res-cwe-79', 'Mã CWE chuẩn để gán trong báo cáo.'),
    extra('res-cs-csp', 'CSP là lớp phòng thủ thứ hai, không thay được mã hoá đầu ra.'),
  ],
  'mod-web-dom-xss': [
    core('res-ps-dom-based', 'Nhóm lỗi phát sinh hoàn toàn trong trình duyệt.'),
    core('res-cs-dom-xss', 'Danh sách sink nguy hiểm và API an toàn thay thế.'),
    core('res-ps-prototype-pollution', 'Ô nhiễm prototype và cách tìm gadget dẫn tới thực thi.'),
    extra('res-trusted-types', 'Cách chặn DOM XSS ở tầng nền tảng thay vì từng chỗ.'),
    extra('res-cwe-1321', 'Mã CWE cho ô nhiễm prototype.'),
  ],
  'mod-web-postmessage': [
    core(
      'res-mdn-postmessage',
      'Tham số targetOrigin và kiểm tra event.origin — hai chỗ hay làm sai.',
    ),
    core('res-ps-dom-based', 'Lab về postMessage nằm trong nhóm lỗi DOM.'),
    core('res-cs-html5', 'Các tính năng HTML5 liên quan tới ranh giới cross-origin.'),
    extra('res-ps-websockets', 'WebSocket cũng cần kiểm tra origin ở phía máy chủ.'),
  ],
  'mod-web-csp': [
    core('res-mdn-csp', 'Ý nghĩa từng directive, đọc trước khi đánh giá một chính sách.'),
    core('res-cs-csp', 'Xây CSP từng bước bằng nonce hoặc hash.'),
    core('res-mdn-storage', 'localStorage và sessionStorage: vì sao không nên để token ở đó.'),
    extra('res-mdn-serviceworker', 'Service worker chặn được request mạng nên là bề mặt riêng.'),
    extra('res-trusted-types', 'Bổ sung cho CSP ở phía sink của DOM.'),
  ],
  'mod-web-csrf': [
    core('res-ps-csrf', 'Chương CSRF: điều kiện cần và các cách kiểm tra token bị làm sai.'),
    core('res-cs-csrf', 'Token đồng bộ, SameSite và xác minh origin — dùng cái nào khi nào.'),
    core('res-cwe-352', 'Mã CWE chuẩn để gán trong báo cáo.'),
    extra('res-mdn-cookies', 'SameSite quyết định cookie có được gửi kèm hay không.'),
  ],
  'mod-web-cors': [
    core('res-mdn-cors', 'Cơ chế CORS và preflight, đọc trước khi đánh giá cấu hình.'),
    core('res-ps-cors', 'Các cấu hình sai cụ thể: phản chiếu origin, tin cậy null.'),
    extra('res-cs-html5', 'CORS trong bối cảnh các tính năng nền tảng khác.'),
  ],
  'mod-web-ssrf': [
    core('res-ps-ssrf', 'Chương SSRF, gồm biến thể mù và cách chứng minh an toàn.'),
    core('res-cs-ssrf', 'Vì sao lọc theo danh sách cấm luôn thất bại.'),
    core('res-cwe-918', 'Mã CWE chuẩn để gán trong báo cáo.'),
    extra(
      'res-api7-ssrf',
      'Cùng vấn đề nhìn từ phía API, nơi URL là một trường dữ liệu bình thường.',
    ),
  ],
  'mod-web-cache': [
    core('res-ps-cache-poisoning', 'Đầu độc cache qua đầu vào không nằm trong khoá cache.'),
    core('res-ps-cache-deception', 'Lừa cache lưu nội dung riêng tư của người khác.'),
    core('res-ps-host-header', 'Host header là vector đầu độc phổ biến nhất.'),
    extra('res-mdn-http', 'Phần header caching trong tham chiếu HTTP.'),
  ],
  'mod-web-smuggling': [
    core(
      'res-ps-request-smuggling',
      'Chương request smuggling. Đọc kỹ phần giới hạn trước khi thử ở đâu khác.',
    ),
    core('res-rfc9110', 'Quy tắc xác định độ dài thân request — gốc của bất đồng bộ này.'),
    extra('res-ps-cache-poisoning', 'Smuggling thường được nối tiếp thành đầu độc cache.'),
  ],
  'mod-web-file-upload': [
    core('res-ps-file-upload', 'Chương tải tệp lên và điều kiện để tệp trở thành thực thi.'),
    core('res-cs-file-upload', 'Lưu ngoài webroot, đổi tên và kiểm tra nội dung thật.'),
    core('res-cwe-434', 'Mã CWE chuẩn để gán trong báo cáo.'),
  ],
  'mod-web-path-traversal': [
    core('res-ps-path-traversal', 'Chương path traversal với các biến thể mã hoá.'),
    core('res-cwe-22', 'Mã CWE chuẩn để gán trong báo cáo.'),
    extra(
      'res-cs-input-validation',
      'Kiểm tra đường dẫn bằng danh sách cho phép sau khi chuẩn hoá.',
    ),
  ],
  'mod-web-info-disclosure': [
    core(
      'res-ps-info-disclosure',
      'Các nguồn lộ thông tin và cách đánh giá mức nghiêm trọng thật.',
    ),
    core('res-cwe-200', 'Mã CWE chuẩn để gán trong báo cáo.'),
    core('res-cs-error-handling', 'Thông báo lỗi cho người dùng và log hệ thống nên khác nhau.'),
    extra('res-gitleaks', 'Bí mật còn trong lịch sử Git dù đã xoá khỏi bản mới nhất.'),
  ],
  'mod-web-deserialization': [
    core('res-ps-deserialization', 'Chương deserialization theo từng ngôn ngữ.'),
    core('res-cs-deserialization', 'Giới hạn lớp được phép và các cách thay thế an toàn.'),
    core('res-cwe-502', 'Mã CWE chuẩn để gán trong báo cáo.'),
    extra('res-ps-prototype-pollution', 'Ô nhiễm prototype phía máy chủ thuộc cùng nhóm vấn đề.'),
  ],
  'mod-web-race-condition': [
    core('res-ps-race-conditions', 'Chương race condition, gồm cách gửi song song để nhận biết.'),
    core('res-cwe-367', 'Mã CWE cho TOCTOU — phân biệt với race condition nói chung khi báo cáo.'),
    extra('res-cwe-362', 'Mã CWE cho race condition nói chung.'),
  ],
  'mod-web-webhook': [
    core(
      'res-slack-app-security',
      'Xác minh chữ ký request đến — yêu cầu cơ bản của webhook an toàn.',
    ),
    core('res-ps-ssrf', 'Webhook đi ra ngoài là một dạng SSRF có chủ đích.'),
    extra('res-api10-unsafe-consumption', 'Tin tưởng mù dữ liệu trả về từ bên thứ ba.'),
  ],
  'mod-web-business-logic': [
    core('res-ps-business-logic', 'Chương logic nghiệp vụ — không có danh sách payload nào ở đây.'),
    core(
      'res-cs-abuse-case',
      'Biến yêu cầu chức năng thành kịch bản lạm dụng để kiểm thử có định hướng.',
    ),
    extra('res-api6-business-flows', 'Luồng nghiệp vụ bị lạm dụng ở quy mô, nhìn từ phía API.'),
  ],
  'mod-web-payment-flow': [
    core(
      'res-ps-business-logic',
      'Lỗi thanh toán gần như luôn là lỗi logic, không phải lỗi kỹ thuật.',
    ),
    core('res-ps-race-conditions', 'Hoàn tiền và đổi điểm là chỗ race condition hay xuất hiện.'),
    extra('res-cs-abuse-case', 'Liệt kê kịch bản lạm dụng cho từng bước của luồng tiền.'),
  ],
  'mod-web-websocket': [
    core(
      'res-ps-websockets',
      'Chương WebSocket: thiếu kiểm tra origin và thiếu phân quyền từng thông điệp.',
    ),
    core('res-mdn-websockets', 'Giao thức và quá trình bắt tay.'),
    extra('res-grpc-web', 'gRPC-Web dùng khung dữ liệu khác hẳn JSON, cần công cụ khác để đọc.'),
  ],
  'mod-web-wasm': [
    core('res-mdn-wasm', 'Mô hình bộ nhớ của WebAssembly và ranh giới với JavaScript.'),
    core('res-chrome-mv3-overview', 'Tiện ích trình duyệt là nơi WebAssembly hay được nhúng.'),
    extra('res-chrome-permissions', 'Quyền của tiện ích quyết định tác động thật khi bị lạm dụng.'),
  ],
  'mod-web-edge': [
    core('res-cloudflare-workers-security', 'Mô hình cô lập của một nền tảng chạy ở biên.'),
    core('res-ps-cache-poisoning', 'Nhiều lớp CDN làm bề mặt đầu độc cache rộng hơn hẳn.'),
    extra(
      'res-ps-request-smuggling',
      'Bất đồng bộ giữa các lớp là rủi ro chính của kiến trúc nhiều tầng.',
    ),
  ],
};
