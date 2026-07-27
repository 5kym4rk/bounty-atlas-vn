import type { Tool } from '@/schemas/entities';

/**
 * Hồ sơ công cụ. Mỗi công cụ phải nêu giới hạn và những kết luận KHÔNG được
 * suy ra chỉ từ output của nó. Dự án không nhúng bất kỳ tệp thực thi nào.
 */
export const tools: Tool[] = [
  {
    id: 'tool-devtools',
    name: 'Browser DevTools',
    purposeVi:
      'Quan sát request, phản hồi, DOM, storage và mã JavaScript của trang đang mở trong trình duyệt của bạn.',
    domainIds: ['dom-foundations', 'dom-web', 'dom-browser-ext'],
    officialUrl: 'https://developer.chrome.com/docs/devtools',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Đi kèm trình duyệt',
    difficulty: 'foundation',
    relatedLabIds: ['lab-proxy-setup', 'lab-extension-local'],
    limitationsVi: [
      'Chỉ thấy phần chạy trong trình duyệt; không thấy logic phía máy chủ.',
      'Không quan sát được lưu lượng của ứng dụng không phải trình duyệt.',
    ],
    commonMistakesVi: [
      'Nhầm giá trị sau khi JavaScript xử lý với giá trị máy chủ thực sự trả về.',
      'Bỏ qua tab mạng khi bộ lọc đang ẩn loại request cần xem.',
    ],
    notEvidenceForVi: [
      'Việc một nút bị ẩn trong DOM không chứng minh chức năng đó bị chặn ở phía máy chủ.',
      'Việc sửa được giá trị trong DevTools không phải một lỗ hổng — đó là trình duyệt của chính bạn.',
    ],
    safeUsageVi: [
      'Chỉ quan sát lưu lượng của chính bạn.',
      'Dùng hồ sơ trình duyệt riêng cho việc học để không lẫn với tài khoản thật.',
    ],
    contentStatus: 'draft',
  },
  {
    id: 'tool-burp',
    name: 'Burp Suite',
    purposeVi:
      'Proxy chặn bắt cho phép quan sát và chỉnh sửa request HTTP của chính bạn trước khi gửi đi.',
    domainIds: ['dom-methodology', 'dom-web', 'dom-api', 'dom-mobile', 'dom-identity'],
    officialUrl: 'https://portswigger.net/burp/documentation',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Có bản cộng đồng miễn phí và bản thương mại',
    difficulty: 'intermediate',
    relatedLabIds: ['lab-proxy-setup', 'lab-psa-access-control'],
    limitationsVi: [
      'Bản cộng đồng giới hạn tốc độ một số tính năng tự động.',
      'Không hiểu logic nghiệp vụ; nó chỉ hiển thị điều bạn yêu cầu nó hiển thị.',
    ],
    commonMistakesVi: [
      'Bật quét tự động lên tài sản thật mà chưa kiểm tra chính sách có cho phép không.',
      'Quên gỡ cấu hình proxy và chứng chỉ CA sau khi học xong.',
      'Gửi lượng lớn request mà không cân nhắc giới hạn tốc độ của chương trình.',
    ],
    notEvidenceForVi: [
      'Một cảnh báo của bộ quét không phải là lỗ hổng cho tới khi bạn tái hiện thủ công.',
      'Sự khác biệt phản hồi có thể do cache hoặc cân bằng tải, không nhất thiết do lỗi.',
    ],
    safeUsageVi: [
      'Chỉ chặn bắt lưu lượng của chính bạn.',
      'Tắt mọi tính năng quét tự động khi chính sách chương trình không cho phép.',
      'Đặt phạm vi trong công cụ khớp đúng với phạm vi trong chính sách.',
    ],
    contentStatus: 'draft',
  },
  {
    id: 'tool-curl',
    name: 'curl',
    purposeVi: 'Gửi request HTTP thủ công từ dòng lệnh và quan sát phản hồi thô.',
    domainIds: ['dom-foundations', 'dom-web', 'dom-api', 'dom-network', 'dom-cloud'],
    officialUrl: 'https://curl.se/docs/',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Nguồn mở',
    difficulty: 'beginner',
    relatedLabIds: ['lab-crapi', 'lab-network-local'],
    limitationsVi: [
      'Không chạy JavaScript nên không tái hiện được hành vi của ứng dụng một trang.',
      'Không tự quản lý phiên trừ khi bạn khai báo tường minh.',
    ],
    commonMistakesVi: [
      'Quên rằng thiếu cookie hoặc header khiến phản hồi khác hẳn so với trong trình duyệt.',
      'Đặt token nhạy cảm vào lịch sử dòng lệnh.',
    ],
    notEvidenceForVi: [
      'Phản hồi khác trình duyệt chưa chắc là lỗi; có thể do thiếu header mà máy chủ mong đợi.',
    ],
    safeUsageVi: [
      'Chỉ gửi request tới lab hoặc tài sản trong phạm vi.',
      'Không đưa bí mật vào dòng lệnh; dùng tệp cấu hình có quyền hạn chế.',
    ],
    contentStatus: 'draft',
  },
  {
    id: 'tool-api-client',
    name: 'API client',
    purposeVi:
      'Gửi và tổ chức request API theo bộ sưu tập, thuận tiện khi kiểm thử theo ma trận vai trò × đối tượng.',
    domainIds: ['dom-api', 'dom-saas', 'dom-ai'],
    officialUrl: 'https://spec.openapis.org/oas/latest.html',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Tuỳ sản phẩm',
    difficulty: 'beginner',
    relatedLabIds: ['lab-crapi'],
    limitationsVi: [
      'Không tự phát hiện endpoint không có trong schema.',
      'Một số client đồng bộ dữ liệu lên đám mây theo mặc định.',
    ],
    commonMistakesVi: [
      'Lưu token thật vào bộ sưu tập rồi vô tình chia sẻ bộ sưu tập đó.',
      'Bật đồng bộ đám mây khiến dữ liệu kiểm thử rời khỏi máy bạn.',
    ],
    notEvidenceForVi: [
      'Việc một endpoint trả về 200 chưa chứng minh bạn được phép truy cập dữ liệu đó — cần kiểm tra bằng tài khoản khác.',
    ],
    safeUsageVi: [
      'Tắt đồng bộ đám mây khi làm việc với dữ liệu của chương trình.',
      'Dùng biến môi trường cho token và không commit chúng.',
    ],
    contentStatus: 'draft',
  },
  {
    id: 'tool-nmap',
    name: 'Nmap',
    purposeVi: 'Khám phá máy chủ và dịch vụ trong một mạng mà bạn được phép quét.',
    domainIds: ['dom-network', 'dom-ics-ot'],
    officialUrl: 'https://nmap.org/book/',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Nguồn mở',
    difficulty: 'intermediate',
    relatedLabIds: ['lab-network-local'],
    limitationsVi: [
      'Kết quả phụ thuộc vào firewall và thiết bị trung gian trên đường đi.',
      'Nhận diện phiên bản dựa trên banner, có thể sai hoặc bị làm giả.',
    ],
    commonMistakesVi: [
      'Quét dải địa chỉ mà chương trình không cho phép.',
      'Dùng tuỳ chọn quét mạnh trên hệ thống nhạy cảm, đặc biệt là thiết bị công nghiệp.',
      'Coi danh sách cổng mở là một báo cáo lỗ hổng.',
    ],
    notEvidenceForVi: [
      'Banner phiên bản cũ không chứng minh hệ thống bị ảnh hưởng bởi lỗ hổng của phiên bản đó.',
      'Cổng mở không chứng minh dịch vụ đó thiếu kiểm soát truy cập.',
    ],
    safeUsageVi: [
      'Chỉ quét mạng bạn sở hữu hoặc dải địa chỉ được chính sách cho phép rõ ràng.',
      'Không quét thiết bị công nghiệp hay thiết bị y tế; chúng có thể ngừng hoạt động vì lưu lượng bất thường.',
    ],
    contentStatus: 'draft',
  },
  {
    id: 'tool-wireshark',
    name: 'Wireshark',
    purposeVi: 'Bắt và phân tích gói tin trên mạng mà bạn có quyền quan sát.',
    domainIds: ['dom-foundations', 'dom-network', 'dom-iot', 'dom-wireless', 'dom-ics-ot'],
    officialUrl: 'https://www.wireshark.org/docs/wsug_html_chunked/',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Nguồn mở',
    difficulty: 'intermediate',
    relatedLabIds: ['lab-network-local', 'lab-tls-inspection'],
    limitationsVi: [
      'Không đọc được nội dung đã mã hoá nếu không có khoá phiên.',
      'Bắt gói trên mạng chuyển mạch chỉ thấy lưu lượng liên quan tới máy bạn.',
    ],
    commonMistakesVi: [
      'Bắt gói trên mạng dùng chung, thu cả lưu lượng của người khác.',
      'Lưu tệp bắt gói chứa thông tin xác thực mà không xoá sau đó.',
    ],
    notEvidenceForVi: [
      'Việc thấy dữ liệu ở dạng rõ trong lab không chứng minh hệ thống thật cũng vậy.',
    ],
    safeUsageVi: [
      'Chỉ bắt gói trên mạng của bạn hoặc mạng lab.',
      'Xoá tệp bắt gói chứa dữ liệu nhạy cảm sau khi hoàn thành.',
    ],
    contentStatus: 'draft',
  },
  {
    id: 'tool-openssl',
    name: 'OpenSSL',
    purposeVi: 'Kiểm tra bắt tay TLS, chuỗi chứng chỉ và bộ mã của một dịch vụ trong lab.',
    domainIds: ['dom-network', 'dom-foundations'],
    officialUrl: 'https://docs.openssl.org/',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Nguồn mở',
    difficulty: 'advanced',
    relatedLabIds: ['lab-tls-inspection'],
    limitationsVi: ['Bộ giao thức và bộ mã hỗ trợ phụ thuộc phiên bản OpenSSL bạn đang dùng.'],
    commonMistakesVi: [
      'Kết luận máy chủ hỗ trợ một giao thức trong khi thực ra client của bạn không hỗ trợ nó.',
    ],
    notEvidenceForVi: [
      'Chứng chỉ hết hạn là vấn đề vận hành, chưa chắc là lỗ hổng theo tiêu chí của chương trình.',
    ],
    safeUsageVi: ['Chỉ kết nối tới dịch vụ trong lab hoặc trong phạm vi được phép.'],
    contentStatus: 'draft',
  },
  {
    id: 'tool-dig',
    name: 'dig / nslookup',
    purposeVi: 'Tra cứu bản ghi DNS công khai.',
    domainIds: ['dom-network', 'dom-foundations', 'dom-saas'],
    officialUrl: 'https://www.isc.org/bind/',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Nguồn mở',
    difficulty: 'beginner',
    relatedLabIds: ['lab-network-local'],
    limitationsVi: ['Kết quả có thể khác nhau tuỳ máy chủ DNS đệ quy và tuỳ bộ nhớ đệm.'],
    commonMistakesVi: [
      'Coi kết quả đã lưu đệm là trạng thái hiện tại.',
      'Kết luận về quyền sở hữu tài sản chỉ dựa vào bản ghi DNS.',
    ],
    notEvidenceForVi: [
      'Một bản ghi trỏ tới nhà cung cấp bên thứ ba không chứng minh tổ chức kiểm soát tài nguyên đó.',
    ],
    safeUsageVi: ['Tra cứu DNS là hành vi thụ động; vẫn nên giữ trong phạm vi bạn quan tâm.'],
    contentStatus: 'draft',
  },
  {
    id: 'tool-git',
    name: 'Git',
    purposeVi: 'Đọc lịch sử mã nguồn, rà soát thay đổi và tìm bản vá bảo mật.',
    domainIds: ['dom-foundations', 'dom-code-review', 'dom-supply-chain'],
    officialUrl: 'https://git-scm.com/doc',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Nguồn mở',
    difficulty: 'beginner',
    relatedLabIds: ['lab-codeql-local', 'lab-cicd-local'],
    limitationsVi: ['Chỉ thấy điều đã được commit; không thấy quy trình bên ngoài repository.'],
    commonMistakesVi: [
      'Cho rằng xoá bí mật ở commit mới là đã xoá khỏi lịch sử.',
      'Commit dữ liệu kiểm thử chứa thông tin thật.',
    ],
    notEvidenceForVi: [
      'Một bí mật trong lịch sử chưa chắc còn hiệu lực — cần báo cáo và đề nghị xoay vòng thay vì tự kiểm chứng bằng cách dùng nó.',
    ],
    safeUsageVi: [
      'Khi tìm thấy bí mật trong repository công khai, báo cáo qua kênh riêng tư và không dùng nó.',
    ],
    contentStatus: 'draft',
  },
  {
    id: 'tool-docker',
    name: 'Docker',
    purposeVi: 'Chạy lab và ứng dụng cố ý dễ tổn thương trong môi trường cách ly trên máy của bạn.',
    domainIds: ['dom-container', 'dom-web', 'dom-api', 'dom-supply-chain'],
    officialUrl: 'https://docs.docker.com/engine/security/',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Có bản miễn phí và bản thương mại',
    difficulty: 'intermediate',
    relatedLabIds: ['lab-juice-shop', 'lab-crapi', 'lab-webgoat'],
    limitationsVi: [
      'Container là ranh giới cô lập nhưng không mạnh bằng máy ảo.',
      'Cấu hình sai như chạy đặc quyền làm mất phần lớn tác dụng cách ly.',
    ],
    commonMistakesVi: [
      'Phơi cổng của ứng dụng lab ra mọi giao diện mạng thay vì chỉ localhost.',
      'Chạy image không rõ nguồn gốc trên máy chứa dữ liệu thật.',
    ],
    notEvidenceForVi: [
      'Việc lab chạy được trong container không nói gì về cấu hình của hệ thống thật.',
    ],
    safeUsageVi: [
      'Gắn cổng lab vào localhost, không phơi ra mạng.',
      'Dừng và xoá container sau khi học xong.',
    ],
    contentStatus: 'draft',
  },
  {
    id: 'tool-vm',
    name: 'Máy ảo',
    purposeVi: 'Tạo môi trường tách biệt để phân tích ứng dụng desktop, firmware và mạng.',
    domainIds: ['dom-desktop', 'dom-binary', 'dom-iot', 'dom-network', 'dom-container'],
    officialUrl: 'https://www.virtualbox.org/wiki/Documentation',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Tuỳ sản phẩm',
    difficulty: 'intermediate',
    relatedLabIds: ['lab-desktop-vm-analysis', 'lab-network-local', 'lab-iotgoat'],
    limitationsVi: [
      'Một số kỹ thuật phát hiện môi trường ảo hoá khiến phần mềm hành xử khác.',
      'Chia sẻ thư mục với máy chủ làm giảm mức cách ly.',
    ],
    commonMistakesVi: [
      'Dùng chế độ mạng cầu nối khiến máy ảo gửi lưu lượng ra mạng thật.',
      'Không chụp ảnh trạng thái trước khi cài phần mềm cần phân tích.',
    ],
    notEvidenceForVi: [
      'Hành vi trong máy ảo có thể khác hành vi trên máy thật; cần ghi rõ điều này trong báo cáo.',
    ],
    safeUsageVi: [
      'Dùng mạng riêng cho máy ảo phân tích.',
      'Chụp ảnh trạng thái trước mỗi lần cài đặt.',
    ],
    contentStatus: 'draft',
  },
  {
    id: 'tool-android-emulator',
    name: 'Android Emulator',
    purposeVi: 'Chạy ứng dụng Android lab trên máy tính mà không cần thiết bị vật lý.',
    domainIds: ['dom-mobile'],
    officialUrl: 'https://developer.android.com/studio/run/emulator',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Miễn phí, đi kèm bộ công cụ nhà phát triển',
    difficulty: 'intermediate',
    relatedLabIds: ['lab-mastg-apps', 'lab-mobile-android-storage'],
    limitationsVi: [
      'Một số tính năng phần cứng và bảo mật không có sẵn trên máy ảo.',
      'Ứng dụng có thể phát hiện môi trường giả lập và đổi hành vi.',
    ],
    commonMistakesVi: [
      'Đăng nhập tài khoản thật vào máy ảo dùng cho việc học.',
      'Kết luận rằng thiếu một cơ chế bảo vệ trong khi cơ chế đó chỉ hoạt động trên thiết bị thật.',
    ],
    notEvidenceForVi: [
      'Kết quả trên máy ảo không luôn phản ánh hành vi trên thiết bị thật, đặc biệt với kho khoá phần cứng.',
    ],
    safeUsageVi: [
      'Dùng máy ảo sạch, không tài khoản thật.',
      'Chỉ cài ứng dụng lab hoặc ứng dụng trong phạm vi.',
    ],
    contentStatus: 'draft',
  },
  {
    id: 'tool-adb',
    name: 'adb',
    purposeVi: 'Giao tiếp với thiết bị hoặc máy ảo Android để cài ứng dụng lab và thu thập log.',
    domainIds: ['dom-mobile'],
    officialUrl: 'https://developer.android.com/tools/adb',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Miễn phí, đi kèm bộ công cụ nhà phát triển',
    difficulty: 'intermediate',
    relatedLabIds: ['lab-mobile-android-storage'],
    limitationsVi: [
      'Nhiều thao tác cần bật gỡ lỗi USB, vốn là thay đổi lớn về mô hình bảo mật của thiết bị.',
    ],
    commonMistakesVi: [
      'Bật gỡ lỗi USB trên thiết bị cá nhân và quên tắt.',
      'Kết nối tới thiết bị không thuộc sở hữu của mình.',
    ],
    notEvidenceForVi: [
      'Dữ liệu đọc được khi có quyền gỡ lỗi không chứng minh ứng dụng khác cũng đọc được nó.',
    ],
    safeUsageVi: [
      'Chỉ dùng với thiết bị thử nghiệm của bạn.',
      'Tắt gỡ lỗi USB ngay sau khi hoàn thành.',
    ],
    contentStatus: 'draft',
  },
  {
    id: 'tool-frida',
    name: 'Frida',
    purposeVi:
      'Đo lường động ứng dụng để quan sát hành vi khi chạy, dùng trong lab di động và desktop.',
    domainIds: ['dom-mobile', 'dom-desktop'],
    officialUrl: 'https://frida.re/docs/',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Nguồn mở',
    difficulty: 'advanced',
    relatedLabIds: ['lab-mastg-apps'],
    limitationsVi: [
      'Cần quyền cao trên thiết bị, vốn thay đổi mô hình bảo mật của thiết bị đó.',
      'Một số ứng dụng phát hiện và chặn công cụ đo lường.',
    ],
    commonMistakesVi: [
      'Dùng trên thiết bị cá nhân đang đăng nhập tài khoản thật.',
      'Can thiệp vào ứng dụng không nằm trong phạm vi.',
    ],
    notEvidenceForVi: [
      'Việc bỏ qua được một kiểm tra phía client không tự nó là lỗ hổng — phải chứng minh máy chủ cũng chấp nhận.',
    ],
    safeUsageVi: [
      'Chỉ dùng trên thiết bị thử nghiệm của bạn với ứng dụng lab hoặc ứng dụng trong phạm vi.',
    ],
    contentStatus: 'draft',
  },
  {
    id: 'tool-ghidra',
    name: 'Ghidra',
    purposeVi: 'Dịch ngược và phân tích tĩnh tệp thực thi trong lab.',
    domainIds: ['dom-binary', 'dom-desktop', 'dom-iot'],
    officialUrl: 'https://ghidra-sre.org/',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Nguồn mở',
    difficulty: 'advanced',
    relatedLabIds: ['lab-firmware-static', 'lab-desktop-vm-analysis'],
    limitationsVi: [
      'Kết quả dịch ngược là suy diễn, không phải mã nguồn gốc.',
      'Mã bị làm rối hoặc tối ưu mạnh làm giảm chất lượng kết quả.',
    ],
    commonMistakesVi: [
      'Coi mã dịch ngược là chính xác tuyệt đối.',
      'Phân tích phần mềm mà giấy phép cấm dịch ngược.',
    ],
    notEvidenceForVi: [
      'Một đoạn mã trông giống lỗ hổng trong bản dịch ngược chưa đủ; cần chứng minh bằng thực nghiệm trong lab.',
    ],
    safeUsageVi: [
      'Kiểm tra điều khoản giấy phép trước khi phân tích phần mềm thương mại.',
      'Phân tích trong máy ảo tách biệt.',
    ],
    contentStatus: 'draft',
  },
  {
    id: 'tool-debugger',
    name: 'Debugger',
    purposeVi: 'Quan sát trạng thái chương trình khi chạy để hiểu nguyên nhân của một crash.',
    domainIds: ['dom-binary', 'dom-desktop'],
    officialUrl: 'https://sourceware.org/gdb/documentation/',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Nguồn mở hoặc thương mại tuỳ sản phẩm',
    difficulty: 'advanced',
    relatedLabIds: ['lab-pwn-college', 'lab-fuzzing-local'],
    limitationsVi: ['Việc gắn debugger có thể thay đổi hành vi và thời điểm của chương trình.'],
    commonMistakesVi: ['Phân tích crash mà không xác định nguyên nhân gốc, dẫn tới báo cáo mơ hồ.'],
    notEvidenceForVi: [
      'Một crash không tự nó chứng minh khả năng khai thác; cần phân tích nguyên nhân gốc.',
    ],
    safeUsageVi: ['Chỉ gỡ lỗi phần mềm bạn được phép phân tích, trong máy ảo.'],
    contentStatus: 'draft',
  },
  {
    id: 'tool-static-analyzer',
    name: 'Công cụ phân tích tĩnh',
    purposeVi: 'Tìm mẫu mã có rủi ro theo luồng dữ liệu, dùng để định hướng việc đọc mã thủ công.',
    domainIds: ['dom-code-review', 'dom-supply-chain', 'dom-web3', 'dom-browser-ext'],
    officialUrl: 'https://codeql.github.com/docs/',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Tuỳ sản phẩm',
    difficulty: 'advanced',
    relatedLabIds: ['lab-codeql-local'],
    limitationsVi: [
      'Tỷ lệ dương tính giả cao khi truy vấn chưa được điều chỉnh theo dự án.',
      'Không hiểu logic nghiệp vụ nên bỏ sót toàn bộ nhóm lỗi logic.',
    ],
    commonMistakesVi: [
      'Gửi kết quả thô làm báo cáo.',
      'Tin vào kết quả mà không đọc mã xung quanh.',
    ],
    notEvidenceForVi: [
      'Một cảnh báo của công cụ không chứng minh đường đi đó thực sự tới được từ đầu vào bên ngoài.',
    ],
    safeUsageVi: [
      'Luôn xác minh thủ công trước khi báo cáo.',
      'Chỉ phân tích mã mà giấy phép cho phép.',
    ],
    contentStatus: 'draft',
  },
  {
    id: 'tool-fuzzer',
    name: 'Fuzzer',
    purposeVi: 'Sinh đầu vào tự động để tìm lỗi trong bộ phân tích dữ liệu, chạy trong lab.',
    domainIds: ['dom-binary'],
    officialUrl: 'https://aflplus.plus/',
    operatingSystems: ['Linux', 'macOS'],
    license: 'Nguồn mở',
    difficulty: 'research',
    relatedLabIds: ['lab-fuzzing-local'],
    limitationsVi: [
      'Chất lượng phụ thuộc vào harness và corpus, không phụ thuộc số lần chạy.',
      'Không tìm được lỗi logic hay lỗi phân quyền.',
    ],
    commonMistakesVi: [
      'Fuzz dịch vụ trực tuyến của người khác — đây là tấn công gây tải, không phải nghiên cứu.',
      'Báo cáo hàng loạt crash chưa phân loại.',
    ],
    notEvidenceForVi: [
      'Số lượng crash không phản ánh mức nghiêm trọng; cần phân loại và tìm nguyên nhân gốc.',
    ],
    safeUsageVi: [
      'Chỉ fuzz phần mềm chạy trên máy của bạn.',
      'Giới hạn tài nguyên bằng container.',
    ],
    contentStatus: 'draft',
  },
  {
    id: 'tool-foundry',
    name: 'Foundry',
    purposeVi:
      'Bộ công cụ phát triển và kiểm thử hợp đồng thông minh, gồm unit test, fuzzing và invariant test.',
    domainIds: ['dom-web3'],
    officialUrl: 'https://getfoundry.sh/',
    operatingSystems: ['Windows', 'macOS', 'Linux'],
    license: 'Nguồn mở',
    difficulty: 'advanced',
    relatedLabIds: ['lab-foundry-invariant', 'lab-damn-vulnerable-defi'],
    limitationsVi: [
      'Fork cục bộ mô phỏng trạng thái chain nhưng không mô phỏng hành vi của người tham gia thật.',
    ],
    commonMistakesVi: [
      'Cấu hình khoá riêng thật vào biến môi trường của dự án phát triển.',
      'Gửi giao dịch lên mạng chính khi định chạy trên chain cục bộ.',
    ],
    notEvidenceForVi: [
      'Một test thành công trên fork chưa chứng minh khả năng sinh lợi trong điều kiện thật.',
    ],
    safeUsageVi: [
      'Dùng ví riêng không chứa tài sản thật.',
      'Kiểm tra kỹ mạng đích trước mỗi lệnh gửi giao dịch.',
    ],
    contentStatus: 'draft',
  },
];
