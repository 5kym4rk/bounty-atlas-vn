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
  'res-aws-s3-block-public-access':
    'Bốn thiết lập độc lập: BlockPublicAcls, IgnorePublicAcls, BlockPublicPolicy và RestrictPublicBuckets. Áp được ở mức tổ chức, tài khoản, bucket và access point; khi các mức khác nhau thì S3 lấy tổ hợp chặt nhất. Trang cũng định nghĩa rõ thế nào là "public" với ACL và với bucket policy.',
  'res-aws-presigned-url':
    'URL ký sẵn mang chính quyền của principal đã tạo ra nó, và dùng lại được nhiều lần cho tới khi hết hạn. Hạn tối đa 12 giờ nếu tạo từ console, tối đa 7 ngày nếu tạo bằng CLI hoặc SDK với SigV4; nhưng nếu tạo bằng thông tin xác thực tạm thời thì URL hết hạn cùng lúc với thông tin đó. Tài liệu gọi thẳng URL ký sẵn là bearer token.',
  'res-azure-managed-identity':
    'Hai loại: system-assigned (gắn liền vòng đời với tài nguyên Azure, xoá tài nguyên là xoá luôn, không chia sẻ được) và user-assigned (là tài nguyên độc lập, vòng đời riêng, dùng chung được cho nhiều tài nguyên). Microsoft khuyến nghị user-assigned.',
  'res-k8s-security':
    'Trang khái niệm bao phủ: bảo vệ control plane bằng TLS và kiểm soát truy cập API, Secret API, Pod Security Standards, network policy, admission controller và log kiểm toán.',
  'res-k8s-admission-controllers':
    'Admission controller là đoạn mã trong API server chặn request tạo, xoá hoặc sửa tài nguyên — sau xác thực và phân quyền, trước khi ghi xuống. Hai pha: mutating chạy trước và sửa được dữ liệu, validating chạy sau và chỉ kiểm tra. Bất kỳ controller nào từ chối là cả request bị từ chối.',
  'res-k8s-service-accounts':
    'Danh tính phi con người cho ứng dụng và thành phần hệ thống, phạm vi theo namespace. Từ v1.22, token gắn vào pod dưới dạng projected volume qua TokenRequest API nên ngắn hạn và tự xoay; bản cũ dùng token tĩnh dài hạn lưu trong Secret. Tắt việc gắn tự động bằng automountServiceAccountToken: false.',
  'res-k8s-pod-security-standards':
    'Ba mức luỹ tiến: Privileged (không hạn chế, cho workload hệ thống tin cậy), Baseline (chặn các đường leo thang đặc quyền đã biết nhưng vẫn cho cấu hình container thông thường) và Restricted (siết mạnh theo thực hành làm cứng pod hiện hành, đánh đổi bằng tính tương thích).',
  'res-k8s-network-policies':
    'Mặc định mọi pod ở trạng thái không cô lập: mọi kết nối vào và ra đều được phép cho tới khi có NetworkPolicy. Chính sách hoạt động ở tầng 3–4, cộng dồn với nhau, và một kết nối chỉ thành công khi cả chính sách egress của pod nguồn lẫn ingress của pod đích đều cho phép.',
  'res-k8s-secrets':
    'Tài liệu nói rõ Secret mặc định lưu KHÔNG mã hoá trong etcd, và base64 chỉ là mã hoá biểu diễn chứ không phải mã hoá bảo mật. Khuyến nghị: bật Encryption at Rest, đặt luật RBAC theo quyền tối thiểu, giới hạn Secret cho từng container, và cân nhắc dùng kho bí mật bên ngoài.',
  'res-k8s-security-checklist':
    'Các mục: xác thực và phân quyền, bảo mật mạng (CNI, network policy, phơi API, chặn metadata API), bảo mật pod (quyền RBAC, Pod Security Standards, giới hạn tài nguyên, Seccomp, AppArmor, SELinux), log và kiểm toán, vị trí đặt pod, secret, image, và admission controller.',
  'res-msrc-bounty-terms':
    'Bao phủ: tuân thủ nguyên tắc công bố có phối hợp (CVD), Rules of Engagement yêu cầu kiểm thử có trách nhiệm và không truy cập hay rút dữ liệu khách hàng, điều kiện để được xét thưởng, và phần safe harbor pháp lý.',
  'res-k8s-rbac':
    'API RBAC khai báo bốn loại đối tượng: Role (quyền trong một namespace), ClusterRole (quyền toàn cụm), RoleBinding (gán quyền của Role cho chủ thể trong một namespace) và ClusterRoleBinding (gán quyền của ClusterRole trên toàn cụm).',
  'res-exercism':
    'Trang tracks liệt kê 83 ngôn ngữ. Nền tảng ghi rõ hoàn toàn miễn phí, vĩnh viễn.',
  'res-wstg-methodology':
    'Liệt kê các khung phương pháp: chính WSTG cho ứng dụng web và cloud, PTES với bảy giai đoạn, PCI DSS Penetration Testing Guide, Penetration Testing Framework từ trinh sát tới báo cáo, NIST 800-115, và OSSTMM cho cả bảo mật vận hành lẫn vật lý.',
  'res-cs-html5':
    'Bao phủ API giao tiếp (web messaging, WebSocket), cơ chế lưu trữ (local storage, IndexedDB), định vị, web worker, tabnabbing, iframe sandbox, bảo vệ trường biểu mẫu nhạy cảm, service worker, và các header bảo mật HTTP nên đặt.',
  'res-cloudflare-workers-security':
    'Cô lập nhiều lớp: lõi là V8 isolate ngăn mã truy cập bộ nhớ ngoài isolate ngay cả trong cùng tiến trình; bổ sung sandbox ở mức tiến trình bằng namespace của Linux và seccomp; cộng thêm cordon tách workload ít tin cậy khỏi workload tin cậy cao.',
  'res-webauthn-guide':
    'Giải thích hai pha: khi đăng ký, người dùng tạo cặp khoá — khoá riêng nằm lại trên thiết bị, khoá công khai gửi lên máy chủ; khi xác thực, người dùng ký để chứng minh sở hữu khoá riêng, máy chủ dùng khoá công khai đã lưu để kiểm chữ ký trên authenticatorData và hash của clientDataJSON.',
  'res-passkeys-dev':
    'Hai mô hình khởi tạo: bắt đầu đăng nhập bằng cách hỏi tên người dùng rồi dùng conditional mediation để gợi ý passkey ngay trong ô tự điền, có đường lui về cách xác thực cũ nếu chưa có passkey; và sau khi xác thực thành công bằng bất kỳ cách nào thì mời người dùng tạo passkey bằng navigator.credentials.create().',
  'res-linuxcommand':
    'Dạy dòng lệnh Linux và shell script, đọc trực tuyến miễn phí, giấy phép cho phép sao chép nguyên văn. Có sách "The Linux Command Line" của William Shotts đi kèm mở rộng nội dung trang.',
  'res-linux-man-pages':
    'Ghi rõ dự án tài liệu hoá giao diện nhân Linux và thư viện C mà chương trình không gian người dùng sử dụng, đặc biệt là glibc. Có bản trực tuyến, bản phát hành theo phiên bản và bản sách.',
  'res-ms-windows-security-docs':
    'Trang đích chia theo: sách bảo mật Windows 11, bảo mật phần cứng (TPM, Pluton, VBS, Secured-core PC), bảo mật hệ điều hành (trusted boot, BitLocker, baseline, firewall), bảo vệ danh tính (Windows Hello, passkey, FIDO2), bảo mật ứng dụng (App Control, UAC, Windows Sandbox), nền tảng bảo mật và bảo mật cloud.',
  'res-ms-access-tokens':
    'Liệt kê nội dung của một access token: SID của tài khoản người dùng, SID các nhóm, logon SID, danh sách đặc quyền, owner SID, SID nhóm chính, DACL mặc định, nguồn token, token là primary hay impersonation, và danh sách SID hạn chế. Kèm bảng API thao tác token.',
  'res-owasp-threat-model-project':
    'Định nghĩa mô hình hoá mối đe doạ là việc nhận diện, truyền đạt và hiểu các mối đe doạ cùng biện pháp giảm thiểu trong bối cảnh bảo vệ một thứ có giá trị. Trình bày khung bốn câu hỏi và cách áp dụng xuyên suốt vòng đời phát triển.',
  'res-burp-getting-started':
    'Bảy bước: tải và cài Burp Suite, chặn lưu lượng HTTP bằng proxy, sửa request, đặt phạm vi mục tiêu, gửi lại request thủ công bằng Repeater, chạy lần quét đầu tiên (bản Professional), và phần học tiếp theo.',
  'res-chrome-devtools':
    'Tài liệu cho các panel Elements, Console, Network, Sources, Performance, Memory, Application, Security, Lighthouse, Recorder, Coverage, Issues, Layers, Media, Sensors và WebAuthn.',
  'res-cs-abuse-case':
    'Định nghĩa abuse case là cách dùng một tính năng theo hướng người hiện thực không lường trước. Quy trình năm bước: chuẩn bị workshop có mặt cả nghiệp vụ, kỹ thuật và bảo mật; cùng nhau liệt kê tấn công lên tính năng dự kiến; ghi vào bảng; đưa abuse case vào đặc tả hoặc user story; và theo dõi việc hiện thực biện pháp đối phó.',
  'res-cvss31-calculator':
    'Nhận đầu vào theo ba nhóm chỉ số Base, Temporal và Environmental, rồi sinh ra chuỗi vector cùng điểm số tương ứng.',
  'res-disclose-io':
    'Chứa các mẫu chính sách công bố lỗ hổng dạng CC0. Bốn mẫu cốt lõi: VDP, VDP kèm CVD, Safe Harbor và Simple Safe Harbor; cộng mẫu cho chương trình bug bounty, biến thể theo vùng và hướng dẫn vận hành.',
  'res-owasp-llm01':
    'Định nghĩa prompt injection là khi đầu vào của người dùng làm mô hình đổi hành vi ngoài dự kiến, dẫn tới vi phạm quy tắc, sinh nội dung có hại, mở đường truy cập trái phép hoặc ảnh hưởng quyết định quan trọng. Bảy biện pháp giảm thiểu: ràng buộc hành vi bằng system prompt, định nghĩa và kiểm tra định dạng đầu ra, lọc đầu vào và đầu ra, áp quyền tối thiểu, bắt buộc người duyệt cho hành động rủi ro cao, tách và đánh dấu nội dung ngoài, và kiểm thử đối kháng.',
  'res-scstg-tests':
    'Ca kiểm thử xếp theo mười một nhóm control của SCSVS: ARCH, CODE, GOV, AUTH, COMM, CRYPTO, ORACLE, BLOCK, BRIDGE, DEFI và COMP. Mỗi ca có mã riêng dạng SCSTG-TEST-####; hiện tập trung vào Solidity.',
  'res-cvss31-spec':
    'CVSS v3.1 gồm ba nhóm chỉ số: Base (đặc tính nội tại, không đổi theo thời gian), Temporal (đặc tính thay đổi theo thời gian) và Environmental (đặc tính riêng của môi trường người dùng).',
  'res-h1-report-states':
    'Hai nhóm trạng thái. Đang mở: New, Pending Program Review, Triaged, Retesting và Needs More Info. Đã đóng: Resolved, Informative, Duplicate, Not Applicable và Spam. Mỗi trạng thái ảnh hưởng khác nhau tới uy tín của người báo cáo.',
  'res-android-app-components':
    'Trang "App manifest overview". Nêu manifest khai báo thành phần ứng dụng (activity, service, broadcast receiver, content provider), quyền, và yêu cầu tương thích thiết bị; kèm bảng tra toàn bộ phần tử XML hợp lệ.',
  'res-android-data-storage':
    'Trang "Data and file storage overview". Chia bốn lựa chọn: lưu trữ riêng của ứng dụng, lưu trữ dùng chung, preferences và cơ sở dữ liệu; kèm bảng so sánh quyền, khả năng truy cập và tính bền vững, cùng phần Scoped Storage từ Android 10.',
  'res-android-keystore':
    'Trang "Android Keystore system". Nêu bốn tính chất: chống trích xuất khoá, gắn khoá vào TEE hoặc Secure Element, hỗ trợ StrongBox KeyMint, và ràng buộc điều kiện sử dụng khoá.',
  'res-android-network-security-config':
    'Cho phép đổi cấu hình tin cậy chứng chỉ bằng tệp XML mà không sửa mã. Gồm trust anchor tuỳ chỉnh, ghi đè chỉ dùng khi gỡ lỗi, bật/tắt lưu lượng không mã hoá, ghim chứng chỉ, và cấu hình theo từng tên miền.',
  'res-android-security':
    'Trang "Android Security" của Android Open Source Project: tổng quan bảo mật, tính năng bảo mật, kho bản tin bảo mật hằng tháng từ 2015 tới nay cho nhiều dòng thiết bị, phần kiểm thử và thực hành tốt.',
  'res-nmap-reference':
    'Chương 15 "Nmap Reference Guide" trong sách Nmap Network Scanning — bản tham chiếu đầy đủ các tuỳ chọn dòng lệnh kèm ví dụ.',
  'res-nmap-host-discovery':
    'Chương "Host Discovery". Bao phủ TCP SYN/ACK ping, probe UDP, các phương pháp ICMP và SCTP ping; mở đầu bằng nhận định rằng bước đầu của mọi cuộc trinh sát là thu hẹp dải IP lớn về danh sách máy đang hoạt động.',
  'res-openapi-security-scheme':
    'Neo vào mục Security Scheme Object trong đặc tả OpenAPI 3.2.0 — mục khai báo cơ chế bảo mật mà API công bố, nằm trong phần components của tài liệu.',
  'res-semgrep-docs':
    'Giới thiệu cách viết luật quét mã riêng: luật cho phép so khớp mẫu và phân tích luồng dữ liệu để bắt lỗi bảo mật. Dẫn tới bài hướng dẫn tương tác, tài liệu cú pháp mẫu và tài liệu cú pháp luật.',
  'res-gh-security-lab-research':
    'Các bài về nghiên cứu lỗ hổng, bảo mật chuỗi cung ứng và thực hành tốt, ví dụ "6 security settings every GitHub maintainer should enable", xu hướng lỗ hổng, kỹ thuật fuzzing và tài trợ cho bảo mật nguồn mở.',
  'res-owasp-istg':
    'Phương pháp kiểm thử xâm nhập cho lĩnh vực IoT, đồng thời thống nhất thuật ngữ giữa nhà sản xuất, đơn vị vận hành và đội bảo mật. Ba phần: giới thiệu, khung kiểm thử (mô hình thiết bị và mô hình kẻ tấn công), và danh mục ca kiểm thử chia theo thành phần: đơn vị xử lý, bộ nhớ, firmware, dịch vụ trao đổi dữ liệu, giao diện nội bộ và vật lý, kết nối vô tuyến và giao diện người dùng.',
  'res-gcp-iam-overview':
    'Ba yếu tố cốt lõi: principal (danh tính người hoặc hệ thống được cấp quyền), role (tập quyền) và resource (tài nguyên được phép chạm tới). Ba loại vai trò: predefined do Google quản lý, custom do người dùng tự tạo, và basic vốn quá rộng nên không phù hợp cho môi trường thật.',
  'res-aws-sts':
    'Thông tin xác thực tạm thời do AWS STS sinh, sống từ vài phút tới vài giờ, không lưu cùng người dùng mà cấp động khi có yêu cầu. Là nền của IAM role và của liên kết danh tính. Ưu điểm nêu rõ: không phải phân phát khoá dài hạn kèm ứng dụng, và hết hạn là tự mất hiệu lực nên không cần thu hồi.',
  'res-atlassian-domain-verification':
    'Xác nhận quyền sở hữu tên miền để chuyển các tài khoản thuộc tên miền đó thành tài khoản do tổ chức quản lý. Ba cách: tải tệp HTML lên gốc tên miền qua HTTPS, thêm bản ghi DNS TXT, hoặc liên kết với nhà cung cấp danh tính như Google Workspace và Microsoft Entra ID.',
  'res-slack-app-security':
    'Bao phủ cả vòng đời ứng dụng: giữ thông tin xác thực trong biến môi trường hoặc trình quản lý bí mật, cấp quyền tối thiểu, xác minh tính xác thực của request, giới hạn dải IP, xoay token, quy trình phê duyệt của tổ chức, rà soát scope định kỳ, và giảm rủi ro riêng của AI như prompt injection bằng cách kiểm nguồn thông điệp và tắt mặc định việc bung nội dung liên kết.',
  'res-chrome-mv3-overview':
    'MV3 chuyển ngữ cảnh nền sang service worker chỉ chạy khi cần thay cho trang nền thường trực, bỏ hẳn việc thực thi mã tải từ xa vì lý do bảo mật, thay webRequest dạng chặn bằng declarativeNetRequest, và chuyển API sang dạng promise.',
  'res-azure-rbac':
    'Một role assignment gồm ba phần: security principal, role definition và scope. Scope có bốn cấp lồng nhau: management group, subscription, resource group và resource. Quyền hiệu lực là phép cộng của các assignment, nhưng deny assignment chặn trước; công thức quyền là Actions trừ NotActions.',
  'res-aws-shared-responsibility':
    'Chia theo hai vế: AWS lo "an ninh của đám mây" (phần cứng, phần mềm, mạng và cơ sở vật chất chạy dịch vụ), khách hàng lo "an ninh trong đám mây" (hệ điều hành khách, ứng dụng, mã hoá dữ liệu, cấu hình tường lửa). Tỷ lệ này đổi theo loại dịch vụ: EC2 đòi khách hàng nhiều hơn hẳn S3.',
  'res-sysinternals':
    'Bộ tiện ích do Mark Russinovich lập từ 1996, nay thuộc Microsoft, dùng để quản lý và chẩn đoán hệ thống Windows và Linux. Gồm Autoruns, ProcDump, Sysmon, DebugView và nhiều công cụ khác; có dịch vụ Sysinternals Live chạy trực tiếp từ web.',
  'res-first-psirt-framework':
    'Bản 1.1 định nghĩa năm nhóm dịch vụ: quản lý hệ sinh thái các bên liên quan, phát hiện lỗ hổng, phân tích và định đoạt lỗ hổng, khắc phục lỗ hổng, và hoạt động sau sự cố.',
  'res-nist-privacy-framework':
    'Công cụ tự nguyện xây dựng cùng các bên liên quan, giúp tổ chức nhận diện và quản lý rủi ro quyền riêng tư mà vẫn đổi mới được; áp dụng cho tổ chức thuộc mọi loại hình và quy mô.',
  'res-wstg-info-gathering':
    'Mục 4.1 gồm mười bài kiểm thử: trinh sát qua công cụ tìm kiếm, nhận dạng máy chủ web, xem xét metafile, xác định bề mặt tấn công, phân tích nội dung trang, lập bản đồ điểm vào và đường thực thi, nhận dạng framework và ứng dụng, và ghi lại thành phần kiến trúc.',
  'res-owasp-subdomain-takeover':
    'Bài kiểm thử nêu cách xác minh an toàn: liệt kê tên miền phụ, chạy nhận dạng dấu hiệu dịch vụ chưa được nhận, rồi kiểm tra thủ công bản ghi DNS bằng dig và xác nhận tài nguyên vẫn chưa có chủ trên nền tảng nhà cung cấp. Tài liệu nói thẳng: không được nhận (claim) tên miền đó.',
  'res-nmap-service-detection':
    'Giải thích Nmap kết nối tới cổng mở rồi hỏi bằng các probe mà dịch vụ đó hiểu. Cảnh báo rõ không nên tin số phiên bản: bản vá bảo mật thường được lùi về phiên bản cũ, và quản trị viên có thể cố tình sửa chuỗi phiên bản — nên có cả dương tính giả lẫn âm tính giả.',
  'res-h1-report-quality':
    'Một báo cáo cần ba phần bắt buộc: lỗ hổng là gì, các bước tái hiện, và kẻ tấn công gây được tác động gì nếu khai thác. Ảnh chụp màn hình hoặc video minh hoạ là tuỳ chọn.',
  'res-pro-git':
    'Bản 2, gồm 10 chương từ Getting Started, Git Basics, Branching, Distributed Git tới Git Tools và Git Internals, cộng ba phụ lục. Tác giả Scott Chacon và Ben Straub, giấy phép Creative Commons BY-NC-SA 3.0.',
  'res-gitleaks':
    'Quét mã ở hiện tại lẫn trong lịch sử để tìm bí mật như mật khẩu, API key và token; chạy được trên repo git, thư mục hoặc stdin. Cấu hình bằng TOML với luật dạng biểu thức chính quy, ngưỡng entropy và danh sách loại trừ, nạp qua cờ dòng lệnh, biến môi trường hoặc tệp .gitleaks.toml.',
  'res-osv-dev':
    'Cơ sở dữ liệu lỗ hổng nguồn mở phân tán, dùng định dạng OSV của OpenSSF. Bao phủ hàng chục hệ sinh thái: npm, Debian, PyPI, Go, Maven và nhiều registry cùng bản phân phối Linux khác, tra cứu theo đúng phiên bản gói.',
  'res-cert-cvd-guide':
    'Định nghĩa CVD là quá trình thu thập thông tin từ người phát hiện, điều phối việc chia sẻ giữa các bên liên quan, rồi công bố lỗ hổng cùng biện pháp giảm thiểu. Nêu các vai trò người phát hiện, nhà cung cấp và bên điều phối, cùng các giai đoạn phối hợp và nguyên tắc xây dựng năng lực CVD.',
  'res-aws-pentesting-policy':
    'Cho phép khách hàng tự kiểm thử một số dịch vụ như EC2, RDS, CloudFront và Lambda mà không cần xin phép trước. Cấm rõ: dò vùng DNS qua Route 53, tấn công từ chối dịch vụ, chiếm bucket S3 và chiếm tên miền phụ. Hoạt động kiểu red team hoặc dựng hạ tầng điều khiển phải xin phép trước ít nhất hai tuần.',
  'res-owasp-code-review-guide':
    'Sách kỹ thuật cho người chịu trách nhiệm rà soát mã (quản lý, lập trình viên, chuyên gia bảo mật), bàn cả phương pháp tiến hành rà soát lẫn cách nhận diện lỗ hổng theo OWASP Top 10, kèm ví dụ mã an toàn và không an toàn ở nhiều ngôn ngữ.',
  'res-aws-policy-evaluation':
    'Ba bước: xác thực chủ thể, xử lý ngữ cảnh request để xác định chính sách nào áp dụng, rồi đánh giá. Nêu rõ quy tắc kết hợp: chính sách theo danh tính và theo tài nguyên là phép hợp, permissions boundary là phép giao, SCP/RCP cũng là phép giao — và một lệnh từ chối tường minh ở bất kỳ đâu đều thắng mọi lệnh cho phép.',
  'res-codeql-query-help':
    'Ba phần: truy vấn CodeQL là gì và cách nó tìm lỗ hổng, học nền tảng ngôn ngữ QL qua các bài hướng dẫn tương tác, và cách chạy truy vấn khi tự viết phân tích của mình.',
  'res-cwe-362':
    'Tên: "Concurrent Execution using Shared Resource with Improper Synchronization (Race Condition)". Mô tả cửa sổ thời gian trong đó tài nguyên dùng chung có thể bị một luồng khác sửa, phá vỡ tính độc quyền và tính nguyên tử cần có.',
  'res-cwe-367':
    'Tên: "Time-of-check Time-of-use (TOCTOU) Race Condition". Mô tả: sản phẩm kiểm tra trạng thái tài nguyên trước khi dùng, nhưng trạng thái đó có thể đổi giữa lúc kiểm và lúc dùng theo cách làm kết quả kiểm tra không còn đúng.',
  'res-cwe-601':
    'Tên: "URL Redirection to Untrusted Site (Open Redirect)". Mô tả: ứng dụng nhận đầu vào do người dùng kiểm soát chỉ định liên kết tới trang ngoài rồi dùng chính liên kết đó để chuyển hướng.',
  'res-cwe-1336':
    'Tên: "Improper Neutralization of Special Elements Used in a Template Engine". Mô tả engine khuôn mẫu không làm sạch đầu vào chịu ảnh hưởng từ bên ngoài, cho phép kẻ tấn công gọi biểu thức tuỳ ý. Nêu ví dụ Twig và Jinja2.',
  'res-cwe-top25':
    'Bản 2025 dựng trên phân tích 39.080 bản ghi CVE. Là danh sách do cộng đồng xây dựng, xếp hạng các điểm yếu phổ biến và có tác động lớn nhất, dẫn đầu là nhóm an toàn bộ nhớ và nhóm injection.',
  'res-cwe-287':
    'Tên: "Improper Authentication". Mô tả: một chủ thể tuyên bố mình là ai đó, còn sản phẩm không chứng minh, hoặc chứng minh không đủ, rằng tuyên bố đó đúng.',
  'res-cwe-384':
    'Tên: "Session Fixation". Mô tả: xác thực người dùng hoặc tạo phiên mới mà không vô hiệu hoá định danh phiên đang tồn tại, cho kẻ tấn công cơ hội chiếm phiên đã xác thực.',
  'res-cwe-434':
    'Tên: "Unrestricted Upload of File with Dangerous Type". Mô tả: sản phẩm cho phép tải lên loại tệp nguy hiểm được tự động xử lý trong chính môi trường của nó.',
  'res-cwe-200':
    'Tên: "Exposure of Sensitive Information to an Unauthorized Actor". Trang ghi rõ mất tính bí mật là tác động kỹ thuật chứ không phải nguyên nhân gốc, nên mã này hay bị dùng quá tay khi phân loại lỗ hổng.',
  'res-cwe-1321':
    'Tên: "Improperly Controlled Modification of Object Prototype Attributes (Prototype Pollution)". Mô tả: sản phẩm nhận đầu vào chỉ định thuộc tính đối tượng nhưng không hạn chế đủ các thay đổi trỏ tới prototype, khai thác qua thuộc tính đặc biệt như __proto__ hoặc constructor.',
  'res-cwe-22':
    'Tên đầy đủ: "Improper Limitation of a Pathname to a Restricted Directory". Mô tả việc không giới hạn đúng đường dẫn dựng từ đầu vào người dùng, cho phép thoát khỏi thư mục dự kiến bằng chuỗi ../ hoặc đường dẫn tuyệt đối.',
  'res-cwe-78':
    'Tên: "Improper Neutralization of Special Elements used in an OS Command". Mô tả việc dựng lệnh hệ điều hành từ đầu vào bên ngoài mà không trung hoà, hoặc trung hoà sai, các ký tự có thể đổi ý nghĩa của lệnh.',
  'res-cwe-611':
    'Tên: "Improper Restriction of XML External Entity Reference". Xảy ra khi phần mềm xử lý tài liệu XML chứa entity có URI trỏ tới tài nguyên ngoài ngoài dự kiến, dẫn tới đọc tệp trái phép, vượt tường lửa hoặc từ chối dịch vụ.',
  'res-cwe-862':
    'Tên: "Missing Authorization". Mô tả: sản phẩm hoàn toàn không kiểm tra quyền khi một chủ thể cố truy cập tài nguyên hoặc thực hiện hành động.',
  'res-cwe-863':
    'Tên: "Incorrect Authorization". Mô tả: sản phẩm có kiểm tra quyền, nhưng thực hiện việc kiểm tra đó không đúng. Khác hẳn CWE-862 là thiếu hẳn kiểm tra.',
  'res-cwe-89':
    'Tên đầy đủ: "Improper Neutralization of Special Elements used in an SQL Command (SQL Injection)". Mô tả việc dựng câu lệnh SQL từ dữ liệu bên ngoài mà không trung hoà ký tự đặc biệt, cho phép sửa logic truy vấn.',
  'res-cwe-639':
    'Tên: "Authorization Bypass Through User-Controlled Key". Mô tả: chức năng phân quyền không ngăn được người dùng này chạm tới dữ liệu của người dùng khác bằng cách sửa giá trị khoá định danh bản ghi — trong tham số URL, trường ẩn của biểu mẫu hoặc cookie.',
  'res-cwe-918':
    'Tên: "Server-Side Request Forgery (SSRF)". Mô tả: máy chủ nhận URL từ thành phần phía trước và tải nội dung của URL đó, nhưng không bảo đảm đủ rằng request được gửi tới đúng đích dự kiến.',
  'res-cwe-352':
    'Tên: "Cross-Site Request Forgery (CSRF)". Mô tả: ứng dụng không, hoặc không thể, xác minh đủ rằng request có đúng là do chính người gửi chủ ý tạo ra hay không.',
  'res-cwe-502':
    'Tên: "Deserialization of Untrusted Data". Mô tả: sản phẩm deserialize dữ liệu không tin cậy mà không bảo đảm đủ rằng dữ liệu kết quả là hợp lệ, mở đường cho chuỗi gadget tự thực thi trong quá trình deserialize.',
  'res-rfc7489':
    'Cho tổ chức gửi thư công bố chính sách ở mức tên miền và cách xử lý khi xác thực thất bại. Ba chính sách: none (không yêu cầu hành động), quarantine (đánh dấu nghi ngờ) và reject (từ chối ngay trong phiên SMTP).',
  'res-scim-rfc7644':
    'Giao thức trên nền HTTP để quản lý danh tính giữa nhiều miền: chuẩn hoá endpoint, phương thức HTTP và định dạng thông điệp JSON để tạo, đọc, sửa và xoá tài nguyên người dùng và nhóm.',
  'res-rfc1122':
    'Quy định yêu cầu với phần mềm máy chủ Internet ở ba tầng: tầng liên kết, tầng IP và tầng giao vận; đặt chuẩn cho cách hiện thực IP, ICMP, TCP và UDP để bảo đảm tương thích.',
  'res-rfc8259':
    'Định nghĩa JSON là định dạng trao đổi dữ liệu nhẹ, dạng văn bản, độc lập ngôn ngữ. Nêu rõ các chỗ gây lệch giữa các hiện thực: tên thành viên trùng nhau cho hành vi khó đoán, độ chính xác số khác nhau, và cặp surrogate Unicode sai có thể gây lỗi nặng. Khuyến nghị dùng UTF-8 khi truyền qua mạng.',
  'res-cwe-79':
    'Tên đầy đủ: "Improper Neutralization of Input During Web Page Generation (Cross-site Scripting)". Mô tả: sản phẩm không trung hoà, hoặc trung hoà sai, dữ liệu do người dùng kiểm soát trước khi đưa vào trang web phục vụ cho người dùng khác.',
  'res-rfc7009':
    'Định nghĩa cơ chế để client báo cho máy chủ uỷ quyền rằng token đã cấp không còn cần nữa. Yêu cầu thu hồi làm vô hiệu chính token đó và, nếu áp dụng được, cả các token khác cùng một lần cấp quyền.',
  'res-rfc8252':
    'Khuyến nghị ứng dụng gốc chỉ thực hiện yêu cầu uỷ quyền OAuth qua user-agent bên ngoài, chủ yếu là trình duyệt của người dùng, thay vì nhúng luồng đăng nhập trong ứng dụng. Phản hồi nhận lại qua URI scheme riêng, HTTPS URI đã xác nhận sở hữu, hoặc redirect về loopback.',
  'res-rfc8446':
    'TLS 1.3 bỏ các thuật toán cũ, mã hoá gần như toàn bộ thông điệp bắt tay, thay trao khoá tĩnh bằng phương pháp có forward secrecy, dùng HKDF để dẫn xuất khoá, thêm 0-RTT, và thống nhất cơ chế nối lại phiên bằng PSK.',
  'res-rfc1035':
    'Đặc tả chi tiết hệ thống tên miền và giao thức của nó: định dạng thông điệp, định nghĩa bản ghi tài nguyên, hoạt động của máy chủ tên và cách hiện thực bộ phân giải.',
  'res-rfc7208':
    'Cho quản trị tên miền công bố máy chủ nào được phép gửi thư cho tên miền đó, qua bản ghi DNS TXT với các cơ chế mx, a, ip4, ip6, include và all.',
  'res-rfc6749':
    'Định nghĩa bốn vai trò: resource owner, resource server, client và authorization server; cùng bốn loại cấp quyền: authorization code, implicit, resource owner password credentials và client credentials.',
  'res-rfc7636':
    'Giải quyết trường hợp kẻ tấn công chặn được mã uỷ quyền trên đường truyền không được TLS bảo vệ. Vì code verifier sinh động và chỉ đi qua kênh TLS, kẻ chặn được mã cũng không đổi được nó lấy access token.',
  'res-rfc6750':
    'Quy định ba cách gửi bearer token: header Authorization, tham số trong thân dạng form, hoặc tham số truy vấn trên URI. Nhấn mạnh bất kỳ ai cầm được token đều dùng được nó mà không phải chứng minh sở hữu khoá, nên bắt buộc phải có TLS.',
  'res-rfc7517':
    'Định nghĩa JWK là cấu trúc dữ liệu JSON biểu diễn một khoá mật mã, và JWK Set là tập hợp các khoá đó — nền của cơ chế công bố khoá công khai.',
  'res-rfc8414':
    'Định nghĩa định dạng metadata JSON để client OAuth 2.0 khám phá thông tin của máy chủ uỷ quyền, gồm vị trí endpoint và năng lực hỗ trợ. Công bố tại đường dẫn /.well-known/oauth-authorization-server dẫn xuất từ issuer.',
  'res-mdn-websockets':
    'Mô tả kênh hai chiều không cần hỏi vòng, và quá trình bắt tay dùng các header Sec-WebSocket-Key, -Accept, -Version, -Protocol và -Extensions: client gửi một nonce, máy chủ tính giá trị accept từ nonce đó để nâng cấp từ HTTP lên kết nối WebSocket.',
  'res-mdn-wasm':
    'Ngôn ngữ mức thấp dạng nhị phân gọn, chạy trong trình duyệt với tốc độ gần bản địa, là đích biên dịch cho C/C++, C# và Rust. Thiết kế để chạy song song với JavaScript: dùng WebAssembly JavaScript API để nạp module và chia sẻ chức năng giữa hai bên.',
  'res-rfc9110':
    'Định nghĩa kiến trúc tổng thể của HTTP, thuật ngữ chung và các khía cạnh dùng chung cho mọi phiên bản. Thay thế chín RFC cũ: 2818, 7231, 7232, 7233, 7235, 7538, 7615, 7694 và một phần của 7230.',
  'res-rfc6265':
    'Định nghĩa hai trường header Cookie và Set-Cookie, cho phép máy chủ lưu trạng thái ở phía trình duyệt để duy trì phiên trên nền HTTP vốn không có trạng thái.',
  'res-rfc7519':
    'Định nghĩa JWT là cách biểu diễn claim gọn và an toàn với URL để truyền giữa hai bên. Đăng ký bảy claim chuẩn: iss, sub, aud, exp, nbf, iat và jti.',
  'res-mdn-csp':
    'Bốn nhóm công dụng: kiểm soát nạp tài nguyên bằng các fetch directive (script-src, style-src, img-src, default-src) với nguồn dạng "self", tên host, nonce hoặc hash; chống clickjacking bằng frame-ancestors; nâng cấp request bằng upgrade-insecure-requests; và bắt buộc Trusted Types. Có phần về strict CSP, chặn eval(), từ khoá strict-dynamic và chế độ report-only.',
  'res-mdn-storage':
    'localStorage phân vùng theo origin và sống qua cả lần đóng mở trình duyệt; sessionStorage phân vùng theo cả tab lẫn origin và bị xoá khi đóng tab.',
  'res-mdn-http':
    'Tham chiếu đầy đủ về header (Content-Type, Accept, Authorization…), phương thức (GET, POST, PUT, DELETE…) và mã trạng thái từ 1xx tới 5xx, kèm hướng dẫn về caching, xác thực, cookie, nén, CORS và CSP.',
  'res-mdn-security':
    'Bốn mục chính: Attacks (clickjacking, CSRF, XSS, MITM, lừa đảo), Defenses (HTTPS, CSP, kiểm tra đầu vào, same-origin policy), Authentication (mật khẩu, passkey, danh tính liên kết, quản lý phiên) và Threat modeling.',
  'res-mdn-serviceworker':
    'Service worker là tệp JavaScript đóng vai proxy giữa ứng dụng, trình duyệt và mạng, chặn được request và cache tài nguyên. Ràng buộc bảo mật: chỉ chạy trong ngữ cảnh an toàn (HTTPS, riêng http://localhost được coi là an toàn), không truy cập DOM, không dùng API đồng bộ, và không import module động.',
  'res-ps-essential-skills':
    'Dạy cách thích ứng kỹ thuật đã học khi gặp trở ngại trên trang thật: làm rối payload bằng nhiều cách mã hoá để vượt bộ lọc, dùng Burp Scanner cho phần lặp lại bên cạnh kiểm thử tay, và luyện nhận diện lỗ hổng khi chưa biết trước bằng nhóm lab bí ẩn.',
  'res-mdn-sop':
    'Origin được định nghĩa bằng bộ ba scheme, host và port; phải khớp cả ba mới là cùng nguồn. Nêu các ngoại lệ: about:blank và javascript: kế thừa origin của tài liệu chứa nó, file:/// bị coi là origin mờ, document.domain (đã lỗi thời), và các thao tác cross-origin vẫn được phép là ghi, nhúng và giao tiếp qua postMessage.',
  'res-mdn-cors':
    'Với request đơn giản, trình duyệt gửi header Origin và máy chủ trả Access-Control-Allow-Origin. Với request phức tạp, trình duyệt gửi preflight OPTIONS kèm Access-Control-Request-Method và -Headers. Nêu rõ với request có credential thì máy chủ phải trả Access-Control-Allow-Credentials: true và không được dùng ký tự đại diện * cho Allow-Origin.',
  'res-mdn-cookies':
    'Mô tả các thuộc tính Expires, Max-Age, Secure, HttpOnly, Domain, Path, SameSite (Strict/Lax/None) và các tiền tố tên cookie __Secure- và __Host- vốn áp ràng buộc lên chính các thuộc tính đó.',
  'res-mdn-postmessage':
    'Nói thẳng hai điều: luôn chỉ định targetOrigin cụ thể chứ không dùng *, và luôn kiểm tra event.origin khi nhận. Bỏ qua điều thứ nhất cho phép trang độc chặn dữ liệu bằng cách đổi vị trí cửa sổ; bỏ qua điều thứ hai mở đường cho tấn công chèn script.',
  'res-ps-xxe':
    'Bao phủ cách XXE phát sinh khi ứng dụng xử lý XML, kỹ thuật đọc tệp và SSRF qua XML, biến thể mù khi phản hồi không trả dữ liệu về, bề mặt ẩn qua XInclude và tệp tải lên, và phòng ngừa bằng cách tắt các tính năng phân tích XML nguy hiểm.',
  'res-ps-ssti':
    'Định nghĩa SSTI là việc kẻ tấn công dùng chính cú pháp khuôn mẫu để chèn payload rồi được thực thi ở phía máy chủ. Bao phủ cách phát hiện theo từng ngữ cảnh, cách xác định engine đang dùng, kỹ thuật khai thác, và phòng ngừa bằng engine không có logic hoặc chạy trong sandbox.',
  'res-ps-nosqli':
    'Hai nhóm: injection cú pháp (phá được cú pháp truy vấn để chèn payload) và injection toán tử (thao túng truy vấn qua các toán tử). Ví dụ chủ yếu dùng MongoDB.',
  'res-ps-websockets':
    'Bao phủ cách chặn, phát lại và sửa thông điệp WebSocket cùng quá trình bắt tay bằng Burp Suite, các lớp lỗi hay gặp như injection và CSRF trên WebSocket, và khuyến nghị dùng kết nối mã hoá cùng coi mọi dữ liệu nhận được là không tin cậy.',
  'res-ps-clickjacking':
    'Giải thích kỹ thuật phủ iframe trong suốt lên trang mồi, các biến thể như biểu mẫu điền sẵn, kết hợp với DOM XSS và tấn công nhiều bước. Phòng thủ: script chống đóng khung ở phía client, header X-Frame-Options, và directive frame-ancestors của CSP.',
  'res-ps-cache-deception':
    'Giải thích lỗi phát sinh từ khác biệt cách hiểu giữa cache và máy chủ gốc. Ba hướng tấn công: quy tắc cache theo phần mở rộng tĩnh, theo thư mục tĩnh, và theo tên tệp; kèm cách phát hiện và phòng ngừa.',
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
