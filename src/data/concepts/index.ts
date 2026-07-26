import type { Concept } from '@/schemas/entities';
import { defineConcept } from '../helpers';

/** Khái niệm tái sử dụng được, dùng chung giữa nhiều module và domain. */
export const concepts: Concept[] = [
  defineConcept({
    id: 'cpt-trust-boundary',
    titleVi: 'Trust boundary',
    definitionVi:
      'Ranh giới nơi mức độ tin cậy đối với dữ liệu hoặc mã thay đổi. Vượt qua ranh giới này, dữ liệu phải được kiểm tra lại.',
    whyItMattersVi:
      'Gần như mọi lỗ hổng đều nằm ở một trust boundary mà việc kiểm tra bị thiếu, bị đặt sai phía, hoặc bị thực hiện hai lần theo hai cách khác nhau.',
    architectureContextVi:
      'Xuất hiện giữa trình duyệt và máy chủ, giữa hai người dùng, giữa hai tổ chức, giữa container và host, giữa thiết bị và đám mây, giữa mã dự án và thư viện phụ thuộc.',
    commonWeaknessIds: ['wkn-idor', 'wkn-tenant-isolation', 'wkn-ipc-authz'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-attack-surface',
    titleVi: 'Bề mặt tấn công',
    definitionVi: 'Tập hợp mọi điểm mà dữ liệu hoặc lệnh từ bên ngoài có thể đi vào hệ thống.',
    whyItMattersVi:
      'Không lập được bề mặt tấn công thì việc kiểm thử chỉ là thử ngẫu nhiên. Lập bản đồ bề mặt là bước đầu tiên của mọi phương pháp có kỷ luật.',
    architectureContextVi:
      'Với web là mọi tham số và header; với mobile là intent và deep link; với cloud là mặt phẳng điều khiển; với IoT còn có cả giao diện vật lý.',
    relatedConceptIds: ['cpt-trust-boundary'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-least-privilege',
    titleVi: 'Đặc quyền tối thiểu',
    definitionVi:
      'Mỗi danh tính chỉ được cấp đúng quyền cần thiết để hoàn thành nhiệm vụ của nó, không hơn.',
    whyItMattersVi:
      'Nguyên tắc này quyết định thiệt hại tối đa khi một danh tính bị chiếm. Nó là khuyến nghị khắc phục xuất hiện nhiều nhất trong báo cáo.',
    architectureContextVi:
      'Áp dụng cho tài khoản cơ sở dữ liệu, vai trò IAM, service account của pod, phạm vi token OAuth và quyền của workflow CI.',
    commonWeaknessIds: ['wkn-excessive-iam', 'wkn-k8s-rbac-escalation'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-defense-in-depth',
    titleVi: 'Phòng thủ nhiều lớp',
    definitionVi:
      'Đặt nhiều lớp kiểm soát độc lập để một lớp thất bại không dẫn tới thất bại toàn bộ.',
    whyItMattersVi:
      'Giúp phân biệt "biện pháp chính" với "biện pháp bổ sung". Định danh khó đoán là lớp bổ sung, không thay thế kiểm tra phân quyền.',
    architectureContextVi:
      'CSP là lớp bổ sung cho mã hoá đầu ra; network policy là lớp bổ sung cho xác thực dịch vụ.',
    relatedConceptIds: ['cpt-least-privilege'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-authentication',
    titleVi: 'Xác thực',
    definitionVi: 'Quá trình xác định danh tính của một chủ thể.',
    whyItMattersVi:
      'Nhầm lẫn xác thực với phân quyền là nguyên nhân của rất nhiều lỗi thiết kế: hệ thống biết bạn là ai nhưng không kiểm tra bạn có được làm điều đó không.',
    architectureContextVi:
      'Thực hiện bằng mật khẩu, yếu tố thứ hai, passkey, token, chứng chỉ hoặc assertion từ nhà cung cấp danh tính.',
    commonWeaknessIds: ['wkn-weak-session', 'wkn-weak-reset', 'wkn-user-enumeration'],
    relatedConceptIds: ['cpt-authorization'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-authorization',
    titleVi: 'Phân quyền',
    definitionVi: 'Quá trình quyết định một chủ thể đã xác thực được phép làm gì.',
    whyItMattersVi:
      'Là nhóm vấn đề tạo ra nhiều báo cáo có giá trị nhất, vì tác động thường rõ ràng và dễ định lượng.',
    architectureContextVi:
      'Có thể ở mức chức năng, mức đối tượng, mức thuộc tính và mức người thuê. Bốn mức này phải được kiểm tra riêng.',
    commonWeaknessIds: ['wkn-idor', 'wkn-bfla', 'wkn-mass-assignment', 'wkn-tenant-isolation'],
    relatedConceptIds: ['cpt-authentication'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-same-origin-policy',
    titleVi: 'Same-origin policy',
    definitionVi:
      'Quy tắc của trình duyệt ngăn tài liệu từ một origin đọc dữ liệu của origin khác. Origin gồm scheme, host và port.',
    whyItMattersVi:
      'Là nền tảng của bảo mật web. Hiểu nó quyết định bạn có đánh giá đúng tác động của CORS, CSRF và XSS hay không.',
    architectureContextVi:
      'CORS là cơ chế nới lỏng có kiểm soát; postMessage là kênh giao tiếp được phép giữa các origin.',
    commonWeaknessIds: ['wkn-cors-misconfig', 'wkn-csrf'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-output-encoding',
    titleVi: 'Mã hoá đầu ra theo ngữ cảnh',
    definitionVi:
      'Chuyển đổi dữ liệu sao cho nó được diễn giải là nội dung chứ không phải là mã, theo đúng ngữ cảnh nơi nó xuất hiện.',
    whyItMattersVi:
      'Không có một cách mã hoá chung cho mọi ngữ cảnh. Đây là lý do các bộ lọc đầu vào một kích cỡ cho tất cả luôn thất bại.',
    architectureContextVi:
      'Ngữ cảnh gồm nội dung HTML, giá trị thuộc tính, URL, mã JavaScript và CSS; mỗi ngữ cảnh có quy tắc riêng.',
    commonWeaknessIds: ['wkn-xss-reflected', 'wkn-xss-stored', 'wkn-dom-xss'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-parameterized-query',
    titleVi: 'Truy vấn tham số hoá',
    definitionVi:
      'Tách cấu trúc truy vấn khỏi dữ liệu, để dữ liệu người dùng không bao giờ được bộ phân tích diễn giải như cú pháp.',
    whyItMattersVi:
      'Đây là biện pháp khắc phục gốc cho injection vào cơ sở dữ liệu, khác hẳn với việc lọc ký tự vốn luôn có ngoại lệ.',
    architectureContextVi:
      'Nguyên tắc tương tự áp dụng cho lệnh hệ thống, template và truy vấn thư mục.',
    commonWeaknessIds: ['wkn-sqli', 'wkn-nosql-injection', 'wkn-command-injection'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-idempotency',
    titleVi: 'Idempotency',
    definitionVi:
      'Tính chất khiến việc thực hiện cùng một thao tác nhiều lần cho ra cùng một kết quả như thực hiện một lần.',
    whyItMattersVi:
      'Vừa là yêu cầu độ tin cậy vừa là yêu cầu bảo mật: thiếu nó, việc gửi lại request trở thành cách nhân đôi giá trị nghiệp vụ.',
    architectureContextVi: 'Áp dụng cho API thanh toán, webhook, hàng đợi và cơ chế thử lại.',
    commonWeaknessIds: ['wkn-race-condition', 'wkn-business-logic'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-multi-tenancy',
    titleVi: 'Đa người thuê',
    definitionVi:
      'Mô hình một hệ thống phục vụ nhiều tổ chức khách hàng trên cùng hạ tầng, với dữ liệu được cô lập logic.',
    whyItMattersVi:
      'Ranh giới giữa các người thuê thường quan trọng hơn ranh giới giữa các người dùng, và vi phạm nó có tác động lớn hơn nhiều.',
    architectureContextVi:
      'Cô lập có thể ở mức hàng dữ liệu, mức schema, mức cơ sở dữ liệu hoặc mức hạ tầng; mỗi mức có rủi ro khác nhau.',
    commonWeaknessIds: ['wkn-tenant-isolation', 'wkn-ai-rag-leak'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-shared-responsibility',
    titleVi: 'Trách nhiệm chung',
    definitionVi:
      'Mô hình phân chia trách nhiệm bảo mật giữa nhà cung cấp dịch vụ và khách hàng, thay đổi theo loại dịch vụ.',
    whyItMattersVi:
      'Quyết định một phát hiện thuộc về ai và có nằm trong phạm vi chương trình hay không. Nhiều chương trình loại trừ cấu hình sai phía khách hàng.',
    architectureContextVi:
      'Càng dùng dịch vụ được quản lý nhiều, phần trách nhiệm của khách hàng càng dịch về phía cấu hình và dữ liệu.',
    commonWeaknessIds: ['wkn-public-storage', 'wkn-excessive-iam'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-scope',
    titleVi: 'Phạm vi chương trình',
    definitionVi:
      'Tập hợp tài sản và hành vi mà chương trình cho phép nghiên cứu, kèm các giới hạn kỹ thuật và quy định xử lý dữ liệu.',
    whyItMattersVi:
      'Phạm vi là ranh giới pháp lý của toàn bộ công việc. Vượt phạm vi có thể làm mất bảo vệ safe harbor.',
    architectureContextVi:
      'Được mô tả bằng nhiều loại định danh: tên miền, CIDR, package name, repository, địa chỉ hợp đồng, endpoint API.',
    relatedConceptIds: ['cpt-safe-harbor', 'cpt-minimal-poc'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-safe-harbor',
    titleVi: 'Safe harbor',
    definitionVi:
      'Cam kết của tổ chức rằng nghiên cứu thiện chí, đúng phạm vi và tuân thủ chính sách sẽ không bị theo đuổi pháp lý.',
    whyItMattersVi:
      'Là cơ sở để người nghiên cứu làm việc mà không chịu rủi ro pháp lý không lường trước. Nó có điều kiện và không tự động áp dụng cho mọi hành vi.',
    architectureContextVi:
      'Được công bố trong chính sách chương trình, đôi khi có phiên bản riêng cho nghiên cứu hệ thống AI.',
    relatedConceptIds: ['cpt-scope'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-minimal-poc',
    titleVi: 'PoC tối thiểu',
    definitionVi:
      'Bằng chứng nhỏ nhất đủ để chứng minh vấn đề tồn tại, với tác động thấp nhất có thể lên hệ thống và người dùng.',
    whyItMattersVi:
      'Vượt quá PoC tối thiểu là ranh giới giữa nghiên cứu thiện chí và hành vi có thể bị coi là tấn công.',
    architectureContextVi:
      'Với IDOR là một cặp tài khoản của bạn; với SSRF là một request tới đích của bạn; với SQL injection là một giá trị vô hại.',
    relatedConceptIds: ['cpt-safe-harbor', 'cpt-evidence-hygiene'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-evidence-hygiene',
    titleVi: 'Vệ sinh bằng chứng',
    definitionVi:
      'Nguyên tắc thu thập vừa đủ bằng chứng để tái hiện và chứng minh, đồng thời không giữ dữ liệu của người khác lâu hơn cần thiết.',
    whyItMattersVi:
      'Giữ dữ liệu của người khác biến bạn từ người báo cáo thành một rủi ro. Nhiều chính sách yêu cầu xoá dữ liệu đã tiếp xúc.',
    architectureContextVi:
      'Áp dụng cho ảnh chụp màn hình, bản ghi request/response, tệp xuất và ghi chú cá nhân.',
    relatedConceptIds: ['cpt-minimal-poc'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-severity-vs-impact',
    titleVi: 'Mức nghiêm trọng kỹ thuật và tác động kinh doanh',
    definitionVi:
      'Mức nghiêm trọng kỹ thuật mô tả đặc tính của lỗ hổng; tác động kinh doanh mô tả hậu quả với tổ chức và người dùng.',
    whyItMattersVi:
      'Hai thứ này có thể lệch nhau rất xa. Báo cáo tốt trình bày cả hai và không dùng điểm số để thay cho lập luận.',
    architectureContextVi:
      'CVSS đo mức kỹ thuật; taxonomy của nền tảng và thang riêng của chương trình đưa thêm ngữ cảnh.',
    standardReferences: [
      { standardId: 'std-cvss4', sectionId: 'Base metric group' },
      { standardId: 'std-bugcrowd-vrt', sectionId: 'VRT' },
    ],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-false-positive',
    titleVi: 'Dương tính giả',
    definitionVi:
      'Một quan sát trông giống lỗ hổng nhưng thực ra là hành vi thiết kế, khác biệt môi trường, hoặc hiểu nhầm của người kiểm thử.',
    whyItMattersVi:
      'Gửi dương tính giả làm giảm uy tín với triager và tiêu tốn thời gian của cả hai bên.',
    architectureContextVi:
      'Nguyên nhân phổ biến: cache, khác biệt giữa môi trường, trạng thái riêng của tài khoản, và output công cụ chưa xác minh.',
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-tool-output-not-evidence',
    titleVi: 'Output công cụ không phải bằng chứng',
    definitionVi:
      'Kết quả của một công cụ là một giả thuyết cần xác minh, không phải một kết luận có thể báo cáo.',
    whyItMattersVi: 'Báo cáo dạng kết quả quét thô thường bị đóng ngay là spam hoặc informative.',
    architectureContextVi:
      'Áp dụng cho trình quét mạng, trình phân tích tĩnh, trình quét phụ thuộc và trình quét bí mật.',
    relatedConceptIds: ['cpt-false-positive'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-source-sink',
    titleVi: 'Nguồn, biến đổi và điểm nhận',
    definitionVi:
      'Mô hình mô tả đường đi của dữ liệu: nguồn là nơi dữ liệu không tin cậy đi vào, biến đổi là các phép xử lý trung gian, điểm nhận là nơi dữ liệu được dùng theo cách có hệ quả.',
    whyItMattersVi: 'Là khung tư duy chung của cả review mã thủ công lẫn phân tích tĩnh tự động.',
    architectureContextVi:
      'Nguồn có thể là tham số HTTP, tệp, hàng đợi, biến môi trường; điểm nhận có thể là truy vấn, lệnh, tệp, template.',
    commonWeaknessIds: ['wkn-sqli', 'wkn-command-injection', 'wkn-path-traversal'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-variant-analysis',
    titleVi: 'Phân tích biến thể',
    definitionVi:
      'Sau khi hiểu nguyên nhân gốc của một lỗi, tìm mọi vị trí khác trong hệ thống có cùng mẫu.',
    whyItMattersVi:
      'Một lỗi hiếm khi đứng một mình. Đây là cách hiệu quả nhất để chuyển một phát hiện thành nhiều phát hiện chất lượng.',
    architectureContextVi:
      'Thực hiện bằng tìm kiếm mã, truy vấn dựa trên luồng dữ liệu, hoặc đọc các module tương tự.',
    relatedConceptIds: ['cpt-source-sink'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-token-lifecycle',
    titleVi: 'Vòng đời token',
    definitionVi: 'Chuỗi sự kiện của một token: cấp phát, sử dụng, làm mới, hết hạn và thu hồi.',
    whyItMattersVi:
      'Nhiều lỗ hổng nằm ở khoảng trống trong vòng đời: token không hết hạn, thu hồi không có hiệu lực, hoặc phạm vi rộng hơn cần thiết.',
    architectureContextVi:
      'Áp dụng cho token OAuth, JWT, API key, URL ký sẵn và token đặt lại mật khẩu.',
    commonWeaknessIds: ['wkn-jwt-validation', 'wkn-weak-reset', 'wkn-secret-exposure'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-federation-trust',
    titleVi: 'Tin cậy liên hệ thống',
    definitionVi:
      'Quan hệ trong đó một hệ thống chấp nhận khẳng định về danh tính do hệ thống khác đưa ra.',
    whyItMattersVi:
      'Mức bảo mật của bên chấp nhận không thể cao hơn mức bảo mật của bên đưa ra khẳng định, và của cách bên chấp nhận kiểm tra khẳng định đó.',
    architectureContextVi:
      'Hiện diện trong OAuth, OpenID Connect, SAML, và trong quan hệ tin cậy OIDC giữa CI và cloud.',
    commonWeaknessIds: ['wkn-oauth-redirect', 'wkn-account-linking', 'wkn-cicd-trust'],
    standardReferences: [
      { standardId: 'std-rfc9700', sectionId: 'Best Current Practice' },
      { standardId: 'std-oidc-core', sectionId: 'ID Token Validation' },
    ],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-cache-key',
    titleVi: 'Khoá cache',
    definitionVi:
      'Tập thành phần của request mà hệ thống cache dùng để quyết định hai request có được coi là như nhau hay không.',
    whyItMattersVi:
      'Khi một thành phần ảnh hưởng tới nội dung phản hồi nhưng không nằm trong khoá cache, phản hồi của một người có thể được phục vụ cho người khác.',
    architectureContextVi: 'Có ở CDN, reverse proxy, cache của trình duyệt và cache tầng ứng dụng.',
    commonWeaknessIds: ['wkn-cache-poisoning'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-protocol-desync',
    titleVi: 'Bất đồng bộ giao thức',
    definitionVi:
      'Tình huống hai thành phần trong cùng chuỗi xử lý diễn giải cùng một chuỗi byte theo hai cách khác nhau.',
    whyItMattersVi:
      'Là nguyên nhân gốc của request smuggling và của nhiều vấn đề khi có nhiều lớp trung gian.',
    architectureContextVi: 'Xuất hiện giữa CDN, reverse proxy và máy chủ ứng dụng.',
    commonWeaknessIds: ['wkn-request-smuggling'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-normalization',
    titleVi: 'Chuẩn hoá dữ liệu',
    definitionVi: 'Đưa dữ liệu về một dạng biểu diễn duy nhất trước khi so sánh hoặc kiểm tra.',
    whyItMattersVi:
      'Kiểm tra trước khi chuẩn hoá là nguyên nhân của path traversal và của nhiều cách vượt bộ lọc.',
    architectureContextVi: 'Áp dụng cho đường dẫn, URL, Unicode và tên miền.',
    commonWeaknessIds: ['wkn-path-traversal'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-memory-safety',
    titleVi: 'An toàn bộ nhớ',
    definitionVi: 'Tính chất bảo đảm chương trình chỉ truy cập vùng nhớ hợp lệ và còn hiệu lực.',
    whyItMattersVi:
      'Ngôn ngữ không an toàn bộ nhớ là nơi tập trung phần lớn lỗ hổng nghiêm trọng trong phần mềm hệ thống.',
    architectureContextVi:
      'Quan trọng nhất ở ranh giới phân tích dữ liệu không tin cậy: định dạng tệp, giao thức mạng, giải mã media.',
    commonWeaknessIds: ['wkn-buffer-overflow', 'wkn-use-after-free'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-provenance',
    titleVi: 'Provenance của artifact',
    definitionVi:
      'Bằng chứng có thể kiểm chứng về việc một artifact được tạo ra từ mã nguồn nào, bằng quy trình nào.',
    whyItMattersVi:
      'Không có provenance thì việc tin vào một artifact chỉ dựa vào niềm tin với nơi lưu trữ nó.',
    architectureContextVi: 'Được mô tả bởi SLSA và hiện thực bằng ký artifact và chứng thực build.',
    standardReferences: [{ standardId: 'std-slsa', sectionId: 'Build levels' }],
    commonWeaknessIds: ['wkn-dependency-confusion', 'wkn-cicd-trust'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-sbom',
    titleVi: 'SBOM',
    definitionVi:
      'Danh mục thành phần phần mềm có trong một sản phẩm, kèm phiên bản và quan hệ phụ thuộc.',
    whyItMattersVi:
      'Trả lời câu hỏi "sản phẩm này chứa gì", nhưng không trả lời câu hỏi "sản phẩm này có bị ảnh hưởng không".',
    architectureContextVi: 'Sinh tự động trong pipeline build và đi kèm bản phát hành.',
    standardReferences: [{ standardId: 'std-owasp-scvs', sectionId: 'SCVS' }],
    relatedConceptIds: ['cpt-provenance'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-secure-boot',
    titleVi: 'Secure boot',
    definitionVi:
      'Cơ chế trong đó mỗi giai đoạn khởi động xác minh chữ ký của giai đoạn tiếp theo trước khi trao quyền điều khiển.',
    whyItMattersVi:
      'Quyết định liệu người có quyền truy cập vật lý có thể thay thế firmware hay không.',
    architectureContextVi:
      'Có ở thiết bị nhúng, điện thoại, máy tính và một số thiết bị công nghiệp.',
    commonWeaknessIds: ['wkn-unsafe-update', 'wkn-firmware-hardcoded-cred'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-evm-state',
    titleVi: 'Trạng thái on-chain',
    definitionVi:
      'Dữ liệu lưu trong hợp đồng trên blockchain, công khai với mọi người và tồn tại vĩnh viễn.',
    whyItMattersVi:
      'Biến được đánh dấu private trong Solidity vẫn đọc được từ ngoài. Không có dữ liệu bí mật on-chain.',
    architectureContextVi:
      'Mọi giao dịch thay đổi trạng thái đều được ghi lại và có thể phân tích lại.',
    commonWeaknessIds: ['wkn-web3-access-control'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-checks-effects-interactions',
    titleVi: 'Mẫu kiểm tra - tác động - tương tác',
    definitionVi:
      'Thứ tự viết hàm hợp đồng: kiểm tra điều kiện trước, cập nhật trạng thái nội bộ tiếp theo, gọi ra ngoài sau cùng.',
    whyItMattersVi:
      'Là biện pháp khắc phục gốc cho reentrancy, hiệu quả hơn việc chỉ thêm khoá chống tái nhập.',
    architectureContextVi: 'Áp dụng cho mọi hàm hợp đồng có gọi tới địa chỉ ngoài.',
    commonWeaknessIds: ['wkn-web3-reentrancy'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-invariant',
    titleVi: 'Bất biến',
    definitionVi:
      'Một tính chất phải luôn đúng với hệ thống bất kể chuỗi thao tác nào được thực hiện.',
    whyItMattersVi:
      'Kiểm thử bất biến tìm ra lỗi mà unit test theo kịch bản bỏ sót, đặc biệt trong hệ thống có logic kinh tế.',
    architectureContextVi:
      'Ví dụ: tổng số dư của người dùng luôn bằng số dư của hợp đồng; không ai rút được nhiều hơn số đã gửi.',
    commonWeaknessIds: ['wkn-web3-oracle', 'wkn-business-logic'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-llm-context-untrusted',
    titleVi: 'Ngữ cảnh mô hình là vùng dữ liệu không tin cậy',
    definitionVi:
      'Mọi nội dung đi vào ngữ cảnh của mô hình, dù từ tài liệu, trang web hay email, phải được coi là dữ liệu do bên ngoài kiểm soát.',
    whyItMattersVi:
      'Đây là cách đúng để mô hình hoá prompt injection: vấn đề không nằm ở mô hình mà ở việc hệ thống tin tưởng đầu ra của nó.',
    architectureContextVi: 'Áp dụng cho RAG, agent gọi công cụ, bộ nhớ hội thoại và hệ đa agent.',
    commonWeaknessIds: ['wkn-ai-indirect-prompt-injection', 'wkn-ai-excessive-agency'],
    standardReferences: [{ standardId: 'std-owasp-llm-top10', sectionId: 'Prompt Injection' }],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-human-in-the-loop',
    titleVi: 'Phê duyệt của con người',
    definitionVi:
      'Điểm trong luồng tự động nơi một người phải xác nhận trước khi hành động có tác dụng thật được thực hiện.',
    whyItMattersVi:
      'Là biện pháp giảm thiểu chính cho quyền quá mức của agent, nhưng chỉ hiệu quả khi người dùng thực sự hiểu điều mình đang phê duyệt.',
    architectureContextVi:
      'Đặt trước các hành động không hoàn tác được: gửi, thanh toán, xoá, chia sẻ.',
    commonWeaknessIds: ['wkn-ai-excessive-agency'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-data-minimization',
    titleVi: 'Tối thiểu hoá dữ liệu',
    definitionVi:
      'Nguyên tắc chỉ thu thập, xử lý và lưu giữ lượng dữ liệu cá nhân tối thiểu cần cho mục đích đã nêu.',
    whyItMattersVi:
      'Giảm dữ liệu là cách giảm tác động hiệu quả nhất; dữ liệu không tồn tại thì không thể bị lộ.',
    architectureContextVi: 'Áp dụng cho log, analytics, sao lưu, chỉ mục tìm kiếm và phản hồi API.',
    commonWeaknessIds: ['wkn-excessive-data', 'wkn-shared-link-exposure'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-purdue-model',
    titleVi: 'Mô hình Purdue',
    definitionVi:
      'Mô hình phân tầng tham chiếu cho hệ thống công nghiệp, từ thiết bị hiện trường tới mạng doanh nghiệp.',
    whyItMattersVi:
      'Cung cấp ngôn ngữ chung để nói về phân đoạn mạng OT và về mức độ nghiêm trọng khi một ranh giới bị vượt qua.',
    architectureContextVi: 'Ranh giới quan trọng nhất là giữa mạng doanh nghiệp và mạng vận hành.',
    commonWeaknessIds: ['wkn-ics-protocol-trust'],
    standardReferences: [{ standardId: 'std-nist-800-82', sectionId: 'OT architecture' }],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-safety-over-security',
    titleVi: 'An toàn và khả dụng trước tính bí mật',
    definitionVi:
      'Trong môi trường vận hành công nghiệp và phương tiện, thứ tự ưu tiên đảo ngược so với hệ thống thông tin thông thường.',
    whyItMattersVi:
      'Thay đổi cả cách kiểm thử lẫn cách viết khuyến nghị: một biện pháp gây gián đoạn là không chấp nhận được dù nó tăng mức bảo mật.',
    architectureContextVi: 'Áp dụng cho ICS, OT, thiết bị y tế và hệ thống trên phương tiện.',
    relatedConceptIds: ['cpt-purdue-model'],
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-content-status',
    titleVi: 'Trạng thái nội dung và ba loại ngày',
    definitionVi:
      'Cơ chế của chính dự án này để phân biệt nội dung đã được rà soát với nội dung mới soạn, và để phân biệt việc kiểm tra liên kết với việc rà soát nội dung.',
    whyItMattersVi:
      'Giữ cho bản đồ kiến thức trung thực: không đánh dấu là đã xác minh khi chưa thực sự mở nguồn.',
    architectureContextVi:
      'metadataLastUpdated, lastContentReviewed và linkLastChecked là ba trường độc lập và không thay thế nhau.',
    contentStatus: 'draft',
  }),
  defineConcept({
    id: 'cpt-knowledge-gap',
    titleVi: 'Khoảng trống kiến thức',
    definitionVi:
      'Phần của bản đồ chưa có đủ nội dung, lab, checklist, bài tập báo cáo hoặc nguồn chuẩn.',
    whyItMattersVi:
      'Bề mặt tấn công luôn thay đổi, nên bản đồ không bao giờ đầy đủ. Thừa nhận khoảng trống trung thực hơn là giả vờ bao phủ toàn bộ.',
    architectureContextVi:
      'Được tính tự động từ dữ liệu và hiển thị trong trang Gap Analysis cùng báo cáo coverage.',
    relatedConceptIds: ['cpt-content-status'],
    contentStatus: 'draft',
  }),
];
