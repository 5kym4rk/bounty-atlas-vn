import type { LearningModule } from '@/schemas/entities';
import { defineModule } from '../helpers';

const OWN_DEVICE =
  'Chỉ thực hành trên thiết bị, máy ảo hoặc tài khoản thuộc quyền sở hữu của bạn, hoặc trên tài sản nằm rõ trong phạm vi một chương trình còn hiệu lực.';

/** Module của domain G (mobile), H (cloud), I (container), J (network), K (desktop), L (binary). */
export const platformModules: LearningModule[] = [
  // ── G: Mobile ──────────────────────────────────────────────────────
  defineModule({
    id: 'mod-mobile-architecture',
    trackId: 'trk-mobile-architecture',
    titleVi: 'Kiến trúc ứng dụng di động',
    summaryVi:
      'Native, hybrid, Flutter, React Native, WebView, backend API, thông báo đẩy, deep link, universal link, app link, cơ sở dữ liệu cục bộ, lưu trữ an toàn, thư viện native, kênh cập nhật và SDK phân tích.',
    difficulty: 'beginner',
    estimatedHours: 6,
    learningObjectives: [
      'Nhận ra loại kiến trúc của một ứng dụng từ cấu trúc gói cài đặt.',
      'Vẽ sơ đồ ứng dụng gồm phần trên thiết bị, phần backend và các SDK bên thứ ba.',
      'Xác định điểm vào từ bên ngoài vào ứng dụng.',
    ],
    methodologyVi: [
      'Liệt kê mọi cách một ứng dụng khác hoặc một trang web có thể gửi dữ liệu vào ứng dụng này.',
    ],
    safetyNoteVi: OWN_DEVICE,
    remediationTopicIds: ['Coi mọi điểm vào từ bên ngoài là dữ liệu không tin cậy.'],
  }),
  defineModule({
    id: 'mod-mobile-android-components',
    trackId: 'trk-mobile-android',
    titleVi: 'Android: manifest, thành phần exported và intent',
    summaryVi:
      'APK/AAB, manifest, quyền, activity, service, broadcast receiver, content provider, intent, thành phần exported, WebView, network security config, app link và tính năng động.',
    difficulty: 'intermediate',
    estimatedHours: 8,
    learningObjectives: [
      'Đọc manifest và liệt kê thành phần nào truy cập được từ ứng dụng khác.',
      'Giải thích rủi ro của content provider và service exported không kiểm tra bên gọi.',
      'Đánh giá cấu hình WebView và network security config.',
    ],
    methodologyVi: [
      'Bắt đầu từ manifest; nó là bản khai báo bề mặt tấn công do chính nhà phát triển viết.',
    ],
    safetyNoteVi: OWN_DEVICE,
    remediationTopicIds: [
      'Đặt exported=false mặc định; kiểm tra danh tính bên gọi cho thành phần công khai.',
    ],
  }),
  defineModule({
    id: 'mod-mobile-android-storage',
    trackId: 'trk-mobile-android',
    titleVi: 'Android: lưu trữ, Keystore, sao lưu, log và clipboard',
    summaryVi:
      'Nơi ứng dụng lưu dữ liệu trên thiết bị, Android Keystore, cờ debuggable, cấu hình sao lưu, ghi log, clipboard, ảnh chụp màn hình và sinh trắc học.',
    difficulty: 'intermediate',
    estimatedHours: 6,
    learningObjectives: [
      'Tìm dữ liệu nhạy cảm lưu ở dạng không được bảo vệ trên thiết bị.',
      'Giải thích Keystore bảo vệ được gì và không bảo vệ được gì.',
      'Đánh giá rủi ro khi bật sao lưu tự động cho dữ liệu nhạy cảm.',
    ],
    safetyNoteVi: OWN_DEVICE,
    remediationTopicIds: ['Dùng kho khoá của nền tảng; loại dữ liệu nhạy cảm khỏi sao lưu và log.'],
  }),
  defineModule({
    id: 'mod-mobile-ios-platform',
    trackId: 'trk-mobile-ios',
    titleVi: 'iOS: entitlement, URL scheme, universal link và extension',
    summaryVi:
      'IPA, entitlement, Info.plist, URL scheme, universal link, App Transport Security, WebView, extension và app group.',
    difficulty: 'intermediate',
    estimatedHours: 8,
    learningObjectives: [
      'Đọc entitlement và Info.plist để xác định khả năng và điểm vào của ứng dụng.',
      'Phân biệt URL scheme tuỳ chỉnh với universal link về mặt tin cậy.',
      'Đánh giá cấu hình ATS và ngoại lệ của nó.',
    ],
    safetyNoteVi: OWN_DEVICE,
    remediationTopicIds: [
      'Ưu tiên universal link; xác thực nguồn của mọi dữ liệu đi vào qua liên kết.',
    ],
  }),
  defineModule({
    id: 'mod-mobile-ios-storage',
    trackId: 'trk-mobile-ios',
    titleVi: 'iOS: Keychain, Data Protection, pasteboard và sinh trắc học',
    summaryVi:
      'Keychain và các lớp bảo vệ, Data Protection, pasteboard, app group dùng chung dữ liệu, và sinh trắc học như một cổng giao diện chứ không phải một biện pháp mật mã.',
    difficulty: 'intermediate',
    estimatedHours: 6,
    learningObjectives: [
      'Chọn đúng lớp bảo vệ Keychain cho từng loại dữ liệu.',
      'Giải thích vì sao kiểm tra sinh trắc học ở phía client có thể bị bỏ qua.',
      'Đánh giá rủi ro chia sẻ dữ liệu qua app group và pasteboard.',
    ],
    safetyNoteVi: OWN_DEVICE,
    remediationTopicIds: [
      'Gắn dữ liệu nhạy cảm với lớp bảo vệ cao nhất phù hợp và với xác thực phía server.',
    ],
  }),
  defineModule({
    id: 'mod-mobile-network',
    trackId: 'trk-mobile-network',
    titleVi: 'Mạng và API của ứng dụng di động',
    summaryVi:
      'Kiểm tra chứng chỉ, TLS, xác thực API, lưu trữ token, gắn thiết bị, push token, trạng thái ngoại tuyến, phát lại, endpoint chỉ dành cho mobile và chuỗi từ deep link tới API.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Xác định endpoint mà chỉ ứng dụng di động gọi và kiểm thử chúng như API độc lập.',
      'Đánh giá cách ứng dụng lưu và làm mới token.',
      'Nhận ra chuỗi tấn công đi từ deep link tới một lời gọi API có đặc quyền.',
    ],
    methodologyVi: [
      'Đối chiếu danh sách endpoint của ứng dụng di động với danh sách của web để tìm phần chỉ có ở mobile.',
    ],
    safetyNoteVi: OWN_DEVICE,
    remediationTopicIds: ['Endpoint dành cho mobile phải có cùng mức kiểm tra phân quyền như web.'],
  }),
  defineModule({
    id: 'mod-mobile-test-env',
    trackId: 'trk-mobile-env',
    titleVi: 'Dựng môi trường kiểm thử di động',
    summaryVi:
      'Máy ảo và trình giả lập, thiết bị thử nghiệm, cấu hình proxy, công cụ đo lường động, adb, công cụ Xcode và thu thập log.',
    difficulty: 'intermediate',
    estimatedHours: 6,
    learningObjectives: [
      'Dựng môi trường quan sát lưu lượng của ứng dụng lab trên thiết bị của bạn.',
      'Hiểu vì sao thiết bị thử nghiệm phải tách khỏi thiết bị cá nhân.',
      'Thu thập log ứng dụng một cách có hệ thống.',
    ],
    safetyNoteVi:
      'Không cấu hình proxy hay công cụ đo lường trên thiết bị cá nhân đang dùng cho tài khoản thật. Không phân tích ứng dụng không thuộc phạm vi.',
    remediationTopicIds: [
      'Ứng dụng nên phát hiện môi trường không tin cậy nhưng không dựa vào đó làm biện pháp chính.',
    ],
  }),

  // ── H: Cloud ───────────────────────────────────────────────────────
  defineModule({
    id: 'mod-cloud-shared-responsibility',
    trackId: 'trk-cloud-fundamentals',
    titleVi: 'Mô hình trách nhiệm chung và phân cấp tài nguyên',
    summaryVi:
      'Ai chịu trách nhiệm cho phần nào, phân cấp tổ chức/dự án/tài khoản, vùng, người thuê, và vì sao ranh giới trách nhiệm quyết định điều gì đáng báo cáo.',
    difficulty: 'beginner',
    estimatedHours: 5,
    learningObjectives: [
      'Vẽ ranh giới trách nhiệm giữa nhà cung cấp và khách hàng cho ba loại dịch vụ khác nhau.',
      'Giải thích phân cấp tài nguyên và ảnh hưởng của nó tới kế thừa quyền.',
      'Xác định khi nào một phát hiện thuộc về nhà cung cấp và khi nào thuộc về khách hàng.',
    ],
    safetyNoteVi:
      'Chỉ dùng tài khoản cloud riêng do bạn tạo cho việc học. Không dùng tài khoản của công ty hay khách hàng.',
    remediationTopicIds: [
      'Xác định rõ chủ sở hữu cho từng lớp trước khi thiết kế biện pháp kiểm soát.',
    ],
  }),
  defineModule({
    id: 'mod-cloud-iam',
    trackId: 'trk-cloud-fundamentals',
    titleVi: 'IAM: danh tính, vai trò, chính sách và thông tin xác thực tạm thời',
    summaryVi:
      'Người dùng, vai trò, service account, chính sách gắn với danh tính và gắn với tài nguyên, thông tin xác thực tạm thời, KMS và secret manager.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Đọc một chính sách IAM và xác định chính xác nó cho phép gì.',
      'Giải thích quan hệ tin cậy cho phép một danh tính nhận vai trò khác.',
      'Nhận ra chính sách rộng hơn nhu cầu thực tế.',
    ],
    methodologyVi: [
      'Với mỗi vai trò, hỏi: nếu thông tin xác thực này lộ ra thì kẻ có nó làm được gì.',
    ],
    safetyNoteVi:
      'Thực hành trong tài khoản riêng của bạn. Đặt cảnh báo chi phí trước khi tạo tài nguyên.',
    remediationTopicIds: [
      'Đặc quyền tối thiểu, thông tin xác thực tạm thời, và điều kiện trong chính sách tin cậy.',
    ],
  }),
  defineModule({
    id: 'mod-cloud-aws-iam',
    trackId: 'trk-cloud-aws',
    titleVi: 'AWS: IAM, STS, nhận vai trò và tin cậy giữa tài khoản',
    summaryVi:
      'IAM và STS, chính sách gắn tài nguyên, tin cậy giữa các tài khoản, dịch vụ metadata của instance, KMS, Secrets Manager và CloudTrail.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Đọc chính sách tin cậy và xác định ai có thể nhận một vai trò.',
      'Giải thích vì sao dịch vụ metadata là đích có tác động cao khi có SSRF.',
      'Xác định khoảng trống ghi log khiến hành vi không được ghi nhận.',
    ],
    safetyNoteVi:
      'Chỉ trong tài khoản AWS riêng của bạn. Luôn dọn tài nguyên sau khi học để tránh phát sinh chi phí.',
    remediationTopicIds: [
      'Bắt buộc IMDSv2, giới hạn điều kiện trong chính sách tin cậy, bật ghi log đầy đủ.',
    ],
  }),
  defineModule({
    id: 'mod-cloud-aws-storage',
    trackId: 'trk-cloud-aws',
    titleVi: 'AWS: S3, truy cập công khai và URL ký sẵn',
    summaryVi:
      'Quyền truy cập object storage, chặn truy cập công khai, chính sách bucket, URL ký sẵn và rủi ro rò rỉ chúng.',
    difficulty: 'intermediate',
    estimatedHours: 5,
    learningObjectives: [
      'Phân biệt các lớp kiểm soát truy cập của object storage.',
      'Giải thích URL ký sẵn là thông tin xác thực và cần được xử lý như vậy.',
      'Đánh giá tác động của lưu trữ công khai dựa trên nội dung, không dựa trên số lượng tệp.',
    ],
    safetyNoteVi:
      'Nếu tìm thấy lưu trữ công khai chứa dữ liệu thật, không tải về. Ghi nhận sự tồn tại, chụp bằng chứng tối thiểu và báo cáo.',
    remediationTopicIds: [
      'Bật chặn truy cập công khai ở mức tài khoản; URL ký sẵn có thời hạn ngắn.',
    ],
  }),
  defineModule({
    id: 'mod-cloud-azure',
    trackId: 'trk-cloud-azure',
    titleVi: 'Azure: Entra ID, RBAC, managed identity và Key Vault',
    summaryVi:
      'Entra ID, tenant/subscription/resource group, RBAC, managed identity, storage account và SAS token, App Service, Functions, Key Vault, AKS và Microsoft Graph.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Giải thích quan hệ giữa tenant, subscription và resource group với việc gán quyền.',
      'Đánh giá phạm vi và thời hạn của SAS token.',
      'Nhận ra rủi ro khi managed identity có quyền rộng.',
    ],
    safetyNoteVi: 'Chỉ trong subscription riêng của bạn; đặt ngân sách và cảnh báo chi phí.',
    remediationTopicIds: [
      'Gán RBAC ở phạm vi hẹp nhất; SAS token thời hạn ngắn và có thể thu hồi.',
    ],
  }),
  defineModule({
    id: 'mod-cloud-gcp',
    trackId: 'trk-cloud-gcp',
    titleVi: 'Google Cloud: IAM, service account và workload identity',
    summaryVi:
      'Tổ chức/thư mục/dự án, IAM, service account và khoá của nó, Cloud Storage, Cloud Run, Cloud Functions, GKE, Secret Manager, KMS, workload identity và signed URL.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Giải thích kế thừa quyền theo phân cấp tài nguyên.',
      'Nêu vì sao khoá service account dạng tệp là rủi ro và workload identity giải quyết điều gì.',
      'Đánh giá quyền của một service account gắn với workload.',
    ],
    safetyNoteVi: 'Chỉ trong dự án riêng của bạn; luôn dọn tài nguyên và kiểm tra hoá đơn.',
    remediationTopicIds: [
      'Dùng workload identity thay cho khoá tĩnh; đặc quyền tối thiểu theo dự án.',
    ],
  }),
  defineModule({
    id: 'mod-cloud-attack-classes',
    trackId: 'trk-cloud-attacks',
    titleVi: 'Nhóm vấn đề cloud thường gặp',
    summaryVi:
      'Lưu trữ công khai, IAM quá rộng, nhận vai trò và tin cậy, lộ thông tin xác thực, truy cập metadata, truy cập chéo tài khoản, lạm dụng sự kiện serverless, rò rỉ URL ký sẵn, khoảng trống log và cô lập đa người thuê.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Nhận ra từng nhóm vấn đề từ dấu hiệu quan sát được.',
      'Xây dựng chuỗi từ một thông tin xác thực lộ ra tới tác động cụ thể.',
      'Mô tả tác động mà không cần thực sự truy cập dữ liệu.',
    ],
    safetyNoteVi:
      'Không dùng thông tin xác thực tìm được để truy cập tài nguyên thật. Mô tả phạm vi quyền của chúng và đề nghị xoay vòng.',
    remediationTopicIds: [
      'Xoay vòng bí mật, thu hẹp chính sách, bật ghi log ở mọi mặt phẳng điều khiển.',
    ],
  }),
  defineModule({
    id: 'mod-cloud-misconfig-vs-vuln',
    trackId: 'trk-cloud-attacks',
    titleVi: 'Cấu hình sai của khách hàng hay lỗ hổng sản phẩm',
    summaryVi:
      'Nhiều chương trình loại trừ cấu hình sai phía khách hàng. Phân biệt được hai loại này quyết định báo cáo của bạn có được nhận hay không.',
    difficulty: 'advanced',
    estimatedHours: 4,
    learningObjectives: [
      'Áp dụng mô hình trách nhiệm chung để phân loại một phát hiện.',
      'Đọc chính sách chương trình để biết loại nào được nhận.',
      'Viết báo cáo nêu rõ ranh giới trách nhiệm ngay trong phần tóm tắt.',
    ],
    safetyNoteVi:
      'Nếu phát hiện thuộc về một khách hàng chứ không thuộc nhà cung cấp, hãy báo cáo cho đúng bên và đừng đi sâu hơn.',
    remediationTopicIds: [
      'Nhà cung cấp nên đặt mặc định an toàn để giảm cấu hình sai của khách hàng.',
    ],
  }),

  // ── I: Container ───────────────────────────────────────────────────
  defineModule({
    id: 'mod-container-basics',
    trackId: 'trk-container-basics',
    titleVi: 'Container: image, lớp, runtime và ranh giới với host',
    summaryVi:
      'Dockerfile, lớp image, registry, runtime, namespace và cgroup ở mức khái niệm, capability, container đặc quyền, phơi socket runtime, mount volume, bí mật trong image và ký image.',
    difficulty: 'intermediate',
    estimatedHours: 8,
    learningObjectives: [
      'Giải thích vì sao container là ranh giới cô lập chứ không phải ranh giới bảo mật mạnh như máy ảo.',
      'Tìm bí mật còn sót lại trong các lớp image.',
      'Nhận ra cấu hình làm mờ ranh giới container với host.',
    ],
    safetyNoteVi:
      'Chỉ chạy container lab trên máy của bạn. Không chạy image không rõ nguồn gốc trên máy chứa dữ liệu thật.',
    remediationTopicIds: [
      'Không chạy đặc quyền, không mount socket runtime, quản lý bí mật ngoài image.',
    ],
  }),
  defineModule({
    id: 'mod-k8s-rbac',
    trackId: 'trk-k8s',
    titleVi: 'Kubernetes: RBAC, service account và namespace',
    summaryVi:
      'Mô hình RBAC của Kubernetes, service account gắn với pod, ranh giới namespace, và vì sao một quyền tưởng như nhỏ có thể dẫn tới quyền quản trị cụm.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Đọc Role và RoleBinding rồi xác định chính xác quyền được cấp.',
      'Giải thích các quyền có khả năng leo thang tới quản trị cụm.',
      'Đánh giá việc gắn token service account vào pod.',
    ],
    safetyNoteVi: 'Chỉ trên cụm cục bộ hoặc cụm riêng của bạn, không trên cụm dùng chung.',
    remediationTopicIds: [
      'Đặc quyền tối thiểu theo namespace; tắt tự động gắn token khi không cần.',
    ],
  }),
  defineModule({
    id: 'mod-k8s-workload-security',
    trackId: 'trk-k8s',
    titleVi: 'Kubernetes: pod security, network policy, admission và secret',
    summaryVi:
      'Chuẩn bảo mật pod, network policy, admission control, quản lý secret, ingress, bảo vệ API server, etcd ở mức kiến trúc và cô lập đa người thuê.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Giải thích vì sao thiếu network policy nghĩa là mọi pod nói chuyện được với mọi pod.',
      'Đánh giá cách secret được lưu và được đưa vào pod.',
      'Nêu vai trò của admission control trong việc chặn cấu hình nguy hiểm.',
    ],
    safetyNoteVi: 'Chỉ trên cụm lab của bạn.',
    remediationTopicIds: ['Network policy mặc định từ chối; chuẩn bảo mật pod ở mức restricted.'],
  }),

  // ── J: Network ─────────────────────────────────────────────────────
  defineModule({
    id: 'mod-net-scope',
    trackId: 'trk-net-scope',
    titleVi: 'Xác định phạm vi mạng',
    summaryVi:
      'Tên miền, IP, CIDR, ASN ở mức khái niệm, dịch vụ, cổng, giao thức, ranh giới trong và ngoài, hosting dùng chung, CDN, VPN, truy cập từ xa và thiết bị mạng.',
    difficulty: 'beginner',
    estimatedHours: 5,
    learningObjectives: [
      'Xác định một địa chỉ IP có thực sự thuộc tổ chức hay thuộc nhà cung cấp dùng chung.',
      'Giải thích vì sao CDN và hosting dùng chung làm phạm vi trở nên mơ hồ.',
      'Ghi lại bằng chứng cho thấy một tài sản nằm trong phạm vi.',
    ],
    safetyNoteVi:
      'Không quét dải địa chỉ mà bạn không sở hữu hoặc chưa được cho phép rõ ràng. Phần mềm này không có chức năng quét.',
    remediationTopicIds: ['Tổ chức nên duy trì danh mục tài sản mạng chính xác.'],
  }),
  defineModule({
    id: 'mod-net-services',
    trackId: 'trk-net-services',
    titleVi: 'Dịch vụ mạng phổ biến',
    summaryVi:
      'DNS, HTTP/HTTPS, TLS, SSH, FTP/SFTP, SMB, RDP, VPN, giao thức email, dịch vụ cơ sở dữ liệu, dịch vụ thư mục và giao diện quản trị/giám sát.',
    difficulty: 'beginner',
    estimatedHours: 6,
    learningObjectives: [
      'Nhận ra dịch vụ từ hành vi giao thức, không chỉ từ số cổng.',
      'Nêu dịch vụ nào không bao giờ nên phơi ra Internet.',
      'Giải thích rủi ro của giao thức không mã hoá trong mạng hiện đại.',
    ],
    safetyNoteVi: 'Thực hành trên dịch vụ chạy trong lab của bạn.',
    remediationTopicIds: ['Chỉ phơi ra dịch vụ cần thiết; dùng giao thức có mã hoá.'],
  }),
  defineModule({
    id: 'mod-net-flaws',
    trackId: 'trk-net-flaws',
    titleVi: 'Nhóm lỗi hạ tầng và phân biệt với banner phiên bản',
    summaryVi:
      'Dịch vụ phơi ra ngoài, cấu hình mặc định, kiểm soát truy cập yếu, lộ thông tin, giao diện quản trị, thất bại phân đoạn và nhận thức về phiên bản — cùng lý do vì sao một banner phiên bản cũ chưa phải một lỗ hổng.',
    difficulty: 'intermediate',
    estimatedHours: 6,
    learningObjectives: [
      'Phân biệt "phiên bản có lỗ hổng đã biết" với "hệ thống này bị ảnh hưởng".',
      'Xác minh một phát hiện hạ tầng trước khi báo cáo.',
      'Mô tả tác động của một dịch vụ phơi ra ngoài theo dữ liệu và chức năng nó cung cấp.',
    ],
    safetyNoteVi:
      'Không khai thác dịch vụ hạ tầng trên hệ thống thật. Xác nhận sự tồn tại và mô tả rủi ro là đủ trong hầu hết chương trình.',
    remediationTopicIds: ['Vá và cấu hình cứng dịch vụ; giới hạn truy cập theo mạng nguồn.'],
  }),
  defineModule({
    id: 'mod-net-tls-dns',
    trackId: 'trk-net-flaws',
    titleVi: 'Cấu hình sai TLS và DNS',
    summaryVi:
      'Chuỗi chứng chỉ, thời hạn, giao thức và bộ mã yếu, tên miền không khớp; cùng các cấu hình DNS dễ sai như bản ghi trỏ tới tài nguyên đã bị thu hồi.',
    difficulty: 'intermediate',
    estimatedHours: 5,
    learningObjectives: [
      'Kiểm tra cấu hình TLS của một dịch vụ trong lab và giải thích từng phát hiện.',
      'Nhận ra bản ghi DNS trỏ tới tài nguyên không còn thuộc tổ chức.',
      'Đánh giá tác động thực tế thay vì liệt kê mọi cảnh báo của công cụ.',
    ],
    safetyNoteVi:
      'Nếu nghi ngờ một tên miền có thể bị chiếm, không tự đăng ký tài nguyên đích để chứng minh. Báo cáo dấu hiệu và để tổ chức xử lý.',
    remediationTopicIds: ['Dọn bản ghi DNS treo; cấu hình TLS theo hướng dẫn hiện hành.'],
  }),
  defineModule({
    id: 'mod-net-tools',
    trackId: 'trk-net-tools',
    titleVi: 'Công cụ mạng và xác minh kết quả',
    summaryVi:
      'Nmap, Wireshark, OpenSSL, dig/nslookup, curl và bắt gói — mục đích, giới hạn và cách xác minh lại kết quả trước khi kết luận.',
    difficulty: 'intermediate',
    estimatedHours: 6,
    learningObjectives: [
      'Hiểu ý nghĩa các trạng thái cổng mà công cụ quét báo cáo.',
      'Đọc một bản bắt gói để xác nhận điều công cụ nói.',
      'Nêu vì sao kết quả quét không phải là báo cáo hoàn chỉnh.',
    ],
    safetyNoteVi:
      'Chỉ chạy công cụ mạng với đích thuộc lab của bạn. Quét ngoài phạm vi có thể vi phạm pháp luật.',
    remediationTopicIds: ['Không áp dụng — module công cụ'],
  }),

  // ── K: Desktop ─────────────────────────────────────────────────────
  defineModule({
    id: 'mod-desktop-architecture',
    trackId: 'trk-desktop-architecture',
    titleVi: 'Kiến trúc ứng dụng desktop và thick client',
    summaryVi:
      'Windows, Linux, macOS, Electron, .NET, Java desktop, native C/C++, tự động cập nhật, IPC, cơ sở dữ liệu cục bộ, cấu hình, plugin, tích hợp trình duyệt, backend API và dịch vụ đặc quyền.',
    difficulty: 'intermediate',
    estimatedHours: 6,
    learningObjectives: [
      'Xác định tiến trình nào chạy với quyền nào trong một ứng dụng desktop.',
      'Liệt kê các kênh IPC mà ứng dụng sử dụng.',
      'Nhận ra khi ứng dụng desktop chỉ là vỏ bọc quanh nội dung web.',
    ],
    safetyNoteVi: 'Phân tích trong máy ảo tách biệt, với phần mềm mà giấy phép cho phép phân tích.',
    remediationTopicIds: ['Tách tiến trình theo đặc quyền; xác thực bên gọi trên mọi kênh IPC.'],
  }),
  defineModule({
    id: 'mod-desktop-flaws',
    trackId: 'trk-desktop-flaws',
    titleVi: 'Nhóm lỗi desktop: lưu trữ, IPC, nạp thư viện và cập nhật',
    summaryVi:
      'Bí mật cục bộ, lưu trữ không an toàn, phân quyền IPC, quyền tệp không an toàn, nạp thư viện động, xác minh cập nhật, ký mã, gọi lệnh, ranh giới đặc quyền cục bộ và giao diện gỡ lỗi.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Kiểm tra quyền tệp của thư mục cài đặt và thư mục dữ liệu.',
      'Đánh giá kênh IPC có xác thực bên gọi hay không.',
      'Đánh giá quy trình cập nhật: kênh, xác minh chữ ký và khả năng hạ cấp.',
    ],
    safetyNoteVi:
      'Chỉ thực hiện trong máy ảo. Thay đổi quyền tệp hoặc dịch vụ trên máy thật có thể gây mất an toàn cho chính bạn.',
    remediationTopicIds: ['Ký và xác minh gói cập nhật; quyền tệp chặt; xác thực bên gọi IPC.'],
  }),
  defineModule({
    id: 'mod-desktop-electron',
    trackId: 'trk-desktop-flaws',
    titleVi: 'Electron và nội dung web nhúng',
    summaryVi:
      'Cấu hình cách ly ngữ cảnh, tích hợp Node, preload script và ranh giới giữa nội dung web với API hệ thống trong ứng dụng Electron.',
    difficulty: 'advanced',
    estimatedHours: 5,
    learningObjectives: [
      'Đọc cấu hình cửa sổ Electron và xác định mức cách ly.',
      'Giải thích vì sao XSS trong Electron có thể nghiêm trọng hơn nhiều so với trên web.',
      'Đánh giá preload script như một bề mặt API.',
    ],
    safetyNoteVi: 'Chỉ trên ứng dụng lab hoặc ứng dụng nằm trong phạm vi, trong máy ảo.',
    remediationTopicIds: ['Bật cách ly ngữ cảnh, tắt tích hợp Node cho nội dung không tin cậy.'],
  }),
  defineModule({
    id: 'mod-desktop-method',
    trackId: 'trk-desktop-method',
    titleVi: 'Phương pháp phân tích ứng dụng desktop',
    summaryVi:
      'Phân tích tĩnh, phân tích động, phân tích lưu lượng, quan sát tệp và registry, quan sát tiến trình, kiểm thử cập nhật và kiểm thử IPC trong máy ảo.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Thiết lập máy ảo có công cụ quan sát trước khi cài ứng dụng cần phân tích.',
      'Ghi lại mọi tệp, khoá registry và tiến trình mà ứng dụng tạo ra.',
      'Kết hợp quan sát tĩnh và động để dựng bản đồ hành vi ứng dụng.',
    ],
    safetyNoteVi:
      'Chụp ảnh trạng thái máy ảo trước khi cài đặt để có thể khôi phục. Không phân tích phần mềm độc hại trong module này.',
    remediationTopicIds: ['Không áp dụng — module phương pháp'],
  }),

  // ── L: Binary ──────────────────────────────────────────────────────
  defineModule({
    id: 'mod-binary-foundations',
    trackId: 'trk-binary-foundations',
    titleVi: 'Nền tảng: CPU, assembly, bộ nhớ tiến trình và định dạng thực thi',
    summaryVi:
      'Kiến trúc CPU, assembly, quy ước gọi hàm, stack, heap, bố cục bộ nhớ tiến trình, ELF, PE, Mach-O, trình biên dịch, trình liên kết, ký hiệu gỡ lỗi, liên kết tĩnh và động.',
    difficulty: 'advanced',
    estimatedHours: 20,
    learningObjectives: [
      'Đọc một hàm assembly đơn giản và ánh xạ nó về mã nguồn tương ứng.',
      'Giải thích quy ước gọi hàm và vai trò của stack frame.',
      'Nhận biết cấu trúc của một tệp thực thi và ý nghĩa các section.',
    ],
    safetyNoteVi:
      'Chỉ phân tích binary lab hoặc phần mềm bạn được phép phân tích. Kiểm tra điều khoản giấy phép trước.',
    remediationTopicIds: ['Không áp dụng — module nền tảng'],
  }),
  defineModule({
    id: 'mod-binary-memory-safety',
    trackId: 'trk-binary-memory',
    titleVi: 'Các lớp lỗi bộ nhớ',
    summaryVi:
      'Tràn bộ đệm, vấn đề số nguyên, use-after-free, double free, format string, type confusion và race — nguyên nhân gốc, dấu hiệu và cách nhận biết trong mã nguồn.',
    difficulty: 'research',
    estimatedHours: 20,
    learningObjectives: [
      'Nhận ra mẫu mã nguồn dẫn tới từng lớp lỗi.',
      'Giải thích vì sao vấn đề số nguyên thường là nguyên nhân đứng sau tràn bộ đệm.',
      'Phân biệt lỗi gây crash với lỗi có thể ảnh hưởng luồng điều khiển.',
    ],
    safetyNoteVi:
      'Chỉ thực hành trên binary lab. Không xây dựng bộ khai thác nhắm tới phần mềm đang được sử dụng thực tế.',
    remediationTopicIds: [
      'Dùng ngôn ngữ an toàn bộ nhớ ở ranh giới xử lý dữ liệu không tin cậy.',
      'Kiểm tra biên và vòng đời đối tượng một cách hệ thống.',
    ],
  }),
  defineModule({
    id: 'mod-binary-mitigations',
    trackId: 'trk-binary-memory',
    titleVi: 'Cơ chế giảm thiểu: ASLR, DEP/NX, canary, PIE, RELRO, CFI',
    summaryVi:
      'Các cơ chế giảm thiểu ở mức học tập: chúng chống được gì, giả định của chúng là gì, và vì sao không cơ chế nào là tuyệt đối.',
    difficulty: 'research',
    estimatedHours: 10,
    learningObjectives: [
      'Giải thích từng cơ chế giảm thiểu chống lại bước nào trong chuỗi khai thác.',
      'Kiểm tra một binary xem cơ chế nào đang được bật.',
      'Nêu vì sao đánh giá rủi ro phải tính tới cơ chế giảm thiểu đang có.',
    ],
    safetyNoteVi: 'Chỉ trên binary lab.',
    remediationTopicIds: ['Bật đầy đủ cờ cứng hoá khi biên dịch.'],
  }),
  defineModule({
    id: 'mod-binary-fuzzing',
    trackId: 'trk-binary-fuzzing',
    titleVi: 'Fuzzing, sanitizer và phân loại crash',
    summaryVi:
      'Thiết kế harness, dùng sanitizer để phát hiện lỗi sớm, phân loại crash, tìm nguyên nhân gốc, thu nhỏ reproducer và đọc bản vá để tìm biến thể.',
    difficulty: 'research',
    estimatedHours: 16,
    learningObjectives: [
      'Viết một harness fuzzing cho một hàm phân tích dữ liệu trong dự án lab.',
      'Phân loại crash theo mức độ nghiêm trọng thay vì theo số lượng.',
      'Thu nhỏ một reproducer về dạng tối thiểu để đưa vào báo cáo.',
    ],
    methodologyVi: ['Ưu tiên chất lượng corpus và độ bao phủ hơn số lượng lần chạy.'],
    safetyNoteVi:
      'Fuzz phần mềm trên máy của bạn, trong môi trường tách biệt. Không fuzz dịch vụ trực tuyến của người khác — đó là tấn công gây tải.',
    remediationTopicIds: [
      'Đưa fuzzing liên tục vào pipeline; sửa nguyên nhân gốc thay vì từng crash.',
    ],
  }),
];
