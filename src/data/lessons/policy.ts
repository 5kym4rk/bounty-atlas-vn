import type { LessonSection } from '@/schemas/entities';

/**
 * Thân bài học cho domain A — chính sách, pháp lý, vận hành và báo cáo.
 *
 * Nội dung do dự án tự biên soạn bằng tiếng Việt, viết sau khi đối chiếu với
 * tài liệu chính sách của các nền tảng bug bounty và các chuẩn được tham chiếu
 * trong `src/data/standards`. Không sao chép nguyên văn từ nguồn nào.
 */
export const policyLessons: Record<string, LessonSection[]> = {
  'mod-policy-program-types': [
    {
      headingVi: 'Bốn hoạt động hay bị gộp làm một',
      paragraphsVi: [
        'Người mới thường nghĩ bug bounty, pentest, red team và CTF là bốn tên gọi của cùng một việc. Thực ra chúng khác nhau ở bốn điểm căn bản: ai thuê, phạm vi được xác định trước tới mức nào, trả công theo cái gì, và ràng buộc hợp đồng chặt tới đâu. Hiểu sai bốn điểm này là nguyên nhân của phần lớn rắc rối pháp lý mà người mới gặp phải.',
        'Điểm chung duy nhất của chúng là đều tìm lỗ hổng. Nhưng cách bạn được phép tìm, được phép đi xa tới đâu, và điều gì xảy ra nếu bạn đi quá giới hạn thì hoàn toàn khác nhau.',
      ],
      bulletsVi: [
        'Bug bounty: tổ chức công bố chính sách công khai, ai đủ điều kiện cũng tham gia được, trả theo từng phát hiện hợp lệ.',
        'Pentest: dịch vụ có hợp đồng, đội ngũ xác định, thường trả theo thời gian, phạm vi thoả thuận trước rất chi tiết.',
        'Red team: mô phỏng một kẻ tấn công thật để kiểm tra khả năng phát hiện và phản ứng của tổ chức, không nhằm liệt kê hết lỗ hổng.',
        'CTF: bài tập trong môi trường được dựng riêng để học, không có hệ thống thật nào bị ảnh hưởng.',
      ],
    },
    {
      headingVi: 'VDP khác bug bounty ở chỗ nào',
      paragraphsVi: [
        'Vulnerability Disclosure Program (VDP) là kênh chính thức để bất kỳ ai báo cáo lỗ hổng cho một tổ chức. Nó nói với thế giới: "Nếu bạn tìm thấy vấn đề, đây là cách báo cho chúng tôi, và chúng tôi cam kết không kiện bạn nếu bạn hành động thiện chí."',
        'Bug bounty program đi thêm một bước: có ngân sách trả thưởng theo từng phát hiện. Nhiều tổ chức bắt đầu bằng VDP rồi mới mở bug bounty khi quy trình xử lý nội bộ đã đủ trưởng thành.',
        'Điều quan trọng với bạn: cả hai đều có chính sách, đều có phạm vi, và đều cần đọc kỹ. Việc một chương trình không trả thưởng không có nghĩa là bạn được phép làm gì tuỳ ý trên đó.',
      ],
    },
    {
      headingVi: 'Công khai, riêng tư và theo lời mời',
      paragraphsVi: [
        'Chương trình công khai cho bất kỳ ai tham gia. Đây là nơi bạn bắt đầu, nhưng cũng là nơi đông người nhất, nên rủi ro báo cáo bị trùng lặp cao hơn hẳn.',
        'Chương trình riêng tư chỉ mở cho một nhóm người nghiên cứu được mời. Lời mời thường đến sau khi bạn đã có lịch sử báo cáo chất lượng trên các chương trình công khai. Ít người tham gia nghĩa là ít trùng lặp hơn, nhưng đổi lại phạm vi thường hẹp và yêu cầu cao hơn.',
        'Đừng coi việc được mời là mục tiêu tự thân. Nó là hệ quả tự nhiên của việc viết báo cáo tốt và tuân thủ chính sách một cách nhất quán.',
      ],
    },
    {
      headingVi: 'Chương trình do nền tảng quản lý và tổ chức tự quản',
      paragraphsVi: [
        'Ở chương trình do nền tảng quản lý, đội triage của nền tảng đọc báo cáo trước, xác minh, rồi mới chuyển cho tổ chức. Bạn thường nhận phản hồi nhanh hơn và nhất quán hơn, nhưng người đọc báo cáo đầu tiên không phải người hiểu sản phẩm sâu nhất.',
        'Ở chương trình tự quản, đội bảo mật của chính tổ chức xử lý. Họ hiểu ngữ cảnh kinh doanh rõ hơn nên đánh giá tác động chính xác hơn, nhưng thời gian phản hồi phụ thuộc hoàn toàn vào nguồn lực nội bộ của họ.',
        'Biết mình đang gửi cho ai giúp bạn viết báo cáo phù hợp. Với đội triage của nền tảng, bước tái hiện phải cực kỳ rõ vì họ không biết sản phẩm. Với đội nội bộ, phần tác động kinh doanh mới là thứ họ quan tâm nhất.',
      ],
    },
  ],

  'mod-policy-safe-harbor': [
    {
      headingVi: 'Safe harbor là gì',
      paragraphsVi: [
        'Safe harbor là cam kết bằng văn bản của tổ chức rằng họ sẽ không theo đuổi pháp lý với người nghiên cứu hành động thiện chí, đúng phạm vi và tuân thủ chính sách của họ.',
        'Nó tồn tại vì luật chống truy cập trái phép ở nhiều nơi được viết từ trước khi bug bounty ra đời, và câu chữ của chúng có thể áp dụng cho cả nghiên cứu bảo mật hợp pháp. Safe harbor là cách tổ chức nói rõ: hoạt động này chúng tôi cho phép, đừng lo.',
      ],
    },
    {
      headingVi: 'Safe harbor có điều kiện, không phải giấy phép trắng',
      paragraphsVi: [
        'Bảo vệ chỉ áp dụng khi bạn ở trong ranh giới mà chính sách vạch ra. Ba hành vi thường làm bạn rơi ra ngoài phạm vi bảo vệ: đi ra ngoài danh sách tài sản, vượt quá mức chứng minh tối thiểu, và làm những việc mà chính sách liệt kê là bị cấm.',
        'Một nguyên tắc thực hành tốt được nêu trong tài liệu của nền tảng: bảo vệ nên áp dụng tự động khi điều kiện thiện chí được đáp ứng, chứ không nên bắt người nghiên cứu phải chấp nhận một bản điều khoản riêng trước khi bắt đầu.',
        'Điều này có nghĩa thực tế với bạn: nếu bạn thấy một chương trình yêu cầu ký thoả thuận bảo mật trước khi cho biết phạm vi, hãy cân nhắc kỹ. Ký xong bạn có thể mất quyền công bố ngay cả với những phát hiện bạn tìm được sau này bằng cách khác.',
      ],
    },
    {
      headingVi: 'Safe harbor riêng cho nghiên cứu AI',
      paragraphsVi: [
        'Một số nền tảng đã tách riêng khung bảo vệ cho nghiên cứu hệ thống AI, vì loại nghiên cứu này có đặc thù: ranh giới giữa "thử xem mô hình phản ứng thế nào" và "tấn công hệ thống" mờ hơn nhiều so với web truyền thống.',
        'Nếu bạn định nghiên cứu tính năng AI của một sản phẩm, hãy tìm xem chương trình có điều khoản riêng cho nó không. Đừng giả định safe harbor cho web tự động phủ luôn phần AI.',
      ],
    },
    {
      headingVi: 'Công bố thuộc về chính sách, không thuộc về bạn',
      paragraphsVi: [
        'Nhiều người nghĩ tìm ra lỗ hổng thì có quyền viết bài về nó. Trên thực tế, điều khoản công bố nằm trong chính sách chương trình, và bạn đã đồng ý với nó khi tham gia.',
        'Việc lỗ hổng đã được vá không tự động cho phép công bố. Nhiều chính sách yêu cầu chờ thêm một khoảng thời gian, hoặc yêu cầu tổ chức xem trước bài viết. Cách xử lý đúng là hỏi trước và thống nhất một mốc thời gian cụ thể.',
        'Responsible disclosure và coordinated vulnerability disclosure về cơ bản mô tả cùng một tinh thần: báo cho bên có thể sửa trước, cho họ thời gian hợp lý, rồi mới công bố. Cách gọi thứ hai được ưa dùng hơn vì nó nhấn mạnh sự phối hợp thay vì ám chỉ ai đó "vô trách nhiệm".',
      ],
    },
  ],

  'mod-policy-scope-reading': [
    {
      headingVi: 'Chính sách là hợp đồng vận hành của bạn',
      paragraphsVi: [
        'Trang chính sách không phải thủ tục hình thức. Nó là văn bản duy nhất xác định điều gì bạn được làm và điều gì biến bạn thành người truy cập trái phép. Đọc nó kỹ như đọc hợp đồng lao động.',
        'Cách làm hiệu quả: chép chính sách thành một checklist cá nhân, mỗi mục một dòng, rồi tự trả lời từng dòng trước khi gửi request đầu tiên. Nếu còn một dòng chưa trả lời được, đó là dòng bạn phải hỏi chương trình.',
      ],
    },
    {
      headingVi: 'Các mục phải đọc và hệ quả khi bỏ qua',
      paragraphsVi: [
        'Một chính sách đầy đủ có các mục dưới đây. Bỏ sót mục nào cũng dẫn tới một loại rắc rối riêng.',
      ],
      bulletsVi: [
        'Phạm vi trong và ngoài: bỏ qua thì bạn kiểm thử tài sản không được phép, mất bảo vệ safe harbor.',
        'Danh sách hành vi bị cấm: bỏ qua thì bạn làm đúng kỹ thuật nhưng sai cách, báo cáo bị đóng và uy tín giảm.',
        'Giới hạn kỹ thuật và khung giờ: bỏ qua thì bạn có thể gây ảnh hưởng dịch vụ và bị coi là tấn công.',
        'Quy định xử lý dữ liệu: bỏ qua thì bạn giữ dữ liệu người thật quá mức, tạo rủi ro pháp lý cho cả hai bên.',
        'Điều khoản công bố: bỏ qua thì bạn viết bài quá sớm và vi phạm thoả thuận.',
        'Mô hình severity và chính sách trùng lặp: bỏ qua thì kỳ vọng của bạn lệch với thực tế xử lý.',
        'Điều kiện nhận thưởng: bỏ qua thì bạn tốn công cho loại phát hiện chương trình không nhận.',
      ],
    },
    {
      headingVi: 'Giới hạn kỹ thuật là ràng buộc thật',
      paragraphsVi: [
        'Nhiều chính sách nêu rõ giới hạn tốc độ request, khung giờ được phép kiểm thử, và yêu cầu bạn phải dùng tài khoản thử nghiệm do chính bạn tạo với một quy ước đặt tên nhất định.',
        'Những giới hạn này không phải gợi ý. Vượt qua chúng thường bị coi là gây ảnh hưởng dịch vụ, và đó là một trong những cách nhanh nhất để bị loại khỏi chương trình bất kể phát hiện của bạn có giá trị tới đâu.',
        'Nếu bạn cần chạy thứ gì đó có khả năng tạo tải, hãy hỏi trước. Chương trình gần như luôn thích được hỏi hơn là phải xử lý sự cố.',
      ],
    },
    {
      headingVi: 'Chính sách thay đổi theo thời gian',
      paragraphsVi: [
        'Phạm vi hôm nay không nhất thiết là phạm vi tháng sau. Tổ chức thêm tài sản, gỡ tài sản, đổi quy định dữ liệu, siết hoặc nới điều khoản công bố.',
        'Vì vậy hãy lưu lại bản chính sách kèm ngày bạn đọc. Nếu sau này có tranh chấp, bản lưu đó chứng minh bạn hành động đúng theo những gì được công bố tại thời điểm bạn kiểm thử.',
        'Kiểm tra lại chính sách trước mỗi phiên kiểm thử dài, và một lần nữa ngay trước khi gửi báo cáo.',
      ],
    },
  ],

  'mod-policy-asset-identifiers': [
    {
      headingVi: 'Tài sản được mô tả bằng nhiều loại định danh',
      paragraphsVi: [
        'Chính sách không chỉ liệt kê tên miền. Tuỳ loại sản phẩm, tài sản có thể được mô tả bằng rất nhiều dạng định danh khác nhau, và mỗi dạng có cách xác định "thuộc phạm vi" riêng.',
      ],
      bulletsVi: [
        'Tên miền, có hoặc không có wildcard.',
        'Dải địa chỉ IP dạng CIDR.',
        'Định danh ứng dụng di động, thường là package name hoặc bundle identifier.',
        'Tệp thực thi của ứng dụng desktop, kèm phiên bản.',
        'Repository mã nguồn.',
        'Địa chỉ hợp đồng thông minh trên một chain cụ thể.',
        'Endpoint API, đôi khi kèm phiên bản.',
        'Thiết bị phần cứng, kèm model và firmware version.',
      ],
    },
    {
      headingVi: 'Wildcard không có nghĩa là mọi thứ',
      paragraphsVi: [
        'Khi chính sách ghi phạm vi dạng bao trùm mọi tên miền con, người mới thường hiểu là "bất cứ thứ gì có tên miền đó đều được thử". Đây là hiểu nhầm tốn kém nhất trong giai đoạn đầu.',
        'Một tên miền con có thể trỏ tới dịch vụ của nhà cung cấp bên thứ ba: hệ thống trạng thái, nền tảng hỗ trợ khách hàng, công cụ khảo sát, dịch vụ email marketing. Hạ tầng đó không thuộc tổ chức, và tổ chức không có quyền cho phép bạn kiểm thử nó.',
        'Quy tắc thực hành: trước khi thử một tên miền con, hãy xác định ai thực sự vận hành nó. Nếu có dấu hiệu thuộc bên thứ ba, dừng lại và hỏi chương trình.',
      ],
    },
    {
      headingVi: 'Hạ tầng dùng chung',
      paragraphsVi: [
        'Nhiều tổ chức đặt sản phẩm trên hạ tầng dùng chung: cùng một địa chỉ IP phục vụ hàng trăm khách hàng khác nhau, cùng một cụm CDN phục vụ vô số tên miền.',
        'Điều này có nghĩa: địa chỉ IP không đủ để xác định quyền sở hữu. Một phép thử ở tầng mạng nhắm tới địa chỉ đó có thể chạm tới hệ thống của một tổ chức hoàn toàn không liên quan.',
        'Với hạ tầng dùng chung, hãy giữ mọi phép thử ở tầng ứng dụng, đi qua tên miền cụ thể trong phạm vi, và tránh mọi thao tác ở tầng mạng.',
      ],
    },
    {
      headingVi: 'Ghi lại bằng chứng phạm vi',
      paragraphsVi: [
        'Với mỗi tài sản bạn định kiểm thử, hãy ghi lại: loại định danh, đoạn chính sách cho thấy nó nằm trong phạm vi, và ngày bạn đọc đoạn đó.',
        'Ghi chú này mất một phút nhưng có giá trị rất lớn. Nó giúp bạn viết phần "bằng chứng phạm vi" trong báo cáo, và bảo vệ bạn nếu phạm vi thay đổi sau đó.',
      ],
    },
  ],

  'mod-policy-stop-rules': [
    {
      headingVi: 'Biết dừng quan trọng hơn biết tiếp',
      paragraphsVi: [
        'Kỹ năng phân biệt người nghiên cứu chuyên nghiệp với người nghiệp dư không phải là biết nhiều kỹ thuật hơn. Đó là biết chính xác thời điểm phải dừng lại.',
        'Chín tình huống dưới đây là ranh giới. Khi chạm tới bất kỳ tình huống nào, việc đúng đắn là ghi lại điều đã có, dừng, và báo cáo — chứ không phải đi thêm một bước nữa để "cho chắc".',
      ],
      bulletsVi: [
        'Bạn chạm tới dữ liệu của người khác.',
        'Có dấu hiệu gây suy giảm dịch vụ.',
        'Phải vượt quá PoC tối thiểu mới chứng minh được.',
        'Phải thay đổi hoặc xoá dữ liệu.',
        'Phải gửi email hoặc tin nhắn hàng loạt.',
        'Phải thao tác lên tài khoản thật của người khác.',
        'Phải tác động tới nhà cung cấp bên thứ ba.',
        'Chính sách chương trình không rõ ràng.',
        'Bạn không chắc asset nằm trong phạm vi.',
      ],
    },
    {
      headingVi: 'PoC tối thiểu là gì',
      paragraphsVi: [
        'PoC tối thiểu là bằng chứng nhỏ nhất đủ để chứng minh vấn đề tồn tại, với tác động thấp nhất có thể lên hệ thống và lên người dùng thật.',
        'Nó không phải là bằng chứng thuyết phục nhất bạn có thể tạo ra. Đây là điểm mà nhiều người mới hiểu ngược: họ nghĩ càng nhiều bằng chứng càng tốt, trong khi thực tế là càng nhiều dữ liệu người khác bạn giữ thì rủi ro pháp lý của bạn càng lớn.',
      ],
      bulletsVi: [
        'Với lỗi phân quyền: hai tài khoản do chính bạn tạo, một bản ghi, đã che thông tin định danh.',
        'Với SSRF: một request tới máy chủ do bạn kiểm soát, có ghi log — không cần lấy thông tin xác thực nội bộ.',
        'Với injection vào cơ sở dữ liệu: một giá trị vô hại như phiên bản hệ quản trị — không trích xuất dữ liệu người dùng.',
        'Với lỗi logic: chứng minh hệ thống chấp nhận một trạng thái không hợp lệ — không hoàn tất giao dịch thật.',
      ],
    },
    {
      headingVi: 'Khi bạn đã lỡ đi quá xa',
      paragraphsVi: [
        'Chuyện này xảy ra, kể cả với người cẩn thận. Điều quyết định không phải là bạn có lỡ hay không, mà là bạn xử lý thế nào sau đó.',
        'Quy trình đúng: dừng ngay lập tức, ghi lại chính xác việc đã xảy ra và thời điểm, không thu thập thêm gì nữa, xoá dữ liệu đã tiếp xúc, rồi chủ động báo cho chương trình kèm mô tả trung thực.',
        'Chủ động báo cáo gần như luôn tốt hơn im lặng. Tổ chức phát hiện ra sau và thấy bạn không nói gì sẽ xử lý nghiêm khắc hơn nhiều so với việc bạn tự khai báo.',
      ],
    },
  ],

  'mod-policy-worklog': [
    {
      headingVi: 'Vì sao cần nhật ký kiểm thử',
      paragraphsVi: [
        'Nhật ký kiểm thử phục vụ hai mục đích rất khác nhau. Thứ nhất, nó giúp bạn viết báo cáo nhanh và chính xác vì mọi chi tiết đã được ghi lại ngay lúc xảy ra. Thứ hai, và quan trọng hơn, nó bảo vệ bạn khi có tranh chấp.',
        'Nếu tổ chức thấy hoạt động bất thường trong log của họ và hỏi bạn đã làm gì, một nhật ký chi tiết trả lời được câu hỏi đó ngay. Không có nhật ký, bạn phải dựa vào trí nhớ, và trí nhớ không phải bằng chứng.',
      ],
    },
    {
      headingVi: 'Nội dung tối thiểu của một dòng nhật ký',
      paragraphsVi: [
        'Ghi ngay lúc thao tác, không ghi lại từ trí nhớ vào cuối ngày. Mỗi dòng cần đủ để người khác tái hiện được ngữ cảnh.',
      ],
      bulletsVi: [
        'Thời gian, kèm múi giờ.',
        'Tài sản và endpoint cụ thể.',
        'Tài khoản thử nghiệm nào đang được dùng và với vai trò gì.',
        'Hành động đã thực hiện, mô tả bằng lời.',
        'Kết quả quan sát được.',
        'Quyết định tiếp theo: đi tiếp, dừng, hay hỏi chương trình.',
      ],
    },
    {
      headingVi: 'Quản lý bằng chứng và bí mật',
      paragraphsVi: [
        'Bằng chứng nên ở mức đủ dùng. Che thông tin định danh trước khi lưu, không phải sau khi lưu. Một khi dữ liệu chưa che đã nằm trên đĩa của bạn, nó là dữ liệu bạn đang giữ.',
        'Token, cookie phiên và khoá API không bao giờ nên nằm trong ghi chú dạng văn bản thuần. Nếu bạn cần ghi lại rằng một token tồn tại, hãy ghi mô tả của nó — loại token, phạm vi quyền, nơi tìm thấy — chứ không phải giá trị.',
        'Sau khi báo cáo được xử lý xong, xoá dữ liệu đã tiếp xúc và ghi lại việc xoá đó vào nhật ký. Nhiều chính sách yêu cầu điều này một cách tường minh.',
      ],
    },
    {
      headingVi: 'Theo dõi nhiều chương trình cùng lúc',
      paragraphsVi: [
        'Khi bạn tham gia nhiều chương trình, rủi ro lớn nhất là nhầm lẫn phạm vi giữa chúng: áp dụng một kỹ thuật được phép ở chương trình A lên tài sản của chương trình B nơi kỹ thuật đó bị cấm.',
        'Cách phòng tránh đơn giản: mỗi chương trình một thư mục riêng, mỗi thư mục có bản lưu chính sách kèm ngày đọc, và mỗi phiên kiểm thử chỉ làm việc với một chương trình.',
      ],
    },
  ],

  'mod-policy-practice-plan': [
    {
      headingVi: 'Kế hoạch theo tuần dựa trên thời gian thật',
      paragraphsVi: [
        'Kế hoạch học chỉ hữu ích khi nó dựa trên số giờ bạn thực sự có, không phải số giờ bạn mong có. Người học năm giờ mỗi tuần một cách đều đặn tiến xa hơn người dự định hai mươi giờ rồi bỏ sau ba tuần.',
        'Một cách chia hợp lý cho người mới: khoảng một nửa thời gian cho nền tảng và lý thuyết, một phần ba cho lab thực hành, phần còn lại cho việc đọc báo cáo công khai và luyện viết.',
      ],
    },
    {
      headingVi: 'Đặt mục tiêu theo kỹ năng, không theo số báo cáo',
      paragraphsVi: [
        'Mục tiêu kiểu "gửi năm báo cáo tháng này" dẫn tới hành vi sai: gửi những phát hiện chưa xác minh, thổi phồng tác động, và nản lòng khi bị đóng.',
        'Mục tiêu kiểu "tháng này tôi lập được ma trận vai trò × đối tượng cho ba ứng dụng khác nhau" thì đo được, kiểm soát được, và tạo ra kỹ năng thật. Báo cáo hợp lệ là hệ quả của kỹ năng, không phải mục tiêu trực tiếp.',
      ],
    },
    {
      headingVi: 'Trùng lặp là chuyện bình thường',
      paragraphsVi: [
        'Trên chương trình công khai đông người, việc báo cáo của bạn trùng với một báo cáo đã có là điều sẽ xảy ra thường xuyên. Nó không phản ánh chất lượng công việc của bạn.',
        'Cách giảm rủi ro trùng lặp: chọn tài sản ít người chú ý, đi sâu vào logic nghiệp vụ thay vì các lỗi kỹ thuật phổ biến, và làm việc với chương trình mới mở hoặc tài sản vừa được thêm vào phạm vi.',
      ],
    },
    {
      headingVi: 'Tránh kiệt sức',
      paragraphsVi: [
        'Bug bounty có đặc điểm dễ gây kiệt sức: phần thưởng không đều, phản hồi có thể chậm, và cảm giác thất bại xuất hiện thường xuyên hơn cảm giác thành công.',
        'Dấu hiệu cần chú ý: bạn kiểm thử lâu hơn nhưng ghi chép ít đi, bạn bắt đầu bỏ qua bước đọc chính sách, bạn thấy khó chịu với phản hồi của triager. Đó là lúc nên nghỉ, không phải lúc nên cố thêm.',
        'Về thuế, thanh toán và định danh: mỗi nơi cư trú có quy định khác nhau. Dự án này chỉ nêu ở mức nhắc bạn kiểm tra quy định tại nơi bạn sống, và không hứa hẹn bất kỳ mức thu nhập nào.',
      ],
    },
  ],

  'mod-policy-report-structure': [
    {
      headingVi: 'Báo cáo là sản phẩm của bạn',
      paragraphsVi: [
        'Người nhận báo cáo không thấy quá trình bạn làm việc. Họ chỉ thấy văn bản bạn gửi. Vì vậy chất lượng báo cáo, chứ không phải độ tinh vi của kỹ thuật, quyết định phát hiện của bạn được xử lý thế nào.',
        'Thứ tự viết hiệu quả là ngược với thứ tự đọc: viết bước tái hiện trước, rồi mới viết tóm tắt. Tóm tắt là bản rút gọn của điều bạn đã chứng minh được, nên không thể viết nó trước khi biết mình chứng minh được gì.',
      ],
    },
    {
      headingVi: 'Tiêu đề làm được ba việc trong một dòng',
      paragraphsVi: [
        'Tiêu đề tốt nêu tài sản, loại vấn đề và tác động. Nó cho phép người phân loại quyết định mức ưu tiên mà chưa cần đọc phần thân.',
        'So sánh: "Lỗ hổng nghiêm trọng trong ứng dụng" không nói được gì. "IDOR ở endpoint xem hoá đơn cho phép người dùng bất kỳ đọc hoá đơn của người khác" nói đủ cả ba.',
      ],
    },
    {
      headingVi: 'Bước tái hiện là phần bị viết sai nhiều nhất',
      paragraphsVi: [
        'Không tái hiện được là lý do phổ biến nhất khiến báo cáo bị kéo dài hoặc bị đóng. Vấn đề thường không phải người đọc thiếu năng lực, mà là báo cáo bỏ sót một chi tiết môi trường mà người viết coi là hiển nhiên.',
        'Tiêu chuẩn để tự kiểm tra: một người chưa từng thấy hệ thống này có làm theo được không mà không cần hỏi bạn câu nào? Nếu câu trả lời không chắc chắn là có, hãy viết lại.',
      ],
      bulletsVi: [
        'Nêu rõ tài khoản nào, vai trò nào, tạo bằng cách nào.',
        'Nêu trạng thái ban đầu cần có trước khi bắt đầu.',
        'Đánh số từng bước, mỗi bước một hành động.',
        'Ghi kết quả quan sát được sau mỗi bước quan trọng.',
      ],
    },
    {
      headingVi: 'Tách tác động kỹ thuật và tác động kinh doanh',
      paragraphsVi: [
        'Tác động kỹ thuật mô tả điều hệ thống cho phép: ai đọc được gì, ai sửa được gì, ranh giới nào bị vượt qua.',
        'Tác động kinh doanh mô tả hậu quả với tổ chức và người dùng: dữ liệu loại nào bị lộ, bao nhiêu người bị ảnh hưởng, nghĩa vụ pháp lý nào phát sinh, uy tín bị ảnh hưởng ra sao.',
        'Hai thứ này có thể lệch nhau rất xa. Một lỗi đơn giản về kỹ thuật có thể có tác động kinh doanh rất lớn nếu nó chạm tới dữ liệu nhạy cảm. Báo cáo tốt trình bày cả hai và không dùng điểm số để thay cho lập luận.',
      ],
    },
    {
      headingVi: 'Hai phần mà người mới hay quên',
      paragraphsVi: [
        'Phần "dữ liệu đã tiếp xúc" nêu chính xác bạn đã thấy gì, bạn đã che gì, và bạn đã xoá gì. Đây là phần mà bộ phận pháp lý của tổ chức cần nhất vì nó quyết định nghĩa vụ thông báo của họ.',
        'Phần "hành động giảm thiểu" nêu những gì bạn đã làm để hạn chế tác động: dừng ngay khi chạm dữ liệu thật, giới hạn số request, xoá nội dung thử nghiệm và thời điểm xoá.',
        'Hai phần này chứng minh bạn hành động trong giới hạn thiện chí. Thiếu chúng, một báo cáo kỹ thuật tốt vẫn có thể tạo lo ngại cho bên nhận.',
      ],
    },
    {
      headingVi: 'Khuyến nghị khắc phục nêu nguyên nhân gốc',
      paragraphsVi: [
        'Khuyến nghị tốt chỉ ra nguyên nhân gốc và nguyên tắc khắc phục, rồi để đội phát triển chọn cách hiện thực phù hợp với kiến trúc của họ.',
        'Tránh áp đặt một thư viện hay một giải pháp cụ thể. Bạn không thấy toàn bộ hệ thống, và khuyến nghị quá cụ thể thường bị bỏ qua vì không khả thi trong ngữ cảnh thật.',
      ],
    },
  ],

  'mod-policy-severity': [
    {
      headingVi: 'Bốn thứ trả lời bốn câu hỏi khác nhau',
      paragraphsVi: [
        'Nhầm lẫn giữa bốn hệ thống phân loại dưới đây là nguyên nhân phổ biến nhất khiến báo cáo bị chấm điểm sai và mất uy tín.',
      ],
      bulletsVi: [
        'CVSS trả lời: mức nghiêm trọng kỹ thuật của bản thân lỗ hổng là bao nhiêu.',
        'CWE trả lời: nguyên nhân gốc thuộc nhóm nào.',
        'Taxonomy của nền tảng trả lời: các chương trình gọi tên vấn đề này thế nào cho thống nhất.',
        'Thang riêng của chương trình trả lời: trong ngữ cảnh kinh doanh của chúng tôi, việc này nghiêm trọng tới đâu.',
      ],
    },
    {
      headingVi: 'CVSS v4.0 có bốn nhóm chỉ số',
      paragraphsVi: [
        'Phiên bản 4.0 tổ chức lại thành bốn nhóm: Base mô tả đặc tính cố hữu của lỗ hổng, Threat phản ánh mức độ khai thác đã được quan sát, Environmental cho phép tổ chức điều chỉnh theo môi trường của họ, và Supplemental bổ sung các thuộc tính như mức ảnh hưởng an toàn hay khả năng tự động hoá.',
        'Điểm cần nhớ: nhóm Supplemental không tham gia vào điểm số cuối. Nó cung cấp ngữ cảnh thêm chứ không làm điểm cao lên hay thấp xuống.',
        'Khi báo cáo, bạn thường chỉ chấm nhóm Base. Nhóm Environmental thuộc về tổ chức vì chỉ họ biết hệ thống đó quan trọng tới mức nào với họ.',
      ],
    },
    {
      headingVi: 'Chấm điểm dựa trên bằng chứng, không dựa trên giả định',
      paragraphsVi: [
        'Đây là nguyên tắc quan trọng nhất của module này. Bạn chấm dựa trên điều bạn đã thực sự chứng minh được, không dựa trên điều có thể xảy ra trong trường hợp xấu nhất trên lý thuyết.',
        'Ví dụ cụ thể: bạn chứng minh được máy chủ phát sinh request tới địa chỉ bạn cung cấp, nhưng chưa chứng minh được nó lấy được thông tin xác thực nào. Chấm ở mức cao là hợp lý; chấm ở mức nghiêm trọng nhất là chấm theo giả định.',
        'Thổi phồng mức nghiêm trọng làm giảm uy tín nhanh hơn bất kỳ điều gì khác. Triager gặp một báo cáo bị thổi phồng sẽ đọc mọi báo cáo sau của bạn với thái độ hoài nghi.',
      ],
    },
    {
      headingVi: 'Gán CWE theo nguyên nhân gốc',
      paragraphsVi: [
        'CWE mô tả điểm yếu, không mô tả triệu chứng. Một lỗi cho phép đọc dữ liệu người khác có thể có nhiều nguyên nhân gốc khác nhau, và mỗi nguyên nhân ứng với một CWE khác nhau.',
        'Nếu nguyên nhân là hệ thống nhận định danh đối tượng từ người dùng mà không kiểm tra quyền sở hữu, đó là nhóm bỏ qua phân quyền qua khoá do người dùng kiểm soát. Nếu nguyên nhân là truy vấn bị chèn cú pháp, đó là nhóm injection. Cùng một triệu chứng, hai CWE hoàn toàn khác nhau.',
      ],
    },
    {
      headingVi: 'Điểm số không quyết định phần thưởng',
      paragraphsVi: [
        'Điểm CVSS cao không đồng nghĩa với mức thưởng cao. Chương trình quyết định phần thưởng dựa trên ngữ cảnh kinh doanh mà bạn không nhìn thấy hết: hệ thống đó quan trọng tới đâu, dữ liệu đó nhạy cảm tới mức nào, họ đã có biện pháp bù đắp nào chưa.',
        'Dự án này không dự đoán mức thưởng và không khuyến khích bạn dự đoán. Việc của bạn là mô tả chính xác điều đã chứng minh được; việc định giá thuộc về chương trình.',
      ],
    },
  ],

  'mod-policy-triage-states': [
    {
      headingVi: 'Các trạng thái và ý nghĩa thật của chúng',
      paragraphsVi: [
        'Mỗi trạng thái triage nói một điều cụ thể. Hiểu đúng chúng giúp bạn phản ứng phù hợp thay vì phản ứng theo cảm xúc.',
      ],
      bulletsVi: [
        'Triaged: đã xác nhận là vấn đề thật và đang chuyển cho đội xử lý.',
        'Duplicate: hợp lệ nhưng đã có người báo trước. Không phản ánh chất lượng báo cáo của bạn.',
        'Informative: quan sát chính xác nhưng chưa dẫn tới tác động cụ thể trong ngữ cảnh này.',
        'Not applicable: mô tả hành vi đúng như thiết kế, hoặc hiểu nhầm về mô hình sản phẩm.',
        'Spam: không có nội dung kỹ thuật, hoặc yêu cầu trả tiền trước khi tiết lộ.',
        'Resolved: đã được vá.',
        'Retest: đề nghị bạn kiểm tra lại sau khi vá.',
      ],
    },
    {
      headingVi: 'Khi bạn không đồng ý với kết luận',
      paragraphsVi: [
        'Cách phản hồi hiệu quả là hỏi cụ thể thay vì tranh luận chung chung. "Phần nào trong bước tái hiện không thành công, và các bạn nhận được kết quả gì?" hữu ích hơn nhiều so với "Tôi nghĩ các bạn đánh giá sai."',
        'Nếu bị đóng là informative, hãy hỏi điều gì sẽ khiến nó trở thành một phát hiện có tác động. Câu trả lời cho bạn biết chính xác cần chứng minh thêm gì, và đó là kiến thức dùng được cho mọi báo cáo sau này.',
      ],
    },
    {
      headingVi: 'Bổ sung sự rõ ràng, không bổ sung dữ liệu',
      paragraphsVi: [
        'Khi triager yêu cầu thêm bằng chứng, phản xạ sai là đi thu thập thêm dữ liệu để cho thuyết phục hơn. Phản xạ đúng là làm rõ hơn những gì đã có.',
        'Gần như mọi trường hợp "chưa tái hiện được" đều do thiếu một chi tiết môi trường chứ không phải do thiếu khối lượng bằng chứng. Thu thập thêm dữ liệu người dùng để củng cố báo cáo là cách nhanh nhất biến một báo cáo hợp lệ thành một vấn đề pháp lý.',
      ],
    },
    {
      headingVi: 'Retest và bản vá chữa triệu chứng',
      paragraphsVi: [
        'Khi được mời retest, hãy thử cả biến thể nhỏ của bước ban đầu chứ không chỉ lặp lại đúng chuỗi cũ. Bản vá chỉ chặn đúng chuỗi request trong báo cáo là chuyện thường gặp.',
        'Nếu vẫn tái hiện được, hãy tiếp tục trong báo cáo cũ thay vì mở báo cáo mới. Mở mới làm mất ngữ cảnh và thường bị đánh dấu trùng lặp.',
        'Khi báo lại, hãy nêu rõ vì sao bản vá mới chỉ chữa triệu chứng và nguyên nhân gốc nằm ở đâu. Điều này giúp đội phát triển sửa đúng chỗ ở lần thứ hai.',
      ],
    },
    {
      headingVi: 'Giữ quan hệ làm việc',
      paragraphsVi: [
        'Triager thường xử lý rất nhiều báo cáo mỗi ngày và không có ngữ cảnh riêng của bạn. Giọng văn lịch sự, cụ thể và ngắn gọn giúp báo cáo của bạn được xử lý nhanh hơn một cách đáng kể.',
        'Điều này không có nghĩa là chấp nhận mọi kết luận. Nó có nghĩa là bất đồng được trình bày bằng bằng chứng và câu hỏi cụ thể, chứ không bằng đánh giá về năng lực của người đối diện.',
      ],
    },
  ],
};
