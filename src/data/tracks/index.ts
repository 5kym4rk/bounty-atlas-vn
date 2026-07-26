import type { LearningTrack } from '@/schemas/entities';
import { defineTrack } from '../helpers';

/** Track học. Mỗi track thuộc một domain và chứa ít nhất một module. */
export const tracks: LearningTrack[] = [
  // ── Domain A: Policy ────────────────────────────────────────────────
  defineTrack({
    id: 'trk-policy-programs',
    domainId: 'dom-policy',
    titleVi: 'Chương trình bug bounty và công bố lỗ hổng',
    summaryVi:
      'Phân biệt bug bounty, VDP, pentest, red team và CTF; hiểu chương trình công khai, riêng tư và theo lời mời; nắm safe harbor và nghiên cứu thiện chí.',
    moduleIds: ['mod-policy-program-types', 'mod-policy-safe-harbor'],
    standardIds: ['std-nist-800-115'],
  }),
  defineTrack({
    id: 'trk-policy-scope',
    domainId: 'dom-policy',
    titleVi: 'Đọc chính sách và xác định phạm vi',
    summaryVi:
      'Đọc từng thành phần của chính sách: định danh tài sản, wildcard, CIDR, ứng dụng di động, mã nguồn, phần cứng, địa chỉ hợp đồng, dịch vụ bên thứ ba, giới hạn tốc độ và quy định dữ liệu.',
    moduleIds: [
      'mod-policy-scope-reading',
      'mod-policy-asset-identifiers',
      'mod-policy-stop-rules',
    ],
    prerequisiteTrackIds: ['trk-policy-programs'],
  }),
  defineTrack({
    id: 'trk-policy-operations',
    domainId: 'dom-policy',
    titleVi: 'Vận hành cá nhân của người nghiên cứu',
    summaryVi:
      'Chọn chương trình, theo dõi thay đổi phạm vi, ghi nhật ký kiểm thử, quản lý bằng chứng và bí mật, lập kế hoạch luyện tập theo tuần và tránh kiệt sức.',
    moduleIds: ['mod-policy-worklog', 'mod-policy-practice-plan'],
    prerequisiteTrackIds: ['trk-policy-scope'],
  }),
  defineTrack({
    id: 'trk-policy-reporting',
    domainId: 'dom-policy',
    titleVi: 'Viết báo cáo và làm việc với triage',
    summaryVi:
      'Cấu trúc một báo cáo được xử lý nhanh, phân biệt tác động kỹ thuật với tác động kinh doanh, dùng CVSS/CWE/VRT đúng chỗ, và hiểu các trạng thái triage.',
    moduleIds: ['mod-policy-report-structure', 'mod-policy-severity', 'mod-policy-triage-states'],
    prerequisiteTrackIds: ['trk-policy-scope'],
    standardIds: ['std-cvss4', 'std-cwe', 'std-bugcrowd-vrt'],
  }),

  // ── Domain B: Foundations ───────────────────────────────────────────
  defineTrack({
    id: 'trk-found-os',
    domainId: 'dom-foundations',
    titleVi: 'Hệ điều hành',
    summaryVi:
      'Hệ thống tệp, quyền, người dùng và nhóm, tiến trình, dịch vụ, biến môi trường, shell và log trên Linux, Windows và macOS.',
    moduleIds: ['mod-found-linux', 'mod-found-windows'],
  }),
  defineTrack({
    id: 'trk-found-network',
    domainId: 'dom-foundations',
    titleVi: 'Mạng máy tính',
    summaryVi:
      'Mô hình OSI và TCP/IP, IP và subnet, định tuyến, NAT, TCP/UDP/ICMP, DNS, DHCP, proxy, VPN, firewall, load balancer, CDN, TLS và chứng chỉ.',
    moduleIds: ['mod-found-tcpip', 'mod-found-dns-tls'],
  }),
  defineTrack({
    id: 'trk-found-web',
    domainId: 'dom-foundations',
    titleVi: 'Web và trình duyệt',
    summaryVi:
      'URL/URI, HTTP/1.1 và HTTP/2, method, header, status code, cookie, phiên, cache, same-origin policy, CORS, CSP, HSTS, DOM, storage, service worker và WebSocket.',
    moduleIds: ['mod-found-http', 'mod-found-browser-model'],
  }),
  defineTrack({
    id: 'trk-found-programming',
    domainId: 'dom-foundations',
    titleVi: 'Lập trình và dữ liệu',
    summaryVi:
      'Đọc hiểu Python, JavaScript/TypeScript, C/C++, Java/Kotlin, Go; SQL và NoSQL; JSON, XML, YAML, protobuf; regex, encoding, Unicode, serialization, hash, mã hoá và chữ ký số.',
    moduleIds: ['mod-found-reading-code', 'mod-found-encoding', 'mod-found-crypto-basics'],
  }),
  defineTrack({
    id: 'trk-found-git-sdlc',
    domainId: 'dom-foundations',
    titleVi: 'Git và vòng đời phát triển phần mềm',
    summaryVi:
      'Repository, commit, branch, tag, pull request, release, CI/CD, artifact, phụ thuộc, registry gói, bí mật, SBOM, threat modeling và SDLC an toàn.',
    moduleIds: ['mod-found-git', 'mod-found-sdlc'],
  }),
  defineTrack({
    id: 'trk-found-security-models',
    domainId: 'dom-foundations',
    titleVi: 'Mô hình bảo mật',
    summaryVi:
      'Xác thực, phân quyền, ghi nhận, đặc quyền tối thiểu, phòng thủ nhiều lớp, trust boundary, bề mặt tấn công, tác động, khả năng xảy ra, rủi ro, CIA, chống chối bỏ và trách nhiệm chung.',
    moduleIds: ['mod-found-authn-authz-model', 'mod-found-threat-model'],
  }),

  // ── Domain C: Methodology ───────────────────────────────────────────
  defineTrack({
    id: 'trk-method-recon',
    domainId: 'dom-methodology',
    titleVi: 'Lập bản đồ tài sản trong phạm vi',
    summaryVi:
      'Đọc asset inventory, phân biệt khám phá chủ động và bị động, lập bản đồ API, backend của ứng dụng di động, tài sản cloud và tích hợp SaaS — tất cả trong phạm vi cho phép.',
    moduleIds: ['mod-method-asset-mapping', 'mod-method-passive-active'],
  }),
  defineTrack({
    id: 'trk-method-workflow',
    domainId: 'dom-methodology',
    titleVi: 'Quy trình kiểm thử',
    summaryVi:
      'Từ đọc chính sách tới retest: lập sơ đồ hệ thống, xác định vai trò và dữ liệu, chọn checklist, thực hiện phép thử tối thiểu, loại dương tính giả và ghi bằng chứng.',
    moduleIds: ['mod-method-workflow', 'mod-method-false-positive', 'mod-method-evidence'],
    prerequisiteTrackIds: ['trk-method-recon'],
  }),
  defineTrack({
    id: 'trk-method-tools',
    domainId: 'dom-methodology',
    titleVi: 'Công cụ nền tảng',
    summaryVi:
      'Mục đích, giới hạn và cách dùng an toàn của DevTools, proxy chặn bắt, curl, API client, Wireshark, Nmap, Git, Docker và máy ảo — cùng những kết luận không được suy ra từ output công cụ.',
    moduleIds: ['mod-method-proxy', 'mod-method-tool-output'],
  }),

  // ── Domain D: Web ───────────────────────────────────────────────────
  defineTrack({
    id: 'trk-web-architecture',
    domainId: 'dom-web',
    titleVi: 'Kiến trúc ứng dụng web',
    summaryVi:
      'Monolith và microservices, SSR và SPA, CDN, reverse proxy, cache, API gateway, job nền, hàng đợi, object storage, tìm kiếm và tích hợp bên thứ ba.',
    moduleIds: ['mod-web-architecture'],
  }),
  defineTrack({
    id: 'trk-web-authn',
    domainId: 'dom-web',
    titleVi: 'Xác thực',
    summaryVi:
      'Đăng nhập bằng mật khẩu, liệt kê tài khoản, MFA, ghi nhớ đăng nhập, đặt lại mật khẩu, khôi phục tài khoản, magic link, passkey, quản lý phiên và xác thực lại.',
    moduleIds: ['mod-web-login', 'mod-web-password-reset', 'mod-web-session'],
    prerequisiteTrackIds: ['trk-web-architecture'],
  }),
  defineTrack({
    id: 'trk-web-authz',
    domainId: 'dom-web',
    titleVi: 'Phân quyền',
    summaryVi:
      'IDOR/BOLA, leo thang ngang và dọc, phân quyền ở mức chức năng, quyền sở hữu đối tượng, cô lập người thuê, giao diện quản trị và phân quyền tệp.',
    moduleIds: ['mod-web-idor', 'mod-web-privilege-escalation', 'mod-web-tenant-isolation'],
    prerequisiteTrackIds: ['trk-web-authn'],
  }),
  defineTrack({
    id: 'trk-web-injection',
    domainId: 'dom-web',
    titleVi: 'Injection phía máy chủ',
    summaryVi:
      'SQL và NoSQL injection, command injection, LDAP và XPath, template injection, expression language, header và CRLF, log injection, CSV/formula và XML/XXE.',
    moduleIds: ['mod-web-sqli', 'mod-web-command-injection', 'mod-web-ssti', 'mod-web-xxe'],
    prerequisiteTrackIds: ['trk-web-architecture'],
  }),
  defineTrack({
    id: 'trk-web-clientside',
    domainId: 'dom-web',
    titleVi: 'XSS và phía trình duyệt',
    summaryVi:
      'XSS phản chiếu, lưu trữ và DOM, HTML injection, DOM clobbering, postMessage, CSP, Trusted Types, storage, service worker và prototype pollution phía client.',
    moduleIds: ['mod-web-xss', 'mod-web-dom-xss', 'mod-web-postmessage', 'mod-web-csp'],
    prerequisiteTrackIds: ['trk-web-architecture'],
  }),
  defineTrack({
    id: 'trk-web-crossorigin',
    domainId: 'dom-web',
    titleVi: 'Request forgery và cross-origin',
    summaryVi:
      'CSRF, CORS, SSRF và blind SSRF, khác biệt giữa các bộ phân tích URL, open redirect, đầu độc và đánh lừa cache, Host header, request smuggling và tin cậy proxy.',
    moduleIds: [
      'mod-web-csrf',
      'mod-web-cors',
      'mod-web-ssrf',
      'mod-web-cache',
      'mod-web-smuggling',
    ],
    prerequisiteTrackIds: ['trk-web-architecture'],
  }),
  defineTrack({
    id: 'trk-web-files',
    domainId: 'dom-web',
    titleVi: 'Tệp và rò rỉ dữ liệu',
    summaryVi:
      'Tải lên và tải xuống tệp, path traversal, giải nén, xử lý ảnh và tài liệu, metadata, content-type, object storage, URL ký sẵn, tệp sao lưu, source map và lộ bí mật.',
    moduleIds: ['mod-web-file-upload', 'mod-web-path-traversal', 'mod-web-info-disclosure'],
    prerequisiteTrackIds: ['trk-web-architecture'],
  }),
  defineTrack({
    id: 'trk-web-serialization',
    domainId: 'dom-web',
    titleVi: 'Serialization và hành vi máy chủ',
    summaryVi:
      'Deserialization không an toàn, object injection, prototype pollution phía máy chủ, race condition, TOCTOU, logic hàng đợi, webhook, callback, retry và idempotency.',
    moduleIds: ['mod-web-deserialization', 'mod-web-race-condition', 'mod-web-webhook'],
    prerequisiteTrackIds: ['trk-web-architecture'],
  }),
  defineTrack({
    id: 'trk-web-logic',
    domainId: 'dom-web',
    titleVi: 'Logic nghiệp vụ',
    summaryVi:
      'Mã giảm giá, giỏ hàng, thanh toán, hoàn tiền, điểm thưởng, lời mời, đổi vai trò, quy trình phê duyệt, gói đăng ký, giá trị âm, lệch đơn vị tiền tệ và bỏ bước quy trình.',
    moduleIds: ['mod-web-business-logic', 'mod-web-payment-flow'],
    prerequisiteTrackIds: ['trk-web-authz'],
  }),
  defineTrack({
    id: 'trk-web-advanced',
    domainId: 'dom-web',
    titleVi: 'Web nâng cao',
    summaryVi:
      'GraphQL, WebSocket, Server-Sent Events, gRPC-Web, WebAssembly, cân nhắc bảo mật của HTTP/2 và HTTP/3, nhiều lớp CDN/cache, và ứng dụng web chạy ở edge/serverless.',
    moduleIds: ['mod-web-websocket', 'mod-web-wasm', 'mod-web-edge'],
    prerequisiteTrackIds: ['trk-web-crossorigin'],
  }),

  // ── Domain E: API ───────────────────────────────────────────────────
  defineTrack({
    id: 'trk-api-fundamentals',
    domainId: 'dom-api',
    titleVi: 'Nền tảng API',
    summaryVi:
      'REST, GraphQL, SOAP, gRPC, WebSocket API, JSON-RPC, webhook, API hướng sự kiện, phiên bản hoá, gateway, schema, OpenAPI và API ẩn hoặc đã ngừng hỗ trợ.',
    moduleIds: ['mod-api-fundamentals', 'mod-api-graphql'],
    standardIds: ['std-openapi', 'std-graphql'],
  }),
  defineTrack({
    id: 'trk-api-authz',
    domainId: 'dom-api',
    titleVi: 'Phân quyền API',
    summaryVi:
      'BOLA, BFLA, phân quyền ở mức thuộc tính, mass assignment, quyền sở hữu đối tượng, truy cập chéo người thuê, đối tượng lồng nhau, endpoint theo lô và endpoint xuất báo cáo.',
    moduleIds: ['mod-api-bola', 'mod-api-mass-assignment', 'mod-api-bfla'],
    prerequisiteTrackIds: ['trk-api-fundamentals'],
    standardIds: ['std-owasp-api-top10'],
  }),
  defineTrack({
    id: 'trk-api-authn',
    domainId: 'dom-api',
    titleVi: 'Xác thực API',
    summaryVi:
      'API key, cookie phiên, token OAuth, JWT, chữ ký HMAC, mTLS ở mức khái niệm, phạm vi token, xoay vòng, thu hồi, hết hạn, audience và issuer.',
    moduleIds: ['mod-api-tokens', 'mod-api-jwt'],
    prerequisiteTrackIds: ['trk-api-fundamentals'],
  }),
  defineTrack({
    id: 'trk-api-abuse',
    domainId: 'dom-api',
    titleVi: 'Lạm dụng tài nguyên và dữ liệu API',
    summaryVi:
      'Tiêu thụ tài nguyên không giới hạn, rate limiting, phân trang, request theo lô, truy vấn tốn kém, độ sâu GraphQL, liệt kê, lộ dữ liệu quá mức và tiêu thụ API bên thứ ba không an toàn.',
    moduleIds: ['mod-api-resource-abuse', 'mod-api-excessive-data'],
    prerequisiteTrackIds: ['trk-api-fundamentals'],
  }),
  defineTrack({
    id: 'trk-api-workflow',
    domainId: 'dom-api',
    titleVi: 'Quy trình kiểm thử API',
    summaryVi:
      'Kiểm thử theo schema, ma trận vai trò × đối tượng, kiểm thử khác biệt, kiểm thử phủ định, kiểm thử chuyển trạng thái và đối chiếu API với ứng dụng di động.',
    moduleIds: ['mod-api-testing-workflow'],
    prerequisiteTrackIds: ['trk-api-authz'],
  }),

  // ── Domain F: Identity ──────────────────────────────────────────────
  defineTrack({
    id: 'trk-identity-protocols',
    domainId: 'dom-identity',
    titleVi: 'Giao thức danh tính',
    summaryVi:
      'OAuth 2.0, OpenID Connect, SAML ở mức cần thiết, JWT và JWKS, vòng đời token, redirect URI, PKCE, state, nonce và liên kết tài khoản.',
    moduleIds: ['mod-identity-oauth', 'mod-identity-oidc-jwt', 'mod-identity-account-linking'],
    standardIds: ['std-rfc9700', 'std-oidc-core'],
  }),
  defineTrack({
    id: 'trk-identity-enterprise',
    domainId: 'dom-identity',
    titleVi: 'Danh tính doanh nghiệp',
    summaryVi:
      'SCIM, LDAP/Active Directory ở mức kiến trúc, MFA và passkey, khôi phục, người thuê và tổ chức, xác nhận tên miền, cấp phát tức thời, ánh xạ vai trò và đăng xuất liên hệ thống.',
    moduleIds: ['mod-identity-tenant', 'mod-identity-passkey-recovery'],
    prerequisiteTrackIds: ['trk-identity-protocols'],
    standardIds: ['std-webauthn'],
  }),

  // ── Domain G: Mobile ────────────────────────────────────────────────
  defineTrack({
    id: 'trk-mobile-architecture',
    domainId: 'dom-mobile',
    titleVi: 'Kiến trúc ứng dụng di động',
    summaryVi:
      'Native, hybrid, Flutter, React Native, WebView, backend API, thông báo đẩy, deep link, universal link, app link, cơ sở dữ liệu cục bộ, lưu trữ an toàn và SDK phân tích.',
    moduleIds: ['mod-mobile-architecture'],
    standardIds: ['std-owasp-masvs'],
  }),
  defineTrack({
    id: 'trk-mobile-android',
    domainId: 'dom-mobile',
    titleVi: 'Android',
    summaryVi:
      'APK/AAB, manifest, quyền, activity, service, broadcast receiver, content provider, intent, thành phần exported, WebView, network security config, Keystore, sao lưu, log và clipboard.',
    moduleIds: ['mod-mobile-android-components', 'mod-mobile-android-storage'],
    prerequisiteTrackIds: ['trk-mobile-architecture'],
    standardIds: ['std-owasp-mastg'],
  }),
  defineTrack({
    id: 'trk-mobile-ios',
    domainId: 'dom-mobile',
    titleVi: 'iOS',
    summaryVi:
      'IPA, entitlement, Info.plist, URL scheme, universal link, Keychain, Data Protection, ATS, pasteboard, WebView, extension, app group và sinh trắc học.',
    moduleIds: ['mod-mobile-ios-platform', 'mod-mobile-ios-storage'],
    prerequisiteTrackIds: ['trk-mobile-architecture'],
    standardIds: ['std-owasp-mastg'],
  }),
  defineTrack({
    id: 'trk-mobile-network',
    domainId: 'dom-mobile',
    titleVi: 'Mạng và API của ứng dụng di động',
    summaryVi:
      'Kiểm tra chứng chỉ, TLS, xác thực API, lưu trữ token, gắn thiết bị, push token, trạng thái ngoại tuyến, phát lại, endpoint chỉ dành cho mobile và chuỗi deep link tới API.',
    moduleIds: ['mod-mobile-network'],
    prerequisiteTrackIds: ['trk-mobile-architecture'],
  }),
  defineTrack({
    id: 'trk-mobile-env',
    domainId: 'dom-mobile',
    titleVi: 'Môi trường kiểm thử di động',
    summaryVi:
      'Máy ảo và trình giả lập, thiết bị thử nghiệm, proxy, Frida, adb, công cụ Xcode và thu thập log — luôn trên thiết bị thuộc sở hữu của bạn.',
    moduleIds: ['mod-mobile-test-env'],
    prerequisiteTrackIds: ['trk-mobile-architecture'],
  }),

  // ── Domain H: Cloud ─────────────────────────────────────────────────
  defineTrack({
    id: 'trk-cloud-fundamentals',
    domainId: 'dom-cloud',
    titleVi: 'Nền tảng cloud',
    summaryVi:
      'Trách nhiệm chung, vùng, tài khoản/dự án/subscription, người thuê, IAM, vai trò, chính sách, thông tin xác thực tạm thời, phân cấp tài nguyên, KMS và secret manager.',
    moduleIds: ['mod-cloud-shared-responsibility', 'mod-cloud-iam'],
  }),
  defineTrack({
    id: 'trk-cloud-aws',
    domainId: 'dom-cloud',
    titleVi: 'AWS',
    summaryVi:
      'IAM và STS, S3, EC2, Lambda, API Gateway, Cognito, CloudFront, ECR, ECS/EKS, KMS, Secrets Manager, CloudTrail, dịch vụ metadata, tin cậy giữa tài khoản và URL ký sẵn.',
    moduleIds: ['mod-cloud-aws-iam', 'mod-cloud-aws-storage'],
    prerequisiteTrackIds: ['trk-cloud-fundamentals'],
  }),
  defineTrack({
    id: 'trk-cloud-azure',
    domainId: 'dom-cloud',
    titleVi: 'Azure',
    summaryVi:
      'Entra ID, tenant/subscription/resource group, RBAC, managed identity, storage account, App Service, Functions, Key Vault, AKS, Microsoft Graph và SAS token.',
    moduleIds: ['mod-cloud-azure'],
    prerequisiteTrackIds: ['trk-cloud-fundamentals'],
  }),
  defineTrack({
    id: 'trk-cloud-gcp',
    domainId: 'dom-cloud',
    titleVi: 'Google Cloud',
    summaryVi:
      'Tổ chức/thư mục/dự án, IAM, service account, Cloud Storage, Compute Engine, Cloud Run, Cloud Functions, GKE, Secret Manager, KMS, workload identity và signed URL.',
    moduleIds: ['mod-cloud-gcp'],
    prerequisiteTrackIds: ['trk-cloud-fundamentals'],
  }),
  defineTrack({
    id: 'trk-cloud-attacks',
    domainId: 'dom-cloud',
    titleVi: 'Nhóm vấn đề cloud',
    summaryVi:
      'Lưu trữ công khai, IAM quá rộng, nhận vai trò và quan hệ tin cậy, lộ thông tin xác thực, truy cập metadata, truy cập chéo tài khoản, lạm dụng sự kiện serverless, khoảng trống log và tin cậy CI/CD tới cloud.',
    moduleIds: ['mod-cloud-attack-classes', 'mod-cloud-misconfig-vs-vuln'],
    prerequisiteTrackIds: ['trk-cloud-fundamentals'],
  }),

  // ── Domain I: Container ─────────────────────────────────────────────
  defineTrack({
    id: 'trk-container-basics',
    domainId: 'dom-container',
    titleVi: 'Container',
    summaryVi:
      'Image, Dockerfile, registry, lớp, runtime, namespace và cgroup ở mức khái niệm, bí mật, capability, container đặc quyền, phơi socket, mount volume và ký image.',
    moduleIds: ['mod-container-basics'],
  }),
  defineTrack({
    id: 'trk-k8s',
    domainId: 'dom-container',
    titleVi: 'Kubernetes',
    summaryVi:
      'Cụm, namespace, pod, service account, RBAC, admission, network policy, pod security, secret, ingress, API server, chuỗi cung ứng và cô lập đa người thuê.',
    moduleIds: ['mod-k8s-rbac', 'mod-k8s-workload-security'],
    prerequisiteTrackIds: ['trk-container-basics'],
  }),

  // ── Domain J: Network ───────────────────────────────────────────────
  defineTrack({
    id: 'trk-net-scope',
    domainId: 'dom-network',
    titleVi: 'Phạm vi mạng',
    summaryVi:
      'Tên miền, IP, CIDR, ASN ở mức khái niệm, dịch vụ, cổng, giao thức, ranh giới trong/ngoài, hosting dùng chung, CDN, VPN và truy cập từ xa.',
    moduleIds: ['mod-net-scope'],
  }),
  defineTrack({
    id: 'trk-net-services',
    domainId: 'dom-network',
    titleVi: 'Dịch vụ mạng',
    summaryVi:
      'DNS, HTTP/HTTPS, TLS, SSH, FTP/SFTP, SMB, RDP, VPN, giao thức email, dịch vụ cơ sở dữ liệu, dịch vụ thư mục và giao diện quản trị/giám sát.',
    moduleIds: ['mod-net-services'],
  }),
  defineTrack({
    id: 'trk-net-flaws',
    domainId: 'dom-network',
    titleVi: 'Nhóm lỗi hạ tầng',
    summaryVi:
      'Dịch vụ phơi ra ngoài, cấu hình mặc định trong lab, kiểm soát truy cập yếu, cấu hình TLS và DNS sai, lộ thông tin, giao diện quản trị, thất bại phân đoạn và nhận thức về phiên bản.',
    moduleIds: ['mod-net-flaws', 'mod-net-tls-dns'],
    prerequisiteTrackIds: ['trk-net-services'],
  }),
  defineTrack({
    id: 'trk-net-tools',
    domainId: 'dom-network',
    titleVi: 'Công cụ mạng và cách đọc kết quả',
    summaryVi:
      'Nmap, Wireshark, OpenSSL, dig/nslookup, curl và bắt gói; đặc biệt là cách xác nhận kết quả công cụ thay vì coi output là báo cáo hoàn chỉnh.',
    moduleIds: ['mod-net-tools'],
  }),

  // ── Domain K: Desktop ───────────────────────────────────────────────
  defineTrack({
    id: 'trk-desktop-architecture',
    domainId: 'dom-desktop',
    titleVi: 'Kiến trúc ứng dụng desktop',
    summaryVi:
      'Windows, Linux, macOS, Electron, .NET, Java desktop, native C/C++, tự động cập nhật, IPC, cơ sở dữ liệu cục bộ, cấu hình, plugin và dịch vụ đặc quyền.',
    moduleIds: ['mod-desktop-architecture'],
  }),
  defineTrack({
    id: 'trk-desktop-flaws',
    domainId: 'dom-desktop',
    titleVi: 'Nhóm lỗi desktop',
    summaryVi:
      'Bí mật cục bộ, lưu trữ không an toàn, phân quyền IPC, quyền tệp không an toàn, nạp thư viện, xác minh cập nhật, ký mã, ranh giới đặc quyền cục bộ và cấu hình Electron.',
    moduleIds: ['mod-desktop-flaws', 'mod-desktop-electron'],
    prerequisiteTrackIds: ['trk-desktop-architecture'],
  }),
  defineTrack({
    id: 'trk-desktop-method',
    domainId: 'dom-desktop',
    titleVi: 'Phương pháp phân tích desktop',
    summaryVi:
      'Phân tích tĩnh, phân tích động, phân tích lưu lượng, quan sát tệp và registry, quan sát tiến trình, kiểm thử cập nhật và kiểm thử IPC trong máy ảo.',
    moduleIds: ['mod-desktop-method'],
    prerequisiteTrackIds: ['trk-desktop-architecture'],
  }),

  // ── Domain L: Binary ────────────────────────────────────────────────
  defineTrack({
    id: 'trk-binary-foundations',
    domainId: 'dom-binary',
    titleVi: 'Nền tảng reverse engineering',
    summaryVi:
      'Kiến trúc CPU, assembly, quy ước gọi hàm, stack, heap, bộ nhớ tiến trình, ELF/PE/Mach-O, trình biên dịch, liên kết tĩnh và động, disassembler và decompiler.',
    moduleIds: ['mod-binary-foundations'],
  }),
  defineTrack({
    id: 'trk-binary-memory',
    domainId: 'dom-binary',
    titleVi: 'Lỗi bộ nhớ và cơ chế giảm thiểu',
    summaryVi:
      'Tràn bộ đệm, vấn đề số nguyên, use-after-free, double free, format string, type confusion, race; cùng ASLR, DEP/NX, stack canary, PIE, RELRO và CFI ở mức học tập.',
    moduleIds: ['mod-binary-memory-safety', 'mod-binary-mitigations'],
    prerequisiteTrackIds: ['trk-binary-foundations'],
  }),
  defineTrack({
    id: 'trk-binary-fuzzing',
    domainId: 'dom-binary',
    titleVi: 'Fuzzing và phân loại crash',
    summaryVi:
      'Thiết kế harness, sanitizer, phân loại crash, tìm nguyên nhân gốc, thu nhỏ reproducer và đọc bản vá để tìm biến thể.',
    moduleIds: ['mod-binary-fuzzing'],
    prerequisiteTrackIds: ['trk-binary-memory'],
  }),

  // ── Domain M: Code review ───────────────────────────────────────────
  defineTrack({
    id: 'trk-code-review-method',
    domainId: 'dom-code-review',
    titleVi: 'Phương pháp đọc mã',
    summaryVi:
      'Rà soát kiến trúc, threat model, trust boundary, điểm vào, nguồn, biến đổi, điểm nhận, luồng dữ liệu, xác thực, phân quyền, mật mã, bí mật, xử lý lỗi và đồng thời.',
    moduleIds: ['mod-code-source-sink', 'mod-code-authz-review'],
  }),
  defineTrack({
    id: 'trk-code-diff-review',
    domainId: 'dom-code-review',
    titleVi: 'Rà soát thay đổi và bản vá',
    summaryVi:
      'Đọc commit và pull request, hiểu bản vá bảo mật, phát hiện hồi quy, phân tích biến thể, tìm nguyên nhân gốc và lỗi anh em, đọc changelog và release note.',
    moduleIds: ['mod-code-diff-review', 'mod-code-variant-analysis'],
    prerequisiteTrackIds: ['trk-code-review-method'],
  }),
  defineTrack({
    id: 'trk-code-tooling',
    domainId: 'dom-code-review',
    titleVi: 'Công cụ hỗ trợ rà soát',
    summaryVi:
      'Tìm kiếm mã, AST, SAST, CodeQL, Semgrep ở mức tài liệu chính thức, trình quét phụ thuộc, trình quét bí mật, dương tính giả và xác minh thủ công.',
    moduleIds: ['mod-code-sast'],
    prerequisiteTrackIds: ['trk-code-review-method'],
  }),
  defineTrack({
    id: 'trk-code-disclosure',
    domainId: 'dom-code-review',
    titleVi: 'Công bố với dự án nguồn mở',
    summaryVi:
      'SECURITY.md, advisory riêng tư, liên hệ maintainer, thời gian cấm công bố, phối hợp phát hành và vì sao không mở issue công khai cho lỗ hổng chưa xử lý.',
    moduleIds: ['mod-code-oss-disclosure'],
  }),

  // ── Domain N: Supply chain ──────────────────────────────────────────
  defineTrack({
    id: 'trk-supply-deps',
    domainId: 'dom-supply-chain',
    titleVi: 'Phụ thuộc và hệ sinh thái gói',
    summaryVi:
      'Phụ thuộc trực tiếp và bắc cầu, lockfile, registry gói, namespace, typosquatting ở mức nhận biết, dependency confusion ở mức phòng thủ, SBOM, SLSA, Scorecard và Sigstore.',
    moduleIds: ['mod-supply-dependencies', 'mod-supply-provenance'],
    standardIds: ['std-slsa', 'std-owasp-scvs'],
  }),
  defineTrack({
    id: 'trk-supply-cicd',
    domainId: 'dom-supply-chain',
    titleVi: 'CI/CD và pipeline',
    summaryVi:
      'Hệ thống build, CI runner, quyền của workflow, bí mật, artifact, ký bản phát hành, GitHub Actions, workflow tái sử dụng, luồng fork, OIDC tới cloud và đầu độc artifact/cache.',
    moduleIds: ['mod-supply-cicd-trust', 'mod-supply-secrets'],
    prerequisiteTrackIds: ['trk-supply-deps'],
  }),

  // ── Domain O: IoT ───────────────────────────────────────────────────
  defineTrack({
    id: 'trk-iot-ecosystem',
    domainId: 'dom-iot',
    titleVi: 'Hệ sinh thái IoT',
    summaryVi:
      'Thiết bị, firmware, bootloader, phần cứng, ứng dụng đồng hành, backend đám mây, giao diện quản trị web, dịch vụ mạng, máy chủ cập nhật, cấp phát và ranh giới tin cậy vật lý.',
    moduleIds: ['mod-iot-ecosystem'],
    standardIds: ['std-owasp-istg'],
  }),
  defineTrack({
    id: 'trk-iot-firmware',
    domainId: 'dom-iot',
    titleVi: 'Firmware',
    summaryVi:
      'Lấy firmware hợp pháp, định dạng ảnh, hệ thống tệp, cấu hình, binary, script, bí mật, chứng chỉ và khoá, cập nhật, chữ ký, quay lui và secure boot ở mức khái niệm.',
    moduleIds: ['mod-iot-firmware'],
    prerequisiteTrackIds: ['trk-iot-ecosystem'],
  }),
  defineTrack({
    id: 'trk-iot-hardware',
    domainId: 'dom-iot',
    titleVi: 'Giao diện phần cứng',
    summaryVi:
      'UART, JTAG/SWD, SPI, I2C, flash, USB và cổng gỡ lỗi — chỉ thực hành trên bo mạch hoặc thiết bị thuộc sở hữu của bạn.',
    moduleIds: ['mod-iot-hardware-interfaces'],
    prerequisiteTrackIds: ['trk-iot-ecosystem'],
  }),

  // ── Domain P: Wireless ──────────────────────────────────────────────
  defineTrack({
    id: 'trk-wireless-core',
    domainId: 'dom-wireless',
    titleVi: 'Wireless, Bluetooth, NFC và RF',
    summaryVi:
      'Kiến trúc Wi-Fi, Bluetooth Classic và BLE, ghép nối và liên kết, GATT, NFC, RFID ở mức khái niệm, nền tảng SDR, quy định vô tuyến, phát lại, định danh thiết bị và quyền riêng tư.',
    moduleIds: ['mod-wireless-ble', 'mod-wireless-regulation'],
  }),

  // ── Domain Q: Automotive ────────────────────────────────────────────
  defineTrack({
    id: 'trk-automotive-core',
    domainId: 'dom-automotive',
    titleVi: 'Automotive và xe kết nối',
    summaryVi:
      'ECU, CAN, Automotive Ethernet, UDS ở mức kiến trúc, telematics, hệ thống giải trí, ứng dụng đồng hành, backend đám mây, cập nhật OTA, giao diện chẩn đoán và ràng buộc an toàn.',
    moduleIds: ['mod-automotive-architecture', 'mod-automotive-safety'],
  }),

  // ── Domain R: ICS/OT ────────────────────────────────────────────────
  defineTrack({
    id: 'trk-ics-core',
    domainId: 'dom-ics-ot',
    titleVi: 'ICS, OT và hệ thống công nghiệp',
    summaryVi:
      'PLC, HMI, SCADA, historian, trạm kỹ thuật, thiết bị hiện trường, hệ thống an toàn, mô hình Purdue, Modbus, OPC UA, DNP3, IEC 60870-5-104, phân đoạn và truy cập từ xa.',
    moduleIds: ['mod-ics-architecture', 'mod-ics-safety-constraints'],
    standardIds: ['std-nist-800-82', 'std-attack-ics'],
  }),

  // ── Domain S: Web3 ──────────────────────────────────────────────────
  defineTrack({
    id: 'trk-web3-foundations',
    domainId: 'dom-web3',
    titleVi: 'Nền tảng blockchain và EVM',
    summaryVi:
      'Blockchain, giao dịch, tài khoản, ví, khoá riêng, chữ ký, EVM, gas, lưu trữ, ABI, Solidity, sự kiện, tương tác hợp đồng và testnet/chain cục bộ.',
    moduleIds: ['mod-web3-foundations'],
  }),
  defineTrack({
    id: 'trk-web3-vulns',
    domainId: 'dom-web3',
    titleVi: 'Nhóm lỗ hổng hợp đồng thông minh',
    summaryVi:
      'Kiểm soát truy cập, reentrancy, lời gọi ngoài, chữ ký và phát lại, oracle, thao túng giá, flash loan, số học và độ chính xác, logic kinh tế, quản trị, nâng cấp, proxy và khởi tạo.',
    moduleIds: ['mod-web3-access-control', 'mod-web3-reentrancy', 'mod-web3-economic'],
    prerequisiteTrackIds: ['trk-web3-foundations'],
    standardIds: ['std-owasp-scsvs'],
  }),
  defineTrack({
    id: 'trk-web3-testing',
    domainId: 'dom-web3',
    titleVi: 'Kiểm thử hợp đồng',
    summaryVi:
      'Unit test, property test, fuzzing, invariant, phân tích tĩnh, fork cục bộ khi được phép, testnet và cách mô tả tác động kinh tế mà không gây thiệt hại thật.',
    moduleIds: ['mod-web3-testing'],
    prerequisiteTrackIds: ['trk-web3-foundations'],
  }),

  // ── Domain T: AI ────────────────────────────────────────────────────
  defineTrack({
    id: 'trk-ai-architecture',
    domainId: 'dom-ai',
    titleVi: 'Phân lớp hệ thống AI',
    summaryVi:
      'Mô hình, ứng dụng, prompt, RAG, vector database, agent, công cụ, plugin/connector, bộ nhớ, pipeline huấn luyện, model registry, inference API và phê duyệt của con người.',
    moduleIds: ['mod-ai-architecture'],
    standardIds: ['std-owasp-llm-top10'],
  }),
  defineTrack({
    id: 'trk-ai-vulns',
    domainId: 'dom-ai',
    titleVi: 'Nhóm lỗi hệ thống AI',
    summaryVi:
      'Prompt injection trực tiếp và gián tiếp, xử lý đầu ra không an toàn, lộ thông tin nhạy cảm, quyền quá mức, phân quyền công cụ, lộ dữ liệu RAG, cô lập vector store và bộ nhớ chéo người thuê.',
    moduleIds: ['mod-ai-prompt-injection', 'mod-ai-agent-authz', 'mod-ai-rag-isolation'],
    prerequisiteTrackIds: ['trk-ai-architecture'],
  }),
  defineTrack({
    id: 'trk-ai-policy',
    domainId: 'dom-ai',
    titleVi: 'Chính sách bug bounty cho AI',
    summaryVi:
      'Safe harbor dành riêng cho AI, phân biệt hành vi mô hình với lỗ hổng bảo mật, vì sao đầu ra có hại không mặc định là bounty, và yêu cầu chứng minh vượt ranh giới tin cậy.',
    moduleIds: ['mod-ai-policy'],
    prerequisiteTrackIds: ['trk-ai-architecture'],
  }),

  // ── Domain U: Browser extension ─────────────────────────────────────
  defineTrack({
    id: 'trk-browser-ext',
    domainId: 'dom-browser-ext',
    titleVi: 'Tiện ích trình duyệt và nền tảng client',
    summaryVi:
      'Manifest, quyền, content script, service worker nền, truyền thông điệp, native messaging, storage, cập nhật, tài nguyên truy cập được từ web, origin, CSP và ranh giới tiện ích với web.',
    moduleIds: ['mod-ext-architecture', 'mod-ext-message-boundary'],
  }),

  // ── Domain V: SaaS ──────────────────────────────────────────────────
  defineTrack({
    id: 'trk-saas-core',
    domainId: 'dom-saas',
    titleVi: 'SaaS, cộng tác và quy trình doanh nghiệp',
    summaryVi:
      'SPF/DKIM/DMARC ở mức kiến trúc, lời mời, tài liệu chia sẻ, workspace, tổ chức, nhóm, khách, xác minh tên miền, chia sẻ liên kết, webhook, tích hợp, ứng dụng OAuth, bot, xuất dữ liệu và nhật ký kiểm toán.',
    moduleIds: ['mod-saas-tenancy', 'mod-saas-email-auth', 'mod-saas-integrations'],
  }),

  // ── Domain W: Privacy ───────────────────────────────────────────────
  defineTrack({
    id: 'trk-privacy-core',
    domainId: 'dom-privacy',
    titleVi: 'Quyền riêng tư và lộ dữ liệu',
    summaryVi:
      'PII, dữ liệu cá nhân nhạy cảm, metadata, vị trí, danh bạ, tối thiểu hoá dữ liệu, cô lập người thuê, rò rỉ qua analytics và log, xuất, xoá, đồng ý, lưu trữ, sao lưu, chỉ mục tìm kiếm và che dữ liệu.',
    moduleIds: ['mod-privacy-classification', 'mod-privacy-impact-without-harm'],
  }),

  // ── Domain X: Emerging ──────────────────────────────────────────────
  defineTrack({
    id: 'trk-emerging-core',
    domainId: 'dom-emerging',
    titleVi: 'Lĩnh vực mới và bản đồ mở',
    summaryVi:
      'Cách đánh giá một bề mặt mới, bảy điều kiện để mở một specialization, và danh mục các lĩnh vực đang ở trạng thái planned.',
    moduleIds: ['mod-emerging-evaluating-new-surfaces'],
  }),
];
