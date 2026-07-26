import type { LearningModule } from '@/schemas/entities';
import { defineModule } from '../helpers';

const LAB_ONLY =
  'Chỉ thực hiện trên lab được thiết kế để thực hành hoặc tài sản nằm rõ trong phạm vi một chương trình còn hiệu lực. Dừng ngay khi phép thử bắt đầu chạm tới dữ liệu của người dùng khác.';

/** Module của domain D (web), E (API) và F (identity). */
export const webApiIdentityModules: LearningModule[] = [
  // ── D1: Kiến trúc ──────────────────────────────────────────────────
  defineModule({
    id: 'mod-web-architecture',
    trackId: 'trk-web-architecture',
    titleVi: 'Kiến trúc ứng dụng web hiện đại',
    summaryVi:
      'Monolith và microservices, SSR và SPA, CDN, reverse proxy, cache, API gateway, job nền, hàng đợi, object storage, dịch vụ tìm kiếm, nhà cung cấp xác thực và tích hợp bên thứ ba.',
    difficulty: 'beginner',
    estimatedHours: 6,
    learningObjectives: [
      'Vẽ kiến trúc của một ứng dụng web quan sát được từ phía client và chỉ ra các lớp trung gian.',
      'Xác định nơi nào trong kiến trúc có thể diễn giải cùng một request khác nhau.',
      'Nhận ra dấu hiệu của SPA, SSR và render lai từ phản hồi HTTP.',
    ],
    methodologyVi: [
      'Quan sát header phản hồi để đoán lớp CDN, cache và proxy đang tham gia.',
      'Ghi lại đường đi của một hành động nghiệp vụ qua nhiều dịch vụ.',
    ],
    safetyNoteVi: LAB_ONLY,
    remediationTopicIds: ['Thống nhất cách phân tích request giữa các lớp trung gian.'],
  }),

  // ── D2: Authentication ─────────────────────────────────────────────
  defineModule({
    id: 'mod-web-login',
    trackId: 'trk-web-authn',
    titleVi: 'Đăng nhập, liệt kê tài khoản và MFA',
    summaryVi:
      'Luồng đăng nhập bằng mật khẩu, liệt kê tên người dùng qua khác biệt phản hồi, MFA và các cách nó bị bỏ qua, khoá tài khoản và bảo vệ chống thử mật khẩu hàng loạt.',
    difficulty: 'intermediate',
    estimatedHours: 8,
    learningObjectives: [
      'Nhận ra liệt kê tài khoản qua khác biệt nội dung, mã trạng thái hoặc thời gian phản hồi.',
      'Đánh giá luồng MFA để tìm bước có thể bỏ qua mà không cần yếu tố thứ hai.',
      'Đánh giá cơ chế chống thử hàng loạt mà không thực sự thực hiện thử hàng loạt.',
    ],
    methodologyVi: [
      'So sánh phản hồi giữa tài khoản tồn tại và không tồn tại, dùng chính tài khoản của bạn.',
      'Kiểm tra xem trạng thái "đã qua bước một" có được lưu ở phía server không.',
    ],
    safeImpactProofVi: [
      'Chứng minh liệt kê tài khoản bằng hai tài khoản do bạn tạo, không bằng danh sách email người thật.',
      'Với MFA, chứng minh bằng chính tài khoản của bạn ở hai phiên khác nhau.',
    ],
    safetyNoteVi:
      'Không thực hiện thử mật khẩu hàng loạt và không dùng danh sách thông tin đăng nhập rò rỉ. Đánh giá cơ chế bảo vệ ở mức quan sát, không ở mức tấn công.',
    remediationTopicIds: [
      'Phản hồi đồng nhất cho mọi trường hợp đăng nhập thất bại.',
      'Ràng buộc trạng thái MFA ở phía server, không ở phía client.',
    ],
  }),
  defineModule({
    id: 'mod-web-password-reset',
    trackId: 'trk-web-authn',
    titleVi: 'Đặt lại mật khẩu và khôi phục tài khoản',
    summaryVi:
      'Luồng đặt lại mật khẩu, magic link, câu hỏi khôi phục và kênh khôi phục thay thế — thường là đường đi ngắn nhất để chiếm tài khoản khi thiết kế sai.',
    difficulty: 'intermediate',
    estimatedHours: 6,
    learningObjectives: [
      'Đánh giá tính ngẫu nhiên, thời hạn và tính dùng một lần của token đặt lại.',
      'Nhận ra khi token bị rò rỉ qua referrer, log hoặc URL chia sẻ.',
      'Đánh giá xem kênh khôi phục có yếu hơn kênh đăng nhập chính không.',
    ],
    methodologyVi: [
      'Thử toàn bộ luồng trên tài khoản của bạn và ghi lại vòng đời của token.',
      'Kiểm tra token cũ có bị vô hiệu sau khi dùng hoặc sau khi yêu cầu token mới không.',
    ],
    safeImpactProofVi: ['Chỉ dùng hai tài khoản do bạn tạo để chứng minh việc chiếm tài khoản.'],
    safetyNoteVi:
      'Không bao giờ thực hiện luồng khôi phục nhắm tới tài khoản của người khác, kể cả khi bạn chắc chắn nó sẽ thành công.',
    remediationTopicIds: [
      'Token đặt lại phải ngẫu nhiên mạnh, dùng một lần và có thời hạn ngắn.',
      'Vô hiệu hoá mọi phiên đang mở sau khi đổi mật khẩu.',
    ],
  }),
  defineModule({
    id: 'mod-web-session',
    trackId: 'trk-web-authn',
    titleVi: 'Quản lý phiên, session fixation và xác thực lại',
    summaryVi:
      'Vòng đời phiên, thuộc tính cookie, cố định phiên, vô hiệu hoá phiên, ghi nhớ đăng nhập, tin cậy thiết bị, đổi thông tin đăng nhập và yêu cầu xác thực lại cho hành động nhạy cảm.',
    difficulty: 'intermediate',
    estimatedHours: 6,
    learningObjectives: [
      'Kiểm tra định danh phiên có đổi sau khi đăng nhập không.',
      'Đánh giá việc vô hiệu hoá phiên khi đăng xuất, đổi mật khẩu và hết hạn.',
      'Xác định hành động nào nên yêu cầu xác thực lại.',
    ],
    safeImpactProofVi: [
      'Dùng hai trình duyệt và một tài khoản của bạn để chứng minh phiên không bị vô hiệu.',
    ],
    safetyNoteVi: LAB_ONLY,
    remediationTopicIds: [
      'Tạo định danh phiên mới sau mỗi lần nâng cấp đặc quyền.',
      'Đặt Secure, HttpOnly và SameSite phù hợp cho cookie phiên.',
    ],
  }),

  // ── D3: Authorization ──────────────────────────────────────────────
  defineModule({
    id: 'mod-web-idor',
    trackId: 'trk-web-authz',
    titleVi: 'IDOR và phân quyền ở mức đối tượng',
    summaryVi:
      'Ứng dụng nhận định danh đối tượng từ người dùng nhưng không kiểm tra người dùng đó có quyền với đối tượng ấy hay không. Đây là nhóm vấn đề phổ biến nhất và cũng dễ mô tả tác động nhất.',
    difficulty: 'intermediate',
    estimatedHours: 8,
    learningObjectives: [
      'Lập ma trận vai trò × đối tượng cho một tính năng và xác định ô nào cần kiểm tra.',
      'Nhận ra định danh đối tượng ở mọi vị trí: đường dẫn, query, header, thân request, tệp tải lên.',
      'Mô tả tác động của IDOR theo số lượng và loại dữ liệu bị ảnh hưởng, không theo cảm tính.',
    ],
    methodologyVi: [
      'Tạo hai tài khoản của chính bạn, mỗi tài khoản có một đối tượng riêng.',
      'Dùng phiên của tài khoản A gọi tới đối tượng của tài khoản B và quan sát phản hồi.',
      'Kiểm tra cả thao tác đọc, ghi, xoá và xuất dữ liệu.',
    ],
    safeImpactProofVi: [
      'Chứng minh bằng hai tài khoản do bạn tạo là đủ; không cần chạm tới tài khoản của người thật.',
      'Nếu vô tình thấy dữ liệu của người thật, dừng lại, che thông tin định danh và ghi rõ trong báo cáo.',
    ],
    safetyNoteVi:
      'IDOR rất dễ vô tình chạm tới dữ liệu thật. Luôn thử bằng hai tài khoản của bạn trước; nếu định danh là số tuần tự, không liệt kê hàng loạt.',
    remediationTopicIds: [
      'Kiểm tra quyền sở hữu ở tầng dữ liệu cho mọi truy vấn, không chỉ ở tầng route.',
      'Dùng định danh khó đoán không thay cho kiểm tra phân quyền mà chỉ là biện pháp bổ sung.',
    ],
  }),
  defineModule({
    id: 'mod-web-privilege-escalation',
    trackId: 'trk-web-authz',
    titleVi: 'Leo thang đặc quyền ngang và dọc',
    summaryVi:
      'Phân quyền ở mức chức năng, endpoint ẩn, giao diện quản trị, bỏ qua bằng cách đổi method, và phân quyền theo trạng thái của quy trình.',
    difficulty: 'intermediate',
    estimatedHours: 6,
    learningObjectives: [
      'Phân biệt leo thang ngang với leo thang dọc và nêu tác động khác nhau của chúng.',
      'Kiểm tra xem phân quyền có được thực thi cho mọi method HTTP không.',
      'Đánh giá phân quyền theo bước của một quy trình nhiều giai đoạn.',
    ],
    methodologyVi: [
      'Liệt kê mọi chức năng mà vai trò cao có và vai trò thấp không có.',
      'Với mỗi chức năng, thử gọi trực tiếp bằng phiên của vai trò thấp.',
    ],
    safetyNoteVi: LAB_ONLY,
    remediationTopicIds: ['Kiểm tra phân quyền tập trung, mặc định từ chối.'],
  }),
  defineModule({
    id: 'mod-web-tenant-isolation',
    trackId: 'trk-web-authz',
    titleVi: 'Cô lập người thuê và ranh giới tổ chức',
    summaryVi:
      'Trong hệ thống đa người thuê, ranh giới quan trọng nhất không phải giữa người dùng mà giữa các tổ chức. Vi phạm ranh giới này thường có tác động lớn hơn nhiều.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Xác định định danh người thuê được truyền ở đâu và ai kiểm soát nó.',
      'Kiểm tra các tính năng dễ bỏ sót kiểm tra người thuê: tìm kiếm, xuất dữ liệu, báo cáo, webhook.',
      'Mô tả tác động của rò rỉ chéo người thuê một cách chính xác.',
    ],
    methodologyVi: ['Tạo hai tổ chức của chính bạn và thử mọi thao tác chéo giữa chúng.'],
    safetyNoteVi:
      'Rò rỉ chéo người thuê thường lộ dữ liệu của khách hàng thật. Dừng ngay khi thấy dữ liệu không thuộc tổ chức của bạn.',
    remediationTopicIds: ['Ràng buộc người thuê ở tầng truy vấn dữ liệu, không ở tầng ứng dụng.'],
  }),

  // ── D4: Injection ──────────────────────────────────────────────────
  defineModule({
    id: 'mod-web-sqli',
    trackId: 'trk-web-injection',
    titleVi: 'SQL và NoSQL injection',
    summaryVi:
      'Dữ liệu người dùng đi vào câu truy vấn dưới dạng mã thay vì dữ liệu. Module tập trung vào nguyên nhân gốc, dấu hiệu nhận biết và cách xác minh an toàn, không phải vào bộ payload.',
    difficulty: 'intermediate',
    estimatedHours: 8,
    learningObjectives: [
      'Giải thích vì sao nối chuỗi là nguyên nhân gốc và truy vấn tham số hoá giải quyết nó thế nào.',
      'Nhận ra dấu hiệu injection qua khác biệt phản hồi, lỗi và hành vi logic.',
      'Xác minh an toàn mà không thay đổi hoặc xoá dữ liệu.',
    ],
    methodologyVi: [
      'Ưu tiên phép thử dạng logic đúng/sai thay vì phép thử gây lỗi.',
      'Không dùng phép thử dựa trên độ trễ trên hệ thống đang phục vụ người dùng.',
    ],
    safeImpactProofVi: [
      'Chứng minh bằng một truy vấn chỉ đọc trả về một giá trị vô hại, ví dụ phiên bản cơ sở dữ liệu.',
      'Không trích xuất dữ liệu người dùng để chứng minh.',
    ],
    safetyNoteVi:
      'Không dùng phép thử có thể thay đổi hoặc xoá dữ liệu, và không dùng kỹ thuật gây tải nặng. Nếu chỉ có thể chứng minh bằng cách vượt PoC tối thiểu, hãy dừng và báo cáo điều đã có.',
    remediationTopicIds: [
      'Dùng truy vấn tham số hoá hoặc lớp truy vấn an toàn.',
      'Đặc quyền tối thiểu cho tài khoản cơ sở dữ liệu của ứng dụng.',
    ],
  }),
  defineModule({
    id: 'mod-web-command-injection',
    trackId: 'trk-web-injection',
    titleVi: 'Command injection và các injection theo ngữ cảnh khác',
    summaryVi:
      'Command injection, LDAP, XPath, header và CRLF, log injection và CSV/formula injection — cùng một nguyên nhân gốc trong nhiều ngữ cảnh khác nhau.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Nhận ra ngữ cảnh mà dữ liệu đi vào và biết ngữ cảnh đó cần cách thoát nào.',
      'Giải thích vì sao CSV/formula injection là vấn đề của phần mềm bảng tính chứ không của ứng dụng web.',
      'Đánh giá rủi ro log injection với hệ thống giám sát hạ nguồn.',
    ],
    safeImpactProofVi: [
      'Với command injection, dùng lệnh vô hại chỉ trả về định danh tiến trình hoặc thời gian hệ thống.',
    ],
    safetyNoteVi:
      'Command injection có thể ảnh hưởng trực tiếp tới máy chủ đang chạy. Chỉ dùng lệnh không thay đổi trạng thái và dừng ngay sau khi xác nhận.',
    remediationTopicIds: [
      'Tránh gọi shell; dùng API có tham số tách biệt.',
      'Mã hoá đầu ra theo đúng ngữ cảnh đích.',
    ],
  }),
  defineModule({
    id: 'mod-web-ssti',
    trackId: 'trk-web-injection',
    titleVi: 'Template injection và expression language',
    summaryVi:
      'Khi dữ liệu người dùng được xử lý như một phần của template thay vì như dữ liệu truyền vào template, engine sẽ đánh giá nó như biểu thức.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Phân biệt template injection với XSS và với injection phía máy chủ khác.',
      'Nhận ra dấu hiệu engine đang đánh giá biểu thức của bạn.',
      'Đánh giá mức độ sandbox của engine template.',
    ],
    safeImpactProofVi: [
      'Chứng minh bằng một biểu thức số học đơn giản cho ra kết quả quan sát được.',
    ],
    safetyNoteVi:
      'Dừng ngay sau khi xác nhận engine đánh giá biểu thức. Không đi tiếp tới thực thi lệnh trên hệ thống thật.',
    remediationTopicIds: ['Không bao giờ ghép dữ liệu người dùng vào chuỗi template.'],
  }),
  defineModule({
    id: 'mod-web-xxe',
    trackId: 'trk-web-injection',
    titleVi: 'XML và XXE',
    summaryVi:
      'Bộ phân tích XML xử lý thực thể ngoài có thể đọc tệp cục bộ hoặc phát sinh request từ phía máy chủ. Vấn đề nằm ở cấu hình mặc định của bộ phân tích.',
    difficulty: 'advanced',
    estimatedHours: 5,
    learningObjectives: [
      'Giải thích thực thể ngoài là gì và vì sao mặc định của nhiều bộ phân tích là không an toàn.',
      'Nhận ra các định dạng chứa XML ẩn: tài liệu văn phòng, SVG, SAML, RSS.',
      'Phân biệt XXE đọc tệp với XXE gây request phía máy chủ.',
    ],
    safeImpactProofVi: [
      'Chứng minh bằng một tệp không nhạy cảm, có nội dung cố định và không chứa dữ liệu người dùng.',
    ],
    safetyNoteVi: 'Không đọc tệp cấu hình chứa bí mật để chứng minh. Một tệp vô hại là đủ.',
    remediationTopicIds: ['Tắt xử lý thực thể ngoài và DTD trong cấu hình bộ phân tích.'],
  }),

  // ── D5: Client-side ────────────────────────────────────────────────
  defineModule({
    id: 'mod-web-xss',
    trackId: 'trk-web-clientside',
    titleVi: 'XSS phản chiếu và lưu trữ',
    summaryVi:
      'Dữ liệu người dùng trở thành mã trong ngữ cảnh trang. Trọng tâm là ngữ cảnh đầu ra, cơ chế mã hoá tương ứng và cách chứng minh tác động mà không ảnh hưởng người dùng khác.',
    difficulty: 'intermediate',
    estimatedHours: 8,
    learningObjectives: [
      'Xác định ngữ cảnh đầu ra: nội dung HTML, thuộc tính, URL, JavaScript, CSS.',
      'Giải thích vì sao mã hoá đầu ra phải theo ngữ cảnh chứ không có một cách chung.',
      'Mô tả tác động của XSS theo quyền mà mã có được, không theo mức độ gây chú ý.',
    ],
    methodologyVi: [
      'Xác định điểm phản chiếu trước, xác định ngữ cảnh sau, rồi mới kiểm tra bộ lọc.',
    ],
    safeImpactProofVi: [
      'Chứng minh bằng một hành động vô hại trong trình duyệt của chính bạn, không dùng cửa sổ cảnh báo gây phiền cho người khác.',
      'Với XSS lưu trữ, dùng tài khoản của bạn và xoá nội dung ngay sau khi chụp bằng chứng.',
    ],
    safetyNoteVi:
      'XSS lưu trữ ảnh hưởng tới người dùng thật. Không lưu payload trên trang công khai; nếu buộc phải, xoá ngay và ghi lại trong báo cáo.',
    remediationTopicIds: [
      'Mã hoá đầu ra theo ngữ cảnh tại thời điểm render.',
      'CSP và Trusted Types là lớp phòng thủ bổ sung, không thay thế mã hoá đầu ra.',
    ],
  }),
  defineModule({
    id: 'mod-web-dom-xss',
    trackId: 'trk-web-clientside',
    titleVi: 'DOM XSS, DOM clobbering và prototype pollution phía client',
    summaryVi:
      'Lỗ hổng hoàn toàn nằm trong mã JavaScript của trang: nguồn dữ liệu do người dùng kiểm soát chảy tới một điểm nhận nguy hiểm mà không qua máy chủ.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Lần theo luồng từ nguồn DOM tới điểm nhận nguy hiểm bằng DevTools.',
      'Giải thích DOM clobbering và vì sao tên phần tử HTML có thể ghi đè biến toàn cục.',
      'Nhận ra prototype pollution phía client và hệ quả của nó với thư viện hạ nguồn.',
    ],
    safeImpactProofVi: [
      'Chứng minh bằng cách thay đổi một giá trị quan sát được trong trang của chính bạn.',
    ],
    safetyNoteVi: LAB_ONLY,
    remediationTopicIds: ['Tránh các điểm nhận nguy hiểm; dùng API an toàn của DOM.'],
  }),
  defineModule({
    id: 'mod-web-postmessage',
    trackId: 'trk-web-clientside',
    titleVi: 'postMessage, WebSocket phía client và cross-origin isolation',
    summaryVi:
      'Kênh giao tiếp giữa các ngữ cảnh duyệt web. Vấn đề thường là bên nhận không kiểm tra origin của bên gửi, hoặc bên gửi đặt origin đích quá rộng.',
    difficulty: 'advanced',
    estimatedHours: 5,
    learningObjectives: [
      'Kiểm tra trình xử lý postMessage có xác thực origin không.',
      'Nhận ra khi bên gửi dùng ký tự đại diện cho origin đích.',
      'Giải thích cross-origin isolation ở mức khái niệm.',
    ],
    safetyNoteVi: LAB_ONLY,
    remediationTopicIds: ['Luôn kiểm tra origin ở bên nhận và chỉ định origin cụ thể ở bên gửi.'],
  }),
  defineModule({
    id: 'mod-web-csp',
    trackId: 'trk-web-clientside',
    titleVi: 'CSP, Trusted Types, browser storage và service worker',
    summaryVi:
      'Các cơ chế phòng thủ phía trình duyệt và cách đánh giá chúng: chính sách quá lỏng, nguồn script không an toàn, dữ liệu nhạy cảm trong storage, và service worker như một bề mặt tồn tại lâu dài.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Đọc một chính sách CSP và chỉ ra chỉ thị nào làm chính sách mất tác dụng.',
      'Giải thích vì sao localStorage không phải nơi lưu token phiên tốt.',
      'Nêu rủi ro khi service worker bị đăng ký với phạm vi quá rộng.',
    ],
    safetyNoteVi: LAB_ONLY,
    remediationTopicIds: [
      'CSP chặt, Trusted Types, và không lưu token nhạy cảm ở storage truy cập được bằng script.',
    ],
  }),

  // ── D6: Cross-origin ───────────────────────────────────────────────
  defineModule({
    id: 'mod-web-csrf',
    trackId: 'trk-web-crossorigin',
    titleVi: 'CSRF và login CSRF',
    summaryVi:
      'Trình duyệt tự động gửi thông tin xác thực theo request, nên một site khác có thể khiến người dùng thực hiện hành động ngoài ý muốn nếu ứng dụng chỉ dựa vào cookie để xác thực ý định.',
    difficulty: 'intermediate',
    estimatedHours: 6,
    learningObjectives: [
      'Giải thích vì sao SameSite thay đổi bối cảnh CSRF nhưng không xoá bỏ nó.',
      'Đánh giá token chống CSRF: sinh, gắn với phiên và kiểm tra.',
      'Nhận ra login CSRF và tác động của nó.',
    ],
    safeImpactProofVi: [
      'Dùng một trang thử nghiệm cục bộ của bạn và tài khoản của bạn để chứng minh.',
    ],
    safetyNoteVi:
      'Không đặt trang khai thác trên Internet nơi người dùng thật có thể vô tình truy cập.',
    remediationTopicIds: ['Token chống CSRF gắn với phiên, kết hợp SameSite phù hợp.'],
  }),
  defineModule({
    id: 'mod-web-cors',
    trackId: 'trk-web-crossorigin',
    titleVi: 'CORS cấu hình sai',
    summaryVi:
      'CORS nới lỏng same-origin policy có kiểm soát. Cấu hình sai phổ biến là phản chiếu origin của bên gọi kèm cho phép gửi thông tin xác thực.',
    difficulty: 'intermediate',
    estimatedHours: 5,
    learningObjectives: [
      'Đọc các header CORS và xác định origin nào thực sự được cho phép.',
      'Nhận ra tổ hợp nguy hiểm: phản chiếu origin cộng với cho phép credentials.',
      'Đánh giá tác động dựa trên dữ liệu mà endpoint trả về.',
    ],
    safetyNoteVi: LAB_ONLY,
    remediationTopicIds: [
      'Danh sách origin cho phép cố định; không phản chiếu origin của bên gọi.',
    ],
  }),
  defineModule({
    id: 'mod-web-ssrf',
    trackId: 'trk-web-crossorigin',
    titleVi: 'SSRF và blind SSRF',
    summaryVi:
      'Máy chủ thực hiện request tới địa chỉ do người dùng ảnh hưởng. Tác động phụ thuộc vào những gì máy chủ có thể chạm tới từ vị trí mạng của nó.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Nhận ra các tính năng dễ có SSRF: tải ảnh từ URL, webhook, xem trước liên kết, nhập dữ liệu từ xa.',
      'Giải thích vì sao dịch vụ metadata của cloud là đích có tác động cao.',
      'Đánh giá blind SSRF mà không cần trích xuất dữ liệu.',
    ],
    methodologyVi: [
      'Xác định trước phạm vi cho phép; nhiều chương trình cấm nhắm tới hạ tầng nội bộ.',
      'Chứng minh bằng một đích do bạn kiểm soát, ghi nhận request đến.',
    ],
    safeImpactProofVi: [
      'Một request tới máy chủ của chính bạn, có ghi log, là bằng chứng đủ mạnh mà không chạm dữ liệu nội bộ.',
    ],
    safetyNoteVi:
      'Không truy vấn dịch vụ metadata để lấy thông tin xác thực thật. Chứng minh khả năng phát sinh request là đủ; lấy credential là vượt PoC tối thiểu.',
    remediationTopicIds: [
      'Danh sách cho phép ở tầng ứng dụng kết hợp kiểm soát lối ra ở tầng mạng.',
      'Chặn truy cập tới dịch vụ metadata từ workload ứng dụng.',
    ],
  }),
  defineModule({
    id: 'mod-web-cache',
    trackId: 'trk-web-crossorigin',
    titleVi: 'Đầu độc cache, đánh lừa cache và Host header',
    summaryVi:
      'Khi cache và ứng dụng không thống nhất về khoá cache hoặc về nội dung nào được phép lưu, phản hồi của một người dùng có thể bị phục vụ cho người khác.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Giải thích khoá cache và vì sao header không nằm trong khoá lại nguy hiểm.',
      'Phân biệt đầu độc cache với đánh lừa cache.',
      'Đánh giá cách ứng dụng dùng Host header để dựng URL tuyệt đối.',
    ],
    safetyNoteVi:
      'Đầu độc cache ảnh hưởng trực tiếp tới người dùng thật. Chỉ thử trên lab; trên hệ thống thật phải có sự cho phép rõ ràng và dùng khoá cache riêng biệt.',
    remediationTopicIds: [
      'Đưa mọi header ảnh hưởng phản hồi vào khoá cache; không tin Host header.',
    ],
  }),
  defineModule({
    id: 'mod-web-smuggling',
    trackId: 'trk-web-crossorigin',
    titleVi: 'Request smuggling và bất đồng bộ giữa các lớp',
    summaryVi:
      'Hai thành phần trong chuỗi xử lý phân tích ranh giới request khác nhau, khiến một phần dữ liệu của bạn được hiểu là request của người khác.',
    difficulty: 'research',
    estimatedHours: 10,
    learningObjectives: [
      'Giải thích nguồn gốc của bất đồng bộ giữa proxy và máy chủ ứng dụng.',
      'Nêu vì sao đây là nhóm vấn đề có tác động cao nhưng rủi ro thử nghiệm cũng cao nhất.',
      'Xác định điều kiện cần trước khi thử trên bất kỳ hệ thống nào.',
    ],
    safetyNoteVi:
      'Đây là kỹ thuật có nguy cơ ảnh hưởng tới request của người dùng thật. Chỉ thực hành trên lab. Nhiều chương trình cấm thử nghiệm này trên môi trường sản xuất.',
    remediationTopicIds: [
      'Đồng bộ cách phân tích độ dài request trong toàn chuỗi; ưu tiên HTTP/2 đầu cuối.',
    ],
  }),

  // ── D7: File và dữ liệu ────────────────────────────────────────────
  defineModule({
    id: 'mod-web-file-upload',
    trackId: 'trk-web-files',
    titleVi: 'Tải tệp lên và xử lý tệp',
    summaryVi:
      'Kiểm tra loại tệp, nơi lưu, cách phục vụ lại, xử lý ảnh và tài liệu, metadata và giải nén — mỗi bước là một cơ hội để tệp được diễn giải khác với dự định.',
    difficulty: 'intermediate',
    estimatedHours: 6,
    learningObjectives: [
      'Phân biệt kiểm tra phần mở rộng, content-type và nội dung thực tế của tệp.',
      'Đánh giá nơi tệp được lưu và cách nó được phục vụ lại cho người dùng.',
      'Nhận ra rủi ro của giải nén không giới hạn và của xử lý ảnh phía máy chủ.',
    ],
    safeImpactProofVi: [
      'Tệp thử nghiệm nên vô hại và có nội dung nhận biết được, ví dụ một tệp văn bản có chuỗi đánh dấu.',
    ],
    safetyNoteVi:
      'Không tải lên tệp có khả năng thực thi trên hệ thống thật. Không tải tệp dung lượng lớn gây ảnh hưởng dịch vụ.',
    remediationTopicIds: [
      'Lưu tệp ngoài thư mục web, đặt tên do máy chủ sinh, phục vụ với content-type cố định.',
    ],
  }),
  defineModule({
    id: 'mod-web-path-traversal',
    trackId: 'trk-web-files',
    titleVi: 'Path traversal và phân quyền tải xuống',
    summaryVi:
      'Đường dẫn tệp do người dùng ảnh hưởng cho phép đi ra ngoài thư mục dự kiến, hoặc chức năng tải xuống không kiểm tra quyền với tệp được yêu cầu.',
    difficulty: 'intermediate',
    estimatedHours: 5,
    learningObjectives: [
      'Giải thích vì sao chuẩn hoá đường dẫn phải xảy ra trước khi kiểm tra.',
      'Phân biệt path traversal với thiếu phân quyền ở chức năng tải xuống.',
      'Đánh giá URL ký sẵn cho object storage.',
    ],
    safeImpactProofVi: ['Đọc một tệp vô hại, không đọc tệp chứa bí mật.'],
    safetyNoteVi: LAB_ONLY,
    remediationTopicIds: ['Chuẩn hoá rồi kiểm tra đường dẫn nằm trong thư mục cho phép.'],
  }),
  defineModule({
    id: 'mod-web-info-disclosure',
    trackId: 'trk-web-files',
    titleVi: 'Lộ thông tin: source map, tệp sao lưu, debug và bí mật',
    summaryVi:
      'Thông tin lộ ra qua source map, tệp sao lưu còn sót, trang debug, thông báo lỗi chi tiết, và bí mật nhúng trong mã phía client.',
    difficulty: 'beginner',
    estimatedHours: 5,
    learningObjectives: [
      'Phân biệt thông tin lộ có tác động thật với thông tin chỉ mang tính kỹ thuật.',
      'Đánh giá bí mật tìm thấy trong mã phía client theo phạm vi quyền của nó.',
      'Mô tả tác động mà không cần dùng bí mật đó.',
    ],
    safeImpactProofVi: [
      'Với một khoá tìm thấy, mô tả phạm vi quyền của nó thay vì dùng nó để truy cập dữ liệu.',
    ],
    safetyNoteVi:
      'Không dùng thông tin xác thực tìm được để truy cập hệ thống. Báo cáo sự tồn tại của nó và đề nghị xoay vòng.',
    remediationTopicIds: ['Không phát hành source map ra sản xuất; xoay vòng mọi bí mật đã lộ.'],
  }),

  // ── D8: Serialization ──────────────────────────────────────────────
  defineModule({
    id: 'mod-web-deserialization',
    trackId: 'trk-web-serialization',
    titleVi: 'Deserialization không an toàn và prototype pollution phía máy chủ',
    summaryVi:
      'Khôi phục đối tượng từ dữ liệu không tin cậy cho phép người gửi ảnh hưởng tới kiểu và trạng thái của đối tượng trong tiến trình máy chủ.',
    difficulty: 'research',
    estimatedHours: 8,
    learningObjectives: [
      'Nhận ra định dạng serialization trong lưu lượng ứng dụng.',
      'Giải thích vì sao vấn đề nằm ở việc tin tưởng dữ liệu, không ở thư viện cụ thể.',
      'Đánh giá prototype pollution phía máy chủ và hệ quả của nó với logic hạ nguồn.',
    ],
    safetyNoteVi:
      'Nhóm vấn đề này có thể gây thực thi mã trên máy chủ. Dừng ngay khi xác nhận được khả năng ảnh hưởng, không đi tới thực thi lệnh trên hệ thống thật.',
    remediationTopicIds: [
      'Dùng định dạng dữ liệu thuần và schema rõ ràng thay vì khôi phục đối tượng.',
    ],
  }),
  defineModule({
    id: 'mod-web-race-condition',
    trackId: 'trk-web-serialization',
    titleVi: 'Race condition và TOCTOU',
    summaryVi:
      'Khoảng thời gian giữa lúc kiểm tra và lúc sử dụng cho phép trạng thái thay đổi. Thường thấy ở tính năng dùng một lần: mã giảm giá, rút tiền, mời thành viên.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Nhận ra tính năng có tính "dùng một lần" và kiểm tra việc thực thi giới hạn đó.',
      'Giải thích vì sao kiểm tra rồi cập nhật ở hai bước tách rời là nguyên nhân gốc.',
      'Đánh giá tác động dựa trên giá trị nghiệp vụ bị nhân lên.',
    ],
    methodologyVi: [
      'Dùng số lượng request song song nhỏ nhất đủ để chứng minh, thường là hai tới ba.',
    ],
    safetyNoteVi:
      'Không gửi lượng lớn request song song. Hai request đồng thời đủ để chứng minh; nhiều hơn có thể gây ảnh hưởng dịch vụ.',
    remediationTopicIds: [
      'Dùng ràng buộc nguyên tử ở tầng dữ liệu, không kiểm tra ở tầng ứng dụng.',
    ],
  }),
  defineModule({
    id: 'mod-web-webhook',
    trackId: 'trk-web-serialization',
    titleVi: 'Webhook, callback, retry và idempotency',
    summaryVi:
      'Hệ thống nhận sự kiện từ bên ngoài phải xác minh nguồn gốc và xử lý việc lặp lại. Thiếu một trong hai điều đó tạo ra vấn đề toàn vẹn dữ liệu.',
    difficulty: 'advanced',
    estimatedHours: 5,
    learningObjectives: [
      'Đánh giá cơ chế xác minh chữ ký webhook.',
      'Giải thích vì sao idempotency là yêu cầu bảo mật chứ không chỉ là yêu cầu độ tin cậy.',
      'Nhận ra rủi ro khi webhook được xử lý với đặc quyền cao.',
    ],
    safetyNoteVi: LAB_ONLY,
    remediationTopicIds: ['Xác minh chữ ký và dấu thời gian; xử lý idempotent theo khoá sự kiện.'],
  }),

  // ── D10: Business logic ────────────────────────────────────────────
  defineModule({
    id: 'mod-web-business-logic',
    trackId: 'trk-web-logic',
    titleVi: 'Logic nghiệp vụ: không có danh sách payload',
    summaryVi:
      'Logic nghiệp vụ không thể kiểm thử bằng bộ payload cố định. Nó đòi hỏi hiểu ý định của tính năng rồi tìm trạng thái mà người thiết kế không lường trước.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Mô tả ý định của một tính năng bằng lời trước khi kiểm thử nó.',
      'Tìm giả định ẩn: thứ tự bước, dấu của số, đơn vị, giới hạn số lượng.',
      'Đánh giá tác động theo giá trị nghiệp vụ, không theo độ phức tạp kỹ thuật.',
    ],
    methodologyVi: [
      'Liệt kê các bước của quy trình rồi thử bỏ bước, đảo bước, lặp bước.',
      'Thử giá trị biên: không, âm, rất lớn, đơn vị khác, tiền tệ khác.',
    ],
    safetyNoteVi:
      'Không hoàn tất giao dịch tài chính thật. Dừng ở bước chứng minh được hệ thống chấp nhận trạng thái không hợp lệ.',
    remediationTopicIds: [
      'Kiểm tra ràng buộc nghiệp vụ ở phía server tại mọi bước chuyển trạng thái.',
    ],
  }),
  defineModule({
    id: 'mod-web-payment-flow',
    trackId: 'trk-web-logic',
    titleVi: 'Luồng thanh toán, hoàn tiền và điểm thưởng',
    summaryVi:
      'Giỏ hàng, mã giảm giá, thanh toán, hoàn tiền, tín dụng, điểm thưởng, gói đăng ký và bản dùng thử — nơi lỗi logic có tác động tài chính trực tiếp.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Xác định nơi giá và số lượng được quyết định: client hay server.',
      'Đánh giá việc áp dụng mã giảm giá lặp lại và việc kết hợp nhiều ưu đãi.',
      'Nhận ra rủi ro lệch đơn vị tiền tệ và làm tròn.',
    ],
    safetyNoteVi:
      'Chỉ thử trong môi trường sandbox thanh toán nếu chương trình cung cấp. Không thực hiện giao dịch thật và không hoàn tiền thật.',
    remediationTopicIds: ['Tính toán giá hoàn toàn ở phía server từ dữ liệu tin cậy.'],
  }),

  // ── D11: Advanced web ──────────────────────────────────────────────
  defineModule({
    id: 'mod-web-websocket',
    trackId: 'trk-web-advanced',
    titleVi: 'WebSocket, Server-Sent Events và gRPC-Web',
    summaryVi:
      'Kênh hai chiều và kênh sự kiện có mô hình xác thực khác request/response thông thường; phân quyền hay bị kiểm tra một lần lúc bắt tay rồi bỏ qua sau đó.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Kiểm tra phân quyền cho từng thông điệp, không chỉ ở lúc thiết lập kết nối.',
      'Nhận ra cross-site WebSocket hijacking và điều kiện của nó.',
      'Đánh giá gRPC-Web ở mức lưu lượng quan sát được.',
    ],
    safetyNoteVi: LAB_ONLY,
    remediationTopicIds: ['Kiểm tra phân quyền cho mỗi thông điệp và xác thực origin lúc bắt tay.'],
  }),
  defineModule({
    id: 'mod-web-wasm',
    trackId: 'trk-web-advanced',
    titleVi: 'WebAssembly và tích hợp tiện ích trình duyệt',
    summaryVi:
      'WebAssembly trong ứng dụng web, ranh giới giữa mã WASM và JavaScript, và cách tiện ích trình duyệt tương tác với trang.',
    difficulty: 'advanced',
    estimatedHours: 5,
    learningObjectives: [
      'Hiểu WASM chạy trong sandbox của trình duyệt và điều đó có nghĩa gì với bảo mật.',
      'Nhận ra khi logic bảo mật bị đưa vào WASM với kỳ vọng nó khó phân tích.',
      'Nêu ranh giới giữa tiện ích mở rộng và nội dung trang.',
    ],
    safetyNoteVi: LAB_ONLY,
    remediationTopicIds: ['Không đặt quyết định bảo mật ở phía client, kể cả trong WASM.'],
  }),
  defineModule({
    id: 'mod-web-edge',
    trackId: 'trk-web-advanced',
    titleVi: 'Edge, serverless web và nhiều lớp CDN',
    summaryVi:
      'Ứng dụng chạy ở edge, hàm serverless phục vụ HTTP, và hệ thống có nhiều lớp CDN/cache chồng nhau — nơi khác biệt trong cách xử lý request trở nên rõ rệt.',
    difficulty: 'research',
    estimatedHours: 6,
    learningObjectives: [
      'Xác định số lớp trung gian dựa trên header phản hồi.',
      'Nêu cân nhắc bảo mật của HTTP/2 và HTTP/3 ở mức khái niệm.',
      'Đánh giá nơi logic bảo mật được đặt: edge hay origin.',
    ],
    safetyNoteVi: LAB_ONLY,
    remediationTopicIds: ['Đặt kiểm tra bảo mật ở origin; edge chỉ là lớp bổ sung.'],
  }),

  // ── E: API ─────────────────────────────────────────────────────────
  defineModule({
    id: 'mod-api-fundamentals',
    trackId: 'trk-api-fundamentals',
    titleVi: 'Nền tảng API và quản lý vòng đời',
    summaryVi:
      'REST, SOAP, gRPC, JSON-RPC, webhook, API hướng sự kiện, phiên bản hoá, gateway, schema và vấn đề API ẩn hoặc đã ngừng hỗ trợ nhưng vẫn chạy.',
    difficulty: 'intermediate',
    estimatedHours: 6,
    learningObjectives: [
      'Đọc một đặc tả OpenAPI và chuyển nó thành kế hoạch kiểm thử.',
      'Nhận ra dấu hiệu của API cũ còn tồn tại song song với API mới.',
      'Giải thích vì sao quản lý danh mục API là vấn đề bảo mật.',
    ],
    methodologyVi: ['Bắt đầu từ schema nếu có; nếu không, dựng schema từ lưu lượng quan sát được.'],
    safetyNoteVi: LAB_ONLY,
    remediationTopicIds: ['Duy trì danh mục API đầy đủ và ngừng phục vụ phiên bản cũ.'],
  }),
  defineModule({
    id: 'mod-api-graphql',
    trackId: 'trk-api-fundamentals',
    titleVi: 'GraphQL',
    summaryVi:
      'Schema, truy vấn lồng nhau, độ sâu và độ phức tạp, introspection, và vì sao một endpoint duy nhất không có nghĩa là một điểm kiểm tra phân quyền duy nhất.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Đọc schema GraphQL và xác định các trường nhạy cảm.',
      'Giải thích vì sao phân quyền phải nằm ở tầng resolver.',
      'Đánh giá giới hạn độ sâu và độ phức tạp truy vấn.',
    ],
    safetyNoteVi:
      'Truy vấn lồng sâu có thể gây tải nặng. Giữ độ sâu ở mức tối thiểu đủ để chứng minh vấn đề.',
    remediationTopicIds: ['Phân quyền ở tầng resolver; giới hạn độ sâu, độ phức tạp và tốc độ.'],
  }),
  defineModule({
    id: 'mod-api-bola',
    trackId: 'trk-api-authz',
    titleVi: 'BOLA — phân quyền ở mức đối tượng',
    summaryVi:
      'Tương đương IDOR trong ngữ cảnh API, nhưng bề mặt rộng hơn vì API thường phơi ra nhiều loại đối tượng và nhiều thao tác hơn giao diện web.',
    difficulty: 'intermediate',
    estimatedHours: 6,
    learningObjectives: [
      'Lập ma trận vai trò × đối tượng × thao tác từ schema API.',
      'Kiểm tra đối tượng lồng nhau và endpoint theo lô.',
      'Mô tả tác động theo loại và khối lượng dữ liệu có thể truy cập.',
    ],
    methodologyVi: ['Dùng hai tài khoản của bạn ở hai tổ chức khác nhau để thử chéo.'],
    safeImpactProofVi: [
      'Một đối tượng của tài khoản B truy cập được bằng phiên của tài khoản A là đủ.',
    ],
    safetyNoteVi: 'Không liệt kê hàng loạt định danh. Chứng minh bằng một cặp tài khoản của bạn.',
    remediationTopicIds: ['Kiểm tra quyền sở hữu ở tầng truy vấn dữ liệu cho mọi đối tượng.'],
  }),
  defineModule({
    id: 'mod-api-mass-assignment',
    trackId: 'trk-api-authz',
    titleVi: 'Mass assignment và phân quyền ở mức thuộc tính',
    summaryVi:
      'API gán trực tiếp trường trong thân request vào đối tượng, cho phép client đặt các thuộc tính mà nó không nên kiểm soát, ví dụ vai trò hoặc trạng thái duyệt.',
    difficulty: 'intermediate',
    estimatedHours: 5,
    learningObjectives: [
      'Nhận ra thuộc tính nhạy cảm từ phản hồi đọc rồi kiểm tra khả năng ghi.',
      'Phân biệt phân quyền ở mức đối tượng với ở mức thuộc tính.',
      'Đánh giá tác động khi thuộc tính bị đặt là thuộc tính đặc quyền.',
    ],
    safetyNoteVi:
      'Thử trên đối tượng của chính bạn. Không thay đổi thuộc tính của đối tượng thuộc về người khác.',
    remediationTopicIds: ['Danh sách trường cho phép ghi, tách biệt theo vai trò.'],
  }),
  defineModule({
    id: 'mod-api-bfla',
    trackId: 'trk-api-authz',
    titleVi: 'BFLA — phân quyền ở mức chức năng',
    summaryVi:
      'Endpoint dành cho quản trị viên gọi được bằng phiên của người dùng thường, thường vì phân quyền chỉ được kiểm tra ở giao diện chứ không ở API.',
    difficulty: 'intermediate',
    estimatedHours: 5,
    learningObjectives: [
      'Tìm endpoint quản trị từ schema, mã phía client hoặc quy ước đặt tên.',
      'Kiểm tra phân quyền cho mọi method, không chỉ method mà giao diện dùng.',
      'Mô tả tác động theo chức năng quản trị mà người thường chiếm được.',
    ],
    safetyNoteVi:
      'Không thực hiện thao tác quản trị gây thay đổi trên hệ thống thật. Một phản hồi cho thấy quyền truy cập là đủ.',
    remediationTopicIds: ['Kiểm tra vai trò ở tầng API cho mọi endpoint, mặc định từ chối.'],
  }),
  defineModule({
    id: 'mod-api-tokens',
    trackId: 'trk-api-authn',
    titleVi: 'API key, phạm vi token, xoay vòng và thu hồi',
    summaryVi:
      'API key, cookie phiên, token OAuth, chữ ký HMAC và mTLS ở mức khái niệm; cùng vòng đời token: phạm vi, xoay vòng, thu hồi và hết hạn.',
    difficulty: 'intermediate',
    estimatedHours: 5,
    learningObjectives: [
      'Đánh giá phạm vi của một token so với nhu cầu thực tế của client.',
      'Kiểm tra token bị thu hồi có thực sự hết hiệu lực ngay không.',
      'Nhận ra khi cơ chế chữ ký HMAC không bao gồm đủ phần của request.',
    ],
    safetyNoteVi:
      'Chỉ dùng token của chính bạn. Không thử token tìm được ở nơi khác — đó là truy cập trái phép.',
    remediationTopicIds: ['Token phạm vi hẹp, thời hạn ngắn, thu hồi có hiệu lực tức thì.'],
  }),
  defineModule({
    id: 'mod-api-jwt',
    trackId: 'trk-api-authn',
    titleVi: 'JWT và JWKS',
    summaryVi:
      'Cấu trúc JWT, thuật toán ký, khoá công khai qua JWKS, và các kiểm tra bắt buộc: chữ ký, issuer, audience, thời hạn.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Liệt kê đầy đủ các kiểm tra mà bên nhận JWT phải thực hiện.',
      'Giải thích vì sao tin vào trường thuật toán trong header là sai.',
      'Đánh giá cách ứng dụng lấy và lưu đệm khoá công khai.',
    ],
    safeImpactProofVi: ['Chứng minh bằng token của chính bạn được sửa và vẫn được chấp nhận.'],
    safetyNoteVi:
      'Chỉ thao tác trên token của chính bạn. Không sử dụng token của người khác trong bất kỳ hoàn cảnh nào.',
    remediationTopicIds: ['Ghim thuật toán ở phía server; kiểm tra issuer, audience và thời hạn.'],
  }),
  defineModule({
    id: 'mod-api-resource-abuse',
    trackId: 'trk-api-abuse',
    titleVi: 'Tiêu thụ tài nguyên không giới hạn',
    summaryVi:
      'Rate limiting, phân trang, request theo lô, truy vấn tốn kém và giới hạn kích thước — đánh giá cơ chế bảo vệ mà không gây quá tải.',
    difficulty: 'advanced',
    estimatedHours: 5,
    learningObjectives: [
      'Đánh giá sự tồn tại và phạm vi của rate limit bằng số lượng request tối thiểu.',
      'Nhận ra endpoint có chi phí xử lý cao bất thường.',
      'Mô tả rủi ro tiêu thụ tài nguyên mà không thực hiện tấn công từ chối dịch vụ.',
    ],
    methodologyVi: ['Tăng dần và dừng ngay khi thấy dấu hiệu giới hạn hoặc dấu hiệu suy giảm.'],
    safetyNoteVi:
      'Tuyệt đối không thực hiện tấn công từ chối dịch vụ. Mục tiêu là xác định cơ chế bảo vệ có tồn tại hay không, không phải làm hệ thống ngừng hoạt động.',
    remediationTopicIds: [
      'Rate limit theo danh tính và theo chi phí, kèm giới hạn kích thước phản hồi.',
    ],
  }),
  defineModule({
    id: 'mod-api-excessive-data',
    trackId: 'trk-api-abuse',
    titleVi: 'Lộ dữ liệu quá mức và liệt kê',
    summaryVi:
      'API trả về nhiều trường hơn giao diện hiển thị, hoặc cho phép liệt kê đối tượng và người dùng ở quy mô lớn.',
    difficulty: 'intermediate',
    estimatedHours: 5,
    learningObjectives: [
      'So sánh trường API trả về với trường giao diện hiển thị.',
      'Đánh giá rủi ro liệt kê dựa trên khả năng đoán định danh và thiếu giới hạn tốc độ.',
      'Mô tả tác động về quyền riêng tư mà không thu thập dữ liệu.',
    ],
    safetyNoteVi:
      'Không tải hàng loạt dữ liệu để chứng minh khả năng liệt kê. Vài bản ghi và lập luận rõ ràng là đủ.',
    remediationTopicIds: ['Lọc trường ở phía server theo vai trò của người gọi.'],
  }),
  defineModule({
    id: 'mod-api-testing-workflow',
    trackId: 'trk-api-workflow',
    titleVi: 'Quy trình kiểm thử API theo schema',
    summaryVi:
      'Kiểm thử theo schema, ma trận vai trò × đối tượng, kiểm thử khác biệt, kiểm thử phủ định, kiểm thử chuyển trạng thái và đối chiếu API với ứng dụng di động.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Xây dựng ma trận kiểm thử đầy đủ từ schema thay vì thử ngẫu nhiên.',
      'Dùng kiểm thử khác biệt giữa hai vai trò để phát hiện thiếu kiểm tra.',
      'Đối chiếu endpoint mà ứng dụng di động gọi với endpoint mà web gọi.',
    ],
    safetyNoteVi: LAB_ONLY,
    remediationTopicIds: ['Kiểm thử phân quyền tự động theo ma trận vai trò trong CI.'],
  }),

  // ── F: Identity ────────────────────────────────────────────────────
  defineModule({
    id: 'mod-identity-oauth',
    trackId: 'trk-identity-protocols',
    titleVi: 'OAuth 2.0: redirect URI, state và PKCE',
    summaryVi:
      'Các luồng OAuth, vai trò của redirect URI, state, nonce và PKCE, và những sai lầm triển khai phổ biến nhất.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Vẽ luồng authorization code và chỉ ra nơi mã uỷ quyền có thể bị chuyển hướng.',
      'Giải thích state chống điều gì và PKCE chống điều gì — hai mục đích khác nhau.',
      'Đánh giá cách máy chủ so khớp redirect URI.',
    ],
    methodologyVi: [
      'Thử toàn bộ luồng với ứng dụng thử nghiệm của bạn trước khi đánh giá ứng dụng thật.',
    ],
    safeImpactProofVi: [
      'Chứng minh chuyển hướng mã uỷ quyền tới đích do bạn kiểm soát, dùng tài khoản của bạn.',
    ],
    safetyNoteVi:
      'Không thực hiện luồng OAuth nhắm tới tài khoản của người khác. Mọi thử nghiệm dùng tài khoản do bạn tạo.',
    remediationTopicIds: [
      'So khớp redirect URI chính xác tuyệt đối, không theo tiền tố.',
      'Bắt buộc PKCE cho mọi client và ràng buộc state với phiên.',
    ],
  }),
  defineModule({
    id: 'mod-identity-oidc-jwt',
    trackId: 'trk-identity-protocols',
    titleVi: 'OpenID Connect, ID token và niềm tin liên hệ thống',
    summaryVi:
      'ID token, claim, các kiểm tra bắt buộc, và cách một service provider quyết định tin vào assertion từ identity provider.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Liệt kê các claim phải kiểm tra và hậu quả khi bỏ qua từng claim.',
      'Phân biệt ID token với access token và với token phiên của ứng dụng.',
      'Giải thích SAML ở mức đủ để nhận ra vấn đề tương tự trong hệ thống doanh nghiệp.',
    ],
    safetyNoteVi: LAB_ONLY,
    remediationTopicIds: ['Kiểm tra chữ ký, issuer, audience, nonce và thời hạn của mọi token.'],
  }),
  defineModule({
    id: 'mod-identity-account-linking',
    trackId: 'trk-identity-protocols',
    titleVi: 'Liên kết tài khoản và email chưa xác minh',
    summaryVi:
      'Khi ứng dụng liên kết tài khoản dựa trên địa chỉ email từ nhà cung cấp danh tính mà không kiểm tra email đó đã được xác minh chưa, ranh giới danh tính bị phá vỡ.',
    difficulty: 'advanced',
    estimatedHours: 5,
    learningObjectives: [
      'Xác định tiêu chí mà ứng dụng dùng để coi hai danh tính là một người.',
      'Nhận ra rủi ro khi tin vào claim email chưa xác minh.',
      'Đánh giá luồng gỡ liên kết và hệ quả của nó.',
    ],
    safetyNoteVi: 'Chỉ dùng địa chỉ email và tài khoản do bạn kiểm soát ở cả hai phía.',
    remediationTopicIds: ['Chỉ liên kết tự động khi email đã được nhà cung cấp xác minh.'],
  }),
  defineModule({
    id: 'mod-identity-tenant',
    trackId: 'trk-identity-enterprise',
    titleVi: 'Người thuê, tổ chức, xác nhận tên miền và cấp phát',
    summaryVi:
      'SCIM, cấp phát tức thời, ánh xạ vai trò, đồng bộ nhóm, xác nhận quyền sở hữu tên miền, lời mời doanh nghiệp, tài khoản khách B2B và uỷ quyền quản trị.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Giải thích vì sao xác nhận quyền sở hữu tên miền là ranh giới bảo mật quan trọng.',
      'Đánh giá cấp phát tức thời và ánh xạ vai trò từ nhà cung cấp danh tính.',
      'Nhận ra rủi ro khi tài khoản khách có thể nâng quyền trong tổ chức.',
    ],
    safetyNoteVi:
      'Chỉ dùng tổ chức và tên miền do bạn kiểm soát. Không thử xác nhận tên miền của người khác.',
    remediationTopicIds: [
      'Xác nhận tên miền bằng cơ chế không thể giả mạo; kiểm soát chặt ánh xạ vai trò.',
    ],
  }),
  defineModule({
    id: 'mod-identity-passkey-recovery',
    trackId: 'trk-identity-enterprise',
    titleVi: 'Passkey, MFA và đường khôi phục',
    summaryVi:
      'WebAuthn và passkey nâng mức bảo vệ đăng nhập, nhưng đường khôi phục thường vẫn là mắt xích yếu nhất trong toàn hệ thống danh tính.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Giải thích passkey chống được điều gì và không chống được điều gì.',
      'Đánh giá đường khôi phục theo nguyên tắc mắt xích yếu nhất.',
      'Đánh giá đăng xuất liên hệ thống và thu hồi phiên trên nhiều thiết bị.',
    ],
    safetyNoteVi: 'Chỉ thử trên tài khoản của bạn với thiết bị của bạn.',
    remediationTopicIds: ['Đường khôi phục phải có mức bảo vệ tương đương đường đăng nhập chính.'],
  }),
];
