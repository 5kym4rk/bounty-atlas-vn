# CHANGELOG

Định dạng theo tinh thần Keep a Changelog. Phiên bản theo Semantic Versioning.

## [0.5.0] — 2026-07-27

### Rà soát nốt phần đọc được: 276/367 nguồn, 122/144 module hết nháp

Tiếp tục mở và đọc thật cho tới khi hết những nguồn mà môi trường này truy cập
được. Còn đúng **21 nguồn** chưa rà soát, và tất cả đều nằm ở nhóm chặn công cụ
tự động — danh sách đầy đủ kèm lý do từng nguồn nằm trong `SOURCE_REGISTRY.md`
§5b. Không nguồn nào bị gắn nhãn "đã xác minh" cho đủ số.

Đợt này bắt tiếp bốn link đã trôi và hai mô tả sai của chính dự án:

- `ssl-config.mozilla.org` nay là dự án cộng đồng TLSRef tại
  `configurator.tlsref.org`.
- `book.getfoundry.sh` gộp về `getfoundry.sh` (sửa ở cả labs và tools).
- Tài liệu Bluetooth của Nordic và trang bảo mật Google Workspace đều đã đổi host.
- Mô tả OSS-Fuzz nói dự án công bố lỗi theo thời hạn cố định; tài liệu không nêu
  điều đó nên đã sửa lại đúng những gì trang viết.
- Sách Nmap được đánh dấu miễn phí, nhưng trang ghi rõ chỉ khoảng một nửa nội
  dung đọc được trên web, phần còn lại chỉ có trong bản in. Đã đổi sang chi phí
  hỗn hợp.

Về GDPR: nội dung Điều 5 có đối chiếu được qua một trang gương, nhưng đọc trang
gương không phải là xác minh URL trong dữ liệu, nên nguồn này vẫn để `draft`.

## [0.4.0] — 2026-07-27

### Rà soát nội dung nguồn: 228/367 nguồn, 94/144 module hết trạng thái nháp

Thêm `src/data/resources/reviewed.ts` — sổ ghi nhận việc đã **mở và đọc thật**
từng nguồn. Mỗi mục là một ghi chú nêu điều cụ thể quan sát được trên trang, và
chính ghi chú đó là bằng chứng của việc đã đọc.

Sổ này tách hoàn toàn khỏi `link-status.generated.ts` do script sinh. Một link
`active` chỉ chứng minh máy chủ trả lời; nó không chứng minh có ai đọc nội dung.
Không được suy ra cái này từ cái kia.

Trạng thái module giờ được **suy ra**: module hết nháp khi mọi nguồn `core` của
nó đã được rà soát. Thêm một nguồn chưa rà soát vào lộ trình thì module tự quay
về nháp — một nhãn đặt tay không có tính chất đó.

Việc đọc thật bắt được sáu sai sót mà kiểm tra link không thấy được: hai mô tả
sai về MASTG, ba nguồn đã đổi địa chỉ (Frida, Ghidra, Semgrep, GitHub Security
Lab), và Linux Journey đã đổi chủ sang một nền tảng thương mại nên được thay
bằng LinuxCommand.org. Chi tiết trong `SOURCE_REGISTRY.md` §5b.

**139 nguồn còn ở trạng thái nháp**, chia hai nhóm: nhóm trả HTTP 403 hoặc trang
rỗng với công cụ tự động nên không đọc được từ môi trường này (CISA, Solidity,
UNECE, EUR-Lex, tài liệu Apple…), và nhóm chưa tới lượt rà soát. Cả hai đều được
ghi rõ chứ không gắn nhãn cho đủ số.

## [0.3.0] — 2026-07-27

### Chuyển sang mô hình lộ trình nguồn học

Bản 0.2.0 tự viết bài giảng cho từng module. Bản này bỏ hẳn cách đó.

Nội dung chính của mỗi module giờ là **danh sách nguồn học uy tín, xếp theo thứ
tự nên học**. Người học bấm vào để mở và học tại chính nguồn gốc; dự án không sao
chép nội dung của họ về đây.

Lý do: tài liệu gốc của OWASP, IETF, MITRE và các nhà cung cấp luôn cập nhật và
chính xác hơn bất cứ thứ gì dự án tự viết. Việc dự án làm được tốt hơn là chọn
đúng nguồn, xếp đúng thứ tự, và nói rõ vì sao học nguồn đó ở bước đó.

- Bỏ `LessonSection`/`lessonVi`, thêm `StudyStep`/`studyPlan`. Thứ tự học là vị
  trí trong mảng nên không thể mâu thuẫn với thứ tự lưu trữ.
- Bỏ `requiredResourceIds` và `optionalResourceIds`; `studyPlan.necessity` thay
  cả hai, nên không còn hai nguồn sự thật về cùng một việc.
- Danh mục nguồn tăng từ 115 lên hơn 350, phần thêm mới đều **trỏ thẳng tới đúng
  chương, khoá học hoặc nhóm lab** thay vì trang chủ.
- Trang module: tab **Lộ trình học** thay tab Bài học, và gộp luôn tab Nguồn học
  cũ để không còn hai danh sách của cùng một thứ. Mỗi bước hiển thị tên, nhà cung
  cấp, trình độ, ngôn ngữ, miễn phí/trả phí, có thực hành hay không.
- Test mới kiểm tra: mọi module có ít nhất một nguồn `core`, mọi `roleVi` nói
  được vì sao học ở bước đó, mọi nguồn trong lộ trình có đủ siêu dữ liệu, và
  không hai module nào dùng chung một lộ trình.

Toàn bộ URL đã chạy qua `npm run check:links`: 0 link chết. 13 link mà script
không kết nối được tới host đã được mở tay để xác minh; một link trong số đó
(`developer.android.com/privacy-and-security/security`) đúng là đã chết và đã
được sửa. Không URL nào được giữ lại mà chưa xác minh.

## [0.2.0] — 2026-07-26

### Thêm nội dung bài học cho toàn bộ module

Trước bản này, module chỉ có metadata: tiêu đề, tóm tắt, mục tiêu học, phương pháp
và cảnh báo an toàn. Người học mở một module ra thì không có gì để đọc.

Bản này bổ sung **thân bài học** cho tất cả 144 module.

- Thêm kiểu `LessonSection` và trường bắt buộc `lessonVi` trong `LearningModule`.
  Validator từ chối module không có thân bài học, nên khoảng trống này không thể
  tái diễn mà không bị phát hiện.
- Nội dung nằm ở `src/data/lessons/`, tách khỏi file định nghĩa module để metadata
  và nội dung dài không lẫn vào nhau.
- Trang module có thêm tab **Bài học** và mở mặc định ở tab đó.
- Ba test mới trong `tests/dataset.test.ts` kiểm tra nội dung là thật: mỗi phần đủ
  dài, mỗi module đủ nội dung, và không module nào dùng chung cấu trúc bài học.
- `CONTENT_POLICY.md` bổ sung mục 3.2 quy định cách viết thân bài học.

Nội dung được viết sau khi đối chiếu với tài liệu chính thức của OWASP, NIST,
MITRE, FIRST, IETF, Kubernetes, GitHub, Electron và các nền tảng bug bounty. Toàn
bộ do dự án tự biên soạn bằng tiếng Việt; không sao chép nguyên văn từ nguồn nào.
Mọi ví dụ mã trong bài học đều tự soạn với dữ liệu giả.

Nội dung vẫn mang `contentStatus: 'draft'` vì chưa qua vòng rà soát biên tập độc
lập. Số lượng thực tế xem `reports/coverage.md`.

## [0.1.0] — 2026-07-26

Bản phát hành đầu tiên. Repository được khởi tạo mới hoàn toàn bằng `git init`,
không kế thừa mã nguồn, dữ liệu, giao diện, tài sản hay lịch sử Git của dự án nào khác.

### Tài liệu thiết kế

- `PRODUCT_SPEC.md`, `KNOWLEDGE_TAXONOMY.md`, `SOURCE_REGISTRY.md`,
  `DATA_SCHEMA.md`, `SAFETY_MODEL.md`, `IMPLEMENTATION_PLAN.md`.
- Tài liệu chính sách: `SAFETY.md`, `CONTENT_POLICY.md`, `DATA_POLICY.md`,
  `ATTRIBUTION.md`, `CONTRIBUTING.md`, `ROADMAP.md`.

### Nội dung

- 24 lĩnh vực kiến thức (A–X), mỗi lĩnh vực có bản đồ kiến trúc, bề mặt tấn công,
  trust boundary và cảnh báo an toàn riêng.
- Track, module, concept, weakness, resource, lab, tool, checklist, quiz,
  report exercise, triage scenario, standard, skill, practical assessment và
  learning path. Số lượng thực tế xem `reports/coverage.md`.
- 10 nguồn seed đã được mở và đối chiếu thủ công trong đợt biên tập đầu tiên,
  ghi trong `SOURCE_REGISTRY.md` §5.

### Phần mềm

- React 18 + TypeScript strict + Vite 5 + Tailwind CSS 3.
- HashRouter để chạy trên GitHub Pages.
- Zustand cho state, có giải thích lựa chọn trong `IMPLEMENTATION_PLAN.md` §2.
- Zod validate cả dữ liệu tĩnh lẫn dữ liệu import của người dùng.
- IndexedDB với `SCHEMA_VERSION = 2` và migration có test.
- Tìm kiếm tiếng Việt không dấu bằng bộ chuẩn hoá tự viết kết hợp Fuse.js.
- Giao diện sáng/tối, responsive từ 360 px, có skip link và focus state rõ ràng.

### Chức năng

Onboarding có cam kết an toàn bắt buộc, diagnostic assessment, Knowledge Atlas
(đồ thị và danh sách), learning dashboard, trang lĩnh vực, trang module 12 tab,
Resource Library 13 bộ lọc, Lab Hub, Tool Library, Checklist Workspace,
Report Builder xuất Markdown/JSON/văn bản, Severity Lab, Triage Simulator,
Gap Analysis, tìm kiếm toàn cục và trang cài đặt có export/import/xoá dữ liệu.

### Công cụ vận hành

- `npm run validate:data` — hơn 20 loại ràng buộc, gồm phát hiện chu trình
  prerequisite bằng DFS ba màu.
- `npm run check:links` — HEAD rồi GET fallback, timeout, giới hạn đồng thời,
  retry có backoff, phân loại riêng 401/403/404/410/429/5xx/timeout/redirect.
  Ghi kết quả vào `src/data/resources/link-status.generated.ts`.
- `npm run coverage:report` — sinh `reports/coverage.md` và `reports/coverage.json`.
- `npm run build:index` — sinh chỉ mục tìm kiếm tĩnh.

### An toàn

- Cổng xác nhận an toàn chặn Lab Hub, Checklist Workspace, Report Builder,
  Severity Lab và Triage Simulator.
- Không có ô nhập mục tiêu, không có chức năng quét hay khai thác.
- CSP không cho phép script bên thứ ba; không có telemetry.
- ESLint chặn `dangerouslySetInnerHTML`; liên kết không an toàn không được render
  thành thẻ `<a>`.
- Cảnh báo khi ghi chú của người dùng trông giống token hoặc khoá.
- Validator chặn nội dung phishing, credential stuffing, malware, DoS và né phát hiện.

### Đã biết còn thiếu

- Nhiều module chưa có quiz, lab hoặc bài tập viết báo cáo.
- Phần lớn nguồn chưa được rà soát nội dung, và mang trạng thái `draft`.
- Số lượng concept và weakness chưa đạt chỉ tiêu MVP trong đặc tả.

Danh sách đầy đủ và có thể tái tạo nằm trong `reports/coverage.md`.
