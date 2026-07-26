import type { KnowledgeDomain } from '@/schemas/entities';

/**
 * 24 domain kiến thức (A–X). Xem KNOWLEDGE_TAXONOMY.md §3.
 *
 * Bug Bounty KHÔNG đồng nhất với Web Security: Web chỉ là domain D.
 */
export const domains: KnowledgeDomain[] = [
  {
    id: 'dom-policy',
    code: 'A',
    titleVi: 'Định hướng, pháp lý, đạo đức và vận hành Bug Bounty',
    descriptionVi:
      'Nền tảng bắt buộc trước mọi kỹ thuật: chương trình bug bounty và VDP hoạt động ra sao, đọc chính sách thế nào, khi nào phải dừng, tự vận hành công việc nghiên cứu ra sao, và viết báo cáo thế nào để được xử lý.',
    order: 1,
    status: 'core',
    trackIds: [
      'trk-policy-programs',
      'trk-policy-scope',
      'trk-policy-operations',
      'trk-policy-reporting',
    ],
    prerequisiteDomainIds: [],
    safetyNoteVi:
      'Đây là domain quyết định tính hợp pháp của mọi việc bạn làm sau này. Không bắt đầu kiểm thử bất kỳ tài sản nào khi chưa đọc hết chính sách chương trình và chưa xác định được safe harbor có áp dụng hay không.',
    architectureVi: [
      'Bên đặt chương trình (tổ chức) — nền tảng trung gian — người nghiên cứu.',
      'Chính sách chương trình là hợp đồng vận hành: phạm vi, hành vi bị cấm, quy định dữ liệu, điều khoản công bố.',
      'Vòng đời báo cáo: submit → triage → xác nhận → khắc phục → retest → (tuỳ chọn) công bố.',
    ],
    attackSurfaceVi: [
      'Không có bề mặt kỹ thuật; "bề mặt" ở đây là khoảng cách giữa điều chính sách cho phép và điều người nghiên cứu thực sự làm.',
      'Rủi ro lớn nhất là hiểu sai phạm vi, dẫn tới chạm vào tài sản ngoài scope hoặc dữ liệu người thật.',
    ],
    trustBoundariesVi: [
      'Ranh giới giữa tài sản in-scope và out-of-scope.',
      'Ranh giới giữa tài khoản thử nghiệm do bạn tạo và tài khoản của người dùng thật.',
      'Ranh giới giữa hạ tầng của tổ chức và hạ tầng của nhà cung cấp bên thứ ba.',
    ],
    careerNoteVi:
      'Kỹ năng đọc chính sách và viết báo cáo là thứ phân biệt người được triager tin tưởng với người bị đóng report. Đây là phần nên đầu tư sớm nhất và không bao giờ lỗi thời.',
    standardIds: ['std-cvss4', 'std-bugcrowd-vrt', 'std-cwe', 'std-nist-800-115'],
    toolIds: [],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-foundations',
    code: 'B',
    titleVi: 'Kiến thức nền dùng chung',
    descriptionVi:
      'Hệ điều hành, mạng máy tính, web và trình duyệt, lập trình và dữ liệu, Git và SDLC, các mô hình bảo mật. Đây là phần khiến bạn hiểu vì sao một lỗi xảy ra thay vì chỉ nhận ra dấu hiệu của nó.',
    order: 2,
    status: 'core',
    trackIds: [
      'trk-found-os',
      'trk-found-network',
      'trk-found-web',
      'trk-found-programming',
      'trk-found-git-sdlc',
      'trk-found-security-models',
    ],
    prerequisiteDomainIds: ['dom-policy'],
    safetyNoteVi:
      'Thực hành phần nền tảng trên máy hoặc máy ảo của chính bạn. Lệnh mạng như tra cứu DNS chỉ nên chạy với tên miền tài liệu hoặc tài sản bạn sở hữu.',
    architectureVi: [
      'Tầng phần cứng → hệ điều hành → tiến trình và quyền → dịch vụ mạng → ứng dụng.',
      'Chuỗi tải một trang web: phân giải DNS → bắt tay TCP → bắt tay TLS → HTTP request → xử lý phía máy chủ → render trong trình duyệt.',
      'Vòng đời mã nguồn: viết → commit → build → kiểm thử → đóng gói → triển khai.',
    ],
    attackSurfaceVi: [
      'Bất kỳ nơi nào dữ liệu chuyển từ vùng ít tin cậy sang vùng tin cậy hơn.',
      'Ranh giới giữa mã và dữ liệu: chuỗi, template, truy vấn, đường dẫn, lệnh.',
      'Ranh giới giữa các định dạng: encoding, serialization, nén, Unicode.',
    ],
    trustBoundariesVi: [
      'Người dùng ↔ trình duyệt ↔ máy chủ.',
      'Tiến trình quyền thấp ↔ tiến trình quyền cao.',
      'Mã của bạn ↔ thư viện bên thứ ba.',
    ],
    careerNoteVi:
      'Người có nền tảng vững chuyển lĩnh vực rất nhanh; người thiếu nền tảng bị mắc kẹt ở việc lặp lại một vài kỹ thuật đã biết. Nếu thấy nản, hãy học nền tảng song song với một lĩnh vực ứng dụng cụ thể.',
    standardIds: ['std-cwe', 'std-owasp-asvs'],
    toolIds: ['tool-devtools', 'tool-curl', 'tool-git', 'tool-wireshark'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-methodology',
    code: 'C',
    titleVi: 'Phương pháp kiểm thử và quản lý bề mặt tấn công',
    descriptionVi:
      'Cách biến một chính sách chương trình thành kế hoạch kiểm thử: lập bản đồ tài sản trong phạm vi, xác định vai trò và dữ liệu, chọn checklist, thực hiện phép thử tối thiểu, loại bỏ dương tính giả và ghi bằng chứng.',
    order: 3,
    status: 'core',
    trackIds: ['trk-method-recon', 'trk-method-workflow', 'trk-method-tools'],
    prerequisiteDomainIds: ['dom-policy', 'dom-foundations'],
    safetyNoteVi:
      'Toàn bộ nội dung recon ở đây là recon trong phạm vi đã được cho phép hoặc trong lab. Phần mềm này không nhận mục tiêu và không chạy quét; mọi ví dụ đều thực hiện thủ công trên tài sản bạn có quyền.',
    architectureVi: [
      'Asset inventory do chương trình cung cấp là điểm bắt đầu, không phải kết quả quét.',
      'Từ asset → dịch vụ → tính năng → vai trò → dữ liệu → luồng nghiệp vụ.',
      'Kết quả recon là một sơ đồ hệ thống có chú thích trust boundary, không phải một danh sách hostname.',
    ],
    attackSurfaceVi: [
      'Tài sản được liệt kê tường minh trong chính sách.',
      'Tính năng ít người dùng: import/export, quản trị, tích hợp, webhook.',
      'Ranh giới giữa các vai trò và giữa các tổ chức trong hệ thống đa người thuê.',
    ],
    trustBoundariesVi: [
      'Giữa dữ liệu do người dùng kiểm soát và logic phía máy chủ.',
      'Giữa các vai trò trong cùng một tổ chức.',
      'Giữa hệ thống chính và tích hợp bên thứ ba.',
    ],
    careerNoteVi:
      'Phương pháp có kỷ luật quan trọng hơn việc biết nhiều kỹ thuật. Người có quy trình lặp lại được sẽ tìm thấy vấn đề ổn định hơn người chỉ thử ngẫu nhiên.',
    standardIds: ['std-owasp-wstg', 'std-nist-800-115', 'std-owasp-asvs'],
    toolIds: ['tool-burp', 'tool-devtools', 'tool-curl', 'tool-nmap'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-web',
    code: 'D',
    titleVi: 'Web application',
    descriptionVi:
      'Bề mặt web đầy đủ: kiến trúc, xác thực, phân quyền, injection, phía trình duyệt, cross-origin, tệp và dữ liệu, serialization, logic nghiệp vụ và các chủ đề nâng cao.',
    order: 4,
    status: 'core',
    trackIds: [
      'trk-web-architecture',
      'trk-web-authn',
      'trk-web-authz',
      'trk-web-injection',
      'trk-web-clientside',
      'trk-web-crossorigin',
      'trk-web-files',
      'trk-web-serialization',
      'trk-web-logic',
      'trk-web-advanced',
    ],
    prerequisiteDomainIds: ['dom-foundations', 'dom-methodology'],
    safetyNoteVi:
      'Chỉ thử trên lab được thiết kế để thực hành hoặc tài sản web nằm rõ trong phạm vi một chương trình còn hiệu lực. Dừng ngay khi phép thử bắt đầu chạm tới dữ liệu của người dùng khác.',
    architectureVi: [
      'Trình duyệt → CDN → reverse proxy → API gateway → dịch vụ ứng dụng → cơ sở dữ liệu.',
      'Thành phần bất đồng bộ: hàng đợi, job nền, webhook, dịch vụ tìm kiếm, object storage.',
      'Kiến trúc render: server-side rendering, single-page application, hoặc lai giữa hai kiểu.',
    ],
    attackSurfaceVi: [
      'Mọi tham số đi vào máy chủ: đường dẫn, query, header, cookie, thân request, tệp tải lên.',
      'Ranh giới phân quyền giữa các đối tượng và giữa các vai trò.',
      'Các lớp trung gian: cache, proxy, CDN — nơi hai bên hiểu cùng một request theo hai cách khác nhau.',
      'Mã chạy trong trình duyệt: DOM, storage, service worker, postMessage.',
    ],
    trustBoundariesVi: [
      'Trình duyệt ↔ máy chủ.',
      'Origin này ↔ origin khác (same-origin policy, CORS).',
      'Người dùng A ↔ người dùng B trong cùng ứng dụng.',
      'Tầng cache/proxy ↔ tầng ứng dụng.',
    ],
    careerNoteVi:
      'Web là điểm vào phổ biến nhất vì có nhiều lab công khai và chương trình nhận báo cáo. Nhưng đừng dừng ở đây: người chỉ biết web sẽ bỏ lỡ phần lớn bản đồ.',
    standardIds: ['std-owasp-wstg', 'std-owasp-asvs', 'std-cwe', 'std-capec'],
    toolIds: ['tool-burp', 'tool-devtools', 'tool-curl'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-api',
    code: 'E',
    titleVi: 'API',
    descriptionVi:
      'REST, GraphQL, gRPC, SOAP, WebSocket và webhook: phân quyền ở mức đối tượng và thuộc tính, xác thực, lạm dụng tài nguyên, và quy trình kiểm thử theo schema.',
    order: 5,
    status: 'core',
    trackIds: [
      'trk-api-fundamentals',
      'trk-api-authz',
      'trk-api-authn',
      'trk-api-abuse',
      'trk-api-workflow',
    ],
    prerequisiteDomainIds: ['dom-web'],
    safetyNoteVi:
      'Kiểm thử API dễ vô tình tạo khối lượng lớn request hoặc chạm dữ liệu thật. Tự đặt giới hạn tốc độ, dùng tài khoản thử nghiệm của chính bạn và dừng khi thấy dấu hiệu ảnh hưởng dịch vụ.',
    architectureVi: [
      'Client (web, mobile, đối tác) → API gateway → dịch vụ → kho dữ liệu.',
      'Schema (OpenAPI, GraphQL SDL, protobuf) mô tả hợp đồng; hợp đồng và thực thi có thể lệch nhau.',
      'Nhiều thế hệ API cùng tồn tại: bản cũ, bản nội bộ, bản dành riêng cho mobile.',
    ],
    attackSurfaceVi: [
      'Định danh đối tượng trong đường dẫn và thân request.',
      'Thuộc tính có thể ghi mà client lẽ ra không được đặt.',
      'Endpoint theo lô, xuất báo cáo, truy vấn lồng sâu.',
      'API cũ hoặc không có tài liệu vẫn còn chạy.',
    ],
    trustBoundariesVi: [
      'Client ↔ API: mọi kiểm tra phía client đều không đáng tin.',
      'Người thuê này ↔ người thuê khác.',
      'API nội bộ ↔ API công khai khi cùng chạy sau một gateway.',
    ],
    careerNoteVi:
      'Phân quyền ở mức đối tượng là nhóm vấn đề API xuất hiện thường xuyên nhất và cũng dễ mô tả tác động rõ ràng nhất trong báo cáo.',
    standardIds: ['std-owasp-api-top10', 'std-openapi', 'std-graphql', 'std-owasp-asvs'],
    toolIds: ['tool-burp', 'tool-curl', 'tool-api-client'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-identity',
    code: 'F',
    titleVi: 'Identity, SSO và enterprise access',
    descriptionVi:
      'OAuth, OpenID Connect, SAML, SCIM, passkey, liên kết tài khoản, tổ chức và người thuê, cấp phát tức thời, ánh xạ vai trò và đăng xuất liên hệ thống. Bề mặt này dùng chung cho web, mobile, API và SaaS.',
    order: 6,
    status: 'core',
    trackIds: ['trk-identity-protocols', 'trk-identity-enterprise'],
    prerequisiteDomainIds: ['dom-web', 'dom-api'],
    safetyNoteVi:
      'Luồng danh tính thường chạm tới tài khoản thật và nhà cung cấp bên thứ ba. Chỉ dùng tài khoản do bạn tạo, và không thử chiếm liên kết tài khoản của người khác kể cả khi kỹ thuật cho phép.',
    architectureVi: [
      'Identity provider ↔ service provider, nối với nhau bằng token hoặc assertion có chữ ký.',
      'Người thuê (tenant) và tổ chức là đơn vị phân quyền cấp trên người dùng.',
      'Vòng đời tài khoản: mời → cấp phát → ánh xạ vai trò → đồng bộ nhóm → thu hồi.',
    ],
    attackSurfaceVi: [
      'Redirect URI, state, nonce và mã uỷ quyền trong luồng OAuth.',
      'Kiểm tra chữ ký, issuer, audience và thời hạn của token.',
      'Liên kết tài khoản dựa trên email chưa xác minh.',
      'Xác nhận quyền sở hữu tên miền và tài khoản khách trong ngữ cảnh B2B.',
    ],
    trustBoundariesVi: [
      'Người dùng ↔ identity provider ↔ ứng dụng.',
      'Tổ chức này ↔ tổ chức khác trên cùng nền tảng.',
      'Danh tính đã xác minh ↔ danh tính chỉ mới khai báo.',
    ],
    careerNoteVi:
      'Đây là bề mặt bị đánh giá thấp nhưng tác động thường rất rõ ràng, và kiến thức dùng lại được ở mọi domain khác.',
    standardIds: ['std-rfc9700', 'std-oidc-core', 'std-webauthn', 'std-owasp-asvs'],
    toolIds: ['tool-burp', 'tool-devtools'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-mobile',
    code: 'G',
    titleVi: 'Mobile',
    descriptionVi:
      'Android, iOS và ứng dụng đa nền tảng: kiến trúc ứng dụng, thành phần nền tảng, lưu trữ cục bộ, deep link, giao tiếp với backend, và môi trường kiểm thử.',
    order: 7,
    status: 'core',
    trackIds: [
      'trk-mobile-architecture',
      'trk-mobile-android',
      'trk-mobile-ios',
      'trk-mobile-network',
      'trk-mobile-env',
    ],
    prerequisiteDomainIds: ['dom-web', 'dom-api'],
    safetyNoteVi:
      'Chỉ phân tích ứng dụng nằm trong phạm vi chương trình hoặc ứng dụng lab được thiết kế để thực hành, trên thiết bị hoặc máy ảo thuộc quyền sở hữu của bạn. Không hướng dẫn can thiệp ứng dụng của người khác.',
    architectureVi: [
      'Ứng dụng (native, hybrid, Flutter, React Native) → SDK bên thứ ba → backend API.',
      'Thành phần nền tảng: lưu trữ an toàn, thông báo đẩy, deep link, tiến trình nền.',
      'Kênh cập nhật và cấu hình từ xa có thể thay đổi hành vi ứng dụng sau khi cài.',
    ],
    attackSurfaceVi: [
      'Dữ liệu lưu trên thiết bị: cơ sở dữ liệu cục bộ, tệp cấu hình, keystore/keychain, log, clipboard.',
      'Điểm vào liên tiến trình: intent, URL scheme, universal link, content provider, extension.',
      'Nội dung web nhúng trong WebView.',
      'Endpoint chỉ dành cho mobile, thường ít được kiểm thử hơn web.',
    ],
    trustBoundariesVi: [
      'Ứng dụng ↔ hệ điều hành và các ứng dụng khác trên cùng thiết bị.',
      'Mã native ↔ nội dung web trong WebView.',
      'Thiết bị ↔ backend: mọi kiểm tra phía thiết bị đều có thể bị bỏ qua.',
    ],
    careerNoteVi:
      'Nhiều vấn đề mobile có giá trị nhất thực ra nằm ở backend mà ứng dụng gọi tới. Kỹ năng API là điều kiện cần để làm mobile hiệu quả.',
    standardIds: ['std-owasp-masvs', 'std-owasp-mastg'],
    toolIds: ['tool-frida', 'tool-burp', 'tool-android-emulator', 'tool-adb'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-cloud',
    code: 'H',
    titleVi: 'Cloud',
    descriptionVi:
      'Mô hình trách nhiệm chung, IAM, lưu trữ, tính toán, serverless, quản lý bí mật và ghi log trên AWS, Azure và Google Cloud; cùng cách phân biệt cấu hình sai của khách hàng với lỗ hổng sản phẩm.',
    order: 8,
    status: 'core',
    trackIds: [
      'trk-cloud-fundamentals',
      'trk-cloud-aws',
      'trk-cloud-azure',
      'trk-cloud-gcp',
      'trk-cloud-attacks',
    ],
    prerequisiteDomainIds: ['dom-foundations', 'dom-network', 'dom-api'],
    safetyNoteVi:
      'Mọi lab cloud phải chạy trên tài khoản riêng do bạn tạo cho việc học, không dùng tài khoản của công ty hay của khách hàng. Luôn đặt cảnh báo chi phí và dọn sạch tài nguyên sau khi học xong.',
    architectureVi: [
      'Phân cấp tài nguyên: tổ chức → thư mục/nhóm → tài khoản/dự án/subscription → tài nguyên.',
      'Danh tính: người dùng, vai trò, service account, thông tin xác thực tạm thời.',
      'Mặt phẳng điều khiển (API quản trị) tách khỏi mặt phẳng dữ liệu (ứng dụng chạy thật).',
    ],
    attackSurfaceVi: [
      'Chính sách IAM quá rộng và quan hệ tin cậy giữa các tài khoản.',
      'Lưu trữ đối tượng công khai và URL ký sẵn.',
      'Dịch vụ metadata của máy ảo và container.',
      'Bí mật nằm trong biến môi trường, image, hoặc log.',
      'Tin cậy từ CI/CD tới cloud thông qua OIDC.',
    ],
    trustBoundariesVi: [
      'Nhà cung cấp cloud ↔ khách hàng (mô hình trách nhiệm chung).',
      'Tài khoản này ↔ tài khoản khác.',
      'Workload ↔ danh tính mà workload được cấp.',
    ],
    careerNoteVi:
      'Phần lớn phát hiện cloud trong bug bounty là cấu hình sai phía khách hàng, mà nhiều chương trình loại trừ. Đọc chính sách trước khi bỏ thời gian là kỹ năng quan trọng nhất ở domain này.',
    standardIds: ['std-nist-ssdf', 'std-owasp-asvs'],
    toolIds: ['tool-curl', 'tool-docker'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-container',
    code: 'I',
    titleVi: 'Container, Kubernetes và cloud-native',
    descriptionVi:
      'Image, registry, runtime, quyền của container, cụm Kubernetes, RBAC, network policy, admission control, quản lý bí mật và cô lập đa người thuê.',
    order: 9,
    status: 'advanced',
    trackIds: ['trk-container-basics', 'trk-k8s'],
    prerequisiteDomainIds: ['dom-cloud', 'dom-network'],
    safetyNoteVi:
      'Chỉ thực hành trên cụm chạy cục bộ hoặc trên tài khoản cloud riêng của bạn. Không thử nghiệm trên cụm dùng chung hoặc cụm đang phục vụ người dùng thật.',
    architectureVi: [
      'Dockerfile → image nhiều lớp → registry → runtime trên node.',
      'Kubernetes: API server, etcd, scheduler, controller, kubelet trên từng node.',
      'Đối tượng: namespace, pod, service account, secret, ingress, network policy.',
    ],
    attackSurfaceVi: [
      'Container chạy đặc quyền, mount socket runtime, mount thư mục nhạy cảm của host.',
      'Quyền RBAC rộng gắn với service account của pod.',
      'Bí mật nằm trong lớp image hoặc biến môi trường.',
      'Thiếu network policy khiến pod nói chuyện được với mọi pod khác.',
    ],
    trustBoundariesVi: [
      'Container ↔ host.',
      'Namespace ↔ namespace.',
      'Người thuê này ↔ người thuê khác trên cụm dùng chung.',
    ],
    careerNoteVi:
      'Cloud-native là nơi kiến thức mạng, cloud và chuỗi cung ứng gặp nhau; rất hợp với người muốn đi sâu về hạ tầng.',
    standardIds: ['std-slsa', 'std-nist-ssdf'],
    toolIds: ['tool-docker', 'tool-vm'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-network',
    code: 'J',
    titleVi: 'Network và infrastructure',
    descriptionVi:
      'Phạm vi mạng, dịch vụ phổ biến, các nhóm lỗi hạ tầng và cách đọc kết quả công cụ mạng mà không nhầm banner phiên bản với lỗ hổng.',
    order: 10,
    status: 'core',
    trackIds: ['trk-net-scope', 'trk-net-services', 'trk-net-flaws', 'trk-net-tools'],
    prerequisiteDomainIds: ['dom-foundations', 'dom-methodology'],
    safetyNoteVi:
      'Không bao giờ quét dải địa chỉ mà bạn không sở hữu hoặc không được cho phép rõ ràng. Phần mềm này không có chức năng quét; mọi ví dụ thực hiện trên lab mạng cục bộ.',
    architectureVi: [
      'Biên ngoài: DNS, CDN, load balancer, firewall.',
      'Vùng dịch vụ: web, API, cơ sở dữ liệu, thư mục người dùng, giao diện quản trị.',
      'Truy cập từ xa: VPN, SSH, RDP, cổng quản trị thiết bị.',
    ],
    attackSurfaceVi: [
      'Dịch vụ phơi ra Internet ngoài dự định.',
      'Giao diện quản trị và giám sát không nên truy cập được từ ngoài.',
      'Cấu hình TLS và DNS.',
      'Ranh giới phân đoạn mạng bị vượt qua.',
    ],
    trustBoundariesVi: [
      'Mạng ngoài ↔ mạng nội bộ.',
      'Vùng DMZ ↔ vùng nội bộ.',
      'Thiết bị người dùng ↔ hạ tầng doanh nghiệp.',
    ],
    careerNoteVi:
      'Nhiều chương trình giới hạn kiểm thử mạng nghiêm ngặt hơn web. Đọc kỹ giới hạn tốc độ và khung giờ được phép trước khi làm bất cứ điều gì.',
    standardIds: ['std-nist-800-115', 'std-cwe'],
    toolIds: ['tool-nmap', 'tool-wireshark', 'tool-openssl', 'tool-dig'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-desktop',
    code: 'K',
    titleVi: 'Desktop, thick client và native application',
    descriptionVi:
      'Ứng dụng chạy trên máy người dùng: Windows, Linux, macOS, Electron, .NET, Java desktop và C/C++ native — cùng các nhóm lỗi về lưu trữ cục bộ, IPC, cập nhật và ranh giới đặc quyền.',
    order: 11,
    status: 'advanced',
    trackIds: ['trk-desktop-architecture', 'trk-desktop-flaws', 'trk-desktop-method'],
    prerequisiteDomainIds: ['dom-foundations'],
    safetyNoteVi:
      'Chỉ phân tích phần mềm mà giấy phép cho phép và nằm trong phạm vi được cho phép, trong máy ảo tách biệt. Không can thiệp vào phần mềm đang chạy trên máy người khác.',
    architectureVi: [
      'Tiến trình giao diện ↔ dịch vụ đặc quyền chạy nền ↔ backend từ xa.',
      'Cơ chế IPC: named pipe, socket cục bộ, D-Bus, XPC, COM.',
      'Kênh cập nhật: tải gói → xác minh chữ ký → cài đặt với quyền cao.',
    ],
    attackSurfaceVi: [
      'Tệp cấu hình và cơ sở dữ liệu cục bộ có quyền quá rộng.',
      'Cơ chế nạp thư viện động.',
      'Kênh IPC không kiểm tra bên gọi.',
      'Nội dung web nhúng trong Electron.',
    ],
    trustBoundariesVi: [
      'Người dùng thường ↔ dịch vụ chạy quyền cao.',
      'Người dùng A ↔ người dùng B trên cùng máy.',
      'Mã ứng dụng ↔ nội dung tải từ Internet.',
    ],
    careerNoteVi:
      'Ít người cạnh tranh hơn web, nhưng cần kiên nhẫn với công cụ phân tích tĩnh và động. Là bước đệm tự nhiên sang reverse engineering.',
    standardIds: ['std-cwe', 'std-nist-ssdf'],
    toolIds: ['tool-ghidra', 'tool-debugger', 'tool-wireshark'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-binary',
    code: 'L',
    titleVi: 'Reverse engineering và binary exploitation',
    descriptionVi:
      'Từ kiến trúc CPU, assembly, bố cục bộ nhớ tiến trình và định dạng tệp thực thi tới các nhóm lỗi hỏng bộ nhớ, cơ chế giảm thiểu, fuzzing và phân loại crash.',
    order: 12,
    status: 'advanced',
    trackIds: ['trk-binary-foundations', 'trk-binary-memory', 'trk-binary-fuzzing'],
    prerequisiteDomainIds: ['dom-foundations', 'dom-desktop'],
    safetyNoteVi:
      'Chỉ thực hành trên binary lab hoặc phần mềm mà bạn được phép phân tích. Không xây dựng bộ khai thác nhắm tới phần mềm đang được sử dụng thực tế.',
    architectureVi: [
      'Mã nguồn → trình biên dịch → trình liên kết → tệp thực thi (ELF, PE, Mach-O).',
      'Bố cục bộ nhớ tiến trình: mã, dữ liệu, heap, stack, thư viện dùng chung.',
      'Chuỗi công cụ phân tích: disassembler, decompiler, debugger, sanitizer, fuzzer.',
    ],
    attackSurfaceVi: [
      'Mọi nơi phân tích dữ liệu đầu vào: định dạng tệp, giao thức mạng, đối số dòng lệnh.',
      'Ranh giới ngôn ngữ không an toàn bộ nhớ.',
      'Quản lý vòng đời đối tượng trong heap.',
    ],
    trustBoundariesVi: [
      'Dữ liệu đầu vào ↔ bộ phân tích cú pháp.',
      'Mã đặc quyền ↔ mã không đặc quyền trong cùng tiến trình.',
      'Sandbox ↔ bên ngoài sandbox.',
    ],
    careerNoteVi:
      'Đường dốc nhất trong bản đồ, nhưng cũng bền vững nhất. Học theo lộ trình có bài tập tăng dần thay vì nhảy thẳng vào khai thác.',
    standardIds: ['std-cwe', 'std-capec'],
    toolIds: ['tool-ghidra', 'tool-debugger', 'tool-fuzzer'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-code-review',
    code: 'M',
    titleVi: 'Source code review và white-box',
    descriptionVi:
      'Phương pháp đọc mã theo luồng dữ liệu từ nguồn tới điểm nhận, rà soát thay đổi và bản vá, dùng công cụ hỗ trợ, và quy trình công bố với dự án nguồn mở.',
    order: 13,
    status: 'advanced',
    trackIds: [
      'trk-code-review-method',
      'trk-code-diff-review',
      'trk-code-tooling',
      'trk-code-disclosure',
    ],
    prerequisiteDomainIds: ['dom-foundations', 'dom-web'],
    safetyNoteVi:
      'Khi phát hiện lỗ hổng trong dự án nguồn mở, không mở issue công khai. Dùng kênh riêng theo SECURITY.md hoặc chức năng báo cáo riêng tư của nền tảng, và tôn trọng thời gian cấm công bố.',
    architectureVi: [
      'Điểm vào (route, handler, hàng đợi, cron) → biến đổi dữ liệu → điểm nhận (truy vấn, lệnh, tệp, template).',
      'Lớp cắt ngang: xác thực, phân quyền, ghi log, xử lý lỗi.',
      'Ranh giới giữa mã dự án và thư viện phụ thuộc.',
    ],
    attackSurfaceVi: [
      'Mọi điểm vào không đi qua lớp phân quyền chung.',
      'Nơi dữ liệu người dùng được nối chuỗi vào truy vấn, lệnh hoặc template.',
      'Xử lý đồng thời và trạng thái dùng chung.',
    ],
    trustBoundariesVi: [
      'Dữ liệu ngoài ↔ logic trong.',
      'Mã dự án ↔ phụ thuộc bên thứ ba.',
      'Vùng an toàn bộ nhớ ↔ vùng không an toàn.',
    ],
    careerNoteVi:
      'Review mã cho khả năng tìm biến thể của một lỗi đã biết — kỹ năng tạo ra nhiều phát hiện chất lượng nhất trong dự án nguồn mở.',
    standardIds: ['std-owasp-asvs', 'std-cwe', 'std-nist-ssdf'],
    toolIds: ['tool-git', 'tool-static-analyzer'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-supply-chain',
    code: 'N',
    titleVi: 'Software supply chain, CI/CD và package ecosystem',
    descriptionVi:
      'Phụ thuộc trực tiếp và bắc cầu, lockfile, registry gói, hệ thống build, quyền của workflow, bí mật trong pipeline, ký bản phát hành, provenance, SBOM và SLSA.',
    order: 14,
    status: 'advanced',
    trackIds: ['trk-supply-deps', 'trk-supply-cicd'],
    prerequisiteDomainIds: ['dom-code-review'],
    safetyNoteVi:
      'Không xuất bản gói thử nghiệm lên registry công khai với tên gần giống gói thật, và không chạy thử nghiệm dependency confusion nhắm tới hạ tầng của tổ chức khác. Thực hành trên registry cục bộ hoặc namespace của chính bạn.',
    architectureVi: [
      'Nhà phát triển → kho mã → CI runner → artifact → registry → người dùng.',
      'Danh tính trong pipeline: token, OIDC tới cloud, quyền của workflow.',
      'Bằng chứng: SBOM, provenance, chữ ký bản phát hành.',
    ],
    attackSurfaceVi: [
      'Workflow chạy trên pull request từ fork.',
      'Cache và artifact dùng chung giữa các job.',
      'Bí mật lộ qua log hoặc qua biến môi trường của bước không tin cậy.',
      'Quan hệ tin cậy giữa CI và tài khoản cloud.',
    ],
    trustBoundariesVi: [
      'Mã của người đóng góp bên ngoài ↔ pipeline của dự án.',
      'Job này ↔ job khác trong cùng workflow.',
      'Pipeline ↔ môi trường sản xuất.',
    ],
    careerNoteVi:
      'Đây là bề mặt tăng trưởng nhanh và nhiều chương trình bắt đầu nhận báo cáo. Kiến thức ở đây dùng lại được cho cả phòng thủ.',
    standardIds: ['std-slsa', 'std-owasp-scvs', 'std-nist-ssdf'],
    toolIds: ['tool-git', 'tool-docker', 'tool-static-analyzer'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-iot',
    code: 'O',
    titleVi: 'IoT, embedded, hardware và firmware',
    descriptionVi:
      'Hệ sinh thái thiết bị kết nối: firmware, bootloader, giao diện phần cứng, ứng dụng đồng hành, backend đám mây và kênh cập nhật.',
    order: 15,
    status: 'advanced',
    trackIds: ['trk-iot-ecosystem', 'trk-iot-firmware', 'trk-iot-hardware'],
    prerequisiteDomainIds: ['dom-network', 'dom-binary'],
    safetyNoteVi:
      'Chỉ thao tác trên thiết bị hoặc bo mạch thuộc quyền sở hữu của bạn, hoặc thiết bị được chương trình cấp cho mục đích nghiên cứu. Việc mở thiết bị có thể làm mất bảo hành và gây hỏng vĩnh viễn.',
    architectureVi: [
      'Thiết bị (bootloader, firmware, ứng dụng) ↔ ứng dụng di động đồng hành ↔ backend đám mây ↔ giao diện quản trị web.',
      'Kênh cập nhật và máy chủ cấp phát cấu hình.',
      'Giao diện gỡ lỗi phần cứng có thể còn bật trên thiết bị thương mại.',
    ],
    attackSurfaceVi: [
      'Ảnh firmware: cấu hình, khoá, chứng chỉ, script, binary.',
      'Dịch vụ mạng chạy trên thiết bị.',
      'Giao diện vật lý: UART, JTAG/SWD, SPI, I2C, USB.',
      'Quan hệ tin cậy giữa thiết bị, ứng dụng di động và đám mây.',
    ],
    trustBoundariesVi: [
      'Người có quyền truy cập vật lý ↔ thiết bị.',
      'Thiết bị ↔ đám mây.',
      'Thiết bị này ↔ thiết bị khác của người dùng khác.',
    ],
    careerNoteVi:
      'Cần đầu tư thiết bị và kiên nhẫn, nhưng ít cạnh tranh. Bắt đầu bằng phân tích firmware tĩnh trước khi mua công cụ phần cứng.',
    standardIds: ['std-owasp-istg', 'std-cwe'],
    toolIds: ['tool-ghidra', 'tool-wireshark', 'tool-vm'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-wireless',
    code: 'P',
    titleVi: 'Wireless, Bluetooth, NFC và RF',
    descriptionVi:
      'Kiến trúc Wi-Fi, Bluetooth Classic và BLE, ghép nối và GATT, NFC/RFID ở mức khái niệm, nền tảng SDR và quy định phát sóng.',
    order: 16,
    status: 'specialist',
    trackIds: ['trk-wireless-core'],
    prerequisiteDomainIds: ['dom-network', 'dom-iot'],
    safetyNoteVi:
      'Quy định về phát sóng vô tuyến khác nhau theo từng quốc gia và nhiều hành vi bị cấm theo luật. Không gây nhiễu, không truy cập mạng của người khác, không phát ở băng tần hoặc công suất không được phép. Chỉ thực hành với thiết bị của bạn, tốt nhất trong môi trường che chắn.',
    architectureVi: [
      'Thiết bị ↔ điểm truy cập/thiết bị ngang hàng ↔ mạng phía sau.',
      'Vòng đời BLE: quảng bá → kết nối → ghép nối/liên kết → truy cập đặc tính GATT.',
      'Hệ sinh thái đầy đủ luôn kèm ứng dụng di động và backend đám mây.',
    ],
    attackSurfaceVi: [
      'Quy trình ghép nối và mức bảo vệ được thương lượng.',
      'Đặc tính GATT không yêu cầu xác thực.',
      'Định danh thiết bị và rò rỉ quyền riêng tư qua quảng bá.',
      'Bản tin điều khiển có thể phát lại.',
    ],
    trustBoundariesVi: [
      'Không gian vô tuyến chung ↔ thiết bị.',
      'Thiết bị đã ghép nối ↔ thiết bị chưa ghép nối.',
      'Kênh vô tuyến ↔ ứng dụng đồng hành.',
    ],
    careerNoteVi:
      'Chỉ nên mở sau khi vững mạng và IoT. Phải kiểm tra quy định pháp lý tại nơi bạn sống trước khi mua và dùng thiết bị phát.',
    standardIds: ['std-owasp-istg'],
    toolIds: ['tool-wireshark'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-automotive',
    code: 'Q',
    titleVi: 'Automotive và connected vehicles',
    descriptionVi:
      'ECU, mạng CAN và Automotive Ethernet, chẩn đoán, telematics, hệ thống giải trí, ứng dụng đồng hành, backend đám mây và cập nhật OTA — luôn đặt an toàn con người lên trước.',
    order: 17,
    status: 'specialist',
    trackIds: ['trk-automotive-core'],
    prerequisiteDomainIds: ['dom-iot', 'dom-network'],
    safetyNoteVi:
      'Tuyệt đối không thử nghiệm trên phương tiện đang vận hành và không can thiệp vào hệ thống liên quan tới an toàn. Chỉ dùng simulator, test bench thuộc sở hữu của bạn, hoặc môi trường mà chương trình cung cấp riêng cho nghiên cứu.',
    architectureVi: [
      'Cảm biến và cơ cấu chấp hành ↔ ECU ↔ mạng trong xe ↔ gateway ↔ telematics ↔ đám mây.',
      'Ứng dụng di động điều khiển từ xa đi qua backend chứ không nói trực tiếp với xe.',
      'Cập nhật OTA có chuỗi ký và cơ chế quay lui.',
    ],
    attackSurfaceVi: [
      'Backend đám mây và API dành cho ứng dụng đồng hành — thường là bề mặt hợp pháp và có giá trị nhất.',
      'Hệ thống giải trí và các kênh dữ liệu nó xử lý.',
      'Giao diện chẩn đoán.',
      'Quy trình cấp phát và định danh phương tiện.',
    ],
    trustBoundariesVi: [
      'Mạng ngoài ↔ gateway ↔ mạng trong xe.',
      'Hệ thống giải trí ↔ hệ thống điều khiển.',
      'Tài khoản người dùng ↔ phương tiện cụ thể.',
    ],
    careerNoteVi:
      'Phần lớn nghiên cứu hợp pháp mà người mới có thể làm nằm ở ứng dụng di động và backend, không phải ở mạng trong xe.',
    standardIds: ['std-cwe', 'std-nist-800-82'],
    toolIds: ['tool-wireshark', 'tool-burp'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-ics-ot',
    code: 'R',
    titleVi: 'ICS, OT và industrial systems',
    descriptionVi:
      'PLC, HMI, SCADA, historian, trạm kỹ thuật và thiết bị hiện trường; mô hình Purdue, các giao thức công nghiệp, và vì sao tính khả dụng cùng an toàn được ưu tiên hơn tính bí mật.',
    order: 18,
    status: 'specialist',
    trackIds: ['trk-ics-core'],
    prerequisiteDomainIds: ['dom-network', 'dom-iot'],
    safetyNoteVi:
      'Không bao giờ thử nghiệm trên hạ tầng vận hành thật. Một gói tin sai trong môi trường OT có thể gây mất điều khiển và nguy hiểm tới con người. Chỉ dùng simulator hoặc bench lab.',
    architectureVi: [
      'Phân tầng theo mô hình Purdue: thiết bị hiện trường → điều khiển → giám sát → vận hành → doanh nghiệp.',
      'Giao thức công nghiệp thường được thiết kế cho mạng tin cậy, không có xác thực mạnh sẵn.',
      'Hệ thống an toàn (safety system) tách riêng khỏi hệ thống điều khiển thông thường.',
    ],
    attackSurfaceVi: [
      'Truy cập từ xa của nhà cung cấp vào vùng OT.',
      'Ranh giới phân đoạn giữa mạng IT và mạng OT.',
      'Trạm kỹ thuật và phần mềm lập trình thiết bị.',
      'Giao diện giám sát phơi ra ngoài.',
    ],
    trustBoundariesVi: [
      'Mạng doanh nghiệp ↔ mạng vận hành.',
      'Nhà cung cấp ↔ chủ sở hữu hệ thống.',
      'Hệ thống điều khiển ↔ hệ thống an toàn.',
    ],
    careerNoteVi:
      'Đóng góp có giá trị nhất thường là ở tài liệu kiến trúc và phòng thủ, không phải khai thác. Cần hiểu bối cảnh kỹ thuật công nghiệp.',
    standardIds: ['std-nist-800-82', 'std-attack-ics'],
    toolIds: ['tool-wireshark', 'tool-nmap'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-web3',
    code: 'S',
    titleVi: 'Smart contract, blockchain và Web3',
    descriptionVi:
      'Nền tảng blockchain và EVM, Solidity, các nhóm lỗ hổng hợp đồng thông minh, và phương pháp kiểm thử bằng unit test, property test, fuzzing và invariant.',
    order: 19,
    status: 'advanced',
    trackIds: ['trk-web3-foundations', 'trk-web3-vulns', 'trk-web3-testing'],
    prerequisiteDomainIds: ['dom-policy', 'dom-foundations'],
    safetyNoteVi:
      'Chỉ tương tác với hợp đồng trên testnet hoặc chain cục bộ. Không thực hiện giao dịch trên hợp đồng thật khi chưa có quyền rõ ràng — giao dịch on-chain là không thể hoàn tác và có thể gây thiệt hại tài chính thật.',
    architectureVi: [
      'Người dùng ↔ ví ↔ node RPC ↔ hợp đồng trên chain.',
      'Hợp đồng có thể gọi hợp đồng khác; trạng thái dùng chung và lưu vĩnh viễn.',
      'Mẫu nâng cấp bằng proxy tách logic khỏi lưu trữ.',
    ],
    attackSurfaceVi: [
      'Hàm public/external không kiểm soát quyền.',
      'Lời gọi ra ngoài và thứ tự cập nhật trạng thái.',
      'Nguồn giá và oracle.',
      'Logic kinh tế: phí, làm tròn, thanh lý, phần thưởng.',
      'Khởi tạo hợp đồng proxy.',
    ],
    trustBoundariesVi: [
      'Người gọi bất kỳ ↔ hàm hợp đồng.',
      'Hợp đồng ↔ hợp đồng bên ngoài.',
      'Chain này ↔ chain khác qua cầu nối.',
    ],
    careerNoteVi:
      'Ranh giới giữa lỗi kỹ thuật và lỗi thiết kế kinh tế rất mờ. Kỹ năng viết invariant test có giá trị hơn việc thuộc danh sách lỗ hổng.',
    standardIds: ['std-owasp-scsvs', 'std-cwe'],
    toolIds: ['tool-foundry', 'tool-static-analyzer'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-ai',
    code: 'T',
    titleVi: 'AI, machine learning, LLM và agent security',
    descriptionVi:
      'Phân lớp hệ thống AI, các nhóm lỗi đặc thù như prompt injection gián tiếp, xử lý đầu ra không an toàn, quyền quá mức của agent, cô lập RAG và bộ nhớ, cùng chính sách bug bounty dành riêng cho AI.',
    order: 20,
    status: 'advanced',
    trackIds: ['trk-ai-architecture', 'trk-ai-vulns', 'trk-ai-policy'],
    prerequisiteDomainIds: ['dom-web', 'dom-api', 'dom-identity'],
    safetyNoteVi:
      'Không khai thác dữ liệu người dùng thật và không tạo chi phí suy luận lớn cho hệ thống của người khác. Hành vi mô hình không mong muốn chưa chắc là lỗ hổng bảo mật — phải chứng minh có vượt qua một ranh giới tin cậy.',
    architectureVi: [
      'Ứng dụng → orchestration → mô hình; kèm truy xuất tài liệu, bộ nhớ và công cụ.',
      'Agent gọi công cụ; công cụ có quyền thật trên hệ thống thật.',
      'Dữ liệu ngoài đi vào prompt qua RAG, tệp đính kèm, trang web hoặc email.',
    ],
    attackSurfaceVi: [
      'Nội dung do bên thứ ba kiểm soát đi vào ngữ cảnh mô hình.',
      'Đầu ra của mô hình được hệ thống hạ nguồn tin tưởng và thực thi.',
      'Quyền của công cụ mà agent được phép gọi.',
      'Ranh giới giữa dữ liệu của các người thuê trong vector store và bộ nhớ.',
    ],
    trustBoundariesVi: [
      'Nội dung không tin cậy ↔ ngữ cảnh mô hình.',
      'Đầu ra mô hình ↔ hệ thống thực thi.',
      'Người dùng ↔ quyền mà agent hành động thay mặt họ.',
    ],
    careerNoteVi:
      'Báo cáo AI có giá trị là báo cáo chỉ ra ranh giới tin cậy bị vượt qua và hệ quả cụ thể, không phải báo cáo về câu trả lời gây khó chịu.',
    standardIds: ['std-owasp-llm-top10', 'std-nist-ai-rmf', 'std-owasp-asvs'],
    toolIds: ['tool-burp', 'tool-api-client'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-browser-ext',
    code: 'U',
    titleVi: 'Browser, extension và client platform',
    descriptionVi:
      'Kiến trúc trình duyệt ở mức tổng quan, manifest và quyền của tiện ích mở rộng, content script, truyền thông điệp, native messaging và ranh giới giữa tiện ích với trang web.',
    order: 21,
    status: 'advanced',
    trackIds: ['trk-browser-ext'],
    prerequisiteDomainIds: ['dom-web'],
    safetyNoteVi:
      'Chỉ phân tích tiện ích do bạn viết, tiện ích lab cố ý dễ tổn thương, hoặc tiện ích nằm trong phạm vi chương trình. Không thử nghiệm trên tiện ích của người khác đang cài trên máy họ.',
    architectureVi: [
      'Manifest khai báo quyền → service worker nền ↔ content script chạy trong trang → trang tuỳ chọn.',
      'Truyền thông điệp giữa content script và nền; native messaging nối ra ứng dụng máy tính.',
      'Tài nguyên truy cập được từ web tạo cầu nối từ trang tới tiện ích.',
    ],
    attackSurfaceVi: [
      'Content script tin tưởng dữ liệu từ trang web.',
      'Trình xử lý thông điệp không kiểm tra người gửi.',
      'Quyền quá rộng trong manifest.',
      'Bí mật lưu trong storage của tiện ích.',
    ],
    trustBoundariesVi: [
      'Trang web ↔ content script.',
      'Content script ↔ service worker nền.',
      'Tiện ích ↔ ứng dụng native qua native messaging.',
    ],
    careerNoteVi:
      'Bề mặt nhỏ, dễ đọc hết mã, phù hợp để luyện kỹ năng review mã có mục tiêu rõ ràng.',
    standardIds: ['std-cwe', 'std-owasp-asvs'],
    toolIds: ['tool-devtools', 'tool-static-analyzer'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-saas',
    code: 'V',
    titleVi: 'Email, collaboration, SaaS và enterprise workflow',
    descriptionVi:
      'Xác thực email ở mức kiến trúc, lời mời, tài liệu chia sẻ, workspace và tổ chức, xác minh tên miền, tích hợp OAuth, bot, tự động hoá quy trình, xuất dữ liệu và nhật ký kiểm toán.',
    order: 22,
    status: 'advanced',
    trackIds: ['trk-saas-core'],
    prerequisiteDomainIds: ['dom-identity', 'dom-api'],
    safetyNoteVi:
      'Không gửi email lừa đảo hay tin nhắn hàng loạt trong bất kỳ hoàn cảnh nào. Với vấn đề giả mạo email, chỉ báo cáo theo đúng cách chính sách chương trình quy định và không gửi tới người thật.',
    architectureVi: [
      'Người thuê → workspace → nhóm → người dùng và khách.',
      'Tích hợp: ứng dụng OAuth, bot, webhook, tự động hoá quy trình.',
      'Chia sẻ nội dung bằng liên kết, quyền hiển thị công khai/riêng tư, và xuất dữ liệu.',
    ],
    attackSurfaceVi: [
      'Luồng mời và nâng quyền cho tài khoản khách.',
      'Xác minh quyền sở hữu tên miền.',
      'Liên kết chia sẻ đoán được hoặc không hết hạn.',
      'Ứng dụng tích hợp có phạm vi quyền rộng.',
      'Chức năng xuất dữ liệu bỏ qua kiểm tra phân quyền chi tiết.',
    ],
    trustBoundariesVi: [
      'Người thuê này ↔ người thuê khác.',
      'Thành viên ↔ khách.',
      'Ứng dụng tích hợp ↔ dữ liệu workspace.',
    ],
    careerNoteVi:
      'Nhiều vấn đề ở đây là logic chứ không phải kỹ thuật, nên đọc kỹ tài liệu sản phẩm có giá trị hơn công cụ.',
    standardIds: ['std-owasp-asvs', 'std-cwe'],
    toolIds: ['tool-burp', 'tool-api-client'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-privacy',
    code: 'W',
    titleVi: 'Privacy, data exposure và multi-tenancy',
    descriptionVi:
      'Phân loại dữ liệu cá nhân, tối thiểu hoá dữ liệu, cô lập người thuê, rò rỉ qua analytics và log, xuất và xoá dữ liệu, lưu trữ và cách mô tả tác động mà không lưu dữ liệu của nạn nhân.',
    order: 23,
    status: 'core',
    trackIds: ['trk-privacy-core'],
    prerequisiteDomainIds: ['dom-web', 'dom-api'],
    safetyNoteVi:
      'Không tải hàng loạt dữ liệu để chứng minh vấn đề. Một bản ghi không thuộc về bạn, đã che thông tin định danh, là đủ. Xoá dữ liệu đã tiếp xúc ngay sau khi báo cáo và ghi lại việc đó trong report.',
    architectureVi: [
      'Vòng đời dữ liệu: thu thập → xử lý → lưu trữ → chia sẻ → sao lưu → xoá.',
      'Người thuê và không gian làm việc là ranh giới cô lập chính.',
      'Dữ liệu rò rỉ ra ngoài luồng chính qua analytics, log, chỉ mục tìm kiếm và liên kết công khai.',
    ],
    attackSurfaceVi: [
      'Chức năng xuất dữ liệu và báo cáo.',
      'Liên kết công khai và lưu trữ đối tượng.',
      'Log và hệ thống giám sát chứa dữ liệu cá nhân.',
      'Chức năng xoá không xoá thật ở bản sao lưu hoặc chỉ mục.',
    ],
    trustBoundariesVi: [
      'Người thuê ↔ người thuê.',
      'Dữ liệu sản xuất ↔ hệ thống phân tích.',
      'Dữ liệu đang dùng ↔ bản sao lưu.',
    ],
    careerNoteVi:
      'Kỹ năng mô tả tác động về quyền riêng tư mà không tự tạo thêm rủi ro là điều triager đánh giá rất cao.',
    standardIds: ['std-owasp-asvs', 'std-cwe'],
    toolIds: ['tool-burp', 'tool-devtools'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
  {
    id: 'dom-emerging',
    code: 'X',
    titleVi: 'Emerging & specialist',
    descriptionVi:
      'Bản đồ mở cho các bề mặt đang hình thành và chuyên sâu: game, viễn thông, vệ tinh, phần cứng an toàn và TEE, thiết bị thanh toán, thiết bị y tế, drone, robot, browser engine, trình biên dịch, database engine, hypervisor, kernel, hệ thống bảo vệ quyền riêng tư và hậu lượng tử.',
    order: 24,
    status: 'specialist',
    trackIds: ['trk-emerging-core'],
    prerequisiteDomainIds: ['dom-methodology', 'dom-binary'],
    safetyNoteVi:
      'Mỗi lĩnh vực ở đây có ràng buộc pháp lý và an toàn riêng, đặc biệt là thiết bị y tế, thiết bị thanh toán, drone và viễn thông. Không thực hành khi chưa xác định rõ quy định tại nơi bạn sống và chưa có môi trường hợp pháp.',
    architectureVi: [
      'Mỗi lĩnh vực có kiến trúc riêng; điểm chung là đều có phần mềm, giao thức và một ranh giới tin cậy nào đó.',
      'Bản đồ này được giữ ở trạng thái mở, có ngày rà soát và cơ chế phát hiện khoảng trống.',
    ],
    attackSurfaceVi: [
      'Chưa được lập bản đồ đầy đủ — đây chính là lý do domain này tồn tại.',
      'Bề mặt mới xuất hiện nhanh hơn tốc độ tài liệu hoá.',
    ],
    trustBoundariesVi: ['Tuỳ lĩnh vực; phải xác định lại cho từng specialization trước khi mở.'],
    careerNoteVi:
      'Chỉ mở một specialization khi đủ bảy điều kiện trong KNOWLEDGE_TAXONOMY.md §5. Trước đó nó nên ở trạng thái planned để không tạo cảm giác bao phủ giả.',
    standardIds: ['std-cwe', 'std-capec'],
    toolIds: ['tool-ghidra', 'tool-wireshark'],
    contentStatus: 'draft',
    lastReviewed: null,
  },
];
