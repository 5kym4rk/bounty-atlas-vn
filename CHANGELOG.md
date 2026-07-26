# CHANGELOG

Định dạng theo tinh thần Keep a Changelog. Phiên bản theo Semantic Versioning.

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
