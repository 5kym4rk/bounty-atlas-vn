import type { LessonSection } from '@/schemas/entities';

/**
 * Thân bài học cho domain M (code review), N (supply chain), O (IoT),
 * P (wireless), Q (automotive), R (ICS/OT), S (web3), T (AI), U (extension),
 * V (SaaS), W (privacy) và X (emerging).
 * Nội dung do dự án tự biên soạn. Không sao chép nguyên văn từ nguồn nào.
 */
export const advancedLessons: Record<string, LessonSection[]> = {
  // ── M: Code review ──────────────────────────────────────────────────
  'mod-code-source-sink': [
    {
      headingVi: 'Ba khái niệm là toàn bộ phương pháp',
      paragraphsVi: [
        'Nguồn là nơi dữ liệu không tin cậy đi vào chương trình. Biến đổi là các phép xử lý dữ liệu đi qua. Điểm nhận là nơi dữ liệu được dùng theo cách có hệ quả.',
        'Một lỗ hổng tồn tại khi có đường đi từ một nguồn tới một điểm nhận mà trên đường đó không có phép biến đổi nào thực sự vô hiệu hoá được rủi ro của ngữ cảnh đích.',
      ],
    },
    {
      headingVi: 'Liệt kê điểm vào cho đủ',
      paragraphsVi: [
        'Người mới thường chỉ nghĩ tới tham số HTTP. Nhưng dữ liệu không tin cậy vào chương trình theo nhiều đường.',
      ],
      bulletsVi: [
        'Tham số, header, cookie và thân của request.',
        'Thông điệp lấy từ hàng đợi.',
        'Tệp do người dùng tải lên.',
        'Dữ liệu đọc từ cơ sở dữ liệu mà trước đó do người dùng ghi vào.',
        'Phản hồi từ dịch vụ bên thứ ba.',
        'Tham số dòng lệnh và biến môi trường trong công cụ nội bộ.',
        'Nội dung của webhook nhận từ ngoài.',
      ],
    },
    {
      headingVi: 'Phép biến đổi trông giống làm sạch nhưng không phải',
      paragraphsVi: [
        'Đây là chỗ dễ nhầm nhất khi đọc mã. Một hàm có tên gợi ý việc làm sạch chưa chắc phù hợp với ngữ cảnh mà dữ liệu sẽ tới.',
        'Ví dụ điển hình: hàm thoát ký tự cho ngữ cảnh HTML không bảo vệ gì khi dữ liệu kết thúc trong một truy vấn cơ sở dữ liệu. Câu hỏi luôn phải là: phép biến đổi này có phù hợp với ngữ cảnh đích không?',
        'Một mẫu khác cần chú ý: dữ liệu được làm sạch rồi sau đó bị giải mã lại, khiến việc làm sạch mất tác dụng.',
      ],
      example: {
        language: 'python',
        content:
          '# Nguon: tham so truy van\n# Diem nhan: mo tep voi duong dan dung tu du lieu nguoi dung\ndef export(request):\n    name = request.GET["file"]\n    path = os.path.join(BASE_DIR, name)\n    return open(path).read()\n\n# Sua: chuan hoa truoc, roi kiem tra ket qua nam trong thu muc cho phep\ndef export_safe(request):\n    name = request.GET["file"]\n    path = os.path.realpath(os.path.join(BASE_DIR, name))\n    if not path.startswith(os.path.realpath(BASE_DIR) + os.sep):\n        raise PermissionError\n    return open(path).read()',
        captionVi:
          'Ví dụ do dự án tự soạn. Chú ý thứ tự: chuẩn hoá đường dẫn trước, rồi mới kiểm tra kết quả — không phải ngược lại.',
      },
    },
    {
      headingVi: 'Đi ngược thường nhanh hơn đi xuôi',
      paragraphsVi: [
        'Số điểm nhận nguy hiểm trong một dự án thường ít hơn nhiều so với số điểm vào. Tìm hết điểm nhận trước, rồi với mỗi cái lần ngược lên xem có tới được từ bên ngoài không.',
        'Cách này cũng giúp bạn không lạc: đi xuôi phải theo dõi vô số nhánh, đi ngược mỗi lần chỉ theo một chuỗi.',
      ],
    },
  ],

  'mod-code-authz-review': [
    {
      headingVi: 'Tìm lớp kiểm tra tập trung trước',
      paragraphsVi: [
        'Việc đầu tiên khi rà soát phân quyền là xác định dự án có lớp kiểm tra tập trung không, và nếu có thì nó nằm ở đâu trong chuỗi xử lý.',
        'Nếu kiểm tra nằm rải rác ở từng hàm xử lý, gần như chắc chắn sẽ có chỗ bị bỏ sót. Đó không phải phỏng đoán bi quan mà là quan sát thực tế: con người quên, và không có gì nhắc họ.',
      ],
    },
    {
      headingVi: 'Tìm đường đi vòng qua lớp kiểm tra',
      paragraphsVi: ['Ngay cả khi có lớp tập trung, thường vẫn có những đường không đi qua nó.'],
      bulletsVi: [
        'Endpoint được đăng ký ở nơi khác với phần lớn endpoint.',
        'Xử lý thông điệp từ hàng đợi, thường không đi qua lớp trung gian của web.',
        'Tác vụ chạy theo lịch.',
        'Giao diện dòng lệnh dùng cho vận hành.',
        'Endpoint dành cho kiểm tra tình trạng hoặc gỡ lỗi.',
        'Mã cũ còn lại từ trước khi lớp tập trung được xây dựng.',
      ],
    },
    {
      headingVi: 'Xử lý lỗi và ghi log',
      paragraphsVi: [
        'Hai mẫu cần tìm khi đọc phần xử lý lỗi. Thứ nhất là lỗi bị nuốt: khối bắt lỗi trống hoặc chỉ ghi log rồi tiếp tục, khiến một kiểm tra bảo mật thất bại nhưng chương trình vẫn chạy tiếp như không có gì.',
        'Thứ hai là lỗi để lộ quá nhiều: thông báo trả về người dùng chứa cấu trúc truy vấn, đường dẫn hệ thống hoặc dấu vết ngăn xếp.',
        'Về ghi log, nguyên tắc là ghi đủ để điều tra được nhưng không ghi mật khẩu, token, khoá hay dữ liệu cá nhân không cần thiết. Đồng thời dữ liệu người dùng đưa vào log phải được xử lý để không chèn được dòng giả.',
      ],
    },
    {
      headingVi: 'Vùng có trạng thái dùng chung',
      paragraphsVi: [
        'Mã xử lý đồng thời hoặc dùng chung trạng thái giữa các request là nơi sinh ra lỗi khó tái hiện. Tìm các biến ở phạm vi toàn cục, bộ nhớ đệm dùng chung, và các thao tác đọc rồi ghi tách rời.',
        'Đây cũng là nơi các lỗi kiểu điều kiện tranh chấp mà bạn học ở phần web có gốc rễ trong mã.',
      ],
    },
  ],

  'mod-code-diff-review': [
    {
      headingVi: 'Bản vá nói cho bạn biết điều gì đã sai',
      paragraphsVi: [
        'Một bản vá bảo mật là câu trả lời cho câu hỏi "chỗ này sai ở đâu", được viết bởi người hiểu hệ thống rõ nhất. Đọc nó là cách học nhanh nhất về các lỗi thật trong dự án thật.',
        'Cách đọc hiệu quả: nhìn thay đổi, rồi tự diễn đạt lại nguyên nhân gốc bằng lời của mình trước khi đọc mô tả chính thức. Nếu bạn diễn đạt được, bạn đã hiểu.',
      ],
    },
    {
      headingVi: 'Nhận ra bản vá chỉ chữa triệu chứng',
      paragraphsVi: [
        'Một số bản vá chặn đúng cách khai thác được báo cáo mà không xử lý nguyên nhân sâu hơn. Dấu hiệu nhận biết khá rõ.',
      ],
      bulletsVi: [
        'Thêm một điều kiện kiểm tra ngay tại chỗ xảy ra lỗi thay vì sửa logic sinh ra tình huống đó.',
        'Chặn một chuỗi ký tự cụ thể thay vì thay đổi cách dữ liệu được xử lý.',
        'Sửa một hàm trong khi các hàm tương tự bên cạnh vẫn giữ nguyên mẫu cũ.',
        'Không có test hồi quy đi kèm.',
      ],
    },
    {
      headingVi: 'Đọc changelog cùng với mã',
      paragraphsVi: [
        'Ghi chú phát hành đôi khi mô tả một thay đổi bằng ngôn ngữ trung tính trong khi mã cho thấy đó là một bản vá bảo mật. Đọc cả hai giúp bạn hiểu bối cảnh.',
        'Ngược lại, một thay đổi được mô tả là cải tiến hiệu năng đôi khi thực chất sửa một vấn đề về tiêu thụ tài nguyên. Sự chênh lệch giữa mô tả và mã là thông tin có giá trị.',
      ],
    },
    {
      headingVi: 'Trách nhiệm khi đọc bản vá công khai',
      paragraphsVi: [
        'Bản vá được công bố không có nghĩa mọi người dùng đã cập nhật. Khoảng thời gian giữa lúc vá và lúc triển khai rộng rãi là lúc hệ thống dễ tổn thương nhất.',
        'Vì vậy không dùng thông tin từ bản vá để tấn công hệ thống chưa cập nhật. Việc học từ bản vá là hợp pháp; việc dùng nó nhắm vào hệ thống của người khác thì không.',
      ],
    },
  ],

  'mod-code-variant-analysis': [
    {
      headingVi: 'Một lỗi hiếm khi đứng một mình',
      paragraphsVi: [
        'Khi một lập trình viên viết sai một mẫu ở một chỗ, khả năng cao họ đã viết cùng mẫu đó ở chỗ khác. Và khi một mẫu sai được sao chép trong dự án, nó lan ra nhiều nơi.',
        'Vì vậy sau khi hiểu nguyên nhân gốc của một lỗi, bước tiếp theo có giá trị nhất không phải là tìm lỗi mới hoàn toàn, mà là tìm mọi nơi khác có cùng mẫu.',
      ],
    },
    {
      headingVi: 'Từ nguyên nhân gốc thành mẫu tìm kiếm',
      paragraphsVi: [
        'Chuyển hiểu biết thành một mẫu tìm kiếm áp dụng được cho toàn dự án. Mức độ tinh vi của mẫu tuỳ vào công cụ bạn có.',
      ],
      bulletsVi: [
        'Đơn giản nhất: tìm kiếm chuỗi cho tên hàm hoặc mẫu cú pháp đặc trưng.',
        'Tốt hơn: truy vấn dựa trên cấu trúc cú pháp, không phụ thuộc cách viết.',
        'Tốt nhất: truy vấn theo luồng dữ liệu, tìm mọi đường từ một loại nguồn tới một loại điểm nhận.',
      ],
    },
    {
      headingVi: 'Xác minh từng kết quả',
      paragraphsVi: [
        'Mẫu tìm kiếm cho ra danh sách ứng viên, không phải danh sách lỗ hổng. Mỗi kết quả phải được đọc trong ngữ cảnh của nó.',
        'Gửi hàng loạt báo cáo chưa xác minh là cách nhanh nhất để mất uy tín với maintainer. Với mỗi biến thể, hãy viết được một test case chứng minh nó thật trước khi báo cáo.',
      ],
    },
    {
      headingVi: 'Báo cáo theo nhóm',
      paragraphsVi: [
        'Khi tìm được nhiều biến thể của cùng một nguyên nhân gốc, thường tốt hơn nếu báo cáo chúng cùng nhau kèm phân tích chung.',
        'Điều này giúp maintainer sửa toàn bộ nhóm một lần và thêm quy tắc phát hiện tự động, thay vì vá từng chỗ. Nó cũng thể hiện bạn hiểu vấn đề ở mức hệ thống chứ không chỉ ở mức từng dòng mã.',
      ],
    },
  ],

  'mod-code-sast': [
    {
      headingVi: 'Công cụ định hướng, người xác minh',
      paragraphsVi: [
        'Công cụ phân tích tĩnh giỏi ở việc quét toàn bộ mã và tìm mẫu — việc mà con người làm chậm và dễ bỏ sót. Nó dở ở việc hiểu ngữ cảnh nghiệp vụ.',
        'Vì vậy vai trò đúng của công cụ là thu hẹp không gian tìm kiếm, không phải đưa ra kết luận. Kết quả của nó là danh sách chỗ đáng đọc, không phải danh sách lỗ hổng.',
      ],
    },
    {
      headingVi: 'Truy vấn theo luồng dữ liệu',
      paragraphsVi: [
        'Công cụ mạnh cho phép mô tả truy vấn theo mô hình nguồn và điểm nhận: khai báo những gì được coi là nguồn không tin cậy, những gì là điểm nhận nguy hiểm, và những gì được coi là phép làm sạch hợp lệ.',
        'Chất lượng của truy vấn phụ thuộc vào việc khai báo phép làm sạch đúng. Khai báo thiếu thì nhiều dương tính giả; khai báo thừa thì bỏ sót lỗi thật.',
      ],
    },
    {
      headingVi: 'Điều chỉnh cho từng dự án',
      paragraphsVi: [
        'Truy vấn mặc định được viết cho trường hợp chung. Một dự án cụ thể luôn có quy ước riêng: hàm làm sạch tự viết, lớp bọc quanh thư viện, và cách tổ chức điểm vào riêng.',
        'Dành thời gian dạy công cụ về những quy ước đó là đầu tư có lãi: tỷ lệ dương tính giả giảm mạnh và công cụ bắt được những lỗi mà cấu hình mặc định bỏ qua.',
      ],
    },
    {
      headingVi: 'Không bao giờ gửi kết quả thô',
      paragraphsVi: [
        'Đây là nguyên tắc đã nêu ở phần phương pháp và cần nhắc lại: kết quả công cụ chưa xác minh không phải báo cáo.',
        'Tiêu chuẩn tối thiểu để một cảnh báo trở thành báo cáo: bạn đã đọc mã xung quanh, xác nhận đường đi từ bên ngoài là có thật, và mô tả được tác động cụ thể.',
      ],
    },
  ],

  'mod-code-oss-disclosure': [
    {
      headingVi: 'Tìm kênh báo cáo theo thứ tự',
      paragraphsVi: [
        'Trước khi báo cáo, hãy tìm kênh riêng tư theo thứ tự ưu tiên. Chỉ khi không tìm được kênh nào mới cân nhắc phương án khác.',
      ],
      bulletsVi: [
        'Tệp chính sách bảo mật trong repository, thường ghi rõ cách liên hệ.',
        'Chức năng báo cáo lỗ hổng riêng tư của nền tảng lưu trữ mã.',
        'Địa chỉ liên hệ bảo mật ghi trong tài liệu dự án.',
        'Liên hệ trực tiếp maintainer qua kênh riêng tư.',
      ],
    },
    {
      headingVi: 'Không mở public issue',
      paragraphsVi: [
        'Đây là quy tắc quan trọng nhất của module. Một issue công khai mô tả lỗ hổng chưa được vá đặt mọi người dùng của dự án vào rủi ro, kể từ thời điểm bạn nhấn nút.',
        'Nếu bạn đã lỡ mở, hãy ẩn hoặc xoá nội dung ngay và chuyển sang kênh riêng tư. Thời gian nội dung còn công khai càng ngắn càng tốt.',
      ],
    },
    {
      headingVi: 'Viết cho maintainer tình nguyện',
      paragraphsVi: [
        'Phần lớn dự án nguồn mở được duy trì bởi người làm ngoài giờ, không phải đội bảo mật chuyên trách. Điều này thay đổi cách viết báo cáo.',
        'Hãy làm cho việc xác nhận dễ nhất có thể: reproducer tối thiểu, mô tả rõ phiên bản bị ảnh hưởng, và nếu được thì đề xuất bản vá kèm test. Giọng văn nên hợp tác, không nên đặt ra thời hạn cứng ngay từ đầu.',
      ],
    },
    {
      headingVi: 'Thoả thuận thời gian công bố',
      paragraphsVi: [
        'Sau khi maintainer xác nhận, hãy thống nhất một mốc thời gian hợp lý cho việc công bố. Mốc đó nên tính tới việc dự án cần thời gian phát hành và người dùng cần thời gian cập nhật.',
        'Nếu dự án không phản hồi trong thời gian dài, việc công bố cuối cùng vẫn có thể là lựa chọn đúng vì lợi ích của người dùng. Nhưng đó là quyết định cần cân nhắc kỹ và nên đi kèm nhiều lần liên hệ được ghi lại.',
      ],
    },
  ],

  // ── N: Supply chain ─────────────────────────────────────────────────
  'mod-supply-dependencies': [
    {
      headingVi: 'Phần lớn mã trong sản phẩm không do dự án viết',
      paragraphsVi: [
        'Một ứng dụng hiện đại thường có nhiều phụ thuộc bắc cầu hơn phụ thuộc trực tiếp rất nhiều lần. Nghĩa là phần lớn mã chạy trong sản phẩm được viết bởi người mà đội phát triển chưa từng gặp.',
        'Đây không phải lý do để hoảng sợ, mà là lý do để có quy trình: biết mình đang dùng gì, biết chúng đến từ đâu, và biết cách phản ứng khi một trong số đó có vấn đề.',
      ],
    },
    {
      headingVi: 'Lockfile bảo vệ điều gì',
      paragraphsVi: [
        'Tệp khoá phiên bản ghi lại chính xác phiên bản nào đã được cài, thường kèm giá trị băm để xác minh nội dung. Nó đảm bảo mọi lần cài đều cho ra cùng một tập mã.',
        'Điều nó bảo vệ: việc một phiên bản mới được xuất bản làm thay đổi hành vi build mà không ai chủ ý.',
        'Điều nó không bảo vệ: nếu phiên bản đã ghim vốn đã có vấn đề, lockfile khoá cứng vấn đề đó lại. Vì vậy ghim phiên bản phải đi kèm quy trình cập nhật có kiểm soát.',
      ],
    },
    {
      headingVi: 'Nhầm lẫn nguồn gói',
      paragraphsVi: [
        'Khi trình quản lý gói được cấu hình tìm ở nhiều nơi, thứ tự ưu tiên trở nên quan trọng. Nếu nó ưu tiên nguồn công khai hoặc chuyển sang nguồn công khai khi không tìm thấy ở nguồn nội bộ, một gói cùng tên trên nguồn công khai có thể được cài thay cho gói nội bộ.',
        'Biện pháp phòng vệ: cấu hình để gói thuộc namespace nội bộ chỉ được tìm ở nguồn nội bộ, dùng namespace riêng đã đăng ký, và ghim phiên bản kèm kiểm tra giá trị băm.',
        'Về mặt thực hành: chỉ kiểm chứng điều này trên nguồn lưu trữ của chính bạn. Không xuất bản gói lên nguồn công khai với tên gói nội bộ của tổ chức khác — đó là hành vi nhắm vào hạ tầng của họ.',
      ],
    },
    {
      headingVi: 'Nhận biết gói giả mạo',
      paragraphsVi: [
        'Gói với tên gần giống gói phổ biến là một dạng tấn công dựa vào lỗi gõ của người dùng. Ở đây bạn học để nhận biết và phòng thủ, không phải để thực hiện.',
        'Dấu hiệu cần chú ý khi rà soát danh sách phụ thuộc: tên gần giống một gói phổ biến, mới được xuất bản gần đây, ít lượt tải, không có kho mã nguồn công khai, hoặc có mã chạy trong bước cài đặt.',
      ],
    },
  ],

  'mod-supply-provenance': [
    {
      headingVi: 'Bốn mức bảo đảm cho quá trình build',
      paragraphsVi: [
        'Khung tiêu chuẩn phổ biến định nghĩa các mức tăng dần, mỗi mức bổ sung một bảo đảm cụ thể. Hiểu chúng giúp bạn đánh giá quy trình phát hành của một dự án một cách có cấu trúc.',
      ],
      bulletsVi: [
        'Mức không: không có bảo đảm nào, phù hợp cho build thử nghiệm trên máy cá nhân.',
        'Mức một: có bản ghi mô tả artifact được build thế nào — nền tảng, quy trình, và đầu vào chính. Giúp phát hiện sai sót nhưng chưa chống được can thiệp.',
        'Mức hai: build chạy trên hạ tầng chuyên dụng chứ không phải máy cá nhân, và bản ghi được ký để ràng buộc với hạ tầng đó. Chống được việc sửa bản ghi sau khi build.',
        'Mức ba: nền tảng build có biện pháp mạnh ngăn các lần chạy ảnh hưởng lẫn nhau và ngăn bí mật lọt vào các bước do người dùng định nghĩa. Chống được can thiệp ngay trong lúc build.',
      ],
    },
    {
      headingVi: 'SBOM và provenance trả lời hai câu hỏi khác nhau',
      paragraphsVi: [
        'Danh mục thành phần trả lời: sản phẩm này chứa gì. Bản ghi nguồn gốc trả lời: artifact này được tạo ra từ đâu và bằng quy trình nào.',
        'Cả hai cần thiết nhưng không thay thế nhau. Bạn có thể biết đầy đủ thành phần mà vẫn không biết artifact đang chạy có đúng là artifact được build từ mã nguồn đó không.',
      ],
    },
    {
      headingVi: 'Ký và minh bạch',
      paragraphsVi: [
        'Ký artifact cho phép người dùng xác minh nó đến từ dự án. Nhưng chữ ký chỉ có ý nghĩa nếu người xác minh biết chắc khoá công khai nào là đúng — vấn đề bạn đã gặp ở phần token.',
        'Các hệ thống hiện đại giải quyết bằng cách ghi mọi chữ ký vào một nhật ký công khai chỉ thêm không sửa, để việc cấp chữ ký bất thường có thể bị phát hiện.',
      ],
    },
    {
      headingVi: 'Đánh giá một dự án theo các tiêu chí này',
      paragraphsVi: [
        'Bài tập thực hành: chọn một dự án nguồn mở bạn dùng, rồi trả lời các câu hỏi sau bằng chứng cứ từ repository của nó.',
        'Build chạy ở đâu? Có bản ghi nguồn gốc không? Bản phát hành có được ký không? Ai có quyền xuất bản? Quy trình xét duyệt thay đổi ra sao? Câu trả lời cho bạn một bức tranh khá đầy đủ về mức rủi ro chuỗi cung ứng khi dùng dự án đó.',
      ],
    },
  ],

  'mod-supply-cicd-trust': [
    {
      headingVi: 'Ranh giới quan trọng nhất',
      paragraphsVi: [
        'Trong một dự án nhận đóng góp từ bên ngoài, ranh giới tin cậy quan trọng nhất nằm giữa mã của người đóng góp và quy trình có quyền của dự án.',
        'Nếu quy trình tự động chạy mã của người lạ với quyền ghi hoặc với bí mật của dự án, ranh giới đó đã bị vượt qua ngay từ thiết kế.',
      ],
    },
    {
      headingVi: 'Loại kích hoạt quyết định mức quyền',
      paragraphsVi: [
        'Các nền tảng tự động hoá thường có nhiều loại sự kiện kích hoạt, và chúng khác nhau ở chỗ quy trình chạy với quyền nào và trong ngữ cảnh nào.',
        'Loại kích hoạt chạy với quyền đầy đủ của dự án là loại nguy hiểm nhất khi kết hợp với việc lấy về mã từ nguồn không tin cậy. Khuyến nghị rõ ràng là các quy trình dùng loại kích hoạt đặc quyền không được lấy về và chạy mã không tin cậy.',
        'Một mẫu an toàn hơn là tách làm hai giai đoạn: giai đoạn đầu chạy không quyền để kiểm tra mã, giai đoạn sau chạy có quyền nhưng chỉ xử lý kết quả đã được xác minh.',
      ],
    },
    {
      headingVi: 'Chèn lệnh qua dữ liệu do người ngoài kiểm soát',
      paragraphsVi: [
        'Một dạng lỗi đặc thù của hệ thống tự động hoá: cấu hình chèn trực tiếp giá trị từ ngữ cảnh sự kiện vào một đoạn script sẽ chạy. Nếu giá trị đó do người ngoài đặt — ví dụ tiêu đề của một đề xuất thay đổi — nó trở thành lệnh.',
        'Cách phòng vệ được khuyến nghị: đưa giá trị vào một biến môi trường trung gian rồi tham chiếu biến đó trong script. Khi ấy giá trị được truyền như dữ liệu chứ không tham gia vào quá trình sinh script.',
      ],
    },
    {
      headingVi: 'Quyền mặc định và tin cậy tới hạ tầng đám mây',
      paragraphsVi: [
        'Nguyên tắc được khuyến nghị là đặt quyền mặc định của token tự động ở mức chỉ đọc, rồi nâng lên cho từng công việc cụ thể khi cần.',
        'Với cơ chế cho phép quy trình tự động lấy quyền trên hạ tầng đám mây mà không cần bí mật tĩnh, điểm mấu chốt là điều kiện trong chính sách tin cậy. Điều kiện quá lỏng có thể cho phép quy trình của một repository khác lấy được quyền trên tài khoản của bạn.',
      ],
    },
    {
      headingVi: 'Cache và artifact là kênh truyền dữ liệu',
      paragraphsVi: [
        'Các công việc trong cùng một quy trình thường chia sẻ bộ nhớ đệm và artifact. Nếu một công việc chạy mã không tin cậy ghi được vào đó, công việc sau chạy với quyền cao sẽ dùng nội dung đã bị can thiệp.',
        'Vì vậy cần tách bộ nhớ đệm và artifact theo mức tin cậy, không dùng chung giữa phần chạy mã từ ngoài và phần chạy có quyền.',
      ],
    },
  ],

  'mod-supply-secrets': [
    {
      headingVi: 'Vòng đời của một bí mật',
      paragraphsVi: [
        'Quản lý bí mật không phải một hành động mà là một vòng đời với nhiều giai đoạn, và mỗi giai đoạn có yêu cầu riêng.',
      ],
      bulletsVi: [
        'Tạo: sinh bằng nguồn ngẫu nhiên đủ mạnh, truyền qua kênh an toàn, không bao giờ ở dạng đọc được trong kênh không bảo vệ.',
        'Lưu trữ: đặt trong hệ thống quản lý bí mật, không trong mã hay tệp cấu hình.',
        'Sử dụng: cấp cho đúng thành phần cần, với phạm vi hẹp nhất.',
        'Xoay vòng: thay định kỳ để một bí mật bị đánh cắp chỉ dùng được trong thời gian ngắn. Tần suất tuỳ mục đích, từ vài phút với khoá phiên tới nhiều năm với bí mật ở mức phần cứng.',
        'Thu hồi và hết hạn: có cơ chế vô hiệu hoá ngay khi cần, và đặt thời hạn khi có thể.',
      ],
    },
    {
      headingVi: 'Nơi bí mật xuất hiện trong pipeline',
      paragraphsVi: [
        'Vẽ pipeline và đánh dấu từng chỗ bí mật có mặt là bài tập cốt lõi. Danh sách thường dài hơn người ta nghĩ.',
      ],
      bulletsVi: [
        'Biến môi trường trong bước build.',
        'Tệp cấu hình được tạo tạm thời trong quá trình chạy.',
        'Tham số dòng lệnh, có thể thấy được từ danh sách tiến trình.',
        'Nhật ký khi một lệnh in ra cấu hình để gỡ lỗi.',
        'Artifact và ảnh image được tạo ra trong quá trình.',
        'Bộ nhớ đệm dùng lại giữa các lần chạy.',
      ],
    },
    {
      headingVi: 'Khi phát hiện bí mật đã lộ',
      paragraphsVi: [
        'Thứ tự xử lý được khuyến nghị khá rõ ràng, và điểm quan trọng là thu hồi đứng trước mọi việc khác.',
      ],
      bulletsVi: [
        'Thu hồi ngay để bí mật không còn dùng được, kể cả trước khi biết ai đã thấy nó.',
        'Xoay vòng: tạo bí mật mới và triển khai, tốt nhất bằng quy trình tự động.',
        'Xoá khỏi mọi nơi nó xuất hiện, gồm cả lịch sử mã nguồn và nhật ký.',
        'Rà soát nhật ký truy cập để xác định phạm vi: ai đã có quyền truy cập và đã dùng khi nào.',
      ],
    },
    {
      headingVi: 'Không bao giờ dùng bí mật tìm được',
      paragraphsVi: [
        'Khi báo cáo, hãy mô tả phạm vi quyền của bí mật dựa trên tên biến, ngữ cảnh sử dụng và tài liệu công khai của dịch vụ tương ứng.',
        'Việc thử xem nó còn hiệu lực không là truy cập trái phép, bất kể ý định. Lập luận từ ngữ cảnh vẫn thuyết phục và giữ bạn ở phía an toàn.',
      ],
    },
  ],

  // ── O: IoT ──────────────────────────────────────────────────────────
  'mod-iot-ecosystem': [
    {
      headingVi: 'Thiết bị chỉ là một phần của hệ sinh thái',
      paragraphsVi: [
        'Người mới thường nghĩ nghiên cứu IoT nghĩa là mở thiết bị ra. Thực tế một sản phẩm IoT gồm nhiều thành phần, và thiết bị thường là phần khó tiếp cận nhất về mặt pháp lý lẫn kỹ thuật.',
        'Bề mặt dễ tiếp cận và thường có giá trị nhất là ứng dụng di động đồng hành và backend đám mây mà nó gọi tới. Toàn bộ kiến thức API và mobile của bạn áp dụng trực tiếp ở đó.',
      ],
    },
    {
      headingVi: 'Các thành phần và ranh giới giữa chúng',
      paragraphsVi: [
        'Vẽ được sơ đồ hệ sinh thái là bài tập đầu tiên. Mỗi mũi tên giữa hai thành phần là một ranh giới cần đặt câu hỏi.',
      ],
      bulletsVi: [
        'Thiết bị với firmware và bootloader.',
        'Ứng dụng di động đồng hành.',
        'Backend đám mây điều phối mọi thứ.',
        'Giao diện quản trị trên web.',
        'Dịch vụ mạng chạy ngay trên thiết bị.',
        'Máy chủ phân phối bản cập nhật.',
        'Quy trình cấp phát danh tính cho thiết bị lúc sản xuất.',
        'Giao diện gỡ lỗi phần cứng trên bo mạch.',
      ],
    },
    {
      headingVi: 'Phân quyền chéo thiết bị',
      paragraphsVi: [
        'Câu hỏi có giá trị nhất trong hệ sinh thái IoT: tài khoản của tôi có điều khiển được thiết bị của người khác không?',
        'Backend phải ràng buộc mỗi thiết bị với tài khoản sở hữu nó. Nếu định danh thiết bị nằm trong request và backend không kiểm tra quyền sở hữu, đó chính là mô hình IDOR mà bạn đã học, nhưng với tác động vật lý.',
        'Kiểm thử điều này bằng hai tài khoản và hai thiết bị của chính bạn. Dừng ngay nếu vô tình chạm tới thiết bị của người khác.',
      ],
    },
    {
      headingVi: 'Ràng buộc thực tế',
      paragraphsVi: [
        'Chỉ nghiên cứu thiết bị thuộc quyền sở hữu của bạn, hoặc thiết bị mà chương trình cấp riêng cho mục đích nghiên cứu.',
        'Mở thiết bị có thể làm mất bảo hành và gây hỏng vĩnh viễn. Với người mới, hãy bắt đầu từ ứng dụng và backend, chỉ chuyển sang phần cứng khi đã có lý do rõ ràng và chấp nhận rủi ro hỏng thiết bị.',
      ],
    },
  ],

  'mod-iot-firmware': [
    {
      headingVi: 'Lấy firmware một cách hợp pháp',
      paragraphsVi: [
        'Có vài cách hợp pháp để có được ảnh firmware, và nên ưu tiên theo thứ tự này.',
      ],
      bulletsVi: [
        'Tải từ trang hỗ trợ chính thức của nhà sản xuất.',
        'Quan sát quá trình cập nhật của thiết bị bạn sở hữu để lấy gói được tải về.',
        'Trích xuất từ thiết bị của chính bạn qua giao diện gỡ lỗi hoặc chip nhớ.',
      ],
    },
    {
      headingVi: 'Lập bản đồ nội dung ảnh',
      paragraphsVi: [
        'Sau khi trích xuất được hệ thống tệp, mục tiêu là hiểu thiết bị làm gì. Thứ tự khảo sát hiệu quả bắt đầu từ những thứ dễ đọc nhất.',
      ],
      bulletsVi: [
        'Script khởi động, cho biết dịch vụ nào chạy.',
        'Tệp cấu hình, thường lộ địa chỉ máy chủ và tham số vận hành.',
        'Tài khoản người dùng được định nghĩa sẵn trong hệ thống.',
        'Chứng chỉ và khoá nhúng trong ảnh.',
        'Chương trình chính, để phân tích sâu hơn nếu cần.',
      ],
    },
    {
      headingVi: 'Bí mật dùng chung cho cả dòng sản phẩm',
      paragraphsVi: [
        'Đây là nhóm phát hiện có tác động cao nhất trong phân tích firmware: một thông tin xác thực hoặc khoá giống nhau trên mọi thiết bị.',
        'Tác động không dừng ở một thiết bị. Ai phân tích được một chiếc mua ngoài cửa hàng sẽ có thứ dùng được với mọi chiếc khác trên thế giới.',
        'Cách khắc phục là cấp danh tính riêng cho từng thiết bị trong quá trình sản xuất. Khi báo cáo, hãy nêu rõ tác động ở mức dòng sản phẩm chứ không ở mức một thiết bị.',
      ],
    },
    {
      headingVi: 'Cơ chế cập nhật',
      paragraphsVi: [
        'Cập nhật firmware là đường thẳng tới việc thay toàn bộ phần mềm của thiết bị. Ba câu hỏi: gói được tải qua kênh nào, chữ ký có được xác minh không, và có chống được việc cài lại phiên bản cũ có lỗi không.',
        'Khái niệm khởi động an toàn mở rộng ý tưởng này xuống tận quá trình khởi động: mỗi giai đoạn xác minh giai đoạn tiếp theo trước khi trao quyền điều khiển. Nó quyết định người có quyền truy cập vật lý có thay được firmware hay không.',
      ],
    },
  ],

  'mod-iot-hardware-interfaces': [
    {
      headingVi: 'Truy cập vật lý thay đổi hoàn toàn mô hình đe doạ',
      paragraphsVi: [
        'Mọi giả định bảo mật ở tầng phần mềm đều dựa trên việc kẻ tấn công không cầm được thiết bị trong tay. Khi giả định đó không còn, mô hình đe doạ khác hẳn.',
        'Vì vậy khi đánh giá một phát hiện ở tầng phần cứng, phải nêu rõ điều kiện: cần truy cập vật lý bao lâu, cần thiết bị gì, và có để lại dấu vết không. Điều này ảnh hưởng lớn tới mức nghiêm trọng thực tế.',
      ],
    },
    {
      headingVi: 'Các giao diện thường gặp trên bo mạch',
      paragraphsVi: [
        'Nhiều bo mạch giữ lại các điểm kết nối dùng cho sản xuất và gỡ lỗi. Chúng có mục đích khác nhau.',
      ],
      bulletsVi: [
        'Giao diện nối tiếp thường cho một bảng điều khiển văn bản, đôi khi là bảng điều khiển hệ thống với quyền cao.',
        'Giao diện gỡ lỗi cho phép dừng bộ xử lý, đọc và ghi bộ nhớ.',
        'Bus nối với chip nhớ, cho phép đọc trực tiếp nội dung firmware.',
        'Cổng kết nối tiêu chuẩn có thể phơi ra chức năng gỡ lỗi ở chế độ đặc biệt.',
      ],
    },
    {
      headingVi: 'Cổng gỡ lỗi còn bật có đáng báo cáo không',
      paragraphsVi: [
        'Câu trả lời phụ thuộc vào ngữ cảnh sản phẩm và cần lập luận cụ thể chứ không có quy tắc chung.',
        'Nếu thiết bị được thiết kế đặt ở nơi công cộng hoặc nơi người ngoài tiếp cận được, cổng gỡ lỗi mở là vấn đề thật. Nếu thiết bị nằm trong nhà người dùng và kẻ tấn công đã vào được tận nơi, tác động của nó nhỏ hơn nhiều so với những việc khác họ có thể làm.',
        'Điều gần như luôn đáng báo cáo là khi cổng gỡ lỗi cho phép lấy ra bí mật dùng chung cho cả dòng sản phẩm, vì khi đó một lần truy cập vật lý ảnh hưởng tới mọi thiết bị.',
      ],
    },
    {
      headingVi: 'An toàn khi thao tác',
      paragraphsVi: [
        'Chỉ thao tác trên bo mạch hoặc thiết bị thuộc sở hữu của bạn. Có rủi ro thật về hỏng thiết bị và về điện.',
        'Không thao tác trên thiết bị đang kết nối vào mạng của người khác, và không thao tác trên thiết bị đang thực hiện chức năng có ảnh hưởng tới an toàn.',
      ],
    },
  ],

  // ── P: Wireless ─────────────────────────────────────────────────────
  'mod-wireless-ble': [
    {
      headingVi: 'Vòng đời kết nối',
      paragraphsVi: [
        'Một kết nối năng lượng thấp đi qua các giai đoạn: thiết bị phát quảng bá sự hiện diện, một bên khởi tạo kết nối, hai bên thương lượng mức bảo vệ qua quá trình ghép nối, và nếu cần thì lưu khoá lại để lần sau không phải ghép nối lại.',
        'Mức bảo vệ được thương lượng ở giai đoạn ghép nối quyết định phần lớn mức an toàn của toàn bộ phiên. Nếu quá trình đó không có xác thực, kết nối không chống được bên đứng giữa.',
      ],
    },
    {
      headingVi: 'Cấu trúc dịch vụ và thuộc tính',
      paragraphsVi: [
        'Thiết bị phơi ra dữ liệu và chức năng dưới dạng một cây các dịch vụ, mỗi dịch vụ có các đặc tính có thể đọc, ghi hoặc thông báo.',
        'Mỗi đặc tính có thể yêu cầu mức bảo vệ riêng. Phát hiện phổ biến nhất trong thiết bị tiêu dùng là một đặc tính điều khiển trạng thái thiết bị lại cho phép ghi mà không yêu cầu ghép nối có xác thực.',
        'Khảo sát cây này trên thiết bị của chính bạn là bài tập trung tâm của module.',
      ],
    },
    {
      headingVi: 'Quyền riêng tư qua dữ liệu quảng bá',
      paragraphsVi: [
        'Thiết bị phát quảng bá liên tục để được phát hiện. Nếu nội dung quảng bá chứa một định danh cố định, bất kỳ ai trong tầm thu đều theo dõi được sự hiện diện của thiết bị theo thời gian.',
        'Với thiết bị người dùng mang theo bên mình, điều này trở thành vấn đề theo dõi vị trí. Cơ chế đúng là dùng định danh thay đổi theo chu kỳ mà chỉ thiết bị đã ghép nối mới liên kết được.',
      ],
    },
    {
      headingVi: 'Ràng buộc thực hành',
      paragraphsVi: [
        'Chỉ tương tác với thiết bị của chính bạn, và tốt nhất trong môi trường che chắn để không ảnh hưởng thiết bị xung quanh.',
        'Không kết nối tới thiết bị của người khác, kể cả khi chúng đang quảng bá công khai và kể cả khi việc kết nối về mặt kỹ thuật là dễ dàng. Quảng bá công khai không phải lời mời.',
      ],
    },
  ],

  'mod-wireless-regulation': [
    {
      headingVi: 'Quy định khác nhau theo quốc gia',
      paragraphsVi: [
        'Đây là điểm quan trọng nhất của toàn bộ domain. Phổ tần vô tuyến được quản lý bởi cơ quan nhà nước, và quy định về băng tần nào được dùng, ở công suất nào, cho mục đích gì khác nhau giữa các nước.',
        'Hệ quả trực tiếp: một kỹ thuật hoàn toàn hợp pháp ở nơi này có thể là vi phạm hình sự ở nơi khác. Dự án này không mặc định bất kỳ kỹ thuật RF nào được phép ở mọi nơi.',
      ],
    },
    {
      headingVi: 'Thu thụ động khác phát chủ động',
      paragraphsVi: [
        'Việc thu tín hiệu và việc phát tín hiệu có mức ràng buộc pháp lý rất khác nhau ở hầu hết các nơi.',
        'Nhưng ngay cả với việc thu, nội dung thu được có thể thuộc phạm vi bảo vệ của quy định về quyền riêng tư và bí mật thư tín. Thu được không có nghĩa là được phép đọc, lưu hay sử dụng.',
      ],
    },
    {
      headingVi: 'Ba việc phải làm trước khi bắt đầu',
      paragraphsVi: ['Trước khi mua thiết bị hay chạy phần mềm nào, hãy hoàn thành ba việc này.'],
      bulletsVi: [
        'Xác định cơ quan quản lý tần số tại nơi bạn cư trú và tìm quy định áp dụng.',
        'Xác định băng tần nào được phép dùng không cần giấy phép và ở công suất nào.',
        'Chuẩn bị môi trường thí nghiệm hạn chế phát xạ, tốt nhất là môi trường che chắn.',
      ],
    },
    {
      headingVi: 'Ba điều tuyệt đối không làm',
      paragraphsVi: [
        'Không gây nhiễu cho thiết bị hay dịch vụ của người khác. Việc này bị cấm ở gần như mọi nơi và có thể ảnh hưởng tới dịch vụ khẩn cấp.',
        'Không truy cập mạng không dây của người khác, kể cả khi nó không có mật khẩu.',
        'Không phát ở băng tần hoặc công suất không được phép, kể cả trong thời gian ngắn để thử nghiệm.',
      ],
    },
  ],

  // ── Q: Automotive ───────────────────────────────────────────────────
  'mod-automotive-architecture': [
    {
      headingVi: 'Từ ứng dụng tới phương tiện qua đám mây',
      paragraphsVi: [
        'Khi người dùng bấm một nút trong ứng dụng di động để điều khiển xe từ xa, lệnh đó không đi thẳng tới xe. Nó đi qua backend đám mây của nhà sản xuất, rồi từ đó tới hệ thống viễn thông trên xe.',
        'Điều này rất quan trọng với người nghiên cứu: phần lớn bề mặt có thể nghiên cứu hợp pháp nằm ở ứng dụng và backend, không phải trên xe.',
      ],
    },
    {
      headingVi: 'Phân tầng bên trong phương tiện',
      paragraphsVi: [
        'Bên trong xe có nhiều bộ điều khiển nối với nhau qua các mạng nội bộ. Chúng không đồng nhất về mức quan trọng.',
        'Có nhóm liên quan tới giải trí và tiện nghi, và có nhóm liên quan tới vận hành và an toàn. Giữa hai nhóm nên có một thành phần trung gian kiểm soát luồng dữ liệu. Chất lượng của sự phân tách này là câu hỏi kiến trúc quan trọng nhất.',
      ],
    },
    {
      headingVi: 'Câu hỏi phân quyền quen thuộc trong ngữ cảnh mới',
      paragraphsVi: [
        'Ở backend, các câu hỏi giống hệt những gì bạn đã học ở phần API: tài khoản được ràng buộc với phương tiện nào, backend kiểm tra quyền sở hữu ra sao, và điều gì xảy ra khi xe đổi chủ.',
        'Câu hỏi cuối đặc biệt đáng chú ý: quy trình chuyển quyền sở hữu có thu hồi hoàn toàn quyền truy cập của chủ cũ không? Đây là nơi thường có khoảng trống.',
      ],
    },
    {
      headingVi: 'Cập nhật từ xa',
      paragraphsVi: [
        'Cơ chế cập nhật phần mềm từ xa là con đường ảnh hưởng tới toàn bộ đội xe cùng lúc. Các câu hỏi giống phần firmware: chuỗi ký, xác minh trước khi cài, và chống hạ cấp.',
        'Khác biệt là quy mô tác động và yếu tố an toàn, nên tiêu chuẩn ở đây cao hơn nhiều so với thiết bị tiêu dùng thông thường.',
      ],
    },
  ],

  'mod-automotive-safety': [
    {
      headingVi: 'An toàn con người thay đổi cách đánh giá',
      paragraphsVi: [
        'Ở các domain khác, tác động được đo bằng dữ liệu bị lộ hoặc tiền bị mất. Ở đây có thêm một chiều: hậu quả vật lý với người trong và ngoài xe.',
        'Điều này thay đổi cả cách kiểm thử lẫn cách viết báo cáo. Một phát hiện có khả năng ảnh hưởng tới vận hành phải được xử lý khẩn cấp, không theo quy trình thông thường.',
      ],
    },
    {
      headingVi: 'Ranh giới tuyệt đối',
      paragraphsVi: ['Có những việc không được làm bất kể chính sách chương trình nói gì.'],
      bulletsVi: [
        'Không thử nghiệm trên phương tiện đang vận hành, kể cả xe của chính bạn.',
        'Không can thiệp vào hệ thống liên quan tới an toàn.',
        'Không thử nghiệm trên phương tiện có người ngồi trong.',
        'Không thực hiện phép thử có thể ảnh hưởng tới xe khác trên đường.',
      ],
    },
    {
      headingVi: 'Dừng ở thao tác đọc',
      paragraphsVi: [
        'Khi nghiên cứu backend, một chiến lược an toàn là chứng minh vấn đề bằng thao tác đọc và cố ý không thử thao tác điều khiển.',
        'Nếu bạn chứng minh được rằng tài khoản A đọc được trạng thái phương tiện của tài khoản B, đó đã là một phát hiện đầy đủ. Việc thử gửi lệnh điều khiển không làm báo cáo mạnh hơn đáng kể nhưng làm tăng rủi ro rất nhiều.',
        'Trong báo cáo, hãy nêu rõ bạn đã dừng ở đâu và vì sao. Điều này thường được đánh giá cao chứ không bị coi là thiếu sót.',
      ],
    },
    {
      headingVi: 'Báo cáo khẩn cấp',
      paragraphsVi: [
        'Nếu bạn phát hiện điều gì đó có thể ảnh hưởng tới an toàn khi vận hành, hãy dừng ngay và dùng kênh khẩn cấp của chương trình thay vì quy trình gửi báo cáo thông thường.',
        'Trong tình huống đó, tốc độ quan trọng hơn sự hoàn chỉnh của báo cáo. Gửi thông tin ban đầu ngay, rồi bổ sung chi tiết sau.',
      ],
    },
  ],

  // ── R: ICS/OT ───────────────────────────────────────────────────────
  'mod-ics-architecture': [
    {
      headingVi: 'Phân tầng từ thiết bị hiện trường tới doanh nghiệp',
      paragraphsVi: [
        'Hệ thống công nghiệp được mô tả bằng một mô hình phân tầng tham chiếu, từ cảm biến và cơ cấu chấp hành ở dưới cùng, qua các bộ điều khiển, lên hệ thống giám sát và vận hành, rồi tới mạng doanh nghiệp ở trên.',
        'Giá trị của mô hình này là nó cho một ngôn ngữ chung để nói về phân đoạn. Ranh giới quan trọng nhất nằm giữa mạng doanh nghiệp và mạng vận hành.',
      ],
    },
    {
      headingVi: 'Vì sao giao thức công nghiệp thiếu xác thực',
      paragraphsVi: [
        'Nhiều giao thức điều khiển được thiết kế từ nhiều thập kỷ trước cho mạng cách ly hoàn toàn, nơi việc có mặt trong mạng đã đồng nghĩa với việc được phép.',
        'Khi các mạng này dần kết nối với hệ thống thông tin, giả định đó không còn đúng nhưng giao thức thì vẫn vậy. Đây là lý do phân đoạn mạng là biện pháp phòng thủ trung tâm trong môi trường công nghiệp — nó thay thế cho phần xác thực mà giao thức không có.',
      ],
    },
    {
      headingVi: 'Các thành phần và vai trò',
      paragraphsVi: [
        'Hiểu vai trò của từng thành phần giúp đánh giá đúng mức nghiêm trọng khi một thành phần bị ảnh hưởng.',
      ],
      bulletsVi: [
        'Bộ điều khiển khả trình thực hiện logic điều khiển trực tiếp lên quy trình.',
        'Giao diện người máy cho phép người vận hành quan sát và can thiệp.',
        'Hệ thống giám sát và thu thập dữ liệu điều phối trên phạm vi rộng.',
        'Hệ thống lưu trữ dữ liệu lịch sử phục vụ phân tích.',
        'Trạm kỹ thuật chứa phần mềm lập trình cho các bộ điều khiển.',
        'Hệ thống an toàn hoạt động độc lập để đưa quy trình về trạng thái an toàn.',
      ],
    },
    {
      headingVi: 'Trạm kỹ thuật là mục tiêu có giá trị cao',
      paragraphsVi: [
        'Máy tính chứa phần mềm lập trình thiết bị là thành phần đáng chú ý nhất, vì ai kiểm soát nó có thể thay đổi logic điều khiển của quy trình.',
        'Vì vậy khi đánh giá kiến trúc, hãy đặc biệt chú ý tới việc trạm kỹ thuật được đặt ở tầng nào và ai truy cập được nó.',
      ],
    },
  ],

  'mod-ics-safety-constraints': [
    {
      headingVi: 'Thứ tự ưu tiên đảo ngược',
      paragraphsVi: [
        'Trong hệ thống thông tin thông thường, tính bí mật thường được ưu tiên cao. Trong môi trường vận hành công nghiệp, thứ tự đảo lại: an toàn con người trước, rồi tới tính khả dụng và toàn vẹn của quy trình, cuối cùng mới tới tính bí mật.',
        'Lý do đơn giản: một hệ thống công nghiệp dừng đột ngột có thể gây nguy hiểm vật lý, trong khi dữ liệu bị lộ tuy nghiêm trọng nhưng không đe doạ tính mạng ngay lập tức.',
      ],
    },
    {
      headingVi: 'Hệ quả với cách kiểm thử',
      paragraphsVi: [
        'Nhiều kỹ thuật kiểm thử thông thường không chấp nhận được trong môi trường này. Quét cổng có thể khiến thiết bị ngừng phản hồi. Gửi gói tin không đúng định dạng có thể khiến bộ điều khiển chuyển sang trạng thái lỗi.',
        'Vì vậy nguyên tắc của module là tuyệt đối: không thử nghiệm trên hạ tầng vận hành thật. Chỉ dùng bộ mô phỏng hoặc bench lab.',
      ],
    },
    {
      headingVi: 'Hệ quả với khuyến nghị khắc phục',
      paragraphsVi: [
        'Khuyến nghị "cập nhật lên phiên bản mới nhất" thường không khả thi trong môi trường vận hành liên tục. Thiết bị có thể cần chứng nhận lại, và cửa sổ dừng máy có khi chỉ có mỗi năm một lần.',
        'Khuyến nghị hữu ích là các biện pháp bù đắp không gây gián đoạn: tăng cường phân đoạn mạng, siết kiểm soát truy cập từ xa, thêm giám sát lưu lượng giao thức điều khiển, và giới hạn quyền của trạm kỹ thuật.',
      ],
    },
    {
      headingVi: 'Truy cập từ xa của nhà cung cấp',
      paragraphsVi: [
        'Nhà cung cấp thiết bị thường cần truy cập từ xa để bảo trì. Đây là đường vào từ bên ngoài phổ biến nhất tới vùng vận hành.',
        'Các câu hỏi rà soát: truy cập đó đi qua kênh nào, được xác thực ra sao, có giới hạn thời gian không, có được ghi log không, và có bị giới hạn ở đúng thiết bị cần bảo trì không.',
      ],
    },
  ],

  // ── S: Web3 ─────────────────────────────────────────────────────────
  'mod-web3-foundations': [
    {
      headingVi: 'Mọi thứ trên chain đều công khai',
      paragraphsVi: [
        'Đây là điều đầu tiên và quan trọng nhất cần hiểu. Trạng thái của hợp đồng được lưu công khai và đọc được bởi bất kỳ ai, kể cả biến được đánh dấu là riêng tư trong mã nguồn.',
        'Từ khoá riêng tư trong ngôn ngữ chỉ giới hạn việc truy cập từ các hợp đồng khác ở mức biên dịch. Nó không mã hoá gì cả. Vì vậy không bao giờ lưu dữ liệu cần giữ bí mật lên chain.',
      ],
    },
    {
      headingVi: 'Giao dịch và tính không thể đảo ngược',
      paragraphsVi: [
        'Một giao dịch đã được xác nhận không thể hoàn tác. Không có nút hoàn tác, không có bộ phận hỗ trợ để khiếu nại.',
        'Đây là lý do ràng buộc an toàn của domain này nghiêm ngặt: chỉ testnet hoặc chain cục bộ, và luôn dùng ví riêng không chứa tài sản thật. Một lỗi nhỏ trong việc chọn mạng đích có thể gây thiệt hại không thể khắc phục.',
      ],
    },
    {
      headingVi: 'Mọi hàm công khai là một điểm vào',
      paragraphsVi: [
        'Hợp đồng không có khái niệm người dùng đã đăng nhập. Bất kỳ địa chỉ nào cũng gọi được bất kỳ hàm công khai nào, bất kỳ lúc nào, với bất kỳ tham số nào.',
        'Vì vậy bài tập rà soát cơ bản là liệt kê mọi hàm có thể thay đổi trạng thái, rồi với từng hàm hỏi: ai được phép gọi, và điều gì ngăn người khác gọi?',
      ],
    },
    {
      headingVi: 'Chi phí thực thi và giới hạn',
      paragraphsVi: [
        'Mỗi thao tác tiêu tốn một lượng tài nguyên tính toán mà người gọi phải trả, và mỗi giao dịch có trần. Điều này tạo ra một loại ràng buộc không có ở hệ thống thông thường.',
        'Hệ quả bảo mật: một vòng lặp có số lần lặp phụ thuộc dữ liệu do người dùng kiểm soát có thể khiến hàm không bao giờ thực hiện xong. Nếu hàm đó cần thiết cho việc rút tài sản, tài sản có thể bị khoá vĩnh viễn.',
      ],
    },
  ],

  'mod-web3-access-control': [
    {
      headingVi: 'Hàm thiếu kiểm soát truy cập',
      paragraphsVi: [
        'Nhóm lỗi phổ biến và nghiêm trọng nhất cũng là nhóm đơn giản nhất: một hàm thay đổi trạng thái quan trọng mà lập trình viên quên thêm điều kiện kiểm tra người gọi.',
        'Cách rà soát có hệ thống: liệt kê mọi hàm có thể gọi từ bên ngoài và có thay đổi trạng thái, rồi kiểm tra từng hàm có điều kiện kiểm soát phù hợp không. Danh sách này hữu hạn và duyệt hết được.',
      ],
    },
    {
      headingVi: 'Hàm khởi tạo trong mẫu proxy',
      paragraphsVi: [
        'Với mẫu nâng cấp bằng proxy, hợp đồng chứa logic không dùng hàm tạo thông thường mà dùng một hàm khởi tạo gọi riêng sau khi triển khai.',
        'Nếu hàm đó không được khoá sau lần gọi đầu, bất kỳ ai cũng gọi lại được và đặt mình làm chủ sở hữu. Nếu hợp đồng logic được triển khai mà chưa từng được khởi tạo, nó ở trạng thái chờ bị chiếm.',
        'Đây là mẫu lỗi lặp lại nhiều lần trong thực tế, và nó đáng được kiểm tra đầu tiên với mọi hợp đồng dùng proxy.',
      ],
    },
    {
      headingVi: 'Quyền quản trị tập trung',
      paragraphsVi: [
        'Nhiều giao thức có một địa chỉ quản trị với quyền rất lớn: đổi tham số, tạm dừng hệ thống, nâng cấp logic, hoặc rút tài sản.',
        'Đây không phải lỗi tự thân, nhưng là rủi ro tập trung cần được nêu. Câu hỏi rà soát: địa chỉ đó là ví đơn lẻ hay ví đa chữ ký, có cơ chế trì hoãn thời gian trước khi thay đổi có hiệu lực không, và người dùng có cách nào rút tài sản trước khi thay đổi được áp dụng không.',
      ],
    },
    {
      headingVi: 'Chứng minh bằng test',
      paragraphsVi: [
        'Với hợp đồng thông minh, bằng chứng thuyết phục nhất là một test chạy được: viết test cho thấy một địa chỉ không có quyền vẫn gọi được hàm và thay đổi được trạng thái.',
        'Test dễ xác minh, không mơ hồ, và cho phép đội phát triển thêm nó vào bộ kiểm thử của họ để chống hồi quy. Toàn bộ việc này thực hiện trên chain cục bộ.',
      ],
    },
  ],

  'mod-web3-reentrancy': [
    {
      headingVi: 'Cơ chế của reentrancy',
      paragraphsVi: [
        'Khi hợp đồng gọi ra một địa chỉ bên ngoài, quyền điều khiển chuyển sang địa chỉ đó. Nếu đó là một hợp đồng, nó có thể gọi ngược lại hàm ban đầu trước khi lời gọi đầu tiên kết thúc.',
        'Nếu hàm ban đầu chưa kịp cập nhật trạng thái nội bộ, lần gọi thứ hai sẽ thấy trạng thái cũ và cho phép thực hiện lại thao tác. Kết quả là một khoản có thể được rút nhiều lần.',
      ],
    },
    {
      headingVi: 'Mẫu khắc phục gốc',
      paragraphsVi: [
        'Thứ tự viết hàm quyết định vấn đề này: kiểm tra điều kiện trước, cập nhật trạng thái nội bộ tiếp theo, và gọi ra ngoài sau cùng.',
        'Với thứ tự đó, khi quyền điều khiển chuyển ra ngoài thì trạng thái đã được cập nhật, nên lần gọi lại sẽ không qua được bước kiểm tra. Khoá chống tái nhập là lớp bổ sung hữu ích, nhưng thứ tự đúng mới là biện pháp gốc.',
      ],
    },
    {
      headingVi: 'Các biến thể khó thấy hơn',
      paragraphsVi: [
        'Dạng cổ điển là gọi lại chính hàm vừa gọi. Nhưng còn hai biến thể khó phát hiện hơn khi đọc mã.',
        'Biến thể thứ nhất là gọi lại một hàm khác của cùng hợp đồng, hàm đó cùng đọc phần trạng thái chưa được cập nhật.',
        'Biến thể thứ hai xảy ra giữa nhiều hợp đồng trong cùng một hệ thống, khi chúng chia sẻ trạng thái hoặc tin vào kết quả của nhau. Loại này đòi hỏi nhìn toàn hệ thống chứ không chỉ từng hợp đồng.',
      ],
    },
    {
      headingVi: 'Lời gọi ngoài đến từ nơi không ngờ',
      paragraphsVi: [
        'Một chi tiết dễ bỏ sót: nhiều chuẩn token có cơ chế thông báo cho bên nhận khi token được chuyển. Cơ chế đó chính là một lời gọi ra ngoài.',
        'Nghĩa là một hàm trông như chỉ chuyển token, không có lời gọi ngoài rõ ràng, vẫn có thể trao quyền điều khiển cho bên nhận. Khi rà soát, hãy tính cả các lời gọi ngầm này.',
      ],
    },
  ],

  'mod-web3-economic': [
    {
      headingVi: 'Nguồn giá và chi phí thao túng',
      paragraphsVi: [
        'Nhiều giao thức cần biết giá của một tài sản. Nếu chúng đọc giá trực tiếp từ trạng thái tức thời của một nguồn thanh khoản, giá đó có thể bị tác động ngay trong cùng một giao dịch.',
        'Câu hỏi đánh giá không phải "giá có bị thao túng được không" mà là "chi phí để thao túng là bao nhiêu, so với lợi ích thu được". Nếu chi phí thấp hơn lợi ích, đó là lỗ hổng kinh tế.',
      ],
    },
    {
      headingVi: 'Số học và độ chính xác',
      paragraphsVi: [
        'Môi trường thực thi làm việc với số nguyên, nên mọi phép chia đều mất phần dư. Thứ tự của các phép tính vì thế ảnh hưởng tới kết quả.',
        'Nhân trước rồi chia cho kết quả khác với chia trước rồi nhân. Trong hệ thống xử lý giá trị tài chính, sai lệch nhỏ lặp lại nhiều lần có thể tích luỹ thành khoản đáng kể — và đó là một lỗ hổng thật, không phải chuyện làm tròn vô hại.',
      ],
    },
    {
      headingVi: 'Bất biến kinh tế',
      paragraphsVi: [
        'Cách hiệu quả nhất để tìm lỗi kinh tế là phát biểu các tính chất phải luôn đúng, rồi tìm chuỗi thao tác phá vỡ chúng.',
      ],
      bulletsVi: [
        'Tổng số dư ghi nhận của người dùng không vượt quá tài sản hợp đồng đang giữ.',
        'Không ai rút được nhiều hơn tổng số đã gửi cộng phần thưởng hợp lệ.',
        'Tổng cung token khớp với tổng số dư của mọi địa chỉ.',
        'Một vị thế đã bị thanh lý không thể bị thanh lý lần nữa.',
      ],
    },
    {
      headingVi: 'Mô tả tác động mà không gây thiệt hại',
      paragraphsVi: [
        'Chứng minh bằng test chạy trên môi trường cục bộ hoặc trên bản sao trạng thái chain, không bằng giao dịch thật.',
        'Trong báo cáo, trình bày tác động dưới dạng bất biến bị phá vỡ kèm điều kiện cần: cần bao nhiêu vốn ban đầu, cần điều kiện thị trường nào. Điều này cho phép đội phát triển đánh giá mức độ khả thi mà không cần ai thực hiện.',
      ],
    },
  ],

  'mod-web3-testing': [
    {
      headingVi: 'Bốn tầng kiểm thử',
      paragraphsVi: ['Mỗi tầng tìm ra một loại vấn đề khác nhau, và chúng bổ sung cho nhau.'],
      bulletsVi: [
        'Unit test kiểm tra một hàm với các đầu vào cụ thể mà người viết nghĩ tới.',
        'Property test kiểm tra một tính chất đúng với mọi đầu vào trong một miền.',
        'Fuzzing sinh đầu vào ngẫu nhiên để tìm trường hợp phá vỡ tính chất.',
        'Invariant test chạy chuỗi thao tác ngẫu nhiên và kiểm tra tính chất sau mỗi bước.',
      ],
    },
    {
      headingVi: 'Invariant test là công cụ mạnh nhất',
      paragraphsVi: [
        'Điểm khác biệt của invariant test: nó không kiểm tra từng hàm riêng lẻ mà kiểm tra hệ thống sau các chuỗi thao tác bất kỳ. Đây chính là cách lỗi thật xảy ra — không phải một lời gọi sai mà là một chuỗi mà không ai nghĩ tới.',
        'Viết được một bất biến tốt khó hơn viết unit test, nhưng giá trị cao hơn nhiều. Đây là kỹ năng đáng đầu tư nhất trong domain này.',
      ],
    },
    {
      headingVi: 'Chạy trên bản sao trạng thái chain',
      paragraphsVi: [
        'Công cụ phát triển cho phép tạo bản sao cục bộ của trạng thái chain thật, để test tương tác với các giao thức khác trong điều kiện gần thực tế.',
        'Điều này rất hữu ích cho việc phân tích lỗi kinh tế. Nhưng cần nhớ giới hạn: bản sao không mô phỏng hành vi của những người tham gia khác, nên kết quả không dự đoán được điều gì sẽ xảy ra trên mạng thật.',
      ],
    },
    {
      headingVi: 'Test thất bại là bằng chứng tốt nhất',
      paragraphsVi: [
        'Với báo cáo hợp đồng thông minh, một test chạy được thể hiện vấn đề là dạng bằng chứng thuyết phục nhất: không mơ hồ, dễ xác minh, và dùng lại được sau khi vá.',
        'Đính kèm test vào báo cáo, kèm hướng dẫn chạy. Đội phát triển thường thêm nó vào bộ kiểm thử của họ, và khi đó đóng góp của bạn có giá trị lâu dài.',
      ],
    },
  ],

  // ── T: AI ───────────────────────────────────────────────────────────
  'mod-ai-architecture': [
    {
      headingVi: 'Phân lớp một hệ thống AI',
      paragraphsVi: [
        'Để đánh giá bảo mật, cần tách một sản phẩm AI thành các lớp và xác định ranh giới tin cậy giữa chúng.',
      ],
      bulletsVi: [
        'Mô hình: thành phần sinh ra đầu ra từ đầu vào.',
        'Lớp điều phối: ghép prompt, gọi mô hình, xử lý kết quả.',
        'Truy xuất tài liệu: lấy nội dung từ kho dữ liệu để đưa vào ngữ cảnh.',
        'Bộ nhớ: dữ liệu từ các phiên trước được đưa lại vào ngữ cảnh.',
        'Công cụ: các hàm mà mô hình có thể yêu cầu gọi, với quyền thật trên hệ thống thật.',
        'Điểm phê duyệt của con người: nơi người dùng xác nhận trước khi hành động được thực hiện.',
      ],
    },
    {
      headingVi: 'Coi ngữ cảnh như vùng dữ liệu không tin cậy',
      paragraphsVi: [
        'Đây là mô hình tư duy quan trọng nhất của toàn bộ domain. Mọi thứ đi vào ngữ cảnh của mô hình — tài liệu truy xuất, tệp đính kèm, nội dung trang web, email — đều phải được coi như thân của một request HTTP: dữ liệu do bên ngoài kiểm soát.',
        'Với mô hình tư duy đó, các câu hỏi trở nên quen thuộc: dữ liệu không tin cậy đi vào ở đâu, nó ảnh hưởng tới quyết định nào, và ai chịu hậu quả.',
      ],
    },
    {
      headingVi: 'Công cụ là nơi có tác động thật',
      paragraphsVi: [
        'Bản thân mô hình chỉ sinh ra văn bản. Tác động thật xảy ra khi văn bản đó khiến hệ thống làm gì đó: gọi API, gửi email, đọc tệp, thực hiện giao dịch.',
        'Vì vậy khi lập bản đồ, hãy tập trung vào tập công cụ mà agent gọi được và quyền của từng công cụ. Đó là bề mặt tấn công thật, không phải bản thân mô hình.',
      ],
    },
    {
      headingVi: 'Ràng buộc khi nghiên cứu',
      paragraphsVi: [
        'Không dùng dữ liệu người dùng thật khi thử nghiệm. Tạo tài khoản và tài liệu của chính bạn.',
        'Không tạo chi phí suy luận lớn cho hệ thống của người khác. Mỗi lời gọi mô hình đều tốn tiền của bên vận hành, và việc gửi hàng loạt là gây thiệt hại tài chính chứ không phải nghiên cứu.',
      ],
    },
  ],

  'mod-ai-prompt-injection': [
    {
      headingVi: 'Trực tiếp và gián tiếp',
      paragraphsVi: [
        'Dạng trực tiếp là người dùng tự nhập nội dung nhằm thay đổi hành vi của mô hình. Vì người dùng chỉ ảnh hưởng tới phiên của chính họ, tác động thường giới hạn.',
        'Dạng gián tiếp nghiêm trọng hơn nhiều: nội dung do bên thứ ba kiểm soát đi vào ngữ cảnh qua một tài liệu, một trang web, hay một email, rồi ảnh hưởng tới hành vi của hệ thống khi phục vụ người dùng khác.',
      ],
    },
    {
      headingVi: 'Vấn đề thật nằm ở việc tin đầu ra',
      paragraphsVi: [
        'Điểm quan trọng nhất của module: việc mô hình bị ảnh hưởng bởi nội dung trong ngữ cảnh là đặc tính của cách nó hoạt động. Lỗ hổng nằm ở chỗ hệ thống hạ nguồn tin tưởng đầu ra của mô hình mà không kiểm tra.',
        'Vì vậy khắc phục hiệu quả không nằm ở việc làm mô hình cứng rắn hơn, mà ở việc xử lý đầu ra mô hình như dữ liệu không tin cậy — giống hệt cách bạn xử lý dữ liệu từ người dùng.',
      ],
    },
    {
      headingVi: 'Các hướng giảm thiểu được khuyến nghị',
      paragraphsVi: [
        'Không có biện pháp nào loại bỏ hoàn toàn vấn đề, nên cách tiếp cận là nhiều lớp.',
      ],
      bulletsVi: [
        'Giới hạn phạm vi hành vi của mô hình qua chỉ dẫn hệ thống.',
        'Định nghĩa định dạng đầu ra rõ ràng và kiểm tra đầu ra có đúng định dạng không.',
        'Lọc cả đầu vào lẫn đầu ra.',
        'Thực thi kiểm soát đặc quyền: mô hình chỉ chạm tới được những chức năng thật sự cần.',
        'Yêu cầu con người phê duyệt các hành động có rủi ro cao.',
        'Tách biệt và đánh dấu rõ phần nội dung đến từ nguồn ngoài.',
        'Kiểm thử đối kháng như một phần của quy trình phát triển.',
      ],
    },
    {
      headingVi: 'Vì sao prompt injection đơn thuần thường bị đóng',
      paragraphsVi: [
        'Nhiều báo cáo AI bị đóng vì chúng chỉ cho thấy mô hình nói điều không mong muốn, mà không cho thấy hậu quả nào vượt ra ngoài phiên của chính người báo cáo.',
        'Để có một báo cáo có giá trị, bạn cần chỉ ra một ranh giới tin cậy bị vượt qua: quyền của ai bị dùng cho hành động của ai, hoặc dữ liệu của ai bị lộ cho ai. Chứng minh điều đó bằng hai tài khoản do chính bạn tạo.',
      ],
    },
  ],

  'mod-ai-agent-authz': [
    {
      headingVi: 'Agent thường có quyền rộng hơn người dùng',
      paragraphsVi: [
        'Mẫu triển khai phổ biến: các công cụ mà agent gọi dùng một thông tin xác thực dịch vụ duy nhất với quyền đủ để phục vụ mọi người dùng.',
        'Khi đó nếu agent bị ảnh hưởng để gọi công cụ với tham số của người dùng khác, nó sẽ thành công — vì ở tầng công cụ không có gì kiểm tra người dùng nào đang yêu cầu.',
      ],
    },
    {
      headingVi: 'Ma trận công cụ và quyền',
      paragraphsVi: [
        'Bài tập rà soát chính: lập bảng liệt kê từng công cụ, quyền mà nó thực thi với, và quyền của người dùng cuối đang yêu cầu.',
        'Mọi ô mà quyền của công cụ rộng hơn quyền của người dùng đều là một điểm cần xem xét. Đây là cách biến một vấn đề mơ hồ về AI thành một danh sách kiểm tra cụ thể.',
      ],
    },
    {
      headingVi: 'Kiểm soát phải nằm ở tầng công cụ',
      paragraphsVi: [
        'Đặt chỉ dẫn trong prompt yêu cầu mô hình không làm điều gì đó không phải biện pháp bảo mật. Nó là gợi ý cho một hệ thống có tính ngẫu nhiên, và có thể bị nội dung không tin cậy ghi đè.',
        'Biện pháp đúng là truyền danh tính người dùng xuống tầng công cụ và kiểm tra phân quyền tại đó, đúng như cách bạn làm với API thông thường.',
      ],
    },
    {
      headingVi: 'Điểm phê duyệt có thực sự chặn không',
      paragraphsVi: [
        'Nhiều hệ thống thêm bước xác nhận của người dùng trước các hành động quan trọng. Cần kiểm tra hai điều.',
        'Thứ nhất, bước đó có thực sự chặn hành động ở phía server hay chỉ là một hộp thoại phía giao diện. Thứ hai, thông tin hiển thị cho người dùng có đủ để họ hiểu điều mình đang phê duyệt không — một phê duyệt mà người dùng không hiểu nội dung thì không có tác dụng bảo vệ.',
      ],
    },
  ],

  'mod-ai-rag-isolation': [
    {
      headingVi: 'Kho vector là một kho dữ liệu như mọi kho khác',
      paragraphsVi: [
        'Việc truy xuất tài liệu theo độ tương đồng ngữ nghĩa là kỹ thuật mới, nhưng yêu cầu bảo mật thì không: mỗi người dùng chỉ được thấy tài liệu họ có quyền thấy.',
        'Vì vậy mọi nguyên tắc bạn đã học về cô lập người thuê áp dụng nguyên vẹn ở đây.',
      ],
    },
    {
      headingVi: 'Bộ lọc phải nằm trong truy vấn',
      paragraphsVi: [
        'Mẫu sai phổ biến: truy xuất tài liệu từ toàn bộ kho, rồi đặt trong prompt một chỉ dẫn yêu cầu mô hình chỉ dùng tài liệu thuộc về người dùng hiện tại.',
        'Cách này thất bại vì hai lý do. Thứ nhất, chỉ dẫn trong prompt không phải kiểm soát truy cập. Thứ hai, và nghiêm trọng hơn, tài liệu của người khác đã nằm trong ngữ cảnh rồi — nghĩa là đã rời khỏi ranh giới bảo mật, bất kể mô hình có dùng nó hay không.',
        'Cách đúng là đưa điều kiện lọc vào chính truy vấn tới kho vector, để tài liệu không thuộc về người dùng không bao giờ được lấy ra.',
      ],
    },
    {
      headingVi: 'Bộ nhớ hội thoại',
      paragraphsVi: [
        'Nhiều hệ thống lưu lại nội dung các phiên trước để đưa vào ngữ cảnh sau. Điều này tạo ra một kho dữ liệu nữa cần cô lập.',
        'Các câu hỏi: bộ nhớ được phân vùng theo người dùng hay theo phiên, nó tồn tại bao lâu, người dùng có xoá được không, và nó có bị dùng để huấn luyện hay cải thiện hệ thống không.',
      ],
    },
    {
      headingVi: 'Kiểm thử an toàn',
      paragraphsVi: [
        'Tạo hai tài khoản của chính bạn, mỗi tài khoản tải lên một tài liệu có nội dung đánh dấu riêng biệt và dễ nhận ra.',
        'Rồi từ tài khoản thứ nhất, đặt câu hỏi mà chỉ tài liệu của tài khoản thứ hai mới trả lời được. Nếu nội dung đánh dấu xuất hiện, bạn có phát hiện — và bạn chứng minh được nó mà không chạm tới dữ liệu của ai khác.',
        'Nếu trong quá trình thử bạn thấy nội dung không thuộc cả hai tài khoản, hãy dừng ngay: bạn đã chạm tới dữ liệu người dùng thật.',
      ],
    },
  ],

  'mod-ai-policy': [
    {
      headingVi: 'Hai loại vấn đề khác nhau',
      paragraphsVi: [
        'An toàn nội dung liên quan tới việc mô hình sinh ra nội dung có hại hoặc không phù hợp. Bảo mật liên quan tới việc một ranh giới tin cậy bị vượt qua.',
        'Chúng thường được xử lý bởi các đội khác nhau, qua các kênh khác nhau, với tiêu chí khác nhau. Gửi nhầm kênh là lý do khiến nhiều báo cáo AI không được xử lý như người gửi mong đợi.',
      ],
    },
    {
      headingVi: 'Điều gì làm nên một báo cáo AI có giá trị',
      paragraphsVi: [
        'Tiêu chí trung tâm là chứng minh được có ranh giới tin cậy bị vượt qua, kèm hệ quả cụ thể.',
      ],
      bulletsVi: [
        'Dữ liệu của một người dùng lộ cho người dùng khác.',
        'Hành động được thực hiện với quyền vượt quá quyền của người yêu cầu.',
        'Hệ thống hạ nguồn thực thi nội dung do mô hình sinh ra mà không kiểm tra.',
        'Cô lập giữa các tổ chức khách hàng bị phá vỡ.',
        'Bí mật của hệ thống bị lộ theo cách cho phép hành động tiếp theo.',
      ],
    },
    {
      headingVi: 'Vì sao đầu ra có hại thường không phải bounty',
      paragraphsVi: [
        'Mô hình ngôn ngữ có tính ngẫu nhiên, và việc chúng đôi khi sinh ra nội dung không mong muốn là đặc tính đã biết chứ không phải lỗi cụ thể có thể vá.',
        'Điều này không có nghĩa vấn đề đó không quan trọng — chỉ là nó thuộc quy trình cải thiện an toàn nội dung, không thuộc quy trình bug bounty. Chương trình thường có kênh riêng cho loại phản hồi này.',
      ],
    },
    {
      headingVi: 'Safe harbor cho nghiên cứu AI',
      paragraphsVi: [
        'Một số nền tảng đã công bố khung bảo vệ riêng cho nghiên cứu hệ thống AI, vì loại nghiên cứu này có ranh giới mờ hơn so với web truyền thống.',
        'Đừng giả định safe harbor cho phần web tự động phủ luôn phần AI. Hãy tìm điều khoản riêng, và nếu chính sách im lặng về nghiên cứu AI thì hỏi trước khi bắt đầu.',
      ],
    },
  ],

  // ── U: Browser extension ────────────────────────────────────────────
  'mod-ext-architecture': [
    {
      headingVi: 'Các thành phần và mức quyền của chúng',
      paragraphsVi: [
        'Một tiện ích gồm nhiều phần chạy ở các ngữ cảnh khác nhau với quyền khác nhau, và hiểu sự khác biệt này là nền tảng của mọi phân tích.',
      ],
      bulletsVi: [
        'Tệp khai báo: liệt kê quyền yêu cầu và các thành phần của tiện ích.',
        'Thành phần nền: chạy với quyền đầy đủ của tiện ích, gọi được các API đặc quyền.',
        'Content script: chạy trong ngữ cảnh của trang web, quyền hạn chế hơn, nhưng chạm được vào DOM của trang.',
        'Trang tuỳ chọn và giao diện của tiện ích: chạy trong ngữ cảnh của tiện ích.',
        'Tài nguyên truy cập được từ web: các tệp của tiện ích mà trang web tải được.',
      ],
    },
    {
      headingVi: 'Quyền quyết định thiệt hại tối đa',
      paragraphsVi: [
        'Tiện ích yêu cầu quyền truy cập mọi trang có thể đọc và sửa nội dung của mọi site người dùng ghé thăm, gồm cả trang ngân hàng và email.',
        'Vì vậy khi rà soát, hãy so sánh quyền yêu cầu với chức năng thực tế. Chênh lệch chính là rủi ro thừa, và nó đáng nêu ngay cả khi chưa có lỗi cụ thể nào.',
      ],
    },
    {
      headingVi: 'Tài nguyên truy cập được từ web là cầu nối',
      paragraphsVi: [
        'Các tệp được khai báo là truy cập được từ web có thể được tải bởi bất kỳ trang nào. Nếu một tệp như vậy chứa mã có khả năng đặc quyền, trang web tận dụng được nó.',
        'Ngoài ra, việc một trang tải được tài nguyên của tiện ích cho phép nó phát hiện tiện ích đó có được cài hay không — một vấn đề về quyền riêng tư của người dùng.',
      ],
    },
    {
      headingVi: 'Phạm vi thực hành',
      paragraphsVi: [
        'Chỉ phân tích tiện ích do bạn viết, tiện ích lab, hoặc tiện ích nằm rõ trong phạm vi một chương trình.',
        'Dùng một hồ sơ trình duyệt riêng không đăng nhập tài khoản thật, và gỡ tiện ích sau khi hoàn thành.',
      ],
    },
  ],

  'mod-ext-message-boundary': [
    {
      headingVi: 'Trang web luôn là dữ liệu không tin cậy',
      paragraphsVi: [
        'Content script chạy trong cùng trang với mã của trang web. Điều này nghĩa là mã của trang có thể quan sát và tương tác với content script.',
        'Vì vậy nguyên tắc bất di bất dịch: từ góc nhìn của content script, mọi thứ đến từ trang đều là dữ liệu không tin cậy, kể cả khi trang đó là một site uy tín.',
      ],
    },
    {
      headingVi: 'Xác thực nguồn của mọi thông điệp',
      paragraphsVi: [
        'Khi thành phần nền nhận thông điệp, nó cần biết thông điệp đến từ content script của chính tiện ích hay từ một nguồn khác.',
        'Nếu trình xử lý thông điệp không kiểm tra nguồn gửi, và nó thực hiện các hành động đặc quyền dựa trên nội dung thông điệp, thì bất kỳ trang web nào cũng gián tiếp gọi được các hành động đó.',
        'Đây là mẫu lỗi phổ biến nhất trong tiện ích trình duyệt, và cũng là mẫu dễ phát hiện nhất khi đọc mã.',
      ],
    },
    {
      headingVi: 'Native messaging là đường ra hệ điều hành',
      paragraphsVi: [
        'Một số tiện ích giao tiếp với ứng dụng chạy trên hệ điều hành. Điều này tạo ra một chuỗi: trang web tới content script, tới thành phần nền, tới ứng dụng native.',
        'Nếu bất kỳ mắt xích nào trong chuỗi không kiểm tra đầu vào, một trang web có thể gián tiếp điều khiển ứng dụng chạy ngoài sandbox của trình duyệt. Đây là dạng lỗ hổng có tác động cao nhất trong domain này.',
      ],
    },
    {
      headingVi: 'Rà soát có hệ thống',
      paragraphsVi: [
        'Cách tiếp cận hiệu quả: liệt kê mọi trình xử lý thông điệp trong tiện ích, rồi với từng cái trả lời ba câu hỏi.',
        'Nó nhận thông điệp từ đâu? Nó có kiểm tra nguồn không? Và nó làm gì với nội dung — đặc biệt là có gọi API đặc quyền hay chuyển tiếp ra ứng dụng native không?',
      ],
    },
  ],

  // ── V: SaaS ─────────────────────────────────────────────────────────
  'mod-saas-tenancy': [
    {
      headingVi: 'Ma trận vai trò trong sản phẩm cộng tác',
      paragraphsVi: [
        'Sản phẩm cộng tác thường có nhiều vai trò với ranh giới tinh tế: chủ sở hữu, quản trị viên, thành viên, khách, và đôi khi các vai trò tuỳ chỉnh.',
        'Bước đầu tiên là lập ma trận đầy đủ: mỗi vai trò làm được gì với mỗi loại tài nguyên. Tài liệu sản phẩm thường mô tả điều này, và đối chiếu tài liệu với hành vi thực tế là cách tìm lỗi hiệu quả.',
      ],
    },
    {
      headingVi: 'Tài khoản khách là ranh giới tinh tế nhất',
      paragraphsVi: [
        'Khách có quyền trong một tổ chức nhưng không thuộc tổ chức đó. Ranh giới này dễ bị cài đặt không nhất quán giữa các tính năng.',
      ],
      bulletsVi: [
        'Khách có nâng được quyền của chính mình không?',
        'Khách có mời thêm người khác vào tổ chức không?',
        'Khách có thấy danh sách thành viên hoặc cấu trúc tổ chức không?',
        'Khách có truy cập được nội dung ngoài phạm vi được chia sẻ không?',
        'Khi bị gỡ khỏi tổ chức, quyền truy cập có mất ngay không?',
      ],
    },
    {
      headingVi: 'Liên kết chia sẻ',
      paragraphsVi: [
        'Chia sẻ bằng liên kết là cách dữ liệu nội bộ rời khỏi tổ chức phổ biến nhất. Bốn thuộc tính quyết định mức rủi ro.',
        'Liên kết có khó đoán không, có thời hạn không, có thu hồi được không, và có bị công cụ thu thập chỉ mục tìm kiếm lấy được không. Thiếu bất kỳ thuộc tính nào cũng là điểm đáng nêu.',
      ],
    },
    {
      headingVi: 'Xuất dữ liệu và nhật ký kiểm toán',
      paragraphsVi: [
        'Chức năng xuất dữ liệu thường được viết riêng và hay bỏ qua các kiểm tra phân quyền chi tiết mà giao diện áp dụng. Đây là nơi đáng kiểm tra kỹ.',
        'Nhật ký kiểm toán thì ngược lại — thiếu nó là vấn đề. Nếu tổ chức không thấy được ai đã truy cập gì, họ không phát hiện được lạm dụng từ bên trong.',
      ],
    },
  ],

  'mod-saas-email-auth': [
    {
      headingVi: 'Ba cơ chế bổ sung cho nhau',
      paragraphsVi: ['Ba cơ chế xác thực email làm ba việc khác nhau và cần cả ba mới đủ.'],
      bulletsVi: [
        'Cơ chế thứ nhất công bố những máy chủ nào được phép gửi thư thay mặt tên miền.',
        'Cơ chế thứ hai thêm chữ ký số vào thư, cho phép bên nhận xác minh nội dung không bị sửa và đúng do tên miền đó gửi.',
        'Cơ chế thứ ba nói cho bên nhận biết phải làm gì khi thư không đạt hai kiểm tra trên, và yêu cầu gửi báo cáo về.',
      ],
    },
    {
      headingVi: 'Chính sách chỉ giám sát chưa bảo vệ gì',
      paragraphsVi: [
        'Cơ chế thứ ba có nhiều chế độ. Ở chế độ thấp nhất, bên nhận chỉ được yêu cầu gửi báo cáo mà không từ chối thư.',
        'Nhiều tổ chức dừng ở chế độ này vì lo chặn nhầm thư hợp lệ, rồi để nguyên nhiều năm. Kết quả là tên miền vẫn bị giả mạo được. Đây là phát hiện đáng nêu, nhưng cần trình bày kèm ngữ cảnh: chuyển sang chế độ thực thi cần thời gian chuẩn bị.',
      ],
    },
    {
      headingVi: 'Cách kiểm tra và mức tác động',
      paragraphsVi: [
        'Kiểm tra hoàn toàn bằng cách đọc bản ghi DNS công khai. Không cần và không được gửi thư nào.',
        'Về mức tác động: giả mạo email không cho phép truy cập hệ thống, nhưng nó tăng hiệu quả của các chiến dịch lừa đảo nhắm vào người dùng và đối tác. Hãy trình bày tác động ở mức đó thay vì thổi phồng.',
      ],
    },
    {
      headingVi: 'Ranh giới tuyệt đối',
      paragraphsVi: [
        'Không gửi email giả mạo tới bất kỳ ai để chứng minh, trong bất kỳ hoàn cảnh nào. Đây là hành vi lừa đảo, không phải nghiên cứu.',
        'Nếu chính sách chương trình yêu cầu bằng chứng thực nghiệm, hãy hỏi họ chấp nhận hình thức nào — thường là gửi tới một địa chỉ do chính bạn kiểm soát.',
      ],
    },
  ],

  'mod-saas-integrations': [
    {
      headingVi: 'Quyền cấp một lần tồn tại rất lâu',
      paragraphsVi: [
        'Khi người dùng cài một ứng dụng tích hợp, họ cấp cho nó một tập quyền. Tập quyền đó thường tồn tại cho tới khi ai đó chủ động gỡ, và hiếm khi có ai rà soát lại.',
        'Vì vậy ứng dụng tích hợp trở thành một đường vào lâu dài. Câu hỏi rà soát: ai trong tổ chức được phép cài tích hợp, và có quy trình xét duyệt không?',
      ],
    },
    {
      headingVi: 'Phạm vi quyền so với chức năng thực tế',
      paragraphsVi: [
        'Nhiều ứng dụng yêu cầu phạm vi quyền rộng hơn nhiều so với chức năng chúng cung cấp, đơn giản vì phạm vi rộng dễ triển khai hơn.',
        'Khi rà soát, hãy so sánh phạm vi yêu cầu với mô tả chức năng. Một ứng dụng chỉ hiển thị thông báo mà yêu cầu quyền đọc và ghi mọi nội dung là ví dụ rõ ràng của quyền thừa.',
      ],
    },
    {
      headingVi: 'Tự động hoá quy trình',
      paragraphsVi: [
        'Nhiều nền tảng cho phép tạo luồng tự động chạy khi có sự kiện. Các luồng này thường chạy với quyền của người tạo ra chúng.',
        'Rủi ro: nếu một người có ít quyền kích hoạt được luồng do người nhiều quyền tạo, họ gián tiếp thực hiện được hành động vượt quyền mình. Đây là mô hình leo thang đặc quyền quen thuộc trong một hình thức mới.',
      ],
    },
    {
      headingVi: 'Bot và webhook',
      paragraphsVi: [
        'Bot là một loại danh tính đặc biệt, thường có quyền rộng và ít bị rà soát như tài khoản người dùng. Cần kiểm tra ai điều khiển được bot và bot làm được gì.',
        'Với webhook đến, các câu hỏi giống phần web: chữ ký được xác minh thế nào, có dấu thời gian chống phát lại không, và xử lý trùng có an toàn không.',
      ],
    },
  ],

  // ── W: Privacy ──────────────────────────────────────────────────────
  'mod-privacy-classification': [
    {
      headingVi: 'Phân loại quyết định mức tác động',
      paragraphsVi: [
        'Cùng một lỗi kỹ thuật có mức tác động rất khác nhau tuỳ vào loại dữ liệu bị ảnh hưởng. Vì vậy phân loại dữ liệu là bước đầu tiên khi đánh giá tác động về quyền riêng tư.',
        'Các mức thường dùng đi từ dữ liệu công khai, tới dữ liệu định danh cá nhân, tới các loại dữ liệu nhạy cảm đặc biệt như thông tin sức khoẻ, tài chính, vị trí, hay dữ liệu về trẻ em.',
      ],
    },
    {
      headingVi: 'Metadata cũng là dữ liệu cá nhân',
      paragraphsVi: [
        'Người ta thường chỉ nghĩ tới nội dung, nhưng metadata đôi khi tiết lộ nhiều hơn: ai liên lạc với ai, vào lúc nào, từ đâu, và bao lâu một lần.',
        'Một hệ thống không lộ nội dung tin nhắn nhưng lộ danh sách người liên lạc và thời điểm vẫn là một vấn đề nghiêm trọng về quyền riêng tư.',
      ],
    },
    {
      headingVi: 'Kênh rò rỉ ngoài luồng chính',
      paragraphsVi: [
        'Dữ liệu thường được bảo vệ tốt ở luồng chính rồi rò rỉ qua các kênh phụ mà không ai để ý.',
      ],
      bulletsVi: [
        'Nhật ký ứng dụng và nhật ký của các lớp trung gian.',
        'Công cụ phân tích hành vi người dùng của bên thứ ba.',
        'Chỉ mục tìm kiếm thu thập nội dung lẽ ra không công khai.',
        'Liên kết chia sẻ không có thời hạn.',
        'Bản sao lưu và môi trường thử nghiệm dùng dữ liệu thật.',
        'Thông báo đẩy hiển thị nội dung trên màn hình khoá.',
        'Tệp xuất báo cáo chứa nhiều trường hơn cần thiết.',
      ],
    },
    {
      headingVi: 'Xoá có thực sự xoá không',
      paragraphsVi: [
        'Khi người dùng yêu cầu xoá dữ liệu, câu hỏi là nó được xoá ở đâu: chỉ ở cơ sở dữ liệu chính, hay cả ở bản sao lưu, chỉ mục tìm kiếm, bộ nhớ đệm, nhật ký và hệ thống phân tích?',
        'Đây vừa là vấn đề tuân thủ vừa là vấn đề bảo mật, vì dữ liệu tưởng đã xoá vẫn có thể bị lộ qua các bản sao còn sót.',
      ],
    },
  ],

  'mod-privacy-impact-without-harm': [
    {
      headingVi: 'Nghịch lý cần giải quyết',
      paragraphsVi: [
        'Bạn cần thuyết phục người đọc rằng vấn đề nghiêm trọng và ở quy mô lớn. Nhưng bạn không được thu thập dữ liệu để chứng minh điều đó.',
        'Giải pháp là chuyển từ chứng minh bằng khối lượng sang chứng minh bằng lập luận cấu trúc. Đây là kỹ năng viết, và nó phân biệt báo cáo chuyên nghiệp với báo cáo nghiệp dư.',
      ],
    },
    {
      headingVi: 'Định lượng từ cấu trúc',
      paragraphsVi: ['Bạn suy ra được quy mô từ những gì quan sát được mà không cần lấy dữ liệu.'],
      bulletsVi: [
        'Cấu trúc định danh cho biết không gian giá trị có thể có.',
        'Tham số phân trang cho biết mỗi lần lấy được bao nhiêu bản ghi.',
        'Sự vắng mặt của giới hạn tốc độ cho biết tốc độ có thể đạt.',
        'Cấu trúc phản hồi cho biết mỗi bản ghi chứa những trường gì.',
        'Tài liệu công khai của sản phẩm đôi khi cho biết quy mô người dùng.',
      ],
    },
    {
      headingVi: 'Trình bày bằng chứng đã che',
      paragraphsVi: [
        'Cách hiệu quả là hiển thị cấu trúc phản hồi với mọi giá trị thật được thay bằng nhãn mô tả kiểu dữ liệu. Người đọc thấy được đầy đủ những trường nào bị lộ mà không có dữ liệu thật nào trong báo cáo.',
        'Với dữ liệu của chính tài khoản bạn, bạn có thể để nguyên — nhưng hãy nói rõ đó là tài khoản của bạn.',
      ],
      example: {
        language: 'json',
        content:
          '{\n  "id": "<so nguyen tuan tu>",\n  "full_name": "<ho ten>",\n  "email": "<dia chi email>",\n  "phone": "<so dien thoai>",\n  "address": "<dia chi cu tru>",\n  "created_at": "<dau thoi gian>"\n}',
        captionVi:
          'Ví dụ do dự án tự soạn: cách trình bày cấu trúc phản hồi để người đọc thấy đủ trường bị lộ mà không có dữ liệu thật nào trong báo cáo.',
      },
    },
    {
      headingVi: 'Hai phần bắt buộc trong báo cáo về quyền riêng tư',
      paragraphsVi: [
        'Phần dữ liệu đã tiếp xúc: nêu chính xác bạn đã thấy gì, bao nhiêu bản ghi, thuộc về ai, và bạn đã che gì.',
        'Phần hành động giảm thiểu: nêu bạn đã dừng khi nào, đã xoá gì, và vào lúc nào.',
        'Đây là hai phần mà bộ phận pháp lý của tổ chức cần nhất, vì chúng quyết định nghĩa vụ thông báo của họ. Một báo cáo thiếu hai phần này khiến tổ chức phải giả định trường hợp xấu nhất.',
      ],
    },
  ],

  // ── X: Emerging ─────────────────────────────────────────────────────
  'mod-emerging-evaluating-new-surfaces': [
    {
      headingVi: 'Câu hỏi pháp lý đứng trước câu hỏi kỹ thuật',
      paragraphsVi: [
        'Khi gặp một lĩnh vực mới, phản xạ tự nhiên là hỏi "làm thế nào". Với các bề mặt đặc thù, câu hỏi đúng phải đến trước là "có được phép không".',
        'Nhiều lĩnh vực trong domain này có quy định riêng và nghiêm ngặt: thiết bị y tế, thiết bị thanh toán, phương tiện bay không người lái, hạ tầng viễn thông. Ở những lĩnh vực đó, một thử nghiệm sai không chỉ là vi phạm chính sách mà có thể là vi phạm pháp luật với hậu quả nặng.',
      ],
    },
    {
      headingVi: 'Áp dụng chuỗi mười hai bước cho lĩnh vực chưa có tài liệu',
      paragraphsVi: [
        'Chuỗi mà dự án dùng cho mọi lĩnh vực áp dụng được cả với bề mặt hoàn toàn mới. Nó cho bạn một cấu trúc để không bỏ sót.',
        'Bắt đầu từ khái niệm và kiến trúc, xác định trust boundary, từ đó suy ra bề mặt tấn công, rồi tới nhóm điểm yếu, phương pháp kiểm thử, công cụ, lab hợp pháp, cách chứng minh an toàn, cách khắc phục, cách báo cáo, và cuối cùng là bài tự đánh giá.',
        'Nếu bạn không điền được một bước nào đó, đó chính là khoảng trống cần nghiên cứu thêm — không phải lý do để bỏ qua bước.',
      ],
    },
    {
      headingVi: 'Bảy điều kiện để mở một specialization',
      paragraphsVi: [
        'Dự án chỉ chuyển một lĩnh vực từ trạng thái dự kiến sang trạng thái hoạt động khi đủ bảy điều kiện. Đây là cơ chế giữ cho bản đồ trung thực.',
      ],
      bulletsVi: [
        'Có ít nhất một nguồn phương pháp đáng tin cậy.',
        'Có ít nhất một lab hợp pháp hoặc môi trường mô phỏng.',
        'Người biên tập đã xác minh metadata và ghi ngày rà soát.',
        'Có cảnh báo pháp lý và phạm vi rõ ràng.',
        'Có prerequisite được khai báo tường minh.',
        'Có checklist tối thiểu.',
        'Có ít nhất một bài tập viết báo cáo mẫu.',
      ],
    },
    {
      headingVi: 'Điều kiện về lab là quan trọng nhất',
      paragraphsVi: [
        'Trong bảy điều kiện, điều kiện về lab hợp pháp đáng chú ý nhất. Lý do: nếu mở một lĩnh vực mà không có nơi thực hành hợp pháp, người học sẽ buộc phải thực hành trên hệ thống thật.',
        'Với các lĩnh vực có yếu tố an toàn con người, hậu quả của việc đó vượt xa phạm vi công nghệ thông tin. Vì vậy thà để một lĩnh vực ở trạng thái dự kiến còn hơn mở nó sớm.',
      ],
    },
    {
      headingVi: 'Trung thực về phần còn thiếu',
      paragraphsVi: [
        'Khi bạn đề xuất một lĩnh vực mới, hãy nêu rõ điều kiện nào đã đủ và điều kiện nào chưa. Một đề xuất trung thực nói "còn thiếu lab hợp pháp" có giá trị hơn một đề xuất bỏ qua điểm đó.',
        'Đây cũng là tinh thần của toàn bộ dự án: bản đồ kiến thức mở, có ngày rà soát, và có cơ chế cho thấy phần còn thiếu — thay vì tuyên bố bao phủ tuyệt đối.',
      ],
    },
  ],
};
