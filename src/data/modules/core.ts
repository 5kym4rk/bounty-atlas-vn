import type { LearningModule } from '@/schemas/entities';
import { defineModule } from '../helpers';

/** Module của domain A (policy), B (foundations) và C (methodology). */
export const coreModules: LearningModule[] = [
  // ── A1–A5: Policy ──────────────────────────────────────────────────
  defineModule({
    id: 'mod-policy-program-types',
    trackId: 'trk-policy-programs',
    titleVi: 'Bug bounty, VDP, pentest, red team và CTF khác nhau thế nào',
    summaryVi:
      'Bốn hoạt động này thường bị gộp làm một. Chúng khác nhau ở ai thuê, phạm vi được xác định trước tới mức nào, có trả thưởng theo phát hiện hay theo thời gian, và mức độ ràng buộc hợp đồng.',
    difficulty: 'foundation',
    estimatedHours: 2,
    learningObjectives: [
      'Phân biệt bug bounty program, vulnerability disclosure program, pentest, red team và CTF theo bốn tiêu chí: bên thuê, phạm vi, mô hình trả công và ràng buộc pháp lý.',
      'Giải thích khác biệt giữa chương trình công khai, riêng tư và chỉ theo lời mời, cùng hệ quả với người mới bắt đầu.',
      'Phân biệt chương trình do nền tảng quản lý với chương trình tổ chức tự quản.',
    ],
    methodologyVi: [
      'Đọc trang chính sách của ba chương trình khác nhau và lập bảng so sánh bốn tiêu chí trên.',
      'Ghi lại điều gì được phép và điều gì bị cấm ở mỗi chương trình, bằng lời của bạn.',
    ],
    safetyNoteVi:
      'Module này không yêu cầu thao tác kỹ thuật nào. Đọc chính sách là hành vi hoàn toàn hợp pháp; đừng chuyển sang thử nghiệm khi chưa hoàn thành phần phạm vi.',
    remediationTopicIds: ['Không áp dụng — module định hướng'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-policy-safe-harbor',
    trackId: 'trk-policy-programs',
    titleVi: 'Safe harbor, nghiên cứu thiện chí và chính sách công bố',
    summaryVi:
      'Safe harbor là cam kết của tổ chức rằng nghiên cứu thiện chí đúng phạm vi sẽ không bị xử lý pháp lý. Nó có điều kiện, có giới hạn, và không tự động áp dụng cho mọi hành vi.',
    difficulty: 'foundation',
    estimatedHours: 2,
    learningObjectives: [
      'Nêu được điều kiện thường thấy để safe harbor áp dụng và những hành vi làm mất bảo vệ đó.',
      'Phân biệt responsible disclosure với coordinated vulnerability disclosure.',
      'Giải thích vì sao quyền công bố báo cáo thuộc về chính sách chương trình chứ không thuộc về người nghiên cứu.',
    ],
    methodologyVi: [
      'Tìm mục safe harbor trong chính sách của một chương trình và ghi lại chính xác phạm vi bảo vệ.',
      'Đối chiếu với mục "hành vi bị cấm" để thấy hai phần này bổ sung cho nhau.',
    ],
    safeImpactProofVi: [
      'Khi không chắc một hành vi có nằm trong safe harbor không, hãy hỏi chương trình trước khi làm.',
    ],
    safetyNoteVi:
      'Safe harbor không phải là giấy phép vô điều kiện. Nếu chính sách im lặng về một hành vi, mặc định là chưa được phép.',
    remediationTopicIds: ['Tổ chức nên công bố safe harbor rõ ràng và kênh liên hệ bảo mật.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-policy-scope-reading',
    trackId: 'trk-policy-scope',
    titleVi: 'Đọc chính sách chương trình từng mục',
    summaryVi:
      'Một chính sách gồm phạm vi trong và ngoài, danh sách tài sản, giới hạn kỹ thuật, hành vi bị cấm, quy định xử lý dữ liệu, điều khoản công bố, mô hình severity và chính sách trùng lặp. Bỏ sót một mục là đủ để một báo cáo tốt bị đóng.',
    difficulty: 'foundation',
    estimatedHours: 3,
    learningObjectives: [
      'Liệt kê đầy đủ các mục cần đọc trong một chính sách và nêu hệ quả khi bỏ qua từng mục.',
      'Xác định giới hạn tốc độ, khung giờ kiểm thử và yêu cầu tài khoản trước khi bắt đầu.',
      'Nhận ra khi chính sách không rõ và biết cách đặt câu hỏi cho chương trình.',
    ],
    methodologyVi: [
      'Chép chính sách thành một checklist cá nhân với từng mục là một dòng.',
      'Đánh dấu mục nào bạn chưa hiểu và hỏi trước khi thử.',
      'Lưu lại phiên bản chính sách kèm ngày đọc, vì chương trình có thể đổi phạm vi theo thời gian.',
    ],
    safetyNoteVi:
      'Chính sách có thể thay đổi sau khi bạn đọc. Kiểm tra lại trước mỗi phiên kiểm thử dài và trước khi gửi báo cáo.',
    remediationTopicIds: ['Chương trình nên ghi ngày cập nhật chính sách và lưu lịch sử thay đổi.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-policy-asset-identifiers',
    trackId: 'trk-policy-scope',
    titleVi: 'Định danh tài sản: wildcard, CIDR, ứng dụng, mã nguồn, hợp đồng',
    summaryVi:
      'Tài sản trong chính sách được mô tả bằng nhiều loại định danh khác nhau: tên miền có wildcard, dải CIDR, package name của ứng dụng di động, tệp thực thi, repository, địa chỉ hợp đồng thông minh, endpoint API. Mỗi loại có cách xác định "thuộc phạm vi" riêng.',
    difficulty: 'beginner',
    estimatedHours: 3,
    learningObjectives: [
      'Giải thích ý nghĩa chính xác của một wildcard domain và vì sao nó không tự động bao gồm mọi hệ thống liên quan.',
      'Xác định khi nào một tài sản thuộc về nhà cung cấp bên thứ ba chứ không thuộc tổ chức.',
      'Nhận diện hạ tầng dùng chung và hệ quả của nó với phạm vi.',
    ],
    methodologyVi: [
      'Với mỗi tài sản, ghi rõ loại định danh và bằng chứng cho thấy nó nằm trong phạm vi.',
      'Khi một tài sản có dấu hiệu thuộc bên thứ ba, dừng lại và xác nhận với chương trình.',
    ],
    safetyNoteVi:
      'Wildcard không có nghĩa là "mọi thứ trông giống tên miền đó". Hạ tầng dùng chung và dịch vụ bên thứ ba thường nằm ngoài phạm vi dù tên miền khớp.',
    remediationTopicIds: ['Chương trình nên liệt kê tài sản tường minh thay vì chỉ dùng wildcard.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-policy-stop-rules',
    trackId: 'trk-policy-scope',
    titleVi: 'Chín quy tắc dừng kiểm thử',
    summaryVi:
      'Biết khi nào dừng quan trọng hơn biết cách tiếp tục. Chín tình huống bắt buộc dừng lại, ghi nhận và báo cáo thay vì đi sâu thêm.',
    difficulty: 'foundation',
    estimatedHours: 2,
    learningObjectives: [
      'Thuộc chín tình huống bắt buộc dừng và nhận ra chúng trong tình huống thực tế.',
      'Biết cách mô tả tác động đã chứng minh được mà không cần vượt quá PoC tối thiểu.',
      'Ghi lại hành động giảm thiểu đã thực hiện sau khi dừng.',
    ],
    methodologyVi: [
      'Trước mỗi phép thử, tự hỏi: nếu phép thử này thành công thì điều xấu nhất có thể xảy ra là gì.',
      'Khi chạm dữ liệu không thuộc về mình, dừng ngay, ghi lại tối thiểu, không tải thêm.',
    ],
    safeImpactProofVi: [
      'Một bản ghi không thuộc về bạn, đã che thông tin định danh, là đủ để chứng minh vấn đề phân quyền.',
      'Ảnh chụp một phần phản hồi thường thuyết phục hơn một tệp dump.',
    ],
    safetyNoteVi:
      'Vượt quá PoC tối thiểu có thể làm mất bảo vệ safe harbor và biến một báo cáo hợp lệ thành sự cố pháp lý.',
    remediationTopicIds: ['Tổ chức nên nêu rõ mức PoC tối thiểu được chấp nhận trong chính sách.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-policy-worklog',
    trackId: 'trk-policy-operations',
    titleVi: 'Nhật ký kiểm thử và quản lý bằng chứng',
    summaryVi:
      'Ghi lại bạn đã chạm vào cái gì, lúc nào, với tài khoản nào. Nhật ký bảo vệ bạn khi có tranh chấp và giúp viết báo cáo nhanh hơn nhiều.',
    difficulty: 'beginner',
    estimatedHours: 2,
    learningObjectives: [
      'Thiết kế một mẫu nhật ký gồm thời gian, tài sản, tài khoản, hành động và kết quả.',
      'Quản lý ảnh chụp và bản ghi request/response mà không lưu dữ liệu nhạy cảm quá mức.',
      'Xử lý bí mật và token trong quá trình kiểm thử một cách an toàn.',
    ],
    methodologyVi: [
      'Ghi nhật ký ngay khi thao tác, không ghi lại từ trí nhớ vào cuối ngày.',
      'Che thông tin định danh trước khi lưu bằng chứng.',
      'Xoá dữ liệu đã tiếp xúc sau khi báo cáo và ghi lại việc xoá đó.',
    ],
    safetyNoteVi:
      'Không lưu dữ liệu nhạy cảm quá mức cần thiết. Bằng chứng đủ để chứng minh, không phải bằng chứng đầy đủ nhất có thể.',
    remediationTopicIds: ['Không áp dụng — module vận hành cá nhân'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-policy-practice-plan',
    trackId: 'trk-policy-operations',
    titleVi: 'Kế hoạch luyện tập theo tuần và tránh kiệt sức',
    summaryVi:
      'Chọn chương trình phù hợp, quản lý nhiều chương trình cùng lúc, theo dõi thay đổi phạm vi, quản lý rủi ro trùng lặp, học từ báo cáo công khai và duy trì nhịp độ bền vững.',
    difficulty: 'beginner',
    estimatedHours: 2,
    learningObjectives: [
      'Lập kế hoạch luyện tập theo tuần dựa trên số giờ thực tế bạn có.',
      'Nhận diện dấu hiệu kiệt sức và điều chỉnh trước khi bỏ cuộc.',
      'Hiểu vì sao trùng lặp là bình thường và cách giảm rủi ro trùng lặp.',
    ],
    methodologyVi: [
      'Chia thời gian giữa học nền tảng, làm lab và đọc báo cáo công khai.',
      'Đặt mục tiêu theo kỹ năng đạt được, không theo số lượng báo cáo gửi đi.',
    ],
    safetyNoteVi:
      'Về thuế, thanh toán và định danh, mỗi nơi cư trú có quy định khác nhau. Dự án chỉ nêu ở mức định hướng; hãy kiểm tra quy định tại nơi bạn sống. Dự án không hứa hẹn thu nhập.',
    remediationTopicIds: ['Không áp dụng — module vận hành cá nhân'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-policy-report-structure',
    trackId: 'trk-policy-reporting',
    titleVi: 'Cấu trúc một báo cáo lỗ hổng được xử lý nhanh',
    summaryVi:
      'Tiêu đề, tài sản bị ảnh hưởng, tóm tắt, điều kiện cần, bước tái hiện, kết quả thực tế và mong đợi, tác động kỹ thuật và kinh doanh, bằng chứng, dữ liệu đã tiếp xúc, hành động giảm thiểu, khuyến nghị và timeline.',
    difficulty: 'beginner',
    estimatedHours: 4,
    learningObjectives: [
      'Viết một tiêu đề nêu được tài sản, loại vấn đề và tác động trong một dòng.',
      'Viết bước tái hiện mà người khác làm theo được mà không cần hỏi lại.',
      'Phân biệt tác động kỹ thuật với tác động kinh doanh và trình bày cả hai.',
    ],
    methodologyVi: [
      'Viết bước tái hiện trước, tóm tắt sau; tóm tắt là bản rút gọn của điều bạn đã chứng minh.',
      'Nêu rõ dữ liệu nào bạn đã tiếp xúc và bạn đã làm gì với nó.',
      'Đề xuất khắc phục ở mức nguyên tắc, không áp đặt giải pháp kỹ thuật cụ thể.',
    ],
    safetyNoteVi:
      'Không công khai báo cáo khi chưa được phép. Điều khoản công bố nằm trong chính sách chương trình.',
    remediationTopicIds: [
      'Khuyến nghị khắc phục nên nêu nguyên nhân gốc, không chỉ nêu triệu chứng.',
    ],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-policy-severity',
    trackId: 'trk-policy-reporting',
    titleVi: 'Severity: CVSS, CWE, VRT và mức độ theo chương trình',
    summaryVi:
      'CVSS đo mức nghiêm trọng kỹ thuật, CWE đặt tên nguyên nhân gốc, VRT phân loại theo taxonomy của nền tảng, còn chương trình có thể có thang riêng. Bốn thứ này trả lời bốn câu hỏi khác nhau.',
    difficulty: 'intermediate',
    estimatedHours: 4,
    learningObjectives: [
      'Chọn đúng vector CVSS v4.0 cho một tình huống và giải thích từng chỉ số.',
      'Gán CWE phù hợp với nguyên nhân gốc thay vì với triệu chứng.',
      'Giải thích vì sao điểm CVSS cao không đồng nghĩa với mức thưởng cao.',
    ],
    methodologyVi: [
      'Chấm CVSS dựa trên điều bạn đã chứng minh được, không dựa trên điều có thể xảy ra trên lý thuyết.',
      'Đối chiếu với thang severity riêng của chương trình nếu có.',
    ],
    safetyNoteVi:
      'Không tự khẳng định mức thưởng. Quyết định mức độ và phần thưởng thuộc về chương trình.',
    remediationTopicIds: ['Chương trình nên công bố cách quy đổi giữa severity và mức xử lý.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-policy-triage-states',
    trackId: 'trk-policy-reporting',
    titleVi: 'Các trạng thái triage và cách làm việc với triager',
    summaryVi:
      'Duplicate, informative, not applicable, spam, triaged, resolved, retest — mỗi trạng thái có nguyên nhân và cách phản hồi phù hợp.',
    difficulty: 'beginner',
    estimatedHours: 3,
    learningObjectives: [
      'Giải thích ý nghĩa từng trạng thái triage và nguyên nhân thường gặp dẫn tới nó.',
      'Viết phản hồi lịch sự, có bằng chứng bổ sung, khi không đồng ý với kết luận triage.',
      'Chuẩn bị cho retest và xử lý trường hợp retest thất bại.',
    ],
    methodologyVi: [
      'Khi bị đóng là informative, hỏi cụ thể phần nào chưa đủ thuyết phục thay vì tranh luận chung chung.',
      'Bổ sung bằng chứng dưới dạng bước tái hiện rõ hơn, không phải bằng cách thu thập thêm dữ liệu.',
    ],
    safetyNoteVi:
      'Không thu thập thêm dữ liệu nhạy cảm chỉ để "củng cố" báo cáo. Nếu bằng chứng hiện có chưa đủ, hãy hỏi triager cần gì.',
    remediationTopicIds: ['Chương trình nên giải thích lý do khi đóng báo cáo.'],
    contentStatus: 'draft',
  }),

  // ── B1–B6: Foundations ─────────────────────────────────────────────
  defineModule({
    id: 'mod-found-linux',
    trackId: 'trk-found-os',
    titleVi: 'Linux: hệ thống tệp, quyền, tiến trình, dịch vụ và log',
    summaryVi:
      'Mô hình quyền của Linux, người dùng và nhóm, tiến trình và dịch vụ, biến môi trường, shell, log hệ thống và các lệnh mạng cơ bản.',
    difficulty: 'foundation',
    estimatedHours: 8,
    learningObjectives: [
      'Đọc và giải thích quyền tệp, chủ sở hữu và bit đặc biệt.',
      'Theo dõi một tiến trình từ lúc khởi động dịch vụ tới log nó ghi ra.',
      'Giải thích vì sao biến môi trường là nơi bí mật hay bị rò rỉ.',
    ],
    safetyNoteVi:
      'Thực hành trên máy ảo của bạn. Không thử thay đổi quyền hay dịch vụ trên máy dùng chung.',
    remediationTopicIds: ['Nguyên tắc đặc quyền tối thiểu cho tài khoản dịch vụ và quyền tệp.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-found-windows',
    trackId: 'trk-found-os',
    titleVi: 'Windows: registry, dịch vụ, tiến trình, token và event log',
    summaryVi:
      'Hệ thống tệp Windows, registry, dịch vụ, tiến trình, PowerShell, event log, mô hình quyền và token truy cập. Kèm phần macOS ở mức đủ để kiểm thử ứng dụng di động và desktop.',
    difficulty: 'foundation',
    estimatedHours: 8,
    learningObjectives: [
      'Giải thích vai trò của registry và những nhánh thường chứa cấu hình ứng dụng.',
      'Đọc quyền của một dịch vụ và hiểu vì sao dịch vụ chạy quyền cao là ranh giới đặc quyền.',
      'Tìm và đọc event log liên quan tới một hành động.',
    ],
    safetyNoteVi:
      'Thực hành trong máy ảo. Thay đổi registry hoặc dịch vụ trên máy làm việc có thể phá hỏng hệ thống.',
    remediationTopicIds: ['Quyền tệp và quyền dịch vụ nên theo đặc quyền tối thiểu.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-found-tcpip',
    trackId: 'trk-found-network',
    titleVi: 'TCP/IP: từ Ethernet tới định tuyến và NAT',
    summaryVi:
      'Mô hình OSI và TCP/IP, Ethernet, ARP, IPv4 và IPv6, subnet, định tuyến, NAT, TCP, UDP và ICMP.',
    difficulty: 'foundation',
    estimatedHours: 8,
    learningObjectives: [
      'Vẽ đường đi của một gói tin từ máy bạn tới một máy chủ ở xa.',
      'Giải thích vì sao NAT và load balancer làm địa chỉ nguồn nhìn thấy được khác địa chỉ thật.',
      'Đọc một bản bắt gói TCP và nhận ra bắt tay ba bước.',
    ],
    safetyNoteVi:
      'Bắt gói chỉ trên mạng của bạn. Bắt gói trên mạng dùng chung có thể vi phạm quyền riêng tư của người khác.',
    remediationTopicIds: ['Phân đoạn mạng và kiểm soát lối vào là biện pháp nền tảng.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-found-dns-tls',
    trackId: 'trk-found-network',
    titleVi: 'DNS, TLS, chứng chỉ và các lớp trung gian',
    summaryVi:
      'Phân giải DNS, bản ghi, DHCP, proxy, VPN, firewall, load balancer, reverse proxy, CDN, bắt tay TLS, chứng chỉ, SNI và phân đoạn mạng.',
    difficulty: 'beginner',
    estimatedHours: 8,
    learningObjectives: [
      'Giải thích từng bước của quá trình phân giải DNS và nơi kết quả có thể bị lưu đệm.',
      'Đọc một chứng chỉ và kiểm tra chuỗi tin cậy, tên miền và thời hạn.',
      'Giải thích vai trò của SNI và vì sao nhiều site có thể dùng chung một IP.',
    ],
    safetyNoteVi:
      'Chỉ tra cứu DNS với tên miền của bạn hoặc tên miền dành cho tài liệu. Tra cứu thụ động là hợp pháp nhưng vẫn nên giữ trong phạm vi.',
    remediationTopicIds: ['Cấu hình TLS và DNS đúng là biện pháp phòng thủ cơ bản.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-found-http',
    trackId: 'trk-found-web',
    titleVi: 'HTTP: request, response, header, status code và cookie',
    summaryVi:
      'URL và URI, HTTP/1.1 và HTTP/2, HTTP/3 ở mức khái niệm, method, header, status code, cookie, phiên và cache.',
    difficulty: 'foundation',
    estimatedHours: 8,
    learningObjectives: [
      'Đọc một request/response đầy đủ và giải thích vai trò của từng header.',
      'Giải thích thuộc tính cookie và tác dụng bảo mật của từng thuộc tính.',
      'Nêu khác biệt giữa HTTP/1.1 và HTTP/2 có ý nghĩa với bảo mật.',
    ],
    methodologyVi: [
      'Dùng DevTools quan sát một luồng đăng nhập trong lab và ghi lại toàn bộ header liên quan tới phiên.',
    ],
    safetyNoteVi: 'Quan sát lưu lượng của chính bạn trên lab, không của người khác.',
    remediationTopicIds: [
      'Đặt đúng thuộc tính cookie và header bảo mật là biện pháp phòng thủ nền.',
    ],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-found-browser-model',
    trackId: 'trk-found-web',
    titleVi: 'Mô hình bảo mật trình duyệt: origin, SOP, CORS, CSP',
    summaryVi:
      'Same-origin policy, CORS, CSP, HSTS, HTML và DOM, JavaScript, browser storage, service worker, WebSocket và WebAssembly.',
    difficulty: 'beginner',
    estimatedHours: 8,
    learningObjectives: [
      'Định nghĩa chính xác một origin và nêu điều gì same-origin policy ngăn chặn.',
      'Giải thích CORS nới lỏng SOP thế nào và vì sao cấu hình sai lại nguy hiểm.',
      'Đọc một chính sách CSP và nêu điều gì nó chặn.',
    ],
    safetyNoteVi:
      'Thực hành trên trang lab hoặc trang do bạn tự viết. Không chèn mã vào trang của người khác.',
    remediationTopicIds: ['CSP, Trusted Types và mã hoá đầu ra theo ngữ cảnh.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-found-reading-code',
    trackId: 'trk-found-programming',
    titleVi: 'Đọc mã: Python, JavaScript/TypeScript, C/C++, Java/Kotlin, Go',
    summaryVi:
      'Mục tiêu không phải viết thành thạo mọi ngôn ngữ, mà đọc hiểu đủ để lần theo luồng dữ liệu từ điểm vào tới điểm nhận. Kèm Swift/Objective-C và Rust ở mức nhập môn.',
    difficulty: 'beginner',
    estimatedHours: 12,
    learningObjectives: [
      'Đọc một handler HTTP trong ba ngôn ngữ khác nhau và chỉ ra nơi dữ liệu người dùng đi vào.',
      'Nhận ra các hàm thường là điểm nhận nguy hiểm trong mỗi ngôn ngữ.',
      'Đọc Bash và PowerShell đủ để hiểu một script triển khai.',
    ],
    safetyNoteVi: 'Chỉ đọc mã mà giấy phép cho phép bạn đọc.',
    remediationTopicIds: ['Dùng API tham số hoá thay vì nối chuỗi.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-found-encoding',
    trackId: 'trk-found-programming',
    titleVi: 'Encoding, Unicode, serialization và định dạng dữ liệu',
    summaryVi:
      'JSON, XML, YAML, protobuf, regex, các lớp encoding, Unicode và chuẩn hoá, serialization và nén. Rất nhiều lỗi bảo mật nằm ở chỗ hai thành phần hiểu cùng một chuỗi byte theo hai cách khác nhau.',
    difficulty: 'intermediate',
    estimatedHours: 8,
    learningObjectives: [
      'Giải thích khác biệt giữa mã hoá, băm và mã hoá đối xứng — ba khái niệm hay bị gọi nhầm là "mã hoá".',
      'Nêu ví dụ về chuẩn hoá Unicode làm hai chuỗi khác nhau trở thành bằng nhau.',
      'Nhận ra nguy cơ khi cùng một dữ liệu đi qua nhiều lớp giải mã.',
    ],
    safetyNoteVi: 'Thực hành trên dữ liệu tự tạo, không dùng dữ liệu thật của người khác.',
    remediationTopicIds: ['Chuẩn hoá đầu vào một lần, tại một nơi xác định, trước khi kiểm tra.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-found-crypto-basics',
    trackId: 'trk-found-programming',
    titleVi: 'Hash, mã hoá và chữ ký số ở mức sử dụng đúng',
    summaryVi:
      'Hàm băm, băm mật khẩu, mã hoá đối xứng và bất đối xứng, chữ ký số và cách chúng được dùng trong token, chứng chỉ và cập nhật phần mềm.',
    difficulty: 'intermediate',
    estimatedHours: 6,
    learningObjectives: [
      'Chọn đúng công cụ mật mã cho một mục tiêu: bảo mật, toàn vẹn hay xác thực nguồn gốc.',
      'Giải thích vì sao băm mật khẩu khác với băm thông thường.',
      'Nhận ra các dấu hiệu của việc dùng sai mật mã trong mã nguồn.',
    ],
    safetyNoteVi:
      'Không tự cài đặt thuật toán mật mã cho hệ thống thật; module này nhằm giúp bạn đánh giá, không phải để tự viết.',
    remediationTopicIds: ['Dùng thư viện mật mã đã được kiểm chứng với tham số mặc định an toàn.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-found-git',
    trackId: 'trk-found-git-sdlc',
    titleVi: 'Git: repository, commit, branch, pull request và release',
    summaryVi:
      'Mô hình dữ liệu của Git, lịch sử commit, nhánh, tag, pull request, release và vì sao lịch sử Git là nơi bí mật hay bị bỏ quên.',
    difficulty: 'foundation',
    estimatedHours: 4,
    learningObjectives: [
      'Đọc lịch sử của một tệp và tìm thời điểm một dòng mã được thêm vào.',
      'Giải thích vì sao xoá một bí mật ở commit mới không xoá nó khỏi lịch sử.',
      'Hiểu quy trình pull request như một ranh giới tin cậy.',
    ],
    safetyNoteVi:
      'Nếu tìm thấy bí mật trong lịch sử repository công khai, báo cáo theo kênh riêng tư, không đăng công khai.',
    remediationTopicIds: ['Xoay vòng bí mật đã lộ; không chỉ xoá khỏi mã.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-found-sdlc',
    trackId: 'trk-found-git-sdlc',
    titleVi: 'CI/CD, phụ thuộc, SBOM và vòng đời phát triển an toàn',
    summaryVi:
      'Pipeline build, artifact, phụ thuộc, registry gói, bí mật, SBOM, threat modeling và các hoạt động của một SDLC an toàn.',
    difficulty: 'beginner',
    estimatedHours: 6,
    learningObjectives: [
      'Vẽ một pipeline từ commit tới môi trường sản xuất và chỉ ra nơi bí mật xuất hiện.',
      'Giải thích SBOM dùng để làm gì và không dùng để làm gì.',
      'Nêu vai trò của threat modeling trong việc phát hiện vấn đề trước khi viết mã.',
    ],
    safetyNoteVi: 'Thực hành trên repository của chính bạn.',
    remediationTopicIds: ['Ghim phiên bản phụ thuộc, dùng lockfile, giới hạn quyền của workflow.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-found-authn-authz-model',
    trackId: 'trk-found-security-models',
    titleVi: 'Xác thực, phân quyền và ghi nhận',
    summaryVi:
      'Ba khái niệm hay bị nhầm lẫn: xác thực trả lời "bạn là ai", phân quyền trả lời "bạn được làm gì", ghi nhận trả lời "ai đã làm gì". Kèm đặc quyền tối thiểu và phòng thủ nhiều lớp.',
    difficulty: 'foundation',
    estimatedHours: 4,
    learningObjectives: [
      'Phân biệt rõ ba khái niệm và chỉ ra chúng nằm ở đâu trong một ứng dụng cụ thể.',
      'Giải thích đặc quyền tối thiểu bằng một ví dụ thực tế.',
      'Nêu vì sao thiếu ghi nhận làm cho việc điều tra sự cố trở nên bất khả thi.',
    ],
    safetyNoteVi: 'Module khái niệm, không có thao tác kỹ thuật lên hệ thống bên ngoài.',
    remediationTopicIds: ['Kiểm tra phân quyền tập trung ở tầng server cho mọi điểm vào.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-found-threat-model',
    trackId: 'trk-found-security-models',
    titleVi: 'Trust boundary, bề mặt tấn công và mô hình hoá mối đe doạ',
    summaryVi:
      'Trust boundary, attack surface, threat actor, asset, tác động, khả năng xảy ra, rủi ro, CIA, chống chối bỏ, quyền riêng tư, đa người thuê, cô lập và trách nhiệm chung.',
    difficulty: 'beginner',
    estimatedHours: 6,
    learningObjectives: [
      'Vẽ sơ đồ một hệ thống và đánh dấu mọi trust boundary trên đó.',
      'Chuyển một trust boundary thành một danh sách câu hỏi kiểm thử.',
      'Phân biệt rủi ro với tác động và với khả năng xảy ra.',
    ],
    methodologyVi: [
      'Bắt đầu từ dữ liệu: dữ liệu nào có giá trị, ai được xem, ai được sửa.',
      'Với mỗi ranh giới, hỏi: điều gì kiểm tra ở đây, và nếu bỏ qua kiểm tra đó thì sao.',
    ],
    safetyNoteVi: 'Module khái niệm; áp dụng lên hệ thống bạn có quyền phân tích.',
    remediationTopicIds: ['Kiểm tra bảo mật phải nằm ở phía tin cậy của mỗi ranh giới.'],
    contentStatus: 'draft',
  }),

  // ── C1–C3: Methodology ─────────────────────────────────────────────
  defineModule({
    id: 'mod-method-asset-mapping',
    trackId: 'trk-method-recon',
    titleVi: 'Lập bản đồ tài sản từ dữ liệu chương trình cung cấp',
    summaryVi:
      'Bắt đầu từ asset inventory của chương trình, mở rộng thành sơ đồ hệ thống có vai trò, dữ liệu và trust boundary. Kết quả là một sơ đồ, không phải một danh sách hostname.',
    difficulty: 'beginner',
    estimatedHours: 6,
    learningObjectives: [
      'Chuyển danh sách tài sản của chương trình thành sơ đồ hệ thống có chú thích.',
      'Xác định các vai trò người dùng và loại dữ liệu tương ứng.',
      'Lập bản đồ API, backend của ứng dụng di động, tài sản cloud và tích hợp SaaS trong phạm vi.',
    ],
    methodologyVi: [
      'Tạo tài khoản thử nghiệm cho từng vai trò được phép.',
      'Đi qua toàn bộ tính năng một lượt trước khi thử bất cứ điều gì.',
      'Ghi lại mọi endpoint quan sát được kèm vai trò nào gọi được nó.',
    ],
    safetyNoteVi:
      'Phần mềm này không có chức năng recon tự động và không nhận mục tiêu. Mọi việc lập bản đồ đều thủ công, trong phạm vi được phép.',
    remediationTopicIds: ['Tổ chức nên duy trì asset inventory chính xác và cập nhật.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-method-passive-active',
    trackId: 'trk-method-recon',
    titleVi: 'Khám phá bị động và chủ động',
    summaryVi:
      'Khám phá bị động dùng dữ liệu công khai sẵn có; khám phá chủ động gửi request tới tài sản. Ranh giới giữa hai loại quyết định điều gì được phép trước khi bạn có xác nhận phạm vi.',
    difficulty: 'intermediate',
    estimatedHours: 4,
    learningObjectives: [
      'Phân biệt khám phá bị động và chủ động, và nêu hệ quả pháp lý của mỗi loại.',
      'Giải thích certificate transparency và DNS ở mức khái niệm.',
      'Xác định khi nào việc liệt kê subdomain là hợp lệ theo chính sách.',
    ],
    safetyNoteVi:
      'Không chạy quét lên tên miền tuỳ ý. Khi chưa chắc một tài sản thuộc phạm vi, coi như nó nằm ngoài phạm vi.',
    remediationTopicIds: ['Tổ chức nên theo dõi tài sản của mình như kẻ tấn công vẫn làm.'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-method-workflow',
    trackId: 'trk-method-workflow',
    titleVi: 'Quy trình kiểm thử mười hai bước',
    summaryVi:
      'Đọc chính sách → chọn tài sản → lập sơ đồ → xác định vai trò và dữ liệu → lập trust boundary → chọn checklist → thực hiện phép thử tối thiểu → dừng nếu vượt giới hạn → xác minh tác động → loại dương tính giả → ghi bằng chứng → viết báo cáo → retest.',
    difficulty: 'beginner',
    estimatedHours: 6,
    learningObjectives: [
      'Thực hiện trọn vẹn quy trình trên một lab từ đầu tới báo cáo.',
      'Nhận ra mình đang ở bước nào và bước tiếp theo là gì.',
      'Biết dừng đúng chỗ thay vì đi tiếp theo quán tính.',
    ],
    methodologyVi: [
      'Mỗi phép thử phải có giả thuyết trước: bạn đang kiểm tra điều gì và kỳ vọng thấy gì.',
      'Phép thử tối thiểu là phép thử chứng minh được vấn đề với tác động nhỏ nhất.',
    ],
    safeImpactProofVi: [
      'Chứng minh bằng một hành động không phá huỷ: đọc thay vì ghi, một bản ghi thay vì toàn bộ.',
    ],
    safetyNoteVi:
      'Bước "dừng nếu vượt giới hạn" không phải tuỳ chọn. Nó là một bước bắt buộc của quy trình.',
    remediationTopicIds: ['Không áp dụng — module phương pháp'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-method-false-positive',
    trackId: 'trk-method-workflow',
    titleVi: 'Loại bỏ dương tính giả',
    summaryVi:
      'Một quan sát bất thường chưa phải là lỗ hổng. Cách xác minh lại, phân biệt hành vi thiết kế với lỗi, và tránh gửi báo cáo dựa trên hiểu nhầm.',
    difficulty: 'intermediate',
    estimatedHours: 4,
    learningObjectives: [
      'Xây dựng quy trình xác minh lại một quan sát bằng ít nhất hai cách độc lập.',
      'Nhận ra các nguyên nhân phổ biến của dương tính giả: cache, khác biệt môi trường, tài khoản có quyền khác.',
      'Quyết định khi nào nên bỏ một giả thuyết thay vì cố chứng minh.',
    ],
    methodologyVi: [
      'Tái hiện trong phiên trình duyệt sạch, không dùng lại phiên cũ.',
      'Kiểm tra bằng tài khoản khác cùng vai trò để loại trừ trạng thái riêng của tài khoản.',
    ],
    safetyNoteVi: 'Xác minh lại không có nghĩa là thử thêm nhiều lần với cường độ cao hơn.',
    remediationTopicIds: ['Không áp dụng — module phương pháp'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-method-evidence',
    trackId: 'trk-method-workflow',
    titleVi: 'Ghi bằng chứng an toàn',
    summaryVi:
      'Bằng chứng phải đủ để triager tái hiện được nhưng không được biến bạn thành người đang giữ dữ liệu của người khác.',
    difficulty: 'beginner',
    estimatedHours: 3,
    learningObjectives: [
      'Chọn hình thức bằng chứng phù hợp: bước tái hiện, ảnh chụp một phần, hoặc mô tả.',
      'Che thông tin định danh trong bằng chứng.',
      'Ghi lại hành động giảm thiểu và việc xoá dữ liệu đã tiếp xúc.',
    ],
    safeImpactProofVi: [
      'Ảnh chụp một trường dữ liệu đã che, kèm giải thích, thường thuyết phục hơn một tệp dump đầy đủ.',
    ],
    safetyNoteVi:
      'Không tải hàng loạt dữ liệu để chứng minh. Càng nhiều dữ liệu của người khác bạn giữ, rủi ro pháp lý càng lớn.',
    remediationTopicIds: ['Không áp dụng — module phương pháp'],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-method-proxy',
    trackId: 'trk-method-tools',
    titleVi: 'Proxy chặn bắt và DevTools',
    summaryVi:
      'Cách proxy chặn bắt hoạt động, cấu hình chứng chỉ, phân biệt lưu lượng của bạn với lưu lượng nền, và dùng DevTools cho phần chạy trong trình duyệt.',
    difficulty: 'beginner',
    estimatedHours: 6,
    learningObjectives: [
      'Cấu hình proxy để quan sát lưu lượng của chính bạn trong lab.',
      'Giải thích vì sao cài chứng chỉ CA của proxy là thay đổi mô hình tin cậy của máy bạn.',
      'Dùng DevTools để lần theo một sự kiện từ thao tác người dùng tới request.',
    ],
    safetyNoteVi:
      'Chỉ chặn bắt lưu lượng của chính bạn. Gỡ cấu hình proxy và chứng chỉ sau khi học xong để không để lại rủi ro trên máy.',
    remediationTopicIds: [
      'Ứng dụng nên xác thực chứng chỉ đúng cách; kiểm tra phía client không đủ.',
    ],
    contentStatus: 'draft',
  }),
  defineModule({
    id: 'mod-method-tool-output',
    trackId: 'trk-method-tools',
    titleVi: 'Đọc output công cụ mà không kết luận sai',
    summaryVi:
      'Mỗi công cụ có mục đích, giới hạn và những kết luận không được suy ra chỉ từ output của nó. Đây là kỹ năng phân biệt người gửi báo cáo có giá trị với người gửi kết quả quét.',
    difficulty: 'intermediate',
    estimatedHours: 4,
    learningObjectives: [
      'Với mỗi công cụ, nêu ít nhất hai kết luận KHÔNG được rút ra chỉ từ output của nó.',
      'Xác minh thủ công một phát hiện của công cụ trước khi coi nó là thật.',
      'Giải thích vì sao kết quả quét không phải là một báo cáo.',
    ],
    methodologyVi: [
      'Với mỗi phát hiện của công cụ, tự tái hiện bằng tay ít nhất một lần.',
      'Ghi lại phiên bản công cụ và tham số đã dùng.',
    ],
    safetyNoteVi:
      'Không gửi output công cụ làm báo cáo. Nhiều chương trình đóng ngay các báo cáo dạng này là spam.',
    remediationTopicIds: ['Không áp dụng — module phương pháp'],
    contentStatus: 'draft',
  }),
];
