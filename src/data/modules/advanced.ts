import type { LearningModule } from '@/schemas/entities';
import { defineModule } from '../helpers';

/**
 * Module của domain M (code review), N (supply chain), O (IoT), P (wireless),
 * Q (automotive), R (ICS/OT), S (web3), T (AI), U (extension), V (SaaS),
 * W (privacy) và X (emerging).
 */
export const advancedModules: LearningModule[] = [
  // ── M: Code review ─────────────────────────────────────────────────
  defineModule({
    id: 'mod-code-source-sink',
    trackId: 'trk-code-review-method',
    titleVi: 'Đọc mã theo luồng nguồn → biến đổi → điểm nhận',
    summaryVi:
      'Kỹ thuật cốt lõi của review mã: xác định nơi dữ liệu không tin cậy đi vào, theo dõi nó qua các phép biến đổi, và xem nó kết thúc ở điểm nhận nào.',
    difficulty: 'advanced',
    estimatedHours: 10,
    learningObjectives: [
      'Liệt kê điểm vào của một dự án: route, handler, hàng đợi, cron, CLI.',
      'Theo dõi một tham số từ điểm vào tới truy vấn, lệnh, tệp hoặc template.',
      'Nhận ra khi một phép biến đổi tưởng là làm sạch nhưng thực ra không phải.',
    ],
    methodologyVi: [
      'Bắt đầu từ điểm nhận nguy hiểm rồi đi ngược lên; thường nhanh hơn đi xuôi.',
      'Ghi lại mọi giả định mà mã đang dựa vào và kiểm tra từng giả định.',
    ],
    safetyNoteVi:
      'Chỉ đọc mã mà giấy phép cho phép. Không đăng đoạn mã có bản quyền vào báo cáo công khai.',
    remediationTopicIds: ['Làm sạch tại điểm nhận theo đúng ngữ cảnh, không ở điểm vào.'],
  }),
  defineModule({
    id: 'mod-code-authz-review',
    trackId: 'trk-code-review-method',
    titleVi: 'Rà soát xác thực, phân quyền và xử lý lỗi trong mã',
    summaryVi:
      'Tìm nơi kiểm tra phân quyền được thực hiện, nơi nó bị bỏ sót, cách bí mật được quản lý, cách lỗi được xử lý và ghi log, và cách xử lý đồng thời.',
    difficulty: 'advanced',
    estimatedHours: 10,
    learningObjectives: [
      'Xác định lớp kiểm tra phân quyền tập trung và các đường đi vòng qua nó.',
      'Nhận ra xử lý lỗi làm lộ thông tin hoặc nuốt lỗi bảo mật.',
      'Đánh giá vùng mã có trạng thái dùng chung và truy cập đồng thời.',
    ],
    safetyNoteVi: 'Chỉ đọc mã bạn được phép đọc.',
    remediationTopicIds: ['Kiểm tra phân quyền tập trung, mặc định từ chối, có test tự động.'],
  }),
  defineModule({
    id: 'mod-code-diff-review',
    trackId: 'trk-code-diff-review',
    titleVi: 'Đọc commit, pull request và bản vá bảo mật',
    summaryVi:
      'Bản vá bảo mật cho biết chính xác điều gì đã sai. Đọc chúng là cách nhanh nhất để học nhóm lỗi thật trong dự án thật.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Đọc một bản vá và diễn đạt lại nguyên nhân gốc bằng lời của bạn.',
      'Nhận ra bản vá chỉ chữa triệu chứng chứ không chữa nguyên nhân.',
      'Đối chiếu changelog và release note với thay đổi mã thực tế.',
    ],
    safetyNoteVi:
      'Bản vá công khai không có nghĩa mọi người dùng đã cập nhật. Không dùng thông tin từ bản vá để tấn công hệ thống chưa vá.',
    remediationTopicIds: ['Bản vá nên xử lý nguyên nhân gốc và kèm test hồi quy.'],
  }),
  defineModule({
    id: 'mod-code-variant-analysis',
    trackId: 'trk-code-diff-review',
    titleVi: 'Phân tích biến thể và tìm lỗi anh em',
    summaryVi:
      'Một lỗi hiếm khi đứng một mình. Sau khi hiểu nguyên nhân gốc, tìm mọi nơi khác trong dự án có cùng mẫu là cách tạo ra nhiều phát hiện chất lượng.',
    difficulty: 'research',
    estimatedHours: 8,
    learningObjectives: [
      'Chuyển một nguyên nhân gốc thành mẫu tìm kiếm áp dụng cho toàn dự án.',
      'Đánh giá từng kết quả thay vì báo cáo hàng loạt.',
      'Viết test case chứng minh biến thể là thật.',
    ],
    safetyNoteVi:
      'Không gửi hàng loạt báo cáo chưa xác minh. Mỗi biến thể phải được kiểm chứng riêng.',
    remediationTopicIds: ['Sửa toàn bộ nhóm biến thể cùng lúc và thêm quy tắc phát hiện tự động.'],
  }),
  defineModule({
    id: 'mod-code-sast',
    trackId: 'trk-code-tooling',
    titleVi: 'Công cụ hỗ trợ: tìm kiếm mã, AST, SAST và xác minh thủ công',
    summaryVi:
      'Tìm kiếm mã, cây cú pháp trừu tượng, SAST, truy vấn dựa trên luồng dữ liệu, trình quét phụ thuộc, trình quét bí mật — và vì sao xác minh thủ công vẫn là bước bắt buộc.',
    difficulty: 'advanced',
    estimatedHours: 10,
    learningObjectives: [
      'Viết một truy vấn tìm mẫu nguồn → điểm nhận đơn giản.',
      'Đánh giá tỷ lệ dương tính giả và điều chỉnh truy vấn.',
      'Xác minh thủ công mọi phát hiện trước khi báo cáo.',
    ],
    safetyNoteVi:
      'Kết quả công cụ phân tích tĩnh không phải báo cáo. Gửi kết quả thô là cách nhanh nhất để bị đóng là spam.',
    remediationTopicIds: ['Tích hợp phân tích tĩnh vào CI với quy tắc phù hợp dự án.'],
  }),
  defineModule({
    id: 'mod-code-oss-disclosure',
    trackId: 'trk-code-disclosure',
    titleVi: 'Công bố có phối hợp với dự án nguồn mở',
    summaryVi:
      'SECURITY.md, advisory riêng tư, liên hệ maintainer, thời gian cấm công bố, phối hợp phát hành, và vì sao không được mở issue công khai cho lỗ hổng chưa xử lý.',
    difficulty: 'intermediate',
    estimatedHours: 5,
    learningObjectives: [
      'Tìm kênh báo cáo bảo mật của một dự án theo thứ tự ưu tiên.',
      'Viết báo cáo phù hợp với maintainer tình nguyện, không phải với đội bảo mật chuyên trách.',
      'Thoả thuận thời gian công bố một cách hợp lý.',
    ],
    safetyNoteVi:
      'Không mở public issue chứa chi tiết lỗ hổng chưa được xử lý. Điều đó gây rủi ro cho mọi người dùng của dự án.',
    remediationTopicIds: ['Dự án nên có SECURITY.md và bật chức năng báo cáo riêng tư.'],
  }),

  // ── N: Supply chain ────────────────────────────────────────────────
  defineModule({
    id: 'mod-supply-dependencies',
    trackId: 'trk-supply-deps',
    titleVi: 'Phụ thuộc, lockfile và registry gói',
    summaryVi:
      'Phụ thuộc trực tiếp và bắc cầu, lockfile, registry, namespace, typosquatting ở mức nhận biết và dependency confusion ở mức phòng thủ.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Đọc cây phụ thuộc và xác định phụ thuộc bắc cầu có rủi ro.',
      'Giải thích lockfile bảo vệ điều gì và không bảo vệ điều gì.',
      'Nhận ra cấu hình registry cho phép gói nội bộ bị thay bằng gói công khai.',
    ],
    safetyNoteVi:
      'Không xuất bản gói lên registry công khai với tên gần giống gói thật, và không thử dependency confusion nhắm tới hạ tầng của tổ chức khác. Thực hành trên registry cục bộ.',
    remediationTopicIds: ['Ghim phiên bản, dùng lockfile, cấu hình registry ưu tiên nguồn nội bộ.'],
  }),
  defineModule({
    id: 'mod-supply-provenance',
    trackId: 'trk-supply-deps',
    titleVi: 'SBOM, provenance, ký bản phát hành và SLSA',
    summaryVi:
      'SBOM, provenance, chữ ký bản phát hành, SLSA build level, Scorecard và Sigstore — các cơ chế chứng minh một artifact đến từ đâu.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Giải thích SBOM trả lời câu hỏi gì và provenance trả lời câu hỏi gì.',
      'Nêu ý nghĩa của các build level trong SLSA.',
      'Đánh giá quy trình phát hành của một dự án theo các tiêu chí này.',
    ],
    safetyNoteVi:
      'Module phân tích tài liệu và cấu hình; không có thao tác lên hệ thống bên ngoài.',
    remediationTopicIds: ['Sinh provenance tự động và ký mọi artifact phát hành.'],
  }),
  defineModule({
    id: 'mod-supply-cicd-trust',
    trackId: 'trk-supply-cicd',
    titleVi: 'Ranh giới tin cậy trong CI/CD',
    summaryVi:
      'Workflow chạy trên pull request từ fork, quyền của workflow, workflow tái sử dụng, cache và artifact dùng chung, và tin cậy từ CI tới cloud qua OIDC.',
    difficulty: 'research',
    estimatedHours: 8,
    learningObjectives: [
      'Xác định workflow nào chạy với mã của người đóng góp bên ngoài và với quyền nào.',
      'Giải thích vì sao cache và artifact là kênh truyền dữ liệu giữa các job.',
      'Đánh giá điều kiện trong chính sách tin cậy OIDC giữa CI và cloud.',
    ],
    safetyNoteVi:
      'Chỉ thực hành trên repository của chính bạn. Không gửi pull request thử nghiệm nhằm kích hoạt workflow của dự án khác.',
    remediationTopicIds: [
      'Quyền workflow tối thiểu; không chạy mã của fork với bí mật.',
      'Ràng buộc chặt điều kiện subject trong chính sách tin cậy OIDC.',
    ],
  }),
  defineModule({
    id: 'mod-supply-secrets',
    trackId: 'trk-supply-cicd',
    titleVi: 'Bí mật trong pipeline và xử lý khi lộ',
    summaryVi:
      'Nơi bí mật xuất hiện trong pipeline, cách chúng rò rỉ qua log và artifact, và quy trình xử lý khi phát hiện bí mật đã lộ.',
    difficulty: 'advanced',
    estimatedHours: 5,
    learningObjectives: [
      'Liệt kê mọi nơi một bí mật có thể xuất hiện trong một lần chạy pipeline.',
      'Đánh giá phạm vi quyền của một bí mật đã lộ mà không sử dụng nó.',
      'Viết khuyến nghị xử lý gồm xoay vòng và rà soát nhật ký truy cập.',
    ],
    safetyNoteVi:
      'Không sử dụng bí mật đã lộ để truy cập bất kỳ hệ thống nào. Báo cáo và đề nghị xoay vòng ngay.',
    remediationTopicIds: [
      'Xoay vòng bí mật, che bí mật trong log, dùng thông tin xác thực ngắn hạn.',
    ],
  }),

  // ── O: IoT ─────────────────────────────────────────────────────────
  defineModule({
    id: 'mod-iot-ecosystem',
    trackId: 'trk-iot-ecosystem',
    titleVi: 'Hệ sinh thái IoT và các bề mặt của nó',
    summaryVi:
      'Thiết bị, firmware, bootloader, phần cứng, ứng dụng đồng hành, backend đám mây, giao diện quản trị web, dịch vụ mạng, máy chủ cập nhật, cấp phát và ranh giới tin cậy vật lý.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Vẽ toàn bộ hệ sinh thái của một thiết bị và đánh dấu mọi ranh giới tin cậy.',
      'Xác định bề mặt nào có thể nghiên cứu hợp pháp mà không cần mở thiết bị.',
      'Nhận ra quan hệ tin cậy giữa thiết bị, ứng dụng di động và đám mây.',
    ],
    methodologyVi: [
      'Bắt đầu từ ứng dụng đồng hành và backend — thường là bề mặt dễ tiếp cận và có giá trị nhất.',
    ],
    safetyNoteVi:
      'Chỉ nghiên cứu thiết bị thuộc quyền sở hữu của bạn. Mở thiết bị có thể làm mất bảo hành và gây hỏng vĩnh viễn.',
    remediationTopicIds: [
      'Xác thực hai chiều giữa thiết bị và đám mây; cô lập theo từng thiết bị.',
    ],
  }),
  defineModule({
    id: 'mod-iot-firmware',
    trackId: 'trk-iot-firmware',
    titleVi: 'Phân tích firmware',
    summaryVi:
      'Lấy firmware hợp pháp, định dạng ảnh, hệ thống tệp, cấu hình, binary, script, bí mật, chứng chỉ và khoá, cơ chế cập nhật, chữ ký, chống quay lui và secure boot ở mức khái niệm.',
    difficulty: 'research',
    estimatedHours: 12,
    learningObjectives: [
      'Trích xuất hệ thống tệp từ một ảnh firmware lab và lập bản đồ nội dung.',
      'Tìm thông tin xác thực và khoá nhúng sẵn trong firmware.',
      'Đánh giá cơ chế xác minh cập nhật firmware.',
    ],
    safetyNoteVi:
      'Chỉ lấy firmware qua kênh hợp pháp: trang chính thức của nhà sản xuất hoặc từ thiết bị của chính bạn. Không phân phối lại firmware có bản quyền.',
    remediationTopicIds: ['Không nhúng bí mật dùng chung; ký và xác minh mọi bản cập nhật.'],
  }),
  defineModule({
    id: 'mod-iot-hardware-interfaces',
    trackId: 'trk-iot-hardware',
    titleVi: 'Giao diện phần cứng: UART, JTAG/SWD, SPI, I2C',
    summaryVi:
      'Các giao diện gỡ lỗi và bus phổ biến trên bo mạch nhúng, vai trò của chúng và vì sao chúng thường còn hoạt động trên thiết bị thương mại.',
    difficulty: 'research',
    estimatedHours: 10,
    learningObjectives: [
      'Nhận ra các giao diện phổ biến trên một bo mạch.',
      'Giải thích vì sao truy cập vật lý thay đổi hoàn toàn mô hình đe doạ.',
      'Đánh giá xem một cổng gỡ lỗi còn bật có phải là phát hiện đáng báo cáo không.',
    ],
    safetyNoteVi:
      'Chỉ thao tác trên bo mạch hoặc thiết bị thuộc sở hữu của bạn. Có nguy cơ hỏng thiết bị và nguy cơ điện. Không thao tác trên thiết bị đang kết nối mạng của người khác.',
    remediationTopicIds: [
      'Vô hiệu hoá cổng gỡ lỗi trên thiết bị thương mại hoặc yêu cầu xác thực.',
    ],
  }),

  // ── P: Wireless ────────────────────────────────────────────────────
  defineModule({
    id: 'mod-wireless-ble',
    trackId: 'trk-wireless-core',
    titleVi: 'BLE: quảng bá, ghép nối và GATT',
    summaryVi:
      'Kiến trúc Bluetooth Low Energy, vòng đời từ quảng bá tới ghép nối và liên kết, cấu trúc GATT, và các đặc tính không yêu cầu xác thực.',
    difficulty: 'specialist',
    estimatedHours: 10,
    learningObjectives: [
      'Giải thích các mức bảo vệ được thương lượng trong quá trình ghép nối.',
      'Đọc cấu trúc GATT của một thiết bị của bạn và xác định đặc tính nhạy cảm.',
      'Nhận ra rò rỉ quyền riêng tư qua dữ liệu quảng bá.',
    ],
    safetyNoteVi:
      'Chỉ tương tác với thiết bị của chính bạn, tốt nhất trong môi trường che chắn. Không kết nối tới thiết bị của người khác, kể cả khi chúng đang quảng bá công khai.',
    remediationTopicIds: ['Yêu cầu ghép nối có xác thực cho mọi đặc tính nhạy cảm.'],
  }),
  defineModule({
    id: 'mod-wireless-regulation',
    trackId: 'trk-wireless-core',
    titleVi: 'Quy định vô tuyến và ranh giới pháp lý',
    summaryVi:
      'Nền tảng SDR, quy định về băng tần và công suất, và vì sao một kỹ thuật RF hợp pháp ở nơi này có thể là vi phạm hình sự ở nơi khác.',
    difficulty: 'specialist',
    estimatedHours: 5,
    learningObjectives: [
      'Xác định cơ quan quản lý tần số tại nơi bạn cư trú và tìm quy định áp dụng.',
      'Phân biệt thu thụ động với phát chủ động về mặt pháp lý.',
      'Xác định môi trường thí nghiệm hợp pháp trước khi mua thiết bị.',
    ],
    safetyNoteVi:
      'Không phát sóng khi chưa xác định rõ quy định tại nơi bạn sống. Không gây nhiễu và không truy cập mạng của người khác. Dự án không mặc định kỹ thuật RF được phép sử dụng ở mọi nơi.',
    remediationTopicIds: ['Không áp dụng — module pháp lý và an toàn'],
  }),

  // ── Q: Automotive ──────────────────────────────────────────────────
  defineModule({
    id: 'mod-automotive-architecture',
    trackId: 'trk-automotive-core',
    titleVi: 'Kiến trúc xe kết nối',
    summaryVi:
      'ECU, CAN, Automotive Ethernet, UDS ở mức kiến trúc, telematics, hệ thống giải trí, ứng dụng đồng hành, backend đám mây, cập nhật OTA và giao diện chẩn đoán.',
    difficulty: 'specialist',
    estimatedHours: 10,
    learningObjectives: [
      'Vẽ kiến trúc từ ứng dụng di động qua backend tới phương tiện.',
      'Xác định bề mặt nào có thể nghiên cứu mà không chạm vào phương tiện.',
      'Giải thích vai trò của gateway giữa mạng ngoài và mạng trong xe.',
    ],
    methodologyVi: ['Bắt đầu và thường kết thúc ở backend đám mây và ứng dụng đồng hành.'],
    safetyNoteVi:
      'Tuyệt đối không thử nghiệm trên phương tiện đang vận hành. Không can thiệp vào hệ thống liên quan tới an toàn. Chỉ dùng simulator hoặc test bench thuộc sở hữu của bạn.',
    remediationTopicIds: ['Cô lập chặt giữa hệ thống giải trí và hệ thống điều khiển.'],
  }),
  defineModule({
    id: 'mod-automotive-safety',
    trackId: 'trk-automotive-core',
    titleVi: 'Ràng buộc an toàn và công bố với nhà sản xuất',
    summaryVi:
      'Vì sao an toàn con người thay đổi hoàn toàn cách đánh giá tác động, và cách phối hợp công bố với nhà sản xuất phương tiện.',
    difficulty: 'specialist',
    estimatedHours: 5,
    learningObjectives: [
      'Đánh giá tác động có tính tới hậu quả với an toàn con người.',
      'Viết báo cáo cho một tổ chức có quy trình an toàn nghiêm ngặt.',
      'Xác định khi nào phải dừng ngay cả khi chính sách chưa nói rõ.',
    ],
    safetyNoteVi:
      'Nếu một phát hiện có thể ảnh hưởng tới an toàn khi vận hành, dừng ngay lập tức và báo cáo qua kênh khẩn cấp của chương trình.',
    remediationTopicIds: ['Nhà sản xuất nên có kênh tiếp nhận báo cáo an toàn riêng biệt.'],
  }),

  // ── R: ICS/OT ──────────────────────────────────────────────────────
  defineModule({
    id: 'mod-ics-architecture',
    trackId: 'trk-ics-core',
    titleVi: 'Kiến trúc ICS/OT và mô hình Purdue',
    summaryVi:
      'PLC, HMI, SCADA, historian, trạm kỹ thuật, thiết bị hiện trường, hệ thống an toàn, mô hình Purdue, và các giao thức công nghiệp phổ biến.',
    difficulty: 'specialist',
    estimatedHours: 10,
    learningObjectives: [
      'Vẽ phân tầng Purdue cho một hệ thống công nghiệp mẫu.',
      'Giải thích vì sao giao thức công nghiệp thường không có xác thực mạnh sẵn.',
      'Xác định ranh giới giữa mạng IT và mạng OT.',
    ],
    safetyNoteVi:
      'Không bao giờ thử nghiệm trên hạ tầng vận hành thật. Một gói tin sai có thể gây mất điều khiển và nguy hiểm tới con người. Chỉ dùng simulator hoặc bench lab.',
    remediationTopicIds: ['Phân đoạn chặt IT/OT; kiểm soát truy cập từ xa của nhà cung cấp.'],
  }),
  defineModule({
    id: 'mod-ics-safety-constraints',
    trackId: 'trk-ics-core',
    titleVi: 'Ưu tiên khả dụng và an toàn trong OT',
    summaryVi:
      'Trong OT, thứ tự ưu tiên đảo ngược so với IT: an toàn và khả dụng đứng trước tính bí mật. Điều này thay đổi cả cách kiểm thử lẫn cách viết khuyến nghị.',
    difficulty: 'specialist',
    estimatedHours: 6,
    learningObjectives: [
      'Giải thích vì sao một biện pháp phòng thủ IT thông thường có thể không áp dụng được trong OT.',
      'Viết khuyến nghị khắc phục phù hợp với ràng buộc vận hành liên tục.',
      'Đánh giá tác động theo hậu quả vật lý, không chỉ theo dữ liệu.',
    ],
    safetyNoteVi:
      'Không tạo hướng dẫn có thể gây mất điều khiển hoặc gián đoạn hệ thống công nghiệp. Nội dung ở đây phục vụ kiến trúc và phòng thủ.',
    remediationTopicIds: ['Ưu tiên biện pháp bù đắp không gây gián đoạn vận hành.'],
  }),

  // ── S: Web3 ────────────────────────────────────────────────────────
  defineModule({
    id: 'mod-web3-foundations',
    trackId: 'trk-web3-foundations',
    titleVi: 'Blockchain, EVM, gas và Solidity',
    summaryVi:
      'Blockchain, giao dịch, tài khoản, ví, khoá riêng, chữ ký, EVM, gas, lưu trữ, ABI, Solidity, sự kiện, tương tác hợp đồng và môi trường testnet/chain cục bộ.',
    difficulty: 'intermediate',
    estimatedHours: 12,
    learningObjectives: [
      'Đọc một hợp đồng Solidity đơn giản và xác định hàm nào ai gọi được.',
      'Giải thích vì sao mọi dữ liệu on-chain đều công khai kể cả biến private.',
      'Dựng môi trường chain cục bộ để thử nghiệm.',
    ],
    safetyNoteVi:
      'Chỉ tương tác với hợp đồng trên testnet hoặc chain cục bộ. Không bao giờ dùng ví chứa tài sản thật cho việc học.',
    remediationTopicIds: ['Không lưu dữ liệu bí mật on-chain.'],
  }),
  defineModule({
    id: 'mod-web3-access-control',
    trackId: 'trk-web3-vulns',
    titleVi: 'Kiểm soát truy cập, khởi tạo và nâng cấp proxy',
    summaryVi:
      'Hàm thiếu kiểm soát truy cập, hợp đồng chưa được khởi tạo, mẫu proxy nâng cấp, quản trị và các quyền đặc quyền tập trung.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Liệt kê mọi hàm có thể thay đổi trạng thái và xác định ai được gọi.',
      'Giải thích rủi ro khi hàm khởi tạo có thể gọi lại lần nữa.',
      'Đánh giá quyền của tài khoản quản trị và cơ chế bảo vệ nó.',
    ],
    safetyNoteVi: 'Chỉ trên chain cục bộ hoặc testnet.',
    remediationTopicIds: [
      'Modifier kiểm soát truy cập trên mọi hàm thay đổi trạng thái; khoá hàm khởi tạo.',
    ],
  }),
  defineModule({
    id: 'mod-web3-reentrancy',
    trackId: 'trk-web3-vulns',
    titleVi: 'Reentrancy, lời gọi ngoài và thứ tự cập nhật trạng thái',
    summaryVi:
      'Khi hợp đồng gọi ra ngoài trước khi cập nhật trạng thái của mình, bên được gọi có thể quay lại và thấy trạng thái cũ.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Nhận ra mẫu gọi ngoài trước, cập nhật sau trong mã Solidity.',
      'Giải thích mẫu kiểm tra - tác động - tương tác.',
      'Đánh giá reentrancy giữa nhiều hàm và giữa nhiều hợp đồng.',
    ],
    safetyNoteVi: 'Chỉ trên chain cục bộ hoặc testnet.',
    remediationTopicIds: ['Cập nhật trạng thái trước khi gọi ngoài; dùng khoá chống tái nhập.'],
  }),
  defineModule({
    id: 'mod-web3-economic',
    trackId: 'trk-web3-vulns',
    titleVi: 'Oracle, thao túng giá và logic kinh tế',
    summaryVi:
      'Nguồn giá, thao túng giá, flash loan, số học và độ chính xác, phần thưởng và phí, front-running/MEV ở mức khái niệm, và tính ngẫu nhiên.',
    difficulty: 'research',
    estimatedHours: 10,
    learningObjectives: [
      'Xác định nguồn giá của một giao thức và chi phí để tác động lên nó.',
      'Giải thích vì sao lỗi làm tròn có thể trở thành lỗ hổng kinh tế.',
      'Mô tả tác động kinh tế mà không thực hiện giao dịch gây thiệt hại thật.',
    ],
    safetyNoteVi:
      'Không giao dịch trên hợp đồng thật khi chưa có quyền rõ ràng. Giao dịch on-chain không thể hoàn tác.',
    remediationTopicIds: ['Dùng oracle chống thao túng; kiểm tra bất biến kinh tế trong test.'],
  }),
  defineModule({
    id: 'mod-web3-testing',
    trackId: 'trk-web3-testing',
    titleVi: 'Unit test, fuzzing và invariant cho hợp đồng',
    summaryVi:
      'Viết unit test, property test, fuzzing và invariant test; dùng phân tích tĩnh; fork cục bộ khi được phép; và cách mô tả tác động kinh tế trong báo cáo.',
    difficulty: 'advanced',
    estimatedHours: 10,
    learningObjectives: [
      'Viết một invariant mô tả tính chất phải luôn đúng của giao thức.',
      'Dùng fuzzing để tìm đầu vào phá vỡ invariant đó.',
      'Đưa test thất bại vào báo cáo như bằng chứng tái hiện được.',
    ],
    methodologyVi: [
      'Một test thất bại chạy được là bằng chứng mạnh nhất cho báo cáo hợp đồng thông minh.',
    ],
    safetyNoteVi: 'Chỉ fork và chạy cục bộ. Không gửi giao dịch lên mainnet.',
    remediationTopicIds: ['Kiểm thử invariant liên tục trong CI trước mỗi lần triển khai.'],
  }),

  // ── T: AI ──────────────────────────────────────────────────────────
  defineModule({
    id: 'mod-ai-architecture',
    trackId: 'trk-ai-architecture',
    titleVi: 'Phân lớp hệ thống AI',
    summaryVi:
      'Mô hình, ứng dụng, prompt, RAG, vector database, agent, công cụ, plugin, bộ nhớ, pipeline huấn luyện, model registry, inference API, phê duyệt của con người và hệ đa agent.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Vẽ kiến trúc một ứng dụng LLM và đánh dấu nơi dữ liệu không tin cậy đi vào ngữ cảnh.',
      'Xác định công cụ nào agent gọi được và với quyền của ai.',
      'Phân biệt vấn đề của mô hình với vấn đề của hệ thống quanh mô hình.',
    ],
    methodologyVi: [
      'Coi ngữ cảnh mô hình như một vùng dữ liệu không tin cậy, giống thân request HTTP.',
    ],
    safetyNoteVi:
      'Không dùng dữ liệu người dùng thật khi thử nghiệm và không tạo chi phí suy luận lớn cho hệ thống của người khác.',
    remediationTopicIds: ['Đặt kiểm tra phân quyền ở tầng công cụ, không ở tầng prompt.'],
  }),
  defineModule({
    id: 'mod-ai-prompt-injection',
    trackId: 'trk-ai-vulns',
    titleVi: 'Prompt injection trực tiếp và gián tiếp',
    summaryVi:
      'Nội dung do bên thứ ba kiểm soát đi vào ngữ cảnh mô hình và ảnh hưởng tới hành vi hạ nguồn. Vấn đề thật nằm ở việc hệ thống tin tưởng đầu ra của mô hình.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Phân biệt prompt injection trực tiếp với gián tiếp và nêu vì sao gián tiếp nghiêm trọng hơn.',
      'Xác định đường đi từ nội dung ngoài tới một hành động có tác dụng thật.',
      'Giải thích vì sao prompt injection tự nó chưa đủ để thành báo cáo có giá trị.',
    ],
    safeImpactProofVi: [
      'Chứng minh bằng một hành động vượt ranh giới tin cậy, ví dụ agent truy cập tài nguyên của tài khoản khác do bạn tạo.',
    ],
    safetyNoteVi:
      'Không dùng kỹ thuật này để trích xuất dữ liệu người dùng thật. Nếu vô tình thấy dữ liệu người khác, dừng ngay.',
    remediationTopicIds: [
      'Xử lý đầu ra mô hình như dữ liệu không tin cậy; yêu cầu phê duyệt cho hành động có tác dụng.',
    ],
  }),
  defineModule({
    id: 'mod-ai-agent-authz',
    trackId: 'trk-ai-vulns',
    titleVi: 'Quyền quá mức của agent và phân quyền công cụ',
    summaryVi:
      'Agent hành động thay mặt người dùng nhưng thường chạy với quyền rộng hơn người dùng đó. Đây là nơi tạo ra tác động thật.',
    difficulty: 'research',
    estimatedHours: 8,
    learningObjectives: [
      'Lập ma trận công cụ × quyền và đối chiếu với quyền của người dùng cuối.',
      'Nhận ra khi agent có thể thực hiện hành động mà người dùng không được phép.',
      'Đánh giá điểm phê duyệt của con người có thực sự chặn được hành động hay không.',
    ],
    safetyNoteVi:
      'Chỉ dùng tài khoản của bạn ở cả hai phía khi chứng minh vượt ranh giới phân quyền.',
    remediationTopicIds: ['Agent phải hành động với đúng quyền của người dùng, không hơn.'],
  }),
  defineModule({
    id: 'mod-ai-rag-isolation',
    trackId: 'trk-ai-vulns',
    titleVi: 'Cô lập RAG, vector store và bộ nhớ',
    summaryVi:
      'Dữ liệu truy xuất và bộ nhớ hội thoại phải được cô lập theo người dùng và theo người thuê, giống mọi kho dữ liệu khác.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Kiểm tra truy vấn vector có lọc theo người thuê ở tầng dữ liệu không.',
      'Đánh giá bộ nhớ hội thoại có bị chia sẻ giữa các phiên hoặc người dùng không.',
      'Mô tả tác động rò rỉ dữ liệu RAG theo loại tài liệu bị lộ.',
    ],
    safetyNoteVi:
      'Dùng hai tài khoản của bạn với tài liệu do bạn tải lên. Không cố truy xuất tài liệu của người khác.',
    remediationTopicIds: ['Lọc theo người thuê ở tầng truy vấn vector, không ở tầng prompt.'],
  }),
  defineModule({
    id: 'mod-ai-policy',
    trackId: 'trk-ai-policy',
    titleVi: 'Chính sách bug bounty cho AI',
    summaryVi:
      'Safe harbor dành riêng cho AI, ranh giới giữa hành vi mô hình và lỗ hổng bảo mật, và yêu cầu chứng minh có vượt qua một ranh giới tin cậy.',
    difficulty: 'intermediate',
    estimatedHours: 4,
    learningObjectives: [
      'Đọc chính sách AI của một chương trình và xác định loại phát hiện nào được nhận.',
      'Giải thích vì sao đầu ra có hại thường không được coi là lỗ hổng bảo mật.',
      'Viết báo cáo AI tập trung vào ranh giới tin cậy bị vượt qua.',
    ],
    safetyNoteVi:
      'Không tạo chi phí lớn cho hệ thống của người khác và không khai thác dữ liệu người dùng thật.',
    remediationTopicIds: ['Chương trình nên nêu rõ ranh giới giữa an toàn nội dung và bảo mật.'],
  }),

  // ── U: Browser extension ───────────────────────────────────────────
  defineModule({
    id: 'mod-ext-architecture',
    trackId: 'trk-browser-ext',
    titleVi: 'Kiến trúc tiện ích trình duyệt và mô hình quyền',
    summaryVi:
      'Manifest, quyền, content script, service worker nền, trang tuỳ chọn, storage, cập nhật, tài nguyên truy cập được từ web và cửa hàng tiện ích.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Đọc manifest và xác định tiện ích có thể chạm tới những trang nào.',
      'Giải thích tài nguyên truy cập được từ web tạo ra cầu nối nào.',
      'Đánh giá quyền yêu cầu so với chức năng thực tế của tiện ích.',
    ],
    safetyNoteVi:
      'Chỉ phân tích tiện ích do bạn viết, tiện ích lab, hoặc tiện ích nằm trong phạm vi chương trình.',
    remediationTopicIds: ['Yêu cầu quyền tối thiểu; hạn chế tài nguyên truy cập được từ web.'],
  }),
  defineModule({
    id: 'mod-ext-message-boundary',
    trackId: 'trk-browser-ext',
    titleVi: 'Ranh giới thông điệp: trang, content script, nền và native',
    summaryVi:
      'Truyền thông điệp giữa trang web, content script, service worker nền và ứng dụng native — nơi việc không kiểm tra người gửi tạo ra lỗ hổng nghiêm trọng.',
    difficulty: 'research',
    estimatedHours: 6,
    learningObjectives: [
      'Xác định mọi trình xử lý thông điệp và kiểm tra chúng có xác thực nguồn gửi không.',
      'Giải thích vì sao trang web luôn phải bị coi là không tin cậy với content script.',
      'Đánh giá native messaging như một đường leo từ web ra hệ điều hành.',
    ],
    safetyNoteVi: 'Chỉ trên tiện ích lab hoặc tiện ích của chính bạn.',
    remediationTopicIds: ['Xác thực nguồn của mọi thông điệp; không phơi API đặc quyền cho trang.'],
  }),

  // ── V: SaaS ────────────────────────────────────────────────────────
  defineModule({
    id: 'mod-saas-tenancy',
    trackId: 'trk-saas-core',
    titleVi: 'Workspace, tổ chức, lời mời và tài khoản khách',
    summaryVi:
      'Người thuê, workspace, nhóm, khách, xác minh tên miền, chia sẻ liên kết, quyền hiển thị công khai/riêng tư, xuất dữ liệu, nhật ký kiểm toán và lưu trữ.',
    difficulty: 'advanced',
    estimatedHours: 8,
    learningObjectives: [
      'Lập ma trận vai trò trong một sản phẩm cộng tác và kiểm thử ranh giới giữa chúng.',
      'Đánh giá luồng mời và khả năng nâng quyền của tài khoản khách.',
      'Kiểm tra liên kết chia sẻ về tính khó đoán, thời hạn và khả năng thu hồi.',
    ],
    safetyNoteVi:
      'Tạo hai workspace của chính bạn để thử chéo. Không truy cập workspace của tổ chức khác.',
    remediationTopicIds: [
      'Ràng buộc người thuê ở tầng dữ liệu; liên kết chia sẻ có thời hạn và thu hồi được.',
    ],
  }),
  defineModule({
    id: 'mod-saas-email-auth',
    trackId: 'trk-saas-core',
    titleVi: 'SPF, DKIM, DMARC ở mức kiến trúc',
    summaryVi:
      'Ba cơ chế xác thực email hoạt động thế nào, chúng bảo vệ điều gì, và vì sao báo cáo về giả mạo email phải tuân theo chính sách chương trình.',
    difficulty: 'intermediate',
    estimatedHours: 5,
    learningObjectives: [
      'Giải thích vai trò riêng của SPF, DKIM và DMARC.',
      'Đọc bản ghi DMARC của một tên miền và nêu chính sách của nó.',
      'Đánh giá tác động thực tế của cấu hình email yếu.',
    ],
    safetyNoteVi:
      'Không gửi email giả mạo tới người thật trong bất kỳ hoàn cảnh nào. Không thực hiện phishing hay gửi thư hàng loạt. Nếu cần chứng minh, chỉ gửi tới địa chỉ của chính bạn và theo đúng cách chính sách quy định.',
    remediationTopicIds: ['Đặt DMARC ở chính sách thực thi sau khi đã hoàn tất SPF và DKIM.'],
  }),
  defineModule({
    id: 'mod-saas-integrations',
    trackId: 'trk-saas-core',
    titleVi: 'Tích hợp: ứng dụng OAuth, bot, webhook và tự động hoá',
    summaryVi:
      'Ứng dụng OAuth bên thứ ba, bot, webhook và luồng tự động hoá — nơi quyền được cấp một lần rồi tồn tại lâu dài và ít được rà soát.',
    difficulty: 'advanced',
    estimatedHours: 6,
    learningObjectives: [
      'Đánh giá phạm vi quyền mà một ứng dụng tích hợp yêu cầu.',
      'Kiểm tra luồng tự động hoá có thể bị kích hoạt bởi người dùng ít quyền không.',
      'Đánh giá cơ chế xác minh webhook đến.',
    ],
    safetyNoteVi: 'Chỉ cài tích hợp thử nghiệm vào workspace của chính bạn.',
    remediationTopicIds: [
      'Rà soát định kỳ ứng dụng đã cấp quyền; giới hạn phạm vi token tích hợp.',
    ],
  }),

  // ── W: Privacy ─────────────────────────────────────────────────────
  defineModule({
    id: 'mod-privacy-classification',
    trackId: 'trk-privacy-core',
    titleVi: 'Phân loại dữ liệu và tối thiểu hoá',
    summaryVi:
      'PII, dữ liệu cá nhân nhạy cảm, metadata, vị trí, danh bạ, dữ liệu sức khoẻ và tài chính ở mức phân loại; nguyên tắc tối thiểu hoá dữ liệu, đồng ý, lưu trữ và xoá.',
    difficulty: 'intermediate',
    estimatedHours: 6,
    learningObjectives: [
      'Phân loại dữ liệu quan sát được trong một ứng dụng theo mức nhạy cảm.',
      'Nhận ra rò rỉ qua analytics, log, chỉ mục tìm kiếm và liên kết công khai.',
      'Đánh giá chức năng xoá có thực sự xoá ở mọi bản sao không.',
    ],
    safetyNoteVi: 'Không tải hàng loạt dữ liệu để phân loại. Quan sát cấu trúc là đủ.',
    remediationTopicIds: [
      'Tối thiểu hoá dữ liệu thu thập; loại dữ liệu cá nhân khỏi log và analytics.',
    ],
  }),
  defineModule({
    id: 'mod-privacy-impact-without-harm',
    trackId: 'trk-privacy-core',
    titleVi: 'Mô tả tác động mà không lưu dữ liệu của nạn nhân',
    summaryVi:
      'Kỹ năng viết báo cáo về rò rỉ dữ liệu sao cho thuyết phục mà không biến bạn thành người đang giữ dữ liệu của người khác.',
    difficulty: 'intermediate',
    estimatedHours: 4,
    learningObjectives: [
      'Chuyển một quan sát về rò rỉ thành mô tả tác động định lượng mà không cần dump dữ liệu.',
      'Che thông tin định danh trong ảnh chụp và video bằng chứng.',
      'Viết phần "dữ liệu đã tiếp xúc" và "hành động giảm thiểu" trong báo cáo.',
    ],
    safeImpactProofVi: [
      'Ảnh chụp một bản ghi đã che, kèm mô tả cấu trúc phản hồi và ước lượng phạm vi, là đủ.',
    ],
    safetyNoteVi:
      'Không tải hàng loạt dữ liệu để chứng minh. Xoá mọi dữ liệu đã tiếp xúc sau khi báo cáo và ghi rõ việc đó.',
    remediationTopicIds: ['Không áp dụng — module kỹ năng báo cáo'],
  }),

  // ── X: Emerging ────────────────────────────────────────────────────
  defineModule({
    id: 'mod-emerging-evaluating-new-surfaces',
    trackId: 'trk-emerging-core',
    titleVi: 'Đánh giá một bề mặt tấn công mới',
    summaryVi:
      'Khi gặp một lĩnh vực chưa có tài liệu, quy trình để xác định nó có nghiên cứu được hợp pháp không, cần điều kiện gì, và bảy điều kiện để mở nó thành một specialization chính thức.',
    difficulty: 'research',
    estimatedHours: 6,
    learningObjectives: [
      'Áp dụng chuỗi 12 bước cho một lĩnh vực chưa có tài liệu.',
      'Kiểm tra bảy điều kiện trước khi chuyển một specialization từ planned sang active.',
      'Xác định ràng buộc pháp lý trước khi xác định ràng buộc kỹ thuật.',
    ],
    methodologyVi: [
      'Bắt đầu bằng câu hỏi pháp lý và an toàn, không bằng câu hỏi kỹ thuật.',
      'Không mở một specialization khi chưa có ít nhất một lab hợp pháp.',
    ],
    safetyNoteVi:
      'Mỗi lĩnh vực trong domain này có ràng buộc riêng, đặc biệt là thiết bị y tế, thiết bị thanh toán, drone và viễn thông. Không thực hành khi chưa xác định rõ quy định tại nơi bạn sống.',
    remediationTopicIds: ['Không áp dụng — module phương pháp'],
  }),
];
