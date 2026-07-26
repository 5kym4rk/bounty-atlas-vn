import type { Weakness } from '@/schemas/entities';
import { defineWeakness } from '../helpers';

/**
 * Nhóm điểm yếu. KHÔNG lưu payload phá hoại ở đây — chỉ nguyên nhân gốc,
 * điều kiện, dấu hiệu, nguyên tắc xác minh an toàn và nguyên tắc khắc phục.
 */
export const weaknesses: Weakness[] = [
  defineWeakness({
    id: 'wkn-idor',
    titleVi: 'Tham chiếu đối tượng trực tiếp không an toàn (IDOR/BOLA)',
    aliases: ['IDOR', 'BOLA', 'Broken Object Level Authorization'],
    cweIds: ['CWE-639', 'CWE-863'],
    capecIds: ['CAPEC-180'],
    owaspReferences: ['OWASP API Security Top 10 — API1:2023'],
    bugcrowdVrtReferences: ['Broken Access Control > Insecure Direct Object References'],
    rootCauseVi:
      'Ứng dụng nhận định danh đối tượng từ phía người dùng và dùng nó để truy vấn dữ liệu, nhưng không kiểm tra người dùng hiện tại có quyền với đối tượng đó hay không. Kiểm tra phân quyền được đặt ở tầng giao diện hoặc tầng route thay vì ở tầng truy vấn dữ liệu.',
    preconditionsVi: [
      'Có định danh đối tượng xuất hiện trong request và có thể thay đổi.',
      'Người kiểm thử có ít nhất hai tài khoản để so sánh.',
    ],
    indicatorsVi: [
      'Định danh tuần tự hoặc có thể đoán được.',
      'Cùng một endpoint phục vụ nhiều người thuê mà không có tham số phạm vi.',
      'Phản hồi trả về đúng dữ liệu khi đổi định danh sang đối tượng của tài khoản khác.',
    ],
    safeValidationPrinciplesVi: [
      'Dùng hai tài khoản do chính bạn tạo, mỗi tài khoản có một đối tượng riêng.',
      'Chỉ thử thao tác đọc trước; chỉ thử ghi khi cần thiết và trên đối tượng của chính bạn.',
      'Không liệt kê hàng loạt định danh; một cặp đối tượng là đủ để chứng minh.',
    ],
    impactDimensions: [
      'Lộ dữ liệu của người dùng khác',
      'Thay đổi hoặc xoá dữ liệu của người dùng khác',
      'Vượt ranh giới giữa các tổ chức',
    ],
    remediationPrinciplesVi: [
      'Kiểm tra quyền sở hữu ở tầng truy vấn dữ liệu, gắn điều kiện chủ sở hữu vào mọi truy vấn.',
      'Mặc định từ chối; chỉ cho phép khi có quy tắc rõ ràng.',
      'Định danh khó đoán là biện pháp bổ sung, không thay thế kiểm tra phân quyền.',
      'Có test tự động cho ma trận vai trò × đối tượng.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-bfla',
    titleVi: 'Phân quyền ở mức chức năng bị thiếu (BFLA)',
    aliases: ['Broken Function Level Authorization', 'Missing function level access control'],
    cweIds: ['CWE-862', 'CWE-285'],
    owaspReferences: ['OWASP API Security Top 10 — API5:2023'],
    rootCauseVi:
      'Kiểm tra vai trò chỉ được thực hiện ở giao diện người dùng, hoặc chỉ cho một số method HTTP, nên endpoint dành cho quản trị vẫn gọi được bằng phiên của người dùng thường.',
    preconditionsVi: ['Biết được đường dẫn của endpoint đặc quyền.'],
    indicatorsVi: [
      'Endpoint quản trị xuất hiện trong mã phía client hoặc trong schema API.',
      'Phân quyền khác nhau giữa GET và các method khác trên cùng tài nguyên.',
    ],
    safeValidationPrinciplesVi: [
      'Gọi endpoint bằng phiên quyền thấp và quan sát mã trạng thái, không thực hiện thao tác gây thay đổi.',
      'Nếu endpoint gây thay đổi, dừng ở bước xác nhận quyền truy cập thay vì hoàn tất thao tác.',
    ],
    impactDimensions: [
      'Chiếm quyền quản trị',
      'Thay đổi cấu hình hệ thống',
      'Truy cập dữ liệu toàn hệ thống',
    ],
    remediationPrinciplesVi: [
      'Kiểm tra vai trò tập trung ở tầng API cho mọi endpoint và mọi method.',
      'Mặc định từ chối cho endpoint chưa khai báo quyền.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-mass-assignment',
    titleVi: 'Mass assignment và phân quyền ở mức thuộc tính',
    aliases: ['Mass assignment', 'Autobinding', 'Broken object property level authorization'],
    cweIds: ['CWE-915'],
    owaspReferences: ['OWASP API Security Top 10 — API3:2023'],
    rootCauseVi:
      'Framework tự động gán mọi trường trong thân request vào thuộc tính của đối tượng, nên client đặt được cả những thuộc tính mà nó không nên kiểm soát.',
    indicatorsVi: [
      'Phản hồi đọc trả về thuộc tính đặc quyền như vai trò hoặc trạng thái duyệt.',
      'API chấp nhận trường lạ mà không báo lỗi.',
    ],
    safeValidationPrinciplesVi: [
      'Thử trên đối tượng của chính bạn và hoàn tác thay đổi ngay sau khi xác nhận.',
      'Không thay đổi thuộc tính của đối tượng thuộc về người khác.',
    ],
    impactDimensions: [
      'Leo thang đặc quyền',
      'Bỏ qua quy trình phê duyệt',
      'Thay đổi trạng thái nghiệp vụ',
    ],
    remediationPrinciplesVi: [
      'Danh sách trường được phép ghi, khai báo tường minh và khác nhau theo vai trò.',
      'Tách kiểu dữ liệu đầu vào khỏi kiểu dữ liệu lưu trữ.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-sqli',
    titleVi: 'SQL injection',
    aliases: ['SQLi'],
    cweIds: ['CWE-89'],
    capecIds: ['CAPEC-66'],
    owaspReferences: ['OWASP WSTG — Testing for SQL Injection'],
    rootCauseVi:
      'Dữ liệu do người dùng kiểm soát được ghép vào câu truy vấn dưới dạng chuỗi, nên bộ phân tích SQL diễn giải nó như một phần của cấu trúc truy vấn thay vì như dữ liệu.',
    preconditionsVi: ['Có tham số đi vào truy vấn cơ sở dữ liệu.'],
    indicatorsVi: [
      'Khác biệt phản hồi giữa điều kiện logic đúng và sai.',
      'Thông báo lỗi lộ cú pháp truy vấn.',
      'Hành vi ứng dụng thay đổi theo cấu trúc dữ liệu nhập vào chứ không theo giá trị.',
    ],
    safeValidationPrinciplesVi: [
      'Ưu tiên phép thử logic đúng/sai chỉ đọc, không dùng phép thử gây lỗi hàng loạt.',
      'Không dùng phép thử dựa trên độ trễ trên hệ thống đang phục vụ người dùng.',
      'Chứng minh bằng một giá trị vô hại, ví dụ phiên bản cơ sở dữ liệu; không trích xuất dữ liệu người dùng.',
    ],
    impactDimensions: ['Đọc dữ liệu ngoài phạm vi', 'Thay đổi dữ liệu', 'Chiếm quyền ứng dụng'],
    remediationPrinciplesVi: [
      'Dùng truy vấn tham số hoá; không nối chuỗi để tạo truy vấn.',
      'Đặc quyền tối thiểu cho tài khoản cơ sở dữ liệu của ứng dụng.',
      'Danh sách cho phép cho phần cấu trúc buộc phải động, ví dụ tên cột sắp xếp.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-nosql-injection',
    titleVi: 'NoSQL injection',
    cweIds: ['CWE-943'],
    rootCauseVi:
      'Dữ liệu người dùng được đưa trực tiếp vào cấu trúc truy vấn dạng đối tượng, cho phép thay một giá trị bằng một toán tử truy vấn.',
    indicatorsVi: ['Endpoint chấp nhận đối tượng ở vị trí lẽ ra chỉ nhận chuỗi hoặc số.'],
    safeValidationPrinciplesVi: [
      'Kiểm tra bằng cách gửi kiểu dữ liệu khác và quan sát ứng dụng có từ chối không.',
      'Không thực hiện thao tác thay đổi dữ liệu.',
    ],
    impactDimensions: ['Bỏ qua xác thực', 'Đọc dữ liệu ngoài phạm vi'],
    remediationPrinciplesVi: [
      'Ép kiểu và kiểm tra schema đầu vào trước khi dựng truy vấn.',
      'Không cho phép đối tượng lồng nhau ở vị trí giá trị.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-command-injection',
    titleVi: 'Command injection',
    cweIds: ['CWE-78'],
    capecIds: ['CAPEC-88'],
    rootCauseVi:
      'Ứng dụng gọi shell với chuỗi lệnh có chứa dữ liệu người dùng, nên shell diễn giải ký tự phân tách như một phần cấu trúc lệnh.',
    indicatorsVi: [
      'Tính năng gọi tới tiện ích hệ thống: chuyển đổi tệp, ping, tạo ảnh thu nhỏ.',
      'Độ trễ hoặc lỗi thay đổi theo ký tự đặc biệt trong đầu vào.',
    ],
    safeValidationPrinciplesVi: [
      'Dùng lệnh vô hại chỉ trả về thông tin không nhạy cảm.',
      'Dừng ngay sau khi xác nhận; không đi tiếp tới thao tác gây thay đổi hệ thống.',
    ],
    impactDimensions: [
      'Thực thi lệnh trên máy chủ',
      'Truy cập hệ thống tệp',
      'Bàn đạp vào mạng nội bộ',
    ],
    remediationPrinciplesVi: [
      'Tránh gọi shell; dùng API nhận đối số dạng mảng tách biệt.',
      'Danh sách cho phép cho giá trị đầu vào; không dựa vào việc loại bỏ ký tự.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-ssti',
    titleVi: 'Server-side template injection',
    cweIds: ['CWE-1336', 'CWE-94'],
    rootCauseVi:
      'Dữ liệu người dùng được ghép vào chuỗi template rồi mới đưa cho engine biên dịch, thay vì được truyền vào template đã biên dịch như một biến.',
    indicatorsVi: ['Biểu thức toán học trong đầu vào được trả về đã tính toán.'],
    safeValidationPrinciplesVi: [
      'Chứng minh bằng một biểu thức số học đơn giản.',
      'Không đi tới thực thi lệnh trên hệ thống thật.',
    ],
    impactDimensions: ['Thực thi mã phía máy chủ', 'Đọc dữ liệu nội bộ'],
    remediationPrinciplesVi: [
      'Không bao giờ ghép dữ liệu người dùng vào chuỗi template.',
      'Dùng engine có sandbox và tắt các hàm nguy hiểm.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-xxe',
    titleVi: 'XML external entity (XXE)',
    cweIds: ['CWE-611'],
    capecIds: ['CAPEC-201'],
    rootCauseVi:
      'Bộ phân tích XML được cấu hình mặc định cho phép xử lý thực thể ngoài và DTD, nên tài liệu XML có thể yêu cầu bộ phân tích đọc tệp hoặc phát sinh request.',
    indicatorsVi: ['Endpoint nhận XML, SVG, tài liệu văn phòng hoặc assertion SAML.'],
    safeValidationPrinciplesVi: [
      'Chứng minh bằng một tệp không nhạy cảm có nội dung cố định.',
      'Với biến thể mù, dùng đích do bạn kiểm soát và có ghi log.',
    ],
    impactDimensions: [
      'Đọc tệp trên máy chủ',
      'Phát sinh request từ máy chủ',
      'Tiêu thụ tài nguyên',
    ],
    remediationPrinciplesVi: [
      'Tắt DTD và thực thể ngoài trong cấu hình bộ phân tích.',
      'Ưu tiên định dạng dữ liệu đơn giản hơn khi có thể.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-xss-reflected',
    titleVi: 'Cross-site scripting phản chiếu',
    cweIds: ['CWE-79'],
    capecIds: ['CAPEC-591'],
    rootCauseVi:
      'Dữ liệu từ request được đưa vào phản hồi mà không được mã hoá theo đúng ngữ cảnh đầu ra, nên trình duyệt diễn giải nó như mã thay vì như nội dung.',
    indicatorsVi: ['Giá trị tham số xuất hiện nguyên vẹn trong HTML trả về.'],
    safeValidationPrinciplesVi: [
      'Chứng minh trong trình duyệt của chính bạn bằng một hành động vô hại và quan sát được.',
      'Không dùng payload gây phiền cho người dùng khác.',
    ],
    impactDimensions: [
      'Thực hiện hành động thay mặt người dùng',
      'Lộ dữ liệu trong trang',
      'Chiếm phiên',
    ],
    remediationPrinciplesVi: [
      'Mã hoá đầu ra theo ngữ cảnh tại thời điểm render.',
      'CSP và Trusted Types là lớp bổ sung, không thay thế mã hoá đầu ra.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-xss-stored',
    titleVi: 'Cross-site scripting lưu trữ',
    cweIds: ['CWE-79'],
    rootCauseVi:
      'Nội dung do người dùng gửi được lưu lại rồi hiển thị cho người dùng khác mà không mã hoá theo ngữ cảnh, nên tác động lan tới mọi người xem nội dung đó.',
    indicatorsVi: [
      'Nội dung người dùng hiển thị cho người khác: bình luận, hồ sơ, tên tệp, thông báo.',
    ],
    safeValidationPrinciplesVi: [
      'Dùng tài khoản của chính bạn và trang chỉ mình bạn xem được nếu có.',
      'Xoá nội dung thử nghiệm ngay sau khi chụp bằng chứng và ghi lại việc xoá đó.',
    ],
    impactDimensions: ['Ảnh hưởng nhiều người dùng', 'Chiếm phiên quản trị', 'Lan truyền tự động'],
    remediationPrinciplesVi: [
      'Mã hoá đầu ra theo ngữ cảnh; làm sạch HTML bằng thư viện đã kiểm chứng nếu buộc phải cho phép định dạng.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-dom-xss',
    titleVi: 'DOM-based XSS',
    cweIds: ['CWE-79'],
    rootCauseVi:
      'Mã JavaScript của trang lấy dữ liệu từ một nguồn do người dùng kiểm soát và ghi nó vào một điểm nhận nguy hiểm trong DOM, hoàn toàn ở phía client.',
    indicatorsVi: ['Giá trị từ URL hoặc storage được dùng để dựng HTML trong mã client.'],
    safeValidationPrinciplesVi: [
      'Chứng minh bằng thay đổi quan sát được trong trang của chính bạn.',
    ],
    impactDimensions: ['Thực thi mã trong ngữ cảnh trang', 'Lộ dữ liệu phía client'],
    remediationPrinciplesVi: [
      'Dùng API DOM an toàn thay vì gán HTML dạng chuỗi.',
      'Bật Trusted Types để chặn gán chuỗi vào điểm nhận nguy hiểm.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-prototype-pollution',
    titleVi: 'Prototype pollution',
    cweIds: ['CWE-1321'],
    rootCauseVi:
      'Hàm gộp hoặc sao chép đối tượng không loại bỏ khoá đặc biệt, nên dữ liệu đầu vào ghi được vào prototype dùng chung và ảnh hưởng tới mọi đối tượng khác.',
    indicatorsVi: ['Ứng dụng gộp đối tượng cấu hình từ dữ liệu người dùng.'],
    safeValidationPrinciplesVi: [
      'Kiểm tra bằng một thuộc tính vô hại và quan sát nó xuất hiện ở đối tượng khác.',
    ],
    impactDimensions: [
      'Thay đổi hành vi ứng dụng',
      'Bỏ qua kiểm tra bảo mật',
      'Dẫn tới thực thi mã',
    ],
    remediationPrinciplesVi: [
      'Chặn khoá đặc biệt khi gộp đối tượng; dùng cấu trúc dữ liệu không có prototype.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-csrf',
    titleVi: 'Cross-site request forgery',
    cweIds: ['CWE-352'],
    capecIds: ['CAPEC-62'],
    rootCauseVi:
      'Ứng dụng chỉ dựa vào thông tin xác thực mà trình duyệt tự động gửi kèm để xác định ý định của người dùng, không có yếu tố nào chứng minh request đến từ giao diện của chính ứng dụng.',
    indicatorsVi: [
      'Thao tác gây thay đổi không có token chống CSRF và cookie không có SameSite phù hợp.',
    ],
    safeValidationPrinciplesVi: [
      'Dùng trang thử nghiệm chạy cục bộ trên máy bạn và tài khoản của bạn.',
      'Không đặt trang khai thác ở nơi người dùng thật có thể truy cập.',
    ],
    impactDimensions: ['Thực hiện hành động thay mặt người dùng', 'Thay đổi cấu hình tài khoản'],
    remediationPrinciplesVi: [
      'Token chống CSRF gắn với phiên và kiểm tra ở server.',
      'Đặt SameSite phù hợp và yêu cầu xác thực lại cho hành động nhạy cảm.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-cors-misconfig',
    titleVi: 'Cấu hình CORS sai',
    cweIds: ['CWE-942'],
    rootCauseVi:
      'Máy chủ phản chiếu origin của bên gọi vào header cho phép, đồng thời cho phép gửi thông tin xác thực, khiến bất kỳ origin nào cũng đọc được phản hồi có dữ liệu người dùng.',
    indicatorsVi: [
      'Header cho phép origin thay đổi theo origin của request và cho phép credentials.',
    ],
    safeValidationPrinciplesVi: [
      'Kiểm tra bằng cách quan sát header phản hồi, không cần khai thác.',
    ],
    impactDimensions: ['Lộ dữ liệu người dùng cho site bên thứ ba'],
    remediationPrinciplesVi: [
      'Danh sách origin cho phép cố định; không phản chiếu origin của bên gọi.',
      'Không kết hợp ký tự đại diện với cho phép credentials.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-ssrf',
    titleVi: 'Server-side request forgery',
    cweIds: ['CWE-918'],
    capecIds: ['CAPEC-664'],
    owaspReferences: ['OWASP API Security Top 10 — API7:2023'],
    rootCauseVi:
      'Máy chủ thực hiện request tới địa chỉ mà người dùng ảnh hưởng được, và vị trí mạng của máy chủ cho phép nó chạm tới tài nguyên mà người dùng không chạm tới được.',
    indicatorsVi: [
      'Tính năng nhận URL: tải ảnh từ liên kết, xem trước, webhook, nhập dữ liệu từ xa.',
      'Khác biệt phản hồi hoặc độ trễ theo địa chỉ đích.',
    ],
    safeValidationPrinciplesVi: [
      'Dùng một đích do bạn kiểm soát và có ghi log để xác nhận request đến.',
      'Không truy vấn dịch vụ metadata để lấy thông tin xác thực thật.',
    ],
    impactDimensions: [
      'Truy cập dịch vụ nội bộ',
      'Lấy thông tin xác thực từ metadata',
      'Quét mạng nội bộ',
    ],
    remediationPrinciplesVi: [
      'Danh sách cho phép ở tầng ứng dụng kết hợp kiểm soát lối ra ở tầng mạng.',
      'Chặn truy cập tới dịch vụ metadata từ workload ứng dụng.',
      'Không theo chuyển hướng tới địa chỉ nội bộ.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-open-redirect',
    titleVi: 'Open redirect',
    cweIds: ['CWE-601'],
    rootCauseVi:
      'Ứng dụng chuyển hướng tới địa chỉ lấy từ tham số mà không kiểm tra địa chỉ đó có thuộc về mình không.',
    indicatorsVi: ['Tham số chứa URL hoặc đường dẫn dùng để quay lại sau khi đăng nhập.'],
    safeValidationPrinciplesVi: ['Chuyển hướng tới một tên miền do bạn sở hữu để chứng minh.'],
    impactDimensions: [
      'Tăng độ tin cậy cho liên kết lừa đảo',
      'Rò rỉ token khi kết hợp với luồng OAuth',
    ],
    remediationPrinciplesVi: ['Danh sách đích cho phép hoặc chỉ chấp nhận đường dẫn tương đối.'],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-cache-poisoning',
    titleVi: 'Đầu độc và đánh lừa cache web',
    cweIds: ['CWE-444', 'CWE-524'],
    rootCauseVi:
      'Cache và ứng dụng không thống nhất về khoá cache hoặc về nội dung nào được phép lưu, nên phản hồi dành cho một người có thể được phục vụ cho người khác.',
    indicatorsVi: [
      'Header ảnh hưởng nội dung phản hồi nhưng không nằm trong khoá cache.',
      'Trang cá nhân hoá được lưu đệm.',
    ],
    safeValidationPrinciplesVi: [
      'Chỉ thử trên lab. Trên hệ thống thật phải có cho phép rõ ràng và dùng khoá cache riêng biệt.',
    ],
    impactDimensions: [
      'Ảnh hưởng người dùng khác',
      'Lộ dữ liệu cá nhân hoá',
      'Từ chối dịch vụ gián tiếp',
    ],
    remediationPrinciplesVi: [
      'Đưa mọi header ảnh hưởng phản hồi vào khoá cache.',
      'Đánh dấu rõ nội dung cá nhân hoá là không được lưu đệm.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-request-smuggling',
    titleVi: 'HTTP request smuggling',
    cweIds: ['CWE-444'],
    rootCauseVi:
      'Hai thành phần trong chuỗi xử lý xác định ranh giới của một request theo hai cách khác nhau, nên một phần dữ liệu bị gán vào request của người dùng khác.',
    indicatorsVi: [
      'Chuỗi có proxy hoặc CDN đứng trước máy chủ ứng dụng với phiên bản giao thức khác nhau.',
    ],
    safeValidationPrinciplesVi: [
      'Chỉ thực hành trên lab. Kỹ thuật này có nguy cơ ảnh hưởng trực tiếp tới request của người dùng thật.',
    ],
    impactDimensions: [
      'Chiếm phiên người dùng khác',
      'Bỏ qua kiểm soát truy cập',
      'Đầu độc phản hồi',
    ],
    remediationPrinciplesVi: [
      'Đồng bộ cách xác định độ dài request trong toàn chuỗi; từ chối request có thông tin độ dài mâu thuẫn.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-path-traversal',
    titleVi: 'Path traversal',
    cweIds: ['CWE-22'],
    capecIds: ['CAPEC-126'],
    rootCauseVi:
      'Đường dẫn tệp được dựng từ dữ liệu người dùng và việc kiểm tra được thực hiện trước khi chuẩn hoá, nên chuỗi đi lên thư mục cha vượt qua được kiểm tra.',
    indicatorsVi: ['Tham số chứa tên tệp hoặc đường dẫn.'],
    safeValidationPrinciplesVi: ['Đọc một tệp vô hại, không đọc tệp chứa bí mật.'],
    impactDimensions: ['Đọc tệp ngoài phạm vi', 'Ghi tệp vào vị trí ngoài dự kiến'],
    remediationPrinciplesVi: [
      'Chuẩn hoá đường dẫn rồi mới kiểm tra nó nằm trong thư mục cho phép.',
      'Ưu tiên dùng định danh không phải đường dẫn.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-unrestricted-upload',
    titleVi: 'Tải tệp lên không được kiểm soát',
    cweIds: ['CWE-434'],
    rootCauseVi:
      'Ứng dụng dựa vào phần mở rộng hoặc content-type do client khai báo để quyết định cách xử lý và phục vụ tệp.',
    indicatorsVi: ['Tệp tải lên được phục vụ lại từ cùng tên miền với tên do người dùng đặt.'],
    safeValidationPrinciplesVi: [
      'Dùng tệp vô hại có nội dung nhận biết được; không tải lên tệp có khả năng thực thi trên hệ thống thật.',
    ],
    impactDimensions: ['Thực thi mã phía máy chủ', 'XSS lưu trữ', 'Tiêu thụ dung lượng'],
    remediationPrinciplesVi: [
      'Lưu tệp ngoài thư mục web, đặt tên do máy chủ sinh, phục vụ với content-type cố định.',
      'Kiểm tra nội dung thực tế của tệp, không chỉ phần mở rộng.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-deserialization',
    titleVi: 'Deserialization dữ liệu không tin cậy',
    cweIds: ['CWE-502'],
    rootCauseVi:
      'Ứng dụng khôi phục đối tượng từ dữ liệu do người dùng cung cấp, cho phép người gửi ảnh hưởng tới kiểu và trạng thái của đối tượng trong tiến trình máy chủ.',
    indicatorsVi: ['Dữ liệu dạng đối tượng đã tuần tự hoá xuất hiện trong cookie hoặc tham số.'],
    safeValidationPrinciplesVi: [
      'Dừng ngay khi xác nhận được khả năng ảnh hưởng; không đi tới thực thi lệnh trên hệ thống thật.',
    ],
    impactDimensions: ['Thực thi mã phía máy chủ', 'Bỏ qua kiểm tra bảo mật'],
    remediationPrinciplesVi: [
      'Dùng định dạng dữ liệu thuần với schema rõ ràng thay vì khôi phục đối tượng.',
      'Nếu buộc phải, ký và xác minh dữ liệu trước khi khôi phục.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-race-condition',
    titleVi: 'Race condition và TOCTOU',
    cweIds: ['CWE-362', 'CWE-367'],
    rootCauseVi:
      'Việc kiểm tra điều kiện và việc sử dụng kết quả kiểm tra nằm ở hai bước tách rời, nên trạng thái có thể thay đổi giữa hai bước khi có nhiều request đồng thời.',
    indicatorsVi: ['Tính năng có giới hạn dùng một lần: mã giảm giá, rút tiền, mời thành viên.'],
    safeValidationPrinciplesVi: [
      'Dùng số lượng request song song nhỏ nhất đủ để chứng minh, thường là hai hoặc ba.',
      'Không gửi lượng lớn request song song vì có thể gây ảnh hưởng dịch vụ.',
    ],
    impactDimensions: [
      'Nhân đôi giá trị nghiệp vụ',
      'Bỏ qua giới hạn',
      'Sai lệch dữ liệu tài chính',
    ],
    remediationPrinciplesVi: [
      'Dùng ràng buộc nguyên tử ở tầng dữ liệu: giao dịch, khoá, ràng buộc duy nhất.',
      'Thiết kế thao tác idempotent theo khoá nghiệp vụ.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-business-logic',
    titleVi: 'Lỗi logic nghiệp vụ',
    cweIds: ['CWE-840'],
    rootCauseVi:
      'Hệ thống chấp nhận một trạng thái hoặc một chuỗi thao tác mà người thiết kế không lường trước, vì ràng buộc nghiệp vụ chỉ được thực thi ở giao diện chứ không ở phía server.',
    indicatorsVi: [
      'Quy trình nhiều bước cho phép bỏ bước hoặc quay lại bước trước.',
      'Giá trị số chấp nhận số âm hoặc số rất lớn.',
    ],
    safeValidationPrinciplesVi: [
      'Dừng ở bước chứng minh hệ thống chấp nhận trạng thái không hợp lệ; không hoàn tất giao dịch tài chính thật.',
    ],
    impactDimensions: [
      'Thiệt hại tài chính',
      'Bỏ qua quy trình phê duyệt',
      'Vượt giới hạn nghiệp vụ',
    ],
    remediationPrinciplesVi: [
      'Thực thi ràng buộc nghiệp vụ ở phía server tại mọi bước chuyển trạng thái.',
      'Tính toán giá trị nhạy cảm hoàn toàn ở server từ dữ liệu tin cậy.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-weak-session',
    titleVi: 'Quản lý phiên yếu',
    cweIds: ['CWE-384', 'CWE-613'],
    rootCauseVi:
      'Định danh phiên không được làm mới khi đặc quyền thay đổi, hoặc phiên không bị vô hiệu khi đăng xuất và đổi mật khẩu.',
    indicatorsVi: ['Cookie phiên giữ nguyên trước và sau khi đăng nhập.'],
    safeValidationPrinciplesVi: ['Dùng hai trình duyệt và một tài khoản của chính bạn.'],
    impactDimensions: ['Chiếm phiên', 'Duy trì truy cập sau khi mật khẩu bị đổi'],
    remediationPrinciplesVi: [
      'Sinh định danh phiên mới sau mỗi lần nâng cấp đặc quyền.',
      'Vô hiệu hoá toàn bộ phiên khi đổi mật khẩu hoặc đăng xuất.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-weak-reset',
    titleVi: 'Luồng đặt lại mật khẩu yếu',
    cweIds: ['CWE-640'],
    rootCauseVi:
      'Token đặt lại có thể đoán được, không hết hạn, dùng lại được, hoặc bị rò rỉ qua referrer và log.',
    indicatorsVi: ['Token ngắn, có cấu trúc, hoặc xuất hiện trong URL được chia sẻ.'],
    safeValidationPrinciplesVi: ['Chỉ thao tác trên hai tài khoản do bạn tạo.'],
    impactDimensions: ['Chiếm tài khoản'],
    remediationPrinciplesVi: [
      'Token ngẫu nhiên mạnh, dùng một lần, thời hạn ngắn, không xuất hiện trong tham số truy vấn.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-user-enumeration',
    titleVi: 'Liệt kê tài khoản',
    cweIds: ['CWE-204'],
    rootCauseVi:
      'Ứng dụng phản hồi khác nhau tuỳ theo tài khoản có tồn tại hay không, qua nội dung, mã trạng thái hoặc thời gian xử lý.',
    indicatorsVi: ['Thông báo lỗi phân biệt "không tồn tại" với "sai mật khẩu".'],
    safeValidationPrinciplesVi: [
      'Chứng minh bằng hai tài khoản do bạn tạo, không bằng danh sách email của người thật.',
    ],
    impactDimensions: ['Hỗ trợ tấn công nhắm mục tiêu', 'Rò rỉ thông tin về người dùng'],
    remediationPrinciplesVi: [
      'Phản hồi đồng nhất cho mọi trường hợp thất bại, kể cả về thời gian xử lý.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-jwt-validation',
    titleVi: 'Xác minh JWT không đầy đủ',
    cweIds: ['CWE-347'],
    rootCauseVi:
      'Bên nhận không kiểm tra đủ các thuộc tính bắt buộc của token: chữ ký, thuật toán, issuer, audience và thời hạn.',
    indicatorsVi: ['Ứng dụng chấp nhận token đã sửa phần payload.'],
    safeValidationPrinciplesVi: ['Chỉ thao tác trên token của chính bạn.'],
    impactDimensions: ['Mạo danh người dùng', 'Leo thang đặc quyền'],
    remediationPrinciplesVi: [
      'Ghim thuật toán ở phía server; kiểm tra issuer, audience và thời hạn cho mọi token.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-oauth-redirect',
    titleVi: 'So khớp redirect URI lỏng lẻo trong OAuth',
    cweIds: ['CWE-601', 'CWE-863'],
    owaspReferences: ['RFC 9700 — OAuth 2.0 Security Best Current Practice'],
    rootCauseVi:
      'Máy chủ uỷ quyền so khớp redirect URI theo tiền tố hoặc cho phép ký tự đại diện, nên mã uỷ quyền có thể bị gửi tới đích do kẻ tấn công kiểm soát.',
    indicatorsVi: ['Redirect URI chấp nhận đường dẫn con hoặc tham số truy vấn thêm vào.'],
    safeValidationPrinciplesVi: ['Dùng ứng dụng client và tài khoản do bạn tạo.'],
    impactDimensions: ['Chiếm tài khoản qua luồng đăng nhập'],
    remediationPrinciplesVi: [
      'So khớp redirect URI chính xác tuyệt đối.',
      'Bắt buộc PKCE và ràng buộc state với phiên.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-account-linking',
    titleVi: 'Liên kết tài khoản dựa trên email chưa xác minh',
    cweIds: ['CWE-287'],
    rootCauseVi:
      'Ứng dụng coi hai danh tính là cùng một người chỉ dựa trên địa chỉ email do nhà cung cấp danh tính cung cấp, mà không kiểm tra email đó đã được xác minh chưa.',
    indicatorsVi: ['Đăng nhập bằng nhà cung cấp bên thứ ba tự động gộp vào tài khoản có sẵn.'],
    safeValidationPrinciplesVi: [
      'Chỉ dùng địa chỉ email và tài khoản do bạn kiểm soát ở cả hai phía.',
    ],
    impactDimensions: ['Chiếm tài khoản'],
    remediationPrinciplesVi: [
      'Chỉ liên kết tự động khi nhà cung cấp khẳng định email đã xác minh.',
      'Yêu cầu xác nhận từ chủ tài khoản hiện có trước khi gộp.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-tenant-isolation',
    titleVi: 'Cô lập người thuê bị phá vỡ',
    cweIds: ['CWE-653', 'CWE-863'],
    rootCauseVi:
      'Định danh người thuê được lấy từ dữ liệu do client kiểm soát, hoặc truy vấn dữ liệu không gắn điều kiện người thuê.',
    indicatorsVi: [
      'Tính năng tìm kiếm, xuất dữ liệu hoặc báo cáo trả về bản ghi của tổ chức khác.',
    ],
    safeValidationPrinciplesVi: [
      'Tạo hai tổ chức của chính bạn; dừng ngay nếu thấy dữ liệu của tổ chức lạ.',
    ],
    impactDimensions: [
      'Lộ dữ liệu khách hàng',
      'Vi phạm cam kết hợp đồng',
      'Rủi ro pháp lý cho nhà cung cấp',
    ],
    remediationPrinciplesVi: [
      'Ràng buộc người thuê ở tầng truy vấn dữ liệu, lấy từ phiên chứ không từ tham số.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-excessive-data',
    titleVi: 'Lộ dữ liệu quá mức trong phản hồi API',
    cweIds: ['CWE-213'],
    owaspReferences: ['OWASP API Security Top 10 — API3:2023'],
    rootCauseVi:
      'API trả về toàn bộ đối tượng và để client tự chọn trường hiển thị, nên trường nhạy cảm vẫn có trong phản hồi.',
    indicatorsVi: ['Phản hồi chứa trường mà giao diện không bao giờ hiển thị.'],
    safeValidationPrinciplesVi: ['Quan sát phản hồi cho tài khoản của chính bạn là đủ.'],
    impactDimensions: ['Lộ dữ liệu cá nhân', 'Hỗ trợ tấn công tiếp theo'],
    remediationPrinciplesVi: ['Lọc trường ở phía server theo vai trò của người gọi.'],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-resource-consumption',
    titleVi: 'Tiêu thụ tài nguyên không giới hạn',
    cweIds: ['CWE-770'],
    owaspReferences: ['OWASP API Security Top 10 — API4:2023'],
    rootCauseVi:
      'Endpoint không giới hạn kích thước đầu vào, số lượng phần tử, độ sâu truy vấn hoặc tần suất gọi, nên chi phí xử lý tăng không giới hạn theo yêu cầu của client.',
    indicatorsVi: ['Tham số phân trang không có trần; truy vấn lồng nhau không giới hạn độ sâu.'],
    safeValidationPrinciplesVi: [
      'Tăng dần và dừng ngay khi thấy dấu hiệu giới hạn hoặc dấu hiệu suy giảm dịch vụ.',
      'Tuyệt đối không thực hiện tấn công từ chối dịch vụ.',
    ],
    impactDimensions: ['Suy giảm dịch vụ', 'Chi phí hạ tầng tăng'],
    remediationPrinciplesVi: [
      'Giới hạn theo danh tính và theo chi phí; đặt trần cho kích thước và độ sâu.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-secret-exposure',
    titleVi: 'Lộ bí mật và thông tin xác thực',
    cweIds: ['CWE-798', 'CWE-540'],
    rootCauseVi:
      'Bí mật được nhúng vào mã phía client, ảnh firmware, lớp image, lịch sử repository hoặc log, nơi người ngoài đọc được.',
    indicatorsVi: ['Chuỗi giống khoá API trong tệp JavaScript, tệp cấu hình hoặc log.'],
    safeValidationPrinciplesVi: [
      'Không sử dụng bí mật tìm được để truy cập hệ thống.',
      'Mô tả phạm vi quyền của bí mật thay vì chứng minh bằng cách dùng nó.',
    ],
    impactDimensions: ['Truy cập trái phép vào dịch vụ', 'Leo thang sang hệ thống khác'],
    remediationPrinciplesVi: [
      'Xoay vòng ngay mọi bí mật đã lộ; xoá khỏi mã không đủ.',
      'Dùng thông tin xác thực ngắn hạn và quản lý bí mật tập trung.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-public-storage',
    titleVi: 'Lưu trữ đối tượng để công khai ngoài dự định',
    cweIds: ['CWE-732'],
    rootCauseVi:
      'Cấu hình quyền của bucket hoặc container cho phép truy cập ẩn danh, thường do kế thừa hoặc do chính sách quá rộng.',
    indicatorsVi: ['Tài nguyên lưu trữ trả về nội dung khi truy cập không có thông tin xác thực.'],
    safeValidationPrinciplesVi: [
      'Ghi nhận sự tồn tại và chụp bằng chứng tối thiểu; không tải dữ liệu về.',
    ],
    impactDimensions: ['Lộ dữ liệu khách hàng', 'Lộ tài liệu nội bộ'],
    remediationPrinciplesVi: [
      'Bật chặn truy cập công khai ở mức tài khoản; kiểm tra định kỳ quyền của tài nguyên lưu trữ.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-excessive-iam',
    titleVi: 'Quyền IAM rộng hơn nhu cầu',
    cweIds: ['CWE-250', 'CWE-732'],
    rootCauseVi:
      'Chính sách được viết rộng để nhanh chóng làm hệ thống chạy được, rồi không bao giờ được thu hẹp lại.',
    indicatorsVi: ['Chính sách dùng ký tự đại diện cho hành động hoặc tài nguyên.'],
    safeValidationPrinciplesVi: [
      'Đánh giá bằng cách đọc chính sách; không thực hiện hành động để kiểm chứng quyền trên hệ thống thật.',
    ],
    impactDimensions: [
      'Leo thang đặc quyền trong cloud',
      'Mở rộng thiệt hại khi một danh tính bị lộ',
    ],
    remediationPrinciplesVi: [
      'Đặc quyền tối thiểu, thông tin xác thực tạm thời, và điều kiện trong chính sách tin cậy.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-metadata-access',
    titleVi: 'Truy cập dịch vụ metadata từ workload',
    cweIds: ['CWE-918'],
    rootCauseVi:
      'Workload ứng dụng chạm tới được dịch vụ metadata của nền tảng, nên một SSRF trong ứng dụng trở thành đường lấy thông tin xác thực.',
    indicatorsVi: [
      'Ứng dụng có tính năng phát sinh request và chạy trên máy ảo hoặc container trong cloud.',
    ],
    safeValidationPrinciplesVi: [
      'Chứng minh khả năng phát sinh request tới đích của bạn là đủ; không lấy thông tin xác thực thật.',
    ],
    impactDimensions: ['Lấy thông tin xác thực của workload', 'Leo thang sang tài nguyên cloud'],
    remediationPrinciplesVi: [
      'Yêu cầu phiên bản metadata có bảo vệ; chặn truy cập từ tầng ứng dụng.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-container-escape-config',
    titleVi: 'Cấu hình container làm mờ ranh giới với host',
    cweIds: ['CWE-250'],
    rootCauseVi:
      'Container chạy đặc quyền, được mount socket của runtime, hoặc mount thư mục nhạy cảm của host, khiến ranh giới cô lập không còn ý nghĩa.',
    indicatorsVi: ['Cấu hình triển khai bật chế độ đặc quyền hoặc mount socket runtime.'],
    safeValidationPrinciplesVi: ['Chỉ kiểm chứng trên cụm lab của bạn.'],
    impactDimensions: ['Chiếm quyền trên host', 'Ảnh hưởng mọi workload trên cùng node'],
    remediationPrinciplesVi: [
      'Không chạy đặc quyền, không mount socket runtime, áp dụng chuẩn bảo mật pod ở mức restricted.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-k8s-rbac-escalation',
    titleVi: 'Quyền RBAC dẫn tới leo thang trong cụm',
    cweIds: ['CWE-269'],
    rootCauseVi:
      'Một số quyền tưởng như hẹp thực chất cho phép đọc bí mật, tạo workload hoặc mạo danh danh tính khác, dẫn tới quyền quản trị cụm.',
    indicatorsVi: [
      'Role cho phép đọc secret hoặc tạo pod trong namespace có service account đặc quyền.',
    ],
    safeValidationPrinciplesVi: ['Chỉ trên cụm lab của bạn.'],
    impactDimensions: ['Chiếm quyền quản trị cụm', 'Truy cập dữ liệu của mọi workload'],
    remediationPrinciplesVi: [
      'Đặc quyền tối thiểu theo namespace; rà soát các quyền có khả năng leo thang.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-exposed-service',
    titleVi: 'Dịch vụ hoặc giao diện quản trị phơi ra ngoài',
    cweIds: ['CWE-668', 'CWE-1188'],
    rootCauseVi:
      'Dịch vụ dành cho mạng nội bộ được gắn vào giao diện mạng công khai, thường do cấu hình mặc định hoặc do thay đổi hạ tầng.',
    indicatorsVi: ['Giao diện quản trị hoặc giám sát truy cập được từ Internet.'],
    safeValidationPrinciplesVi: [
      'Xác nhận sự tồn tại và mô tả rủi ro; không đăng nhập bằng thông tin xác thực mặc định trên hệ thống thật.',
    ],
    impactDimensions: ['Truy cập chức năng quản trị', 'Lộ thông tin hệ thống'],
    remediationPrinciplesVi: [
      'Giới hạn truy cập theo mạng nguồn; yêu cầu xác thực mạnh cho mọi giao diện quản trị.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-tls-misconfig',
    titleVi: 'Cấu hình TLS sai',
    cweIds: ['CWE-326', 'CWE-295'],
    rootCauseVi:
      'Dịch vụ chấp nhận giao thức hoặc bộ mã đã lỗi thời, hoặc chứng chỉ không khớp tên miền, hết hạn, hoặc chuỗi tin cậy không đầy đủ.',
    indicatorsVi: ['Chứng chỉ hết hạn hoặc tên miền không khớp; giao thức cũ vẫn được chấp nhận.'],
    safeValidationPrinciplesVi: ['Kiểm tra bằng cách quan sát bắt tay TLS; không cần khai thác.'],
    impactDimensions: ['Giảm mức bảo vệ đường truyền', 'Cảnh báo cho người dùng'],
    remediationPrinciplesVi: ['Cấu hình TLS theo hướng dẫn hiện hành; tự động gia hạn chứng chỉ.'],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-dangling-dns',
    titleVi: 'Bản ghi DNS trỏ tới tài nguyên không còn kiểm soát',
    cweIds: ['CWE-350'],
    rootCauseVi:
      'Bản ghi DNS vẫn trỏ tới một dịch vụ hoặc tài nguyên đã được giải phóng, nên người khác có thể yêu cầu chính tài nguyên đó.',
    indicatorsVi: [
      'Tên miền con trả về lỗi của nhà cung cấp dịch vụ cho biết tài nguyên chưa được cấu hình.',
    ],
    safeValidationPrinciplesVi: [
      'Không tự đăng ký tài nguyên đích để chứng minh. Báo cáo dấu hiệu và để tổ chức xử lý.',
    ],
    impactDimensions: ['Chiếm tên miền con', 'Tăng độ tin cậy cho nội dung giả mạo'],
    remediationPrinciplesVi: [
      'Xoá bản ghi DNS ngay khi giải phóng tài nguyên; rà soát định kỳ bản ghi treo.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-insecure-local-storage',
    titleVi: 'Lưu trữ cục bộ không an toàn trên thiết bị',
    cweIds: ['CWE-312', 'CWE-922'],
    owaspReferences: ['OWASP MASVS — nhóm Storage'],
    rootCauseVi:
      'Ứng dụng lưu dữ liệu nhạy cảm ở dạng không được bảo vệ trên thiết bị, hoặc đưa dữ liệu đó vào bản sao lưu và log.',
    indicatorsVi: [
      'Token hoặc dữ liệu cá nhân xuất hiện trong tệp cấu hình, cơ sở dữ liệu cục bộ hoặc log.',
    ],
    safeValidationPrinciplesVi: ['Chỉ kiểm tra trên thiết bị và tài khoản của chính bạn.'],
    impactDimensions: ['Lộ dữ liệu khi thiết bị bị mất', 'Ứng dụng khác đọc được dữ liệu'],
    remediationPrinciplesVi: [
      'Dùng kho khoá của nền tảng; loại dữ liệu nhạy cảm khỏi sao lưu và log.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-exported-component',
    titleVi: 'Thành phần ứng dụng di động phơi ra không kiểm soát',
    cweIds: ['CWE-926'],
    owaspReferences: ['OWASP MASVS — nhóm Platform'],
    rootCauseVi:
      'Thành phần được khai báo cho phép ứng dụng khác gọi tới nhưng không kiểm tra danh tính hoặc quyền của bên gọi.',
    indicatorsVi: [
      'Manifest khai báo thành phần cho phép truy cập từ ngoài mà không yêu cầu quyền.',
    ],
    safeValidationPrinciplesVi: [
      'Kiểm tra bằng ứng dụng thử nghiệm do bạn viết, trên thiết bị của bạn.',
    ],
    impactDimensions: [
      'Ứng dụng độc hại truy cập dữ liệu',
      'Thực hiện hành động thay mặt người dùng',
    ],
    remediationPrinciplesVi: [
      'Mặc định không cho phép truy cập từ ngoài; kiểm tra quyền và danh tính bên gọi.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-cert-validation',
    titleVi: 'Xác thực chứng chỉ không đúng ở phía client',
    cweIds: ['CWE-295'],
    rootCauseVi:
      'Ứng dụng chấp nhận mọi chứng chỉ hoặc bỏ qua lỗi xác thực, thường là đoạn mã tạm thời cho môi trường phát triển bị đưa vào bản phát hành.',
    indicatorsVi: ['Ứng dụng vẫn hoạt động khi lưu lượng đi qua proxy có chứng chỉ không tin cậy.'],
    safeValidationPrinciplesVi: ['Chỉ kiểm tra trên thiết bị của bạn với ứng dụng trong phạm vi.'],
    impactDimensions: ['Lộ dữ liệu trên đường truyền', 'Sửa đổi dữ liệu trên đường truyền'],
    remediationPrinciplesVi: [
      'Dùng cơ chế xác thực chứng chỉ mặc định của nền tảng; không bỏ qua lỗi.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-ipc-authz',
    titleVi: 'Kênh IPC không xác thực bên gọi',
    cweIds: ['CWE-862'],
    rootCauseVi:
      'Dịch vụ chạy quyền cao phơi ra một kênh IPC cục bộ và thực hiện yêu cầu mà không kiểm tra tiến trình gọi là ai.',
    indicatorsVi: ['Dịch vụ đặc quyền lắng nghe trên socket hoặc named pipe cục bộ.'],
    safeValidationPrinciplesVi: ['Chỉ kiểm tra trong máy ảo của bạn.'],
    impactDimensions: [
      'Leo thang đặc quyền cục bộ',
      'Vượt ranh giới giữa người dùng trên cùng máy',
    ],
    remediationPrinciplesVi: ['Xác thực danh tính và quyền của tiến trình gọi trên mọi kênh IPC.'],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-unsafe-update',
    titleVi: 'Cơ chế cập nhật không xác minh',
    cweIds: ['CWE-494'],
    rootCauseVi:
      'Ứng dụng tải gói cập nhật và cài đặt mà không xác minh chữ ký, hoặc cho phép hạ cấp về phiên bản có lỗ hổng.',
    indicatorsVi: ['Kênh cập nhật không dùng kênh mã hoá hoặc không kiểm tra chữ ký.'],
    safeValidationPrinciplesVi: ['Chỉ kiểm tra trong máy ảo tách biệt của bạn.'],
    impactDimensions: ['Thực thi mã tuỳ ý trên máy người dùng', 'Ảnh hưởng diện rộng'],
    remediationPrinciplesVi: ['Ký gói cập nhật và xác minh trước khi cài; chống hạ cấp phiên bản.'],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-buffer-overflow',
    titleVi: 'Tràn bộ đệm',
    cweIds: ['CWE-787', 'CWE-125', 'CWE-120'],
    rootCauseVi:
      'Mã ghi hoặc đọc ngoài phạm vi vùng nhớ đã cấp phát, thường do tính toán kích thước sai hoặc thiếu kiểm tra biên.',
    indicatorsVi: ['Xử lý dữ liệu đầu vào có độ dài thay đổi trong ngôn ngữ không an toàn bộ nhớ.'],
    safeValidationPrinciplesVi: [
      'Chỉ thực hành trên binary lab; báo cáo crash kèm reproducer tối thiểu, không kèm bộ khai thác.',
    ],
    impactDimensions: ['Sập chương trình', 'Ảnh hưởng luồng điều khiển', 'Lộ nội dung bộ nhớ'],
    remediationPrinciplesVi: [
      'Kiểm tra biên hệ thống; dùng ngôn ngữ an toàn bộ nhớ ở ranh giới xử lý dữ liệu không tin cậy.',
      'Bật đầy đủ cờ cứng hoá khi biên dịch.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-use-after-free',
    titleVi: 'Use-after-free',
    cweIds: ['CWE-416'],
    rootCauseVi:
      'Con trỏ vẫn được dùng sau khi vùng nhớ đã được giải phóng, do vòng đời đối tượng không rõ ràng hoặc do xử lý lỗi giải phóng sớm.',
    indicatorsVi: ['Mã có nhiều đường thoát lỗi cùng giải phóng một đối tượng.'],
    safeValidationPrinciplesVi: [
      'Dùng sanitizer trong môi trường lab để phát hiện thay vì khai thác.',
    ],
    impactDimensions: ['Sập chương trình', 'Ảnh hưởng luồng điều khiển'],
    remediationPrinciplesVi: ['Quản lý vòng đời đối tượng rõ ràng; dùng kiểu con trỏ thông minh.'],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-dependency-confusion',
    titleVi: 'Nhầm lẫn nguồn gói phụ thuộc',
    cweIds: ['CWE-427'],
    rootCauseVi:
      'Trình quản lý gói được cấu hình để tìm ở nhiều registry và ưu tiên sai, nên một gói công khai cùng tên có thể được cài thay cho gói nội bộ.',
    indicatorsVi: [
      'Cấu hình cho phép fallback sang registry công khai cho gói thuộc namespace nội bộ.',
    ],
    safeValidationPrinciplesVi: [
      'Chỉ kiểm chứng trên registry cục bộ của bạn. Không xuất bản gói lên registry công khai với tên gói nội bộ của tổ chức khác.',
    ],
    impactDimensions: ['Thực thi mã trong pipeline build', 'Ảnh hưởng toàn bộ chuỗi phát hành'],
    remediationPrinciplesVi: [
      'Cấu hình registry ưu tiên nguồn nội bộ; dùng namespace riêng; ghim phiên bản và kiểm tra checksum.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-cicd-trust',
    titleVi: 'Ranh giới tin cậy CI/CD bị vượt qua',
    cweIds: ['CWE-269', 'CWE-668'],
    rootCauseVi:
      'Workflow chạy mã của người đóng góp bên ngoài với quyền hoặc bí mật của dự án, hoặc dùng chung cache và artifact giữa các job có mức tin cậy khác nhau.',
    indicatorsVi: [
      'Workflow kích hoạt bởi pull request từ fork và có quyền ghi hoặc truy cập bí mật.',
    ],
    safeValidationPrinciplesVi: [
      'Chỉ thực hành trên repository của chính bạn; không gửi pull request thử nghiệm tới dự án khác.',
    ],
    impactDimensions: ['Chiếm bí mật của dự án', 'Đầu độc artifact phát hành'],
    remediationPrinciplesVi: [
      'Quyền workflow tối thiểu; không cấp bí mật cho workflow chạy mã từ fork.',
      'Tách cache và artifact theo mức tin cậy.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-firmware-hardcoded-cred',
    titleVi: 'Thông tin xác thực nhúng sẵn trong firmware',
    cweIds: ['CWE-798'],
    rootCauseVi:
      'Firmware chứa thông tin xác thực hoặc khoá dùng chung cho mọi thiết bị, nên lấy được từ một thiết bị là ảnh hưởng tới toàn bộ dòng sản phẩm.',
    indicatorsVi: ['Chuỗi giống mật khẩu hoặc khoá trong hệ thống tệp của ảnh firmware.'],
    safeValidationPrinciplesVi: [
      'Chỉ phân tích firmware lấy hợp pháp; không dùng thông tin xác thực tìm được để truy cập thiết bị của người khác.',
    ],
    impactDimensions: ['Ảnh hưởng toàn bộ dòng sản phẩm', 'Truy cập thiết bị của người dùng khác'],
    remediationPrinciplesVi: [
      'Mỗi thiết bị có thông tin xác thực riêng, cấp phát trong quá trình sản xuất.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-ble-weak-pairing',
    titleVi: 'Ghép nối BLE không có xác thực',
    cweIds: ['CWE-287'],
    rootCauseVi:
      'Thiết bị chấp nhận ghép nối không xác thực và không yêu cầu bảo vệ cho các đặc tính nhạy cảm.',
    indicatorsVi: ['Đặc tính điều khiển ghi được mà không cần ghép nối có xác thực.'],
    safeValidationPrinciplesVi: [
      'Chỉ tương tác với thiết bị của chính bạn, tốt nhất trong môi trường che chắn.',
    ],
    impactDimensions: ['Điều khiển thiết bị trái phép', 'Rò rỉ dữ liệu thiết bị'],
    remediationPrinciplesVi: ['Yêu cầu ghép nối có xác thực cho mọi đặc tính nhạy cảm.'],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-web3-access-control',
    titleVi: 'Thiếu kiểm soát truy cập trong hợp đồng thông minh',
    cweIds: ['CWE-862'],
    owaspReferences: ['OWASP SCSVS — nhóm AUTH'],
    rootCauseVi:
      'Hàm thay đổi trạng thái quan trọng không có modifier kiểm soát truy cập, hoặc hàm khởi tạo có thể được gọi lại.',
    indicatorsVi: ['Hàm external thay đổi biến quản trị mà không kiểm tra người gọi.'],
    safeValidationPrinciplesVi: ['Chỉ kiểm chứng trên chain cục bộ hoặc testnet.'],
    impactDimensions: ['Chiếm quyền quản trị giao thức', 'Rút tài sản của người dùng'],
    remediationPrinciplesVi: [
      'Modifier kiểm soát truy cập trên mọi hàm thay đổi trạng thái; khoá hàm khởi tạo sau lần gọi đầu.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-web3-reentrancy',
    titleVi: 'Reentrancy',
    cweIds: ['CWE-841'],
    owaspReferences: ['OWASP SCSVS — nhóm COMM'],
    rootCauseVi:
      'Hợp đồng gọi ra một địa chỉ ngoài trước khi cập nhật trạng thái nội bộ, nên bên được gọi quay lại và thấy trạng thái cũ.',
    indicatorsVi: ['Mẫu gọi ngoài đứng trước lệnh cập nhật biến trạng thái.'],
    safeValidationPrinciplesVi: ['Chỉ trên chain cục bộ hoặc testnet.'],
    impactDimensions: ['Rút nhiều lần cùng một khoản', 'Phá vỡ bất biến kế toán'],
    remediationPrinciplesVi: [
      'Áp dụng mẫu kiểm tra - tác động - tương tác; dùng khoá chống tái nhập.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-web3-oracle',
    titleVi: 'Thao túng nguồn giá',
    owaspReferences: ['OWASP SCSVS — nhóm ORACLE'],
    rootCauseVi:
      'Giao thức lấy giá từ một nguồn có thể bị tác động trong cùng một giao dịch, nên chi phí thao túng thấp hơn lợi ích thu được.',
    indicatorsVi: ['Giá được đọc trực tiếp từ trạng thái tức thời của một nguồn thanh khoản.'],
    safeValidationPrinciplesVi: [
      'Chứng minh bằng test trên fork cục bộ; không thực hiện giao dịch trên mainnet.',
    ],
    impactDimensions: ['Thiệt hại tài chính cho giao thức', 'Thanh lý sai'],
    remediationPrinciplesVi: [
      'Dùng nguồn giá chống thao túng; kiểm tra bất biến kinh tế trong test.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-ai-indirect-prompt-injection',
    titleVi: 'Prompt injection gián tiếp',
    owaspReferences: ['OWASP Top 10 for LLM Applications — Prompt Injection'],
    rootCauseVi:
      'Hệ thống đưa nội dung do bên thứ ba kiểm soát vào ngữ cảnh mô hình và tin tưởng đầu ra của mô hình để thực hiện hành động có tác dụng thật.',
    indicatorsVi: [
      'Ứng dụng đọc tài liệu, email hoặc trang web bên ngoài rồi cho agent hành động dựa trên nội dung đó.',
    ],
    safeValidationPrinciplesVi: [
      'Chứng minh bằng một hành động vượt ranh giới tin cậy giữa hai tài khoản do bạn tạo.',
      'Không trích xuất dữ liệu của người dùng thật.',
    ],
    impactDimensions: [
      'Agent thực hiện hành động ngoài ý muốn của người dùng',
      'Lộ dữ liệu qua công cụ mà agent gọi',
    ],
    remediationPrinciplesVi: [
      'Xử lý đầu ra mô hình như dữ liệu không tin cậy.',
      'Đặt kiểm tra phân quyền ở tầng công cụ; yêu cầu phê duyệt cho hành động có tác dụng.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-ai-excessive-agency',
    titleVi: 'Agent có quyền vượt quá người dùng',
    owaspReferences: ['OWASP Top 10 for LLM Applications — Excessive Agency'],
    rootCauseVi:
      'Agent chạy với thông tin xác thực dùng chung có quyền rộng, thay vì hành động với đúng quyền của người dùng đang yêu cầu.',
    indicatorsVi: ['Công cụ dùng một khoá dịch vụ duy nhất cho mọi người dùng.'],
    safeValidationPrinciplesVi: ['Dùng hai tài khoản của bạn để chứng minh vượt ranh giới.'],
    impactDimensions: ['Truy cập dữ liệu của người dùng khác', 'Thực hiện hành động đặc quyền'],
    remediationPrinciplesVi: [
      'Truyền danh tính người dùng xuống tầng công cụ; kiểm tra phân quyền tại đó.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-ai-rag-leak',
    titleVi: 'Rò rỉ dữ liệu qua truy xuất RAG',
    owaspReferences: ['OWASP Top 10 for LLM Applications — Sensitive Information Disclosure'],
    rootCauseVi:
      'Truy vấn vào kho vector không lọc theo người dùng hoặc người thuê ở tầng dữ liệu, nên tài liệu của tổ chức khác lọt vào ngữ cảnh.',
    indicatorsVi: ['Bộ lọc người thuê được đặt trong prompt thay vì trong truy vấn.'],
    safeValidationPrinciplesVi: [
      'Dùng hai tài khoản của bạn với tài liệu do bạn tải lên; dừng ngay nếu thấy tài liệu lạ.',
    ],
    impactDimensions: ['Lộ tài liệu nội bộ', 'Vi phạm cô lập giữa khách hàng'],
    remediationPrinciplesVi: ['Lọc theo người thuê ở tầng truy vấn vector, không ở tầng prompt.'],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-ext-message-trust',
    titleVi: 'Tiện ích trình duyệt tin tưởng thông điệp không xác thực',
    cweIds: ['CWE-346'],
    rootCauseVi:
      'Trình xử lý thông điệp trong content script hoặc service worker nền không kiểm tra nguồn gửi, nên trang web bất kỳ gọi được API đặc quyền của tiện ích.',
    indicatorsVi: ['Trình xử lý thông điệp không kiểm tra origin hoặc định danh người gửi.'],
    safeValidationPrinciplesVi: ['Chỉ trên tiện ích lab hoặc tiện ích của chính bạn.'],
    impactDimensions: [
      'Trang web truy cập dữ liệu của tiện ích',
      'Leo thang ra ngoài sandbox trình duyệt',
    ],
    remediationPrinciplesVi: [
      'Xác thực nguồn của mọi thông điệp; không phơi API đặc quyền cho nội dung trang.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-shared-link-exposure',
    titleVi: 'Liên kết chia sẻ lộ dữ liệu ngoài dự định',
    cweIds: ['CWE-200'],
    rootCauseVi:
      'Liên kết chia sẻ có định danh đoán được, không hết hạn, không thu hồi được, hoặc bị chỉ mục tìm kiếm thu thập.',
    indicatorsVi: [
      'Liên kết chia sẻ ngắn hoặc có cấu trúc; tài liệu chia sẻ xuất hiện trong kết quả tìm kiếm.',
    ],
    safeValidationPrinciplesVi: ['Chỉ dùng tài liệu do bạn tạo trong workspace của bạn.'],
    impactDimensions: ['Lộ tài liệu nội bộ', 'Rò rỉ dữ liệu cá nhân'],
    remediationPrinciplesVi: [
      'Liên kết chia sẻ dùng định danh khó đoán, có thời hạn và thu hồi được; chặn chỉ mục tìm kiếm.',
    ],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-email-auth-weak',
    titleVi: 'Xác thực email cấu hình yếu',
    cweIds: ['CWE-290'],
    rootCauseVi:
      'Tên miền chưa hoàn tất cấu hình SPF, DKIM và DMARC hoặc DMARC vẫn ở chế độ chỉ giám sát, nên bên nhận không có cơ sở từ chối thư giả mạo.',
    indicatorsVi: ['Bản ghi DMARC ở chính sách không thực thi.'],
    safeValidationPrinciplesVi: [
      'Kiểm tra bằng cách đọc bản ghi DNS công khai. Không gửi email giả mạo tới bất kỳ ai, kể cả để chứng minh.',
    ],
    impactDimensions: ['Giả mạo thương hiệu trong email', 'Tăng rủi ro lừa đảo cho người dùng'],
    remediationPrinciplesVi: ['Hoàn tất SPF và DKIM rồi chuyển DMARC sang chính sách thực thi.'],
    contentStatus: 'draft',
  }),
  defineWeakness({
    id: 'wkn-ics-protocol-trust',
    titleVi: 'Giao thức công nghiệp tin cậy mặc định',
    cweIds: ['CWE-306'],
    owaspReferences: ['NIST SP 800-82'],
    rootCauseVi:
      'Giao thức điều khiển công nghiệp được thiết kế cho mạng tin cậy và không có xác thực, nên mọi thiết bị trong cùng phân đoạn đều có thể ra lệnh.',
    indicatorsVi: ['Dịch vụ điều khiển truy cập được từ phân đoạn mạng không phải OT.'],
    safeValidationPrinciplesVi: [
      'Chỉ quan sát trên simulator hoặc bench lab. Không gửi lệnh tới thiết bị vận hành thật.',
    ],
    impactDimensions: ['Mất điều khiển quy trình', 'Nguy hiểm tới an toàn con người'],
    remediationPrinciplesVi: [
      'Phân đoạn chặt IT/OT; kiểm soát truy cập từ xa; giám sát lưu lượng giao thức điều khiển.',
    ],
    contentStatus: 'draft',
  }),
];
