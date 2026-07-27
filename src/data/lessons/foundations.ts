import type { LessonSection } from '@/schemas/entities';

/**
 * Thân bài học cho domain B — kiến thức nền, và domain C — phương pháp kiểm thử.
 * Nội dung do dự án tự biên soạn. Không sao chép nguyên văn từ nguồn nào.
 */
export const foundationLessons: Record<string, LessonSection[]> = {
  // ── B1: Hệ điều hành ────────────────────────────────────────────────
  'mod-found-linux': [
    {
      headingVi: 'Mô hình quyền là nền của mọi thứ',
      paragraphsVi: [
        'Trên Linux, gần như mọi thứ đều là tệp, và mọi tệp đều có chủ sở hữu, nhóm, và ba bộ quyền: đọc, ghi, thực thi. Hiểu mô hình này là điều kiện để hiểu vì sao một dịch vụ chạy sai quyền lại trở thành đường leo thang đặc quyền.',
        'Điểm mà người mới hay bỏ qua: quyền ghi vào một thư mục cho phép bạn xoá và thay thế tệp trong đó, kể cả tệp bạn không sở hữu. Đây là lý do quyền thư mục quan trọng ngang quyền tệp.',
      ],
      bulletsVi: [
        'Bit setuid khiến chương trình chạy với quyền của chủ sở hữu thay vì người gọi — nguồn gốc của nhiều lỗi leo thang cục bộ.',
        'Bit sticky trên thư mục dùng chung ngăn người dùng xoá tệp của người khác.',
        'Quyền thực thi trên thư mục nghĩa là được phép đi vào, không phải được phép chạy.',
      ],
    },
    {
      headingVi: 'Tiến trình, dịch vụ và biến môi trường',
      paragraphsVi: [
        'Mỗi tiến trình chạy dưới một danh tính và thừa kế biến môi trường từ tiến trình cha. Điều này giải thích vì sao biến môi trường là nơi bí mật hay bị rò rỉ: chúng được truyền xuống mọi tiến trình con, và nhiều công cụ ghi chúng ra log khi gặp lỗi.',
        'Dịch vụ chạy nền thường khởi động bằng quyền cao rồi hạ quyền xuống. Nếu bước hạ quyền bị bỏ sót hoặc làm sai, toàn bộ dịch vụ chạy với quyền quản trị — một tình huống bạn sẽ gặp lại nhiều lần trong phần desktop và container.',
      ],
    },
    {
      headingVi: 'Log nói cho bạn biết chuyện gì đã xảy ra',
      paragraphsVi: [
        'Log hệ thống ghi lại việc khởi động dịch vụ, lỗi xác thực, và hành vi bất thường. Khi bạn kiểm thử trong lab của mình, log là cách nhanh nhất để hiểu vì sao một phép thử không cho kết quả như mong đợi.',
        'Với vai trò người nghiên cứu, hãy nhớ mặt còn lại: hoạt động của bạn cũng nằm trong log của tổ chức. Đây là một lý do nữa để giữ nhật ký kiểm thử của riêng bạn khớp với những gì họ sẽ thấy.',
      ],
    },
  ],

  'mod-found-windows': [
    {
      headingVi: 'Registry là cơ sở dữ liệu cấu hình của hệ thống',
      paragraphsVi: [
        'Registry lưu cấu hình của hệ điều hành và của phần lớn ứng dụng. Nó được tổ chức theo cây, với các nhánh dành cho máy và nhánh dành cho từng người dùng.',
        'Với người kiểm thử ứng dụng desktop, registry là nơi cần khảo sát đầu tiên sau hệ thống tệp: nhiều ứng dụng lưu đường dẫn, chuỗi kết nối và đôi khi cả thông tin xác thực ở đó. Quyền ghi vào một khoá mà tiến trình đặc quyền đọc là một dạng leo thang đặc quyền cổ điển.',
      ],
    },
    {
      headingVi: 'Dịch vụ và token truy cập',
      paragraphsVi: [
        'Windows dùng token truy cập để mô tả danh tính và đặc quyền của một tiến trình. Token chứa định danh người dùng, các nhóm, và danh sách đặc quyền được bật.',
        'Dịch vụ chạy dưới tài khoản hệ thống có token rất mạnh. Vì vậy mọi kênh giao tiếp mà dịch vụ đó phơi ra — named pipe, socket cục bộ, giao diện COM — đều là ranh giới đặc quyền cần được kiểm tra danh tính bên gọi.',
      ],
    },
    {
      headingVi: 'macOS ở mức đủ dùng',
      paragraphsVi: [
        'Với người làm mobile và desktop, cần biết macOS có mô hình quyền riêng gồm cơ chế kiểm soát truy cập theo từng loại tài nguyên, cơ chế cách ly ứng dụng, và kho khoá của hệ điều hành.',
        'Bạn không cần thành thạo macOS ngay từ đầu, nhưng cần biết rằng kết quả kiểm thử trên một hệ điều hành không tự động áp dụng cho hệ điều hành khác. Đây là điều phải ghi rõ trong báo cáo.',
      ],
    },
  ],

  // ── B2: Mạng ────────────────────────────────────────────────────────
  'mod-found-tcpip': [
    {
      headingVi: 'Đường đi của một gói tin',
      paragraphsVi: [
        'Khi máy bạn gửi dữ liệu tới một máy chủ ở xa, dữ liệu đi qua nhiều tầng: ứng dụng đóng gói nội dung, tầng vận chuyển thêm thông tin cổng và độ tin cậy, tầng mạng thêm địa chỉ nguồn và đích, tầng liên kết đưa nó lên đường truyền vật lý.',
        'Hiểu chuỗi này giải thích rất nhiều thứ sau đó: vì sao địa chỉ nguồn mà máy chủ nhìn thấy có thể không phải địa chỉ thật của bạn, vì sao một số phép thử ở tầng mạng không đi qua được proxy, và vì sao bắt gói ở máy bạn chỉ thấy phần lưu lượng liên quan tới máy bạn.',
      ],
    },
    {
      headingVi: 'TCP, UDP và ICMP khác nhau ở đâu',
      paragraphsVi: [
        'TCP thiết lập kết nối bằng bắt tay ba bước, đảm bảo thứ tự và độ tin cậy. Vì có bắt tay, việc một cổng TCP mở hay đóng là quan sát được rõ ràng.',
        'UDP không có bắt tay. Điều này khiến việc xác định trạng thái cổng UDP khó hơn nhiều và dễ cho kết quả sai — một lý do quan trọng để không tin ngay vào kết quả quét cổng UDP.',
        'ICMP dùng để báo lỗi và chẩn đoán. Nhiều mạng chặn ICMP, nên việc không nhận được phản hồi không chứng minh máy đích không tồn tại.',
      ],
    },
    {
      headingVi: 'NAT, proxy và địa chỉ nhìn thấy được',
      paragraphsVi: [
        'NAT, load balancer, reverse proxy và CDN đều làm một việc chung: địa chỉ mà máy chủ ứng dụng nhìn thấy không phải địa chỉ thật của client.',
        'Điều này có hai hệ quả cho công việc của bạn. Thứ nhất, các biện pháp bảo mật dựa trên địa chỉ nguồn thường không đáng tin. Thứ hai, khi bạn báo cáo một vấn đề liên quan tới địa chỉ, hãy nêu rõ bạn quan sát từ vị trí nào trong chuỗi.',
      ],
    },
  ],

  'mod-found-dns-tls': [
    {
      headingVi: 'Phân giải DNS từng bước',
      paragraphsVi: [
        'Khi bạn nhập một tên miền, máy tính hỏi một máy chủ DNS đệ quy, máy chủ này lần lượt hỏi các máy chủ có thẩm quyền cho tới khi nhận được câu trả lời, rồi lưu đệm kết quả trong một khoảng thời gian nhất định.',
        'Việc lưu đệm ở nhiều tầng giải thích vì sao hai người ở hai nơi có thể nhận được câu trả lời khác nhau cho cùng một tên miền, và vì sao kết quả tra cứu của bạn có thể đã cũ. Khi kết luận về cấu hình DNS, hãy tính tới điều này.',
      ],
    },
    {
      headingVi: 'Bản ghi trỏ tới tài nguyên không còn kiểm soát',
      paragraphsVi: [
        'Một dạng vấn đề phổ biến: tổ chức tạo tên miền con trỏ tới dịch vụ của nhà cung cấp, sau đó ngừng dùng dịch vụ nhưng quên xoá bản ghi DNS. Tài nguyên ở phía nhà cung cấp được giải phóng, và người khác có thể yêu cầu chính tài nguyên đó.',
        'Dấu hiệu nhận biết là tên miền con trả về trang lỗi của nhà cung cấp cho biết tài nguyên chưa được cấu hình. Khi gặp tình huống này, đừng tự đăng ký tài nguyên đích để chứng minh — việc đó đưa bạn vào vị trí kiểm soát một tài sản mang thương hiệu của tổ chức khác. Báo cáo dấu hiệu là đủ.',
      ],
    },
    {
      headingVi: 'Bắt tay TLS và chuỗi tin cậy',
      paragraphsVi: [
        'Bắt tay TLS làm ba việc: thoả thuận phiên bản giao thức và bộ mã, xác thực danh tính máy chủ bằng chứng chỉ, và tạo khoá phiên để mã hoá dữ liệu sau đó.',
        'Chứng chỉ chỉ có ý nghĩa khi chuỗi tin cậy dẫn tới một cơ quan cấp phát mà client tin. Vì vậy khi bạn cài chứng chỉ của một proxy chặn bắt vào máy mình, bạn đang thay đổi mô hình tin cậy của chính máy đó — hãy gỡ nó sau khi học xong.',
      ],
    },
    {
      headingVi: 'SNI và nhiều site trên một địa chỉ',
      paragraphsVi: [
        'SNI cho phép client nói cho máy chủ biết nó muốn kết nối tới tên miền nào ngay trong bắt tay, trước khi chứng chỉ được chọn. Nhờ đó một địa chỉ IP phục vụ được rất nhiều tên miền với các chứng chỉ khác nhau.',
        'Hệ quả trực tiếp cho việc xác định phạm vi: một địa chỉ IP không nói lên tổ chức nào sở hữu dịch vụ. Đây là nền tảng của nguyên tắc không được suy ra quyền sở hữu từ địa chỉ IP.',
      ],
    },
  ],

  // ── B3: Web ─────────────────────────────────────────────────────────
  'mod-found-http': [
    {
      headingVi: 'Cấu trúc một cặp request và response',
      paragraphsVi: [
        'Một request HTTP gồm dòng đầu với method và đường dẫn, một tập header, và tuỳ chọn phần thân. Response gồm dòng trạng thái, header, và thân.',
        'Mọi thứ trong request đều do client kiểm soát: đường dẫn, tham số truy vấn, mọi header, cookie, và thân. Câu này nghe hiển nhiên nhưng là gốc rễ của phần lớn lỗ hổng web — bất cứ khi nào máy chủ tin vào một phần nào đó của request mà không kiểm tra, sẽ có vấn đề.',
      ],
      example: {
        language: 'http',
        content:
          'GET /api/invoices/1042 HTTP/1.1\nHost: lab.example\nCookie: session=<gia-tri-phien>\nAccept: application/json\n\nHTTP/1.1 200 OK\nContent-Type: application/json\nCache-Control: private, no-store\n\n{"id":1042,"owner":"user-a","total":"120.00"}',
        captionVi:
          'Ví dụ do dự án tự soạn. Chú ý: định danh 1042 nằm trong đường dẫn và do client kiểm soát — đây là điểm khởi đầu của mọi phép thử phân quyền ở mức đối tượng.',
      },
    },
    {
      headingVi: 'Cookie và các thuộc tính bảo mật',
      paragraphsVi: [
        'Cookie là cách phổ biến nhất để duy trì phiên. Ba thuộc tính quyết định mức bảo vệ của nó, và mỗi thuộc tính giải quyết một vấn đề khác nhau.',
      ],
      bulletsVi: [
        'HttpOnly: mã JavaScript trong trang không đọc được cookie. Đây là lý do cookie phiên an toàn hơn localStorage khi có XSS.',
        'Secure: chỉ gửi cookie qua kênh đã mã hoá.',
        'SameSite: hạn chế việc gửi cookie kèm request đến từ site khác, làm giảm bối cảnh khai thác CSRF nhưng không xoá bỏ nó.',
      ],
    },
    {
      headingVi: 'Status code và ý nghĩa với phân quyền',
      paragraphsVi: [
        'Hai mã dễ nhầm nhất là 401 và 403. Mã 401 nói "tôi chưa biết bạn là ai"; mã 403 nói "tôi biết bạn là ai nhưng bạn không được phép". Khác biệt này chính là khác biệt giữa xác thực và phân quyền, thể hiện ngay ở tầng giao thức.',
        'Khi kiểm thử phân quyền, sự khác nhau về mã trạng thái giữa hai vai trò là tín hiệu quan trọng. Nhưng cẩn thận: một số hệ thống trả về 404 thay vì 403 để không tiết lộ sự tồn tại của tài nguyên, nên 404 không phải lúc nào cũng có nghĩa là không tồn tại.',
      ],
    },
    {
      headingVi: 'Cache và các lớp trung gian',
      paragraphsVi: [
        'Giữa trình duyệt và máy chủ ứng dụng thường có nhiều lớp: cache trình duyệt, CDN, reverse proxy, cache tầng ứng dụng. Mỗi lớp quyết định lưu đệm dựa trên một tập thành phần của request gọi là khoá cache.',
        'Khi một thành phần ảnh hưởng tới nội dung phản hồi nhưng không nằm trong khoá cache, phản hồi dành cho một người có thể được phục vụ cho người khác. Đây là nền tảng của nhóm vấn đề đầu độc cache mà bạn sẽ học sau.',
      ],
    },
  ],

  'mod-found-browser-model': [
    {
      headingVi: 'Origin là đơn vị cách ly của web',
      paragraphsVi: [
        'Một origin gồm ba phần: scheme, host và port. Đổi bất kỳ phần nào cũng tạo ra origin khác. Đường dẫn không thuộc origin — đây là chi tiết mà người mới hay nhầm.',
        'Same-origin policy ngăn tài liệu của origin này đọc dữ liệu phản hồi của origin khác. Điểm mấu chốt: nó không ngăn việc gửi request. Trình duyệt vẫn gửi, kèm cookie, chỉ là không cho mã đọc kết quả. Chính khoảng trống này tạo ra CSRF.',
      ],
    },
    {
      headingVi: 'CORS nới lỏng có kiểm soát',
      paragraphsVi: [
        'CORS là cơ chế để máy chủ nói với trình duyệt rằng một origin cụ thể được phép đọc phản hồi. Nó nới lỏng same-origin policy chứ không thay thế.',
        'Cấu hình sai nguy hiểm nhất là phản chiếu lại origin của bên gọi rồi đồng thời cho phép gửi thông tin xác thực. Khi đó bất kỳ site nào cũng đọc được dữ liệu người dùng đã đăng nhập. Việc chỉ cần đọc header phản hồi là đủ để phát hiện khiến đây là một trong những vấn đề dễ kiểm tra nhất.',
      ],
    },
    {
      headingVi: 'Nơi lưu dữ liệu trong trình duyệt',
      paragraphsVi: [
        'Trình duyệt có nhiều kho lưu trữ: cookie, localStorage, sessionStorage, IndexedDB, và cache của service worker. Điểm khác biệt bảo mật lớn nhất là cookie có thể được đánh dấu HttpOnly còn các kho kia thì không.',
        'Hệ quả: token phiên lưu trong localStorage bị đọc bởi bất kỳ XSS nào, trong khi cookie HttpOnly thì không. Đây là lý do khuyến nghị thường thấy là dùng cookie HttpOnly cho phiên và tránh lưu token nhạy cảm ở kho mà script đọc được.',
      ],
    },
    {
      headingVi: 'Service worker là bề mặt tồn tại lâu',
      paragraphsVi: [
        'Service worker chạy nền, chặn được request của trang trong phạm vi nó đăng ký, và tiếp tục tồn tại sau khi tab đóng. Đó là công cụ mạnh cho hiệu năng và khả năng dùng ngoại tuyến.',
        'Về mặt bảo mật, điều đáng chú ý là phạm vi đăng ký. Một service worker đăng ký ở gốc site kiểm soát mọi trang của site đó. Nếu kẻ tấn công đăng ký được service worker, ảnh hưởng kéo dài hơn nhiều so với một lần thực thi mã thông thường.',
      ],
    },
  ],

  // ── B4: Lập trình và dữ liệu ────────────────────────────────────────
  'mod-found-reading-code': [
    {
      headingVi: 'Mục tiêu là đọc hiểu, không phải viết thành thạo',
      paragraphsVi: [
        'Bạn không cần thành thạo mọi ngôn ngữ. Bạn cần đọc đủ để trả lời ba câu hỏi: dữ liệu từ bên ngoài đi vào ở đâu, nó bị biến đổi thế nào, và nó kết thúc ở đâu.',
        'Ba câu hỏi này gọi là mô hình nguồn, biến đổi và điểm nhận. Nó là khung tư duy chung của cả việc đọc mã thủ công lẫn công cụ phân tích tĩnh, và nó áp dụng được cho mọi ngôn ngữ.',
      ],
    },
    {
      headingVi: 'Điểm nhận nguy hiểm theo ngôn ngữ',
      paragraphsVi: [
        'Mỗi ngôn ngữ có một tập hàm mà khi dữ liệu không tin cậy chạm tới, hậu quả nghiêm trọng. Học tập hàm này cho ngôn ngữ bạn hay gặp là cách nhanh nhất để đọc mã có mục tiêu.',
      ],
      bulletsVi: [
        'Hàm ghép chuỗi để tạo truy vấn cơ sở dữ liệu.',
        'Hàm gọi shell hoặc tạo tiến trình con.',
        'Hàm mở tệp với đường dẫn dựng từ đầu vào.',
        'Hàm biên dịch hoặc đánh giá template từ chuỗi.',
        'Hàm khôi phục đối tượng từ dữ liệu tuần tự hoá.',
        'Hàm ghi HTML dạng chuỗi vào DOM.',
      ],
    },
    {
      headingVi: 'Đi ngược từ điểm nhận thường nhanh hơn',
      paragraphsVi: [
        'Số điểm nhận nguy hiểm trong một dự án thường ít hơn nhiều so với số điểm vào. Vì vậy chiến lược hiệu quả là tìm hết các điểm nhận trước, rồi với mỗi điểm nhận, lần ngược lên xem có đường nào đi tới nó từ dữ liệu bên ngoài không.',
        'Cách này cũng giúp bạn tránh lạc: đi xuôi từ điểm vào, bạn phải theo dõi vô số nhánh; đi ngược từ điểm nhận, mỗi lần bạn chỉ theo một chuỗi.',
      ],
    },
  ],

  'mod-found-encoding': [
    {
      headingVi: 'Ba khái niệm hay bị gọi chung là "mã hoá"',
      paragraphsVi: [
        'Encoding chuyển dữ liệu sang một dạng biểu diễn khác để truyền hoặc lưu; nó có thể đảo ngược và không cần khoá. Hashing tạo giá trị đại diện một chiều. Encryption bảo vệ tính bí mật và cần khoá để giải.',
        'Gọi nhầm ba thứ này dẫn tới đánh giá sai nghiêm trọng. Một giá trị được biểu diễn dạng base64 không hề được bảo vệ — nó chỉ được biểu diễn khác đi. Nếu bạn thấy báo cáo nào nói "dữ liệu đã được mã hoá bằng base64", đó là dấu hiệu người viết chưa nắm khái niệm.',
      ],
    },
    {
      headingVi: 'Chuẩn hoá phải xảy ra trước khi kiểm tra',
      paragraphsVi: [
        'Cùng một nội dung có thể được biểu diễn theo nhiều cách khác nhau. Nếu hệ thống kiểm tra trước rồi mới chuẩn hoá, kiểm tra đó có thể bị vượt qua bằng một biểu diễn khác của cùng giá trị.',
        'Đây chính là nguyên nhân gốc của path traversal và của rất nhiều cách vượt bộ lọc. Quy tắc thực hành: chuẩn hoá một lần, tại một nơi xác định, rồi mới kiểm tra.',
      ],
    },
    {
      headingVi: 'Unicode và những bất ngờ của nó',
      paragraphsVi: [
        'Unicode cho phép cùng một ký tự hiển thị được tạo từ nhiều chuỗi mã khác nhau. Quá trình chuẩn hoá Unicode gộp chúng lại, và trong quá trình đó, hai chuỗi khác nhau có thể trở thành bằng nhau.',
        'Hệ quả với bảo mật: một kiểm tra so sánh chuỗi trước khi chuẩn hoá có thể cho kết quả khác với sau khi chuẩn hoá. Điều này ảnh hưởng tới việc so khớp tên người dùng, tên miền và đường dẫn.',
      ],
    },
    {
      headingVi: 'Nhiều lớp giải mã chồng nhau',
      paragraphsVi: [
        'Trong một hệ thống thật, dữ liệu thường đi qua nhiều lớp: proxy giải mã URL một lần, framework giải mã lần nữa, rồi ứng dụng giải mã thêm lần nữa cho một trường cụ thể.',
        'Mỗi lớp giải mã là một cơ hội để một chuỗi vô hại ở lớp trước trở thành chuỗi có ý nghĩa cú pháp ở lớp sau. Khi phân tích, hãy luôn hỏi: dữ liệu này được giải mã bao nhiêu lần trước khi tới điểm nhận?',
      ],
    },
  ],

  'mod-found-crypto-basics': [
    {
      headingVi: 'Chọn công cụ theo mục tiêu',
      paragraphsVi: [
        'Trước khi hỏi "dùng thuật toán nào", hãy hỏi "tôi cần bảo vệ điều gì". Ba mục tiêu khác nhau cần ba nhóm công cụ khác nhau.',
      ],
      bulletsVi: [
        'Tính bí mật: cần mã hoá, đối xứng hoặc bất đối xứng tuỳ tình huống.',
        'Tính toàn vẹn: cần hàm băm có khoá hoặc chữ ký số.',
        'Xác thực nguồn gốc: cần chữ ký số hoặc mã xác thực thông điệp.',
      ],
    },
    {
      headingVi: 'Băm mật khẩu khác băm thông thường',
      paragraphsVi: [
        'Hàm băm thông thường được thiết kế để chạy nhanh. Đó chính xác là điều bạn không muốn khi băm mật khẩu, vì nhanh nghĩa là kẻ tấn công thử được nhiều tổ hợp mỗi giây.',
        'Hàm băm mật khẩu được thiết kế để chậm một cách có kiểm soát và tiêu tốn bộ nhớ, kèm giá trị ngẫu nhiên riêng cho từng mật khẩu. Khi rà soát mã, thấy mật khẩu được băm bằng một hàm băm nhanh thông thường là một phát hiện đáng báo cáo.',
      ],
    },
    {
      headingVi: 'Chữ ký số trong thực tế',
      paragraphsVi: [
        'Chữ ký số cho phép bất kỳ ai có khoá công khai xác minh rằng dữ liệu đến từ người giữ khoá riêng và chưa bị sửa. Nó là nền của chứng chỉ TLS, của token danh tính, và của việc ký bản cập nhật phần mềm.',
        'Điểm quan trọng: xác minh chữ ký chỉ có ý nghĩa nếu bên xác minh biết chắc khoá công khai nào là đúng. Nếu kẻ tấn công cung cấp được cả dữ liệu lẫn khoá dùng để xác minh, chữ ký không bảo vệ được gì. Bạn sẽ gặp lại chính xác vấn đề này ở phần JWT.',
      ],
    },
  ],

  // ── B5: Git và SDLC ─────────────────────────────────────────────────
  'mod-found-git': [
    {
      headingVi: 'Git lưu lịch sử, không lưu trạng thái cuối',
      paragraphsVi: [
        'Mỗi commit là một ảnh chụp toàn bộ cây tệp tại một thời điểm, liên kết với commit cha. Điều này nghĩa là mọi phiên bản của mọi tệp đều còn trong repository, kể cả sau khi bạn xoá nội dung ở commit mới.',
        'Hệ quả trực tiếp và quan trọng: xoá một bí mật khỏi tệp rồi commit không xoá bí mật đó khỏi lịch sử. Nó vẫn đọc được bởi bất kỳ ai clone repository.',
      ],
    },
    {
      headingVi: 'Khi tìm thấy bí mật trong lịch sử',
      paragraphsVi: [
        'Việc đúng đắn là báo cáo qua kênh riêng tư và đề nghị xoay vòng bí mật đó. Việc sai là dùng nó để kiểm chứng xem còn hiệu lực không — đó là truy cập trái phép.',
        'Trong báo cáo, hãy mô tả phạm vi quyền của bí mật dựa trên tên biến và ngữ cảnh sử dụng, chứ không dựa trên việc thử. Nhấn mạnh rằng xoá khỏi mã là chưa đủ; phải xoay vòng vì bí mật đã nằm trong lịch sử công khai.',
      ],
    },
    {
      headingVi: 'Pull request là một ranh giới tin cậy',
      paragraphsVi: [
        'Khi một dự án nhận đóng góp từ bên ngoài, mã của người lạ đi vào quy trình của dự án. Nếu quy trình đó tự động chạy mã ấy với quyền và bí mật của dự án, ranh giới tin cậy đã bị vượt qua.',
        'Đây là nền tảng của phần chuỗi cung ứng mà bạn sẽ học sau. Ở đây chỉ cần ghi nhớ: pull request từ fork là mã không tin cậy.',
      ],
    },
  ],

  'mod-found-sdlc': [
    {
      headingVi: 'Từ commit tới môi trường sản xuất',
      paragraphsVi: [
        'Một pipeline điển hình gồm: lấy mã, cài phụ thuộc, chạy kiểm thử, đóng gói artifact, đẩy artifact lên nơi lưu trữ, rồi triển khai. Mỗi bước là một cơ hội để bí mật xuất hiện và một cơ hội để bị can thiệp.',
        'Vẽ được pipeline này cho một dự án cụ thể là bài tập giá trị nhất của module. Khi đã có sơ đồ, câu hỏi bảo mật trở nên rõ ràng: bí mật nào có mặt ở bước nào, ai kích hoạt được bước đó, và artifact đi đâu sau khi tạo ra.',
      ],
    },
    {
      headingVi: 'SBOM trả lời gì và không trả lời gì',
      paragraphsVi: [
        'SBOM liệt kê thành phần có trong một sản phẩm, kèm phiên bản và quan hệ phụ thuộc. Nó trả lời câu hỏi "sản phẩm này chứa gì".',
        'Nó không trả lời câu hỏi "sản phẩm này có bị ảnh hưởng không". Một thư viện có lỗ hổng nhưng đường mã dẫn tới phần lỗi không bao giờ được gọi thì sản phẩm không bị ảnh hưởng. Nhầm lẫn hai câu hỏi này là nguồn gốc của rất nhiều báo cáo bị đóng là informative.',
      ],
    },
    {
      headingVi: 'Threat modeling làm trước khi viết mã',
      paragraphsVi: [
        'Threat modeling là hoạt động ngồi lại, vẽ hệ thống, đánh dấu trust boundary, rồi hỏi với mỗi ranh giới: điều gì được kiểm tra ở đây, và nếu kiểm tra đó thất bại thì sao.',
        'Với người nghiên cứu, giá trị của việc hiểu threat modeling là nó cho bạn đúng khung tư duy để lập bản đồ một hệ thống lạ. Bạn làm cùng một việc, chỉ khác là làm từ bên ngoài và sau khi hệ thống đã tồn tại.',
      ],
    },
  ],

  // ── B6: Mô hình bảo mật ─────────────────────────────────────────────
  'mod-found-authn-authz-model': [
    {
      headingVi: 'Ba câu hỏi khác nhau',
      paragraphsVi: [
        'Xác thực trả lời "bạn là ai". Phân quyền trả lời "bạn được làm gì". Ghi nhận trả lời "ai đã làm gì".',
        'Nhầm lẫn hai khái niệm đầu là lỗi thiết kế phổ biến nhất trong ứng dụng web. Hệ thống biết chắc bạn là người dùng đã đăng nhập, nhưng khi bạn yêu cầu một tài nguyên cụ thể, nó không kiểm tra tài nguyên đó có thuộc về bạn không. Đó chính là IDOR.',
      ],
    },
    {
      headingVi: 'Bốn mức phân quyền cần kiểm tra riêng',
      paragraphsVi: [
        'Phân quyền không phải một thứ duy nhất. Nó có nhiều mức, và một hệ thống có thể làm đúng mức này nhưng sai mức khác.',
      ],
      bulletsVi: [
        'Mức chức năng: bạn có được gọi chức năng này không.',
        'Mức đối tượng: bạn có được thao tác trên đối tượng cụ thể này không.',
        'Mức thuộc tính: bạn có được đọc hoặc ghi trường này của đối tượng không.',
        'Mức người thuê: đối tượng này có thuộc tổ chức của bạn không.',
      ],
    },
    {
      headingVi: 'Đặc quyền tối thiểu quyết định thiệt hại tối đa',
      paragraphsVi: [
        'Nguyên tắc này nói: mỗi danh tính chỉ nên có đúng quyền cần thiết cho nhiệm vụ của nó. Giá trị thực tế của nó là giới hạn thiệt hại khi một danh tính bị chiếm.',
        'Đây là khuyến nghị khắc phục xuất hiện nhiều nhất trong báo cáo bảo mật, từ tài khoản cơ sở dữ liệu của ứng dụng web, tới vai trò trên cloud, tới quyền của workflow trong CI. Câu hỏi luôn giống nhau: nếu thông tin xác thực này lộ ra, kẻ có nó làm được gì?',
      ],
    },
    {
      headingVi: 'Thiếu ghi nhận khiến điều tra bất khả thi',
      paragraphsVi: [
        'Khi có sự cố, tổ chức cần trả lời: chuyện gì đã xảy ra, ai làm, khi nào, và ảnh hưởng tới dữ liệu nào. Không có log đầy đủ thì không câu nào trả lời được.',
        'Vì vậy khoảng trống log là một phát hiện đáng báo cáo, đặc biệt ở mặt phẳng điều khiển của hệ thống cloud. Nhưng lưu ý mặt ngược lại: log không được chứa mật khẩu, token, khoá hay dữ liệu cá nhân không cần thiết.',
      ],
    },
  ],

  'mod-found-threat-model': [
    {
      headingVi: 'Trust boundary là nơi cần đặt câu hỏi',
      paragraphsVi: [
        'Trust boundary là ranh giới nơi mức độ tin cậy đối với dữ liệu hoặc mã thay đổi. Gần như mọi lỗ hổng đều nằm ở một ranh giới như vậy, nơi việc kiểm tra bị thiếu, bị đặt sai phía, hoặc bị làm hai lần theo hai cách khác nhau.',
        'Nguyên tắc quan trọng: kiểm tra phải nằm ở phía tin cậy của ranh giới. Kiểm tra ở phía không tin cậy có thể bị bỏ qua hoàn toàn. Và kiểm tra ở cả hai phía với logic khác nhau còn tạo ra một loại vấn đề mới là bất đồng bộ.',
      ],
    },
    {
      headingVi: 'Bắt đầu từ dữ liệu, không từ công nghệ',
      paragraphsVi: [
        'Khi lập bản đồ một hệ thống lạ, câu hỏi đầu tiên không phải "họ dùng framework gì" mà là "dữ liệu nào có giá trị ở đây, ai được xem, ai được sửa".',
        'Từ câu trả lời đó, bạn suy ra được các vai trò cần quan tâm, các ranh giới cần kiểm tra, và thứ tự ưu tiên. Cách tiếp cận từ công nghệ dẫn tới việc thử ngẫu nhiên các kỹ thuật đã biết; cách tiếp cận từ dữ liệu dẫn tới việc tìm ra lỗi có tác động thật.',
      ],
    },
    {
      headingVi: 'Rủi ro không đồng nghĩa với tác động',
      paragraphsVi: [
        'Tác động mô tả hậu quả nếu điều xấu xảy ra. Khả năng xảy ra mô tả xác suất nó xảy ra. Rủi ro kết hợp cả hai.',
        'Một lỗ hổng có tác động rất lớn nhưng đòi hỏi điều kiện gần như không thể đạt được có thể có rủi ro thấp hơn một lỗi tác động vừa phải nhưng ai cũng khai thác được. Khi viết phần tác động trong báo cáo, hãy nêu cả điều kiện cần — điều đó thể hiện bạn hiểu sự khác biệt này.',
      ],
    },
    {
      headingVi: 'Từ ranh giới thành danh sách câu hỏi',
      paragraphsVi: [
        'Bài tập thực hành của module: vẽ sơ đồ một hệ thống bạn có quyền phân tích, đánh dấu mọi trust boundary, rồi với mỗi ranh giới viết ra ba câu hỏi kiểm thử cụ thể.',
        'Danh sách câu hỏi đó chính là checklist riêng của bạn cho hệ thống đó. Nó có giá trị hơn bất kỳ checklist chung nào vì nó phản ánh đúng kiến trúc thật.',
      ],
    },
  ],

  // ── C: Phương pháp kiểm thử ─────────────────────────────────────────
  'mod-method-asset-mapping': [
    {
      headingVi: 'Kết quả là sơ đồ, không phải danh sách hostname',
      paragraphsVi: [
        'Nhiều người mới hiểu recon là thu thập càng nhiều tên miền càng tốt. Cách hiểu đó dẫn tới một danh sách dài mà không biết làm gì tiếp.',
        'Mục tiêu thật là một sơ đồ hệ thống có chú thích: những thành phần nào tồn tại, chúng nói chuyện với nhau ra sao, có những vai trò người dùng nào, dữ liệu nào chảy ở đâu, và ranh giới tin cậy nằm chỗ nào.',
      ],
    },
    {
      headingVi: 'Bắt đầu bằng tài khoản và vai trò',
      paragraphsVi: [
        'Trước khi thử bất cứ điều gì, hãy tạo tài khoản thử nghiệm cho từng vai trò mà chính sách cho phép. Không có ít nhất hai tài khoản, bạn không kiểm thử phân quyền được một cách an toàn.',
        'Nếu sản phẩm có khái niệm tổ chức hoặc workspace, hãy tạo hai tổ chức riêng biệt. Ranh giới giữa các tổ chức thường quan trọng hơn ranh giới giữa các người dùng, và vi phạm nó có tác động lớn hơn nhiều.',
      ],
    },
    {
      headingVi: 'Đi qua toàn bộ tính năng trước khi thử',
      paragraphsVi: [
        'Dùng ứng dụng như một người dùng thật, một lượt từ đầu tới cuối, trước khi chạm vào bất cứ thứ gì. Ghi lại mọi tính năng, mọi endpoint quan sát được, và vai trò nào gọi được endpoint nào.',
        'Bước này nhìn có vẻ chậm nhưng tiết kiệm thời gian rất nhiều về sau. Nó cũng giúp bạn tránh vô tình chạm vào chức năng nguy hiểm mà bạn chưa hiểu hậu quả.',
      ],
    },
    {
      headingVi: 'Tính năng ít người dùng là nơi đáng chú ý',
      paragraphsVi: [
        'Các luồng chính của sản phẩm thường được kiểm thử kỹ vì chúng ảnh hưởng tới doanh thu. Các tính năng phụ thì không.',
      ],
      bulletsVi: [
        'Nhập và xuất dữ liệu.',
        'Giao diện quản trị tổ chức.',
        'Tích hợp với dịch vụ bên thứ ba và webhook.',
        'Chức năng mời thành viên và quản lý quyền.',
        'Tính năng cũ còn tồn tại vì lý do tương thích.',
      ],
    },
  ],

  'mod-method-passive-active': [
    {
      headingVi: 'Ranh giới giữa hai loại khám phá',
      paragraphsVi: [
        'Khám phá bị động sử dụng dữ liệu đã công khai sẵn: hồ sơ DNS công khai, thông tin tổ chức, tài liệu mà chính công ty xuất bản. Bạn không gửi request nào tới hạ tầng của họ.',
        'Khám phá chủ động gửi request tới tài sản. Đây là lúc bạn bắt đầu tương tác với hệ thống của người khác, và là lúc phạm vi trở nên quan trọng về mặt pháp lý.',
      ],
    },
    {
      headingVi: 'Vì sao ranh giới này quan trọng',
      paragraphsVi: [
        'Trước khi bạn chắc chắn một tài sản nằm trong phạm vi, chỉ nên dừng ở khám phá bị động. Sau khi đã xác nhận, mới chuyển sang chủ động.',
        'Đảo ngược thứ tự này là cách người mới vô tình kiểm thử tài sản của tổ chức khác. Một tên miền con trông giống thuộc về công ty A có thể thực chất trỏ tới hạ tầng của nhà cung cấp B.',
      ],
    },
    {
      headingVi: 'Certificate transparency ở mức khái niệm',
      paragraphsVi: [
        'Khi một chứng chỉ TLS được cấp, nó được ghi vào các nhật ký công khai để bất kỳ ai cũng kiểm tra được. Mục đích ban đầu là phát hiện chứng chỉ cấp sai.',
        'Hệ quả phụ là các nhật ký này cho thấy tên miền nào từng được cấp chứng chỉ. Đây là nguồn dữ liệu công khai, nên tra cứu nó là khám phá bị động. Nhưng việc một tên miền xuất hiện ở đó không có nghĩa nó nằm trong phạm vi của bạn.',
      ],
    },
    {
      headingVi: 'Phần mềm này không chạy recon giúp bạn',
      paragraphsVi: [
        'BountyAtlas VN không có ô nhập mục tiêu và không thực hiện bất kỳ request nào tới hạ tầng bên thứ ba. Đây là ràng buộc kiến trúc chứ không phải tính năng còn thiếu.',
        'Lý do: một công cụ nhận mục tiêu tuỳ ý và tự đi truy vấn sẽ khiến người học dễ dàng chạm vào hệ thống ngoài phạm vi mà không kịp suy nghĩ. Mọi việc lập bản đồ trong dự án này đều là thủ công và có ý thức.',
      ],
    },
  ],

  'mod-method-workflow': [
    {
      headingVi: 'Quy trình có thứ tự, và thứ tự có lý do',
      paragraphsVi: [
        'Đọc chính sách trước tiên vì nó quyết định mọi thứ sau đó có hợp pháp hay không. Lập sơ đồ trước khi thử vì thử mà không có sơ đồ là thử ngẫu nhiên. Xác minh trước khi ghi bằng chứng vì bằng chứng cho một dương tính giả là bằng chứng vô giá trị.',
      ],
      bulletsVi: [
        'Đọc chính sách và xác định phạm vi.',
        'Chọn tài sản cụ thể để làm việc trong phiên này.',
        'Lập sơ đồ hệ thống, vai trò và dữ liệu.',
        'Đánh dấu trust boundary.',
        'Chọn checklist phù hợp với ngữ cảnh.',
        'Thực hiện phép thử tối thiểu, có giả thuyết trước.',
        'Dừng ngay nếu chạm điều kiện dừng.',
        'Xác minh lại để loại dương tính giả.',
        'Ghi bằng chứng ở mức tối thiểu, đã che.',
        'Viết báo cáo.',
        'Retest sau khi được thông báo đã vá.',
      ],
    },
    {
      headingVi: 'Mỗi phép thử phải có giả thuyết trước',
      paragraphsVi: [
        'Trước khi gửi một request, hãy viết ra một câu: tôi đang kiểm tra điều gì, và tôi kỳ vọng thấy gì nếu giả thuyết đúng, thấy gì nếu sai.',
        'Thói quen này thay đổi chất lượng công việc rất nhiều. Nó ngăn bạn thử ngẫu nhiên, giúp bạn nhận ra kết quả bất ngờ, và cho bạn sẵn nội dung để viết báo cáo sau này.',
      ],
    },
    {
      headingVi: 'Bước dừng không phải tuỳ chọn',
      paragraphsVi: [
        'Bước "dừng nếu vượt giới hạn" nằm giữa quy trình, không phải ở cuối. Nó là một bước bắt buộc phải cân nhắc sau mỗi phép thử.',
        'Câu hỏi để tự kiểm tra trước mỗi phép thử: nếu phép thử này thành công, điều xấu nhất có thể xảy ra là gì? Nếu câu trả lời liên quan tới dữ liệu người thật hoặc tính khả dụng của dịch vụ, hãy tìm cách chứng minh khác.',
      ],
    },
  ],

  'mod-method-false-positive': [
    {
      headingVi: 'Một quan sát bất thường chưa phải lỗ hổng',
      paragraphsVi: [
        'Giữa "tôi thấy điều gì đó lạ" và "đây là lỗ hổng" có một khoảng cách, và khoảng cách đó là công việc xác minh.',
        'Bỏ qua bước này dẫn tới báo cáo bị đóng, mất uy tín, và tệ hơn là thói quen tin vào ấn tượng đầu tiên. Người nghiên cứu có kỷ luật xác minh mọi thứ ít nhất hai lần bằng hai cách độc lập.',
      ],
    },
    {
      headingVi: 'Nguyên nhân phổ biến của dương tính giả',
      paragraphsVi: [
        'Phần lớn dương tính giả đến từ một số ít nguyên nhân lặp đi lặp lại. Biết chúng giúp bạn loại trừ nhanh.',
      ],
      bulletsVi: [
        'Cache ở một tầng nào đó trả về phản hồi cũ.',
        'Khác biệt giữa các môi trường hoặc giữa các máy chủ sau load balancer.',
        'Trạng thái riêng của tài khoản bạn đang dùng, không phải hành vi chung.',
        'Phiên đăng nhập còn hiệu lực từ lần thử trước.',
        'Kết quả của công cụ chưa được kiểm chứng thủ công.',
        'Hiểu nhầm về mô hình sản phẩm — hành vi đó đúng như thiết kế.',
      ],
    },
    {
      headingVi: 'Quy trình xác minh tối thiểu',
      paragraphsVi: [
        'Tái hiện trong một phiên trình duyệt hoàn toàn sạch, không dùng lại phiên cũ. Nếu vẫn thấy, tái hiện bằng một tài khoản khác cùng vai trò để loại trừ trạng thái riêng.',
        'Nếu phát hiện liên quan tới phân quyền, hãy kiểm tra cả chiều ngược lại: tài khoản B có truy cập được đối tượng của A không? Nếu cả hai chiều đều được thì có thể đây là hành vi thiết kế chứ không phải lỗi.',
      ],
    },
    {
      headingVi: 'Biết khi nào nên bỏ một giả thuyết',
      paragraphsVi: [
        'Có lúc bạn dành nhiều giờ cho một giả thuyết và không chứng minh được. Việc đúng đắn là ghi lại điều đã thử rồi chuyển sang hướng khác, không phải cố ép bằng chứng cho khớp.',
        'Ghi lại các giả thuyết đã loại trừ có giá trị riêng: nó ngăn bạn thử lại cùng thứ sau vài tuần, và đôi khi trở thành manh mối khi bạn hiểu hệ thống rõ hơn.',
      ],
    },
  ],

  'mod-method-evidence': [
    {
      headingVi: 'Bằng chứng đủ dùng, không phải đầy đủ nhất',
      paragraphsVi: [
        'Tiêu chuẩn của bằng chứng tốt là: người khác tái hiện được, và bạn không phải giữ dữ liệu của người lạ.',
        'Hai tiêu chuẩn này thường mâu thuẫn với bản năng. Bản năng nói càng nhiều bằng chứng càng thuyết phục. Thực tế là một bản ghi đã che kèm lập luận rõ ràng thuyết phục hơn một tệp dump, và an toàn hơn nhiều cho cả bạn lẫn tổ chức.',
      ],
    },
    {
      headingVi: 'Ba dạng bằng chứng theo thứ tự ưu tiên',
      paragraphsVi: [
        'Chọn dạng nhẹ nhất đủ để chứng minh. Chỉ leo lên dạng nặng hơn khi dạng nhẹ không đủ.',
      ],
      bulletsVi: [
        'Bước tái hiện bằng lời: nhẹ nhất, an toàn nhất, thường đủ cho phần lớn trường hợp.',
        'Ảnh chụp một phần đã che thông tin định danh: dùng khi cần cho thấy trạng thái giao diện.',
        'Bản ghi request và response đã che: dùng khi chi tiết giao thức là quan trọng.',
      ],
    },
    {
      headingVi: 'Che trước khi lưu, không phải sau',
      paragraphsVi: [
        'Một khi dữ liệu chưa che đã nằm trên đĩa của bạn, nó là dữ liệu bạn đang giữ, kể cả khi bạn định che nó sau. Hãy che ngay tại thời điểm chụp.',
        'Ứng dụng này cảnh báo khi ghi chú của bạn chứa chuỗi trông giống token, khoá hay cookie phiên. Đó là lớp hỗ trợ, không phải bộ lọc — trách nhiệm cuối vẫn thuộc về bạn.',
      ],
    },
    {
      headingVi: 'Ghi lại việc xoá',
      paragraphsVi: [
        'Sau khi báo cáo được xử lý, xoá dữ liệu đã tiếp xúc và ghi lại thời điểm xoá. Nhiều chính sách yêu cầu điều này tường minh.',
        'Trong báo cáo, phần này nằm ở mục hành động giảm thiểu. Nó cho tổ chức biết dữ liệu không còn nằm ngoài tầm kiểm soát của họ, và điều đó ảnh hưởng trực tiếp tới nghĩa vụ thông báo của họ.',
      ],
    },
  ],

  'mod-method-proxy': [
    {
      headingVi: 'Proxy chặn bắt hoạt động thế nào',
      paragraphsVi: [
        'Proxy chặn bắt đứng giữa trình duyệt và máy chủ. Trình duyệt gửi request tới proxy, proxy cho bạn xem và sửa, rồi mới chuyển tiếp. Phản hồi đi ngược lại theo cùng đường.',
        'Với lưu lượng HTTPS, proxy phải tạo chứng chỉ riêng cho từng tên miền và bạn phải cài chứng chỉ gốc của proxy vào kho tin cậy của máy. Đây là thay đổi thật đối với mô hình tin cậy của máy bạn — hãy dùng hồ sơ trình duyệt riêng và gỡ chứng chỉ sau khi học xong.',
      ],
    },
    {
      headingVi: 'Đặt phạm vi trong công cụ khớp với phạm vi trong chính sách',
      paragraphsVi: [
        'Công cụ proxy cho phép giới hạn phạm vi hoạt động. Hãy đặt phạm vi này khớp chính xác với danh sách tài sản trong chính sách chương trình.',
        'Điều này ngăn hai rủi ro: bạn vô tình gửi request tới tài sản ngoài phạm vi, và nhật ký của bạn bị lẫn lưu lượng không liên quan khiến việc trích bằng chứng khó khăn.',
      ],
    },
    {
      headingVi: 'DevTools cho phần chạy trong trình duyệt',
      paragraphsVi: [
        'Proxy thấy lưu lượng mạng; DevTools thấy điều xảy ra bên trong trang. Bạn cần cả hai vì nhiều logic quan trọng nằm hoàn toàn ở phía client và không tạo ra request nào.',
        'Kỹ năng cần luyện: lần theo một thao tác của người dùng từ sự kiện giao diện, qua mã JavaScript xử lý, tới request được gửi đi. Chuỗi này cho bạn hiểu ứng dụng thật sự làm gì, thay vì đoán từ bên ngoài.',
      ],
    },
    {
      headingVi: 'Điều công cụ không nói cho bạn',
      paragraphsVi: [
        'Việc bạn sửa được một giá trị trong DevTools hay trong proxy không chứng minh điều gì. Đó là trình duyệt của chính bạn, và bạn toàn quyền với nó.',
        'Câu hỏi quyết định luôn là: máy chủ có chấp nhận giá trị đã sửa không? Chỉ khi câu trả lời là có thì mới có một phát hiện.',
      ],
    },
  ],

  'mod-method-tool-output': [
    {
      headingVi: 'Output là giả thuyết, không phải kết luận',
      paragraphsVi: [
        'Mọi công cụ đều đưa ra phán đoán dựa trên tín hiệu gián tiếp. Trình quét mạng suy ra dịch vụ từ banner. Trình phân tích tĩnh suy ra đường đi dữ liệu từ cấu trúc mã. Trình quét web suy ra lỗ hổng từ khác biệt phản hồi.',
        'Mỗi suy luận đó có thể sai, và sai theo cách mà công cụ không biết. Vì vậy mọi phát hiện của công cụ đều cần được xác minh thủ công trước khi trở thành nội dung báo cáo.',
      ],
    },
    {
      headingVi: 'Ví dụ điển hình: banner phiên bản',
      paragraphsVi: [
        'Trình quét báo máy chủ chạy phiên bản X của phần mềm Y, và phiên bản X có lỗ hổng đã biết. Kết luận "hệ thống này bị ảnh hưởng" là sai.',
        'Lý do: nhiều bản phân phối áp dụng bản vá ngược mà không đổi số phiên bản hiển thị. Banner cũng có thể được cấu hình tuỳ ý hoặc bị làm giả. Và ngay cả khi phần mềm thật sự chưa vá, đường mã chứa lỗi có thể không bao giờ được gọi trong cấu hình hiện tại.',
      ],
    },
    {
      headingVi: 'Vì sao kết quả quét thô bị coi là spam',
      paragraphsVi: [
        'Khi bạn dán nguyên bảng kết quả của một công cụ vào báo cáo, bạn đang chuyển toàn bộ gánh nặng xác minh sang chương trình. Nhiều chương trình đóng ngay các báo cáo dạng này.',
        'Tiêu chuẩn tối thiểu để một phát hiện từ công cụ trở thành báo cáo: bạn đã tự tái hiện bằng tay, đã xác định nguyên nhân gốc, và đã mô tả được tác động cụ thể trong ngữ cảnh này.',
      ],
    },
    {
      headingVi: 'Ghi lại phiên bản và tham số',
      paragraphsVi: [
        'Khi báo cáo có liên quan tới công cụ, hãy ghi phiên bản công cụ và tham số đã dùng. Kết quả của cùng một công cụ có thể khác nhau giữa các phiên bản.',
        'Thông tin này giúp người xác minh tái hiện đúng điều kiện của bạn, và thể hiện bạn hiểu rằng kết quả phụ thuộc vào cách chạy chứ không phải sự thật tuyệt đối.',
      ],
    },
  ],
};
