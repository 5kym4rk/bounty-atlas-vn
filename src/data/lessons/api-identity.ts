import type { LessonSection } from '@/schemas/entities';

/**
 * Thân bài học cho domain E — API, và domain F — identity và SSO.
 * Nội dung do dự án tự biên soạn. Không sao chép nguyên văn từ nguồn nào.
 */
export const apiIdentityLessons: Record<string, LessonSection[]> = {
  // ── E: API ──────────────────────────────────────────────────────────
  'mod-api-fundamentals': [
    {
      headingVi: 'Schema là điểm khởi đầu tốt nhất',
      paragraphsVi: [
        'Nếu API có đặc tả, bạn có sẵn danh sách endpoint, tham số, kiểu dữ liệu và mã trạng thái. Đó là bản đồ hoàn chỉnh mà với ứng dụng web bạn phải tự dựng.',
        'Nhưng đừng tin đặc tả là sự thật tuyệt đối. Hợp đồng và thực thi thường lệch nhau: endpoint không có trong đặc tả vẫn hoạt động, tham số không được ghi vẫn được chấp nhận, và ràng buộc trong đặc tả không phải lúc nào cũng được thực thi.',
      ],
    },
    {
      headingVi: 'Nhiều thế hệ API cùng tồn tại',
      paragraphsVi: [
        'Hệ thống trưởng thành thường có nhiều lớp API chồng lên nhau qua thời gian, và đây là nơi có nhiều vấn đề nhất.',
      ],
      bulletsVi: [
        'Phiên bản cũ giữ lại vì có khách hàng chưa nâng cấp.',
        'API nội bộ vô tình phơi ra qua cùng một gateway với API công khai.',
        'Endpoint dành riêng cho ứng dụng di động, ít được kiểm thử hơn phần web.',
        'API cho đối tác với mô hình xác thực khác.',
        'Endpoint còn sót từ một tính năng đã gỡ khỏi giao diện.',
      ],
    },
    {
      headingVi: 'Quản lý danh mục API là vấn đề bảo mật',
      paragraphsVi: [
        'Tổ chức không biết mình đang phơi ra những endpoint nào thì không thể bảo vệ chúng. Đây là lý do việc duy trì danh mục API đầy đủ được coi là một biện pháp bảo mật chứ không chỉ là việc tài liệu.',
        'Với người nghiên cứu, hệ quả thực tế: các endpoint không có trong tài liệu chính thức thường là nơi kiểm soát yếu nhất. Nhưng hãy cẩn thận — chúng cũng dễ nằm ngoài phạm vi hơn, nên phải kiểm tra chính sách trước.',
      ],
    },
  ],

  'mod-api-graphql': [
    {
      headingVi: 'Một endpoint không có nghĩa một điểm kiểm tra',
      paragraphsVi: [
        'GraphQL thường phơi ra một endpoint duy nhất, và điều này khiến người mới nghĩ có thể đặt kiểm tra phân quyền ở đó. Cách nghĩ này dẫn tới lỗ hổng.',
        'Thực tế mỗi trường trong schema có thể được giải quyết bởi một hàm riêng truy cập dữ liệu riêng. Vì vậy phân quyền phải nằm ở tầng resolver, tức là ở từng trường, chứ không phải ở cổng vào.',
      ],
    },
    {
      headingVi: 'Truy vấn lồng nhau là bề mặt đặc thù',
      paragraphsVi: [
        'GraphQL cho phép client đi theo quan hệ giữa các đối tượng trong một truy vấn duy nhất. Đây là ưu điểm về hiệu năng nhưng tạo ra hai vấn đề bảo mật.',
        'Thứ nhất, một trường có kiểm soát tốt có thể trả về đối tượng con mà việc truy cập không được kiểm tra lại. Thứ hai, truy vấn lồng sâu hoặc lặp qua quan hệ vòng có thể tạo ra chi phí xử lý rất lớn từ một request nhỏ.',
      ],
    },
    {
      headingVi: 'Giới hạn cần có',
      paragraphsVi: [
        'Vì client quyết định hình dạng truy vấn, server phải đặt giới hạn để chi phí không do client toàn quyền quyết định.',
      ],
      bulletsVi: [
        'Giới hạn độ sâu của truy vấn.',
        'Tính điểm phức tạp và đặt trần cho mỗi truy vấn.',
        'Giới hạn số phần tử trả về trong một lần.',
        'Giới hạn tốc độ theo chi phí thay vì theo số request.',
        'Cân nhắc tắt introspection ở môi trường sản xuất, nhưng nhớ đây là biện pháp che giấu chứ không phải kiểm soát truy cập.',
      ],
    },
    {
      headingVi: 'Kiểm thử có trách nhiệm',
      paragraphsVi: [
        'Truy vấn lồng sâu có thể gây tải nặng. Khi kiểm tra giới hạn độ sâu, hãy tăng dần và dừng ngay khi thấy độ trễ tăng bất thường.',
        'Mục tiêu là xác định giới hạn có tồn tại hay không, không phải tìm ngưỡng chính xác mà hệ thống sụp đổ.',
      ],
    },
  ],

  'mod-api-bola': [
    {
      headingVi: 'Cùng nguyên nhân với IDOR, bề mặt rộng hơn',
      paragraphsVi: [
        'Nguyên nhân gốc giống hệt: nhận định danh đối tượng từ client và không kiểm tra quyền sở hữu. Nhưng API thường phơi ra nhiều loại đối tượng hơn và nhiều thao tác hơn so với giao diện web.',
        'Ngoài ra, API thường được xây dựng theo kiểu mỗi tài nguyên một bộ endpoint, nên nếu lập trình viên quên kiểm tra ở một bộ, lỗi chỉ ảnh hưởng bộ đó. Điều này khiến vấn đề rải rác và khó phát hiện bằng cách kiểm tra một chỗ.',
      ],
    },
    {
      headingVi: 'Ma trận là công cụ chính',
      paragraphsVi: [
        'Cách kiểm thử có hệ thống là dựng một ma trận ba chiều từ schema: vai trò, loại đối tượng, và thao tác. Mỗi ô là một phép thử.',
        'Ma trận biến công việc từ thử ngẫu nhiên thành công việc có thể đo tiến độ. Bạn biết mình đã kiểm tra bao nhiêu phần trăm tổ hợp, và biết chỗ nào còn trống.',
      ],
    },
    {
      headingVi: 'Endpoint theo lô và đối tượng lồng nhau',
      paragraphsVi: [
        'Endpoint nhận một mảng định danh là nơi hay có lỗi, vì kiểm tra dễ được viết cho phần tử đầu tiên hoặc cho toàn bộ lô thay vì cho từng phần tử.',
        'Cách kiểm tra gọn: gửi mảng gồm một đối tượng của bạn và một đối tượng của tài khoản thứ hai, rồi đảo thứ tự và gửi lại. Nếu kết quả khác nhau tuỳ vị trí, bạn đã tìm ra vấn đề mà không cần thêm dữ liệu nào.',
      ],
    },
    {
      headingVi: 'Chứng minh với hai tài khoản của bạn',
      paragraphsVi: [
        'Tạo hai tài khoản, tốt nhất ở hai tổ chức khác nhau nếu sản phẩm có khái niệm tổ chức. Một cặp đối tượng là đủ để chứng minh.',
        'Không liệt kê hàng loạt định danh, kể cả khi chúng tuần tự. Quy mô ảnh hưởng suy ra được từ cấu trúc định danh và cơ chế phân trang, không cần thu thập dữ liệu.',
      ],
    },
  ],

  'mod-api-mass-assignment': [
    {
      headingVi: 'Tiện lợi của framework trở thành lỗ hổng',
      paragraphsVi: [
        'Nhiều framework cung cấp cách gán toàn bộ trường trong thân request vào thuộc tính của đối tượng chỉ bằng một dòng mã. Rất tiện khi phát triển nhanh.',
        'Vấn đề là đối tượng thường có nhiều thuộc tính hơn những gì biểu mẫu hiển thị: cờ vai trò, trạng thái duyệt, định danh chủ sở hữu, cờ đã xác minh. Nếu tất cả đều gán được từ request, client kiểm soát chúng.',
      ],
    },
    {
      headingVi: 'Tìm thuộc tính nhạy cảm từ phản hồi đọc',
      paragraphsVi: [
        'Cách phát hiện đơn giản: gọi endpoint đọc một đối tượng và xem toàn bộ trường trả về. Những trường mà giao diện không cho sửa nhưng xuất hiện trong phản hồi là ứng viên để thử ghi.',
        'Sau đó gửi request cập nhật có kèm trường đó với một giá trị hợp lệ, và kiểm tra lại bằng cách đọc lại đối tượng. Thực hiện toàn bộ trên đối tượng của chính bạn.',
      ],
    },
    {
      headingVi: 'Phân quyền ở mức thuộc tính',
      paragraphsVi: [
        'Đây là mức phân quyền thứ ba, khác với mức chức năng và mức đối tượng. Bạn có quyền sửa đối tượng này, nhưng không có nghĩa bạn có quyền sửa mọi trường của nó.',
        'Khắc phục gốc là khai báo tường minh danh sách trường được phép ghi, và danh sách này khác nhau theo vai trò. Cách tiếp cận tách kiểu dữ liệu đầu vào khỏi kiểu dữ liệu lưu trữ cũng giải quyết vấn đề này một cách tự nhiên.',
      ],
    },
  ],

  'mod-api-bfla': [
    {
      headingVi: 'Chức năng đặc quyền gọi được bằng phiên thường',
      paragraphsVi: [
        'Nếu kiểm tra vai trò chỉ được thực hiện ở tầng giao diện — ẩn nút, không hiển thị menu — thì endpoint tương ứng vẫn gọi được trực tiếp.',
        'Đây là dạng lỗi cơ bản nhưng vẫn phổ biến, đặc biệt ở các endpoint quản trị được thêm sau khi kiến trúc phân quyền đã ổn định.',
      ],
    },
    {
      headingVi: 'Tìm endpoint đặc quyền',
      paragraphsVi: ['Có nhiều nguồn để tìm mà không cần đoán mò.'],
      bulletsVi: [
        'Đặc tả API nếu có, kể cả phần dành cho quản trị.',
        'Mã JavaScript phía client, nơi các lời gọi API thường được khai báo tập trung.',
        'Quy ước đặt tên: nếu có endpoint đọc thì thường có endpoint ghi tương ứng.',
        'Tài liệu công khai của sản phẩm mô tả tính năng dành cho quản trị viên.',
        'Phản hồi lỗi đôi khi tiết lộ tên endpoint liên quan.',
      ],
    },
    {
      headingVi: 'Kiểm tra mọi method, không chỉ method giao diện dùng',
      paragraphsVi: [
        'Một mẫu lỗi phổ biến: kiểm tra vai trò được cài đặt cho method mà giao diện gọi, nhưng method khác trên cùng đường dẫn thì không.',
        'Vì vậy với mỗi endpoint, hãy thử cả các method khác. Nhưng dừng ở bước xác nhận quyền truy cập — không thực hiện thao tác gây thay đổi trên hệ thống thật.',
      ],
    },
  ],

  'mod-api-tokens': [
    {
      headingVi: 'Phạm vi token quyết định thiệt hại khi lộ',
      paragraphsVi: [
        'Câu hỏi quan trọng nhất với bất kỳ token nào: nếu token này lộ ra, người có nó làm được gì?',
        'Nhiều hệ thống cấp token có phạm vi rộng hơn nhiều so với nhu cầu thực của client, đơn giản vì cấp rộng thì đỡ phải xử lý lỗi. Đây là dạng vi phạm đặc quyền tối thiểu và đáng được nêu trong báo cáo khi bạn quan sát được.',
      ],
    },
    {
      headingVi: 'Vòng đời đầy đủ của một token',
      paragraphsVi: [
        'Một cơ chế token an toàn phải xử lý được cả năm giai đoạn, và mỗi giai đoạn là một chỗ có thể sai.',
      ],
      bulletsVi: [
        'Cấp phát: token phải ngẫu nhiên đủ mạnh và được truyền qua kênh an toàn.',
        'Sử dụng: phạm vi phải được kiểm tra ở mỗi lần dùng, không chỉ lúc cấp.',
        'Làm mới: cơ chế làm mới không được cho phép kéo dài vô hạn một token đã bị đánh cắp.',
        'Hết hạn: phải có thời hạn, và thời hạn phải được kiểm tra thật.',
        'Thu hồi: phải có hiệu lực ngay, không chờ tới khi token tự hết hạn.',
      ],
    },
    {
      headingVi: 'Chữ ký HMAC phải bao phủ đủ',
      paragraphsVi: [
        'Với cơ chế ký request bằng bí mật chung, câu hỏi là chữ ký bao phủ những phần nào của request.',
        'Nếu chữ ký chỉ tính trên thân request mà không tính header hay đường dẫn, thì các phần không được ký có thể bị thay đổi mà chữ ký vẫn hợp lệ. Cần thêm dấu thời gian và giá trị dùng một lần để chống phát lại.',
      ],
    },
    {
      headingVi: 'Chỉ dùng token của chính bạn',
      paragraphsVi: [
        'Nếu bạn tìm thấy token của người khác — trong log, trong mã phía client, trong một phản hồi rò rỉ — tuyệt đối không dùng nó để kiểm tra xem còn hiệu lực không.',
        'Việc đó là truy cập trái phép bất kể ý định. Hãy báo cáo sự tồn tại của nó, mô tả phạm vi quyền suy ra từ ngữ cảnh, và đề nghị thu hồi.',
      ],
    },
  ],

  'mod-api-jwt': [
    {
      headingVi: 'Bốn kiểm tra bắt buộc',
      paragraphsVi: [
        'Bên nhận một token phải kiểm tra đủ bốn điều. Bỏ qua bất kỳ điều nào cũng dẫn tới khả năng mạo danh.',
      ],
      bulletsVi: [
        'Chữ ký hợp lệ, xác minh bằng khoá mà chính bên nhận quyết định.',
        'Bên phát hành đúng là bên mà hệ thống tin.',
        'Đối tượng nhận đúng là chính hệ thống này, không phải một dịch vụ khác.',
        'Thời hạn còn hiệu lực.',
      ],
    },
    {
      headingVi: 'Vì sao không được tin trường thuật toán trong token',
      paragraphsVi: [
        'Header của token khai báo thuật toán ký. Nhưng header đó nằm trong chính token, tức là do người gửi kiểm soát.',
        'Nếu bên nhận đọc trường này rồi dùng thuật toán tương ứng để xác minh, người gửi có thể chọn thuật toán có lợi cho mình. Trường hợp cực đoan là chọn giá trị biểu thị không ký gì cả.',
        'Cách làm đúng: bên nhận ghim thuật toán theo cấu hình của chính mình và từ chối mọi token khai báo thuật toán khác.',
      ],
    },
    {
      headingVi: 'Khoá xác minh phải do bên nhận quyết định',
      paragraphsVi: [
        'Một số triển khai cho phép token tự chỉ định khoá dùng để xác minh nó, hoặc chỉ định địa chỉ để tải khoá về, hoặc chỉ định định danh khoá được dùng để tra cứu.',
        'Cả ba đều là cùng một lỗi thiết kế: người gửi vừa cung cấp dữ liệu vừa cung cấp phương tiện xác minh dữ liệu đó. Khi kẻ tấn công kiểm soát được cả hai, chữ ký không bảo vệ được gì.',
        'Riêng với cơ chế tra cứu theo định danh, còn có rủi ro định danh đó được dùng để dựng đường dẫn tệp hoặc truy vấn cơ sở dữ liệu, mở ra một nhóm lỗ hổng khác.',
      ],
    },
    {
      headingVi: 'Nhầm lẫn giữa thuật toán đối xứng và bất đối xứng',
      paragraphsVi: [
        'Nếu hệ thống dùng thuật toán bất đối xứng, khoá công khai thường thực sự công khai. Nếu bên nhận có thể bị lừa để xác minh bằng thuật toán đối xứng, nó sẽ dùng chính khoá công khai đó làm bí mật chung.',
        'Khi ấy bất kỳ ai biết khoá công khai đều tạo được token hợp lệ. Đây là lý do việc ghim thuật toán ở phía bên nhận quan trọng tới mức nào.',
        'Khi chứng minh, chỉ thao tác trên token của chính bạn. Không bao giờ dùng token của người khác.',
      ],
    },
  ],

  'mod-api-resource-abuse': [
    {
      headingVi: 'Client không được quyết định chi phí',
      paragraphsVi: [
        'Nguyên tắc thiết kế: chi phí xử lý một request không được do client toàn quyền quyết định. Nếu một tham số cho phép client yêu cầu khối lượng công việc tuỳ ý, đó là vấn đề.',
        'Các dạng phổ biến: tham số phân trang không có trần, request theo lô không giới hạn số phần tử, truy vấn lồng sâu, tham số khoảng thời gian cho phép quét toàn bộ lịch sử.',
      ],
    },
    {
      headingVi: 'Rate limit theo chi phí, không theo số request',
      paragraphsVi: [
        'Giới hạn theo số request là bước đầu nhưng không đủ, vì hai request có thể có chi phí chênh nhau hàng nghìn lần.',
        'Cách tốt hơn là gán chi phí cho từng loại thao tác và giới hạn tổng chi phí trong một khoảng thời gian. Ngoài ra, giới hạn nên gắn với danh tính đã xác thực chứ không chỉ với địa chỉ nguồn, vì địa chỉ dễ thay đổi.',
      ],
    },
    {
      headingVi: 'Kiểm thử mà không gây từ chối dịch vụ',
      paragraphsVi: [
        'Đây là ranh giới quan trọng nhất của module. Mục tiêu là xác định cơ chế bảo vệ có tồn tại hay không, tuyệt đối không phải làm hệ thống ngừng hoạt động.',
        'Quy trình an toàn: tăng dần một cách chậm rãi, quan sát độ trễ và mã trạng thái sau mỗi bước, và dừng ngay khi thấy dấu hiệu giới hạn hoặc dấu hiệu suy giảm.',
        'Nếu bạn thấy độ trễ tăng, đó là điều kiện dừng. Hãy ghi lại mức tải đã tạo và thông báo cho chương trình — chủ động thông báo giúp đội vận hành loại trừ nguyên nhân.',
      ],
    },
  ],

  'mod-api-excessive-data': [
    {
      headingVi: 'API trả nhiều hơn giao diện hiển thị',
      paragraphsVi: [
        'Mẫu phổ biến: API trả về toàn bộ đối tượng và để client chọn trường nào hiển thị. Với giao diện thì ổn, nhưng với bảo mật thì mọi trường đều đã rời khỏi máy chủ.',
        'Cách phát hiện đơn giản: so sánh danh sách trường trong phản hồi với danh sách trường giao diện hiển thị. Chênh lệch chính là dữ liệu bị lộ thừa.',
      ],
    },
    {
      headingVi: 'Liệt kê ở quy mô lớn',
      paragraphsVi: [
        'Hai điều kiện kết hợp tạo ra khả năng liệt kê: định danh đoán được hoặc có endpoint danh sách, và thiếu giới hạn tốc độ hợp lý.',
        'Đánh giá rủi ro này bằng lập luận chứ không bằng thực hiện. Từ cấu trúc định danh, cơ chế phân trang và giới hạn quan sát được, bạn suy ra được quy mô mà không cần thu thập dữ liệu.',
      ],
    },
    {
      headingVi: 'Mô tả tác động mà không thu thập dữ liệu',
      paragraphsVi: [
        'Đây là kỹ năng quan trọng và cũng là ranh giới an toàn. Bạn cần thuyết phục người đọc về quy mô mà không được giữ dữ liệu của người khác.',
        'Cách làm: dùng dữ liệu của chính tài khoản bạn để minh hoạ cấu trúc phản hồi, thay mọi giá trị bằng nhãn mô tả kiểu dữ liệu, rồi lập luận về quy mô dựa trên tham số phân trang và cấu trúc định danh.',
      ],
    },
    {
      headingVi: 'Khắc phục ở phía server',
      paragraphsVi: [
        'Giải pháp là lọc trường ở phía server theo vai trò của người gọi, chứ không phải yêu cầu client tự bỏ qua trường thừa.',
        'Với hệ thống dùng GraphQL, việc này tự nhiên hơn vì client khai báo trường cần — nhưng vẫn phải kiểm tra quyền ở tầng resolver cho từng trường nhạy cảm.',
      ],
    },
  ],

  'mod-api-testing-workflow': [
    {
      headingVi: 'Kiểm thử theo schema thay vì theo cảm tính',
      paragraphsVi: [
        'Với API, bạn có lợi thế mà kiểm thử web không có: một danh sách đầy đủ và có cấu trúc của mọi endpoint và tham số. Hãy tận dụng nó để làm việc có hệ thống.',
        'Quy trình: từ schema dựng ma trận vai trò × đối tượng × thao tác, đánh dấu ô nào đã kiểm tra, và theo dõi tiến độ theo phần trăm ma trận đã phủ.',
      ],
    },
    {
      headingVi: 'Bốn kiểu kiểm thử bổ sung cho nhau',
      paragraphsVi: ['Mỗi kiểu tìm ra một loại vấn đề khác nhau, nên nên dùng cả bốn.'],
      bulletsVi: [
        'Kiểm thử khác biệt: gửi cùng request bằng hai vai trò và so sánh phản hồi. Khác biệt chỉ ra nơi có kiểm soát; giống nhau chỉ ra nơi thiếu kiểm soát.',
        'Kiểm thử phủ định: gửi giá trị không hợp lệ và xem hệ thống từ chối đúng cách hay xử lý theo cách bất ngờ.',
        'Kiểm thử chuyển trạng thái: thực hiện thao tác ở trạng thái mà nó không nên hợp lệ.',
        'Đối chiếu client: so sánh tập endpoint mà ứng dụng di động gọi với tập mà web gọi, phần chênh lệch là bề mặt ít được kiểm thử.',
      ],
    },
    {
      headingVi: 'Ghi chép để tái sử dụng',
      paragraphsVi: [
        'Ma trận bạn dựng cho một sản phẩm dùng lại được khi sản phẩm cập nhật. Lưu nó lại kèm ngày và phiên bản API.',
        'Khi API thay đổi, bạn chỉ cần kiểm tra phần mới thay vì làm lại từ đầu. Đây là cách người nghiên cứu có kinh nghiệm làm việc hiệu quả hơn theo thời gian.',
      ],
    },
  ],

  // ── F: Identity ─────────────────────────────────────────────────────
  'mod-identity-oauth': [
    {
      headingVi: 'Luồng authorization code và nơi mọi thứ có thể sai',
      paragraphsVi: [
        'Trong luồng chuẩn, ứng dụng chuyển người dùng tới máy chủ uỷ quyền, người dùng đồng ý, máy chủ chuyển họ trở lại ứng dụng kèm một mã ngắn hạn, rồi ứng dụng đổi mã đó lấy token ở kênh sau.',
        'Điểm yếu nằm ở bước chuyển hướng trở lại: nếu máy chủ uỷ quyền chấp nhận một đích chuyển hướng không đúng, mã uỷ quyền sẽ được gửi tới nơi kẻ tấn công kiểm soát.',
      ],
    },
    {
      headingVi: 'So khớp redirect URI phải chính xác tuyệt đối',
      paragraphsVi: [
        'Thực hành tốt nhất hiện hành yêu cầu so khớp chuỗi chính xác với giá trị đã đăng ký, với ngoại lệ hẹp cho số cổng trong trường hợp ứng dụng gốc chạy trên máy người dùng.',
        'Mọi cách nới lỏng đều đã dẫn tới sự cố thực tế: so khớp theo tiền tố cho phép thêm đường dẫn con, so khớp theo mẫu cho phép biến thể không lường trước, và cho phép thêm tham số truy vấn mở ra đường chuyển hướng tiếp.',
      ],
    },
    {
      headingVi: 'State và PKCE giải quyết hai vấn đề khác nhau',
      paragraphsVi: [
        'Đây là điểm mà rất nhiều người nhầm. Hai cơ chế này không thay thế nhau.',
        'Tham số state ràng buộc phản hồi với phiên đã khởi tạo luồng, chống việc kẻ tấn công gắn kết quả uỷ quyền của mình vào phiên của nạn nhân.',
        'PKCE ràng buộc việc đổi mã lấy token với chính client đã khởi tạo luồng, chống việc mã uỷ quyền bị đánh cắp rồi dùng bởi bên khác.',
        'Khuyến nghị hiện hành là bắt buộc PKCE cho client công khai và nên dùng cả cho client bí mật; đồng thời máy chủ uỷ quyền phải từ chối yêu cầu đổi token có kèm giá trị xác minh khi luồng ban đầu không dùng PKCE, để chặn việc hạ cấp.',
      ],
    },
    {
      headingVi: 'Những luồng không nên dùng',
      paragraphsVi: [
        'Luồng yêu cầu người dùng đưa mật khẩu trực tiếp cho ứng dụng bị cấm trong thực hành hiện hành, vì nó phá vỡ toàn bộ lợi ích của việc uỷ quyền và mở rộng bề mặt tấn công.',
        'Luồng trả token thẳng trong phản hồi chuyển hướng bị khuyến cáo mạnh không nên dùng, trừ khi có biện pháp riêng chống việc chèn token vào phản hồi.',
        'Khi rà soát một triển khai, thấy hai luồng này đang được dùng là dấu hiệu cần xem xét kỹ hơn.',
      ],
    },
    {
      headingVi: 'Chứng minh an toàn',
      paragraphsVi: [
        'Đăng ký ứng dụng client của chính bạn nếu nền tảng cho phép, và dùng tài khoản của chính bạn ở mọi bước.',
        'Chứng minh bằng cách cho thấy mã uỷ quyền tới được một đích do bạn kiểm soát và có ghi log. Không bao giờ thực hiện luồng nhắm tới tài khoản của người khác.',
      ],
    },
  ],

  'mod-identity-oidc-jwt': [
    {
      headingVi: 'Lớp danh tính trên nền uỷ quyền',
      paragraphsVi: [
        'OAuth trả lời câu hỏi "ứng dụng này được phép làm gì thay mặt người dùng". Lớp danh tính đặt trên nó trả lời câu hỏi khác: "người dùng này là ai".',
        'Nhầm lẫn hai câu hỏi dẫn tới một lỗi thiết kế phổ biến: dùng access token như bằng chứng danh tính. Access token được cấp cho một mục đích khác và có thể được cấp cho bên thứ ba, nên không phù hợp để xác định người dùng.',
      ],
    },
    {
      headingVi: 'Các claim phải kiểm tra',
      paragraphsVi: [
        'ID token là một token có chữ ký chứa các khẳng định về người dùng. Bên nhận phải kiểm tra đủ trước khi tin.',
      ],
      bulletsVi: [
        'Chữ ký hợp lệ với khoá của bên phát hành mà hệ thống đã cấu hình.',
        'Bên phát hành đúng là bên được tin.',
        'Đối tượng nhận chính là ứng dụng này.',
        'Thời điểm phát hành và thời hạn nằm trong khoảng hợp lý.',
        'Giá trị dùng một lần khớp với giá trị mà ứng dụng đã gửi đi, chống phát lại.',
      ],
    },
    {
      headingVi: 'Ba loại token đừng nhầm lẫn',
      paragraphsVi: [
        'ID token nói người dùng là ai, dành cho ứng dụng đọc. Access token cho phép gọi API, dành cho máy chủ tài nguyên kiểm tra. Token phiên của ứng dụng là thứ ứng dụng tự cấp sau khi đã xác minh danh tính.',
        'Mỗi loại có đối tượng nhận, thời hạn và cách kiểm tra khác nhau. Dùng nhầm loại là nguồn gốc của nhiều lỗ hổng danh tính.',
      ],
    },
    {
      headingVi: 'SAML ở mức đủ để nhận ra vấn đề tương tự',
      paragraphsVi: [
        'Trong môi trường doanh nghiệp, một giao thức cũ hơn dựa trên tài liệu XML có chữ ký vẫn rất phổ biến. Mô hình tin cậy giống nhau: bên cung cấp danh tính ký một khẳng định, bên nhận xác minh và tin.',
        'Điểm cần biết: vì khẳng định là tài liệu XML có chữ ký, nó thừa hưởng cả hai nhóm vấn đề — vấn đề của việc xác minh chữ ký, và vấn đề của việc phân tích XML mà bạn đã học ở phần XXE.',
      ],
    },
  ],

  'mod-identity-account-linking': [
    {
      headingVi: 'Câu hỏi cốt lõi: khi nào hai danh tính là một người',
      paragraphsVi: [
        'Khi người dùng đăng nhập bằng một nhà cung cấp danh tính, ứng dụng phải quyết định: đây là người dùng mới, hay là người đã có tài khoản?',
        'Tiêu chí phổ biến nhất là địa chỉ email. Nếu email trùng với một tài khoản đã có, ứng dụng gộp hai danh tính. Đây chính là chỗ có vấn đề.',
      ],
    },
    {
      headingVi: 'Email chưa xác minh phá vỡ ranh giới',
      paragraphsVi: [
        'Một số nhà cung cấp danh tính cho phép người dùng đặt địa chỉ email mà chưa chứng minh quyền sở hữu, và có gửi kèm một chỉ báo cho biết email đã được xác minh hay chưa.',
        'Nếu ứng dụng gộp tài khoản dựa trên email mà bỏ qua chỉ báo đó, bất kỳ ai cũng tạo được danh tính với email của người khác rồi đăng nhập vào tài khoản của họ.',
        'Khắc phục: chỉ gộp tự động khi nhà cung cấp khẳng định email đã được xác minh; trong các trường hợp khác, yêu cầu xác nhận từ chủ tài khoản hiện có.',
      ],
    },
    {
      headingVi: 'Luồng gỡ liên kết cũng cần kiểm tra',
      paragraphsVi: [
        'Ít người kiểm tra chiều ngược lại. Nếu người dùng gỡ liên kết với nhà cung cấp danh tính, họ còn cách nào đăng nhập không? Nếu không, tài khoản có bị khoá vĩnh viễn không?',
        'Và quan trọng hơn: sau khi gỡ liên kết, danh tính cũ có còn đăng nhập được không? Nếu có, việc gỡ không thực sự có hiệu lực.',
      ],
    },
    {
      headingVi: 'Chỉ dùng danh tính do bạn kiểm soát',
      paragraphsVi: [
        'Toàn bộ việc kiểm thử phải thực hiện với địa chỉ email và tài khoản mà bạn sở hữu ở cả hai phía.',
        'Việc tạo một danh tính mang email của người khác để chứng minh, kể cả khi thành công, là hành vi nhắm vào tài khoản của người thật và vượt xa ranh giới cho phép.',
      ],
    },
  ],

  'mod-identity-tenant': [
    {
      headingVi: 'Xác nhận quyền sở hữu tên miền là ranh giới quan trọng',
      paragraphsVi: [
        'Trong sản phẩm doanh nghiệp, việc chứng minh quyền sở hữu một tên miền thường cho phép tổ chức tự động thu nhận mọi người dùng có email thuộc tên miền đó.',
        'Đây là một quyền rất lớn, nên cơ chế xác nhận phải không thể giả mạo. Các cơ chế thường dùng là đặt một bản ghi DNS đặc biệt hoặc một tệp tại đường dẫn xác định. Nếu cơ chế đó có thể bị vượt qua, một tổ chức có thể chiếm quyền quản lý người dùng của tổ chức khác.',
      ],
    },
    {
      headingVi: 'Cấp phát tức thời và ánh xạ vai trò',
      paragraphsVi: [
        'Nhiều hệ thống tạo tài khoản ngay lần đầu người dùng đăng nhập qua nhà cung cấp danh tính, và gán vai trò dựa trên thông tin nhóm mà nhà cung cấp gửi kèm.',
        'Câu hỏi bảo mật: thông tin nhóm đó có thể bị người dùng ảnh hưởng không? Nếu người dùng tự đặt được thuộc tính trong hồ sơ của mình ở phía nhà cung cấp, và ứng dụng ánh xạ thuộc tính đó thành vai trò, thì người dùng tự phong được vai trò cho mình.',
      ],
    },
    {
      headingVi: 'Tài khoản khách trong ngữ cảnh B2B',
      paragraphsVi: [
        'Mô hình mời cộng tác viên bên ngoài vào một tổ chức tạo ra một loại danh tính đặc biệt: có quyền trong tổ chức nhưng không thuộc tổ chức đó.',
        'Cần kiểm tra: khách có nâng được quyền của mình không, có mời thêm người khác không, có thấy được danh sách thành viên hay dữ liệu ngoài phạm vi được chia sẻ không, và khi bị gỡ khỏi tổ chức thì quyền truy cập có mất ngay không.',
      ],
    },
    {
      headingVi: 'Đăng xuất liên hệ thống',
      paragraphsVi: [
        'Khi một người dùng đăng nhập vào nhiều ứng dụng qua cùng một nhà cung cấp danh tính, việc đăng xuất trở nên phức tạp: đăng xuất khỏi một ứng dụng có nên đăng xuất khỏi tất cả không?',
        'Đây là nơi thường có khoảng trống. Người dùng nghĩ mình đã đăng xuất trong khi phiên ở các ứng dụng khác vẫn còn hiệu lực. Với thiết bị dùng chung, đó là rủi ro thật.',
      ],
    },
  ],

  'mod-identity-passkey-recovery': [
    {
      headingVi: 'Passkey chống được gì',
      paragraphsVi: [
        'Xác thực bằng khoá công khai loại bỏ bí mật chung: máy chủ chỉ lưu khoá công khai, nên rò rỉ cơ sở dữ liệu không cho kẻ tấn công thứ gì dùng được để đăng nhập.',
        'Quan trọng hơn, khoá được ràng buộc với tên miền cụ thể, nên nó không hoạt động trên một trang giả mạo. Đây là điều mà mật khẩu và mã một lần không làm được.',
      ],
    },
    {
      headingVi: 'Passkey không chống được gì',
      paragraphsVi: [
        'Nó không bảo vệ trước phiên bị chiếm sau khi đã đăng nhập. Nó không bảo vệ trước lỗi phân quyền. Và nó không bảo vệ nếu đường khôi phục yếu hơn.',
        'Điểm cuối là điều quan trọng nhất của module. Một hệ thống dùng passkey nhưng cho phép đặt lại truy cập bằng một mã gửi qua email sẽ có mức bảo vệ thực bằng mức bảo vệ của email đó.',
      ],
    },
    {
      headingVi: 'Đánh giá theo mắt xích yếu nhất',
      paragraphsVi: [
        'Khi rà soát một hệ thống danh tính, hãy liệt kê mọi đường vào tài khoản, không chỉ đường chính.',
      ],
      bulletsVi: [
        'Đăng nhập bằng phương thức chính.',
        'Đăng nhập bằng phương thức dự phòng.',
        'Mã khôi phục dùng một lần.',
        'Đặt lại qua email hoặc số điện thoại.',
        'Khôi phục qua bộ phận hỗ trợ khách hàng.',
        'Đăng nhập từ thiết bị đã được ghi nhớ.',
      ],
    },
    {
      headingVi: 'Thu hồi trên nhiều thiết bị',
      paragraphsVi: [
        'Khi người dùng mất thiết bị hoặc nghi ngờ tài khoản bị xâm nhập, họ cần một cách thu hồi mọi phiên và mọi phương thức xác thực đã đăng ký.',
        'Kiểm tra xem chức năng đó có tồn tại, có hiệu lực ngay, và có bao phủ cả các phiên ở ứng dụng di động lẫn các token dài hạn hay không.',
      ],
    },
  ],
};
