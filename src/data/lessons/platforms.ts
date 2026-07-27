import type { LessonSection } from '@/schemas/entities';

/**
 * Thân bài học cho domain G (mobile), H (cloud), I (container), J (network),
 * K (desktop) và L (binary).
 * Nội dung do dự án tự biên soạn. Không sao chép nguyên văn từ nguồn nào.
 */
export const platformLessons: Record<string, LessonSection[]> = {
  // ── G: Mobile ───────────────────────────────────────────────────────
  'mod-mobile-architecture': [
    {
      headingVi: 'Ứng dụng di động là một client, không phải toàn bộ hệ thống',
      paragraphsVi: [
        'Sai lầm phổ biến của người mới là dành hết thời gian phân tích gói cài đặt. Trên thực tế, phần lớn lỗi có tác động cao nằm ở backend mà ứng dụng gọi tới.',
        'Vì vậy bước đầu tiên nên là: cài ứng dụng, dùng thử toàn bộ tính năng qua proxy, và lập danh sách endpoint. Danh sách đó là bề mặt chính; phần trên thiết bị là bề mặt bổ sung.',
      ],
    },
    {
      headingVi: 'Nhận diện kiểu kiến trúc',
      paragraphsVi: ['Cách ứng dụng được xây dựng quyết định cách bạn phân tích nó.'],
      bulletsVi: [
        'Ứng dụng gốc: mã biên dịch cho nền tảng, phân tích tĩnh cần công cụ dịch ngược tương ứng.',
        'Ứng dụng lai và khung đa nền tảng: phần lớn logic nằm trong mã kịch bản hoặc thư viện chung, thường dễ đọc hơn.',
        'Ứng dụng bọc nội dung web: gần như toàn bộ logic nằm trong thành phần hiển thị web, nên kiến thức web áp dụng trực tiếp.',
      ],
    },
    {
      headingVi: 'Điểm vào từ bên ngoài',
      paragraphsVi: [
        'Ứng dụng không chỉ nhận dữ liệu từ backend. Nó còn nhận từ các ứng dụng khác trên cùng thiết bị và từ trình duyệt.',
        'Liệt kê mọi cách một bên ngoài có thể gửi dữ liệu vào ứng dụng là bài tập cốt lõi: liên kết sâu, cơ chế liên tiến trình của nền tảng, thông báo đẩy, và nội dung mà thành phần web tải về.',
      ],
    },
  ],

  'mod-mobile-android-components': [
    {
      headingVi: 'Manifest là bản khai báo bề mặt tấn công',
      paragraphsVi: [
        'Tệp manifest do chính nhà phát triển viết và nó khai báo tường minh: thành phần nào của ứng dụng có thể được ứng dụng khác gọi tới, ứng dụng yêu cầu quyền gì, và cấu hình mạng ra sao.',
        'Đây là điểm khởi đầu hiệu quả nhất cho phân tích tĩnh. Trước khi dịch ngược bất cứ thứ gì, hãy đọc manifest và lập danh sách thành phần phơi ra bên ngoài.',
      ],
    },
    {
      headingVi: 'Thành phần phơi ra và việc kiểm tra bên gọi',
      paragraphsVi: [
        'Nền tảng cung cấp nhiều loại thành phần có thể nhận yêu cầu từ ứng dụng khác: màn hình, dịch vụ nền, bộ thu thông điệp quảng bá, và nhà cung cấp nội dung.',
        'Vấn đề xảy ra khi một thành phần được khai báo cho phép truy cập từ ngoài nhưng không kiểm tra danh tính hay quyền của bên gọi. Khi đó bất kỳ ứng dụng nào cài trên máy cũng gọi được, kể cả ứng dụng không có quyền gì đặc biệt.',
        'Nhà cung cấp nội dung đáng chú ý nhất vì nó phơi ra dữ liệu có cấu trúc, và nếu truy vấn được dựng từ tham số của bên gọi thì còn thêm rủi ro chèn cú pháp.',
      ],
    },
    {
      headingVi: 'Thành phần hiển thị web trong ứng dụng',
      paragraphsVi: [
        'Khi ứng dụng nhúng nội dung web, hai câu hỏi quyết định mức rủi ro: thành phần đó tải nội dung từ đâu, và nó được cấp cầu nối nào tới mã gốc của ứng dụng.',
        'Nếu nội dung tải từ nguồn không tin cậy mà lại có cầu nối tới mã gốc, một lỗi chèn mã trong nội dung web trở thành khả năng gọi chức năng của ứng dụng.',
      ],
    },
    {
      headingVi: 'Cấu hình mạng và liên kết',
      paragraphsVi: [
        'Nền tảng cho phép khai báo chính sách mạng riêng cho ứng dụng: có chấp nhận kết nối không mã hoá không, có tin thêm cơ quan cấp chứng chỉ nào không.',
        'Ngoại lệ trong cấu hình này thường được thêm để phục vụ phát triển rồi quên gỡ. Đó là phát hiện đáng báo cáo vì nó làm giảm mức bảo vệ đường truyền cho mọi người dùng.',
      ],
    },
  ],

  'mod-mobile-android-storage': [
    {
      headingVi: 'Dữ liệu nằm ở nhiều nơi hơn bạn nghĩ',
      paragraphsVi: [
        'Khi khảo sát lưu trữ, đừng chỉ nhìn cơ sở dữ liệu chính. Dữ liệu nhạy cảm rò rỉ ra nhiều nơi phụ mà lập trình viên không chủ ý.',
      ],
      bulletsVi: [
        'Kho cấu hình dạng khoá và giá trị.',
        'Cơ sở dữ liệu cục bộ và tệp của nó.',
        'Tệp trong thư mục riêng của ứng dụng và trong vùng lưu trữ dùng chung.',
        'Nhật ký ứng dụng.',
        'Bản sao lưu tự động do hệ điều hành thực hiện.',
        'Bộ nhớ đệm của thành phần hiển thị web.',
        'Clipboard và ảnh chụp màn hình do hệ thống tạo khi chuyển ứng dụng.',
      ],
    },
    {
      headingVi: 'Kho khoá của nền tảng bảo vệ được gì',
      paragraphsVi: [
        'Kho khoá cho phép tạo và dùng khoá mật mã mà khoá không rời khỏi vùng bảo vệ của hệ thống, và trên thiết bị có phần cứng hỗ trợ thì còn được bảo vệ ở mức phần cứng.',
        'Điểm cần hiểu đúng: nó bảo vệ khoá, không tự động bảo vệ dữ liệu. Nếu ứng dụng dùng khoá để mã hoá nhưng lưu dữ liệu đã giải mã ra tệp thường, việc dùng kho khoá không giúp ích gì.',
      ],
    },
    {
      headingVi: 'Sao lưu và nhật ký là hai kênh hay bị quên',
      paragraphsVi: [
        'Hệ điều hành có thể tự sao lưu dữ liệu ứng dụng. Nếu ứng dụng không loại trừ dữ liệu nhạy cảm khỏi phạm vi sao lưu, dữ liệu đó rời khỏi thiết bị theo cách nhà phát triển không tính tới.',
        'Nhật ký cũng vậy: một dòng ghi lại toàn bộ phản hồi API để gỡ lỗi có thể chứa token hoặc dữ liệu cá nhân. Nguyên tắc chung là không ghi mật khẩu, token, khoá hay dữ liệu cá nhân vào nhật ký.',
      ],
    },
    {
      headingVi: 'Điều kiện khai thác cần được nêu trung thực',
      paragraphsVi: [
        'Phần lớn vấn đề lưu trữ cục bộ cần một điều kiện: kẻ tấn công có quyền truy cập thiết bị, hoặc có một ứng dụng khác trên máy đọc được vùng đó.',
        'Hãy nêu điều kiện này rõ ràng trong báo cáo thay vì thổi phồng. Nhiều chương trình xếp nhóm này ở mức thấp chính vì điều kiện đó, và một báo cáo trung thực về điều kiện sẽ được đánh giá cao hơn.',
      ],
    },
  ],

  'mod-mobile-ios-platform': [
    {
      headingVi: 'Entitlement mô tả khả năng của ứng dụng',
      paragraphsVi: [
        'Tệp khai báo quyền hạn của ứng dụng cho biết nó được phép dùng những khả năng nào của hệ thống: chia sẻ dữ liệu với ứng dụng cùng nhóm, dùng kho khoá với nhóm truy cập nào, nhận thông báo đẩy, và nhiều thứ khác.',
        'Đọc tệp này cùng với tệp thông tin cấu hình là cách nhanh nhất để hiểu ứng dụng có thể làm gì và nó tương tác với phần còn lại của hệ thống ra sao.',
      ],
    },
    {
      headingVi: 'Hai kiểu liên kết với mức tin cậy khác nhau',
      paragraphsVi: [
        'Cơ chế liên kết dùng lược đồ tuỳ chỉnh không có ràng buộc về quyền sở hữu: nhiều ứng dụng có thể cùng khai báo một lược đồ, và hệ thống không đảm bảo ứng dụng nào sẽ nhận.',
        'Cơ chế liên kết dựa trên tên miền thì có ràng buộc: chủ tên miền phải đặt một tệp xác nhận trên máy chủ của mình. Vì vậy nó đáng tin hơn nhiều.',
        'Khi rà soát, hãy kiểm tra dữ liệu nhạy cảm có đi qua kiểu liên kết kém tin cậy hơn không, và ứng dụng có xác thực nguồn của dữ liệu nhận được qua liên kết không.',
      ],
    },
    {
      headingVi: 'Chia sẻ dữ liệu giữa các thành phần',
      paragraphsVi: [
        'Ứng dụng hiện đại thường có nhiều thành phần: ứng dụng chính, các phần mở rộng, và đôi khi nhiều ứng dụng cùng một nhà phát triển chia sẻ dữ liệu.',
        'Vùng dữ liệu dùng chung giữa các thành phần là bề mặt cần kiểm tra riêng: dữ liệu gì được đặt ở đó, thành phần nào đọc được, và mức bảo vệ có tương xứng với độ nhạy cảm không.',
      ],
    },
    {
      headingVi: 'Chính sách bảo mật truyền tải',
      paragraphsVi: [
        'Nền tảng mặc định yêu cầu kết nối mã hoá và cho phép khai báo ngoại lệ. Mỗi ngoại lệ là một quyết định làm giảm mức bảo vệ.',
        'Khi thấy ngoại lệ trong cấu hình, hãy xác định nó áp dụng cho tên miền nào và dữ liệu gì đi qua đó. Ngoại lệ áp dụng cho toàn bộ kết nối là phát hiện đáng chú ý hơn nhiều so với ngoại lệ cho một tên miền cụ thể.',
      ],
    },
  ],

  'mod-mobile-ios-storage': [
    {
      headingVi: 'Kho khoá và các lớp bảo vệ',
      paragraphsVi: [
        'Kho khoá của nền tảng cho phép gắn mỗi mục với một lớp bảo vệ quy định khi nào mục đó đọc được: chỉ khi thiết bị đang mở khoá, sau lần mở khoá đầu tiên kể từ khi khởi động, hay luôn luôn.',
        'Chọn lớp quá lỏng là lỗi phổ biến. Một token phiên đặt ở lớp cho phép đọc mọi lúc sẽ đọc được ngay cả khi thiết bị đang khoá, làm mất phần lớn ý nghĩa của việc dùng kho khoá.',
        'Còn một lựa chọn quan trọng nữa: mục có được đồng bộ lên dịch vụ đám mây của nhà cung cấp hay không. Với bí mật gắn với thiết bị, việc đồng bộ thường không mong muốn.',
      ],
    },
    {
      headingVi: 'Cơ chế bảo vệ dữ liệu ở mức tệp',
      paragraphsVi: [
        'Ngoài kho khoá, hệ điều hành cung cấp cơ chế mã hoá tệp gắn với trạng thái khoá của thiết bị. Mỗi tệp có thể được gán một mức bảo vệ tương tự như các lớp của kho khoá.',
        'Khi khảo sát, hãy kiểm tra tệp chứa dữ liệu nhạy cảm được gán mức nào. Mức mặc định có thể không đủ chặt cho dữ liệu quan trọng.',
      ],
    },
    {
      headingVi: 'Sinh trắc học là cổng giao diện',
      paragraphsVi: [
        'Đây là điểm hay bị hiểu sai. Nếu ứng dụng chỉ hỏi hệ thống "người dùng đã xác thực sinh trắc chưa" rồi tự quyết định cho vào, kiểm tra đó nằm ở phía client và có thể bị bỏ qua.',
        'Cách dùng đúng là ràng buộc việc sử dụng một khoá trong kho khoá với điều kiện xác thực sinh trắc. Khi đó không có xác thực thì không có khoá, và không có khoá thì không giải mã được dữ liệu — bảo vệ nằm ở tầng mật mã chứ không ở tầng giao diện.',
      ],
    },
    {
      headingVi: 'Clipboard và ảnh chụp khi chuyển ứng dụng',
      paragraphsVi: [
        'Nội dung sao chép vào clipboard có thể đọc được bởi ứng dụng khác. Với dữ liệu nhạy cảm, ứng dụng nên hạn chế việc cho phép sao chép hoặc đặt thời hạn cho nội dung.',
        'Hệ điều hành cũng chụp ảnh màn hình khi ứng dụng chuyển sang nền để hiển thị trong trình chuyển ứng dụng. Nếu màn hình đang hiển thị dữ liệu nhạy cảm, ảnh đó được lưu trên đĩa.',
      ],
    },
  ],

  'mod-mobile-network': [
    {
      headingVi: 'Endpoint chỉ dành cho mobile là bề mặt ít được kiểm thử',
      paragraphsVi: [
        'Nhiều hệ thống có một tập endpoint riêng phục vụ ứng dụng di động, thường vì lý do hiệu năng hoặc vì lịch sử phát triển.',
        'Những endpoint này ít được kiểm thử hơn phần web, đôi khi dùng mô hình xác thực khác, và đôi khi trả về nhiều dữ liệu hơn. Đối chiếu danh sách endpoint của ứng dụng di động với danh sách của web là một trong những bài tập có tỷ lệ thành công cao nhất.',
      ],
    },
    {
      headingVi: 'Xác thực chứng chỉ ở phía client',
      paragraphsVi: [
        'Nếu ứng dụng chấp nhận mọi chứng chỉ hoặc bỏ qua lỗi xác thực, dữ liệu trên đường truyền có thể bị đọc và sửa bởi bên đứng giữa.',
        'Dấu hiệu nhận biết khi kiểm thử: ứng dụng vẫn hoạt động bình thường khi lưu lượng đi qua proxy có chứng chỉ không được hệ thống tin. Đoạn mã bỏ qua lỗi thường được thêm cho môi trường phát triển rồi lọt vào bản phát hành.',
      ],
    },
    {
      headingVi: 'Lưu trữ và làm mới token',
      paragraphsVi: [
        'Ba câu hỏi cần trả lời: token được lưu ở đâu và với mức bảo vệ nào, nó tồn tại bao lâu, và cơ chế làm mới có cho phép kéo dài vô hạn một token đã bị đánh cắp không.',
        'Một điểm nữa: token có được ràng buộc với thiết bị không? Nếu không, token lấy từ một thiết bị dùng được ở bất kỳ đâu.',
      ],
    },
    {
      headingVi: 'Chuỗi từ liên kết sâu tới lời gọi API',
      paragraphsVi: [
        'Bề mặt có tác động cao nhất trong ứng dụng di động thường là một chuỗi: một liên kết từ bên ngoài mở ứng dụng, ứng dụng phân tích tham số trong liên kết, rồi thực hiện một lời gọi API dựa trên tham số đó.',
        'Nếu ứng dụng tin tham số trong liên kết mà không xác minh, và lời gọi API tương ứng thực hiện hành động có tác dụng, thì một liên kết đơn thuần trở thành lệnh thực thi.',
      ],
    },
  ],

  'mod-mobile-test-env': [
    {
      headingVi: 'Thiết bị thử nghiệm phải tách khỏi thiết bị cá nhân',
      paragraphsVi: [
        'Việc phân tích ứng dụng đòi hỏi những thay đổi làm giảm mức bảo mật của thiết bị: cài chứng chỉ của proxy, bật chế độ gỡ lỗi, và đôi khi dùng công cụ đo lường động.',
        'Không thực hiện những thay đổi này trên thiết bị bạn dùng cho tài khoản thật. Dùng máy ảo hoặc một thiết bị riêng, không đăng nhập tài khoản cá nhân nào.',
      ],
    },
    {
      headingVi: 'Máy ảo và thiết bị thật cho kết quả khác nhau',
      paragraphsVi: [
        'Máy ảo tiện và an toàn, nhưng thiếu một số khả năng phần cứng, đặc biệt là kho khoá dựa trên phần cứng và sinh trắc học thật.',
        'Hệ quả: kết luận rút ra trên máy ảo không tự động đúng trên thiết bị thật. Khi báo cáo, hãy ghi rõ bạn đã kiểm thử trên môi trường nào — điều này ảnh hưởng tới cách người xác minh tái hiện.',
      ],
    },
    {
      headingVi: 'Công cụ đo lường động và giới hạn của nó',
      paragraphsVi: [
        'Công cụ đo lường cho phép quan sát và thay đổi hành vi ứng dụng khi chạy. Nó rất mạnh cho việc hiểu ứng dụng làm gì.',
        'Nhưng có một cạm bẫy: việc bạn bỏ qua được một kiểm tra ở phía client không tự nó là lỗ hổng. Bạn đang chạy trên thiết bị của chính bạn với quyền cao. Câu hỏi quyết định luôn là máy chủ có chấp nhận kết quả đó không.',
      ],
    },
    {
      headingVi: 'Chỉ phân tích ứng dụng trong phạm vi',
      paragraphsVi: [
        'Chỉ cài và phân tích ứng dụng lab hoặc ứng dụng nằm rõ trong phạm vi một chương trình. Không phân tích ứng dụng của bên thứ ba chỉ vì nó có sẵn trên máy.',
        'Sau khi hoàn thành, hãy tắt chế độ gỡ lỗi và gỡ chứng chỉ đã cài để không để lại rủi ro trên thiết bị.',
      ],
    },
  ],

  // ── H: Cloud ────────────────────────────────────────────────────────
  'mod-cloud-shared-responsibility': [
    {
      headingVi: 'Ranh giới dịch chuyển theo loại dịch vụ',
      paragraphsVi: [
        'Nhà cung cấp chịu trách nhiệm bảo mật của hạ tầng; khách hàng chịu trách nhiệm bảo mật những gì họ đặt lên đó. Nhưng ranh giới cụ thể dịch chuyển tuỳ loại dịch vụ.',
        'Với dịch vụ ở mức hạ tầng, khách hàng lo gần như mọi thứ từ hệ điều hành trở lên. Với dịch vụ được quản lý hoàn toàn, phần của khách hàng thu hẹp lại còn cấu hình và dữ liệu. Nhưng phần cấu hình và dữ liệu không bao giờ biến mất.',
      ],
    },
    {
      headingVi: 'Vì sao điều này quyết định báo cáo của bạn',
      paragraphsVi: [
        'Nhiều chương trình bug bounty của nhà cung cấp cloud loại trừ tường minh các phát hiện thuộc về cấu hình của khách hàng. Nếu bạn tìm thấy một tài nguyên lưu trữ để công khai, đó gần như luôn là cấu hình của khách hàng chứ không phải lỗi của nền tảng.',
        'Xác định sớm điều này giúp bạn không mất thời gian, và giúp bạn gửi báo cáo cho đúng bên. Đây là kỹ năng quan trọng nhất của domain cloud, quan trọng hơn mọi kỹ thuật cụ thể.',
      ],
    },
    {
      headingVi: 'Phân cấp tài nguyên và kế thừa quyền',
      paragraphsVi: [
        'Các nền tảng lớn đều tổ chức tài nguyên theo cây nhiều tầng, với chính sách có thể gán ở mỗi tầng và kế thừa xuống dưới.',
        'Điều này có hai hệ quả: một chính sách gán ở tầng cao ảnh hưởng tới rất nhiều tài nguyên, và việc hiểu quyền thực tế của một danh tính đòi hỏi tính tổng mọi chính sách áp dụng cho nó dọc theo cây.',
      ],
    },
    {
      headingVi: 'Mặt phẳng điều khiển và mặt phẳng dữ liệu',
      paragraphsVi: [
        'Mặt phẳng điều khiển là các API quản trị: tạo, sửa, xoá tài nguyên. Mặt phẳng dữ liệu là việc sử dụng tài nguyên đó.',
        'Hai mặt phẳng có mô hình phân quyền và cơ chế ghi log riêng. Một danh tính có thể không đọc được dữ liệu qua mặt phẳng dữ liệu nhưng lại sửa được chính sách qua mặt phẳng điều khiển để tự cấp quyền — đó là một trong những đường leo thang phổ biến nhất.',
      ],
    },
  ],

  'mod-cloud-iam': [
    {
      headingVi: 'Đọc một chính sách nghĩa là trả lời bốn câu hỏi',
      paragraphsVi: [
        'Mọi hệ thống quản lý danh tính đều mô tả cùng một thứ, dù cú pháp khác nhau. Khi đọc một chính sách, hãy tìm bốn thành phần.',
      ],
      bulletsVi: [
        'Ai: danh tính nào được chính sách này áp dụng.',
        'Được làm gì: tập hành động cụ thể.',
        'Trên cái gì: tập tài nguyên cụ thể.',
        'Với điều kiện nào: ràng buộc bổ sung như nguồn gọi, thời gian, hay thuộc tính của request.',
      ],
    },
    {
      headingVi: 'Ký tự đại diện là dấu hiệu cần xem kỹ',
      paragraphsVi: [
        'Chính sách dùng ký tự đại diện cho hành động hoặc tài nguyên gần như luôn rộng hơn nhu cầu thực. Chúng thường được viết trong giai đoạn phát triển để hệ thống chạy được, rồi không bao giờ được thu hẹp.',
        'Khi gặp, hãy đặt câu hỏi cụ thể: danh tính này thực sự cần những hành động nào? Chênh lệch giữa quyền được cấp và nhu cầu thực chính là nội dung của báo cáo.',
      ],
    },
    {
      headingVi: 'Quan hệ tin cậy và việc nhận vai trò',
      paragraphsVi: [
        'Ngoài chính sách nói một danh tính làm được gì, còn có chính sách nói ai được phép trở thành một danh tính khác. Đây là cơ chế mạnh và cũng là nguồn của nhiều đường leo thang.',
        'Điểm cần kiểm tra: chính sách tin cậy có điều kiện ràng buộc đủ chặt không. Một chính sách cho phép bất kỳ danh tính nào trong một tài khoản khác nhận vai trò, mà không có điều kiện bổ sung, là quá rộng.',
      ],
    },
    {
      headingVi: 'Thông tin xác thực tạm thời và bí mật tĩnh',
      paragraphsVi: [
        'Xu hướng thiết kế hiện đại là thay bí mật tĩnh bằng thông tin xác thực ngắn hạn được cấp tự động cho workload dựa trên danh tính của nó.',
        'Lợi ích rõ ràng: không có bí mật nào để rò rỉ, và nếu có rò rỉ thì nó hết hạn nhanh. Khi rà soát, việc còn tồn tại khoá tĩnh dài hạn trong khi nền tảng đã hỗ trợ cơ chế tạm thời là điểm đáng nêu.',
      ],
    },
    {
      headingVi: 'Thực hành trên tài khoản riêng',
      paragraphsVi: [
        'Mọi bài tập cloud phải chạy trên tài khoản bạn lập riêng cho việc học. Đặt ngân sách và cảnh báo chi phí trước khi tạo tài nguyên đầu tiên.',
        'Đánh giá chính sách nên làm bằng cách đọc, không bằng cách thử thực hiện hành động. Trên hệ thống thật, việc thử một hành động để xem có được phép không chính là thực hiện hành động đó.',
      ],
    },
  ],

  'mod-cloud-aws-iam': [
    {
      headingVi: 'Hai loại chính sách và cách chúng kết hợp',
      paragraphsVi: [
        'Có chính sách gắn với danh tính, mô tả danh tính đó làm được gì. Và có chính sách gắn với tài nguyên, mô tả ai được truy cập tài nguyên đó.',
        'Quyền thực tế là kết quả của việc kết hợp cả hai, cộng thêm các ranh giới quyền và chính sách ở cấp tổ chức. Vì vậy đọc một chính sách đơn lẻ không đủ để kết luận về quyền thực tế.',
      ],
    },
    {
      headingVi: 'Nhận vai trò giữa các tài khoản',
      paragraphsVi: [
        'Cơ chế cho phép một danh tính ở tài khoản này tạm thời trở thành một vai trò ở tài khoản khác. Đây là nền tảng của việc tổ chức nhiều tài khoản, và cũng là đường leo thang khi cấu hình lỏng.',
        'Khi đọc chính sách tin cậy, hãy tìm: nó cho phép chủ thể nào, và có điều kiện bổ sung nào không. Một điều kiện thường dùng là yêu cầu bên gọi cung cấp một giá trị bí mật đã thoả thuận trước, nhằm chống trường hợp bên thứ ba bị lừa để gọi thay.',
      ],
    },
    {
      headingVi: 'Dịch vụ metadata của instance',
      paragraphsVi: [
        'Máy ảo trong môi trường cloud truy cập được một dịch vụ nội bộ trả về thông tin về chính nó, bao gồm thông tin xác thực tạm thời của vai trò gắn với máy.',
        'Đây là lý do SSRF trong ứng dụng chạy trên cloud có tác động cao hơn nhiều so với môi trường thông thường: nó biến thành đường lấy thông tin xác thực.',
        'Biện pháp giảm thiểu ở phía nền tảng là yêu cầu một quy trình xác thực nhiều bước trước khi trả dữ liệu, khiến các SSRF đơn giản không đủ để lấy được. Khi rà soát, kiểm tra xem cấu hình có bắt buộc phiên bản có bảo vệ hay không là một mục cụ thể và có giá trị.',
      ],
    },
    {
      headingVi: 'Khoảng trống ghi log',
      paragraphsVi: [
        'Nếu hoạt động ở mặt phẳng điều khiển không được ghi lại, hoặc log không được bảo vệ khỏi việc bị sửa, thì sự cố không thể điều tra.',
        'Đây là phát hiện đáng báo cáo dù nó không phải lỗ hổng trực tiếp. Hãy trình bày nó theo hướng tác động: nếu một danh tính bị chiếm, tổ chức sẽ không xác định được phạm vi thiệt hại.',
      ],
    },
  ],

  'mod-cloud-aws-storage': [
    {
      headingVi: 'Nhiều lớp kiểm soát chồng nhau',
      paragraphsVi: [
        'Quyền truy cập một tài nguyên lưu trữ đối tượng thường được quyết định bởi nhiều cơ chế cùng lúc: chính sách gắn với tài nguyên, danh sách kiểm soát truy cập kiểu cũ, chính sách của danh tính gọi, và các thiết lập chặn truy cập công khai ở cấp cao hơn.',
        'Phức tạp này chính là nguyên nhân của nhiều cấu hình sai. Khuyến nghị thực tế nhất là bật chặn truy cập công khai ở mức cao nhất có thể, để nó ghi đè mọi cấu hình lỏng ở dưới.',
      ],
    },
    {
      headingVi: 'URL ký sẵn là thông tin xác thực',
      paragraphsVi: [
        'URL ký sẵn cho phép truy cập một đối tượng mà không cần thông tin xác thực, trong một khoảng thời gian nhất định. Nó rất tiện cho việc chia sẻ tệp tạm thời.',
        'Nhưng cần hiểu đúng bản chất: bất kỳ ai có URL đó đều truy cập được. Vì vậy nó phải được đối xử như một bí mật — không đặt trong log, không gửi qua kênh không an toàn, và phải có thời hạn ngắn.',
      ],
    },
    {
      headingVi: 'Khi tìm thấy dữ liệu công khai',
      paragraphsVi: [
        'Nếu bạn phát hiện một tài nguyên lưu trữ trả về nội dung mà không cần xác thực, và nội dung đó có vẻ là dữ liệu thật, hãy dừng ngay.',
        'Không tải dữ liệu về. Ghi nhận sự tồn tại, chụp bằng chứng tối thiểu đã che tên tệp, và ước lượng mức nhạy cảm dựa trên cấu trúc thư mục và quy ước đặt tên. Việc tải về biến bạn thành nơi lưu trữ dữ liệu của người khác.',
      ],
    },
  ],

  'mod-cloud-azure': [
    {
      headingVi: 'Phân cấp và phạm vi gán quyền',
      paragraphsVi: [
        'Nền tảng tổ chức tài nguyên theo nhiều tầng, và quyền được gán ở một tầng sẽ áp dụng cho mọi thứ bên dưới. Gán quyền ở phạm vi rộng vì tiện là mẫu sai phổ biến.',
        'Khi rà soát, câu hỏi là: quyền này được gán ở phạm vi nào, và phạm vi đó có hẹp nhất có thể cho nhu cầu thực không?',
      ],
    },
    {
      headingVi: 'Danh tính được quản lý',
      paragraphsVi: [
        'Cơ chế này gán cho một tài nguyên tính toán một danh tính riêng, để nó gọi các dịch vụ khác mà không cần lưu bí mật.',
        'Đây là thiết kế tốt, nhưng rủi ro chuyển sang chỗ khác: nếu ứng dụng chạy trên tài nguyên đó có lỗi cho phép phát sinh request nội bộ, kẻ tấn công có thể mượn danh tính ấy. Vì vậy quyền của danh tính được quản lý cần hẹp đúng mức.',
      ],
    },
    {
      headingVi: 'Token chia sẻ có thời hạn',
      paragraphsVi: [
        'Tương tự URL ký sẵn ở các nền tảng khác, cơ chế này cấp quyền truy cập tạm thời tới tài nguyên lưu trữ mà không cần danh tính.',
        'Ba điểm cần kiểm tra: phạm vi quyền của token có hẹp không, thời hạn có ngắn không, và có cơ chế thu hồi trước hạn không. Token phạm vi rộng với thời hạn dài là phát hiện đáng báo cáo.',
      ],
    },
    {
      headingVi: 'Giao diện truy vấn dữ liệu tổ chức',
      paragraphsVi: [
        'Nền tảng cung cấp một API thống nhất để truy vấn thông tin về người dùng, nhóm và tài nguyên của tổ chức. Quyền truy cập API này thường được cấp cho ứng dụng tích hợp.',
        'Vì API này bao phủ rất rộng, phạm vi quyền cấp cho một ứng dụng tích hợp cần được xem xét cẩn thận. Một ứng dụng chỉ cần đọc hồ sơ người dùng nhưng được cấp quyền đọc toàn bộ thư mục là ví dụ điển hình của quyền quá rộng.',
      ],
    },
  ],

  'mod-cloud-gcp': [
    {
      headingVi: 'Kế thừa theo cây tài nguyên',
      paragraphsVi: [
        'Tài nguyên được tổ chức thành cây từ cấp tổ chức xuống dự án rồi tới từng tài nguyên. Chính sách gán ở một nút áp dụng cho toàn bộ cây con bên dưới.',
        'Hệ quả thực tế: một quyền gán nhầm ở cấp tổ chức ảnh hưởng tới mọi dự án. Khi đánh giá quyền của một danh tính, phải xét cả chuỗi từ gốc xuống.',
      ],
    },
    {
      headingVi: 'Tài khoản dịch vụ vừa là danh tính vừa là tài nguyên',
      paragraphsVi: [
        'Đây là điểm đặc thù đáng chú ý: một tài khoản dịch vụ vừa là một danh tính có quyền, vừa là một tài nguyên mà người khác có thể được cấp quyền trên nó.',
        'Vì vậy quyền mạo danh một tài khoản dịch vụ tương đương với việc có toàn bộ quyền của tài khoản đó. Khi rà soát, hãy kiểm tra ai được cấp quyền hành động thay mặt các tài khoản dịch vụ có đặc quyền cao.',
      ],
    },
    {
      headingVi: 'Khoá tĩnh và danh tính của workload',
      paragraphsVi: [
        'Khoá dạng tệp cho tài khoản dịch vụ là bí mật dài hạn: nếu rò rỉ, nó dùng được cho tới khi bị thu hồi thủ công. Chúng hay lọt vào repository và ảnh image.',
        'Cơ chế danh tính cho workload thay thế điều này bằng cách cấp thông tin xác thực ngắn hạn dựa trên nơi mã đang chạy. Khi rà soát, việc còn dùng khoá tĩnh trong khi cơ chế thay thế đã sẵn sàng là điểm nên nêu trong khuyến nghị.',
      ],
    },
  ],

  'mod-cloud-attack-classes': [
    {
      headingVi: 'Xâu chuỗi mới là điều làm nên tác động',
      paragraphsVi: [
        'Từng phát hiện cloud riêng lẻ thường ở mức thấp. Điều tạo ra tác động cao là chuỗi: một thông tin xác thực lộ ra dẫn tới một danh tính, danh tính đó có quyền nhận một vai trò khác, vai trò đó truy cập được dữ liệu.',
        'Vì vậy khi viết báo cáo cloud, hãy trình bày chuỗi thay vì liệt kê các phát hiện rời rạc. Chuỗi cho người đọc thấy tác động thật.',
      ],
    },
    {
      headingVi: 'Các nhóm vấn đề thường gặp',
      paragraphsVi: ['Phần lớn phát hiện cloud rơi vào một số nhóm lặp lại.'],
      bulletsVi: [
        'Lưu trữ để công khai ngoài dự định.',
        'Chính sách quyền rộng hơn nhu cầu thực.',
        'Quan hệ tin cậy thiếu điều kiện ràng buộc.',
        'Thông tin xác thực lộ trong mã, ảnh image hoặc log.',
        'Workload chạm tới được dịch vụ metadata.',
        'Truy cập chéo tài khoản hoặc chéo dự án ngoài dự định.',
        'Hàm serverless kích hoạt bởi sự kiện mà nguồn sự kiện không được xác thực.',
        'Token hoặc URL ký sẵn có phạm vi rộng và thời hạn dài.',
        'Khoảng trống ghi log ở mặt phẳng điều khiển.',
        'Quan hệ tin cậy giữa hệ thống tích hợp liên tục và tài khoản cloud.',
      ],
    },
    {
      headingVi: 'Đừng dùng thông tin xác thực tìm được',
      paragraphsVi: [
        'Khi bạn tìm thấy một thông tin xác thực, cám dỗ lớn nhất là thử xem nó làm được gì. Đừng.',
        'Thay vào đó, mô tả phạm vi quyền suy ra từ ngữ cảnh: tên biến, nơi tìm thấy, tài liệu công khai của dịch vụ tương ứng. Đặt việc xoay vòng lên đầu phần khuyến nghị.',
        'Lập luận này vẫn thuyết phục, và nó giữ bạn ở phía an toàn của ranh giới pháp lý.',
      ],
    },
  ],

  'mod-cloud-misconfig-vs-vuln': [
    {
      headingVi: 'Ba câu hỏi để phân loại',
      paragraphsVi: [
        'Khi có một phát hiện trên môi trường cloud, hãy trả lời ba câu hỏi trước khi viết báo cáo.',
      ],
      bulletsVi: [
        'Cấu hình gây ra vấn đề này do ai đặt: nhà cung cấp hay khách hàng?',
        'Nhà cung cấp có cung cấp đủ công cụ để khách hàng cấu hình an toàn không?',
        'Mặc định của nền tảng là an toàn hay không an toàn?',
      ],
    },
    {
      headingVi: 'Khi nào nó thành vấn đề của nhà cung cấp',
      paragraphsVi: [
        'Nếu mặc định của nền tảng không an toàn, hoặc giao diện khiến khách hàng dễ cấu hình sai mà không nhận ra, thì có lập luận rằng đây là vấn đề thiết kế của nền tảng.',
        'Đây là loại báo cáo khó nhưng có giá trị cao, vì sửa nó bảo vệ mọi khách hàng. Tuy nhiên hãy chuẩn bị lập luận kỹ và chấp nhận rằng nhà cung cấp có thể không đồng ý.',
      ],
    },
    {
      headingVi: 'Khi phát hiện thuộc về khách hàng',
      paragraphsVi: [
        'Nếu cấu hình sai thuộc về một khách hàng của nền tảng, báo cáo cho nhà cung cấp thường sẽ bị đóng là ngoài phạm vi — nhưng vấn đề vẫn có thật.',
        'Cách xử lý có trách nhiệm: nêu rõ ranh giới trách nhiệm trong báo cáo, hỏi nhà cung cấp xem họ có kênh chuyển tiếp tới khách hàng không, và tuyệt đối không tải dữ liệu về trong lúc chờ.',
      ],
    },
  ],

  // ── I: Container ────────────────────────────────────────────────────
  'mod-container-basics': [
    {
      headingVi: 'Container là cô lập, không phải ranh giới bảo mật mạnh',
      paragraphsVi: [
        'Container dùng các cơ chế của nhân hệ điều hành để tách biệt tiến trình. Điều này đủ để các workload không dẫm lên nhau, nhưng chúng vẫn chia sẻ cùng một nhân.',
        'Vì vậy container không mạnh bằng máy ảo về mặt cô lập. Khi đánh giá kiến trúc, hãy hỏi: nếu một container bị chiếm, ranh giới tiếp theo bảo vệ phần còn lại là gì?',
      ],
    },
    {
      headingVi: 'Cấu hình làm mất tác dụng cô lập',
      paragraphsVi: [
        'Một số cấu hình khiến ranh giới giữa container và máy chủ gần như biến mất. Đây là những thứ cần tìm đầu tiên khi rà soát.',
      ],
      bulletsVi: [
        'Chạy ở chế độ đặc quyền, tắt gần hết các hạn chế.',
        'Mount socket của runtime vào trong container, cho phép điều khiển toàn bộ runtime.',
        'Mount thư mục nhạy cảm của máy chủ vào container.',
        'Cấp thêm các khả năng đặc biệt của nhân mà workload không cần.',
        'Dùng chung không gian tiến trình hoặc mạng với máy chủ.',
      ],
    },
    {
      headingVi: 'Bí mật trong lớp image',
      paragraphsVi: [
        'Image gồm nhiều lớp xếp chồng. Xoá một tệp ở lớp sau không xoá nội dung của nó ở lớp trước — cơ chế giống hệt lịch sử của hệ thống quản lý mã nguồn.',
        'Hệ quả: một bí mật từng có mặt trong quá trình build vẫn đọc được bởi bất kỳ ai kéo image về, kể cả khi lệnh cuối đã xoá tệp chứa nó. Cách khắc phục là không đưa bí mật vào quá trình build, dùng cơ chế cung cấp bí mật lúc chạy.',
      ],
    },
    {
      headingVi: 'Ký image và nguồn gốc',
      paragraphsVi: [
        'Không có cơ chế xác minh, việc tin một image chỉ dựa vào niềm tin với nơi lưu trữ nó. Nếu kho lưu trữ bị chiếm hoặc có ai đó đẩy được image cùng tên, workload sẽ chạy mã không mong muốn.',
        'Ký image và xác minh chữ ký lúc triển khai giải quyết vấn đề này. Đây là cầu nối tự nhiên sang phần chuỗi cung ứng.',
      ],
    },
  ],

  'mod-k8s-rbac': [
    {
      headingVi: 'Quyền nhỏ có thể dẫn tới quyền lớn',
      paragraphsVi: [
        'Điểm đặc thù của mô hình phân quyền trong hệ điều phối container là nhiều quyền trông có vẻ hẹp thực chất mở đường tới quyền quản trị cụm.',
        'Vì vậy đánh giá không thể dừng ở việc đọc tên quyền. Phải hỏi: với quyền này, một danh tính có thể làm gì để có thêm quyền?',
      ],
    },
    {
      headingVi: 'Các quyền có khả năng leo thang',
      paragraphsVi: ['Một số nhóm quyền đặc biệt đáng chú ý vì hệ quả gián tiếp của chúng.'],
      bulletsVi: [
        'Quyền liệt kê hoặc theo dõi đối tượng bí mật thực chất cho đọc nội dung của chúng, không chỉ tên.',
        'Quyền tạo workload gián tiếp cho truy cập tới bí mật, cấu hình và danh tính gắn với không gian tên đó.',
        'Quyền tạo volume kiểu gắn thư mục máy chủ mở đường tới hệ thống tệp của node.',
        'Quyền truy cập kênh proxy tới thành phần chạy trên node cho phép thao tác trên mọi pod và có thể vòng qua cơ chế kiểm soát khi nạp.',
        'Quyền leo thang và quyền gán vai trò cho phép tự cấp quyền cao hơn quyền đang có.',
        'Quyền mạo danh cho phép hành động dưới danh nghĩa danh tính khác.',
        'Quyền phê duyệt yêu cầu ký chứng chỉ cho phép tạo danh tính mạo danh thành phần hệ thống.',
      ],
    },
    {
      headingVi: 'Danh tính gắn với workload',
      paragraphsVi: [
        'Mỗi pod chạy dưới một danh tính, và theo mặc định thông tin xác thực của danh tính đó được gắn vào bên trong pod.',
        'Hệ quả: nếu ứng dụng trong pod có lỗi cho phép đọc tệp hoặc thực thi lệnh, kẻ tấn công có ngay danh tính đó và mọi quyền của nó. Khi workload không cần gọi API của cụm, việc tắt gắn tự động là biện pháp đơn giản và hiệu quả.',
      ],
    },
  ],

  'mod-k8s-workload-security': [
    {
      headingVi: 'Mặc định là cho phép, nên phải chủ động siết',
      paragraphsVi: [
        'Trong cấu hình mặc định, mọi pod thường nói chuyện được với mọi pod khác trong cụm. Không có phân đoạn nào trừ khi bạn tạo ra.',
        'Vì vậy chính sách mạng theo hướng mặc định từ chối, rồi mở tường minh những luồng cần thiết, là một trong những biện pháp có hiệu quả cao nhất. Khi rà soát, việc không có chính sách mạng nào là một phát hiện đáng nêu.',
      ],
    },
    {
      headingVi: 'Chuẩn bảo mật cho pod',
      paragraphsVi: [
        'Nền tảng định nghĩa các mức chuẩn mô tả tập cấu hình được phép cho pod, từ mức không hạn chế tới mức hạn chế chặt.',
        'Áp dụng mức hạn chế cho các không gian tên chạy workload thông thường sẽ chặn tự động phần lớn cấu hình nguy hiểm mà bạn đã học ở module trước, mà không cần rà soát thủ công từng triển khai.',
      ],
    },
    {
      headingVi: 'Kiểm soát khi nạp là nơi thực thi chính sách',
      paragraphsVi: [
        'Cơ chế kiểm soát khi nạp cho phép kiểm tra và từ chối mọi đối tượng trước khi nó được ghi vào cụm. Đây là nơi để thực thi các quy tắc tổ chức tự đặt.',
        'Vì nó nằm trên đường đi của mọi thay đổi, quyền sửa cấu hình của cơ chế này là quyền rất mạnh — một danh tính sửa được nó có thể vô hiệu hoá toàn bộ chính sách bảo mật của cụm.',
      ],
    },
    {
      headingVi: 'Bí mật và cách chúng tới được workload',
      paragraphsVi: [
        'Đối tượng bí mật trong cụm không được mã hoá theo mặc định ở mọi cấu hình, và cách nó được đưa vào pod ảnh hưởng tới rủi ro: qua biến môi trường thì dễ lọt vào log, qua tệp gắn vào thì hạn chế hơn.',
        'Câu hỏi rà soát: bí mật được lưu thế nào ở kho dữ liệu của cụm, ai đọc được chúng qua API, và chúng được đưa vào workload theo cách nào.',
      ],
    },
  ],

  // ── J: Network ──────────────────────────────────────────────────────
  'mod-net-scope': [
    {
      headingVi: 'Địa chỉ IP không xác định quyền sở hữu',
      paragraphsVi: [
        'Đây là nguyên tắc quan trọng nhất của module. Hosting dùng chung, CDN và nền tảng đám mây khiến một địa chỉ phục vụ nhiều tổ chức khác nhau.',
        'Hệ quả: một phép thử ở tầng mạng nhắm tới địa chỉ đó có thể chạm tới hệ thống của tổ chức hoàn toàn không liên quan. Với hạ tầng dùng chung, hãy giữ mọi phép thử ở tầng ứng dụng và đi qua tên miền cụ thể trong phạm vi.',
      ],
    },
    {
      headingVi: 'Kiểm thử mạng thường bị giới hạn chặt hơn',
      paragraphsVi: [
        'Nhiều chương trình có quy định riêng cho phần mạng: giới hạn tốc độ, khung giờ, và danh sách kỹ thuật bị cấm. Lý do là phép thử ở tầng mạng dễ gây ảnh hưởng tới dịch vụ hơn so với ở tầng ứng dụng.',
        'Đọc kỹ phần này trước khi bắt đầu, và nếu chính sách không nói rõ về kiểm thử mạng, hãy coi như chưa được phép và hỏi trước.',
      ],
    },
    {
      headingVi: 'Ghi lại bằng chứng phạm vi',
      paragraphsVi: [
        'Với mỗi địa chỉ hoặc dải bạn định làm việc, hãy ghi lại đoạn chính sách cho thấy nó nằm trong phạm vi và ngày bạn đọc.',
        'Với tài sản mạng, việc này quan trọng hơn cả so với tài sản web, vì hậu quả của việc nhầm phạm vi ở tầng mạng nghiêm trọng hơn.',
      ],
    },
  ],

  'mod-net-services': [
    {
      headingVi: 'Nhận diện dịch vụ theo hành vi, không theo số cổng',
      paragraphsVi: [
        'Quy ước về số cổng chỉ là quy ước. Một dịch vụ có thể chạy ở bất kỳ cổng nào, và một cổng quen thuộc có thể phục vụ dịch vụ hoàn toàn khác.',
        'Vì vậy kết luận phải dựa trên hành vi giao thức quan sát được, không dựa trên số cổng. Đây cũng là một ví dụ nữa của nguyên tắc không tin kết quả công cụ mà chưa xác minh.',
      ],
    },
    {
      headingVi: 'Dịch vụ không bao giờ nên phơi ra Internet',
      paragraphsVi: [
        'Một số loại dịch vụ được thiết kế cho mạng nội bộ và không có cơ chế bảo vệ phù hợp với môi trường công khai.',
      ],
      bulletsVi: [
        'Dịch vụ cơ sở dữ liệu.',
        'Dịch vụ thư mục người dùng nội bộ.',
        'Giao diện quản trị thiết bị mạng.',
        'Bảng điều khiển giám sát nội bộ.',
        'Dịch vụ chia sẻ tệp trong mạng nội bộ.',
        'Cổng quản lý từ xa của máy chủ.',
      ],
    },
    {
      headingVi: 'Giao thức không mã hoá',
      paragraphsVi: [
        'Một số giao thức cũ truyền thông tin xác thực ở dạng đọc được. Trong mạng hiện đại, việc còn dùng chúng là phát hiện đáng nêu, dù mức nghiêm trọng phụ thuộc vào vị trí mạng và loại dữ liệu.',
        'Khi báo cáo, hãy nêu rõ điều kiện cần để khai thác: ai phải ở vị trí nào trong mạng mới quan sát được lưu lượng. Điều này giúp đánh giá mức độ chính xác thay vì thổi phồng.',
      ],
    },
  ],

  'mod-net-flaws': [
    {
      headingVi: 'Banner phiên bản không phải lỗ hổng',
      paragraphsVi: [
        'Đây là dạng báo cáo bị đóng nhiều nhất trong lĩnh vực hạ tầng. Trình quét báo phiên bản cũ, người báo cáo gán mức nghiêm trọng của lỗ hổng đã biết, và báo cáo bị đóng.',
        'Ba lý do khiến kết luận đó không hợp lệ: bản vá ngược thường không đổi số phiên bản hiển thị, banner có thể cấu hình tuỳ ý hoặc bị làm giả, và đường mã chứa lỗi có thể không được kích hoạt trong cấu hình hiện tại.',
      ],
    },
    {
      headingVi: 'Điều thực sự đáng báo cáo',
      paragraphsVi: [
        'Trọng tâm nên là những gì bạn quan sát trực tiếp và mô tả được tác động, chứ không phải suy luận từ số phiên bản.',
      ],
      bulletsVi: [
        'Dịch vụ nội bộ truy cập được từ Internet.',
        'Giao diện quản trị hoặc giám sát không giới hạn nguồn truy cập.',
        'Ranh giới phân đoạn mạng không được thực thi như thiết kế.',
        'Cấu hình mặc định còn nguyên trên hệ thống đã đưa vào vận hành.',
        'Thông tin nội bộ lộ qua thông báo lỗi hoặc trang trạng thái.',
      ],
    },
    {
      headingVi: 'Xác minh trước khi kết luận',
      paragraphsVi: [
        'Với mỗi phát hiện của công cụ, hãy tự tái hiện bằng cách kết nối thủ công và quan sát hành vi thật.',
        'Trong báo cáo, mô tả điều bạn quan sát được chứ không phải điều công cụ nói. Đây là khác biệt giữa một báo cáo hạ tầng được xử lý và một báo cáo bị đóng.',
      ],
    },
    {
      headingVi: 'Không khai thác trên hệ thống thật',
      paragraphsVi: [
        'Với hạ tầng, việc xác nhận sự tồn tại của vấn đề thường đã đủ cho báo cáo. Không cần và không nên đăng nhập bằng thông tin xác thực mặc định hay khai thác dịch vụ.',
        'Nếu chính sách yêu cầu bằng chứng sâu hơn, hãy hỏi trước thay vì tự quyết định đi xa hơn.',
      ],
    },
  ],

  'mod-net-tls-dns': [
    {
      headingVi: 'Những gì cần kiểm tra ở cấu hình TLS',
      paragraphsVi: [
        'Việc kiểm tra cấu hình TLS cho ra nhiều cảnh báo, nhưng không phải cảnh báo nào cũng đáng báo cáo. Hãy tập trung vào những thứ có tác động rõ.',
      ],
      bulletsVi: [
        'Chứng chỉ hết hạn hoặc sắp hết hạn.',
        'Tên trong chứng chỉ không khớp tên miền đang phục vụ.',
        'Chuỗi tin cậy không đầy đủ, khiến một số client không xác minh được.',
        'Còn chấp nhận phiên bản giao thức đã lỗi thời.',
        'Còn chấp nhận bộ mã không còn được coi là an toàn.',
      ],
    },
    {
      headingVi: 'Phân biệt vấn đề vận hành với lỗ hổng',
      paragraphsVi: [
        'Chứng chỉ hết hạn là vấn đề vận hành có tác động rõ ràng với người dùng, nhưng nhiều chương trình không coi nó là lỗ hổng bảo mật.',
        'Ngược lại, việc chấp nhận giao thức lỗi thời có tác động bảo mật thật nhưng cần điều kiện để khai thác. Hãy nêu điều kiện đó thay vì để người đọc tự đoán.',
      ],
    },
    {
      headingVi: 'Bản ghi DNS trỏ tới tài nguyên đã giải phóng',
      paragraphsVi: [
        'Khi tổ chức ngừng dùng một dịch vụ nhưng quên xoá bản ghi DNS, tài nguyên ở phía nhà cung cấp được giải phóng và người khác có thể yêu cầu chính tài nguyên đó.',
        'Dấu hiệu nhận biết là tên miền con trả về trang lỗi của nhà cung cấp cho biết tài nguyên chưa được cấu hình.',
        'Quy tắc quan trọng: không tự đăng ký tài nguyên đích để chứng minh. Việc đó đưa bạn vào vị trí kiểm soát một tài sản mang thương hiệu của tổ chức khác, và tạo ra rủi ro pháp lý dù ý định của bạn là tốt. Báo cáo dấu hiệu quan sát được là đủ.',
      ],
    },
  ],

  'mod-net-tools': [
    {
      headingVi: 'Hiểu ý nghĩa các trạng thái mà công cụ báo',
      paragraphsVi: [
        'Trình quét cổng phân biệt nhiều trạng thái, và ý nghĩa của chúng khác nhau. Một cổng được báo là bị lọc nghĩa là công cụ không nhận được phản hồi rõ ràng — có thể do firewall, có thể do mất gói.',
        'Với giao thức không có bắt tay, việc xác định trạng thái khó hơn nhiều và tỷ lệ kết quả sai cao hơn. Biết giới hạn này giúp bạn không kết luận vội.',
      ],
    },
    {
      headingVi: 'Bắt gói để xác nhận',
      paragraphsVi: [
        'Công cụ phân tích gói tin cho bạn thấy chính xác những gì đã đi qua đường truyền, thay vì diễn giải của công cụ khác. Đây là cách xác minh đáng tin nhất.',
        'Lưu ý về quyền riêng tư: chỉ bắt gói trên mạng của bạn hoặc mạng lab. Bắt gói trên mạng dùng chung thu cả lưu lượng của người khác, và điều đó có thể vi phạm quy định về quyền riêng tư ngay cả khi bạn không có ý định xấu.',
      ],
    },
    {
      headingVi: 'Không quét ngoài phạm vi, và không quét thiết bị nhạy cảm',
      paragraphsVi: [
        'Quét dải địa chỉ không được phép có thể vi phạm pháp luật ở nhiều nơi. Đây không phải vấn đề lý thuyết.',
        'Ngoài ra, có những loại thiết bị không nên quét ngay cả khi nằm trong phạm vi: thiết bị điều khiển công nghiệp và thiết bị y tế có thể ngừng hoạt động khi nhận lưu lượng bất thường, với hậu quả vượt xa lĩnh vực công nghệ thông tin.',
      ],
    },
  ],

  // ── K: Desktop ──────────────────────────────────────────────────────
  'mod-desktop-architecture': [
    {
      headingVi: 'Nhiều tiến trình với nhiều mức quyền',
      paragraphsVi: [
        'Ứng dụng desktop hiện đại thường không phải một tiến trình duy nhất. Có tiến trình giao diện chạy dưới quyền người dùng, có thể có dịch vụ nền chạy quyền cao để thực hiện các thao tác đặc quyền, và có kết nối tới backend từ xa.',
        'Bản đồ đầu tiên cần vẽ là: có những tiến trình nào, mỗi tiến trình chạy dưới quyền gì, và chúng nói chuyện với nhau qua kênh nào.',
      ],
    },
    {
      headingVi: 'Kênh liên tiến trình là ranh giới đặc quyền',
      paragraphsVi: [
        'Khi tiến trình quyền thấp gửi yêu cầu cho dịch vụ quyền cao, kênh giữa chúng là một ranh giới tin cậy đúng nghĩa.',
        'Mỗi hệ điều hành có cơ chế riêng cho việc này. Điểm chung là chúng đều cho phép bên nhận xác định danh tính bên gọi — và câu hỏi rà soát luôn là: dịch vụ này có thực sự kiểm tra không?',
      ],
    },
    {
      headingVi: 'Ứng dụng bọc nội dung web',
      paragraphsVi: [
        'Nhiều ứng dụng desktop thực chất là trình duyệt đóng gói cùng nội dung web. Điều này có nghĩa toàn bộ kiến thức web của bạn áp dụng trực tiếp.',
        'Nhưng có một khác biệt quan trọng: trong trình duyệt, mã bị giới hạn bởi sandbox; trong ứng dụng desktop, tuỳ cấu hình, mã có thể chạm tới hệ thống tệp và các khả năng của hệ điều hành. Cùng một lỗi chèn mã có hậu quả nghiêm trọng hơn nhiều.',
      ],
    },
  ],

  'mod-desktop-flaws': [
    {
      headingVi: 'Quyền tệp và thư mục',
      paragraphsVi: [
        'Nếu thư mục cài đặt hoặc thư mục dữ liệu cho phép người dùng thường ghi, và có tiến trình quyền cao đọc hoặc thực thi nội dung từ đó, đó là đường leo thang đặc quyền cục bộ.',
        'Đây là dạng lỗi cổ điển nhưng vẫn xuất hiện, thường do trình cài đặt đặt quyền quá rộng để tránh lỗi khi cập nhật.',
      ],
    },
    {
      headingVi: 'Cơ chế nạp thư viện',
      paragraphsVi: [
        'Chương trình thường nạp thư viện theo một thứ tự tìm kiếm nhất định. Nếu một trong các vị trí tìm kiếm cho phép người dùng thường ghi, có thể đặt vào đó một thư viện cùng tên.',
        'Khi rà soát, hãy xác định chương trình tìm thư viện ở đâu và kiểm tra quyền của từng vị trí đó.',
      ],
    },
    {
      headingVi: 'Cơ chế cập nhật',
      paragraphsVi: [
        'Cập nhật là đường đi thẳng tới việc thực thi mã trên máy người dùng, thường với quyền cao. Ba câu hỏi cần trả lời.',
      ],
      bulletsVi: [
        'Gói cập nhật được tải qua kênh mã hoá và xác thực chưa?',
        'Chữ ký của gói có được xác minh trước khi cài không, và khoá xác minh đến từ đâu?',
        'Có cơ chế chống hạ cấp không, để kẻ tấn công không ép cài lại phiên bản cũ có lỗi?',
      ],
    },
    {
      headingVi: 'Bí mật lưu cục bộ',
      paragraphsVi: [
        'Ứng dụng desktop thường cần lưu thông tin xác thực để người dùng không phải đăng nhập lại. Câu hỏi là lưu ở đâu và với mức bảo vệ nào.',
        'Mỗi hệ điều hành đều cung cấp kho lưu trữ bí mật gắn với tài khoản người dùng. Việc tự mã hoá bằng khoá cũng nằm trong tệp cấu hình không phải bảo vệ thật — đó chỉ là làm khó thêm một chút.',
      ],
    },
  ],

  'mod-desktop-electron': [
    {
      headingVi: 'Ba cấu hình quyết định mức rủi ro',
      paragraphsVi: [
        'Với ứng dụng dựa trên khung bọc nội dung web, ba thiết lập quyết định phần lớn mức độ an toàn. Các phiên bản gần đây đã đặt mặc định an toàn cho cả ba, nhưng ứng dụng cũ hoặc ứng dụng cố ý thay đổi mặc định vẫn tồn tại.',
      ],
      bulletsVi: [
        'Cách ly ngữ cảnh: tách ngữ cảnh chạy của mã ứng dụng khỏi ngữ cảnh của nội dung trang, ngăn nội dung sửa đối tượng toàn cục mà mã ứng dụng dựa vào.',
        'Tích hợp môi trường chạy máy chủ trong tiến trình hiển thị: nếu bật với nội dung không tin cậy, một lỗi chèn mã trở thành khả năng thao tác hệ thống tệp.',
        'Chế độ hộp cát cho tiến trình hiển thị: dùng cơ chế của hệ điều hành để giới hạn mạnh những gì tiến trình đó chạm tới được.',
      ],
    },
    {
      headingVi: 'Preload script là bề mặt API',
      paragraphsVi: [
        'Với cách ly ngữ cảnh bật, cầu nối duy nhất giữa nội dung trang và khả năng của ứng dụng là các hàm được phơi ra qua preload script.',
        'Vì vậy preload script chính là bề mặt API cần rà soát. Mỗi hàm phơi ra là một khả năng mà nội dung trang gọi được. Hàm phơi ra quá rộng, ví dụ một hàm nhận đường dẫn tuỳ ý để đọc tệp, làm mất phần lớn ý nghĩa của việc cách ly.',
      ],
    },
    {
      headingVi: 'Nội dung từ xa',
      paragraphsVi: [
        'Khuyến nghị rõ ràng là tránh tải và thực thi nội dung từ nguồn không tin cậy. Nếu buộc phải hiển thị nội dung bên ngoài, hãy làm trong một thành phần cách ly với các khả năng đặc quyền đã tắt.',
        'Khi rà soát, hãy xác định ứng dụng tải nội dung từ đâu. Nội dung đóng gói cùng ứng dụng có mức tin cậy khác hẳn nội dung tải từ máy chủ khi chạy.',
      ],
    },
  ],

  'mod-desktop-method': [
    {
      headingVi: 'Chuẩn bị môi trường trước khi cài',
      paragraphsVi: [
        'Thiết lập máy ảo sạch với công cụ quan sát đã sẵn sàng, rồi chụp ảnh trạng thái trước khi cài ứng dụng cần phân tích.',
        'Ảnh trạng thái cho phép bạn quay lại và lặp lại quá trình cài đặt nhiều lần, và cũng bảo vệ bạn nếu ứng dụng làm điều bất ngờ.',
      ],
    },
    {
      headingVi: 'Quan sát những gì ứng dụng tạo ra',
      paragraphsVi: [
        'Trong và sau khi cài, ghi lại mọi thay đổi mà ứng dụng gây ra cho hệ thống. So sánh trạng thái trước và sau là cách hiệu quả để không bỏ sót.',
      ],
      bulletsVi: [
        'Tệp và thư mục mới, kèm quyền của chúng.',
        'Mục cấu hình mới trong kho cấu hình của hệ thống.',
        'Dịch vụ nền được đăng ký và quyền chúng chạy.',
        'Cổng mạng được mở, cả cục bộ lẫn ra ngoài.',
        'Kênh liên tiến trình được tạo.',
        'Tác vụ được lên lịch chạy định kỳ.',
      ],
    },
    {
      headingVi: 'Kết hợp phân tích tĩnh và động',
      paragraphsVi: [
        'Phân tích tĩnh cho bạn thấy cấu trúc và các đường mã có thể có. Phân tích động cho bạn thấy đường nào thực sự được đi qua và với dữ liệu gì.',
        'Cách làm hiệu quả là xen kẽ: dùng phân tích tĩnh để xác định chỗ đáng quan tâm, rồi dùng phân tích động để xác nhận, rồi quay lại phân tích tĩnh với hiểu biết mới.',
      ],
    },
    {
      headingVi: 'Ranh giới pháp lý và phạm vi',
      paragraphsVi: [
        'Kiểm tra điều khoản giấy phép trước khi dịch ngược phần mềm thương mại. Một số giấy phép cấm việc này, và điều đó độc lập với việc chương trình bug bounty có nhận báo cáo hay không.',
        'Module này không hướng dẫn phân tích phần mềm độc hại. Nếu bạn gặp phần mềm có hành vi độc hại, hãy dừng và xử lý theo quy trình khác.',
      ],
    },
  ],

  // ── L: Binary ───────────────────────────────────────────────────────
  'mod-binary-foundations': [
    {
      headingVi: 'Vì sao cần hiểu tầng thấp',
      paragraphsVi: [
        'Ở các domain trước, bạn làm việc với dữ liệu có cấu trúc mà hệ thống tự phân tích. Ở đây, bạn làm việc với vùng nhớ thô nơi ranh giới giữa dữ liệu và cấu trúc phải do chương trình tự duy trì.',
        'Đây chính là nguồn gốc của cả một nhóm lỗ hổng: khi chương trình mất dấu ranh giới đó, dữ liệu đầu vào bắt đầu ảnh hưởng tới những thứ lẽ ra nó không chạm tới.',
      ],
    },
    {
      headingVi: 'Bố cục bộ nhớ của một tiến trình',
      paragraphsVi: [
        'Một tiến trình có nhiều vùng nhớ với mục đích và quyền khác nhau: vùng chứa mã thường chỉ đọc và thực thi được, vùng dữ liệu tĩnh, vùng cấp phát động, và vùng ngăn xếp cho lời gọi hàm.',
        'Hiểu bố cục này giải thích vì sao một số lỗi chỉ ảnh hưởng dữ liệu còn một số lỗi khác ảnh hưởng luồng điều khiển của chương trình.',
      ],
    },
    {
      headingVi: 'Quy ước gọi hàm và ngăn xếp',
      paragraphsVi: [
        'Khi một hàm được gọi, hệ thống lưu thông tin cần thiết để quay lại chỗ cũ, cùng với tham số và biến cục bộ, trong một khung trên ngăn xếp.',
        'Vì các thành phần này nằm cạnh nhau, việc ghi vượt quá kích thước của một biến cục bộ có thể chạm tới thông tin điều khiển. Đây là cơ chế đằng sau nhóm lỗi tràn bộ đệm cổ điển.',
      ],
    },
    {
      headingVi: 'Định dạng tệp thực thi và công cụ',
      paragraphsVi: [
        'Mỗi hệ điều hành có định dạng tệp thực thi riêng, nhưng chúng đều mô tả cùng những thứ: các phần của chương trình, quyền của từng phần, thư viện cần nạp, và điểm bắt đầu thực thi.',
        'Công cụ dịch ngược tái tạo mã ở dạng dễ đọc hơn từ mã máy. Cần nhớ kết quả đó là suy diễn, không phải mã nguồn gốc, và có thể sai — đặc biệt với mã đã tối ưu mạnh.',
      ],
    },
  ],

  'mod-binary-memory-safety': [
    {
      headingVi: 'Các lớp lỗi và nguyên nhân chung',
      paragraphsVi: [
        'Các nhóm lỗi bộ nhớ trông khác nhau nhưng đều bắt nguồn từ việc chương trình mất dấu về kích thước hoặc vòng đời của vùng nhớ.',
      ],
      bulletsVi: [
        'Ghi hoặc đọc vượt quá vùng đã cấp phát, do tính toán kích thước sai hoặc thiếu kiểm tra biên.',
        'Vấn đề số nguyên: phép tính kích thước tràn hoặc đổi dấu, tạo ra một giá trị nhỏ bất ngờ rồi dùng nó để cấp phát.',
        'Dùng vùng nhớ sau khi đã giải phóng, do vòng đời đối tượng không rõ ràng.',
        'Giải phóng hai lần cùng một vùng.',
        'Chuỗi định dạng do người dùng kiểm soát được truyền cho hàm định dạng.',
        'Nhầm lẫn kiểu, khi vùng nhớ được diễn giải theo một kiểu khác với kiểu thật.',
      ],
    },
    {
      headingVi: 'Vấn đề số nguyên thường đứng sau tràn bộ đệm',
      paragraphsVi: [
        'Nhiều trường hợp tràn bộ đệm thực chất có nguyên nhân sâu hơn là một phép tính kích thước sai. Chương trình tính kích thước cần cấp phát, phép tính tràn, kết quả là một số nhỏ, và vùng cấp phát nhỏ hơn dữ liệu sẽ ghi vào.',
        'Vì vậy khi phân tích nguyên nhân gốc, đừng dừng ở chỗ xảy ra ghi tràn. Hãy lần ngược tới nơi kích thước được tính.',
      ],
    },
    {
      headingVi: 'Sanitizer thay đổi cách làm việc',
      paragraphsVi: [
        'Công cụ kiểm tra khi chạy phát hiện truy cập bộ nhớ không hợp lệ ngay tại thời điểm xảy ra, thay vì để chương trình chạy tiếp và sập ở một chỗ hoàn toàn khác.',
        'Điều này rút ngắn rất nhiều thời gian tìm nguyên nhân gốc, và là lý do chúng gần như luôn được bật khi chạy fuzzing.',
      ],
    },
    {
      headingVi: 'Ranh giới của module',
      paragraphsVi: [
        'Mục tiêu ở đây là nhận ra mẫu mã dẫn tới lỗi, hiểu nguyên nhân gốc, và mô tả được nó trong báo cáo.',
        'Dự án này không hướng dẫn xây dựng bộ khai thác, và đặc biệt không hướng dẫn nhắm tới phần mềm đang được sử dụng thực tế. Với báo cáo, một reproducer tối thiểu kèm phân tích nguyên nhân gốc là đủ và thường được đánh giá cao hơn một bộ khai thác hoàn chỉnh.',
      ],
    },
  ],

  'mod-binary-mitigations': [
    {
      headingVi: 'Mỗi cơ chế chặn một bước khác nhau',
      paragraphsVi: [
        'Các cơ chế giảm thiểu không phải một khối. Mỗi cơ chế nhắm vào một bước cụ thể trong chuỗi từ lỗi tới việc kiểm soát chương trình.',
      ],
      bulletsVi: [
        'Ngẫu nhiên hoá vị trí nạp làm cho địa chỉ không đoán trước được, chặn bước xác định mục tiêu.',
        'Đánh dấu vùng dữ liệu không thực thi được, chặn việc chạy mã đặt trong vùng dữ liệu.',
        'Giá trị canh gác trên ngăn xếp phát hiện việc ghi tràn trước khi hàm trả về.',
        'Biên dịch mã ở dạng độc lập vị trí để cơ chế ngẫu nhiên hoá áp dụng được cho cả phần mã chính.',
        'Đặt bảng liên kết ở chế độ chỉ đọc sau khi nạp, chặn việc sửa con trỏ hàm trong đó.',
        'Kiểm tra tính toàn vẹn luồng điều khiển, hạn chế các đích nhảy hợp lệ.',
      ],
    },
    {
      headingVi: 'Không cơ chế nào là tuyệt đối',
      paragraphsVi: [
        'Mỗi cơ chế đều dựa trên một giả định, và khi giả định không còn đúng thì cơ chế mất tác dụng. Ví dụ, ngẫu nhiên hoá địa chỉ mất ý nghĩa nếu có một lỗ hổng khác làm lộ địa chỉ.',
        'Đây là lý do đánh giá rủi ro phải xét cả tổ hợp: một lỗi rò rỉ thông tin tưởng như vô hại có thể là mảnh ghép làm cho một lỗi khác trở nên khai thác được.',
      ],
    },
    {
      headingVi: 'Kiểm tra cơ chế nào đang bật',
      paragraphsVi: [
        'Trước khi đánh giá mức nghiêm trọng của một lỗi bộ nhớ, hãy kiểm tra binary được biên dịch với những cờ cứng hoá nào. Thông tin này có trong chính tệp thực thi.',
        'Trong báo cáo, nêu rõ điều này. Cùng một lỗi trên binary bật đủ cơ chế và trên binary không bật gì có mức rủi ro thực tế rất khác nhau.',
      ],
    },
  ],

  'mod-binary-fuzzing': [
    {
      headingVi: 'Chất lượng harness quyết định kết quả',
      paragraphsVi: [
        'Fuzzing là quá trình sinh đầu vào tự động và quan sát chương trình có hành xử bất thường không. Nhưng hiệu quả của nó phụ thuộc gần như hoàn toàn vào harness — đoạn mã kết nối bộ sinh đầu vào với hàm cần kiểm thử.',
        'Harness tốt gọi trực tiếp vào hàm phân tích dữ liệu, chạy nhanh, không phụ thuộc trạng thái bên ngoài, và cho phép công cụ đo được độ bao phủ. Harness tồi khiến hàng triệu lần chạy không tìm được gì.',
      ],
    },
    {
      headingVi: 'Đo bằng độ bao phủ, không bằng số lần chạy',
      paragraphsVi: [
        'Số lần chạy là chỉ số gây hiểu nhầm. Điều quan trọng là bao nhiêu phần của mã đã được thực thi, và độ bao phủ đó có còn tăng không.',
        'Khi độ bao phủ ngừng tăng, thêm thời gian chạy hiếm khi có ích. Lúc đó nên cải thiện corpus đầu vào hoặc viết lại harness để chạm tới phần mã chưa được thăm.',
      ],
    },
    {
      headingVi: 'Phân loại và thu nhỏ crash',
      paragraphsVi: [
        'Một chiến dịch fuzzing thường cho ra nhiều crash, và phần lớn là cùng một lỗi biểu hiện khác nhau. Việc đầu tiên là gom nhóm theo nguyên nhân gốc.',
        'Sau đó, với mỗi nhóm, thu nhỏ đầu vào gây crash về dạng tối thiểu vẫn tái hiện được. Một reproducer vài chục byte có giá trị hơn nhiều so với một tệp lớn, vì nó cho maintainer thấy ngay vấn đề nằm ở đâu.',
      ],
    },
    {
      headingVi: 'Ranh giới quan trọng',
      paragraphsVi: [
        'Chỉ fuzz phần mềm chạy trên máy của bạn. Fuzzing một dịch vụ trực tuyến là gửi lượng lớn đầu vào bất thường tới hệ thống của người khác — đó là hành vi gây tải, không phải nghiên cứu, và bị cấm ở hầu hết chính sách.',
        'Về mặt tài nguyên, fuzzing tiêu tốn nhiều CPU và sinh ra khối lượng tệp lớn. Chạy trong môi trường có giới hạn tài nguyên để không ảnh hưởng tới máy của chính bạn.',
      ],
    },
  ],
};
