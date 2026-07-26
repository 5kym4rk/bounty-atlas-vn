import type { ReportExercise, ReportRubricItem } from '@/schemas/entities';

/** Rubric dùng chung cho mọi bài tập viết báo cáo. */
function baseRubric(prefix: string, extra: ReportRubricItem[] = []): ReportRubricItem[] {
  return [
    {
      id: `${prefix}-r1`,
      criterionVi: 'Tiêu đề nêu được tài sản, loại vấn đề và tác động trong một dòng',
      maxPoints: 10,
      guidanceVi:
        'Tiêu đề tốt cho phép triager phân loại mà không cần đọc phần thân. Tránh tiêu đề chỉ nêu tên kỹ thuật.',
    },
    {
      id: `${prefix}-r2`,
      criterionVi: 'Bước tái hiện đủ để người khác làm theo mà không cần hỏi lại',
      maxPoints: 25,
      guidanceVi:
        'Ghi rõ tài khoản nào, vai trò nào, trạng thái ban đầu là gì, và kết quả quan sát được ở mỗi bước.',
    },
    {
      id: `${prefix}-r3`,
      criterionVi: 'Phân biệt rõ tác động kỹ thuật và tác động kinh doanh',
      maxPoints: 20,
      guidanceVi:
        'Tác động kỹ thuật mô tả điều hệ thống cho phép; tác động kinh doanh mô tả hậu quả với tổ chức và người dùng.',
    },
    {
      id: `${prefix}-r4`,
      criterionVi: 'Bằng chứng ở mức tối thiểu và đã che thông tin định danh',
      maxPoints: 20,
      guidanceVi: 'Nêu rõ dữ liệu đã tiếp xúc, đã che gì, và đã xoá gì sau khi hoàn thành.',
    },
    {
      id: `${prefix}-r5`,
      criterionVi: 'Khuyến nghị khắc phục nêu nguyên nhân gốc, không chỉ triệu chứng',
      maxPoints: 15,
      guidanceVi:
        'Đề xuất ở mức nguyên tắc; không áp đặt một giải pháp kỹ thuật cụ thể cho đội phát triển.',
    },
    {
      id: `${prefix}-r6`,
      criterionVi: 'Phân loại severity phản ánh đúng điều đã chứng minh',
      maxPoints: 10,
      guidanceVi:
        'Chấm dựa trên điều bạn đã chứng minh, không dựa trên điều có thể xảy ra trên lý thuyết.',
    },
    ...extra,
  ];
}

const SECTIONS = [
  'Tiêu đề',
  'Tài sản bị ảnh hưởng',
  'Tóm tắt',
  'Điều kiện cần',
  'Bước tái hiện',
  'Kết quả thực tế',
  'Kết quả mong đợi',
  'Tác động kỹ thuật',
  'Tác động kinh doanh',
  'Bằng chứng',
  'Dữ liệu đã tiếp xúc',
  'Hành động giảm thiểu',
  'Khuyến nghị khắc phục',
  'Timeline',
];

export const reportExercises: ReportExercise[] = [
  {
    id: 'rex-idor-basic',
    titleVi: 'Viết báo cáo cho một IDOR ở chức năng xem hoá đơn',
    scenarioVi:
      'Trong lab, bạn tạo hai tài khoản. Với phiên của tài khoản A, bạn đổi định danh hoá đơn trong đường dẫn sang định danh hoá đơn của tài khoản B và nhận được toàn bộ nội dung hoá đơn đó, gồm tên, địa chỉ và số tiền. Bạn dừng lại sau một bản ghi.',
    assetVi: 'Ứng dụng web trong lab, chức năng xem hoá đơn của người dùng.',
    scopeVi:
      'Tài sản nằm trong phạm vi. Chính sách yêu cầu không tiếp xúc dữ liệu người dùng thật và giới hạn PoC ở mức tối thiểu.',
    evidenceVi: [
      'Hai tài khoản do bạn tạo, kèm định danh hoá đơn của từng tài khoản.',
      'Một ảnh chụp phản hồi đã che thông tin định danh.',
      'Request tối thiểu đã dùng.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-idor-basic', [
      {
        id: 'rex-idor-basic-r7',
        criterionVi:
          'Nêu được vì sao đây là vấn đề phân quyền chứ không phải vấn đề định danh đoán được',
        maxPoints: 10,
        guidanceVi:
          'Định danh khó đoán là biện pháp bổ sung; nguyên nhân gốc là thiếu kiểm tra quyền sở hữu ở tầng dữ liệu.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt nêu rõ: hai tài khoản thử nghiệm do người báo cáo tạo; request tối thiểu; một bản ghi duy nhất đã tiếp xúc và đã che; ước lượng phạm vi dựa trên cấu trúc định danh mà không liệt kê; khuyến nghị gắn điều kiện chủ sở hữu vào truy vấn ở tầng dữ liệu và bổ sung test tự động cho ma trận vai trò × đối tượng.',
  },
  {
    id: 'rex-bola-api',
    titleVi: 'Viết báo cáo cho BOLA ở endpoint API theo lô',
    scenarioVi:
      'Endpoint nhận một mảng định danh đối tượng và trả về dữ liệu cho từng phần tử. Kiểm tra quyền chỉ được thực hiện cho phần tử đầu tiên. Bạn chứng minh bằng hai tài khoản của mình với một mảng gồm hai phần tử.',
    assetVi: 'API trong lab, endpoint truy vấn theo lô.',
    scopeVi: 'API nằm trong phạm vi. Chính sách yêu cầu tự giới hạn tốc độ.',
    evidenceVi: [
      'Request với mảng hai phần tử và phản hồi tương ứng đã che dữ liệu.',
      'Kết quả khi đảo thứ tự hai phần tử, cho thấy chỉ phần tử đầu được kiểm tra.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-bola-api', [
      {
        id: 'rex-bola-api-r7',
        criterionVi: 'Chứng minh được kiểm tra chỉ áp dụng cho phần tử đầu tiên',
        maxPoints: 15,
        guidanceVi: 'Phép thử đảo thứ tự là cách chứng minh gọn nhất và không cần thêm dữ liệu.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt trình bày hai request đối xứng để loại trừ mọi giải thích khác, và khuyến nghị kiểm tra quyền cho từng phần tử trong lô ở tầng truy vấn dữ liệu.',
  },
  {
    id: 'rex-ssrf-safe',
    titleVi: 'Viết báo cáo SSRF mà không lấy thông tin xác thực',
    scenarioVi:
      'Tính năng xem trước liên kết trong lab nhận URL từ người dùng và máy chủ thực hiện request tới đó. Bạn chứng minh bằng cách trỏ tới một máy chủ do bạn kiểm soát và quan sát request đến trong log của mình. Bạn không thử truy vấn dịch vụ metadata.',
    assetVi: 'Ứng dụng web trong lab, tính năng xem trước liên kết.',
    scopeVi:
      'Tài sản nằm trong phạm vi. Chính sách cấm nhắm tới hạ tầng nội bộ và cấm trích xuất thông tin xác thực.',
    evidenceVi: [
      'Request đã gửi và log của máy chủ nhận, gồm địa chỉ nguồn và User-Agent.',
      'Giải thích vì sao điều này chứng minh máy chủ phát sinh request theo yêu cầu người dùng.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-ssrf-safe', [
      {
        id: 'rex-ssrf-safe-r7',
        criterionVi: 'Giải thích tác động tiềm năng mà không thực hiện hành vi vượt PoC tối thiểu',
        maxPoints: 15,
        guidanceVi:
          'Nêu vì sao vị trí mạng của máy chủ quyết định tác động, và vì sao bạn dừng trước khi chạm tới dịch vụ metadata.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt nói rõ ranh giới đã tự đặt: chỉ chứng minh khả năng phát sinh request, không lấy thông tin xác thực, và đề nghị chương trình cho biết có muốn PoC sâu hơn trong môi trường được kiểm soát hay không.',
  },
  {
    id: 'rex-stored-xss',
    titleVi: 'Viết báo cáo XSS lưu trữ có kiểm soát ảnh hưởng',
    scenarioVi:
      'Trường tên hiển thị trong lab không mã hoá đầu ra và nội dung hiển thị cho người dùng khác trong cùng tổ chức. Bạn dùng tài khoản của mình, chứng minh trong trình duyệt của chính mình, rồi xoá nội dung ngay.',
    assetVi: 'Ứng dụng web trong lab, trường tên hiển thị của hồ sơ người dùng.',
    scopeVi: 'Tài sản nằm trong phạm vi. Chính sách yêu cầu không ảnh hưởng tới người dùng khác.',
    evidenceVi: [
      'Ảnh chụp trong trình duyệt của chính bạn.',
      'Xác nhận đã xoá nội dung thử nghiệm kèm thời điểm.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-stored-xss', [
      {
        id: 'rex-stored-xss-r7',
        criterionVi: 'Chứng minh đã hạn chế ảnh hưởng tới người dùng khác',
        maxPoints: 15,
        guidanceVi:
          'Ghi rõ phạm vi hiển thị của nội dung, thời gian tồn tại và thời điểm bạn xoá nó.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt mô tả tác động theo quyền mà mã có được trong ngữ cảnh trang, và khuyến nghị mã hoá đầu ra theo ngữ cảnh tại thời điểm render kèm CSP như lớp bổ sung.',
  },
  {
    id: 'rex-auth-bypass',
    titleVi: 'Viết báo cáo bỏ qua bước thứ hai của MFA',
    scenarioVi:
      'Trong lab, sau khi nhập đúng mật khẩu, ứng dụng đặt một cờ ở phía client để đánh dấu đã qua bước một. Bạn phát hiện endpoint hoàn tất đăng nhập chấp nhận cờ đó mà không kiểm tra ở phía server. Bạn chứng minh trên tài khoản của chính mình.',
    assetVi: 'Ứng dụng web trong lab, luồng đăng nhập hai bước.',
    scopeVi: 'Tài sản nằm trong phạm vi. Chính sách cấm thao tác lên tài khoản của người khác.',
    evidenceVi: [
      'Chuỗi request của luồng đăng nhập bình thường và luồng đã rút gọn.',
      'Xác nhận đã dùng tài khoản của chính bạn ở cả hai lần.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-auth-bypass', [
      {
        id: 'rex-auth-bypass-r7',
        criterionVi: 'Xác định đúng nguyên nhân gốc là trạng thái xác thực lưu ở phía client',
        maxPoints: 15,
        guidanceVi:
          'Phân biệt lỗi này với các dạng bỏ qua MFA khác như dùng lại mã hoặc thiếu giới hạn thử.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt khuyến nghị ràng buộc trạng thái từng bước ở phía server và gắn nó với phiên, đồng thời nêu rõ đã không thử trên tài khoản nào khác.',
  },
  {
    id: 'rex-tenant-leak',
    titleVi: 'Viết báo cáo rò rỉ chéo người thuê ở chức năng tìm kiếm',
    scenarioVi:
      'Trong ứng dụng lab đa người thuê, bạn tạo hai tổ chức của chính mình. Kết quả tìm kiếm ở tổ chức A chứa một bản ghi thuộc tổ chức B. Bạn dừng ngay và không tìm thêm.',
    assetVi: 'Ứng dụng SaaS trong lab, chức năng tìm kiếm toàn cục.',
    scopeVi:
      'Tài sản nằm trong phạm vi. Chính sách yêu cầu dừng ngay khi chạm dữ liệu ngoài tổ chức của mình.',
    evidenceVi: [
      'Truy vấn đã dùng và một dòng kết quả đã che thông tin định danh.',
      'Xác nhận cả hai tổ chức đều do bạn tạo.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-tenant-leak', [
      {
        id: 'rex-tenant-leak-r7',
        criterionVi: 'Mô tả tác động ở mức người thuê chứ không chỉ ở mức bản ghi',
        maxPoints: 15,
        guidanceVi:
          'Rò rỉ chéo người thuê ảnh hưởng tới cam kết hợp đồng của nhà cung cấp với khách hàng.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt nhấn mạnh việc dừng ngay sau bản ghi đầu tiên và khuyến nghị ràng buộc người thuê ở tầng truy vấn, lấy từ phiên chứ không từ tham số.',
  },
  {
    id: 'rex-cloud-public-storage',
    titleVi: 'Viết báo cáo lưu trữ đám mây để công khai ngoài dự định',
    scenarioVi:
      'Bạn phát hiện một tài nguyên lưu trữ trả về danh sách tệp khi truy cập không có thông tin xác thực. Bạn ghi nhận cấu trúc và tên vài tệp nhưng không tải bất kỳ tệp nào.',
    assetVi: 'Tài nguyên lưu trữ đối tượng thuộc tổ chức trong phạm vi.',
    scopeVi:
      'Chính sách cho phép báo cáo cấu hình lưu trữ nhưng cấm tải dữ liệu. Cần xác định đây là trách nhiệm của khách hàng hay của nhà cung cấp.',
    evidenceVi: [
      'Ảnh chụp phản hồi cho thấy truy cập ẩn danh thành công, đã che tên tệp.',
      'Xác nhận không tải tệp nào về.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-cloud-public-storage', [
      {
        id: 'rex-cloud-public-storage-r7',
        criterionVi: 'Phân định rõ trách nhiệm theo mô hình trách nhiệm chung',
        maxPoints: 15,
        guidanceVi:
          'Nhiều chương trình loại trừ cấu hình sai phía khách hàng; nêu rõ điều này ngay trong phần tóm tắt.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt ước lượng mức nhạy cảm dựa trên tên tệp và cấu trúc thư mục mà không tải nội dung, và khuyến nghị bật chặn truy cập công khai ở mức tài khoản.',
  },
  {
    id: 'rex-mobile-storage',
    titleVi: 'Viết báo cáo lưu trữ không an toàn trên ứng dụng di động',
    scenarioVi:
      'Trong ứng dụng lab, token phiên được lưu ở dạng không được bảo vệ trong một tệp cấu hình trên thiết bị và cũng xuất hiện trong log ứng dụng.',
    assetVi: 'Ứng dụng di động lab chạy trên máy ảo của bạn.',
    scopeVi:
      'Ứng dụng lab. Nếu là ứng dụng thật, cần kiểm tra chính sách xem lưu trữ cục bộ có nằm trong phạm vi không.',
    evidenceVi: ['Đường dẫn tệp và một đoạn nội dung đã che.', 'Dòng log tương ứng đã che token.'],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-mobile-storage', [
      {
        id: 'rex-mobile-storage-r7',
        criterionVi: 'Nêu được điều kiện cần để khai thác và vì sao nó vẫn đáng báo cáo',
        maxPoints: 15,
        guidanceVi:
          'Nhiều chương trình coi lưu trữ cục bộ là mức thấp nếu cần truy cập vật lý; hãy nêu điều kiện trung thực.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt nêu rõ điều kiện cần, không thổi phồng tác động, và khuyến nghị dùng kho khoá của nền tảng cùng việc loại token khỏi log.',
  },
  {
    id: 'rex-supply-chain-secret',
    titleVi: 'Viết báo cáo bí mật lộ trong pipeline CI',
    scenarioVi:
      'Trong repository của chính bạn, bạn dựng lại tình huống một workflow in giá trị biến môi trường ra log và log đó công khai. Bạn cần viết báo cáo như thể phát hiện điều này ở một dự án trong phạm vi.',
    assetVi: 'Cấu hình workflow CI của một repository trong phạm vi.',
    scopeVi:
      'Chính sách cho phép báo cáo cấu hình CI. Cấm sử dụng bí mật tìm được để truy cập bất kỳ hệ thống nào.',
    evidenceVi: ['Đoạn cấu hình workflow gây rò rỉ.', 'Ảnh chụp log đã che giá trị bí mật.'],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-supply-chain-secret', [
      {
        id: 'rex-supply-chain-secret-r7',
        criterionVi: 'Mô tả phạm vi quyền của bí mật mà không sử dụng nó',
        maxPoints: 15,
        guidanceVi:
          'Suy ra phạm vi từ tên biến và ngữ cảnh sử dụng; đề nghị xoay vòng thay vì tự kiểm chứng.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt đặt việc xoay vòng bí mật lên đầu phần khuyến nghị và nêu rõ người báo cáo chưa từng dùng bí mật đó.',
  },
  {
    id: 'rex-web3-access-control',
    titleVi: 'Viết báo cáo hàm hợp đồng thiếu kiểm soát truy cập',
    scenarioVi:
      'Trên chain cục bộ, bạn phát hiện một hàm thay đổi địa chỉ nhận phí không có modifier kiểm soát truy cập. Bạn viết một test chứng minh một địa chỉ bất kỳ gọi được hàm đó.',
    assetVi: 'Hợp đồng thông minh triển khai trên chain cục bộ trong lab.',
    scopeVi:
      'Chỉ chain cục bộ. Nếu là hợp đồng thật, cần quyền rõ ràng trước khi gửi bất kỳ giao dịch nào.',
    evidenceVi: [
      'Mã test thất bại/thành công chứng minh hàm gọi được từ địa chỉ bất kỳ.',
      'Địa chỉ hợp đồng trên chain cục bộ và cấu hình môi trường.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-web3-access-control', [
      {
        id: 'rex-web3-access-control-r7',
        criterionVi: 'Đính kèm test chạy được làm bằng chứng tái hiện',
        maxPoints: 15,
        guidanceVi:
          'Với hợp đồng thông minh, một test chạy được là bằng chứng mạnh nhất và dễ xác minh nhất.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt trình bày tác động kinh tế dưới dạng bất biến bị phá vỡ, và nêu rõ toàn bộ chứng minh diễn ra trên chain cục bộ.',
  },
  {
    id: 'rex-ai-agent-authz',
    titleVi: 'Viết báo cáo agent AI vượt ranh giới phân quyền',
    scenarioVi:
      'Trong lab, một tài liệu do người dùng khác tải lên chứa hướng dẫn nhúng khiến agent gọi công cụ đọc tài liệu của tài khoản thứ hai. Cả hai tài khoản đều do bạn tạo.',
    assetVi: 'Tính năng trợ lý AI trong ứng dụng lab.',
    scopeVi:
      'Chính sách AI của chương trình yêu cầu chứng minh có vượt qua ranh giới tin cậy, không chỉ hành vi mô hình bất thường.',
    evidenceVi: [
      'Nội dung tài liệu đã dùng và hành động mà agent thực hiện.',
      'Xác nhận cả hai tài khoản đều do bạn tạo và không có dữ liệu người thật.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-ai-agent-authz', [
      {
        id: 'rex-ai-agent-authz-r7',
        criterionVi: 'Chỉ rõ ranh giới tin cậy nào bị vượt qua',
        maxPoints: 20,
        guidanceVi:
          'Không dừng ở việc mô hình làm điều không mong muốn; phải chỉ ra quyền của ai bị dùng cho hành động của ai.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt tách rõ hai điều: mô hình bị ảnh hưởng bởi nội dung ngoài (chưa đủ), và công cụ thực hiện hành động với quyền vượt quá người dùng (đủ để thành lỗ hổng).',
  },
  {
    id: 'rex-network-exposed-admin',
    titleVi: 'Viết báo cáo giao diện quản trị phơi ra Internet',
    scenarioVi:
      'Bạn phát hiện một giao diện quản trị của tổ chức trong phạm vi truy cập được từ Internet. Bạn xác nhận trang đăng nhập tồn tại nhưng không thử bất kỳ thông tin xác thực nào.',
    assetVi: 'Dịch vụ hạ tầng thuộc tổ chức trong phạm vi.',
    scopeVi:
      'Chính sách cho phép báo cáo dịch vụ phơi ra ngoài nhưng cấm thử thông tin xác thực mặc định.',
    evidenceVi: [
      'Ảnh chụp trang đăng nhập với địa chỉ đã che một phần.',
      'Xác nhận không thử đăng nhập.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-network-exposed-admin', [
      {
        id: 'rex-network-exposed-admin-r7',
        criterionVi: 'Phân biệt phát hiện này với việc chỉ liệt kê banner phiên bản',
        maxPoints: 15,
        guidanceVi:
          'Tác động đến từ chức năng mà giao diện cung cấp, không đến từ số phiên bản hiển thị.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt lập luận về tác động dựa trên chức năng quản trị và khuyến nghị giới hạn truy cập theo mạng nguồn.',
  },
  {
    id: 'rex-wireless-ble',
    titleVi: 'Viết báo cáo đặc tính BLE ghi được không cần xác thực',
    scenarioVi:
      'Trên bo mạch phát triển của chính bạn, bạn phát hiện một đặc tính GATT điều khiển trạng thái thiết bị ghi được mà không cần ghép nối có xác thực. Bạn thử trong môi trường che chắn.',
    assetVi:
      'Thiết bị BLE thuộc sở hữu của bạn, hoặc thiết bị trong phạm vi chương trình phần cứng.',
    scopeVi:
      'Chỉ thiết bị của bạn. Với thiết bị thương mại, cần chương trình cho phép rõ ràng và cần kiểm tra quy định vô tuyến tại nơi bạn sống.',
    evidenceVi: [
      'Danh sách đặc tính GATT và thuộc tính bảo vệ của chúng.',
      'Ghi chú về môi trường thử nghiệm và khoảng cách.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-wireless-ble', [
      {
        id: 'rex-wireless-ble-r7',
        criterionVi: 'Nêu rõ điều kiện vật lý cần thiết và ràng buộc pháp lý đã tuân thủ',
        maxPoints: 20,
        guidanceVi:
          'Với RF, phần điều kiện và phần tuân thủ quy định quan trọng ngang phần kỹ thuật.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt nêu rõ khoảng cách vô tuyến cần thiết như một điều kiện làm giảm tác động, và xác nhận toàn bộ thử nghiệm chỉ tác động tới thiết bị của người báo cáo.',
  },
  {
    id: 'rex-automotive-backend',
    titleVi: 'Viết báo cáo lỗi phân quyền ở backend ứng dụng đồng hành của xe',
    scenarioVi:
      'Trong môi trường thử nghiệm được chương trình cấp, bạn phát hiện API của ứng dụng đồng hành cho phép tài khoản A truy vấn trạng thái của phương tiện gắn với tài khoản B. Bạn dừng ở thao tác đọc và không gửi bất kỳ lệnh điều khiển nào.',
    assetVi: 'Backend API của ứng dụng đồng hành, trong môi trường thử nghiệm được cấp.',
    scopeVi:
      'Chỉ môi trường thử nghiệm được chương trình cấp. Cấm mọi thao tác tác động tới phương tiện đang vận hành.',
    evidenceVi: [
      'Request và phản hồi đã che định danh phương tiện.',
      'Xác nhận không gửi lệnh điều khiển nào.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-automotive-backend', [
      {
        id: 'rex-automotive-backend-r7',
        criterionVi: 'Đánh giá tác động có tính tới hậu quả với an toàn con người',
        maxPoints: 20,
        guidanceVi:
          'Nêu rõ ranh giới giữa thao tác đọc mà bạn đã chứng minh và thao tác điều khiển mà bạn cố ý không thử.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt trình bày rõ vì sao người báo cáo dừng ở thao tác đọc, và đề nghị chương trình tự đánh giá liệu lệnh điều khiển có cùng lỗ hổng hay không trong môi trường an toàn của họ.',
  },
  {
    id: 'rex-ics-segmentation',
    titleVi: 'Viết báo cáo thất bại phân đoạn giữa mạng IT và OT',
    scenarioVi:
      'Trong một bài tập trên bench lab, bạn quan sát thấy một giao diện giám sát của hệ thống công nghiệp truy cập được từ phân đoạn mạng doanh nghiệp. Bạn chỉ quan sát, không gửi lệnh nào.',
    assetVi: 'Bench lab mô phỏng hệ thống công nghiệp.',
    scopeVi: 'Chỉ bench lab hoặc simulator. Tuyệt đối không áp dụng lên hạ tầng vận hành thật.',
    evidenceVi: ['Sơ đồ phân đoạn quan sát được.', 'Xác nhận chỉ thực hiện quan sát thụ động.'],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-ics-segmentation', [
      {
        id: 'rex-ics-segmentation-r7',
        criterionVi: 'Khuyến nghị không gây gián đoạn vận hành',
        maxPoints: 20,
        guidanceVi:
          'Trong OT, một biện pháp gây dừng quy trình thường không chấp nhận được dù nó tăng mức bảo mật.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt mô tả tác động theo hậu quả vật lý tiềm năng, đề xuất biện pháp bù đắp không gây gián đoạn, và khẳng định không có thao tác chủ động nào được thực hiện.',
  },
  {
    id: 'rex-emerging-new-surface',
    titleVi: 'Viết đề xuất mở một specialization mới',
    scenarioVi:
      'Bạn muốn đề xuất thêm một lĩnh vực mới vào bản đồ kiến thức. Bạn cần viết một tài liệu trình bày lĩnh vực đó theo chuỗi 12 bước và chứng minh nó đáp ứng bảy điều kiện để chuyển từ planned sang active.',
    assetVi: 'Không có tài sản kỹ thuật; đây là bài viết đề xuất nội dung.',
    scopeVi: 'Bài tập nghiên cứu tài liệu, không có thao tác lên bất kỳ hệ thống nào.',
    evidenceVi: [
      'Danh sách nguồn phương pháp đã tìm được, kèm ngày truy cập.',
      'Ít nhất một lab hợp pháp hoặc môi trường mô phỏng.',
      'Ghi chú về ràng buộc pháp lý tại nơi bạn sống.',
    ],
    expectedSections: [
      'Tên lĩnh vực',
      'Kiến trúc hệ thống',
      'Trust boundary',
      'Bề mặt tấn công',
      'Nhóm điểm yếu',
      'Phương pháp kiểm thử',
      'Lab hợp pháp',
      'Ràng buộc pháp lý và an toàn',
      'Prerequisite',
      'Checklist tối thiểu',
      'Bài tập báo cáo mẫu',
    ],
    rubric: [
      {
        id: 'rex-emerging-new-surface-r1',
        criterionVi: 'Trình bày đủ chuỗi 12 bước',
        maxPoints: 30,
        guidanceVi: 'Bỏ sót bước nào cũng làm lĩnh vực đó chưa sẵn sàng để mở.',
      },
      {
        id: 'rex-emerging-new-surface-r2',
        criterionVi: 'Chứng minh đủ bảy điều kiện mở specialization',
        maxPoints: 30,
        guidanceVi: 'Đặc biệt là điều kiện về lab hợp pháp và cảnh báo pháp lý.',
      },
      {
        id: 'rex-emerging-new-surface-r3',
        criterionVi: 'Ràng buộc pháp lý được nêu trước ràng buộc kỹ thuật',
        maxPoints: 25,
        guidanceVi:
          'Với lĩnh vực mới, câu hỏi "có được phép không" luôn đứng trước câu hỏi "làm thế nào".',
      },
      {
        id: 'rex-emerging-new-surface-r4',
        criterionVi: 'Trung thực về phần còn thiếu',
        maxPoints: 15,
        guidanceVi: 'Nếu chưa đủ điều kiện, hãy đề xuất giữ ở trạng thái planned thay vì mở sớm.',
      },
    ],
    sampleAnswerMode: 'not-provided',
    sampleAnswerVi: null,
  },
  {
    id: 'rex-privacy-exposure',
    titleVi: 'Viết báo cáo lộ dữ liệu cá nhân mà không lưu dữ liệu',
    scenarioVi:
      'Một endpoint trong lab trả về nhiều trường hơn giao diện hiển thị, gồm cả số điện thoại và địa chỉ. Bạn quan sát trên tài khoản của chính mình và suy ra cấu trúc phản hồi.',
    assetVi: 'API trong lab, endpoint hồ sơ người dùng.',
    scopeVi:
      'Chính sách cấm tải hàng loạt dữ liệu và yêu cầu xoá dữ liệu đã tiếp xúc sau khi báo cáo.',
    evidenceVi: [
      'Cấu trúc phản hồi với giá trị đã thay bằng nhãn mô tả.',
      'Xác nhận chỉ dùng dữ liệu của tài khoản của chính bạn.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-privacy-exposure', [
      {
        id: 'rex-privacy-exposure-r7',
        criterionVi: 'Định lượng tác động mà không thu thập dữ liệu',
        maxPoints: 20,
        guidanceVi:
          'Suy luận phạm vi từ cấu trúc endpoint và cơ chế phân trang, không từ việc tải dữ liệu về.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt thay mọi giá trị thật bằng nhãn kiểu dữ liệu, và khuyến nghị lọc trường ở phía server theo vai trò người gọi.',
  },
  {
    id: 'rex-race-condition',
    titleVi: 'Viết báo cáo race condition ở mã giảm giá dùng một lần',
    scenarioVi:
      'Trong lab, gửi hai request áp mã giảm giá gần như đồng thời khiến mã được áp hai lần. Bạn chỉ dùng hai request và không hoàn tất thanh toán.',
    assetVi: 'Ứng dụng thương mại điện tử trong lab, chức năng áp mã giảm giá.',
    scopeVi: 'Chính sách cấm gây ảnh hưởng dịch vụ và cấm hoàn tất giao dịch thật.',
    evidenceVi: [
      'Hai request đồng thời và trạng thái giỏ hàng sau đó.',
      'Xác nhận chỉ dùng hai request và không thanh toán.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-race-condition', [
      {
        id: 'rex-race-condition-r7',
        criterionVi: 'Chứng minh với số request tối thiểu',
        maxPoints: 15,
        guidanceVi: 'Gửi hàng loạt request để chứng minh sẽ bị coi là gây tải; hai request là đủ.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt khuyến nghị ràng buộc nguyên tử ở tầng dữ liệu thay vì thêm kiểm tra ở tầng ứng dụng.',
  },
  {
    id: 'rex-oauth-redirect',
    titleVi: 'Viết báo cáo so khớp redirect URI lỏng lẻo',
    scenarioVi:
      'Máy chủ uỷ quyền trong lab chấp nhận redirect URI có đường dẫn con tuỳ ý. Bạn chứng minh mã uỷ quyền được gửi tới một đích do bạn kiểm soát, dùng tài khoản của chính bạn.',
    assetVi: 'Máy chủ uỷ quyền trong lab.',
    scopeVi: 'Chính sách cấm thực hiện luồng đăng nhập nhắm tới tài khoản người khác.',
    evidenceVi: [
      'URL uỷ quyền đã dùng và log của đích do bạn kiểm soát.',
      'Xác nhận chỉ dùng tài khoản của chính bạn.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-oauth-redirect', [
      {
        id: 'rex-oauth-redirect-r7',
        criterionVi: 'Giải thích đúng vai trò của state và PKCE trong tình huống này',
        maxPoints: 15,
        guidanceVi:
          'State và PKCE giải quyết hai vấn đề khác nhau; nêu rõ cái nào giảm nhẹ được tác động ở đây.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt khuyến nghị so khớp redirect URI chính xác tuyệt đối và bắt buộc PKCE cho mọi client.',
  },
  {
    id: 'rex-container-privileged',
    titleVi: 'Viết báo cáo cấu hình container làm mờ ranh giới với host',
    scenarioVi:
      'Trong cụm lab của bạn, một workload được cấu hình chạy đặc quyền và mount socket của runtime. Bạn mô tả rủi ro mà không thực hiện thoát container.',
    assetVi: 'Cấu hình triển khai trong cụm lab của bạn.',
    scopeVi: 'Chỉ cụm cục bộ của bạn.',
    evidenceVi: [
      'Đoạn cấu hình cho thấy chế độ đặc quyền và volume được mount.',
      'Xác nhận không thực hiện thao tác thoát container.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-container-privileged', [
      {
        id: 'rex-container-privileged-r7',
        criterionVi: 'Mô tả tác động ở mức node và ở mức cụm',
        maxPoints: 15,
        guidanceVi:
          'Ảnh hưởng lan tới mọi workload trên cùng node, không chỉ workload bị cấu hình sai.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt khuyến nghị áp dụng chuẩn bảo mật pod ở mức hạn chế và chặn cấu hình này bằng admission control.',
  },
  {
    id: 'rex-code-review-variant',
    titleVi: 'Viết báo cáo cho một biến thể tìm được sau khi đọc bản vá',
    scenarioVi:
      'Bạn đọc một bản vá bảo mật công khai của dự án nguồn mở, hiểu nguyên nhân gốc, và tìm thấy cùng mẫu lỗi ở một module khác chưa được vá. Bạn viết báo cáo gửi qua kênh riêng tư.',
    assetVi: 'Dự án nguồn mở trong phạm vi.',
    scopeVi: 'Báo cáo qua kênh riêng tư theo SECURITY.md. Không mở public issue.',
    evidenceVi: [
      'Đường dẫn tệp và dòng mã của biến thể.',
      'Test case chứng minh biến thể là thật.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-code-review-variant', [
      {
        id: 'rex-code-review-variant-r7',
        criterionVi: 'Viết phù hợp với maintainer tình nguyện, không phải đội bảo mật chuyên trách',
        maxPoints: 15,
        guidanceVi: 'Cung cấp bản vá đề xuất hoặc test case giúp maintainer xác nhận nhanh.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt tham chiếu bản vá gốc, chỉ ra vì sao biến thể có cùng nguyên nhân gốc, và đề xuất thời gian công bố hợp lý.',
  },
  {
    id: 'rex-desktop-ipc',
    titleVi: 'Viết báo cáo kênh IPC không xác thực bên gọi',
    scenarioVi:
      'Trong máy ảo, bạn phát hiện một dịch vụ chạy quyền cao lắng nghe trên một kênh IPC cục bộ và thực hiện yêu cầu mà không kiểm tra tiến trình gọi.',
    assetVi: 'Ứng dụng desktop trong lab, chạy trong máy ảo của bạn.',
    scopeVi: 'Chỉ trong máy ảo, với phần mềm mà giấy phép cho phép phân tích.',
    evidenceVi: [
      'Tên kênh IPC và một yêu cầu đã gửi kèm phản hồi.',
      'Xác nhận thực hiện dưới tài khoản người dùng thường.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-desktop-ipc', [
      {
        id: 'rex-desktop-ipc-r7',
        criterionVi: 'Nêu rõ ranh giới đặc quyền bị vượt qua',
        maxPoints: 15,
        guidanceVi:
          'Chỉ ra tiến trình nào chạy quyền gì, và điều gì người dùng thường lẽ ra không làm được.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt khuyến nghị xác thực danh tính và quyền của tiến trình gọi trên mọi kênh IPC.',
  },
  {
    id: 'rex-binary-crash',
    titleVi: 'Viết báo cáo crash kèm reproducer tối thiểu',
    scenarioVi:
      'Fuzzing một bộ phân tích định dạng trong lab tìm được một crash. Bạn xác định nguyên nhân gốc và thu nhỏ reproducer về vài chục byte.',
    assetVi: 'Thư viện phân tích dữ liệu trong lab hoặc dự án nguồn mở bạn được phép phân tích.',
    scopeVi: 'Chỉ mã chạy trên máy của bạn. Báo cáo qua kênh riêng tư nếu là dự án nguồn mở.',
    evidenceVi: [
      'Reproducer tối thiểu và lệnh tái hiện.',
      'Kết quả sanitizer chỉ ra loại lỗi bộ nhớ.',
    ],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-binary-crash', [
      {
        id: 'rex-binary-crash-r7',
        criterionVi: 'Nêu nguyên nhân gốc chứ không chỉ mô tả crash',
        maxPoints: 20,
        guidanceVi: 'Báo cáo chỉ có "chương trình bị sập" rất khó được ưu tiên xử lý.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt nêu rõ điều kiện kích hoạt, phân loại lỗi theo nhóm, và không kèm bộ khai thác.',
  },
  {
    id: 'rex-ext-message',
    titleVi: 'Viết báo cáo tiện ích trình duyệt tin tưởng thông điệp từ trang',
    scenarioVi:
      'Trong tiện ích lab do bạn viết, trình xử lý thông điệp không kiểm tra nguồn gửi, nên một trang web bất kỳ gọi được API đặc quyền của tiện ích.',
    assetVi: 'Tiện ích trình duyệt trong lab hoặc trong phạm vi chương trình.',
    scopeVi: 'Chỉ tiện ích của bạn hoặc tiện ích nằm trong phạm vi.',
    evidenceVi: ['Đoạn mã trình xử lý thông điệp.', 'Trang thử nghiệm cục bộ gọi tới API đó.'],
    expectedSections: SECTIONS,
    rubric: baseRubric('rex-ext-message', [
      {
        id: 'rex-ext-message-r7',
        criterionVi: 'Nêu rõ ranh giới giữa trang web và tiện ích',
        maxPoints: 15,
        guidanceVi: 'Trang web luôn phải bị coi là không tin cậy đối với content script.',
      },
    ]),
    sampleAnswerMode: 'hidden-until-submit',
    sampleAnswerVi:
      'Bản mẫu tốt khuyến nghị xác thực nguồn của mọi thông điệp và không phơi API đặc quyền cho nội dung trang.',
  },
];
