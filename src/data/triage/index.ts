import type { TriageScenario } from '@/schemas/entities';

/**
 * Tình huống mô phỏng triage. Người học đóng vai triager hoặc người báo cáo và
 * chọn hành động phù hợp nhất.
 */
export const triageScenarios: TriageScenario[] = [
  {
    id: 'trg-missing-steps',
    titleVi: 'Báo cáo thiếu bước tái hiện',
    category: 'missing-steps',
    submissionVi:
      'Tiêu đề: IDOR nghiêm trọng. Nội dung: Tôi có thể xem dữ liệu của người dùng khác trên hệ thống của các bạn. Đây là lỗi rất nghiêm trọng, mong được xử lý sớm. Đính kèm: một ảnh chụp màn hình mờ.',
    triagerNoteVi:
      'Không có endpoint, không có tài khoản dùng để thử, không có bước nào để tái hiện.',
    choices: [
      {
        id: 'a',
        labelVi:
          'Hỏi cụ thể: endpoint nào, hai tài khoản nào, request nào, kết quả quan sát được là gì',
        isBest: true,
        feedbackVi:
          'Đúng. Hỏi cụ thể từng thông tin còn thiếu giúp người báo cáo bổ sung nhanh và tránh vòng lặp qua lại nhiều lần.',
      },
      {
        id: 'b',
        labelVi: 'Đóng ngay là không đủ thông tin',
        isBest: false,
        feedbackVi:
          'Quá vội. Báo cáo có thể hợp lệ; nên cho một cơ hội bổ sung với yêu cầu rõ ràng trước khi đóng.',
      },
      {
        id: 'c',
        labelVi: 'Tự thử đoán endpoint dựa trên ảnh chụp',
        isBest: false,
        feedbackVi:
          'Không hiệu quả và dễ dẫn tới kết luận sai. Trách nhiệm cung cấp bước tái hiện thuộc về người báo cáo.',
      },
    ],
    lessonVi:
      'Bước tái hiện không đủ rõ là lý do khiến báo cáo bị kéo dài hoặc bị đóng nhiều nhất. Viết bước tái hiện trước, tóm tắt sau.',
    relatedModuleIds: ['mod-policy-report-structure'],
  },
  {
    id: 'trg-unclear-scope',
    titleVi: 'Tài sản không rõ có nằm trong phạm vi',
    category: 'unclear-scope',
    submissionVi:
      'Người báo cáo tìm thấy vấn đề trên một tên miền con khớp wildcard trong chính sách, nhưng tên miền đó trỏ tới dịch vụ của một nhà cung cấp bên thứ ba.',
    triagerNoteVi:
      'Hạ tầng không thuộc tổ chức; chính sách chỉ nói "*.example.com" mà không nêu ngoại lệ.',
    choices: [
      {
        id: 'a',
        labelVi:
          'Xác nhận quyền sở hữu tài sản, giải thích ranh giới trách nhiệm và hướng dẫn báo cáo tới đúng bên',
        isBest: true,
        feedbackVi:
          'Đúng. Đồng thời nên cập nhật chính sách để nêu rõ ngoại lệ, tránh lặp lại tình huống này.',
      },
      {
        id: 'b',
        labelVi: 'Đóng là ngoài phạm vi mà không giải thích',
        isBest: false,
        feedbackVi:
          'Đóng đúng nhưng thiếu giải thích. Người báo cáo đã hành động hợp lý dựa trên chính sách hiện có.',
      },
      {
        id: 'c',
        labelVi: 'Chấp nhận và tự liên hệ nhà cung cấp thay cho người báo cáo',
        isBest: false,
        feedbackVi:
          'Có thiện chí nhưng làm mờ ranh giới trách nhiệm và có thể gây nhầm lẫn về quyền công bố.',
      },
    ],
    lessonVi:
      'Wildcard không tự động bao gồm hạ tầng của bên thứ ba. Khi không chắc, hỏi trước khi thử.',
    relatedModuleIds: ['mod-policy-asset-identifiers'],
  },
  {
    id: 'trg-duplicate',
    titleVi: 'Báo cáo trùng lặp',
    category: 'duplicate',
    submissionVi:
      'Một báo cáo chất lượng tốt mô tả đúng vấn đề, nhưng một người khác đã báo cáo cùng lỗi từ hai tuần trước và lỗi đang chờ vá.',
    triagerNoteVi: 'Nội dung hợp lệ, chỉ trùng với một báo cáo đã tồn tại.',
    choices: [
      {
        id: 'a',
        labelVi: 'Đánh dấu trùng lặp, nêu rõ thời điểm báo cáo gốc và cảm ơn chất lượng báo cáo',
        isBest: true,
        feedbackVi:
          'Đúng. Minh bạch về thời điểm giúp người báo cáo tin tưởng quyết định và tiếp tục tham gia.',
      },
      {
        id: 'b',
        labelVi: 'Đóng là không hợp lệ',
        isBest: false,
        feedbackVi:
          'Sai trạng thái. Trùng lặp khác với không hợp lệ, và việc gán sai làm tổn hại uy tín người báo cáo.',
      },
      {
        id: 'c',
        labelVi: 'Giữ mở cho tới khi vá xong rồi mới quyết định',
        isBest: false,
        feedbackVi:
          'Kéo dài không cần thiết. Nên xác định trạng thái sớm và thông báo cho người báo cáo.',
      },
    ],
    lessonVi:
      'Trùng lặp là chuyện bình thường và không phản ánh chất lượng báo cáo của bạn. Đó là rủi ro cố hữu của mô hình bug bounty.',
    relatedModuleIds: ['mod-policy-triage-states', 'mod-policy-practice-plan'],
  },
  {
    id: 'trg-informative',
    titleVi: 'Phát hiện đúng nhưng không có tác động',
    category: 'informative',
    submissionVi:
      'Người báo cáo phát hiện máy chủ trả về header tiết lộ tên và phiên bản phần mềm, và cho rằng đây là lỗ hổng lộ thông tin nghiêm trọng.',
    triagerNoteVi: 'Quan sát chính xác nhưng không dẫn tới tác động cụ thể nào trong ngữ cảnh này.',
    choices: [
      {
        id: 'a',
        labelVi: 'Đánh dấu informative, giải thích vì sao thiếu tác động và gợi ý hướng đào sâu',
        isBest: true,
        feedbackVi:
          'Đúng. Giải thích cụ thể giúp người báo cáo học được cách đánh giá tác động cho lần sau.',
      },
      {
        id: 'b',
        labelVi: 'Chấp nhận vì kỹ thuật thì đúng',
        isBest: false,
        feedbackVi:
          'Đúng về kỹ thuật không đồng nghĩa với có tác động. Chấp nhận sẽ tạo kỳ vọng sai.',
      },
      {
        id: 'c',
        labelVi: 'Đóng là spam',
        isBest: false,
        feedbackVi:
          'Sai trạng thái và không công bằng. Báo cáo có nội dung thật, chỉ thiếu tác động.',
      },
    ],
    lessonVi:
      'Một quan sát đúng chưa phải một lỗ hổng. Luôn tự hỏi: điều này cho phép ai làm được gì mà lẽ ra họ không được làm.',
    relatedModuleIds: ['mod-web-info-disclosure', 'mod-policy-severity'],
  },
  {
    id: 'trg-scanner-only',
    titleVi: 'Báo cáo chỉ gồm kết quả quét',
    category: 'scanner-only',
    submissionVi:
      'Người báo cáo dán nguyên một bảng kết quả của trình quét, gồm hai mươi mục, không có bước tái hiện hay xác minh nào.',
    triagerNoteVi: 'Không có dấu hiệu người báo cáo đã tự xác minh bất kỳ mục nào.',
    choices: [
      {
        id: 'a',
        labelVi: 'Đóng và giải thích rằng kết quả quét chưa xác minh không phải một báo cáo',
        isBest: true,
        feedbackVi: 'Đúng. Nêu rõ tiêu chuẩn cần đạt để người báo cáo biết cách làm lại cho đúng.',
      },
      {
        id: 'b',
        labelVi: 'Tự xác minh cả hai mươi mục',
        isBest: false,
        feedbackVi:
          'Chuyển gánh nặng xác minh sang chương trình, và khuyến khích hành vi gửi kết quả thô.',
      },
      {
        id: 'c',
        labelVi: 'Chấp nhận mục nào trông đáng tin nhất',
        isBest: false,
        feedbackVi:
          'Không nhất quán và tạo tiền lệ xấu. Mọi mục đều cần được xác minh trước khi báo cáo.',
      },
    ],
    lessonVi:
      'Output công cụ là giả thuyết. Xác minh thủ công là bước bắt buộc trước khi gửi báo cáo.',
    relatedModuleIds: ['mod-method-tool-output'],
  },
  {
    id: 'trg-no-impact',
    titleVi: 'Kỹ thuật ấn tượng nhưng không có tác động thực',
    category: 'no-impact',
    submissionVi:
      'Người báo cáo chứng minh có thể sửa giá trị hiển thị trong trình duyệt của chính họ và cho rằng đây là lỗi thao túng dữ liệu.',
    triagerNoteVi:
      'Toàn bộ thay đổi chỉ tồn tại trong trình duyệt của người báo cáo, máy chủ không chấp nhận giá trị đó.',
    choices: [
      {
        id: 'a',
        labelVi:
          'Giải thích rằng thay đổi phía client trên máy của chính mình không phải lỗ hổng, và hỏi máy chủ có chấp nhận giá trị không',
        isBest: true,
        feedbackVi: 'Đúng. Câu hỏi bổ sung mở đường cho người báo cáo tự kiểm tra phần quan trọng.',
      },
      {
        id: 'b',
        labelVi: 'Đóng ngay không giải thích',
        isBest: false,
        feedbackVi: 'Mất cơ hội giúp người báo cáo hiểu ranh giới giữa client và server.',
      },
      {
        id: 'c',
        labelVi: 'Chấp nhận ở mức thấp cho đỡ tranh cãi',
        isBest: false,
        feedbackVi: 'Tạo kỳ vọng sai và làm loãng ý nghĩa của các mức severity.',
      },
    ],
    lessonVi:
      'Sửa được giá trị trong trình duyệt của chính bạn không phải lỗ hổng. Câu hỏi quyết định là máy chủ có chấp nhận nó không.',
    relatedModuleIds: ['mod-found-browser-model', 'mod-web-business-logic'],
  },
  {
    id: 'trg-overclaim',
    titleVi: 'Thổi phồng mức nghiêm trọng',
    category: 'overclaim',
    submissionVi:
      'Người báo cáo tìm được một open redirect và gán CVSS ở mức nghiêm trọng nhất, mô tả đây là lỗi chiếm toàn bộ hệ thống.',
    triagerNoteVi:
      'Open redirect là phát hiện hợp lệ nhưng mức nghiêm trọng được gán vượt xa điều đã chứng minh.',
    choices: [
      {
        id: 'a',
        labelVi:
          'Chấp nhận phát hiện, điều chỉnh mức nghiêm trọng và giải thích từng chỉ số của vector',
        isBest: true,
        feedbackVi:
          'Đúng. Giữ lại giá trị của phát hiện đồng thời dạy cách chấm điểm dựa trên bằng chứng.',
      },
      {
        id: 'b',
        labelVi: 'Đóng vì người báo cáo thiếu trung thực',
        isBest: false,
        feedbackVi: 'Quá nặng. Chấm điểm sai thường do thiếu kinh nghiệm chứ không do cố ý.',
      },
      {
        id: 'c',
        labelVi: 'Chấp nhận nguyên mức nghiêm trọng để tránh tranh luận',
        isBest: false,
        feedbackVi: 'Làm mất ý nghĩa của thang điểm và tạo tiền lệ khó xử cho các báo cáo sau.',
      },
    ],
    lessonVi:
      'Chấm điểm dựa trên điều bạn đã chứng minh. Thổi phồng làm giảm uy tín nhanh hơn bất kỳ điều gì khác.',
    relatedModuleIds: ['mod-policy-severity'],
  },
  {
    id: 'trg-excessive-data',
    titleVi: 'Thu thập dữ liệu quá mức',
    category: 'excessive-data',
    submissionVi:
      'Người báo cáo chứng minh một IDOR bằng cách đính kèm tệp chứa hồ sơ của năm nghìn người dùng thật.',
    triagerNoteVi:
      'Phát hiện hợp lệ nhưng người báo cáo đang giữ một khối lượng lớn dữ liệu cá nhân.',
    choices: [
      {
        id: 'a',
        labelVi:
          'Chấp nhận phát hiện, yêu cầu xoá dữ liệu ngay và xác nhận việc xoá, đồng thời nhắc lại nguyên tắc PoC tối thiểu',
        isBest: true,
        feedbackVi:
          'Đúng. Ưu tiên số một là đưa dữ liệu ra khỏi tay bên thứ ba, sau đó mới tới việc xử lý lỗ hổng.',
      },
      {
        id: 'b',
        labelVi: 'Đóng báo cáo vì người báo cáo vi phạm chính sách',
        isBest: false,
        feedbackVi:
          'Không giải quyết được vấn đề dữ liệu đang bị giữ, và bỏ qua một lỗ hổng có thật.',
      },
      {
        id: 'c',
        labelVi: 'Bỏ qua phần dữ liệu và chỉ xử lý lỗ hổng',
        isBest: false,
        feedbackVi: 'Bỏ qua nghĩa vụ về dữ liệu cá nhân, có thể tạo rủi ro pháp lý cho cả hai bên.',
      },
    ],
    lessonVi:
      'Một bản ghi đã che thông tin định danh là đủ. Càng nhiều dữ liệu của người khác bạn giữ, rủi ro pháp lý càng lớn.',
    relatedModuleIds: ['mod-policy-stop-rules', 'mod-privacy-impact-without-harm'],
  },
  {
    id: 'trg-high-quality',
    titleVi: 'Báo cáo chất lượng cao',
    category: 'high-quality',
    submissionVi:
      'Báo cáo có tiêu đề rõ, bước tái hiện chính xác với hai tài khoản thử nghiệm, tách rõ tác động kỹ thuật và kinh doanh, nêu dữ liệu đã tiếp xúc, xác nhận đã xoá, và đề xuất khắc phục ở mức nguyên tắc.',
    triagerNoteVi: 'Tái hiện thành công ngay lần đầu.',
    choices: [
      {
        id: 'a',
        labelVi:
          'Chuyển sang trạng thái đã xác nhận, nêu rõ mốc thời gian dự kiến và ghi nhận chất lượng báo cáo',
        isBest: true,
        feedbackVi:
          'Đúng. Phản hồi nhanh và minh bạch về thời gian là điều người báo cáo đánh giá cao nhất.',
      },
      {
        id: 'b',
        labelVi: 'Xác nhận nhưng không nêu mốc thời gian',
        isBest: false,
        feedbackVi:
          'Bỏ lỡ phần quan trọng. Thiếu mốc thời gian là nguyên nhân phổ biến của căng thẳng về sau.',
      },
      {
        id: 'c',
        labelVi: 'Yêu cầu thêm bằng chứng cho chắc chắn',
        isBest: false,
        feedbackVi:
          'Không cần thiết và có thể khiến người báo cáo thu thập thêm dữ liệu ngoài ý muốn.',
      },
    ],
    lessonVi:
      'Đây là chuẩn để hướng tới. Chú ý rằng phần khiến báo cáo này tốt là cấu trúc và kỷ luật, không phải kỹ thuật phức tạp.',
    relatedModuleIds: ['mod-policy-report-structure'],
  },
  {
    id: 'trg-failed-retest',
    titleVi: 'Retest thất bại',
    category: 'failed-retest',
    submissionVi:
      'Sau khi tổ chức thông báo đã vá, người báo cáo thử lại và vẫn tái hiện được vấn đề bằng một biến thể nhỏ của bước ban đầu.',
    triagerNoteVi: 'Bản vá chỉ chặn đúng chuỗi request trong báo cáo gốc.',
    choices: [
      {
        id: 'a',
        labelVi: 'Mở lại báo cáo, cung cấp biến thể tái hiện và chỉ ra bản vá mới chữa triệu chứng',
        isBest: true,
        feedbackVi: 'Đúng. Nêu rõ nguyên nhân gốc giúp đội phát triển sửa đúng chỗ ở lần thứ hai.',
      },
      {
        id: 'b',
        labelVi: 'Gửi một báo cáo mới hoàn toàn',
        isBest: false,
        feedbackVi:
          'Làm mất ngữ cảnh và có thể bị đánh dấu trùng lặp. Nên tiếp tục trong báo cáo cũ.',
      },
      {
        id: 'c',
        labelVi: 'Chấp nhận bản vá vì tổ chức đã cố gắng',
        isBest: false,
        feedbackVi:
          'Để lại lỗ hổng còn khai thác được. Retest tồn tại chính là để phát hiện tình huống này.',
      },
    ],
    lessonVi:
      'Bản vá chữa triệu chứng thường để lại biến thể. Retest là một phần của quy trình, không phải việc làm phiền.',
    relatedModuleIds: ['mod-policy-triage-states', 'mod-code-variant-analysis'],
  },
  {
    id: 'trg-evidence-request',
    titleVi: 'Triager yêu cầu thêm bằng chứng',
    category: 'evidence-request',
    submissionVi:
      'Triager viết: "Chúng tôi chưa tái hiện được. Bạn có thể cung cấp thêm bằng chứng không?"',
    triagerNoteVi: 'Yêu cầu chung chung, chưa nêu cụ thể bước nào thất bại.',
    choices: [
      {
        id: 'a',
        labelVi:
          'Hỏi lại chính xác bước nào thất bại và kết quả họ nhận được, rồi bổ sung bước tái hiện rõ hơn',
        isBest: true,
        feedbackVi: 'Đúng. Bổ sung sự rõ ràng, không bổ sung thêm dữ liệu.',
      },
      {
        id: 'b',
        labelVi: 'Thu thập thêm dữ liệu người dùng để làm bằng chứng thuyết phục hơn',
        isBest: false,
        feedbackVi:
          'Sai hướng và nguy hiểm. Vấn đề nằm ở khả năng tái hiện, không ở khối lượng dữ liệu.',
      },
      {
        id: 'c',
        labelVi: 'Kết luận triager thiếu năng lực và yêu cầu chuyển người xử lý',
        isBest: false,
        feedbackVi:
          'Làm hỏng quan hệ làm việc. Phần lớn trường hợp là do bước tái hiện thiếu một chi tiết môi trường.',
      },
    ],
    lessonVi: 'Khi bị hỏi thêm bằng chứng, hãy làm rõ hơn chứ đừng thu thập nhiều hơn.',
    relatedModuleIds: ['mod-policy-triage-states', 'mod-method-evidence'],
  },
  {
    id: 'trg-out-of-scope-asset',
    titleVi: 'Người báo cáo đã kiểm thử tài sản ngoài phạm vi',
    category: 'unclear-scope',
    submissionVi:
      'Báo cáo mô tả một lỗi thật nhưng trên một hệ thống mà chính sách liệt kê rõ là ngoài phạm vi.',
    triagerNoteVi: 'Tài sản nằm trong danh sách loại trừ tường minh.',
    choices: [
      {
        id: 'a',
        labelVi:
          'Đóng là ngoài phạm vi, nhắc lại danh sách loại trừ và nhắc nguyên tắc kiểm tra phạm vi trước khi thử',
        isBest: true,
        feedbackVi:
          'Đúng. Nếu vấn đề nghiêm trọng, vẫn nên chuyển nội bộ để xử lý dù không thưởng.',
      },
      {
        id: 'b',
        labelVi: 'Thưởng vì lỗi có thật',
        isBest: false,
        feedbackVi:
          'Khuyến khích việc bỏ qua phạm vi, tạo rủi ro cho cả người báo cáo lẫn tổ chức.',
      },
      {
        id: 'c',
        labelVi: 'Cảnh cáo và cấm người báo cáo',
        isBest: false,
        feedbackVi: 'Quá nặng cho một lần đọc sót, trừ khi có dấu hiệu cố ý hoặc lặp lại.',
      },
    ],
    lessonVi:
      'Danh sách loại trừ quan trọng ngang danh sách bao gồm. Đọc cả hai trước khi bắt đầu.',
    relatedModuleIds: ['mod-policy-scope-reading'],
  },
  {
    id: 'trg-third-party-impact',
    titleVi: 'Phép thử chạm tới nhà cung cấp bên thứ ba',
    category: 'unclear-scope',
    submissionVi:
      'Để chứng minh một SSRF, người báo cáo đã gửi request tới hạ tầng của một nhà cung cấp dịch vụ khác.',
    triagerNoteVi: 'SSRF có thật nhưng cách chứng minh đã tác động ra ngoài phạm vi.',
    choices: [
      {
        id: 'a',
        labelVi: 'Chấp nhận lỗ hổng, nhắc rằng PoC nên dùng đích do chính người báo cáo kiểm soát',
        isBest: true,
        feedbackVi: 'Đúng. Lỗ hổng vẫn hợp lệ; điều cần sửa là phương pháp chứng minh.',
      },
      {
        id: 'b',
        labelVi: 'Đóng vì phương pháp sai',
        isBest: false,
        feedbackVi: 'Bỏ qua một lỗ hổng có thật vì lỗi phương pháp có thể sửa được.',
      },
      {
        id: 'c',
        labelVi: 'Yêu cầu người báo cáo lặp lại phép thử để xác nhận',
        isBest: false,
        feedbackVi: 'Khiến hành vi tác động ra ngoài phạm vi bị lặp lại thêm một lần nữa.',
      },
    ],
    lessonVi: 'Với SSRF, đích chứng minh luôn nên là một máy chủ do bạn kiểm soát và có ghi log.',
    relatedModuleIds: ['mod-web-ssrf', 'mod-policy-stop-rules'],
  },
  {
    id: 'trg-service-degradation',
    titleVi: 'Dấu hiệu suy giảm dịch vụ trong lúc kiểm thử',
    category: 'no-impact',
    submissionVi:
      'Trong lúc kiểm thử giới hạn tốc độ, người báo cáo nhận thấy thời gian phản hồi tăng dần và một số request bắt đầu lỗi.',
    triagerNoteVi: 'Chưa có báo cáo nào được gửi; đây là quyết định trong lúc kiểm thử.',
    choices: [
      {
        id: 'a',
        labelVi: 'Dừng ngay, ghi lại thời điểm và mức tải đã tạo, rồi thông báo cho chương trình',
        isBest: true,
        feedbackVi:
          'Đúng. Chủ động thông báo giúp đội vận hành loại trừ nguyên nhân và thể hiện thiện chí.',
      },
      {
        id: 'b',
        labelVi: 'Giảm tốc độ và tiếp tục để xác định ngưỡng chính xác',
        isBest: false,
        feedbackVi:
          'Vẫn tiếp tục gây tải lên hệ thống đang phục vụ người dùng. Dấu hiệu suy giảm là điều kiện dừng.',
      },
      {
        id: 'c',
        labelVi: 'Chuyển sang kiểm thử vào ban đêm',
        isBest: false,
        feedbackVi: 'Không giải quyết vấn đề gốc và có thể vi phạm khung giờ kiểm thử được phép.',
      },
    ],
    lessonVi:
      'Dấu hiệu suy giảm dịch vụ là một trong chín điều kiện dừng. Mục tiêu là xác định cơ chế bảo vệ có tồn tại hay không, không phải tìm ngưỡng chính xác.',
    relatedModuleIds: ['mod-policy-stop-rules', 'mod-api-resource-abuse'],
  },
  {
    id: 'trg-public-disclosure',
    titleVi: 'Người báo cáo muốn công bố sớm',
    category: 'informative',
    submissionVi:
      'Lỗ hổng đã được vá. Người báo cáo muốn viết bài công khai ngay và hỏi chương trình.',
    triagerNoteVi:
      'Chính sách yêu cầu chờ một khoảng thời gian và cần sự đồng ý trước khi công bố.',
    choices: [
      {
        id: 'a',
        labelVi:
          'Giải thích điều khoản công bố trong chính sách và thống nhất một mốc thời gian cụ thể',
        isBest: true,
        feedbackVi:
          'Đúng. Việc hỏi trước cho thấy người báo cáo hiểu quy trình; nên phản hồi bằng mốc thời gian rõ ràng.',
      },
      {
        id: 'b',
        labelVi: 'Từ chối vô thời hạn',
        isBest: false,
        feedbackVi: 'Không có mốc thời gian là nguồn gốc của phần lớn xung đột về công bố.',
      },
      {
        id: 'c',
        labelVi: 'Đồng ý ngay vì lỗi đã được vá',
        isBest: false,
        feedbackVi:
          'Vá xong không tự động cho phép công bố; vẫn cần theo đúng điều khoản trong chính sách.',
      },
    ],
    lessonVi:
      'Quyền công bố thuộc về chính sách chương trình. Hỏi trước và thống nhất mốc thời gian là cách làm đúng.',
    relatedModuleIds: ['mod-policy-safe-harbor', 'mod-policy-triage-states'],
  },
  {
    id: 'trg-ai-model-behavior',
    titleVi: 'Báo cáo về hành vi mô hình AI',
    category: 'informative',
    submissionVi:
      'Người báo cáo chỉ ra rằng bằng cách đặt câu hỏi theo một cách nhất định, trợ lý AI sẽ nói ra nội dung mà nhà cung cấp không mong muốn. Không có dữ liệu hay hệ thống nào bị ảnh hưởng.',
    triagerNoteVi: 'Chính sách AI của chương trình phân biệt an toàn nội dung với lỗ hổng bảo mật.',
    choices: [
      {
        id: 'a',
        labelVi:
          'Chuyển sang kênh an toàn nội dung, giải thích ranh giới, và nêu điều gì sẽ khiến nó thành báo cáo bảo mật',
        isBest: true,
        feedbackVi:
          'Đúng. Nêu rõ tiêu chí giúp người báo cáo biết cần chứng minh điều gì: một ranh giới tin cậy bị vượt qua.',
      },
      {
        id: 'b',
        labelVi: 'Chấp nhận như một lỗ hổng bảo mật',
        isBest: false,
        feedbackVi:
          'Làm mờ ranh giới giữa an toàn nội dung và bảo mật, gây khó cho việc phân loại về sau.',
      },
      {
        id: 'c',
        labelVi: 'Đóng là không hợp lệ mà không giải thích',
        isBest: false,
        feedbackVi: 'Bỏ lỡ cơ hội hướng dẫn, và có thể làm mất một báo cáo bảo mật thật ở lần sau.',
      },
    ],
    lessonVi:
      'Với AI, phải chứng minh có vượt qua một ranh giới tin cậy. Đầu ra không mong muốn tự nó thường không phải lỗ hổng bảo mật.',
    relatedModuleIds: ['mod-ai-policy', 'mod-ai-prompt-injection'],
  },
  {
    id: 'trg-cloud-customer-misconfig',
    titleVi: 'Cấu hình sai thuộc về khách hàng, không thuộc nhà cung cấp',
    category: 'unclear-scope',
    submissionVi:
      'Người báo cáo tìm thấy một tài nguyên lưu trữ công khai thuộc về một khách hàng của nền tảng, và gửi báo cáo cho nền tảng.',
    triagerNoteVi: 'Theo mô hình trách nhiệm chung, cấu hình này thuộc về khách hàng.',
    choices: [
      {
        id: 'a',
        labelVi:
          'Giải thích ranh giới trách nhiệm, hỗ trợ liên hệ khách hàng nếu chính sách cho phép, và nhắc không tải dữ liệu',
        isBest: true,
        feedbackVi: 'Đúng. Vấn đề vẫn cần được xử lý, chỉ là do bên khác chịu trách nhiệm.',
      },
      {
        id: 'b',
        labelVi: 'Đóng là ngoài phạm vi và không làm gì thêm',
        isBest: false,
        feedbackVi:
          'Đúng về phạm vi nhưng bỏ qua rủi ro thật đang tồn tại với dữ liệu của người dùng cuối.',
      },
      {
        id: 'c',
        labelVi: 'Đề nghị người báo cáo tự liên hệ và tự đánh giá mức nhạy cảm của dữ liệu',
        isBest: false,
        feedbackVi: 'Đánh giá mức nhạy cảm đòi hỏi tiếp xúc dữ liệu, đúng điều cần tránh.',
      },
    ],
    lessonVi:
      'Mô hình trách nhiệm chung quyết định báo cáo nên gửi cho ai. Đọc chính sách trước khi bỏ thời gian là kỹ năng quan trọng nhất ở domain cloud.',
    relatedModuleIds: ['mod-cloud-misconfig-vs-vuln'],
  },
  {
    id: 'trg-oss-public-issue',
    titleVi: 'Lỗ hổng nguồn mở bị mở công khai',
    category: 'overclaim',
    submissionVi:
      'Người báo cáo mở một public issue trên repository, mô tả đầy đủ cách khai thác một lỗ hổng chưa được vá.',
    triagerNoteVi: 'Dự án có SECURITY.md nêu kênh báo cáo riêng tư.',
    choices: [
      {
        id: 'a',
        labelVi:
          'Yêu cầu ẩn issue ngay, chuyển sang advisory riêng tư và giải thích rủi ro cho người dùng của dự án',
        isBest: true,
        feedbackVi:
          'Đúng. Ưu tiên là giảm thời gian lỗ hổng bị phơi bày công khai khi chưa có bản vá.',
      },
      {
        id: 'b',
        labelVi: 'Để nguyên vì thông tin đã công khai rồi',
        isBest: false,
        feedbackVi: 'Mỗi giờ issue còn mở là thêm rủi ro cho mọi người dùng của dự án.',
      },
      {
        id: 'c',
        labelVi: 'Xoá issue mà không liên hệ người báo cáo',
        isBest: false,
        feedbackVi:
          'Xử lý được phần phơi bày nhưng làm mất thiện chí và có thể khiến người báo cáo đăng lại nơi khác.',
      },
    ],
    lessonVi:
      'Không bao giờ mở public issue cho lỗ hổng chưa được xử lý. Tìm SECURITY.md hoặc chức năng báo cáo riêng tư trước.',
    relatedModuleIds: ['mod-code-oss-disclosure'],
  },
  {
    id: 'trg-not-applicable',
    titleVi: 'Báo cáo mô tả hành vi đúng như thiết kế',
    category: 'informative',
    submissionVi:
      'Người báo cáo cho rằng việc thành viên trong cùng workspace xem được tài liệu của nhau là một lỗ hổng phân quyền.',
    triagerNoteVi: 'Đây là hành vi được tài liệu hoá và là mục đích của sản phẩm cộng tác.',
    choices: [
      {
        id: 'a',
        labelVi:
          'Đánh dấu không áp dụng, dẫn tài liệu sản phẩm và gợi ý kiểm tra ranh giới giữa các workspace thay vì trong một workspace',
        isBest: true,
        feedbackVi: 'Đúng. Gợi ý hướng đúng biến một báo cáo bị đóng thành một bài học có ích.',
      },
      {
        id: 'b',
        labelVi: 'Đóng là spam',
        isBest: false,
        feedbackVi: 'Sai trạng thái. Người báo cáo hiểu nhầm mô hình sản phẩm chứ không gửi rác.',
      },
      {
        id: 'c',
        labelVi: 'Chấp nhận ở mức thấp',
        isBest: false,
        feedbackVi: 'Chấp nhận hành vi đúng thiết kế làm sai lệch dữ liệu về chất lượng sản phẩm.',
      },
    ],
    lessonVi:
      'Đọc tài liệu sản phẩm trước khi kết luận. Trong sản phẩm cộng tác, ranh giới quan trọng là giữa các tổ chức, không phải giữa các thành viên.',
    relatedModuleIds: ['mod-saas-tenancy', 'mod-web-tenant-isolation'],
  },
  {
    id: 'trg-spam',
    titleVi: 'Báo cáo rác',
    category: 'informative',
    submissionVi:
      'Nội dung báo cáo chỉ gồm một dòng: "Trang web của bạn có lỗ hổng, hãy trả tiền tôi sẽ nói cho biết."',
    triagerNoteVi: 'Không có nội dung kỹ thuật nào.',
    choices: [
      {
        id: 'a',
        labelVi: 'Đóng là spam và không thương lượng',
        isBest: true,
        feedbackVi:
          'Đúng. Yêu cầu trả tiền trước khi tiết lộ nằm ngoài mô hình bug bounty và không nên được khuyến khích.',
      },
      {
        id: 'b',
        labelVi: 'Thương lượng để biết chi tiết',
        isBest: false,
        feedbackVi: 'Tạo tiền lệ nguy hiểm và khuyến khích hành vi tương tự từ người khác.',
      },
      {
        id: 'c',
        labelVi: 'Yêu cầu người gửi cung cấp bằng chứng rồi mới quyết định',
        isBest: false,
        feedbackVi:
          'Có thể chấp nhận nếu lịch sự, nhưng với mẫu tin nhắn này thì thường chỉ kéo dài quá trình.',
      },
    ],
    lessonVi:
      'Bug bounty vận hành theo chính sách công khai. Đòi tiền trước khi tiết lộ không thuộc mô hình này.',
    relatedModuleIds: ['mod-policy-triage-states'],
  },
];
