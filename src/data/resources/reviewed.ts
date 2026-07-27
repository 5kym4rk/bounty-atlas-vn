/**
 * Sổ ghi nhận rà soát nội dung nguồn.
 *
 * Một mục ở đây có nghĩa: người biên tập đã **thực sự mở nguồn đó và đọc nội
 * dung**, rồi đối chiếu với `descriptionVi` mà dự án viết. Ghi chú kèm theo là
 * bằng chứng của việc đã đọc — nó nêu điều cụ thể quan sát được trên trang, chứ
 * không phải nhắc lại tiêu đề.
 *
 * Đây là việc của người biên tập, hoàn toàn tách khỏi `link-status.generated.ts`
 * do script sinh. Một link `active` chỉ chứng minh máy chủ trả lời; nó không
 * chứng minh có ai đọc nội dung. Không được suy ra cái này từ cái kia.
 *
 * Thêm mục vào đây mà chưa mở nguồn là làm hỏng ý nghĩa của toàn bộ tệp.
 */

/** Ngày của đợt rà soát này. */
export const CONTENT_REVIEW_DATE = '2026-07-27';

/** `resourceId` → điều cụ thể đã quan sát được khi mở nguồn. */
export const CONTENT_REVIEWED: Record<string, string> = {
  'res-h1-defining-scope':
    'Liệt kê các loại tài sản mà nền tảng hỗ trợ khai báo: CIDR, Domain, iOS (App Store/TestFlight/.ipa), Android (Play Store/.apk), Windows Store, Source Code, Executable, Hardware/IoT và Other.',
  'res-nist-ssdf':
    'Trang ấn phẩm của SP 800-218 — Secure Software Development Framework (SSDF) phiên bản 1.1, phát hành tháng 2/2022. Toàn văn ở bản PDF tải kèm.',
  'res-nist-800-115':
    'Trang ấn phẩm của SP 800-115 — Technical Guide to Information Security Testing and Assessment. Tài liệu đi theo ba hoạt động: lập kế hoạch và thực hiện, phân tích phát hiện, xây dựng biện pháp giảm thiểu; nhấn mạnh lợi ích và giới hạn của từng kỹ thuật.',
  'res-portswigger-learning-paths':
    'Trang tập hợp các lộ trình học được sắp xếp sẵn của Web Security Academy, dành cho người muốn đi theo trình tự thay vì nhảy giữa các chủ đề.',
  'res-portswigger-api-testing':
    'Chương gồm: trinh sát API, đọc tài liệu API dạng người đọc và dạng máy đọc, tìm endpoint và tham số ẩn, mass assignment, server-side parameter pollution, và phần phòng ngừa. Có liên kết tới nhóm lab riêng cho chủ đề này.',
  'res-portswigger-graphql':
    'Chương gồm: tìm endpoint GraphQL, khai thác tham số không được kiểm tra, dùng introspection để lộ schema, vượt qua giới hạn introspection bằng ký tự đặc biệt, dùng alias để vượt giới hạn tần suất, và CSRF trên endpoint GraphQL. Có lab đi kèm.',
  'res-openapi-spec':
    'Bản mới nhất là OpenAPI Specification 3.2.0 (19/09/2025). Object gốc gồm openapi, $self, info, jsonSchemaDialect, servers, paths, webhooks, components, security, tags, externalDocs; bắt buộc có ít nhất một trong components/paths/webhooks.',
  'res-rfc9700':
    'Đây là BCP 240. Khuyến nghị chính: so khớp redirect URI bằng chuỗi chính xác, bắt buộc PKCE cho client công khai, ràng buộc token theo người gửi bằng mTLS hoặc DPoP, xoay refresh token, và bỏ hẳn implicit grant lẫn resource owner password credentials.',
  'res-oidc-core':
    'Bản "incorporating errata set 2". Định nghĩa ba luồng: Authorization Code, Implicit và Hybrid; mỗi luồng dùng giá trị response_type khác nhau để quyết định tham số nào trả về từ endpoint nào.',
  'res-portswigger-oauth':
    'Chia lỗi theo phía client (implicit grant làm sai, thiếu tham số state, kiểm tra redirect_uri lỏng) và phía dịch vụ OAuth (rò mã uỷ quyền, kiểm tra scope sai, đăng ký người dùng không xác minh), kèm phần về OpenID Connect. Có nhóm lab riêng.',
  'res-portswigger-jwt':
    'Bốn nhóm tấn công: xác minh chữ ký làm sai, dò khoá bí mật yếu, tiêm tham số header (jwk, jku, kid), và nhầm lẫn thuật toán. Có lab đi kèm.',
  'res-owasp-masvs':
    'Chia thành tám nhóm control: MASVS-STORAGE, CRYPTO, AUTH, NETWORK, PLATFORM, CODE, RESILIENCE và PRIVACY. Dùng chung cho cả Android lẫn iOS.',
  'res-mastg-tests':
    'Bài kiểm thử chia theo hai nền tảng Android và iOS, trong mỗi nền tảng lại chia theo tám nhóm MASVS. Mỗi bài là một trang riêng có mã MASTG-TEST.',
  'res-mastg-tools':
    'Trang thuộc phần MASTG, dẫn tới nội dung chia theo nhóm MASVS và theo nền tảng, gồm bốn loại tài liệu: tests, knowledge, demos và best practices. Frida và semgrep xuất hiện trong phần demos.',
  'res-mastg-apps':
    'Trang điều hướng của bộ tài liệu OWASP MAS, dẫn tới MASVS, MASWE (beta), MASTG và phần demos cho Android/iOS.',
  'res-frida-docs':
    'Tài liệu chia thành: Getting Started (cài đặt, các chế độ chạy), Tutorials, Examples theo nền tảng (Windows, macOS, Linux, iOS, Android), Tools (frida CLI, frida-ps, frida-trace), API Reference (JavaScript, C, Gum, Swift, Go) và phần best practices.',
  'res-aws-iam-best-practices':
    'Liệt kê 14 khuyến nghị, mở đầu bằng: bắt người dùng dùng liên kết danh tính với thông tin xác thực tạm thời, bắt workload dùng IAM role, bắt buộc MFA, bảo vệ tài khoản gốc, áp dụng quyền tối thiểu; kết bằng permissions boundary và guardrail đa tài khoản bằng SCP/RCP.',
  'res-docker-security':
    'Bốn chủ đề chính: namespace của nhân, control group, bề mặt tấn công của Docker daemon, và capability của nhân Linux. Có thêm phần Docker Content Trust, tăng cường nhân bằng AppArmor/SELinux, và user namespace.',
  'res-wireshark-guide':
    'Sách hướng dẫn cho Wireshark 4.7.3, 13 chương từ giới thiệu, cài đặt, giao diện, bắt gói tin, lọc và phân tích, tới thống kê, telephony, wireless và MATE.',
  'res-owasp-tcasvs':
    'Tiêu chuẩn xác minh bảo mật cho ứng dụng thick client — phần mềm desktop và ứng dụng gốc chạy ngoài trình duyệt. Trang dự án cho tải bản đầy đủ ở các định dạng PDF, DOCX, CSV, JSON và CycloneDX.',
  'res-ps-business-logic':
    'Trang có tiêu đề "Business logic vulnerabilities", định nghĩa đây là sai sót trong thiết kế và hiện thực cho phép gây ra hành vi ngoài dự kiến, thường bắt nguồn từ giả định sai của đội thiết kế và phát triển về cách người dùng tương tác. Có lab đi kèm. Lưu ý đường dẫn là /logic-flaws, không phải /business-logic.',
  'res-ps-dom-based':
    'Định nghĩa theo cặp source và sink: JavaScript nhận một giá trị kẻ tấn công kiểm soát được rồi đưa vào một hàm nguy hiểm. Bao phủ XSS, chuyển hướng mở, thao túng cookie, chèn JavaScript và nhiều dạng xử lý dữ liệu không an toàn khác trong DOM.',
  'res-ps-prototype-pollution':
    'Giải thích lỗi phát sinh từ việc gộp đệ quy dữ liệu người dùng mà không lọc. Nêu ba thành phần cần có để khai thác: source (chuỗi truy vấn URL, đầu vào JSON), sink (hàm cho phép thực thi) và gadget (thuộc tính bị ứng dụng dùng thiếu an toàn). Bao phủ cả phía client lẫn phía máy chủ, từ DOM XSS tới khả năng thực thi mã từ xa.',
  'res-ps-cache-poisoning':
    'Bao phủ quy trình tấn công: tìm đầu vào không nằm trong khoá cache, dựng phản hồi độc hại, rồi bảo đảm nó được cache phục vụ lại. Xét cả lỗi thiết kế lẫn lỗi hiện thực của hệ thống cache, kèm phòng thủ bằng tắt header thừa và chỉ cache nội dung tĩnh.',
  'res-ps-host-header':
    'Bảy dạng tấn công: đầu độc đặt lại mật khẩu, đầu độc cache, lỗi phía máy chủ kiểu cũ, vượt qua xác thực, dò tìm virtual host, SSRF dựa trên định tuyến, và tấn công dựa trên trạng thái kết nối.',
  'res-ps-file-upload':
    'Bao phủ cơ chế phát sinh lỗi khi kiểm tra tệp tải lên bị làm sai, kỹ thuật vượt qua bộ lọc để đặt web shell, các tấn công không cần thực thi mã từ xa như chèn script phía client, và phần giảm thiểu bằng danh sách cho phép cùng cách xử lý tệp an toàn.',
  'res-ps-info-disclosure':
    'Chín nguồn lộ thông tin: tệp dành cho trình thu thập, liệt kê thư mục, chú thích của lập trình viên, thông báo lỗi, dữ liệu gỡ lỗi, trang tài khoản người dùng, tệp sao lưu, cấu hình không an toàn, và lịch sử hệ thống quản lý phiên bản.',
  'res-ps-deserialization':
    'Bao phủ nền tảng về tuần tự hoá, cơ chế phát sinh lỗi, kỹ thuật khai thác bằng chuỗi gadget và magic method, và phần phòng ngừa với nguyên tắc: không deserialize dữ liệu do người dùng kiểm soát trừ khi thật sự bắt buộc.',
  'res-ps-race-conditions':
    'Bao phủ tấn công vượt giới hạn (như dùng một mã quà tặng nhiều lần), các bước ẩn bên trong một request, và phương pháp phát hiện bằng Burp Repeater. Nhấn mạnh race condition rất gần với nhóm lỗi logic nghiệp vụ.',
  'res-ps-request-smuggling':
    'Giải thích lỗi phát sinh từ bất đồng giữa máy chủ đầu và máy chủ sau về ranh giới request, đặc biệt khi có đồng thời Content-Length và Transfer-Encoding. Mô tả ba dạng CL.TE, TE.CL và TE.TE, kèm phòng ngừa bằng dùng HTTP/2 xuyên suốt và chuẩn hoá request mơ hồ.',
  'res-ps-ssrf':
    'Bao phủ các dạng tấn công nhắm vào chính máy chủ và hệ thống nội bộ phía sau, kỹ thuật vượt qua bộ lọc, SSRF mù, và cách tìm bề mặt SSRF ẩn trong ứng dụng.',
  'res-ps-csrf':
    'Nêu ba điều kiện để CSRF thành công: có một hành động đáng để kẻ tấn công gây ra, phiên được quản lý bằng cookie mà không có cơ chế xác minh nào khác, và request không chứa tham số nào mà kẻ tấn công không đoán được.',
  'res-ps-cors':
    'Sáu cấu hình sai: phản chiếu Origin do client gửi vào header ACAO, lỗi so khớp danh sách trắng theo tiền tố hoặc hậu tố, chấp nhận origin "null" để lợi dụng iframe sandbox, tin cậy tên miền phụ có thể bị chiếm qua XSS, cho phép tên miền phụ chạy HTTP trong khi trang chính dùng HTTPS, và cho phép request cross-origin không cần xác thực tới tài nguyên mạng nội bộ.',
  'res-ps-command-injection':
    'Bao phủ cách phát hiện cả trường hợp thấy được lẫn trường hợp mù, các ký tự đặc biệt của shell, và nhấn mạnh cách phòng ngừa hiệu quả nhất là không gọi lệnh hệ điều hành từ mã tầng ứng dụng, còn kiểm tra đầu vào chỉ là tuyến thứ hai.',
  'res-ps-path-traversal':
    'Giải thích cách kẻ tấn công đọc tệp tuỳ ý trên máy chủ, minh hoạ bằng chuỗi ../ và các biến thể, kèm phòng ngừa bằng kiểm tra đầu vào và kiểm tra đường dẫn sau khi chuẩn hoá.',
  'res-ps-access-control':
    'Định nghĩa kiểm soát truy cập là ràng buộc về ai hoặc cái gì được phép thực hiện hành động hay chạm tới tài nguyên. Bao phủ leo thang đặc quyền cả chiều dọc lẫn chiều ngang, kèm phần phòng ngừa.',
  'res-ps-idor':
    'Định nghĩa IDOR là một dạng lỗi kiểm soát truy cập phát sinh khi ứng dụng dùng đầu vào của người dùng để truy cập trực tiếp tới đối tượng. Nêu hai dạng: tham chiếu trực tiếp tới đối tượng trong cơ sở dữ liệu (ví dụ sửa số khách hàng trên URL) và tham chiếu tới tệp tĩnh (sửa tên tệp để đọc dữ liệu của người khác).',
  'res-ps-authentication':
    'Chia làm ba nhóm: lỗi trong đăng nhập bằng mật khẩu, lỗi trong xác thực đa yếu tố, và lỗi trong các cơ chế xác thực khác, cộng thêm phần xác thực qua OAuth bên thứ ba. Gồm dò mật khẩu, vượt qua biện pháp bảo vệ, sai sót logic, và điểm yếu trong đặt lại mật khẩu và quản lý phiên.',
  'res-ps-sqli':
    'Bao phủ cách phát hiện, các kỹ thuật khai thác gồm tấn công UNION và SQL injection mù, cùng phần phòng ngừa bằng truy vấn tham số hoá.',
  'res-ps-xss':
    'Ba loại: reflected XSS (mã đến từ chính request hiện tại), stored XSS (mã đến từ cơ sở dữ liệu của trang) và DOM-based XSS (lỗi nằm trong mã phía client chứ không phải phía máy chủ).',
  'res-api6-business-flows':
    'Mô tả luồng nghiệp vụ nhạy cảm bị lạm dụng ở quy mô lớn dù từng request đều hợp lệ, ví dụ gom hàng bán lại hoặc phát tán rác. Phòng ngừa: nhận dạng thiết bị, phát hiện người thật bằng captcha, phân tích mẫu hành vi phi con người, chặn dải IP proxy, và siết chặt hơn với API dành cho máy gọi máy.',
  'res-api7-ssrf':
    'Định nghĩa: lỗi xảy ra khi API tải tài nguyên từ xa mà không kiểm tra URL do người dùng cung cấp. Phòng ngừa: tách riêng cơ chế tải tài nguyên, dùng danh sách cho phép cho origin và scheme, tắt tự động theo HTTP redirect, dùng bộ phân tích URL đáng tin, kiểm tra đầu vào, và không trả nguyên phản hồi thô về cho client.',
  'res-api8-misconfig':
    'Mô tả lỗi do làm cứng không đầy đủ trên toàn chồng API: hệ thống chưa vá, tính năng thừa, thiếu TLS, cấu hình mặc định không an toàn. Phòng ngừa: quy trình làm cứng lặp lại được, bắt buộc TLS, giới hạn động từ HTTP, cấu hình CORS đúng, thêm header bảo mật, và bảo đảm mọi máy chủ trên đường đi xử lý request giống nhau.',
  'res-api9-inventory':
    'Mô tả rủi ro khi không nắm được có bao nhiêu API, phiên bản nào còn chạy và dữ liệu chảy đi đâu. Phòng ngừa: lập kiểm kê mọi host API kèm môi trường, ghi lại dịch vụ tích hợp và luồng dữ liệu, sinh tài liệu tự động, giới hạn quyền xem tài liệu, áp biện pháp bảo vệ cho mọi phiên bản, không dùng dữ liệu thật ở môi trường không phải production, và phân tích rủi ro khi nâng phiên bản.',
  'res-api10-unsafe-consumption':
    'Mô tả xu hướng lập trình viên tin dữ liệu từ API bên thứ ba mà không kiểm tra, dẫn tới injection, lộ dữ liệu và từ chối dịch vụ. Khuyến nghị: luôn kiểm tra và làm sạch dữ liệu nhận từ API tích hợp trước khi dùng, dùng kênh truyền an toàn, đánh giá thực hành bảo mật của nhà cung cấp, và dùng danh sách cho phép cho redirect thay vì đi theo mù quáng.',
  'res-api1-bola':
    'Mô tả việc kẻ tấn công sửa định danh đối tượng để chạm tới tài nguyên không thuộc về mình, dẫn tới lộ hoặc phá dữ liệu. Bốn biện pháp phòng ngừa: cơ chế phân quyền dựa trên chính sách người dùng, kiểm tra quyền ở mọi hàm truy cập cơ sở dữ liệu, dùng GUID khó đoán cho ID bản ghi, và viết test kiểm chứng cơ chế phân quyền trước khi phát hành.',
  'res-api2-broken-authn':
    'Mô tả các lỗi cơ chế xác thực của API cho phép chiếm tài khoản qua dò mật khẩu, credential stuffing và thao túng token. Phòng ngừa: cơ chế chống dò tự động, yêu cầu xác nhận mật khẩu cho thao tác nhạy cảm, dùng MFA, khoá tài khoản hoặc CAPTCHA, và không dùng API key làm cơ chế xác thực người dùng.',
  'res-api3-bopla':
    'Gộp hai mục của bản 2019 là Excessive Data Exposure và Mass Assignment. Phòng ngừa: chọn từng thuộc tính cần trả về thay vì tuần tự hoá cả đối tượng, không gán tự động dữ liệu đầu vào vào thuộc tính đối tượng, giới hạn trường được phép sửa, kiểm tra phản hồi theo schema, và giữ cấu trúc dữ liệu trả về ở mức tối thiểu theo nhu cầu nghiệp vụ.',
  'res-api4-resource-consumption':
    'Mô tả API thiếu kiểm soát tài nguyên nên dễ bị làm cạn kiệt. Khuyến nghị: đặt kích thước tối đa cho mọi tham số và thân request, giới hạn tần suất gọi trong một khoảng thời gian, và đặt trần cho thời gian chạy, bộ nhớ, kích thước tệp tải lên, số bản ghi mỗi request, cùng chi tiêu cho dịch vụ bên thứ ba.',
  'res-api5-bfla':
    'Xảy ra khi API không giới hạn đúng quyền gọi các chức năng quản trị hoặc nhạy cảm. Khuyến nghị một module phân quyền thống nhất và dễ phân tích cho mọi chức năng nghiệp vụ, theo nguyên tắc mặc định từ chối tất cả rồi mới cấp quyền tường minh theo vai trò.',
  'res-cs-key-management':
    'Sáu giai đoạn vòng đời khoá: sinh, phân phát, lưu trữ, ký gửi và sao lưu, trách nhiệm giải trình và kiểm toán, và xử lý khi khoá bị lộ kèm khôi phục.',
  'res-cs-cicd':
    'Liệt kê mười rủi ro của môi trường CI/CD: kiểm soát luồng lỏng lẻo, quản lý danh tính và truy cập yếu, lạm dụng chuỗi phụ thuộc, đầu độc thực thi pipeline, phân quyền trong pipeline không đủ, vệ sinh thông tin xác thực kém, cấu hình hệ thống không an toàn, dùng dịch vụ bên thứ ba không kiểm soát, không xác minh toàn vẹn artifact, và thiếu log cùng khả năng quan sát.',
  'res-cs-vulnerable-deps':
    'Chia thành bốn tình huống khi một phụ thuộc bị phát hiện lỗ hổng: có bản vá thì áp dụng; chưa có thì dựng biện pháp bảo vệ tạm; nhà cung cấp không sửa thì tự vá; và lỗ hổng chưa công bố thì báo cho nhà cung cấp. Nhấn mạnh kiểm thử, ghi chép, và đưa quyết định chấp nhận rủi ro lên đúng cấp.',
  'res-cs-error-handling':
    'Khuyến nghị một bộ xử lý lỗi toàn cục: ghi chi tiết lỗi ở phía máy chủ để điều tra, còn trả về cho người dùng một thông báo chung không tiết lộ gì. Mục đích là chặn kẻ tấn công thu thập thông tin kỹ thuật trong giai đoạn trinh sát.',
  'res-cs-secure-cloud-architecture':
    'Bao phủ: phân tích rủi ro, mô hình hoá mối đe doạ và đánh giá bề mặt tấn công; phân đoạn thành phần công khai và riêng tư; xác lập ranh giới tin cậy giữa các thành phần; công cụ bảo mật như WAF và giám sát; và hiểu mô hình trách nhiệm chung ở ba mức hạ tầng, nền tảng và phần mềm.',
  'res-cs-prototype-pollution':
    'Bốn biện pháp: dùng new Set() hoặc new Map() thay cho object literal, tạo đối tượng bằng Object.create(null) để không kế thừa prototype, dùng Object.freeze() và Object.seal() để chặn sửa prototype, và bật cờ --disable-proto=delete của Node.js như lớp phòng thủ bổ sung.',
  'res-cs-input-validation':
    'Danh sách cho phép áp dụng được cho mọi trường người dùng nhập vì nó định nghĩa cái gì hợp lệ; danh sách cấm về bản chất là sai và dễ bị vượt qua. Kiểm tra phía máy chủ phải chạy trước khi xử lý dữ liệu, vì kiểm tra phía client luôn có thể bị bỏ qua.',
  'res-cs-attack-surface':
    'Định nghĩa bề mặt tấn công là mọi đường dữ liệu và lệnh đi vào và đi ra khỏi ứng dụng, cộng với mã bảo vệ và dữ liệu có giá trị. Cách phân tích: lập bản đồ điểm vào và điểm ra (biểu mẫu, API, cơ sở dữ liệu), phân loại theo kiểu và mức rủi ro, khoanh vùng chỗ rủi ro cao như giao diện hướng Internet, và đánh giá lại mỗi khi kiến trúc thay đổi.',
  'res-cs-microservices':
    'Hai mô hình xác thực giữa các dịch vụ: mutual TLS (mỗi dịch vụ nhận diện dịch vụ kia bằng cặp khoá, đổi lại phải quản lý cấp phát và xoay chứng chỉ), và token ở tầng ứng dụng — token chứa ID dịch vụ gọi và phạm vi quyền, xác minh trực tuyến qua dịch vụ tập trung hoặc ngoại tuyến bằng khoá công khai đã tải sẵn.',
  'res-cs-crypto-storage':
    'Mã hoá đối xứng: AES với khoá tối thiểu 128 bit, tốt nhất 256 bit. Bất đối xứng: ưu tiên mật mã đường cong elliptic với đường cong an toàn như Curve25519, hoặc RSA tối thiểu 2048 bit khi không dùng được ECC.',
  'res-cs-forgot-password':
    'Trả về thông báo giống nhau cho tài khoản tồn tại và không tồn tại; token sinh bằng nguồn ngẫu nhiên an toàn, dùng một lần và có thời hạn; gửi qua kênh phụ (email hoặc SMS); giới hạn tần suất; không tự đăng nhập lại sau khi đổi mật khẩu; và tuyệt đối không khoá tài khoản chỉ vì có yêu cầu quên mật khẩu.',
  'res-cs-password-storage':
    'Ưu tiên Argon2id với tối thiểu 19 MiB bộ nhớ, 2 vòng lặp, 1 luồng song song. Thay thế: scrypt với N=2^17, r=8, p=1. Hệ thống cần tuân thủ FIPS thì dùng PBKDF2-HMAC-SHA256 với 600.000 vòng. bcrypt còn chấp nhận được cho ứng dụng cũ với work factor từ 10 trở lên.',
  'res-cs-dom-xss':
    'Liệt kê các sink nguy hiểm như innerHTML, outerHTML, document.write() và setTimeout(), kèm bảy quy tắc mã hoá theo ngữ cảnh con. Khuyến nghị dùng phương thức an toàn như textContent, và chọn đúng cách xuất dữ liệu thay vì cố mã hoá cho phức tạp.',
  'res-cs-command-injection':
    'Ba tuyến: tránh gọi lệnh hệ điều hành trực tiếp mà dùng hàm thư viện có sẵn; thoát đầu vào bằng hàm riêng của hệ điều hành như escapeshellarg(); và tham số hoá kết hợp kiểm tra đầu vào theo danh sách cho phép cho cả lệnh lẫn đối số, cộng với chạy ứng dụng bằng quyền tối thiểu.',
  'res-cs-xxe':
    'Khuyến nghị cốt lõi: cách an toàn nhất là tắt hoàn toàn DTD và entity ngoài. Có hướng dẫn cấu hình cụ thể cho từng bộ phân tích: libxml2 và libxerces-c (C/C++), ColdFusion, nhiều bộ của Java (DocumentBuilderFactory, SAXParserFactory, XMLInputFactory), .NET (XmlDocument, XmlReader, XPathNavigator), thư viện iOS, PHP và module xml của Python.',
  'res-cs-graphql':
    'Rủi ro: injection, từ chối dịch vụ qua truy vấn tốn kém, phân quyền hỏng, và batching để liệt kê nhanh. Phòng thủ: kiểm tra đầu vào theo danh sách cho phép, giới hạn độ phức tạp bằng độ sâu/số lượng và timeout, phân quyền trên mọi thao tác dữ liệu, giới hạn tần suất, tắt introspection ở môi trường thật, và không trả thông báo lỗi chi tiết.',
  'res-cs-mass-assignment':
    'Bàn tới Spring MVC, NodeJS/Mongoose, Ruby on Rails, Django, ASP.NET, PHP Laravel, Grails và Play. Khuyến nghị chính là khai báo danh sách trường được phép gán, và cách tốt nhất là dùng Data Transfer Object không chứa các thuộc tính nhạy cảm.',
  'res-cs-tls':
    'Mặc định dùng TLS 1.3, có thể giữ TLS 1.2 vì tương thích, tắt TLS 1.0 và 1.1. Về bộ mã: dùng nhóm AEAD (AES-GCM hoặc ChaCha20-Poly1305), tránh null cipher, cipher ẩn danh, cipher export và các phương thức trao khoá bằng RSA vì không có forward secrecy.',
  'res-cs-logging':
    'Nên ghi: xác thực thất bại, từ chối phân quyền, lỗi kiểm tra đầu vào và đầu ra, và các thao tác rủi ro cao như quản trị người dùng hay truy cập dữ liệu nhạy cảm. Không được ghi: mật khẩu, session ID, access token, khoá mã hoá, dữ liệu thẻ thanh toán và thông tin định danh cá nhân.',
  'res-cs-mfa':
    'Năm nhóm yếu tố: điều bạn biết, điều bạn có, điều bạn là, nơi bạn ở, và cách bạn làm. Điểm yếu tương ứng: người dùng vẫn bị lừa đảo, token phần cứng tốn kém, mất thiết bị gây rắc rối, SMS bị tấn công đổi SIM, sinh trắc học đặt ra vấn đề quyền riêng tư khi lưu trữ, và yếu tố vị trí không cứu được máy đã bị chiếm.',
  'res-cs-secrets-management':
    'Nguyên tắc trung tâm: tập trung việc lưu, cấp phát, kiểm toán, xoay và quản lý bí mật vào một chỗ. Kèm: hệ thống sẵn sàng cao với kiểm soát truy cập chi tiết, tự động xoay theo vòng đời, truyền qua TLS, bảo vệ bí mật trong bộ nhớ, quy trình xử lý sự cố nhanh, và ưu tiên bí mật động khi có thể.',
  'res-cs-kubernetes':
    'Bảy nhóm: nhận cảnh báo cập nhật bảo mật, hiểu kiến trúc cụm, làm cứng máy chủ nền, bảo vệ thành phần lõi như etcd và API server, bảo mật giai đoạn dựng bằng quét image, triển khai với phân tách namespace và Pod Security Standards, và xử lý mối đe doạ lúc chạy bằng giám sát và log.',
  'res-cs-docker':
    'Liệt kê 13 quy tắc: cập nhật hệ thống, không phơi socket của Docker daemon, chạy container bằng người dùng không đặc quyền, giới hạn capability của Linux, chặn leo thang đặc quyền, kiểm soát kết nối giữa các container, quản lý ánh xạ cổng kèm tường lửa, dùng module bảo mật, giới hạn tài nguyên, dùng hệ thống tệp chỉ đọc, quét image trong CI/CD, đặt mức log phù hợp, chạy chế độ rootless, và dùng Docker Secrets.',
  'res-cs-threat-modeling':
    'Xoay quanh bốn câu hỏi: chúng ta đang làm gì, có thể sai ở đâu, sẽ làm gì với điều đó, và đã làm đủ tốt chưa. Bốn câu hỏi này dẫn qua mô hình hoá hệ thống (thường bằng data flow diagram), nhận diện mối đe doạ (thường dùng STRIDE), xây biện pháp giảm thiểu, và rà soát lại.',
  'res-cs-rest-security':
    'Bao phủ: mã hoá HTTPS, kiểm soát truy cập, xác thực bằng JWT và API key, giới hạn phương thức HTTP, kiểm tra đầu vào, kiểm tra content type, bảo vệ endpoint quản trị, xử lý lỗi, log kiểm toán, header bảo mật, cấu hình CORS, bảo vệ dữ liệu nhạy cảm và dùng đúng mã trạng thái HTTP.',
  'res-cs-csrf':
    'Các tuyến phòng thủ: token CSRF cho mọi request làm đổi trạng thái (synchronizer token hoặc double-submit cookie), header Fetch Metadata như Sec-Fetch-Site, thuộc tính SameSite, xác minh origin, và header tuỳ chỉnh cho AJAX. Nói rõ XSS có thể vượt qua mọi biện pháp chống CSRF.',
  'res-cs-ssrf':
    'Phòng thủ theo lớp: ở tầng ứng dụng dùng danh sách cho phép cho ứng dụng nội bộ; với request ra ngoài thì kết hợp danh sách chặn và token chứng minh tính hợp lệ. Ở tầng mạng dùng tường lửa và phân đoạn. Ngoài ra: tắt tự động theo redirect, dùng IMDSv2 trên cloud, và giám sát phân giải DNS bất thường.',
  'res-cs-csp':
    'Khuyến nghị chính sách "strict" dùng nonce hoặc hash. Cảnh báo nonce đòi HTML sinh động để kẻ tấn công không lấy được, còn hash thì dễ hỏng vì đổi mã là đổi hash. Nói rõ không nên dùng unsafe-inline.',
  'res-cs-deserialization':
    'Bao phủ PHP, Python, Java và .NET/C#. Lời khuyên chính là bỏ hẳn định dạng tuần tự hoá gốc, chuyển sang định dạng dữ liệu thuần như JSON hoặc XML. Nếu buộc phải deserialize thì dùng danh sách lớp được phép, ký dữ liệu trước khi xử lý, và dùng API an toàn riêng của từng ngôn ngữ.',
  'res-cs-file-upload':
    'Khuyến nghị: chỉ cho phép danh sách phần mở rộng cần cho nghiệp vụ, kiểm tra loại tệp thật thay vì tin Content-Type, sinh tên tệp ngẫu nhiên, giới hạn kích thước, giới hạn người được tải lên, và lưu ở máy chủ riêng hoặc ngoài webroot. Kèm quét virus và chống CSRF cho chính chức năng tải lên.',
  'res-cs-authorization':
    'Nguyên tắc: đặc quyền tối thiểu, mặc định từ chối, kiểm tra quyền trên mọi request bằng một cơ chế thống nhất (filter hoặc middleware). Ưu tiên ABAC/ReBAC hơn RBAC thuần, bảo vệ ID tra cứu khỏi bị sửa, kiểm tra ở phía máy chủ chứ không dựa vào logic phía client, và viết test tự động cho logic phân quyền.',
  'res-cs-idor':
    'Nói rõ: định danh phức tạp như GUID khiến việc đoán gần như bất khả thi, nhưng kiểm tra quyền vẫn là bắt buộc. Che giấu định danh chỉ là lớp phòng thủ bổ sung, không bao giờ thay được việc xác minh phân quyền ở phía máy chủ.',
  'res-cs-authentication':
    'Mật khẩu tối thiểu 8–15 ký tự tuỳ có MFA hay không, tối đa 64; băm và so sánh an toàn; xác thực lại cho thao tác nhạy cảm; MFA là biện pháp mạnh nhất chống các tấn công liên quan mật khẩu. Kèm khoá tài khoản, CAPTCHA, khôi phục mật khẩu an toàn, thông báo lỗi chung để chống liệt kê tài khoản, và ghi log mọi lần xác thực thất bại.',
  'res-cs-session':
    'Session ID phải sinh bằng nguồn ngẫu nhiên an toàn với ít nhất 64 bit entropy, lưu phía máy chủ, truyền qua cookie HttpOnly + Secure + SameSite=Strict. Từ chối ID lạ, sinh lại token sau khi đăng nhập hoặc đổi đặc quyền, áp cả timeout nhàn rỗi lẫn timeout tuyệt đối ở phía máy chủ, và ghi log toàn bộ vòng đời phiên.',
  'res-cs-xss':
    'Mã hoá đầu ra theo ngữ cảnh: HTML entity cho nội dung giữa các thẻ, dạng &#xHH; cho giá trị thuộc tính, percent-encoding cho tham số URL, dạng \\uXXXX cho JavaScript, và \\XX hoặc \\XXXXXX cho CSS. Mỗi ngữ cảnh cần một cách mã hoá khác nhau.',
  'res-cs-sqli':
    'Bốn tuyến phòng thủ: prepared statement với truy vấn tham số hoá, stored procedure viết đúng cách, kiểm tra đầu vào theo danh sách cho phép, và thoát ký tự (bị khuyến cáo không nên dùng). Hai cách đầu hiệu quả nhất vì tách mã khỏi dữ liệu; danh sách cho phép chủ yếu dùng cho phần động như tên bảng.',
  'res-electron-security':
    'Khuyến nghị chính: chỉ nạp nội dung qua HTTPS, tắt tích hợp Node cho nội dung từ xa, bật context isolation và sandbox tiến trình, kiểm tra mọi thông điệp IPC, không tắt web security, không trộn HTTP với HTTPS, giới hạn điều hướng và mở cửa sổ, và luôn cập nhật Electron.',
  'res-ghidra':
    'Khung dịch ngược do Cơ quan An ninh Quốc gia Hoa Kỳ (NSA) Research Directorate phát triển và duy trì; hỗ trợ disassembly, decompile và viết script, chạy trên nhiều nền tảng. Trang chủ cũ ghidra-sre.org nay chuyển hướng về kho GitHub này.',
  'res-address-sanitizer':
    'Bật bằng cờ biên dịch -fsanitize=address. Phát hiện truy cập ngoài biên trên heap, stack và biến toàn cục, dùng sau khi giải phóng, dùng sau khi hàm trả về, giải phóng hai lần và rò rỉ bộ nhớ; chậm khoảng hai lần.',
  'res-pwn-college-software-exploitation':
    'Dojo gồm các mô-đun: Format String Exploits, File Struct Exploits, Exploitation Primitives, Dynamic Allocator Exploitation và Kernel Exploitation.',
  'res-owasp-code-review-cheatsheet':
    'Nhấn mạnh đọc mã thủ công để bắt những gì công cụ tự động bỏ sót — logic nghiệp vụ, luồng dữ liệu, lỗi phân quyền và race condition. Phân biệt rà soát nền (baseline) với rà soát theo diff trong quá trình phát triển.',
  'res-openssf-scorecard':
    'Chạy 18 phép kiểm chia ba nhóm: thực hành bảo mật tổng thể, rủi ro mã nguồn và rủi ro quy trình dựng. Mỗi phép kiểm cho điểm trên thang 10 kèm mức rủi ro, tổng hợp thành một điểm chung cho dự án.',
  'res-sigstore':
    'Gồm ba thành phần: Cosign (ký artifact), Fulcio (cấp chứng chỉ ngắn hạn) và Rekor (nhật ký minh bạch ghi lại sự kiện ký). Cho phép ký bằng khoá tạm gắn với danh tính xác minh được, không phải quản lý khoá dài hạn.',
  'res-gh-actions-security':
    'Phần bảo mật của tài liệu Actions tập trung vào hai việc: tạo bằng chứng nguồn gốc bản dựng bằng artifact attestation, và xác thực với nhà cung cấp cloud bằng OpenID Connect thay cho khoá dài hạn.',
  'res-nist-800-82':
    'Bản Rev. 3 (tháng 9/2023), tên đầy đủ "Guide to Operational Technology (OT) Security". Bao phủ hệ thống điều khiển công nghiệp, tự động hoá toà nhà và hệ thống giao thông; nêu mối đe doạ, điểm yếu đặc thù và biện pháp đối phó phù hợp với ràng buộc hiệu năng, độ tin cậy và an toàn của OT.',
  'res-owasp-thick-client-top10':
    'Tài liệu nâng cao nhận thức cho lập trình viên và người phân tích bảo mật, liệt kê các rủi ro thường gặp nhất của ứng dụng thick client. Danh sách chi tiết nằm trong bản phát hành tải về, không hiển thị hết trên trang dự án.',
  'res-owasp-wstg':
    'Dự án flagship của OWASP, bản hiện hành 4.2 và bản 5.0 đang xây dựng. Mã bài kiểm thử theo dạng WSTG-<nhóm>-<số>, ví dụ WSTG-INFO-02 cho nhóm thu thập thông tin. Giấy phép Creative Commons.',
};
