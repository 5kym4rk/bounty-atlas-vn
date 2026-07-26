import type { Quiz, QuizQuestion } from '@/schemas/entities';

/**
 * Ngân hàng câu hỏi tự đánh giá.
 *
 * Không có câu hỏi nào yêu cầu tấn công mục tiêu thật. Câu hỏi đọc hiểu dùng
 * đoạn request, log hoặc mã do dự án tự soạn.
 */

type Q = Omit<QuizQuestion, 'id' | 'difficulty'> & { difficulty?: QuizQuestion['difficulty'] };

function q(id: string, input: Q): QuizQuestion {
  return { difficulty: 'intermediate', ...input, id };
}

function quiz(
  id: string,
  moduleId: string,
  titleVi: string,
  questions: QuizQuestion[],
  passingScorePercent = 70,
): Quiz {
  return { id, moduleId, titleVi, questions, passingScorePercent, randomize: true };
}

export const quizzes: Quiz[] = [
  quiz(
    'qz-policy-program-types',
    'mod-policy-program-types',
    'Tự đánh giá: các loại chương trình',
    [
      q('qz-policy-program-types-1', {
        promptVi:
          'Khác biệt cốt lõi nhất giữa một vulnerability disclosure program và một bug bounty program là gì?',
        contextBlock: null,
        options: [
          { id: 'a', textVi: 'VDP nhận báo cáo nhưng không cam kết trả thưởng theo phát hiện' },
          { id: 'b', textVi: 'VDP chỉ dành cho tổ chức nhà nước' },
          { id: 'c', textVi: 'VDP không có phạm vi' },
          { id: 'd', textVi: 'VDP không cần safe harbor' },
        ],
        correctOptionIds: ['a'],
        explanationVi:
          'VDP là kênh tiếp nhận báo cáo có chính sách rõ ràng; việc trả thưởng theo phát hiện là đặc trưng của bug bounty. Cả hai đều cần phạm vi và nên có safe harbor.',
        difficulty: 'foundation',
      }),
      q('qz-policy-program-types-2', {
        promptVi: 'Vì sao pentest khác bug bounty về mô hình trả công?',
        contextBlock: null,
        options: [
          { id: 'a', textVi: 'Pentest thường trả theo thời gian và phạm vi thoả thuận trước' },
          { id: 'b', textVi: 'Pentest không bao giờ có báo cáo' },
          { id: 'c', textVi: 'Pentest luôn trả nhiều hơn' },
          { id: 'd', textVi: 'Pentest không có ràng buộc hợp đồng' },
        ],
        correctOptionIds: ['a'],
        explanationVi:
          'Pentest là dịch vụ có hợp đồng, thường tính theo thời gian; bug bounty trả theo phát hiện hợp lệ.',
        difficulty: 'foundation',
      }),
      q('qz-policy-program-types-3', {
        promptVi:
          'Chương trình theo lời mời khác chương trình công khai ở điểm nào quan trọng nhất với người mới?',
        contextBlock: null,
        options: [
          { id: 'a', textVi: 'Số người tham gia ít hơn nên rủi ro trùng lặp thường thấp hơn' },
          { id: 'b', textVi: 'Không cần đọc chính sách' },
          { id: 'c', textVi: 'Không áp dụng safe harbor' },
          { id: 'd', textVi: 'Không có phạm vi giới hạn' },
        ],
        correctOptionIds: ['a'],
        explanationVi:
          'Chương trình riêng tư có ít người tham gia hơn. Mọi loại chương trình đều yêu cầu đọc chính sách và đều có phạm vi.',
        difficulty: 'beginner',
      }),
    ],
  ),

  quiz('qz-policy-safe-harbor', 'mod-policy-safe-harbor', 'Tự đánh giá: safe harbor', [
    q('qz-policy-safe-harbor-1', {
      promptVi: 'Điều nào sau đây có khả năng làm bạn mất bảo vệ safe harbor nhất?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Tải hàng loạt dữ liệu người dùng để chứng minh mức độ ảnh hưởng' },
        { id: 'b', textVi: 'Gửi báo cáo có bước tái hiện chi tiết' },
        { id: 'c', textVi: 'Hỏi chương trình khi chính sách không rõ' },
        { id: 'd', textVi: 'Dừng lại khi chạm tới dữ liệu của người khác' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Vượt quá PoC tối thiểu, đặc biệt là thu thập dữ liệu hàng loạt, là hành vi thường bị loại khỏi phạm vi bảo vệ.',
      difficulty: 'foundation',
    }),
    q('qz-policy-safe-harbor-2', {
      promptVi: 'Nếu chính sách chương trình im lặng về một hành vi, bạn nên giả định gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Hành vi đó chưa được phép cho tới khi bạn hỏi và được xác nhận' },
        { id: 'b', textVi: 'Hành vi đó được phép vì không bị cấm' },
        { id: 'c', textVi: 'Hành vi đó được phép nếu bạn không gây thiệt hại' },
        { id: 'd', textVi: 'Hành vi đó được phép nếu bạn báo cáo sau đó' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Mặc định an toàn là chưa được phép. Hỏi trước rẻ hơn rất nhiều so với xử lý hậu quả.',
      difficulty: 'foundation',
    }),
    q('qz-policy-safe-harbor-3', {
      promptVi: 'Quyền công bố công khai một báo cáo thuộc về ai?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Được quy định bởi chính sách chương trình' },
        { id: 'b', textVi: 'Luôn thuộc về người nghiên cứu vì họ tìm ra' },
        { id: 'c', textVi: 'Luôn thuộc về nền tảng trung gian' },
        { id: 'd', textVi: 'Tự động được phép sau khi lỗ hổng đã được sửa' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Điều khoản công bố nằm trong chính sách. Việc lỗ hổng đã được sửa không tự động cho phép công bố.',
      difficulty: 'beginner',
    }),
  ]),

  quiz('qz-policy-scope', 'mod-policy-scope-reading', 'Tự đánh giá: đọc phạm vi', [
    q('qz-policy-scope-1', {
      promptVi:
        'Chính sách ghi phạm vi là `*.example.com`. Bạn tìm thấy `status.example.com` là trang trạng thái do một nhà cung cấp bên thứ ba vận hành. Bạn nên làm gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Hỏi chương trình trước, vì tài sản có thể thuộc bên thứ ba' },
        { id: 'b', textVi: 'Kiểm thử ngay vì tên miền khớp wildcard' },
        { id: 'c', textVi: 'Kiểm thử nhẹ nhàng rồi báo cáo sau' },
        { id: 'd', textVi: 'Bỏ qua hoàn toàn, không cần hỏi' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Wildcard khớp tên miền nhưng không tự động bao gồm hạ tầng của bên thứ ba. Hỏi trước là cách xử lý đúng.',
      difficulty: 'beginner',
    }),
    q('qz-policy-scope-2', {
      promptVi: 'Mục nào của chính sách quyết định bạn được giữ lại bao nhiêu bằng chứng?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Quy định xử lý dữ liệu' },
        { id: 'b', textVi: 'Mô hình severity' },
        { id: 'c', textVi: 'Chính sách trùng lặp' },
        { id: 'd', textVi: 'Điều kiện nhận thưởng' },
      ],
      correctOptionIds: ['a'],
      explanationVi: 'Quy định xử lý dữ liệu nêu bạn được tiếp xúc, lưu và phải xoá những gì.',
      difficulty: 'beginner',
    }),
    q('qz-policy-scope-3', {
      promptVi: 'Vì sao nên lưu lại bản chính sách kèm ngày đọc?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Vì chương trình có thể thay đổi phạm vi và chính sách theo thời gian' },
        { id: 'b', textVi: 'Vì nền tảng yêu cầu nộp bản sao chính sách' },
        { id: 'c', textVi: 'Vì cần đính kèm chính sách vào mọi báo cáo' },
        { id: 'd', textVi: 'Vì chính sách là tài liệu có bản quyền' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Bản lưu giúp chứng minh bạn đã hành động đúng theo chính sách tại thời điểm kiểm thử.',
      difficulty: 'beginner',
    }),
  ]),

  quiz('qz-policy-stop-rules', 'mod-policy-stop-rules', 'Tự đánh giá: quy tắc dừng', [
    q('qz-policy-stop-rules-1', {
      promptVi:
        'Bạn khai thác được một IDOR và phản hồi trả về hồ sơ của một người dùng thật. Bước tiếp theo đúng là gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Dừng ngay, ghi lại tối thiểu, che thông tin định danh và báo cáo' },
        { id: 'b', textVi: 'Liệt kê thêm vài trăm bản ghi để ước lượng quy mô' },
        { id: 'c', textVi: 'Tải toàn bộ dữ liệu rồi xoá sau khi báo cáo' },
        { id: 'd', textVi: 'Thử sửa dữ liệu để chứng minh mức nghiêm trọng cao hơn' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Chạm tới dữ liệu người khác là điều kiện dừng. Quy mô có thể suy luận từ cấu trúc, không cần thu thập.',
      difficulty: 'foundation',
    }),
    q('qz-policy-stop-rules-2', {
      promptVi: 'Trường hợp nào sau đây KHÔNG phải là điều kiện bắt buộc dừng?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Bạn cần thử lại một request đọc trên tài khoản của chính mình' },
        { id: 'b', textVi: 'Bạn phải xoá dữ liệu để chứng minh' },
        { id: 'c', textVi: 'Bạn thấy độ trễ dịch vụ tăng bất thường' },
        { id: 'd', textVi: 'Bạn không chắc asset có nằm trong phạm vi' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Thao tác đọc trên tài khoản của chính bạn là an toàn. Ba trường hợp còn lại đều là điều kiện dừng.',
      difficulty: 'beginner',
    }),
    q('qz-policy-stop-rules-3', {
      promptVi: 'Vì sao "phải vượt quá PoC tối thiểu" là một điều kiện dừng?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi:
            'Vì vượt quá PoC tối thiểu là ranh giới giữa nghiên cứu thiện chí và hành vi có thể bị coi là tấn công',
        },
        { id: 'b', textVi: 'Vì báo cáo sẽ bị coi là trùng lặp' },
        { id: 'c', textVi: 'Vì công cụ sẽ không hỗ trợ' },
        { id: 'd', textVi: 'Vì triager không đọc báo cáo dài' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Đây là ranh giới pháp lý, không phải vấn đề tiện lợi. Nếu cần đi xa hơn, hãy hỏi chương trình.',
      difficulty: 'beginner',
    }),
  ]),

  quiz('qz-policy-report', 'mod-policy-report-structure', 'Tự đánh giá: viết báo cáo', [
    q('qz-policy-report-1', {
      promptVi: 'Tiêu đề nào tốt nhất cho một báo cáo IDOR ở chức năng xem hoá đơn?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi:
            'IDOR ở endpoint xem hoá đơn cho phép người dùng bất kỳ đọc hoá đơn của người khác',
        },
        { id: 'b', textVi: 'Lỗ hổng nghiêm trọng trong ứng dụng' },
        { id: 'c', textVi: 'IDOR' },
        { id: 'd', textVi: 'Tôi tìm được cách xem dữ liệu người khác, xin xem chi tiết bên trong' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Tiêu đề tốt nêu tài sản, loại vấn đề và tác động trong một dòng để triager phân loại được ngay.',
      difficulty: 'beginner',
    }),
    q('qz-policy-report-2', {
      promptVi:
        'Phần nào của báo cáo hay bị viết thiếu nhất và là lý do đóng báo cáo phổ biến nhất?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Bước tái hiện đủ rõ để người khác làm theo mà không cần hỏi lại' },
        { id: 'b', textVi: 'Danh sách công cụ đã dùng' },
        { id: 'c', textVi: 'Tiểu sử người nghiên cứu' },
        { id: 'd', textVi: 'Ảnh chụp toàn màn hình' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Không tái hiện được là lý do phổ biến nhất khiến báo cáo bị đóng hoặc bị kéo dài.',
      difficulty: 'beginner',
    }),
    q('qz-policy-report-3', {
      promptVi: 'Cách viết phần khuyến nghị khắc phục nào phù hợp nhất?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi:
            'Nêu nguyên nhân gốc và nguyên tắc khắc phục, để đội phát triển chọn cách hiện thực',
        },
        { id: 'b', textVi: 'Yêu cầu đội phát triển dùng đúng thư viện bạn thích' },
        { id: 'c', textVi: 'Bỏ qua vì đó không phải việc của người báo cáo' },
        { id: 'd', textVi: 'Chỉ ghi "hãy sửa lỗi này"' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Khuyến nghị ở mức nguyên tắc hữu ích và được tiếp nhận tốt hơn việc áp đặt giải pháp cụ thể.',
      difficulty: 'intermediate',
    }),
    q('qz-policy-report-4', {
      promptVi: 'Đọc đoạn ghi chú sau. Phần nào còn thiếu so với một báo cáo đầy đủ?',
      contextBlock: {
        language: 'text',
        content:
          'Tiêu đề: IDOR ở /api/invoices/{id}\nBước: đăng nhập tài khoản A, đổi id sang hoá đơn của B, thấy dữ liệu.\nTác động: đọc được hoá đơn người khác.',
      },
      options: [
        { id: 'a', textVi: 'Dữ liệu đã tiếp xúc và hành động giảm thiểu' },
        { id: 'b', textVi: 'Tiêu đề' },
        { id: 'c', textVi: 'Bước tái hiện' },
        { id: 'd', textVi: 'Tác động kỹ thuật' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Ghi chú đã có tiêu đề, bước và tác động kỹ thuật, nhưng thiếu phần nêu dữ liệu đã tiếp xúc, việc che và việc xoá.',
      difficulty: 'intermediate',
    }),
  ]),

  quiz('qz-policy-severity', 'mod-policy-severity', 'Tự đánh giá: severity', [
    q('qz-policy-severity-1', {
      promptVi: 'CVSS đo điều gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Mức nghiêm trọng kỹ thuật của lỗ hổng' },
        { id: 'b', textVi: 'Mức tiền thưởng sẽ nhận được' },
        { id: 'c', textVi: 'Mức rủi ro kinh doanh của tổ chức' },
        { id: 'd', textVi: 'Khả năng báo cáo được chấp nhận' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'CVSS là thang kỹ thuật. Rủi ro kinh doanh và mức thưởng do chương trình quyết định trong ngữ cảnh của họ.',
      difficulty: 'beginner',
    }),
    q('qz-policy-severity-2', {
      promptVi: 'CWE dùng để làm gì trong báo cáo?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Đặt tên cho nguyên nhân gốc của vấn đề' },
        { id: 'b', textVi: 'Tính điểm nghiêm trọng' },
        { id: 'c', textVi: 'Xác định phạm vi chương trình' },
        { id: 'd', textVi: 'Quyết định trạng thái triage' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'CWE là taxonomy điểm yếu; nó trả lời câu hỏi "vấn đề thuộc nhóm nguyên nhân nào".',
      difficulty: 'beginner',
    }),
    q('qz-policy-severity-3', {
      promptVi: 'Bạn nên chấm CVSS dựa trên điều gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Điều bạn đã thực sự chứng minh được' },
        { id: 'b', textVi: 'Điều có thể xảy ra trong trường hợp xấu nhất trên lý thuyết' },
        { id: 'c', textVi: 'Điểm cao nhất mà vector cho phép' },
        { id: 'd', textVi: 'Điểm của một báo cáo tương tự bạn đã đọc' },
      ],
      correctOptionIds: ['a'],
      explanationVi: 'Chấm điểm dựa trên suy đoán làm giảm uy tín và thường bị triager hạ xuống.',
      difficulty: 'intermediate',
    }),
  ]),

  quiz('qz-found-http', 'mod-found-http', 'Tự đánh giá: HTTP', [
    q('qz-found-http-1', {
      promptVi:
        'Đọc phản hồi sau. Thuộc tính cookie nào giúp giảm rủi ro bị đọc bởi mã JavaScript?',
      contextBlock: {
        language: 'http',
        content:
          'HTTP/1.1 200 OK\nSet-Cookie: session=abc123; Path=/; HttpOnly; Secure; SameSite=Lax\nContent-Type: text/html',
      },
      options: [
        { id: 'a', textVi: 'HttpOnly' },
        { id: 'b', textVi: 'Secure' },
        { id: 'c', textVi: 'SameSite=Lax' },
        { id: 'd', textVi: 'Path=/' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'HttpOnly ngăn mã JavaScript đọc cookie. Secure ràng buộc kênh mã hoá, SameSite hạn chế gửi kèm theo ngữ cảnh cross-site.',
      difficulty: 'foundation',
    }),
    q('qz-found-http-2', {
      promptVi: 'Thuộc tính nào ràng buộc cookie chỉ được gửi qua kết nối đã mã hoá?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Secure' },
        { id: 'b', textVi: 'HttpOnly' },
        { id: 'c', textVi: 'Domain' },
        { id: 'd', textVi: 'Max-Age' },
      ],
      correctOptionIds: ['a'],
      explanationVi: 'Secure yêu cầu trình duyệt chỉ gửi cookie qua kênh HTTPS.',
      difficulty: 'foundation',
    }),
    q('qz-found-http-3', {
      promptVi: 'Mã trạng thái 401 và 403 khác nhau ở điểm nào?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi: '401 nghĩa là chưa xác thực; 403 nghĩa là đã xác thực nhưng không đủ quyền',
        },
        { id: 'b', textVi: '401 nghĩa là lỗi máy chủ; 403 nghĩa là lỗi client' },
        { id: 'c', textVi: 'Hai mã hoàn toàn tương đương' },
        { id: 'd', textVi: '401 dùng cho API, 403 dùng cho web' },
      ],
      correctOptionIds: ['a'],
      explanationVi: 'Đây là khác biệt giữa xác thực và phân quyền, thể hiện ở tầng giao thức.',
      difficulty: 'foundation',
    }),
  ]),

  quiz('qz-found-browser-model', 'mod-found-browser-model', 'Tự đánh giá: mô hình trình duyệt', [
    q('qz-found-browser-model-1', {
      promptVi: 'Một origin gồm những thành phần nào?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Scheme, host và port' },
        { id: 'b', textVi: 'Chỉ host' },
        { id: 'c', textVi: 'Host và đường dẫn' },
        { id: 'd', textVi: 'Host, port và cookie' },
      ],
      correctOptionIds: ['a'],
      explanationVi: 'Đường dẫn không thuộc origin. Đổi scheme hoặc port đều tạo ra origin khác.',
      difficulty: 'foundation',
    }),
    q('qz-found-browser-model-2', {
      promptVi: 'Same-origin policy chủ yếu ngăn điều gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Một tài liệu đọc dữ liệu phản hồi của origin khác' },
        { id: 'b', textVi: 'Trình duyệt gửi request tới origin khác' },
        { id: 'c', textVi: 'Máy chủ đặt cookie' },
        { id: 'd', textVi: 'Trang nhúng ảnh từ origin khác' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Request cross-origin vẫn được gửi; điều bị ngăn là việc đọc phản hồi. Đây là lý do CSRF tồn tại.',
      difficulty: 'beginner',
    }),
    q('qz-found-browser-model-3', {
      promptVi: 'Vì sao lưu token phiên trong localStorage rủi ro hơn cookie HttpOnly?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Vì mã JavaScript trong trang đọc được localStorage' },
        { id: 'b', textVi: 'Vì localStorage không được mã hoá trên đĩa' },
        { id: 'c', textVi: 'Vì localStorage có dung lượng nhỏ' },
        { id: 'd', textVi: 'Vì localStorage được gửi kèm mọi request' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Bất kỳ XSS nào cũng đọc được localStorage, trong khi cookie HttpOnly thì không.',
      difficulty: 'intermediate',
    }),
  ]),

  quiz('qz-found-threat-model', 'mod-found-threat-model', 'Tự đánh giá: trust boundary', [
    q('qz-found-threat-model-1', {
      promptVi: 'Kiểm tra bảo mật nên được đặt ở đâu so với một trust boundary?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Ở phía tin cậy của ranh giới' },
        { id: 'b', textVi: 'Ở phía không tin cậy để phát hiện sớm' },
        { id: 'c', textVi: 'Ở cả hai phía với logic khác nhau' },
        { id: 'd', textVi: 'Không quan trọng miễn là có kiểm tra' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Kiểm tra ở phía không tin cậy có thể bị bỏ qua. Đặt kiểm tra ở hai phía với logic khác nhau còn tạo ra bất đồng bộ.',
      difficulty: 'beginner',
    }),
    q('qz-found-threat-model-2', {
      promptVi: 'Rủi ro khác tác động ở điểm nào?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Rủi ro kết hợp tác động với khả năng xảy ra' },
        { id: 'b', textVi: 'Rủi ro luôn cao hơn tác động' },
        { id: 'c', textVi: 'Rủi ro chỉ áp dụng cho dữ liệu cá nhân' },
        { id: 'd', textVi: 'Hai khái niệm tương đương' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Một tác động rất lớn nhưng gần như không thể xảy ra có thể có rủi ro thấp hơn một tác động vừa nhưng dễ xảy ra.',
      difficulty: 'beginner',
    }),
  ]),

  quiz('qz-method-tool-output', 'mod-method-tool-output', 'Tự đánh giá: đọc output công cụ', [
    q('qz-method-tool-output-1', {
      promptVi:
        'Trình quét báo cáo máy chủ chạy một phiên bản phần mềm có lỗ hổng đã biết. Kết luận nào là hợp lệ?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi: 'Cần xác minh thêm; banner phiên bản không chứng minh hệ thống bị ảnh hưởng',
        },
        { id: 'b', textVi: 'Có thể báo cáo ngay vì phiên bản đã được xác nhận' },
        { id: 'c', textVi: 'Có thể gán CVSS cao nhất của lỗ hổng đó' },
        { id: 'd', textVi: 'Không cần quan tâm vì trình quét luôn sai' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Banner có thể sai, có thể bị làm giả, và bản vá backport không đổi số phiên bản.',
      difficulty: 'intermediate',
    }),
    q('qz-method-tool-output-2', {
      promptVi: 'Vì sao gửi kết quả quét thô làm báo cáo thường bị đóng?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Vì nó không chứng minh vấn đề tồn tại và không nêu tác động' },
        { id: 'b', textVi: 'Vì nền tảng cấm dùng công cụ' },
        { id: 'c', textVi: 'Vì định dạng tệp không được hỗ trợ' },
        { id: 'd', textVi: 'Vì trình quét thuộc bản thương mại' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Kết quả công cụ là giả thuyết. Báo cáo cần xác minh thủ công và mô tả tác động.',
      difficulty: 'beginner',
    }),
  ]),

  quiz('qz-web-idor', 'mod-web-idor', 'Tự đánh giá: IDOR', [
    q('qz-web-idor-1', {
      promptVi: 'Biện pháp khắc phục gốc cho IDOR là gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Gắn điều kiện chủ sở hữu vào truy vấn ở tầng dữ liệu' },
        { id: 'b', textVi: 'Đổi định danh tuần tự sang định danh ngẫu nhiên' },
        { id: 'c', textVi: 'Ẩn nút thao tác trong giao diện' },
        { id: 'd', textVi: 'Thêm rate limit cho endpoint' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Định danh ngẫu nhiên và rate limit là lớp bổ sung. Nguyên nhân gốc là thiếu kiểm tra quyền sở hữu.',
      difficulty: 'intermediate',
    }),
    q('qz-web-idor-2', {
      promptVi: 'Cách chứng minh IDOR an toàn nhất là gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Dùng hai tài khoản do chính bạn tạo' },
        { id: 'b', textVi: 'Liệt kê định danh cho tới khi tìm được dữ liệu thật' },
        { id: 'c', textVi: 'Chụp màn hình dữ liệu của người dùng thật' },
        { id: 'd', textVi: 'Sửa dữ liệu của người khác rồi hoàn tác' },
      ],
      correctOptionIds: ['a'],
      explanationVi: 'Hai tài khoản của bạn là PoC tối thiểu, không chạm dữ liệu người thật.',
      difficulty: 'beginner',
    }),
    q('qz-web-idor-3', {
      promptVi: 'Đọc đoạn mã sau. Vấn đề nằm ở đâu?',
      contextBlock: {
        language: 'javascript',
        content:
          "app.get('/api/invoices/:id', requireLogin, async (req, res) => {\n  const invoice = await db.invoices.findById(req.params.id);\n  res.json(invoice);\n});",
      },
      options: [
        { id: 'a', textVi: 'Truy vấn không ràng buộc hoá đơn với người dùng đang đăng nhập' },
        { id: 'b', textVi: 'Thiếu kiểm tra đăng nhập' },
        { id: 'c', textVi: 'Thiếu xử lý lỗi' },
        { id: 'd', textVi: 'Thiếu rate limit' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Đã có xác thực nhưng thiếu phân quyền ở mức đối tượng: truy vấn cần kèm điều kiện chủ sở hữu.',
      difficulty: 'intermediate',
    }),
  ]),

  quiz('qz-web-xss', 'mod-web-xss', 'Tự đánh giá: XSS', [
    q('qz-web-xss-1', {
      promptVi: 'Vì sao không có một cách mã hoá đầu ra chung cho mọi trường hợp?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Vì quy tắc thoát khác nhau theo ngữ cảnh đầu ra' },
        { id: 'b', textVi: 'Vì mỗi trình duyệt xử lý khác nhau' },
        { id: 'c', textVi: 'Vì thư viện mã hoá không tương thích nhau' },
        { id: 'd', textVi: 'Vì hiệu năng' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Nội dung HTML, giá trị thuộc tính, URL, JavaScript và CSS có quy tắc thoát khác nhau.',
      difficulty: 'intermediate',
    }),
    q('qz-web-xss-2', {
      promptVi: 'Khi chứng minh XSS lưu trữ trên một tính năng công khai, cách xử lý đúng là gì?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi:
            'Dùng khu vực chỉ mình bạn xem được nếu có, và xoá nội dung ngay sau khi chụp bằng chứng',
        },
        { id: 'b', textVi: 'Để payload ở đó cho tới khi được vá' },
        { id: 'c', textVi: 'Dùng payload gây chú ý để chứng minh mức nghiêm trọng' },
        { id: 'd', textVi: 'Chèn vào nhiều nơi để tăng khả năng được chấp nhận' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'XSS lưu trữ ảnh hưởng tới người dùng thật, nên phải giới hạn phạm vi và thời gian tồn tại.',
      difficulty: 'intermediate',
    }),
    q('qz-web-xss-3', {
      promptVi: 'CSP có thay thế được mã hoá đầu ra không?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Không, CSP là lớp phòng thủ bổ sung' },
        { id: 'b', textVi: 'Có, nếu chính sách đủ chặt' },
        { id: 'c', textVi: 'Có, với mọi trình duyệt hiện đại' },
        { id: 'd', textVi: 'Không, vì CSP không liên quan tới XSS' },
      ],
      correctOptionIds: ['a'],
      explanationVi: 'CSP giảm tác động khi mã hoá đầu ra thất bại, nhưng không thay thế nó.',
      difficulty: 'intermediate',
    }),
  ]),

  quiz('qz-web-ssrf', 'mod-web-ssrf', 'Tự đánh giá: SSRF', [
    q('qz-web-ssrf-1', {
      promptVi: 'Điều gì quyết định tác động của một SSRF?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Những gì máy chủ chạm tới được từ vị trí mạng của nó' },
        { id: 'b', textVi: 'Kích thước phản hồi trả về' },
        { id: 'c', textVi: 'Số lượng tham số của endpoint' },
        { id: 'd', textVi: 'Ngôn ngữ lập trình của ứng dụng' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Cùng một lỗi có tác động rất khác nhau tuỳ vào vị trí mạng và những gì máy chủ được phép truy cập.',
      difficulty: 'intermediate',
    }),
    q('qz-web-ssrf-2', {
      promptVi: 'Cách chứng minh SSRF ở mức PoC tối thiểu là gì?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi: 'Trỏ tới một máy chủ do bạn kiểm soát và quan sát request đến trong log',
        },
        { id: 'b', textVi: 'Truy vấn dịch vụ metadata để lấy thông tin xác thực' },
        { id: 'c', textVi: 'Quét toàn bộ dải mạng nội bộ' },
        { id: 'd', textVi: 'Gửi request tới hệ thống của tổ chức khác' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Ghi nhận request đến máy chủ của bạn chứng minh đủ vấn đề mà không chạm dữ liệu nội bộ.',
      difficulty: 'intermediate',
    }),
    q('qz-web-ssrf-3', {
      promptVi: 'Biện pháp khắc phục nào là hiệu quả nhất cho SSRF?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi: 'Danh sách cho phép ở tầng ứng dụng kết hợp kiểm soát lối ra ở tầng mạng',
        },
        { id: 'b', textVi: 'Chặn danh sách địa chỉ nội bộ đã biết' },
        { id: 'c', textVi: 'Kiểm tra định dạng URL bằng biểu thức chính quy' },
        { id: 'd', textVi: 'Đặt timeout ngắn cho request' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Danh sách chặn luôn có cách vòng qua. Danh sách cho phép cộng kiểm soát mạng là phòng thủ nhiều lớp.',
      difficulty: 'advanced',
    }),
  ]),

  quiz('qz-web-business-logic', 'mod-web-business-logic', 'Tự đánh giá: logic nghiệp vụ', [
    q('qz-web-business-logic-1', {
      promptVi: 'Vì sao không thể kiểm thử logic nghiệp vụ bằng bộ payload cố định?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Vì lỗi nằm ở giả định của thiết kế, khác nhau ở từng ứng dụng' },
        { id: 'b', textVi: 'Vì payload bị bộ lọc chặn' },
        { id: 'c', textVi: 'Vì công cụ chưa hỗ trợ' },
        { id: 'd', textVi: 'Vì logic nghiệp vụ luôn ở phía client' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Phải hiểu ý định của tính năng rồi mới tìm được trạng thái mà người thiết kế không lường trước.',
      difficulty: 'advanced',
    }),
    q('qz-web-business-logic-2', {
      promptVi: 'Nhóm phép thử nào thường phát hiện lỗi logic nhanh nhất?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Bỏ bước, đảo bước, lặp bước và thử giá trị biên' },
        { id: 'b', textVi: 'Thử các payload injection phổ biến' },
        { id: 'c', textVi: 'Quét cổng' },
        { id: 'd', textVi: 'Đọc source map' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Lỗi logic thường nằm ở thứ tự bước và ở giá trị biên chưa được kiểm tra phía server.',
      difficulty: 'advanced',
    }),
  ]),

  quiz('qz-api-bola', 'mod-api-bola', 'Tự đánh giá: BOLA', [
    q('qz-api-bola-1', {
      promptVi: 'Vì sao endpoint theo lô hay có lỗi phân quyền?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Vì kiểm tra thường chỉ áp dụng cho phần tử đầu tiên hoặc cho cả lô' },
        { id: 'b', textVi: 'Vì chúng luôn dùng method POST' },
        { id: 'c', textVi: 'Vì chúng không có schema' },
        { id: 'd', textVi: 'Vì chúng luôn chậm hơn' },
      ],
      correctOptionIds: ['a'],
      explanationVi: 'Kiểm tra phân quyền phải áp dụng cho từng phần tử trong lô.',
      difficulty: 'advanced',
    }),
    q('qz-api-bola-2', {
      promptVi: 'BOLA và BFLA khác nhau ở điểm nào?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi: 'BOLA là quyền với một đối tượng cụ thể; BFLA là quyền với một chức năng',
        },
        { id: 'b', textVi: 'BOLA chỉ xảy ra với GET; BFLA chỉ với POST' },
        { id: 'c', textVi: 'BOLA thuộc xác thực; BFLA thuộc phân quyền' },
        { id: 'd', textVi: 'Hai khái niệm tương đương' },
      ],
      correctOptionIds: ['a'],
      explanationVi: 'Hai mức phân quyền khác nhau và phải được kiểm thử riêng.',
      difficulty: 'intermediate',
    }),
  ]),

  quiz('qz-api-jwt', 'mod-api-jwt', 'Tự đánh giá: JWT', [
    q('qz-api-jwt-1', {
      promptVi: 'Vì sao không được tin vào trường thuật toán trong header của JWT?',
      contextBlock: {
        language: 'json',
        content: '{ "alg": "none", "typ": "JWT" }',
      },
      options: [
        { id: 'a', textVi: 'Vì header do người gửi token kiểm soát' },
        { id: 'b', textVi: 'Vì header không được mã hoá' },
        { id: 'c', textVi: 'Vì thuật toán luôn phải là RS256' },
        { id: 'd', textVi: 'Vì header không có trong đặc tả' },
      ],
      correctOptionIds: ['a'],
      explanationVi: 'Bên nhận phải ghim thuật toán theo cấu hình của mình, không lấy từ token.',
      difficulty: 'advanced',
    }),
    q('qz-api-jwt-2', {
      promptVi: 'Kiểm tra nào KHÔNG bắt buộc khi nhận một JWT?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Độ dài của chuỗi token' },
        { id: 'b', textVi: 'Chữ ký' },
        { id: 'c', textVi: 'Issuer và audience' },
        { id: 'd', textVi: 'Thời hạn' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Chữ ký, issuer, audience và thời hạn đều bắt buộc; độ dài chuỗi không nói lên điều gì.',
      difficulty: 'intermediate',
    }),
  ]),

  quiz('qz-identity-oauth', 'mod-identity-oauth', 'Tự đánh giá: OAuth', [
    q('qz-identity-oauth-1', {
      promptVi: 'Tham số state trong OAuth chủ yếu chống lại điều gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Việc gắn kết quả uỷ quyền vào phiên của người dùng khác' },
        { id: 'b', textVi: 'Việc chặn bắt mã uỷ quyền trên đường truyền' },
        { id: 'c', textVi: 'Việc client bị đánh cắp mã bởi ứng dụng khác trên cùng thiết bị' },
        { id: 'd', textVi: 'Việc token hết hạn quá nhanh' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'State ràng buộc phản hồi với phiên đã khởi tạo luồng. PKCE mới là biện pháp chống đánh cắp mã uỷ quyền.',
      difficulty: 'advanced',
    }),
    q('qz-identity-oauth-2', {
      promptVi: 'Vì sao so khớp redirect URI theo tiền tố lại nguy hiểm?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi: 'Vì kẻ tấn công có thể thêm đường dẫn con để đưa mã uỷ quyền tới đích của mình',
        },
        { id: 'b', textVi: 'Vì nó làm chậm luồng đăng nhập' },
        { id: 'c', textVi: 'Vì nó vi phạm same-origin policy' },
        { id: 'd', textVi: 'Vì nó khiến token không được ký' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'So khớp phải chính xác tuyệt đối; mọi cách nới lỏng đều tạo đường chuyển hướng mã uỷ quyền.',
      difficulty: 'advanced',
    }),
  ]),

  quiz('qz-cloud-misconfig', 'mod-cloud-misconfig-vs-vuln', 'Tự đánh giá: cloud', [
    q('qz-cloud-misconfig-1', {
      promptVi: 'Vì sao cần phân biệt cấu hình sai của khách hàng với lỗ hổng sản phẩm?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi: 'Vì nhiều chương trình loại trừ cấu hình sai phía khách hàng khỏi phạm vi',
        },
        { id: 'b', textVi: 'Vì cấu hình sai không bao giờ nguy hiểm' },
        { id: 'c', textVi: 'Vì nhà cung cấp luôn chịu trách nhiệm' },
        { id: 'd', textVi: 'Vì CVSS không áp dụng cho cloud' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Xác định sớm giúp bạn không mất thời gian vào phát hiện sẽ bị đóng vì ngoài phạm vi.',
      difficulty: 'advanced',
    }),
    q('qz-cloud-misconfig-2', {
      promptVi: 'Khi tìm thấy lưu trữ đám mây công khai chứa dữ liệu thật, bạn nên làm gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Ghi nhận sự tồn tại, chụp bằng chứng tối thiểu đã che, và báo cáo' },
        { id: 'b', textVi: 'Tải toàn bộ về để đánh giá mức nhạy cảm' },
        { id: 'c', textVi: 'Tải một phần rồi xoá sau' },
        { id: 'd', textVi: 'Đăng công khai để cảnh báo người dùng' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Tải dữ liệu về biến bạn thành nơi lưu trữ dữ liệu của người khác và thường vi phạm chính sách.',
      difficulty: 'intermediate',
    }),
  ]),

  quiz('qz-mobile-android', 'mod-mobile-android-components', 'Tự đánh giá: Android', [
    q('qz-mobile-android-1', {
      promptVi: 'Tệp nào là bản khai báo bề mặt tấn công do chính nhà phát triển viết ra?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Manifest của ứng dụng' },
        { id: 'b', textVi: 'Tệp tài nguyên giao diện' },
        { id: 'c', textVi: 'Tệp cấu hình build' },
        { id: 'd', textVi: 'Tệp chữ ký' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Manifest khai báo thành phần nào truy cập được từ ứng dụng khác, quyền yêu cầu và cấu hình mạng.',
      difficulty: 'intermediate',
    }),
    q('qz-mobile-android-2', {
      promptVi: 'Vì sao kiểm tra sinh trắc học ở phía ứng dụng không đủ để bảo vệ dữ liệu?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi:
            'Vì kiểm tra phía client có thể bị bỏ qua; dữ liệu cần được bảo vệ bằng khoá và bằng kiểm tra phía server',
        },
        { id: 'b', textVi: 'Vì sinh trắc học không chính xác' },
        { id: 'c', textVi: 'Vì hệ điều hành không hỗ trợ' },
        { id: 'd', textVi: 'Vì người dùng có thể tắt nó' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Sinh trắc học là cổng giao diện; bảo vệ thật đến từ kho khoá của nền tảng và từ kiểm tra phía server.',
      difficulty: 'advanced',
    }),
  ]),

  quiz('qz-container-basics', 'mod-container-basics', 'Tự đánh giá: container', [
    q('qz-container-basics-1', {
      promptVi: 'Cấu hình nào làm ranh giới giữa container và host gần như mất tác dụng?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Chạy container ở chế độ đặc quyền và mount socket của runtime' },
        { id: 'b', textVi: 'Đặt biến môi trường' },
        { id: 'c', textVi: 'Dùng image nhiều lớp' },
        { id: 'd', textVi: 'Phơi một cổng ra localhost' },
      ],
      correctOptionIds: ['a'],
      explanationVi: 'Cả hai cấu hình đều cho container quyền tương đương với host.',
      difficulty: 'advanced',
    }),
    q('qz-container-basics-2', {
      promptVi: 'Vì sao bí mật nằm trong một lớp image coi như đã lộ?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi: 'Vì lớp image được phân phối và ai kéo được image cũng đọc được lớp đó',
        },
        { id: 'b', textVi: 'Vì image luôn công khai' },
        { id: 'c', textVi: 'Vì lớp image không được nén' },
        { id: 'd', textVi: 'Vì runtime ghi bí mật ra log' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Xoá tệp ở lớp sau không xoá nội dung ở lớp trước; bí mật vẫn nằm trong image.',
      difficulty: 'advanced',
    }),
  ]),

  quiz('qz-code-source-sink', 'mod-code-source-sink', 'Tự đánh giá: đọc mã', [
    q('qz-code-source-sink-1', {
      promptVi: 'Trong đoạn mã sau, điểm nhận nguy hiểm là gì?',
      contextBlock: {
        language: 'python',
        content:
          'def export(request):\n    name = request.GET["file"]\n    path = os.path.join(BASE_DIR, name)\n    return open(path).read()',
      },
      options: [
        { id: 'a', textVi: 'Lời gọi mở tệp với đường dẫn dựng từ dữ liệu người dùng' },
        { id: 'b', textVi: 'Việc đọc tham số truy vấn' },
        { id: 'c', textVi: 'Việc trả về phản hồi' },
        { id: 'd', textVi: 'Hằng số thư mục gốc' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Nguồn là tham số truy vấn; điểm nhận là thao tác mở tệp. Thiếu bước chuẩn hoá và kiểm tra thư mục cho phép.',
      difficulty: 'advanced',
    }),
    q('qz-code-source-sink-2', {
      promptVi: 'Vì sao đi ngược từ điểm nhận lên nguồn thường nhanh hơn đi xuôi?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Vì số điểm nhận nguy hiểm thường ít hơn nhiều so với số điểm vào' },
        { id: 'b', textVi: 'Vì trình biên dịch tối ưu theo hướng đó' },
        { id: 'c', textVi: 'Vì điểm nhận luôn nằm cuối tệp' },
        { id: 'd', textVi: 'Vì công cụ chỉ hỗ trợ hướng đó' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Tìm kiếm các hàm nguy hiểm cho ra tập nhỏ, từ đó lần ngược lên xem có tới được từ bên ngoài không.',
      difficulty: 'advanced',
    }),
  ]),

  quiz('qz-supply-cicd', 'mod-supply-cicd-trust', 'Tự đánh giá: CI/CD', [
    q('qz-supply-cicd-1', {
      promptVi: 'Ranh giới tin cậy quan trọng nhất trong một pipeline CI công khai là gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Giữa mã của người đóng góp bên ngoài và pipeline có bí mật của dự án' },
        { id: 'b', textVi: 'Giữa hai bước trong cùng một job' },
        { id: 'c', textVi: 'Giữa runner và mạng Internet' },
        { id: 'd', textVi: 'Giữa nhánh chính và nhánh phát triển' },
      ],
      correctOptionIds: ['a'],
      explanationVi: 'Workflow chạy mã từ fork với bí mật của dự án là cấu hình nguy hiểm nhất.',
      difficulty: 'advanced',
    }),
    q('qz-supply-cicd-2', {
      promptVi: 'Khi phát hiện một bí mật đã lộ, hành động đầu tiên nên là gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Báo cáo và đề nghị xoay vòng bí mật đó' },
        { id: 'b', textVi: 'Dùng thử để xác nhận nó còn hiệu lực' },
        { id: 'c', textVi: 'Đăng công khai để cảnh báo' },
        { id: 'd', textVi: 'Lưu lại để dùng khi cần chứng minh' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Dùng thử bí mật là truy cập trái phép. Mô tả phạm vi quyền của nó và đề nghị xoay vòng.',
      difficulty: 'intermediate',
    }),
  ]),

  quiz('qz-web3-reentrancy', 'mod-web3-reentrancy', 'Tự đánh giá: reentrancy', [
    q('qz-web3-reentrancy-1', {
      promptVi: 'Mẫu lập trình nào là biện pháp khắc phục gốc cho reentrancy?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Kiểm tra - tác động - tương tác' },
        { id: 'b', textVi: 'Thêm sự kiện trước mỗi lời gọi ngoài' },
        { id: 'c', textVi: 'Giới hạn lượng gas cho lời gọi ngoài' },
        { id: 'd', textVi: 'Chuyển hàm sang chế độ chỉ đọc' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Cập nhật trạng thái trước khi gọi ra ngoài loại bỏ nguyên nhân gốc; khoá chống tái nhập là lớp bổ sung.',
      difficulty: 'advanced',
    }),
    q('qz-web3-reentrancy-2', {
      promptVi: 'Biến được khai báo private trong Solidity có bí mật không?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Không, mọi trạng thái on-chain đều đọc được từ bên ngoài' },
        { id: 'b', textVi: 'Có, chỉ hợp đồng đó đọc được' },
        { id: 'c', textVi: 'Có, nếu hợp đồng không phát sự kiện' },
        { id: 'd', textVi: 'Chỉ bí mật trên mạng chính' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'private chỉ giới hạn truy cập ở mức ngôn ngữ; dữ liệu vẫn nằm công khai trên chain.',
      difficulty: 'intermediate',
    }),
  ]),

  quiz('qz-ai-prompt-injection', 'mod-ai-prompt-injection', 'Tự đánh giá: AI', [
    q('qz-ai-prompt-injection-1', {
      promptVi: 'Vì sao prompt injection tự nó thường chưa đủ để thành một báo cáo có giá trị?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi: 'Vì cần chứng minh có một ranh giới tin cậy bị vượt qua và có hệ quả cụ thể',
        },
        { id: 'b', textVi: 'Vì nó luôn được coi là hành vi mong đợi của mô hình' },
        { id: 'c', textVi: 'Vì không có CWE tương ứng' },
        { id: 'd', textVi: 'Vì không thể tái hiện được' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Báo cáo AI có giá trị chỉ ra quyền của ai bị dùng cho hành động của ai, không chỉ dừng ở hành vi mô hình.',
      difficulty: 'advanced',
    }),
    q('qz-ai-prompt-injection-2', {
      promptVi: 'Biện pháp khắc phục nào đúng hướng nhất cho quyền quá mức của agent?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi: 'Truyền danh tính người dùng xuống tầng công cụ và kiểm tra phân quyền tại đó',
        },
        {
          id: 'b',
          textVi: 'Thêm hướng dẫn trong prompt hệ thống yêu cầu mô hình không làm điều đó',
        },
        { id: 'c', textVi: 'Lọc từ khoá trong đầu vào của người dùng' },
        { id: 'd', textVi: 'Giảm nhiệt độ sinh của mô hình' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Kiểm soát truy cập phải nằm ở tầng công cụ. Hướng dẫn trong prompt không phải biện pháp bảo mật.',
      difficulty: 'advanced',
    }),
    q('qz-ai-prompt-injection-3', {
      promptVi: 'Bộ lọc người thuê cho truy vấn RAG nên đặt ở đâu?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Ở tầng truy vấn vector' },
        { id: 'b', textVi: 'Trong prompt hệ thống' },
        { id: 'c', textVi: 'Trong hướng dẫn cho người dùng' },
        { id: 'd', textVi: 'Ở bước hậu xử lý đầu ra' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Bộ lọc trong prompt không phải kiểm soát truy cập; nó có thể bị bỏ qua bởi nội dung không tin cậy.',
      difficulty: 'advanced',
    }),
  ]),

  quiz('qz-privacy-impact', 'mod-privacy-impact-without-harm', 'Tự đánh giá: quyền riêng tư', [
    q('qz-privacy-impact-1', {
      promptVi: 'Cách định lượng tác động rò rỉ dữ liệu mà không thu thập dữ liệu là gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Suy luận phạm vi từ cấu trúc endpoint và cơ chế phân trang' },
        { id: 'b', textVi: 'Tải một mẫu ngẫu nhiên rồi ngoại suy' },
        { id: 'c', textVi: 'Đếm số bản ghi bằng cách lặp qua toàn bộ định danh' },
        { id: 'd', textVi: 'Không nêu tác động' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Cấu trúc phản hồi và tham số phân trang đủ để lập luận về quy mô mà không cần giữ dữ liệu.',
      difficulty: 'intermediate',
    }),
    q('qz-privacy-impact-2', {
      promptVi: 'Phần nào của báo cáo rò rỉ dữ liệu mà bộ phận pháp lý cần nhất?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Dữ liệu đã tiếp xúc và hành động giảm thiểu đã thực hiện' },
        { id: 'b', textVi: 'Danh sách công cụ đã dùng' },
        { id: 'c', textVi: 'Vector CVSS' },
        { id: 'd', textVi: 'Ảnh chụp toàn màn hình' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Tổ chức cần biết chính xác dữ liệu nào đã rời khỏi tầm kiểm soát để đánh giá nghĩa vụ thông báo.',
      difficulty: 'intermediate',
    }),
  ]),

  quiz('qz-net-flaws', 'mod-net-flaws', 'Tự đánh giá: hạ tầng', [
    q('qz-net-flaws-1', {
      promptVi: 'Vì sao banner phiên bản cũ chưa chứng minh hệ thống bị ảnh hưởng?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Vì bản vá có thể được backport mà không đổi số phiên bản hiển thị' },
        { id: 'b', textVi: 'Vì banner luôn bị làm giả' },
        { id: 'c', textVi: 'Vì phiên bản không liên quan tới lỗ hổng' },
        { id: 'd', textVi: 'Vì trình quét không đọc được banner chính xác' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Backport là thực tế phổ biến ở nhiều bản phân phối, nên phiên bản hiển thị không phản ánh tình trạng vá.',
      difficulty: 'intermediate',
    }),
    q('qz-net-flaws-2', {
      promptVi: 'Khi nghi ngờ một tên miền con có thể bị chiếm, bạn nên làm gì?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi: 'Báo cáo dấu hiệu và để tổ chức xử lý, không tự đăng ký tài nguyên đích',
        },
        { id: 'b', textVi: 'Tự đăng ký tài nguyên để chứng minh' },
        { id: 'c', textVi: 'Đặt nội dung cảnh báo lên tên miền đó' },
        { id: 'd', textVi: 'Bỏ qua vì khó chứng minh' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Tự đăng ký tài nguyên đích đưa bạn vào vị trí kiểm soát một tài sản mang thương hiệu của tổ chức khác.',
      difficulty: 'intermediate',
    }),
  ]),

  quiz('qz-binary-fuzzing', 'mod-binary-fuzzing', 'Tự đánh giá: fuzzing', [
    q('qz-binary-fuzzing-1', {
      promptVi: 'Điều gì quyết định chất lượng của một chiến dịch fuzzing?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Chất lượng harness và corpus, cùng độ bao phủ đạt được' },
        { id: 'b', textVi: 'Tổng số lần chạy' },
        { id: 'c', textVi: 'Số lõi CPU sử dụng' },
        { id: 'd', textVi: 'Số crash tìm được' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Nhiều crash trùng nhau không có giá trị. Độ bao phủ và chất lượng harness mới quyết định.',
      difficulty: 'research',
    }),
    q('qz-binary-fuzzing-2', {
      promptVi: 'Vì sao không được fuzz dịch vụ trực tuyến của người khác?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Vì đó là hành vi gây tải, tương đương tấn công từ chối dịch vụ' },
        { id: 'b', textVi: 'Vì công cụ không hỗ trợ' },
        { id: 'c', textVi: 'Vì kết quả sẽ không chính xác' },
        { id: 'd', textVi: 'Vì cần nhiều băng thông' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Fuzzing sinh lượng lớn đầu vào bất thường; trên dịch vụ thật đó là gây tải và bị cấm ở hầu hết chính sách.',
      difficulty: 'advanced',
    }),
  ]),

  quiz('qz-ics-safety', 'mod-ics-safety-constraints', 'Tự đánh giá: ICS/OT', [
    q('qz-ics-safety-1', {
      promptVi: 'Trong môi trường OT, thứ tự ưu tiên thường là gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'An toàn và khả dụng trước, tính bí mật sau' },
        { id: 'b', textVi: 'Tính bí mật trước, an toàn sau' },
        { id: 'c', textVi: 'Giống hệt hệ thống thông tin thông thường' },
        { id: 'd', textVi: 'Chỉ quan tâm tới tính toàn vẹn' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Trong OT, mất điều khiển quy trình có thể gây nguy hiểm cho con người, nên an toàn và khả dụng được ưu tiên.',
      difficulty: 'specialist',
    }),
    q('qz-ics-safety-2', {
      promptVi: 'Khuyến nghị nào phù hợp nhất cho môi trường vận hành liên tục?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi: 'Biện pháp bù đắp không gây gián đoạn, ví dụ tăng cường phân đoạn và giám sát',
        },
        { id: 'b', textVi: 'Vá ngay lập tức trong giờ vận hành' },
        { id: 'c', textVi: 'Tắt thiết bị cho tới khi vá xong' },
        { id: 'd', textVi: 'Đổi giao thức điều khiển sang giao thức mới' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Biện pháp gây dừng quy trình thường không chấp nhận được; khuyến nghị phải tính tới ràng buộc vận hành.',
      difficulty: 'specialist',
    }),
  ]),

  quiz('qz-wireless-regulation', 'mod-wireless-regulation', 'Tự đánh giá: quy định vô tuyến', [
    q('qz-wireless-regulation-1', {
      promptVi: 'Giả định nào sau đây là SAI?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Một kỹ thuật RF hợp pháp ở một quốc gia thì hợp pháp ở mọi nơi' },
        { id: 'b', textVi: 'Thu thụ động và phát chủ động có mức ràng buộc pháp lý khác nhau' },
        {
          id: 'c',
          textVi: 'Cần xác định cơ quan quản lý tần số tại nơi cư trú trước khi thử nghiệm',
        },
        { id: 'd', textVi: 'Môi trường che chắn giúp giảm rủi ro ảnh hưởng tới thiết bị khác' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Quy định vô tuyến khác nhau theo quốc gia; không được mặc định một kỹ thuật được phép ở mọi nơi.',
      difficulty: 'specialist',
    }),
    q('qz-wireless-regulation-2', {
      promptVi: 'Với thiết bị BLE, phát hiện phổ biến nhất trong sản phẩm tiêu dùng là gì?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi: 'Đặc tính nhạy cảm đọc hoặc ghi được mà không cần ghép nối có xác thực',
        },
        { id: 'b', textVi: 'Thiết bị phát ở công suất quá cao' },
        { id: 'c', textVi: 'Thiết bị dùng tần số không được cấp phép' },
        { id: 'd', textVi: 'Thiết bị không hỗ trợ mã hoá liên kết' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Nhiều thiết bị để đặc tính điều khiển ở mức không yêu cầu bảo vệ để đơn giản hoá trải nghiệm ghép nối.',
      difficulty: 'specialist',
    }),
  ]),

  quiz('qz-automotive-safety', 'mod-automotive-safety', 'Tự đánh giá: automotive', [
    q('qz-automotive-safety-1', {
      promptVi: 'Bề mặt nào thường là nơi nghiên cứu hợp pháp và có giá trị nhất với người mới?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Backend đám mây và ứng dụng đồng hành' },
        { id: 'b', textVi: 'Mạng bus trong xe đang vận hành' },
        { id: 'c', textVi: 'Cổng chẩn đoán của xe đang chạy' },
        { id: 'd', textVi: 'Hệ thống phanh' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Backend và ứng dụng có thể nghiên cứu mà không chạm tới phương tiện, và thường là nơi có lỗi phân quyền thật.',
      difficulty: 'specialist',
    }),
    q('qz-automotive-safety-2', {
      promptVi: 'Khi phát hiện có thể ảnh hưởng an toàn khi vận hành, bạn nên làm gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Dừng ngay và báo cáo qua kênh khẩn cấp của chương trình' },
        { id: 'b', textVi: 'Tiếp tục để đánh giá đầy đủ mức nghiêm trọng' },
        { id: 'c', textVi: 'Thử trên một phương tiện khác để xác nhận' },
        { id: 'd', textVi: 'Đợi tới khi hoàn thiện báo cáo rồi mới gửi' },
      ],
      correctOptionIds: ['a'],
      explanationVi: 'Với phương tiện, an toàn con người được ưu tiên hơn mọi quy trình khác.',
      difficulty: 'specialist',
    }),
  ]),

  quiz('qz-emerging-eval', 'mod-emerging-evaluating-new-surfaces', 'Tự đánh giá: bề mặt mới', [
    q('qz-emerging-eval-1', {
      promptVi: 'Câu hỏi nào nên được trả lời đầu tiên khi đánh giá một lĩnh vực mới?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Ràng buộc pháp lý và an toàn của lĩnh vực đó là gì' },
        { id: 'b', textVi: 'Công cụ nào phổ biến nhất' },
        { id: 'c', textVi: 'Có bao nhiêu chương trình nhận báo cáo' },
        { id: 'd', textVi: 'Lĩnh vực đó có khó không' },
      ],
      correctOptionIds: ['a'],
      explanationVi: 'Câu hỏi "có được phép không" luôn đứng trước câu hỏi "làm thế nào".',
      difficulty: 'research',
    }),
    q('qz-emerging-eval-2', {
      promptVi: 'Điều kiện nào KHÔNG nằm trong bảy điều kiện mở một specialization?',
      contextBlock: null,
      options: [
        {
          id: 'a',
          textVi: 'Có ít nhất một chương trình bug bounty đang hoạt động cho lĩnh vực đó',
        },
        { id: 'b', textVi: 'Có ít nhất một lab hợp pháp hoặc môi trường mô phỏng' },
        { id: 'c', textVi: 'Có cảnh báo pháp lý và phạm vi' },
        { id: 'd', textVi: 'Có checklist tối thiểu' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Bảy điều kiện tập trung vào chất lượng nội dung và an toàn, không phụ thuộc vào việc có chương trình hay không.',
      difficulty: 'research',
    }),
  ]),

  quiz('qz-saas-email-auth', 'mod-saas-email-auth', 'Tự đánh giá: xác thực email', [
    q('qz-saas-email-auth-1', {
      promptVi: 'Bản ghi DMARC ở chế độ chỉ giám sát có nghĩa là gì?',
      contextBlock: {
        language: 'text',
        content: 'v=DMARC1; p=none; rua=mailto:reports@example.com',
      },
      options: [
        { id: 'a', textVi: 'Bên nhận được yêu cầu báo cáo nhưng không từ chối thư không đạt' },
        { id: 'b', textVi: 'Bên nhận phải từ chối mọi thư không đạt' },
        { id: 'c', textVi: 'Tên miền không có SPF' },
        { id: 'd', textVi: 'Tên miền không gửi email' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Chính sách none nghĩa là chỉ thu thập báo cáo; nó không tạo ra cơ sở để bên nhận từ chối thư giả mạo.',
      difficulty: 'intermediate',
    }),
    q('qz-saas-email-auth-2', {
      promptVi: 'Khi báo cáo vấn đề giả mạo email, điều gì tuyệt đối không được làm?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Gửi email giả mạo tới người dùng thật để chứng minh' },
        { id: 'b', textVi: 'Đọc bản ghi DNS công khai' },
        { id: 'c', textVi: 'Mô tả cấu hình hiện tại và khuyến nghị' },
        { id: 'd', textVi: 'Gửi thử tới địa chỉ của chính bạn nếu chính sách cho phép' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Gửi thư giả mạo tới người thật là hành vi lừa đảo, bị cấm trong mọi hoàn cảnh.',
      difficulty: 'intermediate',
    }),
  ]),

  quiz('qz-desktop-flaws', 'mod-desktop-flaws', 'Tự đánh giá: desktop', [
    q('qz-desktop-flaws-1', {
      promptVi: 'Vì sao XSS trong ứng dụng Electron có thể nghiêm trọng hơn trên web?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Vì nếu không cách ly ngữ cảnh, mã có thể chạm tới API hệ thống' },
        { id: 'b', textVi: 'Vì Electron không hỗ trợ CSP' },
        { id: 'c', textVi: 'Vì ứng dụng desktop không có sandbox trình duyệt' },
        { id: 'd', textVi: 'Vì người dùng desktop ít cảnh giác hơn' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Cách ly ngữ cảnh và tắt tích hợp Node cho nội dung không tin cậy là hai cấu hình quyết định.',
      difficulty: 'advanced',
    }),
    q('qz-desktop-flaws-2', {
      promptVi: 'Kênh IPC cục bộ nên kiểm tra điều gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Danh tính và quyền của tiến trình gọi' },
        { id: 'b', textVi: 'Kích thước thông điệp' },
        { id: 'c', textVi: 'Thời gian gửi thông điệp' },
        { id: 'd', textVi: 'Phiên bản của ứng dụng gọi' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Dịch vụ đặc quyền không kiểm tra bên gọi là lỗi leo thang đặc quyền cục bộ điển hình.',
      difficulty: 'advanced',
    }),
  ]),

  quiz('qz-ext-message', 'mod-ext-message-boundary', 'Tự đánh giá: tiện ích trình duyệt', [
    q('qz-ext-message-1', {
      promptVi: 'Content script nên coi nội dung trang web là gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Dữ liệu không tin cậy' },
        { id: 'b', textVi: 'Dữ liệu tin cậy vì cùng trình duyệt' },
        { id: 'c', textVi: 'Dữ liệu tin cậy nếu trang dùng HTTPS' },
        { id: 'd', textVi: 'Dữ liệu tin cậy nếu người dùng chủ động mở trang' },
      ],
      correctOptionIds: ['a'],
      explanationVi: 'Trang web luôn nằm ở phía không tin cậy của ranh giới với tiện ích.',
      difficulty: 'advanced',
    }),
    q('qz-ext-message-2', {
      promptVi: 'Native messaging tạo ra rủi ro gì?',
      contextBlock: null,
      options: [
        { id: 'a', textVi: 'Một đường đi từ nội dung web ra ứng dụng chạy trên hệ điều hành' },
        { id: 'b', textVi: 'Làm chậm trình duyệt' },
        { id: 'c', textVi: 'Làm lộ lịch sử duyệt web' },
        { id: 'd', textVi: 'Vô hiệu hoá CSP của trang' },
      ],
      correctOptionIds: ['a'],
      explanationVi:
        'Nếu chuỗi kiểm tra ở mỗi bước không chặt, trang web có thể gián tiếp điều khiển ứng dụng native.',
      difficulty: 'research',
    }),
  ]),
];
