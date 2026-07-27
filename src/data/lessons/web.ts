import type { LessonSection } from '@/schemas/entities';

/**
 * Thân bài học cho domain D — web application.
 * Nội dung do dự án tự biên soạn. Không sao chép nguyên văn từ nguồn nào.
 */
export const webLessons: Record<string, LessonSection[]> = {
  'mod-web-architecture': [
    {
      headingVi: 'Chuỗi xử lý một request',
      paragraphsVi: [
        'Giữa trình duyệt và mã ứng dụng thường có nhiều lớp: CDN, reverse proxy, cân bằng tải, API gateway, rồi mới tới dịch vụ. Mỗi lớp có thể sửa request, lưu đệm phản hồi, hoặc diễn giải giao thức theo cách riêng.',
        'Nhiều nhóm lỗ hổng nâng cao sinh ra chính từ chỗ hai lớp trong chuỗi này hiểu cùng một request theo hai cách khác nhau. Vì vậy bước đầu tiên khi tiếp cận một ứng dụng lạ là ước lượng xem có bao nhiêu lớp và chúng làm gì.',
      ],
    },
    {
      headingVi: 'Đọc dấu vết của kiến trúc từ phản hồi',
      paragraphsVi: [
        'Bạn không cần sơ đồ nội bộ để đoán được kiến trúc. Header phản hồi thường tiết lộ khá nhiều: dấu hiệu của lớp cache, thông tin về việc phản hồi được phục vụ từ đâu, và cách hệ thống xử lý kết nối.',
        'Cách render cũng nhận ra được. Nếu nội dung có sẵn trong HTML ban đầu thì ứng dụng render phía máy chủ; nếu HTML gần như rỗng và nội dung tới qua các lời gọi API sau đó thì đây là ứng dụng một trang. Kiểu render quyết định bề mặt tấn công của bạn nằm ở đâu.',
      ],
    },
    {
      headingVi: 'Thành phần bất đồng bộ hay bị bỏ quên',
      paragraphsVi: [
        'Ngoài luồng request và response, ứng dụng hiện đại còn có hàng đợi, job nền, webhook, dịch vụ tìm kiếm, và lưu trữ đối tượng. Những thành phần này xử lý dữ liệu người dùng nhưng không nằm trên đường đi trực tiếp của request.',
        'Đây thường là nơi kiểm tra phân quyền bị bỏ sót, vì lập trình viên coi dữ liệu đã được kiểm tra ở bước trước. Khi lập bản đồ, hãy hỏi: sau khi tôi gửi dữ liệu này, còn hệ thống nào khác đọc nó nữa không?',
      ],
    },
  ],

  'mod-web-login': [
    {
      headingVi: 'Liệt kê tài khoản qua khác biệt phản hồi',
      paragraphsVi: [
        'Nếu hệ thống trả lời khác nhau cho "tài khoản không tồn tại" và "mật khẩu sai", người ngoài xác định được địa chỉ nào đã đăng ký. Khác biệt có thể nằm ở nội dung thông báo, mã trạng thái, hoặc thời gian xử lý.',
        'Thời gian xử lý là kênh bị bỏ qua nhiều nhất. Khi tài khoản tồn tại, hệ thống thực hiện phép băm mật khẩu tốn thời gian; khi không tồn tại, nó trả lời ngay. Chênh lệch đó đo được.',
        'Khuyến nghị chuẩn là phản hồi đồng nhất cho mọi trường hợp thất bại, kể cả về mặt thời gian.',
      ],
    },
    {
      headingVi: 'MFA và chỗ trạng thái được lưu',
      paragraphsVi: [
        'Trong luồng đăng nhập hai bước, câu hỏi quyết định là: sau khi qua bước một, hệ thống ghi nhớ điều đó ở đâu?',
        'Nếu trạng thái nằm ở phía client — một cờ trong phản hồi, một giá trị trong storage, một tham số trong request tiếp theo — thì bước thứ hai có thể bị bỏ qua. Nếu trạng thái nằm ở phía server và gắn với phiên, luồng an toàn hơn nhiều.',
        'Cách kiểm tra an toàn: thực hiện luồng đầy đủ trên tài khoản của chính bạn, quan sát mọi request, rồi thử luồng rút gọn cũng trên tài khoản đó.',
      ],
    },
    {
      headingVi: 'Đánh giá chống thử hàng loạt mà không thử hàng loạt',
      paragraphsVi: [
        'Bạn cần biết cơ chế bảo vệ có tồn tại không, nhưng không được thực hiện tấn công thử mật khẩu. Hai việc này tưởng mâu thuẫn nhưng không phải.',
        'Cách làm: dùng chính tài khoản của bạn, nhập sai mật khẩu vài lần liên tiếp và quan sát hệ thống phản ứng thế nào. Nếu sau một số lần nhất định xuất hiện độ trễ tăng dần, yêu cầu xác minh bổ sung, hoặc khoá tạm thời, thì cơ chế có tồn tại.',
        'Một chi tiết đáng chú ý khi rà soát thiết kế: khoá theo tài khoản chống được kẻ tấn công phân tán qua nhiều địa chỉ, nhưng cũng tạo khả năng khoá tài khoản người khác. Thiết kế tốt cân bằng hai điều này và luôn cho phép khôi phục.',
      ],
    },
  ],

  'mod-web-password-reset': [
    {
      headingVi: 'Vòng đời của token đặt lại',
      paragraphsVi: [
        'Một token đặt lại mật khẩu tốt phải thoả bốn điều: ngẫu nhiên đủ mạnh để không đoán được, chỉ dùng được một lần, hết hạn sau thời gian ngắn, và bị vô hiệu khi có token mới được tạo.',
        'Kiểm tra từng điều này trên tài khoản của chính bạn là bài thực hành cốt lõi của module. Yêu cầu hai token liên tiếp rồi thử token cũ — nếu nó còn dùng được, đó là một phát hiện.',
      ],
    },
    {
      headingVi: 'Token rò rỉ qua đường không ngờ',
      paragraphsVi: [
        'Token nằm trong tham số truy vấn của URL có thể rò rỉ qua nhiều kênh: header referrer khi trang đặt lại có tài nguyên bên ngoài, lịch sử duyệt web, log của proxy, và các công cụ phân tích.',
        'Đây là lý do khuyến nghị đặt token ở nơi ít lộ hơn, và nếu buộc phải dùng URL thì phải kèm chính sách referrer chặt.',
      ],
    },
    {
      headingVi: 'Đường khôi phục là mắt xích yếu nhất',
      paragraphsVi: [
        'Một hệ thống có thể yêu cầu mật khẩu mạnh, bật xác thực hai yếu tố, dùng passkey — rồi cho phép đặt lại toàn bộ chỉ bằng một câu hỏi bí mật dễ đoán.',
        'Nguyên tắc đánh giá: đường khôi phục phải có mức bảo vệ tương đương đường đăng nhập chính. Nếu nó yếu hơn, mức bảo vệ thực của hệ thống chính là mức của đường yếu nhất.',
        'Một điểm nữa cần kiểm tra: sau khi đổi mật khẩu, các phiên đang mở ở nơi khác có bị vô hiệu không? Nếu không, người đã chiếm phiên vẫn giữ được truy cập.',
      ],
    },
  ],

  'mod-web-session': [
    {
      headingVi: 'Định danh phiên phải đổi khi đặc quyền đổi',
      paragraphsVi: [
        'Cố định phiên xảy ra khi kẻ tấn công đặt trước một định danh phiên cho nạn nhân, nạn nhân đăng nhập, và định danh đó không đổi — nên kẻ tấn công tiếp tục dùng được nó với quyền của nạn nhân.',
        'Biện pháp khắc phục gốc rất đơn giản: sinh định danh phiên mới sau mỗi lần nâng cấp đặc quyền, đặc biệt là sau khi đăng nhập thành công. Kiểm tra điều này chỉ mất vài giây và nên là việc đầu tiên bạn làm khi xem xét quản lý phiên.',
      ],
    },
    {
      headingVi: 'Vô hiệu hoá phiên ở phía server',
      paragraphsVi: [
        'Đăng xuất chỉ xoá cookie ở trình duyệt là chưa đủ. Nếu phía server vẫn coi định danh đó hợp lệ, ai có được nó vẫn dùng được.',
        'Ba thời điểm phải vô hiệu phiên ở server: khi người dùng đăng xuất, khi đổi mật khẩu, và khi phiên hết hạn. Với hệ thống dùng token không lưu trạng thái, việc này khó hơn và cần cơ chế thu hồi riêng — đó là một câu hỏi tốt để đặt ra khi rà soát thiết kế.',
      ],
    },
    {
      headingVi: 'Xác thực lại cho hành động nhạy cảm',
      paragraphsVi: [
        'Một số hành động nên yêu cầu nhập lại mật khẩu dù người dùng đã đăng nhập: đổi email, đổi mật khẩu, thêm phương thức xác thực, xoá tài khoản, thay đổi thông tin thanh toán.',
        'Lý do: nếu phiên bị chiếm, những hành động này cho phép kẻ tấn công giữ quyền truy cập vĩnh viễn. Yêu cầu xác thực lại biến một phiên bị chiếm từ thảm hoạ thành sự cố có giới hạn thời gian.',
      ],
    },
  ],

  'mod-web-idor': [
    {
      headingVi: 'Nguyên nhân gốc nằm ở tầng dữ liệu',
      paragraphsVi: [
        'Ứng dụng nhận định danh đối tượng từ người dùng, truy vấn cơ sở dữ liệu bằng định danh đó, rồi trả kết quả. Bước bị thiếu là kiểm tra người dùng hiện tại có quyền với đối tượng ấy hay không.',
        'Chú ý điều này khác với thiếu xác thực. Hệ thống biết chắc bạn đã đăng nhập; nó chỉ không kiểm tra bạn được phép xem đúng bản ghi này. Đó là lý do phân loại đúng nguyên nhân gốc quan trọng khi gán CWE.',
      ],
      example: {
        language: 'javascript',
        content:
          "// Thiếu kiểm tra quyền sở hữu\napp.get('/api/invoices/:id', requireLogin, async (req, res) => {\n  const invoice = await db.invoices.findById(req.params.id);\n  res.json(invoice);\n});\n\n// Gắn điều kiện chủ sở hữu vào chính truy vấn\napp.get('/api/invoices/:id', requireLogin, async (req, res) => {\n  const invoice = await db.invoices.findOne({\n    id: req.params.id,\n    ownerId: req.session.userId,\n  });\n  if (!invoice) return res.sendStatus(404);\n  res.json(invoice);\n});",
        captionVi:
          'Ví dụ minh hoạ do dự án tự soạn. Khác biệt nằm ở chỗ điều kiện chủ sở hữu là một phần của truy vấn, không phải một bước kiểm tra riêng có thể quên.',
      },
    },
    {
      headingVi: 'Định danh xuất hiện ở nhiều nơi hơn bạn nghĩ',
      paragraphsVi: [
        'Người mới thường chỉ nhìn vào đường dẫn. Nhưng định danh đối tượng có thể nằm ở bất kỳ đâu trong request.',
      ],
      bulletsVi: [
        'Đoạn đường dẫn và tham số truy vấn.',
        'Trường trong thân request dạng JSON hoặc biểu mẫu.',
        'Header tuỳ chỉnh do ứng dụng định nghĩa.',
        'Giá trị trong cookie.',
        'Định danh lồng bên trong một đối tượng con.',
        'Phần tử trong mảng của một request theo lô.',
      ],
    },
    {
      headingVi: 'Kiểm thử an toàn với hai tài khoản',
      paragraphsVi: [
        'Tạo hai tài khoản của chính bạn, mỗi tài khoản có một đối tượng riêng. Dùng phiên của tài khoản A gọi tới đối tượng của B và quan sát phản hồi. Nếu dữ liệu trả về, bạn có phát hiện, và bạn chứng minh được nó mà không chạm tới ai khác.',
        'Kiểm tra cả bốn loại thao tác chứ không chỉ đọc: đọc, ghi, xoá, và xuất dữ liệu. Nhiều hệ thống kiểm tra quyền cho thao tác đọc nhưng quên ở chức năng xuất báo cáo.',
        'Nếu định danh là số tuần tự, tuyệt đối không liệt kê hàng loạt. Một cặp đối tượng của bạn là đủ để chứng minh; quy mô suy ra được từ cấu trúc định danh.',
      ],
    },
    {
      headingVi: 'Định danh khó đoán không phải biện pháp khắc phục',
      paragraphsVi: [
        'Đổi định danh tuần tự thành chuỗi ngẫu nhiên làm việc khai thác khó hơn, nhưng không sửa nguyên nhân gốc. Định danh vẫn rò rỉ qua nhiều đường: liên kết chia sẻ, thông báo email, log, và chính giao diện của ứng dụng.',
        'Vì vậy trong phần khuyến nghị, hãy nêu rõ: kiểm tra quyền sở hữu ở tầng truy vấn là biện pháp chính, định danh khó đoán chỉ là lớp bổ sung.',
      ],
    },
  ],

  'mod-web-privilege-escalation': [
    {
      headingVi: 'Ngang và dọc',
      paragraphsVi: [
        'Leo thang ngang là truy cập tài nguyên của người dùng khác cùng cấp. Leo thang dọc là có được quyền của vai trò cao hơn. Hai loại có tác động rất khác nhau nên cần phân biệt rõ trong báo cáo.',
        'Còn một loại thứ ba dễ bị bỏ qua: phân quyền theo ngữ cảnh, tức là hành động chỉ hợp lệ ở một trạng thái nhất định của quy trình. Ví dụ sửa giỏ hàng sau khi đã thanh toán.',
      ],
    },
    {
      headingVi: 'Các mẫu vượt kiểm soát truy cập thường gặp',
      paragraphsVi: [
        'Phần lớn lỗi phân quyền ở mức chức năng rơi vào một số mẫu lặp lại. Biết chúng giúp bạn kiểm tra có hệ thống thay vì mò mẫm.',
      ],
      bulletsVi: [
        'Chức năng quản trị không được bảo vệ, chỉ ẩn khỏi giao diện.',
        'Tham số do người dùng kiểm soát quyết định vai trò.',
        'Kiểm tra chỉ áp dụng cho một số method HTTP.',
        'Header ghi đè đường dẫn được lớp trung gian tin tưởng.',
        'So khớp đường dẫn không nhất quán giữa lớp kiểm soát và lớp xử lý — khác biệt hoa thường, dấu gạch chéo cuối, mã hoá URL.',
        'Quy trình nhiều bước cho phép nhảy thẳng tới bước cuối.',
      ],
    },
    {
      headingVi: 'Cách kiểm thử có hệ thống',
      paragraphsVi: [
        'Liệt kê mọi chức năng mà vai trò cao có và vai trò thấp không có. Với từng chức năng, gọi trực tiếp bằng phiên của vai trò thấp và quan sát mã trạng thái.',
        'Với chức năng gây thay đổi, hãy dừng ở bước xác nhận được quyền truy cập thay vì hoàn tất thao tác. Một phản hồi cho thấy endpoint chấp nhận request của bạn là đủ để báo cáo, và an toàn hơn nhiều so với việc thực sự thay đổi cấu hình hệ thống.',
      ],
    },
  ],

  'mod-web-tenant-isolation': [
    {
      headingVi: 'Ranh giới quan trọng nhất trong sản phẩm đa người thuê',
      paragraphsVi: [
        'Trong sản phẩm phục vụ nhiều tổ chức, ranh giới giữa các tổ chức quan trọng hơn ranh giới giữa các người dùng. Vi phạm nó không chỉ là lỗi kỹ thuật mà còn là vi phạm cam kết hợp đồng của nhà cung cấp với khách hàng.',
        'Vì vậy khi mô tả tác động, hãy nói ở mức người thuê chứ không chỉ ở mức bản ghi: dữ liệu của bao nhiêu tổ chức có thể bị ảnh hưởng, và điều đó có ý nghĩa gì với cam kết của nhà cung cấp.',
      ],
    },
    {
      headingVi: 'Định danh người thuê phải đến từ phiên',
      paragraphsVi: [
        'Câu hỏi cốt lõi: hệ thống biết bạn thuộc tổ chức nào bằng cách nào? Nếu thông tin đó đến từ một tham số trong request, người dùng kiểm soát được nó và ranh giới không tồn tại.',
        'Thiết kế đúng là lấy định danh người thuê từ phiên đã xác thực, rồi gắn nó vào mọi truy vấn dữ liệu như một điều kiện bắt buộc, không phải như một bước kiểm tra riêng.',
      ],
    },
    {
      headingVi: 'Nơi kiểm tra hay bị bỏ sót',
      paragraphsVi: [
        'Luồng chính thường được làm đúng. Vấn đề nằm ở các chức năng phụ nơi lập trình viên viết truy vấn riêng và quên điều kiện người thuê.',
      ],
      bulletsVi: [
        'Tìm kiếm toàn cục.',
        'Xuất dữ liệu và tạo báo cáo.',
        'Webhook và tích hợp bên thứ ba.',
        'Job nền xử lý theo lô.',
        'Chức năng quản trị nội bộ.',
        'API cũ còn tồn tại từ trước khi có mô hình đa người thuê.',
      ],
    },
    {
      headingVi: 'Dừng ngay khi thấy dữ liệu lạ',
      paragraphsVi: [
        'Tạo hai tổ chức của chính bạn để thử chéo. Nếu trong quá trình thử bạn thấy dữ liệu không thuộc cả hai tổ chức đó, bạn đã chạm tới khách hàng thật — dừng ngay lập tức.',
        'Ghi lại tối thiểu, che thông tin định danh, và nêu rõ trong báo cáo rằng bạn đã dừng ở bản ghi đầu tiên. Điều này ảnh hưởng trực tiếp tới cách tổ chức đánh giá nghĩa vụ thông báo của họ.',
      ],
    },
  ],

  'mod-web-sqli': [
    {
      headingVi: 'Nguyên nhân gốc là ranh giới giữa mã và dữ liệu',
      paragraphsVi: [
        'Khi ứng dụng ghép chuỗi để tạo truy vấn, dữ liệu người dùng và cú pháp truy vấn nằm chung một chuỗi. Bộ phân tích của hệ quản trị không có cách nào biết phần nào là dữ liệu, phần nào là lệnh.',
        'Truy vấn tham số hoá giải quyết điều này ở gốc: cấu trúc truy vấn được gửi trước và cố định, dữ liệu được gửi riêng. Bộ phân tích không bao giờ diễn giải dữ liệu như cú pháp, bất kể nội dung là gì.',
      ],
    },
    {
      headingVi: 'Thứ tự ưu tiên của các biện pháp',
      paragraphsVi: [
        'Không phải mọi biện pháp đều ngang nhau. Thứ tự dưới đây phản ánh mức độ hiệu quả thực tế.',
      ],
      bulletsVi: [
        'Truy vấn tham số hoá: lựa chọn đầu tiên, giải quyết nguyên nhân gốc.',
        'Stored procedure viết an toàn, không sinh SQL động bên trong.',
        'Danh sách cho phép cho phần cấu trúc buộc phải động, ví dụ tên cột sắp xếp — ánh xạ giá trị người dùng sang tập giá trị đã duyệt trước.',
        'Thoát ký tự: bị khuyến cáo mạnh không nên dùng làm biện pháp chính vì nó mong manh và phụ thuộc hệ quản trị.',
        'Đặc quyền tối thiểu cho tài khoản cơ sở dữ liệu: lớp bổ sung giới hạn thiệt hại.',
      ],
    },
    {
      headingVi: 'Xác minh an toàn',
      paragraphsVi: [
        'Ưu tiên phép thử dạng logic đúng hoặc sai chỉ đọc: gửi một điều kiện luôn đúng và một điều kiện luôn sai, so sánh phản hồi. Cách này không thay đổi dữ liệu và không tạo tải.',
        'Tránh phép thử dựa trên độ trễ trên hệ thống đang phục vụ người dùng, vì nó chiếm giữ tài nguyên. Tránh phép thử cố ý gây lỗi hàng loạt vì nó làm nhiễu log của tổ chức.',
        'Khi cần chứng minh, dùng một giá trị vô hại như phiên bản hệ quản trị. Tuyệt đối không trích xuất dữ liệu người dùng để làm bằng chứng.',
      ],
    },
    {
      headingVi: 'NoSQL cùng nguyên nhân, khác hình thức',
      paragraphsVi: [
        'Với cơ sở dữ liệu dạng tài liệu, truy vấn thường là một đối tượng chứ không phải chuỗi. Vấn đề xảy ra khi ứng dụng đưa dữ liệu người dùng trực tiếp vào cấu trúc đối tượng đó.',
        'Khi ấy, một giá trị lẽ ra là chuỗi có thể được thay bằng một đối tượng chứa toán tử truy vấn, làm thay đổi ý nghĩa của điều kiện. Cách phòng vệ là ép kiểu và kiểm tra schema đầu vào trước khi dựng truy vấn.',
      ],
    },
  ],

  'mod-web-command-injection': [
    {
      headingVi: 'Vấn đề nằm ở việc gọi shell',
      paragraphsVi: [
        'Khi ứng dụng dựng một chuỗi lệnh rồi giao cho shell thực thi, shell diễn giải các ký tự phân tách như một phần cấu trúc lệnh. Dữ liệu người dùng nằm trong chuỗi đó trở thành cú pháp.',
        'Biện pháp gốc là không gọi shell. Hầu hết ngôn ngữ đều có API cho phép truyền chương trình và danh sách đối số tách biệt; khi đó không có bước phân tích cú pháp nào để lợi dụng.',
      ],
    },
    {
      headingVi: 'Tính năng nào hay có vấn đề này',
      paragraphsVi: [
        'Command injection thường xuất hiện ở những chỗ ứng dụng cần gọi tiện ích hệ thống thay vì tự làm.',
      ],
      bulletsVi: [
        'Chuyển đổi định dạng tệp và tạo ảnh thu nhỏ.',
        'Nén và giải nén.',
        'Tiện ích chẩn đoán mạng do quản trị viên dùng.',
        'Sinh tài liệu và xuất báo cáo.',
        'Tích hợp với công cụ dòng lệnh của bên thứ ba.',
      ],
    },
    {
      headingVi: 'Cùng nguyên nhân trong nhiều ngữ cảnh khác',
      paragraphsVi: [
        'Nguyên tắc tách mã khỏi dữ liệu áp dụng cho nhiều ngữ cảnh ngoài shell: truy vấn thư mục, biểu thức đường dẫn trong tài liệu có cấu trúc, header giao thức, và bản ghi log.',
        'Riêng với CSV và bảng tính, vấn đề hơi khác: nội dung bắt đầu bằng ký tự công thức có thể được phần mềm bảng tính thực thi khi người dùng mở tệp. Đây là vấn đề của phần mềm đích chứ không của ứng dụng web, nhưng ứng dụng vẫn nên vô hiệu hoá bằng cách thêm ký tự dẫn đầu an toàn.',
      ],
    },
    {
      headingVi: 'Dừng ngay sau khi xác nhận',
      paragraphsVi: [
        'Command injection ảnh hưởng trực tiếp tới máy chủ đang chạy. Chỉ dùng lệnh không thay đổi trạng thái và trả về thông tin không nhạy cảm, ví dụ định danh tiến trình hoặc thời gian hệ thống.',
        'Dừng ngay khi có xác nhận. Đi tiếp để chứng minh mức độ nghiêm trọng cao hơn là vượt quá PoC tối thiểu và có thể làm bạn mất bảo vệ safe harbor.',
      ],
    },
  ],

  'mod-web-ssti': [
    {
      headingVi: 'Khác biệt với XSS',
      paragraphsVi: [
        'XSS xảy ra khi dữ liệu trở thành mã trong trình duyệt. Template injection xảy ra khi dữ liệu trở thành biểu thức được engine template đánh giá trên máy chủ.',
        'Nguyên nhân gốc là ứng dụng ghép dữ liệu người dùng vào chuỗi template rồi mới đưa cho engine biên dịch, thay vì truyền dữ liệu vào một template đã biên dịch sẵn như một biến.',
      ],
    },
    {
      headingVi: 'Dấu hiệu nhận biết',
      paragraphsVi: [
        'Dấu hiệu rõ nhất là một biểu thức toán học đơn giản trong đầu vào được trả về đã tính toán thay vì giữ nguyên. Đó là bằng chứng engine đang đánh giá nội dung của bạn.',
        'Tính năng hay có vấn đề này: mẫu email tuỳ chỉnh, báo cáo do người dùng định nghĩa, trang tuỳ biến theo thương hiệu khách hàng, và thông báo có nội dung động.',
      ],
    },
    {
      headingVi: 'Dừng ở mức xác nhận đánh giá biểu thức',
      paragraphsVi: [
        'Sau khi xác nhận engine đánh giá biểu thức của bạn, hãy dừng. Nhiều engine có khả năng truy cập tới đối tượng hệ thống, và đi tiếp theo hướng đó là bước sang thực thi mã trên máy chủ thật.',
        'Trong báo cáo, mô tả rằng bạn đã xác nhận khả năng đánh giá biểu thức và cố ý không đi xa hơn. Nêu rõ mức sandbox của engine nếu bạn xác định được, vì điều đó ảnh hưởng tới đánh giá tác động.',
      ],
    },
  ],

  'mod-web-xxe': [
    {
      headingVi: 'Mặc định không an toàn của bộ phân tích',
      paragraphsVi: [
        'Đặc tả XML cho phép tài liệu khai báo thực thể ngoài, tức là yêu cầu bộ phân tích lấy nội dung từ một nguồn khác và chèn vào. Nhiều bộ phân tích bật tính năng này theo mặc định.',
        'Hệ quả: một tài liệu XML do người dùng gửi lên có thể khiến máy chủ đọc tệp cục bộ hoặc phát sinh request tới địa chỉ khác. Biện pháp khắc phục là tắt xử lý thực thể ngoài và DTD trong cấu hình bộ phân tích.',
      ],
    },
    {
      headingVi: 'XML ẩn trong nhiều định dạng',
      paragraphsVi: [
        'Bạn không cần thấy endpoint nhận XML tường minh mới nghĩ tới nhóm vấn đề này. Nhiều định dạng phổ biến thực chất chứa XML bên trong.',
      ],
      bulletsVi: [
        'Tài liệu văn phòng hiện đại là tệp nén chứa XML.',
        'Ảnh vector SVG là XML.',
        'Assertion trong một số giao thức danh tính doanh nghiệp là XML.',
        'Nguồn tin dạng RSS và Atom.',
        'Tệp cấu hình và sơ đồ dữ liệu.',
      ],
    },
    {
      headingVi: 'Chứng minh bằng tệp vô hại',
      paragraphsVi: [
        'Khi cần chứng minh khả năng đọc tệp, hãy chọn một tệp có nội dung cố định và không nhạy cảm. Tuyệt đối không đọc tệp cấu hình chứa bí mật để làm bằng chứng.',
        'Với biến thể mù — nơi nội dung không hiện ra trong phản hồi — hãy dùng một đích do bạn kiểm soát và có ghi log. Việc request đến được ghi nhận là bằng chứng đủ mạnh mà không cần trích xuất gì.',
      ],
    },
  ],

  'mod-web-xss': [
    {
      headingVi: 'Ngữ cảnh đầu ra quyết định tất cả',
      paragraphsVi: [
        'Không có một cách mã hoá chung cho mọi trường hợp. Cùng một chuỗi có thể hoàn toàn vô hại ở ngữ cảnh này và nguy hiểm ở ngữ cảnh khác, vì quy tắc cú pháp của mỗi ngữ cảnh khác nhau.',
        'Đây là lý do các bộ lọc đầu vào kiểu một kích cỡ cho tất cả luôn thất bại: chúng không biết dữ liệu sẽ được dùng ở đâu. Mã hoá phải xảy ra càng gần nơi render càng tốt, vì chỉ ở đó mới biết ngữ cảnh.',
      ],
      bulletsVi: [
        'Nội dung HTML: mã hoá thực thể cho các ký tự có nghĩa cú pháp.',
        'Giá trị thuộc tính: mã hoá và luôn bọc giá trị trong dấu nháy.',
        'Ngữ cảnh JavaScript: chỉ đặt dữ liệu ở vị trí giá trị đã được bọc nháy, không bao giờ đặt trực tiếp vào khối mã.',
        'URL: mã hoá phần trăm, rồi mã hoá thuộc tính nếu URL nằm trong thuộc tính HTML.',
        'CSS: chỉ đặt dữ liệu ở vị trí giá trị thuộc tính, không đặt trong selector.',
      ],
    },
    {
      headingVi: 'Framework hiện đại và các cửa thoát',
      paragraphsVi: [
        'Framework giao diện hiện đại tự động mã hoá đầu ra theo ngữ cảnh trong phần lớn trường hợp. Điều này làm giảm mạnh số lỗi XSS so với trước đây.',
        'Nhưng mỗi framework đều có cửa thoát cho phép chèn HTML thô, và chúng tồn tại vì đôi khi thực sự cần. Khi rà soát mã, tìm các cửa thoát này là cách nhanh nhất để định vị rủi ro XSS trong một ứng dụng hiện đại.',
      ],
    },
    {
      headingVi: 'Chứng minh mà không ảnh hưởng người khác',
      paragraphsVi: [
        'Với XSS phản chiếu, chứng minh trong trình duyệt của chính bạn là đủ. Không cần và không nên gửi liên kết cho ai.',
        'Với XSS lưu trữ, nội dung của bạn sẽ hiển thị cho người dùng thật. Hãy dùng khu vực chỉ mình bạn xem được nếu có, chọn hành động vô hại và không gây chú ý, rồi xoá nội dung ngay sau khi chụp bằng chứng và ghi lại thời điểm xoá.',
      ],
    },
    {
      headingVi: 'CSP là lớp bổ sung',
      paragraphsVi: [
        'Chính sách bảo mật nội dung giảm tác động khi mã hoá đầu ra thất bại, nhưng nó không thay thế mã hoá đầu ra. Một ứng dụng có CSP chặt nhưng mã hoá sai vẫn là ứng dụng có lỗi.',
        'Trong phần khuyến nghị, hãy nêu đúng thứ tự: mã hoá đầu ra theo ngữ cảnh là biện pháp chính, CSP và Trusted Types là phòng thủ nhiều lớp.',
      ],
    },
  ],

  'mod-web-dom-xss': [
    {
      headingVi: 'Toàn bộ vấn đề nằm trong trình duyệt',
      paragraphsVi: [
        'Với DOM XSS, máy chủ có thể hoàn toàn không liên quan. Mã JavaScript của trang lấy dữ liệu từ một nguồn do người dùng kiểm soát và ghi nó vào một điểm nhận nguy hiểm trong DOM.',
        'Điều này nghĩa là bạn không thể tìm nó bằng cách nhìn phản hồi của máy chủ. Bạn phải đọc mã phía client và lần theo luồng dữ liệu, hoặc dùng công cụ gỡ lỗi của trình duyệt để theo dõi.',
      ],
    },
    {
      headingVi: 'Nguồn và điểm nhận phía client',
      paragraphsVi: [
        'Nguồn là nơi dữ liệu người dùng đi vào mã client. Điểm nhận là nơi dữ liệu được diễn giải như mã hoặc như cấu trúc.',
      ],
      bulletsVi: [
        'Nguồn: phần khác nhau của URL gồm đường dẫn, tham số và phân đoạn hash.',
        'Nguồn: dữ liệu trong các kho lưu trữ của trình duyệt.',
        'Nguồn: thông điệp nhận từ ngữ cảnh duyệt web khác.',
        'Điểm nhận: các API ghi HTML dạng chuỗi vào DOM.',
        'Điểm nhận: các API đánh giá chuỗi thành mã.',
        'Điểm nhận: thuộc tính nhận URL nơi scheme không được kiểm tra.',
      ],
    },
    {
      headingVi: 'DOM clobbering và prototype pollution phía client',
      paragraphsVi: [
        'DOM clobbering lợi dụng việc phần tử HTML có thuộc tính định danh sẽ tạo ra biến toàn cục tương ứng. Nếu mã của trang kiểm tra sự tồn tại của một biến toàn cục để quyết định hành vi, kẻ tấn công chèn được HTML có thể ghi đè quyết định đó mà không cần chạy mã nào.',
        'Prototype pollution phía client xảy ra khi hàm gộp đối tượng không loại bỏ khoá đặc biệt, khiến dữ liệu đầu vào ghi được vào prototype dùng chung. Hệ quả lan ra mọi đối tượng khác trong trang, và thường biểu hiện thành hành vi bất thường ở thư viện hạ nguồn.',
      ],
    },
  ],

  'mod-web-postmessage': [
    {
      headingVi: 'Kênh giao tiếp giữa các ngữ cảnh',
      paragraphsVi: [
        'Cơ chế truyền thông điệp cho phép hai ngữ cảnh duyệt web khác origin trao đổi dữ liệu một cách có kiểm soát. Nó là ngoại lệ hợp pháp của same-origin policy.',
        'Vì là ngoại lệ, nó đi kèm trách nhiệm: cả bên gửi lẫn bên nhận đều phải kiểm tra. Bên gửi phải chỉ định origin đích cụ thể; bên nhận phải xác minh origin của người gửi trước khi tin dữ liệu.',
      ],
    },
    {
      headingVi: 'Hai lỗi phổ biến',
      paragraphsVi: [
        'Lỗi thứ nhất: bên nhận xử lý mọi thông điệp mà không kiểm tra origin. Khi đó bất kỳ trang nào mở được cửa sổ tới trang này đều gửi lệnh được.',
        'Lỗi thứ hai: bên gửi dùng ký tự đại diện cho origin đích. Khi đó nếu trang bị nhúng trong một khung do bên khác kiểm soát, dữ liệu nhạy cảm sẽ được gửi cho bên đó.',
        'Cả hai đều dễ phát hiện khi đọc mã và dễ sửa, nhưng vẫn xuất hiện thường xuyên vì cơ chế này hay được dùng vội trong các tích hợp.',
      ],
    },
    {
      headingVi: 'WebSocket phía client',
      paragraphsVi: [
        'Kết nối WebSocket được thiết lập bằng một quá trình nâng cấp từ HTTP, và quá trình đó gửi kèm cookie. Nếu máy chủ không kiểm tra origin lúc bắt tay, một trang khác có thể mở kết nối với danh nghĩa người dùng đã đăng nhập.',
        'Điểm thứ hai cần kiểm tra: phân quyền có được áp dụng cho từng thông điệp không, hay chỉ một lần lúc thiết lập kết nối. Kiểm tra một lần rồi tin tưởng mãi là mẫu sai phổ biến.',
      ],
    },
  ],

  'mod-web-csp': [
    {
      headingVi: 'CSP làm gì và không làm gì',
      paragraphsVi: [
        'Chính sách bảo mật nội dung cho phép trang khai báo nguồn nào được phép tải và thực thi. Mục đích là giảm tác động khi có lỗ hổng chèn nội dung.',
        'Nó không sửa lỗi. Một trang có XSS nhưng có CSP chặt vẫn là trang có lỗi; CSP chỉ làm việc khai thác khó hơn. Trong báo cáo, đừng để sự tồn tại của CSP làm bạn hạ thấp mức nghiêm trọng của lỗi gốc.',
      ],
    },
    {
      headingVi: 'Điều làm một chính sách mất tác dụng',
      paragraphsVi: [
        'Nhiều chính sách trông chặt nhưng có một chỉ thị làm hỏng toàn bộ. Khi đọc một chính sách, hãy tìm các trường hợp sau.',
      ],
      bulletsVi: [
        'Cho phép thực thi mã nội tuyến, làm mất phần lớn tác dụng chống chèn mã.',
        'Cho phép chuyển chuỗi thành mã khi chạy.',
        'Cho phép nguồn quá rộng, ví dụ toàn bộ một dịch vụ lưu trữ nội dung công cộng.',
        'Thiếu chỉ thị hạn chế đích của biểu mẫu hoặc hạn chế việc bị nhúng trong khung.',
        'Chính sách chỉ ở chế độ báo cáo mà không thực thi.',
      ],
    },
    {
      headingVi: 'Nơi lưu dữ liệu và service worker',
      paragraphsVi: [
        'Token phiên lưu ở kho mà script đọc được sẽ bị lấy bởi bất kỳ XSS nào. Đây là lập luận chính cho việc dùng cookie có cờ chống truy cập từ script.',
        'Service worker đáng chú ý vì phạm vi và thời gian tồn tại của nó. Một service worker đăng ký ở gốc site kiểm soát mọi trang của site và tiếp tục chạy sau khi tab đóng, nên tác động kéo dài hơn nhiều so với một lần thực thi mã thông thường.',
      ],
    },
  ],

  'mod-web-csrf': [
    {
      headingVi: 'Vì sao CSRF tồn tại',
      paragraphsVi: [
        'Same-origin policy ngăn trang A đọc phản hồi từ trang B, nhưng không ngăn trang A gửi request tới B. Và trình duyệt tự động đính kèm cookie của B vào request đó.',
        'Kết quả: nếu B chỉ dựa vào cookie để xác định ý định của người dùng, thì A có thể khiến người dùng thực hiện hành động trên B mà họ không biết. Máy chủ B không phân biệt được request đến từ giao diện của mình hay từ trang khác.',
      ],
    },
    {
      headingVi: 'Biện pháp chính và biện pháp bổ sung',
      paragraphsVi: [
        'Biện pháp chính là token chống CSRF: một giá trị bí mật, không đoán được, gắn với phiên người dùng, được gửi kèm mỗi request gây thay đổi và kiểm tra ở phía server.',
        'Có biến thể không lưu trạng thái dùng cặp cookie và tham số, nhưng biến thể ngây thơ của nó dễ bị đánh bại khi kẻ tấn công đặt được cookie. Biến thể an toàn dùng chữ ký để ràng buộc token với phiên đã xác thực.',
        'Một hướng hiện đại khác là dựa vào các header do trình duyệt tự thêm để mô tả ngữ cảnh của request, cho phép từ chối request gây thay đổi đến từ site khác. Cách này gọn nhưng cần phương án dự phòng cho trình duyệt cũ.',
      ],
    },
    {
      headingVi: 'SameSite là phòng thủ nhiều lớp',
      paragraphsVi: [
        'Thuộc tính SameSite làm giảm đáng kể bối cảnh khai thác CSRF, nhưng nó không thay thế một biện pháp chống CSRF đúng nghĩa trong phần lớn triển khai.',
        'Lý do: nó không bảo vệ trước kẻ tấn công có chỗ đứng trong cùng site, và giá trị nới lỏng vẫn cho phép một số request đi kèm cookie. Trong khuyến nghị, hãy nêu nó là lớp bổ sung chứ không phải giải pháp.',
      ],
    },
    {
      headingVi: 'Chứng minh an toàn',
      paragraphsVi: [
        'Dùng một trang thử nghiệm chạy trên máy của chính bạn và tài khoản của chính bạn. Không đặt trang khai thác ở nơi người dùng thật có thể vô tình truy cập.',
        'Đừng quên login CSRF: buộc nạn nhân đăng nhập vào tài khoản của kẻ tấn công. Tác động khác với CSRF thông thường — hoạt động của nạn nhân sau đó được ghi vào tài khoản mà kẻ tấn công kiểm soát.',
      ],
    },
  ],

  'mod-web-cors': [
    {
      headingVi: 'Cấu hình sai nguy hiểm nhất',
      paragraphsVi: [
        'Tổ hợp nguy hiểm là: máy chủ phản chiếu lại origin của bên gọi vào header cho phép, đồng thời bật cho phép gửi thông tin xác thực.',
        'Khi đó bất kỳ trang nào cũng gửi được request kèm cookie của người dùng tới endpoint này và đọc được phản hồi. Nếu endpoint trả về dữ liệu cá nhân, đó là rò rỉ dữ liệu cho mọi site trên Internet.',
      ],
    },
    {
      headingVi: 'Các mẫu so khớp origin có vấn đề',
      paragraphsVi: [
        'Ngoài phản chiếu hoàn toàn, còn nhiều cách so khớp lỏng lẻo khác đều dẫn tới cùng một kết quả.',
      ],
      bulletsVi: [
        'So khớp bằng cách kiểm tra chuỗi con, khiến một tên miền chứa tên miền hợp lệ như một phần cũng được chấp nhận.',
        'So khớp chỉ phần đuôi, khiến tên miền do kẻ tấn công đăng ký với đuôi phù hợp được chấp nhận.',
        'Chấp nhận giá trị origin đặc biệt biểu thị nguồn không xác định.',
        'Bỏ qua kiểm tra scheme, cho phép phiên bản không mã hoá của cùng tên miền.',
      ],
    },
    {
      headingVi: 'Đánh giá tác động theo dữ liệu',
      paragraphsVi: [
        'Cấu hình CORS sai chỉ có ý nghĩa khi endpoint trả về thứ gì đó đáng giá. Một endpoint trả dữ liệu công khai với CORS lỏng gần như không có tác động.',
        'Vì vậy trong báo cáo, hãy nêu cụ thể endpoint nào bị ảnh hưởng và dữ liệu gì có thể đọc được. Kiểm tra bằng cách quan sát header phản hồi là đủ; không cần dựng trang khai thác đầy đủ.',
      ],
    },
  ],

  'mod-web-ssrf': [
    {
      headingVi: 'Tác động phụ thuộc vị trí mạng của máy chủ',
      paragraphsVi: [
        'Cùng một lỗi SSRF có thể gần như vô hại hoặc rất nghiêm trọng, tuỳ vào việc máy chủ chạm tới được những gì từ vị trí mạng của nó.',
        'Vì vậy khi đánh giá tác động, câu hỏi không phải "tôi gửi được request không" mà là "máy chủ này ở đâu trong mạng và nó nói chuyện được với ai".',
      ],
    },
    {
      headingVi: 'Tính năng hay có SSRF',
      paragraphsVi: [
        'SSRF xuất hiện ở bất cứ đâu ứng dụng nhận một địa chỉ từ người dùng rồi tự đi lấy nội dung.',
      ],
      bulletsVi: [
        'Tải ảnh hoặc tệp từ một liên kết.',
        'Tạo bản xem trước cho liên kết được dán vào.',
        'Cấu hình webhook trỏ tới hệ thống của khách hàng.',
        'Nhập dữ liệu từ nguồn từ xa.',
        'Chuyển đổi tài liệu có tham chiếu tài nguyên bên ngoài.',
        'Kiểm tra tình trạng hoạt động của một địa chỉ do người dùng nhập.',
      ],
    },
    {
      headingVi: 'Hai tình huống, hai cách phòng vệ',
      paragraphsVi: [
        'Tình huống thứ nhất: ứng dụng chỉ cần gọi tới một tập đích đã biết trước. Ở đây danh sách cho phép là khả thi và nên là biện pháp chính. Một khuyến nghị đáng chú ý là không nhận URL hoàn chỉnh từ người dùng vì URL rất khó kiểm tra; thay vào đó nhận địa chỉ hoặc tên miền đã được kiểm tra rồi tự dựng URL.',
        'Tình huống thứ hai: ứng dụng phải gọi tới đích tuỳ ý, như trường hợp webhook. Ở đây phải dùng danh sách chặn kết hợp nhiều lớp: kiểm tra định dạng, phân giải tên miền rồi kiểm tra địa chỉ kết quả không thuộc dải nội bộ, và tắt việc tự động đi theo chuyển hướng.',
        'Cả hai tình huống đều nên có thêm kiểm soát ở tầng mạng, giới hạn lưu lượng đi ra của ứng dụng chỉ tới các đích hợp lệ.',
      ],
    },
    {
      headingVi: 'Chứng minh mà không lấy thông tin xác thực',
      paragraphsVi: [
        'Cách chứng minh đúng chuẩn PoC tối thiểu: trỏ tới một máy chủ do bạn kiểm soát và có ghi log, rồi cho thấy request đến được ghi nhận kèm địa chỉ nguồn.',
        'Điều này chứng minh đầy đủ rằng máy chủ phát sinh request theo yêu cầu của bạn, mà không chạm tới bất kỳ dịch vụ nội bộ nào. Tuyệt đối không truy vấn dịch vụ metadata của nền tảng để lấy thông tin xác thực thật — đó là vượt PoC tối thiểu và thường bị chính sách cấm rõ ràng.',
      ],
    },
  ],

  'mod-web-cache': [
    {
      headingVi: 'Khoá cache là trung tâm của vấn đề',
      paragraphsVi: [
        'Hệ thống cache quyết định hai request có "giống nhau" hay không dựa trên một tập thành phần của request, gọi là khoá cache. Thường khoá gồm đường dẫn và một số tham số, nhưng không phải mọi header.',
        'Vấn đề xảy ra khi một thành phần ảnh hưởng tới nội dung phản hồi nhưng lại không nằm trong khoá. Khi đó phản hồi sinh ra từ request của một người có thể được phục vụ cho những người khác.',
      ],
    },
    {
      headingVi: 'Đầu độc và đánh lừa là hai chuyện khác nhau',
      paragraphsVi: [
        'Đầu độc cache: kẻ tấn công khiến cache lưu một phản hồi có hại, rồi phản hồi đó được phục vụ cho người dùng bình thường. Nạn nhân là nhiều người.',
        'Đánh lừa cache: kẻ tấn công khiến cache lưu một phản hồi chứa dữ liệu cá nhân của nạn nhân, rồi tự truy cập lại để đọc. Nạn nhân là một người cụ thể.',
        'Hai loại có tác động và cách chứng minh khác nhau, nên phải phân biệt rõ trong báo cáo.',
      ],
    },
    {
      headingVi: 'Host header và URL tuyệt đối',
      paragraphsVi: [
        'Nhiều ứng dụng dựng URL tuyệt đối cho liên kết, tài nguyên hoặc email dựa trên header cho biết tên máy chủ. Header đó do client kiểm soát.',
        'Khi kết hợp với cache, việc này trở nên nghiêm trọng: một URL trỏ tới máy chủ của kẻ tấn công có thể được lưu vào phản hồi và phục vụ cho mọi người dùng sau đó.',
      ],
    },
    {
      headingVi: 'Cẩn trọng khi kiểm thử',
      paragraphsVi: [
        'Đây là nhóm kỹ thuật ảnh hưởng trực tiếp tới người dùng thật. Trên hệ thống sản xuất, một phép thử sai có thể khiến nhiều người nhận nội dung hỏng.',
        'Chỉ thực hành trên lab. Nếu chương trình cho phép thử trên hệ thống thật, hãy dùng một khoá cache riêng biệt để phản hồi bị đầu độc chỉ tới được chính bạn, và thông báo trước cho chương trình.',
      ],
    },
  ],

  'mod-web-smuggling': [
    {
      headingVi: 'Nguồn gốc là hai cách xác định độ dài',
      paragraphsVi: [
        'Giao thức HTTP phiên bản cũ có hai cách để biết một request kết thúc ở đâu: khai báo độ dài tường minh, hoặc truyền theo từng khối với khối cuối rỗng.',
        'Đặc tả nói khi cả hai cùng xuất hiện thì ưu tiên cách thứ hai. Quy tắc này đủ khi chỉ có một máy chủ xử lý. Nhưng trong kiến trúc có nhiều lớp, mỗi lớp có thể là một triển khai khác nhau với mức độ khoan dung khác nhau trước các biến thể bất thường.',
      ],
    },
    {
      headingVi: 'Ba dạng bất đồng bộ',
      paragraphsVi: [
        'Ba dạng cổ điển đều là hệ quả của cùng một nguyên nhân: lớp trước và lớp sau không thống nhất về ranh giới request.',
      ],
      bulletsVi: [
        'Lớp trước dùng khai báo độ dài, lớp sau dùng truyền theo khối.',
        'Lớp trước dùng truyền theo khối, lớp sau dùng khai báo độ dài.',
        'Cả hai đều hiểu truyền theo khối, nhưng một trong hai bị đánh lừa để bỏ qua header đó bằng cách viết nó theo dạng bất thường.',
      ],
    },
    {
      headingVi: 'Vì sao tác động cao và rủi ro thử nghiệm cũng cao',
      paragraphsVi: [
        'Khi thành công, một phần dữ liệu của bạn được gán vào request của người dùng khác. Điều này cho phép chiếm phiên, bỏ qua kiểm soát truy cập, hoặc đầu độc phản hồi — tất cả đều ở mức tác động rất cao.',
        'Nhưng chính cơ chế đó khiến việc thử nghiệm nguy hiểm: bạn đang can thiệp vào request của người dùng thật. Nhiều chương trình cấm thử nghiệm này trên môi trường sản xuất.',
        'Nguyên tắc của module: học và thực hành trên lab. Trên hệ thống thật, chỉ thử khi chính sách cho phép rõ ràng và bạn đã hiểu đầy đủ hậu quả.',
      ],
    },
  ],

  'mod-web-file-upload': [
    {
      headingVi: 'Ba lớp kiểm tra, không lớp nào đủ một mình',
      paragraphsVi: [
        'Phần mở rộng tệp do người dùng đặt. Loại nội dung khai báo trong request cũng do người dùng đặt. Chữ ký ở đầu tệp thì có thể làm giả bằng cách thêm một đoạn mở đầu hợp lệ.',
        'Vì vậy không lớp nào trong ba lớp này đủ một mình. Cách tiếp cận đúng là dùng danh sách cho phép cho phần mở rộng, kiểm tra loại nội dung như một bước lọc nhanh, kiểm tra chữ ký, và quan trọng nhất là kiểm soát cách tệp được lưu và phục vụ lại.',
      ],
    },
    {
      headingVi: 'Nơi lưu và cách phục vụ quan trọng hơn việc kiểm tra',
      paragraphsVi: [
        'Kể cả khi kiểm tra bị vượt qua, một tệp độc hại chỉ gây hại nếu nó được thực thi hoặc được phục vụ theo cách nguy hiểm.',
      ],
      bulletsVi: [
        'Tốt nhất: lưu trên một máy chủ riêng biệt với ứng dụng.',
        'Tốt: lưu ngoài thư mục web, chỉ phục vụ qua một endpoint có kiểm soát.',
        'Bắt buộc: đặt tên tệp do máy chủ sinh ra, không dùng tên người dùng cung cấp.',
        'Bắt buộc: phục vụ lại với loại nội dung cố định và header buộc tải xuống thay vì hiển thị.',
        'Nên có: giới hạn kích thước, và với tệp nén thì giới hạn tính sau khi giải nén.',
      ],
    },
    {
      headingVi: 'Xử lý tệp phía máy chủ là bề mặt riêng',
      paragraphsVi: [
        'Sau khi nhận, ứng dụng thường xử lý tệp: tạo ảnh thu nhỏ, trích metadata, chuyển đổi định dạng, giải nén. Mỗi bước này gọi một thư viện phân tích dữ liệu phức tạp.',
        'Đây là nơi hai nhóm vấn đề gặp nhau: tệp có cấu trúc bất thường có thể kích hoạt lỗi trong thư viện phân tích, và tệp nén có thể giải nén thành khối lượng lớn hơn nhiều lần gây cạn tài nguyên.',
      ],
    },
    {
      headingVi: 'Kiểm thử an toàn',
      paragraphsVi: [
        'Dùng tệp vô hại có nội dung nhận biết được, ví dụ một tệp văn bản chứa chuỗi đánh dấu riêng. Điều này cho phép bạn tìm lại tệp sau đó và chứng minh nó được lưu ở đâu.',
        'Không tải lên tệp có khả năng thực thi trên hệ thống thật, và không tải tệp dung lượng lớn gây ảnh hưởng dịch vụ. Nếu cần chứng minh giới hạn kích thước bị thiếu, hãy lập luận từ cấu hình quan sát được thay vì thực sự tải tệp lớn.',
      ],
    },
  ],

  'mod-web-path-traversal': [
    {
      headingVi: 'Chuẩn hoá phải đi trước kiểm tra',
      paragraphsVi: [
        'Lỗi kinh điển là kiểm tra chuỗi đường dẫn trước rồi mới để hệ điều hành chuẩn hoá nó. Khi đó một chuỗi đi lên thư mục cha vượt qua được kiểm tra vì lúc kiểm tra nó chưa được diễn giải.',
        'Cách làm đúng: dựng đường dẫn tuyệt đối, chuẩn hoá nó, rồi kiểm tra kết quả có nằm trong thư mục cho phép hay không. Thứ tự này quan trọng hơn bất kỳ danh sách ký tự bị chặn nào.',
      ],
    },
    {
      headingVi: 'Nhiều lớp mã hoá',
      paragraphsVi: [
        'Đường dẫn có thể được mã hoá nhiều lần, và mỗi lớp trung gian có thể giải mã một lần. Một chuỗi trông vô hại ở lớp ngoài có thể trở thành chuỗi đi lên thư mục cha sau hai lần giải mã.',
        'Đây là lý do việc chặn theo chuỗi ký tự cụ thể luôn thất bại. Chỉ có chuẩn hoá rồi kiểm tra kết quả cuối cùng mới đáng tin.',
      ],
    },
    {
      headingVi: 'Phân biệt với thiếu phân quyền ở chức năng tải xuống',
      paragraphsVi: [
        'Hai vấn đề dễ nhầm. Path traversal là đi ra khỏi thư mục dự kiến. Thiếu phân quyền là ở đúng thư mục nhưng lấy tệp của người khác.',
        'Nguyên nhân gốc và cách khắc phục khác nhau, nên phải phân loại đúng. Với trường hợp thứ hai, giải pháp là dùng định danh không phải đường dẫn và kiểm tra quyền sở hữu, giống hệt mô hình của IDOR.',
      ],
    },
  ],

  'mod-web-info-disclosure': [
    {
      headingVi: 'Phân biệt lộ thông tin có tác động và không có tác động',
      paragraphsVi: [
        'Không phải mọi thông tin lộ ra đều là lỗ hổng. Một header cho biết tên phần mềm, một thông báo lỗi chung chung, một đường dẫn nội bộ trong mã phía client — chúng có thể hữu ích cho kẻ tấn công nhưng tự thân không cho phép làm gì.',
        'Câu hỏi để phân loại: thông tin này cho phép ai làm được gì mà lẽ ra họ không làm được? Nếu không trả lời được câu này, phát hiện sẽ bị đóng là informative, và điều đó là hợp lý.',
      ],
    },
    {
      headingVi: 'Những gì thực sự đáng báo cáo',
      paragraphsVi: [
        'Ngược lại, một số dạng lộ thông tin có tác động rõ ràng và thường được xử lý nghiêm túc.',
      ],
      bulletsVi: [
        'Thông tin xác thực còn hiệu lực trong mã phía client hoặc trong tệp cấu hình.',
        'Source map phát hành ra sản xuất, để lộ toàn bộ mã nguồn gốc kèm logic nghiệp vụ.',
        'Tệp sao lưu hoặc tệp cấu hình còn sót trong thư mục web.',
        'Trang gỡ lỗi hoặc bảng điều khiển nội bộ truy cập được từ ngoài.',
        'Thông báo lỗi chi tiết để lộ cấu trúc truy vấn hoặc đường dẫn hệ thống.',
        'Dữ liệu cá nhân trong phản hồi mà giao diện không hiển thị.',
      ],
    },
    {
      headingVi: 'Khi tìm thấy bí mật',
      paragraphsVi: [
        'Không dùng nó. Không kiểm chứng xem còn hiệu lực không. Việc dùng một thông tin xác thực tìm được là truy cập trái phép, bất kể ý định của bạn.',
        'Thay vào đó, mô tả phạm vi quyền của nó dựa trên tên biến, ngữ cảnh sử dụng và tài liệu công khai của dịch vụ tương ứng. Đặt việc xoay vòng bí mật lên đầu phần khuyến nghị, và nêu rõ rằng xoá khỏi mã là chưa đủ vì nó vẫn nằm trong lịch sử.',
      ],
    },
  ],

  'mod-web-deserialization': [
    {
      headingVi: 'Vấn đề là tin vào dữ liệu, không phải thư viện',
      paragraphsVi: [
        'Khi ứng dụng khôi phục một đối tượng từ dữ liệu do người dùng cung cấp, người gửi ảnh hưởng được tới kiểu và trạng thái của đối tượng tạo ra trong tiến trình máy chủ.',
        'Tuỳ ngôn ngữ và thư viện, việc khôi phục có thể kích hoạt mã chạy tự động trong quá trình đó. Nhưng nguyên nhân gốc không nằm ở thư viện cụ thể — nó nằm ở quyết định kiến trúc: tin vào dữ liệu bên ngoài đủ để dựng lại đối tượng từ nó.',
      ],
    },
    {
      headingVi: 'Biện pháp gốc là đổi định dạng',
      paragraphsVi: [
        'Khuyến nghị chính là tránh hoàn toàn các định dạng tuần tự hoá gắn với ngôn ngữ, chuyển sang định dạng dữ liệu thuần với schema rõ ràng.',
        'Với định dạng thuần, dữ liệu chỉ là dữ liệu; ứng dụng tự quyết định tạo đối tượng gì từ nó. Không có cơ chế nào cho phép dữ liệu tự chỉ định kiểu của mình.',
        'Nếu vì lý do tương thích mà buộc phải giữ định dạng cũ, hai lớp bảo vệ bổ sung là: giới hạn tập kiểu được phép khôi phục, và ký dữ liệu rồi xác minh chữ ký trước khi khôi phục.',
      ],
    },
    {
      headingVi: 'Prototype pollution phía máy chủ',
      paragraphsVi: [
        'Trong môi trường có prototype dùng chung, hàm gộp đối tượng không loại bỏ khoá đặc biệt cho phép dữ liệu đầu vào ghi vào prototype gốc.',
        'Hệ quả lan ra toàn bộ tiến trình: mọi đối tượng tạo sau đó đều thừa hưởng thuộc tính bị chèn. Điều này có thể làm thay đổi hành vi của thư viện hạ nguồn theo cách khó lường, kể cả bỏ qua các kiểm tra bảo mật.',
      ],
    },
    {
      headingVi: 'Dừng ở mức xác nhận',
      paragraphsVi: [
        'Nhóm vấn đề này có khả năng dẫn tới thực thi mã trên máy chủ. Hãy dừng ngay khi xác nhận được rằng dữ liệu của bạn ảnh hưởng tới quá trình khôi phục đối tượng.',
        'Trong báo cáo, nêu rõ bạn đã xác nhận đến đâu và cố ý không đi xa hơn. Điều này vừa an toàn cho bạn vừa cho thấy bạn hiểu ranh giới của PoC tối thiểu.',
      ],
    },
  ],

  'mod-web-race-condition': [
    {
      headingVi: 'Khoảng trống giữa kiểm tra và sử dụng',
      paragraphsVi: [
        'Nhiều thao tác nghiệp vụ gồm hai bước tách rời: đọc trạng thái để kiểm tra điều kiện, rồi cập nhật trạng thái. Giữa hai bước có một khoảng thời gian.',
        'Nếu hai request cùng thực hiện chuỗi đó gần như đồng thời, cả hai đều đọc trạng thái cũ, cả hai đều thấy điều kiện thoả mãn, và cả hai đều cập nhật. Kết quả là giới hạn bị vượt qua.',
      ],
    },
    {
      headingVi: 'Tính năng nào dễ bị ảnh hưởng',
      paragraphsVi: [
        'Bất kỳ tính năng nào có khái niệm "chỉ được một lần" hoặc "không được vượt quá" đều là ứng viên.',
      ],
      bulletsVi: [
        'Áp dụng mã giảm giá dùng một lần.',
        'Rút tiền hoặc chuyển số dư.',
        'Sử dụng lượt trong gói có giới hạn.',
        'Mời thành viên khi số ghế có hạn.',
        'Đổi điểm thưởng lấy phần thưởng.',
        'Bình chọn hoặc đánh giá một lần cho mỗi người.',
      ],
    },
    {
      headingVi: 'Khắc phục ở tầng dữ liệu',
      paragraphsVi: [
        'Thêm kiểm tra ở tầng ứng dụng không giải quyết được vấn đề, vì kiểm tra và cập nhật vẫn là hai bước.',
        'Giải pháp gốc là dùng ràng buộc nguyên tử ở tầng dữ liệu: giao dịch với mức cô lập phù hợp, khoá ở mức bản ghi, ràng buộc duy nhất, hoặc cập nhật có điều kiện trong một câu lệnh duy nhất.',
      ],
    },
    {
      headingVi: 'Chứng minh với số request tối thiểu',
      paragraphsVi: [
        'Hai request đồng thời là đủ để chứng minh. Gửi hàng loạt để tăng xác suất thành công sẽ bị coi là gây tải, và có thể kích hoạt cơ chế bảo vệ khiến bạn khó phân biệt nguyên nhân.',
        'Trong báo cáo, nêu rõ số request đã dùng. Con số nhỏ cho thấy bạn kiểm soát được phép thử và tôn trọng giới hạn của hệ thống.',
      ],
    },
  ],

  'mod-web-webhook': [
    {
      headingVi: 'Webhook là điểm vào không qua giao diện',
      paragraphsVi: [
        'Webhook là endpoint nhận sự kiện từ hệ thống bên ngoài. Nó không có giao diện, ít được kiểm thử, nhưng thường được xử lý với đặc quyền cao vì nó thay mặt một hệ thống tin cậy.',
        'Hai câu hỏi cần trả lời với mọi webhook: hệ thống này xác minh nguồn gốc của sự kiện bằng cách nào, và điều gì xảy ra nếu cùng một sự kiện được gửi hai lần?',
      ],
    },
    {
      headingVi: 'Xác minh chữ ký và dấu thời gian',
      paragraphsVi: [
        'Cơ chế phổ biến là bên gửi ký nội dung bằng một bí mật chung và đặt chữ ký vào header. Bên nhận tính lại chữ ký và so sánh.',
        'Ba lỗi hay gặp: chữ ký không bao gồm toàn bộ phần cần bảo vệ, việc so sánh không dùng phép so sánh chống rò rỉ thời gian, và thiếu dấu thời gian nên một sự kiện hợp lệ cũ có thể được phát lại vô hạn.',
      ],
    },
    {
      headingVi: 'Idempotency là yêu cầu bảo mật',
      paragraphsVi: [
        'Cơ chế thử lại là bình thường trong hệ thống phân tán: bên gửi không nhận được xác nhận thì gửi lại. Vì vậy bên nhận phải chịu được việc nhận trùng.',
        'Nếu xử lý trùng dẫn tới cộng tiền hai lần hoặc cấp quyền hai lần, đó không chỉ là vấn đề độ tin cậy mà là vấn đề toàn vẹn dữ liệu có thể bị lợi dụng. Cách khắc phục là xử lý theo khoá sự kiện duy nhất.',
      ],
    },
  ],

  'mod-web-business-logic': [
    {
      headingVi: 'Vì sao không có bộ payload cho logic',
      paragraphsVi: [
        'Lỗi logic không nằm ở cú pháp mà nằm ở giả định. Mỗi ứng dụng có tập giả định riêng, phản ánh cách người thiết kế hình dung người dùng sẽ hành xử.',
        'Vì vậy không có danh sách payload nào áp dụng được. Công cụ duy nhất là hiểu ý định của tính năng rồi tìm trạng thái mà người thiết kế không lường trước.',
      ],
    },
    {
      headingVi: 'Quy trình tìm lỗi logic',
      paragraphsVi: [
        'Bắt đầu bằng việc mô tả tính năng bằng lời: nó phục vụ mục đích gì, ai được dùng, và kết quả mong đợi là gì. Rồi liệt kê các giả định ẩn đằng sau mô tả đó.',
      ],
      bulletsVi: [
        'Thứ tự bước: có bỏ bước, đảo bước, hay lặp bước được không?',
        'Dấu của số: giá trị âm được chấp nhận ở đâu?',
        'Đơn vị: có chỗ nào lẫn giữa các đơn vị hoặc loại tiền tệ không?',
        'Giới hạn: số lượng, dung lượng, tần suất có trần ở phía server không?',
        'Trạng thái: hành động này có hợp lệ ở mọi trạng thái của đối tượng không?',
        'Nơi tính toán: giá trị quan trọng được tính ở client hay server?',
      ],
    },
    {
      headingVi: 'Đánh giá tác động theo giá trị nghiệp vụ',
      paragraphsVi: [
        'Lỗi logic thường đơn giản về mặt kỹ thuật nhưng có tác động tài chính trực tiếp. Vì vậy phần tác động kinh doanh trong báo cáo quan trọng hơn phần kỹ thuật.',
        'Hãy định lượng khi có thể: mỗi lần khai thác mang lại bao nhiêu giá trị, và có giới hạn nào ngăn việc lặp lại không.',
      ],
    },
  ],

  'mod-web-payment-flow': [
    {
      headingVi: 'Câu hỏi đầu tiên: giá được quyết định ở đâu',
      paragraphsVi: [
        'Nếu giá, số lượng, hoặc mức giảm được gửi từ client và server chấp nhận, mọi kiểm tra phía giao diện đều vô nghĩa.',
        'Thiết kế đúng là server tự tính toàn bộ giá trị từ dữ liệu tin cậy: mã sản phẩm, số lượng, và mã giảm giá được xác thực lại từ cơ sở dữ liệu. Client chỉ gửi ý định, không gửi kết quả.',
      ],
    },
    {
      headingVi: 'Các điểm hay có vấn đề trong luồng thanh toán',
      paragraphsVi: [
        'Luồng thanh toán có nhiều bước và nhiều bên tham gia, nên có nhiều chỗ để giả định bị phá vỡ.',
      ],
      bulletsVi: [
        'Áp dụng lặp lại cùng một mã giảm giá.',
        'Kết hợp nhiều ưu đãi mà thiết kế không cho phép kết hợp.',
        'Thay đổi giỏ hàng sau khi giá đã được chốt nhưng trước khi thanh toán hoàn tất.',
        'Hoàn tiền nhiều hơn số đã trả.',
        'Sai lệch do làm tròn khi chuyển đổi đơn vị tiền tệ.',
        'Số lượng âm làm giảm tổng tiền.',
        'Xác nhận thanh toán được tin tưởng mà không xác minh với bên xử lý thanh toán.',
      ],
    },
    {
      headingVi: 'Kiểm thử mà không giao dịch thật',
      paragraphsVi: [
        'Chỉ thực hiện trong môi trường sandbox nếu chương trình cung cấp. Nếu không có sandbox, hãy dừng ở bước chứng minh hệ thống chấp nhận một trạng thái không hợp lệ, trước khi hoàn tất giao dịch.',
        'Không bao giờ thực hiện hoàn tiền thật để chứng minh. Ghi rõ trong báo cáo rằng bạn đã dừng ở đâu và vì sao.',
      ],
    },
  ],

  'mod-web-websocket': [
    {
      headingVi: 'Mô hình xác thực khác request thông thường',
      paragraphsVi: [
        'Kết nối WebSocket được thiết lập một lần rồi tồn tại lâu dài, với nhiều thông điệp đi qua. Điều này khác hẳn mô hình request và response nơi mỗi request được xác thực riêng.',
        'Mẫu sai phổ biến: kiểm tra phân quyền một lần lúc bắt tay rồi tin tưởng mọi thông điệp sau đó. Nếu quyền của người dùng thay đổi giữa chừng, hoặc nếu một thông điệp yêu cầu quyền cao hơn, kiểm tra ban đầu không còn đủ.',
      ],
    },
    {
      headingVi: 'Chiếm kết nối từ site khác',
      paragraphsVi: [
        'Quá trình nâng cấp lên WebSocket bắt đầu bằng một request HTTP thông thường, và request đó mang theo cookie. Nếu máy chủ không kiểm tra origin lúc bắt tay, một trang khác mở được kết nối với danh nghĩa người dùng đã đăng nhập.',
        'Vì WebSocket không chịu ràng buộc của same-origin policy theo cách như XHR, đây là bề mặt cần kiểm tra riêng chứ không thể suy ra từ cấu hình CORS.',
      ],
    },
    {
      headingVi: 'Server-Sent Events và gRPC-Web',
      paragraphsVi: [
        'Kênh sự kiện một chiều có mô hình đơn giản hơn nhưng vẫn cần kiểm tra: ai được đăng ký kênh nào, và dữ liệu gửi qua kênh có được lọc theo quyền của người nhận không.',
        'Với gRPC-Web, lưu lượng đi qua HTTP nhưng nội dung được mã hoá theo định dạng nhị phân. Bạn vẫn quan sát và phân tích được, chỉ cần công cụ hiểu định dạng đó. Các câu hỏi về phân quyền không thay đổi.',
      ],
    },
  ],

  'mod-web-wasm': [
    {
      headingVi: 'WebAssembly chạy trong sandbox của trình duyệt',
      paragraphsVi: [
        'Mã WebAssembly không có quyền truy cập trực tiếp tới hệ thống. Nó chỉ tương tác với thế giới bên ngoài thông qua các hàm mà mã JavaScript của trang cung cấp cho nó.',
        'Điều này nghĩa là bề mặt cần quan tâm không phải bản thân mã WASM, mà là ranh giới giữa WASM và JavaScript: những hàm nào được phơi ra, và dữ liệu đi qua ranh giới đó được kiểm tra thế nào.',
      ],
    },
    {
      headingVi: 'Đưa logic bảo mật vào WASM không làm nó an toàn',
      paragraphsVi: [
        'Một mẫu thiết kế sai đôi khi gặp: chuyển logic kiểm tra hoặc thuật toán quan trọng sang WASM với kỳ vọng nó khó phân tích hơn JavaScript.',
        'WASM khó đọc hơn nhưng vẫn phân tích được, và quan trọng hơn: nó vẫn chạy trên máy người dùng. Mọi quyết định bảo mật thực hiện ở phía client đều có thể bị bỏ qua, bất kể được viết bằng gì.',
      ],
    },
    {
      headingVi: 'Tiện ích mở rộng tương tác với trang',
      paragraphsVi: [
        'Tiện ích trình duyệt chèn mã vào trang và có quyền cao hơn mã của trang. Ranh giới giữa hai bên là bề mặt riêng.',
        'Nội dung chi tiết nằm ở domain U, nhưng ở đây cần ghi nhớ một nguyên tắc: từ góc nhìn của trang web, tiện ích là môi trường mà trang không kiểm soát; từ góc nhìn của tiện ích, trang web là dữ liệu không tin cậy.',
      ],
    },
  ],

  'mod-web-edge': [
    {
      headingVi: 'Nhiều lớp nghĩa là nhiều cách diễn giải',
      paragraphsVi: [
        'Kiến trúc hiện đại thường có nhiều lớp CDN và cache chồng nhau, cộng với mã chạy ở edge trước khi request tới origin.',
        'Mỗi lớp là một triển khai giao thức riêng với mức khoan dung riêng trước các biến thể bất thường. Càng nhiều lớp, càng nhiều cơ hội để hai lớp hiểu cùng một request khác nhau.',
      ],
    },
    {
      headingVi: 'Đặt logic bảo mật ở đâu',
      paragraphsVi: [
        'Mã chạy ở edge hấp dẫn vì nó gần người dùng và giảm tải cho origin. Nhưng đặt kiểm tra bảo mật ở edge có một rủi ro: nếu ai đó gọi thẳng tới origin, kiểm tra bị bỏ qua hoàn toàn.',
        'Nguyên tắc an toàn: kiểm tra bảo mật phải có ở origin. Edge có thể thêm một lớp nữa để chặn sớm, nhưng không được là lớp duy nhất.',
      ],
    },
    {
      headingVi: 'HTTP phiên bản mới ở mức khái niệm',
      paragraphsVi: [
        'Các phiên bản giao thức mới xử lý ranh giới thông điệp theo cách chặt chẽ hơn, nên một số dạng bất đồng bộ cổ điển không còn áp dụng trực tiếp.',
        'Nhưng vấn đề chuyển thành dạng khác: khi một lớp dùng phiên bản mới và lớp sau dùng phiên bản cũ, việc chuyển đổi giữa hai phiên bản trở thành nơi có thể sinh ra khác biệt. Điều này giải thích vì sao kiến trúc lai giữa các phiên bản cần được xem xét cẩn thận.',
      ],
    },
  ],
};
