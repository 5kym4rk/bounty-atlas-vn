import type { ChecklistItem, TestingChecklist } from '@/schemas/entities';

/**
 * Checklist kiểm thử theo ngữ cảnh.
 *
 * Mỗi mục là một CÂU HỎI hoặc một QUAN SÁT, không phải payload.
 */

const item = (
  id: string,
  questionVi: string,
  whyVi: string,
  options: Partial<ChecklistItem> = {},
): ChecklistItem => ({
  id,
  questionVi,
  whyVi,
  appliesWhen: { assetTypes: [], roles: [], dataTypes: [] },
  relatedWeaknessIds: [],
  stopConditionVi: null,
  ...options,
});

export const checklists: TestingChecklist[] = [
  {
    id: 'chk-program-policy',
    titleVi: 'Trước khi bắt đầu: đọc chính sách chương trình',
    domainId: 'dom-policy',
    context: 'program-policy',
    safetyNoteVi:
      'Hoàn thành toàn bộ checklist này trước khi gửi request đầu tiên. Nếu còn một mục chưa trả lời được, hãy hỏi chương trình thay vì đoán.',
    items: [
      item(
        'chk-program-policy-1',
        'Tài sản bạn định kiểm thử có được liệt kê tường minh trong phạm vi không?',
        'Wildcard và hạ tầng dùng chung thường không bao gồm mọi thứ trông giống tên miền của tổ chức.',
        { stopConditionVi: 'Nếu không chắc, coi như ngoài phạm vi và hỏi chương trình trước.' },
      ),
      item(
        'chk-program-policy-2',
        'Chính sách cấm những hành vi cụ thể nào?',
        'Danh sách hành vi bị cấm quan trọng ngang danh sách tài sản; vi phạm có thể làm mất bảo vệ safe harbor.',
      ),
      item(
        'chk-program-policy-3',
        'Có giới hạn tốc độ, khung giờ kiểm thử hoặc yêu cầu về tài khoản không?',
        'Vượt giới hạn kỹ thuật có thể bị coi là gây ảnh hưởng dịch vụ.',
      ),
      item(
        'chk-program-policy-4',
        'Chính sách quy định thế nào về việc tiếp xúc và xử lý dữ liệu người dùng?',
        'Quy định dữ liệu quyết định bạn được giữ bằng chứng ở mức nào và phải xoá gì sau khi báo cáo.',
        { stopConditionVi: 'Dừng ngay khi chạm tới dữ liệu của người thật.' },
      ),
      item(
        'chk-program-policy-5',
        'Điều khoản công bố cho phép bạn chia sẻ báo cáo khi nào?',
        'Công bố khi chưa được phép là vi phạm chính sách, kể cả khi lỗ hổng đã được sửa.',
      ),
      item(
        'chk-program-policy-6',
        'Bạn đã lưu lại bản chính sách kèm ngày đọc chưa?',
        'Chương trình có thể đổi phạm vi; bản lưu giúp bạn chứng minh mình đã hành động đúng tại thời điểm đó.',
      ),
    ],
  },
  {
    id: 'chk-asset-mapping',
    titleVi: 'Lập bản đồ tài sản và vai trò',
    domainId: 'dom-methodology',
    context: 'asset-mapping',
    safetyNoteVi:
      'Mọi việc lập bản đồ ở đây là thủ công và trong phạm vi. Ứng dụng này không nhận mục tiêu và không chạy quét.',
    items: [
      item(
        'chk-asset-mapping-1',
        'Bạn đã liệt kê được các vai trò người dùng và tạo tài khoản thử nghiệm cho từng vai trò chưa?',
        'Không có hai tài khoản thì không kiểm thử được phân quyền một cách an toàn.',
      ),
      item(
        'chk-asset-mapping-2',
        'Loại dữ liệu nào ứng dụng xử lý và loại nào nhạy cảm nhất?',
        'Tác động của mọi phát hiện sau này được đo bằng dữ liệu bị ảnh hưởng.',
      ),
      item(
        'chk-asset-mapping-3',
        'Bạn đã đi qua toàn bộ tính năng một lượt trước khi thử bất cứ điều gì chưa?',
        'Bản đồ đầy đủ giúp tránh việc thử ngẫu nhiên và tránh chạm nhầm chức năng nguy hiểm.',
      ),
      item(
        'chk-asset-mapping-4',
        'Có tính năng nào gọi tới dịch vụ bên thứ ba không?',
        'Nhà cung cấp bên thứ ba thường nằm ngoài phạm vi dù được truy cập từ tài sản trong phạm vi.',
        { stopConditionVi: 'Dừng nếu phép thử sẽ tác động tới hệ thống của bên thứ ba.' },
      ),
      item(
        'chk-asset-mapping-5',
        'Bạn đã đánh dấu các trust boundary trên sơ đồ chưa?',
        'Mỗi trust boundary là một nhóm câu hỏi kiểm thử cụ thể.',
      ),
    ],
  },
  {
    id: 'chk-authentication',
    titleVi: 'Xác thực',
    domainId: 'dom-web',
    context: 'authentication',
    safetyNoteVi:
      'Chỉ thao tác trên tài khoản do bạn tạo. Không thử mật khẩu hàng loạt và không dùng danh sách thông tin đăng nhập rò rỉ.',
    items: [
      item(
        'chk-authentication-1',
        'Phản hồi khi đăng nhập thất bại có giống nhau cho tài khoản tồn tại và không tồn tại không?',
        'Khác biệt về nội dung, mã trạng thái hoặc thời gian đều cho phép liệt kê tài khoản.',
        { relatedWeaknessIds: ['wkn-user-enumeration'] },
      ),
      item(
        'chk-authentication-2',
        'Định danh phiên có thay đổi sau khi đăng nhập thành công không?',
        'Không đổi định danh phiên sau khi nâng đặc quyền là điều kiện của cố định phiên.',
        { relatedWeaknessIds: ['wkn-weak-session'] },
      ),
      item(
        'chk-authentication-3',
        'Trạng thái đã qua bước một của MFA được lưu ở phía server hay phía client?',
        'Nếu lưu ở client, bước thứ hai có thể bị bỏ qua.',
      ),
      item(
        'chk-authentication-4',
        'Token đặt lại mật khẩu có dùng một lần, có thời hạn ngắn và không xuất hiện trong URL chia sẻ không?',
        'Đường khôi phục thường là mắt xích yếu nhất của toàn hệ thống xác thực.',
        { relatedWeaknessIds: ['wkn-weak-reset'] },
      ),
      item(
        'chk-authentication-5',
        'Mọi phiên đang mở có bị vô hiệu sau khi đổi mật khẩu không?',
        'Nếu không, người đã chiếm phiên vẫn giữ được truy cập sau khi nạn nhân đổi mật khẩu.',
        { relatedWeaknessIds: ['wkn-weak-session'] },
      ),
    ],
  },
  {
    id: 'chk-authorization',
    titleVi: 'Phân quyền',
    domainId: 'dom-web',
    context: 'authorization',
    safetyNoteVi:
      'Dùng hai tài khoản do chính bạn tạo. Không liệt kê hàng loạt định danh. Dừng ngay nếu thấy dữ liệu của người thật.',
    items: [
      item(
        'chk-authorization-1',
        'Với mỗi đối tượng, tài khoản A có truy cập được đối tượng của tài khoản B không?',
        'Đây là phép thử cốt lõi cho phân quyền ở mức đối tượng.',
        {
          relatedWeaknessIds: ['wkn-idor'],
          stopConditionVi: 'Dừng ngay nếu dữ liệu trả về thuộc về người dùng thật.',
        },
      ),
      item(
        'chk-authorization-2',
        'Phân quyền có được kiểm tra cho mọi method HTTP, không chỉ method mà giao diện sử dụng?',
        'Nhiều triển khai chỉ bảo vệ method mà giao diện gọi.',
        { relatedWeaknessIds: ['wkn-bfla'] },
      ),
      item(
        'chk-authorization-3',
        'Client có đặt được thuộc tính mà nó không nên kiểm soát không?',
        'Mass assignment cho phép leo thang mà không cần chạm tới endpoint quản trị.',
        { relatedWeaknessIds: ['wkn-mass-assignment'] },
      ),
      item(
        'chk-authorization-4',
        'Chức năng tìm kiếm, xuất dữ liệu và báo cáo có ràng buộc theo người thuê không?',
        'Đây là những nơi kiểm tra người thuê hay bị bỏ sót nhất.',
        {
          relatedWeaknessIds: ['wkn-tenant-isolation'],
          stopConditionVi: 'Dừng ngay nếu kết quả chứa dữ liệu của tổ chức khác.',
        },
      ),
      item(
        'chk-authorization-5',
        'Quy trình nhiều bước có kiểm tra phân quyền ở từng bước chuyển trạng thái không?',
        'Phân quyền theo trạng thái thường chỉ được kiểm ở bước đầu.',
      ),
    ],
  },
  {
    id: 'chk-business-flow',
    titleVi: 'Luồng nghiệp vụ',
    domainId: 'dom-web',
    context: 'business-flow',
    safetyNoteVi:
      'Dừng ở bước chứng minh hệ thống chấp nhận trạng thái không hợp lệ. Không hoàn tất giao dịch tài chính thật.',
    items: [
      item(
        'chk-business-flow-1',
        'Bạn đã mô tả được ý định của tính năng bằng lời trước khi kiểm thử chưa?',
        'Không hiểu ý định thì không nhận ra trạng thái nào là bất thường.',
      ),
      item(
        'chk-business-flow-2',
        'Có bước nào trong quy trình bỏ qua được không?',
        'Bỏ bước là dạng lỗi logic phổ biến nhất và thường có tác động rõ ràng.',
        { relatedWeaknessIds: ['wkn-business-logic'] },
      ),
      item(
        'chk-business-flow-3',
        'Giá trị số có chấp nhận số âm, số không hoặc số rất lớn không?',
        'Giá trị biên hay bị bỏ qua trong kiểm tra phía server.',
        { relatedWeaknessIds: ['wkn-business-logic'] },
      ),
      item(
        'chk-business-flow-4',
        'Thao tác chỉ được phép một lần có chịu được hai request đồng thời không?',
        'Đây là điều kiện của race condition trong tính năng dùng một lần.',
        {
          relatedWeaknessIds: ['wkn-race-condition'],
          stopConditionVi: 'Dùng tối đa hai tới ba request song song; không gửi hàng loạt.',
        },
      ),
      item(
        'chk-business-flow-5',
        'Giá và số lượng được quyết định ở client hay ở server?',
        'Nếu client quyết định, mọi kiểm tra phía client đều có thể bị bỏ qua.',
      ),
    ],
  },
  {
    id: 'chk-web-feature',
    titleVi: 'Một tính năng web bất kỳ',
    domainId: 'dom-web',
    context: 'web-feature',
    safetyNoteVi:
      'Với XSS lưu trữ, dùng khu vực chỉ mình bạn xem được nếu có, và xoá nội dung thử nghiệm ngay sau khi chụp bằng chứng.',
    items: [
      item(
        'chk-web-feature-1',
        'Dữ liệu bạn nhập xuất hiện ở những ngữ cảnh đầu ra nào?',
        'Ngữ cảnh quyết định cách mã hoá đúng và quyết định lỗi có tồn tại hay không.',
        { relatedWeaknessIds: ['wkn-xss-reflected', 'wkn-xss-stored'] },
      ),
      item(
        'chk-web-feature-2',
        'Tính năng có nhận URL do người dùng cung cấp không?',
        'Đây là điều kiện tiên quyết của SSRF và open redirect.',
        { relatedWeaknessIds: ['wkn-ssrf', 'wkn-open-redirect'] },
      ),
      item(
        'chk-web-feature-3',
        'Tính năng có nhận hoặc trả về tệp không?',
        'Tải lên, tải xuống và xử lý tệp là ba bề mặt riêng biệt.',
        { relatedWeaknessIds: ['wkn-unrestricted-upload', 'wkn-path-traversal'] },
      ),
      item(
        'chk-web-feature-4',
        'Thao tác gây thay đổi có yêu cầu token chống CSRF hoặc cookie SameSite phù hợp không?',
        'Thiếu cả hai nghĩa là site khác có thể kích hoạt thao tác thay người dùng.',
        { relatedWeaknessIds: ['wkn-csrf'] },
      ),
      item(
        'chk-web-feature-5',
        'Phản hồi có chứa trường nào mà giao diện không hiển thị không?',
        'Đây là dấu hiệu lộ dữ liệu quá mức.',
        { relatedWeaknessIds: ['wkn-excessive-data'] },
      ),
    ],
  },
  {
    id: 'chk-api',
    titleVi: 'API',
    domainId: 'dom-api',
    context: 'api',
    safetyNoteVi:
      'Tự đặt giới hạn tốc độ. Dừng ngay khi thấy dấu hiệu ảnh hưởng dịch vụ. Không tải hàng loạt dữ liệu.',
    items: [
      item(
        'chk-api-1',
        'Bạn đã dựng ma trận vai trò × đối tượng × thao tác từ schema chưa?',
        'Kiểm thử API không có ma trận sẽ luôn bỏ sót phần lớn tổ hợp.',
      ),
      item(
        'chk-api-2',
        'Có endpoint nào chỉ ứng dụng di động gọi mà web không gọi không?',
        'Endpoint dành riêng cho mobile thường ít được kiểm thử hơn.',
      ),
      item(
        'chk-api-3',
        'Có phiên bản API cũ hoặc endpoint không có trong tài liệu vẫn hoạt động không?',
        'API cũ thường không được cập nhật cùng lớp phân quyền mới.',
      ),
      item(
        'chk-api-4',
        'Endpoint theo lô và endpoint xuất báo cáo có kiểm tra phân quyền cho từng phần tử không?',
        'Kiểm tra thường chỉ áp dụng cho phần tử đầu tiên hoặc cho toàn bộ lô.',
        { relatedWeaknessIds: ['wkn-idor'] },
      ),
      item(
        'chk-api-5',
        'Có giới hạn cho kích thước trang, độ sâu truy vấn và tần suất gọi không?',
        'Thiếu giới hạn là điều kiện của tiêu thụ tài nguyên không kiểm soát.',
        {
          relatedWeaknessIds: ['wkn-resource-consumption'],
          stopConditionVi: 'Dừng ngay khi thấy độ trễ tăng bất thường.',
        },
      ),
      item(
        'chk-api-6',
        'Token có phạm vi hẹp và có thực sự bị vô hiệu khi thu hồi không?',
        'Thu hồi không hiệu lực khiến việc xoay vòng bí mật trở nên vô nghĩa.',
        { relatedWeaknessIds: ['wkn-jwt-validation'] },
      ),
    ],
  },
  {
    id: 'chk-identity',
    titleVi: 'Danh tính và SSO',
    domainId: 'dom-identity',
    context: 'identity',
    safetyNoteVi:
      'Chỉ dùng tài khoản, tên miền và ứng dụng client do bạn kiểm soát ở mọi phía của luồng.',
    items: [
      item(
        'chk-identity-1',
        'Máy chủ uỷ quyền so khớp redirect URI chính xác tuyệt đối hay theo tiền tố?',
        'So khớp lỏng cho phép chuyển hướng mã uỷ quyền tới đích của kẻ tấn công.',
        { relatedWeaknessIds: ['wkn-oauth-redirect'] },
      ),
      item(
        'chk-identity-2',
        'Luồng có bắt buộc PKCE và có ràng buộc state với phiên không?',
        'State và PKCE giải quyết hai vấn đề khác nhau; thiếu một trong hai đều là thiếu sót.',
      ),
      item(
        'chk-identity-3',
        'Bên nhận có kiểm tra chữ ký, issuer, audience và thời hạn của token không?',
        'Bỏ qua bất kỳ kiểm tra nào trong bốn kiểm tra này đều dẫn tới mạo danh.',
        { relatedWeaknessIds: ['wkn-jwt-validation'] },
      ),
      item(
        'chk-identity-4',
        'Ứng dụng có liên kết tài khoản dựa trên email chưa được xác minh không?',
        'Đây là con đường chiếm tài khoản phổ biến trong hệ thống có nhiều nhà cung cấp danh tính.',
        { relatedWeaknessIds: ['wkn-account-linking'] },
      ),
      item(
        'chk-identity-5',
        'Quy trình xác nhận quyền sở hữu tên miền có thể bị giả mạo không?',
        'Xác nhận tên miền là ranh giới quyết định ai kiểm soát một tổ chức.',
        { stopConditionVi: 'Không thử xác nhận tên miền không thuộc sở hữu của bạn.' },
      ),
      item(
        'chk-identity-6',
        'Đường khôi phục có mức bảo vệ tương đương đường đăng nhập chính không?',
        'Passkey không có tác dụng nếu đường khôi phục yếu hơn nhiều.',
      ),
    ],
  },
  {
    id: 'chk-mobile',
    titleVi: 'Ứng dụng di động',
    domainId: 'dom-mobile',
    context: 'mobile',
    safetyNoteVi:
      'Chỉ trên thiết bị hoặc máy ảo thuộc sở hữu của bạn, với ứng dụng lab hoặc ứng dụng nằm trong phạm vi.',
    items: [
      item(
        'chk-mobile-1',
        'Manifest hoặc tệp cấu hình khai báo những thành phần nào truy cập được từ ứng dụng khác?',
        'Đây là bản khai báo bề mặt tấn công do chính nhà phát triển viết.',
        { relatedWeaknessIds: ['wkn-exported-component'] },
      ),
      item(
        'chk-mobile-2',
        'Ứng dụng lưu dữ liệu nhạy cảm nào ở dạng không được bảo vệ trên thiết bị?',
        'Dữ liệu không được bảo vệ có thể bị đọc khi thiết bị bị mất hoặc bởi ứng dụng khác.',
        { relatedWeaknessIds: ['wkn-insecure-local-storage'] },
      ),
      item(
        'chk-mobile-3',
        'Ứng dụng có xác thực chứng chỉ đúng cách khi kết nối tới backend không?',
        'Bỏ qua lỗi chứng chỉ là đoạn mã tạm thời hay bị lọt vào bản phát hành.',
        { relatedWeaknessIds: ['wkn-cert-validation'] },
      ),
      item(
        'chk-mobile-4',
        'Dữ liệu nhạy cảm có xuất hiện trong log, clipboard hoặc bản sao lưu không?',
        'Ba kênh này thường bị bỏ quên khi rà soát lưu trữ.',
        { relatedWeaknessIds: ['wkn-insecure-local-storage'] },
      ),
      item(
        'chk-mobile-5',
        'Deep link có dẫn tới hành động đặc quyền mà không qua kiểm tra bổ sung không?',
        'Chuỗi từ deep link tới lời gọi API đặc quyền là bề mặt có tác động cao.',
      ),
    ],
  },
  {
    id: 'chk-cloud',
    titleVi: 'Cloud',
    domainId: 'dom-cloud',
    context: 'cloud',
    safetyNoteVi:
      'Chỉ trên tài khoản cloud riêng do bạn lập cho việc học. Đặt cảnh báo chi phí trước khi tạo tài nguyên và dọn dẹp sau khi xong.',
    items: [
      item(
        'chk-cloud-1',
        'Phát hiện này thuộc trách nhiệm của nhà cung cấp hay của khách hàng?',
        'Nhiều chương trình loại trừ cấu hình sai phía khách hàng; xác định sớm để không mất thời gian.',
      ),
      item(
        'chk-cloud-2',
        'Chính sách IAM cấp quyền rộng hơn nhu cầu thực tế ở đâu?',
        'Quyền rộng quyết định thiệt hại tối đa khi một danh tính bị lộ.',
        { relatedWeaknessIds: ['wkn-excessive-iam'] },
      ),
      item(
        'chk-cloud-3',
        'Chính sách tin cậy cho phép danh tính nào nhận vai trò, và có điều kiện ràng buộc không?',
        'Quan hệ tin cậy thiếu điều kiện là đường leo thang giữa các tài khoản.',
      ),
      item(
        'chk-cloud-4',
        'Tài nguyên lưu trữ nào truy cập được mà không cần thông tin xác thực?',
        'Lưu trữ công khai ngoài dự định là nhóm phát hiện cloud phổ biến nhất.',
        {
          relatedWeaknessIds: ['wkn-public-storage'],
          stopConditionVi: 'Không tải dữ liệu về; ghi nhận sự tồn tại và báo cáo.',
        },
      ),
      item(
        'chk-cloud-5',
        'Workload ứng dụng có chạm tới dịch vụ metadata được không?',
        'Đây là điều biến một SSRF thành đường lấy thông tin xác thực.',
        {
          relatedWeaknessIds: ['wkn-metadata-access'],
          stopConditionVi: 'Không lấy thông tin xác thực thật để chứng minh.',
        },
      ),
      item(
        'chk-cloud-6',
        'Ghi log có bao phủ mặt phẳng điều khiển không, và log có bị sửa được không?',
        'Khoảng trống log khiến sự cố không thể điều tra.',
      ),
    ],
  },
  {
    id: 'chk-container',
    titleVi: 'Container và Kubernetes',
    domainId: 'dom-container',
    context: 'container',
    safetyNoteVi: 'Chỉ trên cụm cục bộ hoặc cụm riêng của bạn, không trên cụm dùng chung.',
    items: [
      item(
        'chk-container-1',
        'Có container nào chạy đặc quyền hoặc được mount socket của runtime không?',
        'Cả hai đều làm ranh giới giữa container và host mất ý nghĩa.',
        { relatedWeaknessIds: ['wkn-container-escape-config'] },
      ),
      item(
        'chk-container-2',
        'Có bí mật nào nằm trong lớp image hoặc biến môi trường không?',
        'Lớp image được phân phối rộng nên bí mật trong đó coi như đã lộ.',
        { relatedWeaknessIds: ['wkn-secret-exposure'] },
      ),
      item(
        'chk-container-3',
        'Service account gắn với pod có quyền RBAC nào?',
        'Một số quyền tưởng như hẹp lại dẫn tới quyền quản trị cụm.',
        { relatedWeaknessIds: ['wkn-k8s-rbac-escalation'] },
      ),
      item(
        'chk-container-4',
        'Namespace có network policy mặc định từ chối không?',
        'Không có network policy nghĩa là mọi pod nói chuyện được với mọi pod.',
      ),
      item(
        'chk-container-5',
        'Cụm có áp dụng chuẩn bảo mật pod ở mức hạn chế không?',
        'Đây là lớp chặn tự động cho phần lớn cấu hình nguy hiểm.',
      ),
    ],
  },
  {
    id: 'chk-network',
    titleVi: 'Mạng và hạ tầng',
    domainId: 'dom-network',
    context: 'network',
    safetyNoteVi:
      'Chỉ với dải địa chỉ bạn sở hữu hoặc được chính sách cho phép rõ ràng. Không quét thiết bị công nghiệp hay thiết bị y tế.',
    items: [
      item(
        'chk-network-1',
        'Dịch vụ này có thực sự thuộc tổ chức trong phạm vi không?',
        'Hosting dùng chung và CDN khiến địa chỉ IP không đủ để xác định quyền sở hữu.',
        { stopConditionVi: 'Nếu không chắc, coi như ngoài phạm vi.' },
      ),
      item(
        'chk-network-2',
        'Có giao diện quản trị hoặc giám sát nào truy cập được từ Internet không?',
        'Đây là nhóm phát hiện hạ tầng có tác động rõ ràng nhất.',
        { relatedWeaknessIds: ['wkn-exposed-service'] },
      ),
      item(
        'chk-network-3',
        'Cấu hình TLS có chứng chỉ hợp lệ, khớp tên miền và chuỗi tin cậy đầy đủ không?',
        'Cấu hình TLS sai làm giảm mức bảo vệ đường truyền cho mọi người dùng.',
        { relatedWeaknessIds: ['wkn-tls-misconfig'] },
      ),
      item(
        'chk-network-4',
        'Có bản ghi DNS nào trỏ tới tài nguyên tổ chức không còn kiểm soát không?',
        'Bản ghi treo cho phép người khác chiếm tên miền con.',
        {
          relatedWeaknessIds: ['wkn-dangling-dns'],
          stopConditionVi: 'Không tự đăng ký tài nguyên đích để chứng minh.',
        },
      ),
      item(
        'chk-network-5',
        'Bạn đã xác minh thủ công phát hiện của công cụ chưa?',
        'Banner phiên bản không chứng minh hệ thống bị ảnh hưởng.',
      ),
    ],
  },
  {
    id: 'chk-desktop',
    titleVi: 'Ứng dụng desktop',
    domainId: 'dom-desktop',
    context: 'desktop',
    safetyNoteVi: 'Phân tích trong máy ảo, với phần mềm mà giấy phép cho phép phân tích.',
    items: [
      item(
        'chk-desktop-1',
        'Thư mục cài đặt và thư mục dữ liệu có quyền ghi cho người dùng thường không?',
        'Quyền ghi vào nơi mà tiến trình đặc quyền đọc là đường leo thang cục bộ.',
      ),
      item(
        'chk-desktop-2',
        'Kênh IPC có xác thực danh tính tiến trình gọi không?',
        'Dịch vụ đặc quyền không kiểm tra bên gọi là lỗi leo thang đặc quyền điển hình.',
        { relatedWeaknessIds: ['wkn-ipc-authz'] },
      ),
      item(
        'chk-desktop-3',
        'Quy trình cập nhật có xác minh chữ ký và chống hạ cấp phiên bản không?',
        'Cập nhật không xác minh cho phép thực thi mã tuỳ ý trên máy người dùng.',
        { relatedWeaknessIds: ['wkn-unsafe-update'] },
      ),
      item(
        'chk-desktop-4',
        'Ứng dụng có lưu thông tin xác thực ở dạng không được bảo vệ trên máy không?',
        'Bí mật cục bộ là nhóm phát hiện phổ biến trong ứng dụng thick client.',
        { relatedWeaknessIds: ['wkn-secret-exposure'] },
      ),
      item(
        'chk-desktop-5',
        'Nếu là Electron: cách ly ngữ cảnh có bật và tích hợp Node có tắt cho nội dung không tin cậy không?',
        'Không cách ly nghĩa là XSS trở thành thực thi mã trên máy người dùng.',
      ),
    ],
  },
  {
    id: 'chk-binary',
    titleVi: 'Phân tích nhị phân',
    domainId: 'dom-binary',
    context: 'binary',
    safetyNoteVi:
      'Chỉ trên binary lab hoặc phần mềm bạn được phép phân tích. Không xây dựng bộ khai thác nhắm tới phần mềm đang được sử dụng thực tế.',
    items: [
      item(
        'chk-binary-1',
        'Binary bật những cơ chế giảm thiểu nào?',
        'Cơ chế giảm thiểu quyết định mức rủi ro thực tế của một lỗi bộ nhớ.',
      ),
      item(
        'chk-binary-2',
        'Dữ liệu không tin cậy đi vào bộ phân tích nào?',
        'Ranh giới phân tích dữ liệu là nơi tập trung lỗi bộ nhớ.',
        { relatedWeaknessIds: ['wkn-buffer-overflow'] },
      ),
      item(
        'chk-binary-3',
        'Crash tìm được có nguyên nhân gốc rõ ràng chưa?',
        'Báo cáo không có nguyên nhân gốc rất khó được xử lý.',
        { relatedWeaknessIds: ['wkn-use-after-free'] },
      ),
      item(
        'chk-binary-4',
        'Reproducer đã được thu nhỏ về dạng tối thiểu chưa?',
        'Reproducer nhỏ giúp maintainer xác nhận nhanh hơn nhiều.',
      ),
    ],
  },
  {
    id: 'chk-code-review',
    titleVi: 'Rà soát mã nguồn',
    domainId: 'dom-code-review',
    context: 'code-review',
    safetyNoteVi:
      'Chỉ đọc mã mà giấy phép cho phép. Nếu phát hiện lỗ hổng trong dự án nguồn mở, báo cáo qua kênh riêng tư.',
    items: [
      item(
        'chk-code-review-1',
        'Bạn đã liệt kê hết điểm vào chưa: route, handler, hàng đợi, cron, CLI?',
        'Điểm vào không đi qua lớp phân quyền chung là nơi hay có lỗi nhất.',
      ),
      item(
        'chk-code-review-2',
        'Có đường đi nào từ dữ liệu ngoài tới một điểm nhận nguy hiểm không?',
        'Đây là khung tư duy chung của rà soát mã và phân tích tĩnh.',
        { relatedWeaknessIds: ['wkn-sqli', 'wkn-command-injection'] },
      ),
      item(
        'chk-code-review-3',
        'Kiểm tra phân quyền nằm ở đâu, và có đường nào đi vòng qua nó không?',
        'Kiểm tra rải rác thay vì tập trung là dấu hiệu sẽ có chỗ bị bỏ sót.',
        { relatedWeaknessIds: ['wkn-idor'] },
      ),
      item(
        'chk-code-review-4',
        'Bản vá gần đây có xử lý nguyên nhân gốc hay chỉ chữa triệu chứng?',
        'Bản vá chữa triệu chứng thường để lại biến thể.',
      ),
      item(
        'chk-code-review-5',
        'Bạn đã tìm biến thể của mẫu lỗi ở nơi khác trong dự án chưa?',
        'Một lỗi hiếm khi đứng một mình.',
      ),
    ],
  },
  {
    id: 'chk-supply-chain',
    titleVi: 'Chuỗi cung ứng và CI/CD',
    domainId: 'dom-supply-chain',
    context: 'supply-chain',
    safetyNoteVi:
      'Chỉ thực hành trên repository của chính bạn. Không xuất bản gói lên registry công khai với tên gói nội bộ của tổ chức khác.',
    items: [
      item(
        'chk-supply-chain-1',
        'Workflow nào chạy mã của người đóng góp bên ngoài, và với quyền gì?',
        'Đây là ranh giới tin cậy quan trọng nhất trong CI.',
        { relatedWeaknessIds: ['wkn-cicd-trust'] },
      ),
      item(
        'chk-supply-chain-2',
        'Bí mật có khả dụng trong job chạy mã không tin cậy không?',
        'Bí mật lộ trong pipeline thường dẫn tới quyền trên hệ thống sản xuất.',
        { relatedWeaknessIds: ['wkn-secret-exposure'] },
      ),
      item(
        'chk-supply-chain-3',
        'Cache và artifact có được chia sẻ giữa các job có mức tin cậy khác nhau không?',
        'Đây là kênh truyền dữ liệu dễ bị bỏ qua khi đánh giá pipeline.',
      ),
      item(
        'chk-supply-chain-4',
        'Cấu hình registry có cho phép gói công khai thay thế gói nội bộ không?',
        'Đây là điều kiện của nhầm lẫn nguồn gói.',
        { relatedWeaknessIds: ['wkn-dependency-confusion'] },
      ),
      item(
        'chk-supply-chain-5',
        'Chính sách tin cậy OIDC giữa CI và cloud có điều kiện đủ chặt không?',
        'Điều kiện lỏng cho phép repository khác nhận vai trò trong tài khoản cloud.',
      ),
    ],
  },
  {
    id: 'chk-iot',
    titleVi: 'Thiết bị IoT',
    domainId: 'dom-iot',
    context: 'iot',
    safetyNoteVi:
      'Chỉ trên thiết bị thuộc sở hữu của bạn. Mở thiết bị có thể làm mất bảo hành và gây hỏng vĩnh viễn.',
    items: [
      item(
        'chk-iot-1',
        'Bạn đã lập bản đồ toàn bộ hệ sinh thái chưa: thiết bị, ứng dụng đồng hành, đám mây, cập nhật?',
        'Bề mặt có giá trị nhất thường nằm ở đám mây chứ không ở thiết bị.',
      ),
      item(
        'chk-iot-2',
        'Firmware có chứa thông tin xác thực hoặc khoá dùng chung cho mọi thiết bị không?',
        'Bí mật dùng chung nghĩa là một thiết bị bị phân tích ảnh hưởng tới cả dòng sản phẩm.',
        { relatedWeaknessIds: ['wkn-firmware-hardcoded-cred'] },
      ),
      item(
        'chk-iot-3',
        'Cập nhật firmware có được ký và xác minh không?',
        'Cập nhật không xác minh cho phép thay thế toàn bộ phần mềm thiết bị.',
        { relatedWeaknessIds: ['wkn-unsafe-update'] },
      ),
      item(
        'chk-iot-4',
        'Thiết bị này có truy cập được dữ liệu hoặc chức năng của thiết bị người dùng khác không?',
        'Phân quyền chéo thiết bị là nhóm vấn đề có tác động cao trong hệ sinh thái IoT.',
        { stopConditionVi: 'Dừng ngay nếu chạm tới thiết bị hoặc dữ liệu của người dùng khác.' },
      ),
      item(
        'chk-iot-5',
        'Cổng gỡ lỗi phần cứng còn hoạt động trên thiết bị thương mại không?',
        'Cổng gỡ lỗi mở thay đổi hoàn toàn mô hình đe doạ khi có truy cập vật lý.',
      ),
    ],
  },
  {
    id: 'chk-wireless',
    titleVi: 'Không dây và BLE',
    domainId: 'dom-wireless',
    context: 'wireless',
    safetyNoteVi:
      'Quy định về vô tuyến khác nhau theo quốc gia. Chỉ tương tác với thiết bị của bạn, tốt nhất trong môi trường che chắn. Không gây nhiễu và không phát ở băng tần không được phép.',
    items: [
      item(
        'chk-wireless-1',
        'Bạn đã xác định quy định vô tuyến áp dụng tại nơi cư trú của mình chưa?',
        'Một kỹ thuật hợp pháp ở nơi này có thể là vi phạm hình sự ở nơi khác.',
        { stopConditionVi: 'Không phát sóng khi chưa xác định rõ quy định.' },
      ),
      item(
        'chk-wireless-2',
        'Thiết bị yêu cầu mức bảo vệ nào khi ghép nối?',
        'Ghép nối không xác thực khiến mọi đặc tính trở nên truy cập được.',
        { relatedWeaknessIds: ['wkn-ble-weak-pairing'] },
      ),
      item(
        'chk-wireless-3',
        'Có đặc tính nhạy cảm nào đọc hoặc ghi được mà không cần ghép nối có xác thực không?',
        'Đây là phát hiện phổ biến nhất trong thiết bị BLE tiêu dùng.',
        { relatedWeaknessIds: ['wkn-ble-weak-pairing'] },
      ),
      item(
        'chk-wireless-4',
        'Dữ liệu quảng bá có làm lộ định danh ổn định của người dùng không?',
        'Định danh ổn định cho phép theo dõi vị trí của người mang thiết bị.',
      ),
      item(
        'chk-wireless-5',
        'Bản tin điều khiển có chống được việc phát lại không?',
        'Thiếu chống phát lại cho phép lặp lại lệnh đã bắt được.',
      ),
    ],
  },
  {
    id: 'chk-automotive',
    titleVi: 'Xe kết nối',
    domainId: 'dom-automotive',
    context: 'automotive',
    safetyNoteVi:
      'Tuyệt đối không thử nghiệm trên phương tiện đang vận hành và không can thiệp vào hệ thống liên quan tới an toàn. Chỉ dùng simulator hoặc test bench thuộc sở hữu của bạn.',
    items: [
      item(
        'chk-automotive-1',
        'Bề mặt bạn định kiểm thử là backend đám mây, ứng dụng đồng hành, hay hệ thống trên xe?',
        'Backend và ứng dụng là nơi phần lớn nghiên cứu hợp pháp diễn ra.',
        {
          stopConditionVi:
            'Dừng nếu phép thử cần kết nối tới phương tiện đang vận hành hoặc chạm vào hệ thống an toàn.',
        },
      ),
      item(
        'chk-automotive-2',
        'Tài khoản người dùng và phương tiện được ràng buộc với nhau như thế nào?',
        'Ranh giới tài khoản với phương tiện quyết định ai điều khiển được xe nào.',
      ),
      item(
        'chk-automotive-3',
        'Cập nhật OTA có chuỗi ký và cơ chế chống hạ cấp không?',
        'Cập nhật là con đường ảnh hưởng tới toàn bộ đội xe.',
        { relatedWeaknessIds: ['wkn-unsafe-update'] },
      ),
      item(
        'chk-automotive-4',
        'Hệ thống giải trí có được cô lập khỏi hệ thống điều khiển không?',
        'Đây là ranh giới quan trọng nhất trong kiến trúc phương tiện.',
      ),
      item(
        'chk-automotive-5',
        'Nếu phát hiện có thể ảnh hưởng an toàn khi vận hành, bạn đã dừng và dùng kênh khẩn cấp chưa?',
        'Với phương tiện, an toàn con người được ưu tiên hơn mọi quy trình khác.',
        { stopConditionVi: 'Dừng ngay và báo cáo qua kênh khẩn cấp của chương trình.' },
      ),
    ],
  },
  {
    id: 'chk-ics-ot',
    titleVi: 'ICS và OT',
    domainId: 'dom-ics-ot',
    context: 'ics-ot',
    safetyNoteVi:
      'Không bao giờ thử nghiệm trên hạ tầng vận hành thật. Một gói tin sai có thể gây mất điều khiển và nguy hiểm tới con người. Chỉ dùng simulator hoặc bench lab.',
    items: [
      item(
        'chk-ics-ot-1',
        'Hệ thống bạn đang xem thuộc tầng nào trong mô hình Purdue?',
        'Tầng quyết định mức rủi ro và quyết định phép thử nào là chấp nhận được.',
        { stopConditionVi: 'Dừng nếu đối tượng là thiết bị đang điều khiển quy trình thật.' },
      ),
      item(
        'chk-ics-ot-2',
        'Ranh giới giữa mạng doanh nghiệp và mạng vận hành được thực thi thế nào?',
        'Phân đoạn là biện pháp phòng thủ chính trong môi trường OT.',
        { relatedWeaknessIds: ['wkn-ics-protocol-trust'] },
      ),
      item(
        'chk-ics-ot-3',
        'Truy cập từ xa của nhà cung cấp được kiểm soát và ghi log thế nào?',
        'Đây là đường vào phổ biến nhất từ bên ngoài vào vùng OT.',
      ),
      item(
        'chk-ics-ot-4',
        'Có giao diện giám sát hoặc trạm kỹ thuật nào truy cập được từ ngoài không?',
        'Trạm kỹ thuật có phần mềm lập trình thiết bị nên có tác động rất cao.',
        { relatedWeaknessIds: ['wkn-exposed-service'] },
      ),
      item(
        'chk-ics-ot-5',
        'Khuyến nghị của bạn có gây gián đoạn vận hành không?',
        'Trong OT, biện pháp gây gián đoạn thường không chấp nhận được dù nó tăng mức bảo mật.',
      ),
    ],
  },
  {
    id: 'chk-web3',
    titleVi: 'Hợp đồng thông minh',
    domainId: 'dom-web3',
    context: 'web3',
    safetyNoteVi:
      'Chỉ trên testnet hoặc chain cục bộ, với ví riêng không chứa tài sản thật. Giao dịch on-chain không thể hoàn tác.',
    items: [
      item(
        'chk-web3-1',
        'Mọi hàm thay đổi trạng thái đều có kiểm soát truy cập phù hợp chứ?',
        'Hàm thiếu modifier là nhóm lỗi hợp đồng phổ biến và nghiêm trọng nhất.',
        { relatedWeaknessIds: ['wkn-web3-access-control'] },
      ),
      item(
        'chk-web3-2',
        'Hàm khởi tạo có thể được gọi lại lần nữa không?',
        'Hợp đồng proxy chưa khoá hàm khởi tạo có thể bị chiếm quyền quản trị.',
        { relatedWeaknessIds: ['wkn-web3-access-control'] },
      ),
      item(
        'chk-web3-3',
        'Có lời gọi ra ngoài nào đứng trước lệnh cập nhật trạng thái không?',
        'Đây là điều kiện của reentrancy.',
        { relatedWeaknessIds: ['wkn-web3-reentrancy'] },
      ),
      item(
        'chk-web3-4',
        'Giá được lấy từ nguồn nào và chi phí để tác động lên nguồn đó là bao nhiêu?',
        'Nếu chi phí thao túng thấp hơn lợi ích thu được thì đó là lỗ hổng kinh tế.',
        { relatedWeaknessIds: ['wkn-web3-oracle'] },
      ),
      item(
        'chk-web3-5',
        'Bạn đã phát biểu được bất biến của giao thức và viết test cho nó chưa?',
        'Một test thất bại chạy được là bằng chứng mạnh nhất cho báo cáo hợp đồng.',
      ),
    ],
  },
  {
    id: 'chk-ai',
    titleVi: 'Hệ thống AI và agent',
    domainId: 'dom-ai',
    context: 'ai',
    safetyNoteVi:
      'Không khai thác dữ liệu người dùng thật và không tạo chi phí suy luận lớn. Hành vi mô hình không mong muốn chưa chắc là lỗ hổng bảo mật.',
    items: [
      item(
        'chk-ai-1',
        'Nội dung do bên thứ ba kiểm soát đi vào ngữ cảnh mô hình qua những đường nào?',
        'Đây là bề mặt của prompt injection gián tiếp.',
        { relatedWeaknessIds: ['wkn-ai-indirect-prompt-injection'] },
      ),
      item(
        'chk-ai-2',
        'Đầu ra của mô hình được hệ thống hạ nguồn tin tưởng tới mức nào?',
        'Vấn đề thật nằm ở việc tin tưởng đầu ra, không ở bản thân mô hình.',
        { relatedWeaknessIds: ['wkn-ai-indirect-prompt-injection'] },
      ),
      item(
        'chk-ai-3',
        'Agent gọi công cụ với quyền của ai: của người dùng hay của một danh tính dùng chung?',
        'Danh tính dùng chung là nguyên nhân gốc của quyền quá mức.',
        { relatedWeaknessIds: ['wkn-ai-excessive-agency'] },
      ),
      item(
        'chk-ai-4',
        'Truy vấn vào kho tài liệu có lọc theo người thuê ở tầng dữ liệu không?',
        'Bộ lọc đặt trong prompt không phải là biện pháp kiểm soát truy cập.',
        {
          relatedWeaknessIds: ['wkn-ai-rag-leak'],
          stopConditionVi: 'Dừng ngay nếu thấy tài liệu không thuộc về bạn.',
        },
      ),
      item(
        'chk-ai-5',
        'Bạn đã chứng minh được một ranh giới tin cậy bị vượt qua chưa?',
        'Không có điều này, báo cáo AI thường bị đóng là vấn đề hành vi mô hình.',
      ),
    ],
  },
  {
    id: 'chk-browser-ext',
    titleVi: 'Tiện ích trình duyệt',
    domainId: 'dom-browser-ext',
    context: 'web-feature',
    safetyNoteVi:
      'Chỉ phân tích tiện ích do bạn viết, tiện ích lab, hoặc tiện ích nằm trong phạm vi chương trình.',
    items: [
      item(
        'chk-browser-ext-1',
        'Manifest yêu cầu những quyền nào, và tiện ích có thực sự cần hết không?',
        'Quyền rộng làm tăng thiệt hại khi tiện ích bị lợi dụng.',
      ),
      item(
        'chk-browser-ext-2',
        'Trình xử lý thông điệp có kiểm tra nguồn gửi không?',
        'Thiếu kiểm tra cho phép trang web bất kỳ gọi API đặc quyền của tiện ích.',
        { relatedWeaknessIds: ['wkn-ext-message-trust'] },
      ),
      item(
        'chk-browser-ext-3',
        'Có tài nguyên nào truy cập được từ web mà không nên như vậy không?',
        'Tài nguyên truy cập được từ web tạo cầu nối từ trang tới tiện ích.',
      ),
      item(
        'chk-browser-ext-4',
        'Content script có coi nội dung trang là không tin cậy không?',
        'Trang web luôn phải bị coi là không tin cậy đối với content script.',
      ),
      item(
        'chk-browser-ext-5',
        'Tiện ích có dùng native messaging không, và thông điệp được kiểm tra thế nào?',
        'Native messaging là đường đi từ web ra hệ điều hành.',
      ),
    ],
  },
  {
    id: 'chk-saas',
    titleVi: 'SaaS và cộng tác',
    domainId: 'dom-saas',
    context: 'business-flow',
    safetyNoteVi:
      'Tạo hai workspace của chính bạn để thử chéo. Không gửi email lừa đảo hay tin nhắn hàng loạt trong bất kỳ hoàn cảnh nào.',
    items: [
      item(
        'chk-saas-1',
        'Tài khoản khách có nâng được quyền trong tổ chức không?',
        'Luồng mời và nâng quyền là bề mặt logic phổ biến trong sản phẩm cộng tác.',
        { relatedWeaknessIds: ['wkn-tenant-isolation'] },
      ),
      item(
        'chk-saas-2',
        'Liên kết chia sẻ có khó đoán, có thời hạn và thu hồi được không?',
        'Liên kết chia sẻ là cách dữ liệu nội bộ rời khỏi tổ chức phổ biến nhất.',
        { relatedWeaknessIds: ['wkn-shared-link-exposure'] },
      ),
      item(
        'chk-saas-3',
        'Chức năng xuất dữ liệu có tuân theo phân quyền chi tiết không?',
        'Xuất dữ liệu thường bỏ qua các kiểm tra mà giao diện áp dụng.',
        { relatedWeaknessIds: ['wkn-excessive-data'] },
      ),
      item(
        'chk-saas-4',
        'Ứng dụng tích hợp yêu cầu phạm vi quyền nào, và ai được phép cài chúng?',
        'Quyền cấp một lần cho tích hợp thường tồn tại rất lâu và ít được rà soát.',
      ),
      item(
        'chk-saas-5',
        'Bản ghi DMARC của tên miền ở chế độ thực thi hay chỉ giám sát?',
        'Chỉ giám sát nghĩa là bên nhận không có cơ sở từ chối thư giả mạo.',
        {
          relatedWeaknessIds: ['wkn-email-auth-weak'],
          stopConditionVi: 'Không gửi email giả mạo tới bất kỳ ai để chứng minh.',
        },
      ),
    ],
  },
  {
    id: 'chk-privacy',
    titleVi: 'Quyền riêng tư và dữ liệu',
    domainId: 'dom-privacy',
    context: 'privacy',
    safetyNoteVi:
      'Không tải hàng loạt dữ liệu để chứng minh. Một bản ghi đã che thông tin định danh là đủ. Xoá dữ liệu đã tiếp xúc sau khi báo cáo.',
    items: [
      item(
        'chk-privacy-1',
        'Dữ liệu nào trong phản hồi thuộc loại cá nhân hoặc nhạy cảm?',
        'Phân loại dữ liệu quyết định mức tác động của mọi phát hiện.',
      ),
      item(
        'chk-privacy-2',
        'Có dữ liệu cá nhân nào xuất hiện trong log, analytics hoặc chỉ mục tìm kiếm không?',
        'Đây là các kênh rò rỉ nằm ngoài luồng chính và hay bị bỏ sót.',
      ),
      item(
        'chk-privacy-3',
        'Chức năng xoá có xoá thật ở mọi bản sao, kể cả sao lưu và chỉ mục không?',
        'Xoá không triệt để là vấn đề tuân thủ và cũng là vấn đề bảo mật.',
      ),
      item(
        'chk-privacy-4',
        'Bạn đã che thông tin định danh trong mọi bằng chứng chưa?',
        'Bằng chứng chưa che biến bạn thành nơi lưu trữ dữ liệu của người khác.',
      ),
      item(
        'chk-privacy-5',
        'Bạn đã ghi rõ dữ liệu đã tiếp xúc và hành động giảm thiểu trong báo cáo chưa?',
        'Đây là phần mà triager và bộ phận pháp lý cần nhất.',
      ),
    ],
  },
  {
    id: 'chk-reporting',
    titleVi: 'Trước khi gửi báo cáo',
    domainId: 'dom-policy',
    context: 'reporting',
    safetyNoteVi:
      'Không công khai báo cáo khi chưa được phép. Không thu thập thêm dữ liệu nhạy cảm để củng cố báo cáo.',
    items: [
      item(
        'chk-reporting-1',
        'Tiêu đề có nêu được tài sản, loại vấn đề và tác động trong một dòng không?',
        'Tiêu đề quyết định báo cáo được ưu tiên xử lý thế nào.',
      ),
      item(
        'chk-reporting-2',
        'Người khác làm theo bước tái hiện của bạn có thành công mà không cần hỏi lại không?',
        'Bước tái hiện không đủ rõ là lý do đóng báo cáo phổ biến nhất.',
      ),
      item(
        'chk-reporting-3',
        'Bạn đã trình bày cả tác động kỹ thuật lẫn tác động kinh doanh chưa?',
        'Hai thứ này có thể lệch nhau rất xa và triager cần cả hai.',
      ),
      item(
        'chk-reporting-4',
        'Bạn đã nêu rõ dữ liệu đã tiếp xúc và hành động giảm thiểu đã thực hiện chưa?',
        'Đây là phần chứng minh bạn hành động trong giới hạn thiện chí.',
      ),
      item(
        'chk-reporting-5',
        'CWE, vector CVSS và phân loại taxonomy có phản ánh đúng điều bạn đã chứng minh không?',
        'Chấm điểm dựa trên điều có thể xảy ra trên lý thuyết làm giảm uy tín báo cáo.',
      ),
      item(
        'chk-reporting-6',
        'Bạn đã kiểm tra lại phạm vi và điều khoản công bố trước khi gửi chưa?',
        'Chính sách có thể đã thay đổi kể từ khi bạn bắt đầu.',
      ),
    ],
  },
  {
    id: 'chk-foundations',
    titleVi: 'Tự kiểm tra nền tảng',
    domainId: 'dom-foundations',
    context: 'asset-mapping',
    safetyNoteVi: 'Thực hành trên máy hoặc máy ảo của chính bạn.',
    items: [
      item(
        'chk-foundations-1',
        'Bạn giải thích được từng header trong một request/response đầy đủ chứ?',
        'Không đọc được HTTP thì mọi kỹ thuật web phía trên đều là học thuộc.',
      ),
      item(
        'chk-foundations-2',
        'Bạn định nghĩa được chính xác một origin và điều same-origin policy ngăn chặn chứ?',
        'Đây là nền tảng để đánh giá đúng tác động của CORS, CSRF và XSS.',
      ),
      item(
        'chk-foundations-3',
        'Bạn phân biệt được mã hoá, băm và mã hoá đối xứng chứ?',
        'Ba khái niệm này hay bị gọi chung là "mã hoá" và dẫn tới đánh giá sai.',
      ),
      item(
        'chk-foundations-4',
        'Bạn vẽ được đường đi của một gói tin từ máy bạn tới máy chủ ở xa chứ?',
        'Hiểu đường đi giúp nhận ra vai trò của proxy, CDN và load balancer.',
      ),
    ],
  },
  {
    id: 'chk-emerging',
    titleVi: 'Đánh giá một bề mặt mới',
    domainId: 'dom-emerging',
    context: 'asset-mapping',
    safetyNoteVi:
      'Mỗi lĩnh vực mới có ràng buộc pháp lý và an toàn riêng. Bắt đầu bằng câu hỏi pháp lý trước khi bàn tới kỹ thuật.',
    items: [
      item(
        'chk-emerging-1',
        'Có quy định pháp lý đặc thù nào áp dụng cho lĩnh vực này tại nơi bạn sống không?',
        'Thiết bị y tế, thiết bị thanh toán, drone và viễn thông đều có quy định riêng.',
        { stopConditionVi: 'Dừng nếu chưa xác định được ràng buộc pháp lý.' },
      ),
      item(
        'chk-emerging-2',
        'Có tồn tại ít nhất một lab hợp pháp hoặc môi trường mô phỏng cho lĩnh vực này không?',
        'Không có lab thì không nên mở specialization; người học sẽ buộc phải thử trên hệ thống thật.',
      ),
      item(
        'chk-emerging-3',
        'Có ít nhất một nguồn phương pháp đáng tin cậy chưa?',
        'Đây là điều kiện đầu tiên trong bảy điều kiện mở specialization.',
      ),
      item(
        'chk-emerging-4',
        'Bạn đã xác định được prerequisite rõ ràng chưa?',
        'Mở một lĩnh vực chuyên sâu mà không có prerequisite dẫn tới học lệch và rủi ro.',
      ),
      item(
        'chk-emerging-5',
        'Bạn đã viết được checklist tối thiểu và một bài tập báo cáo mẫu chưa?',
        'Hai thứ này là điều kiện cuối để chuyển specialization từ planned sang active.',
      ),
    ],
  },
];
