# BountyAtlas VN

**→ Dùng ngay: https://5kym4rk.github.io/bounty-atlas-vn/**

Bản đồ kiến thức Bug Bounty đa lĩnh vực bằng tiếng Việt.

Một ứng dụng web học tập chạy hoàn toàn phía trình duyệt, giúp người học trả lời
bốn câu hỏi: cần học **gì**, học **theo thứ tự nào**, thực hành **ở đâu cho hợp
pháp**, và **chứng minh cùng báo cáo** kết quả như thế nào.

> BountyAtlas VN cung cấp bản đồ kiến thức Bug Bounty đa lĩnh vực tại thời điểm rà
> soát. Đây là hệ thống mở và cần tiếp tục cập nhật khi tiêu chuẩn, công nghệ,
> chương trình và bề mặt tấn công thay đổi.

## Bug Bounty không đồng nghĩa với Web Security

Web chỉ là một trong 24 lĩnh vực. Bản đồ bao gồm:

| Mã  | Lĩnh vực                        | Mã  | Lĩnh vực                        |
| --- | ------------------------------- | --- | ------------------------------- |
| A   | Chính sách, pháp lý và vận hành | M   | Rà soát mã nguồn                |
| B   | Kiến thức nền                   | N   | Chuỗi cung ứng và CI/CD         |
| C   | Phương pháp kiểm thử            | O   | IoT, firmware và phần cứng      |
| D   | Web application                 | P   | Wireless, Bluetooth, NFC và RF  |
| E   | API                             | Q   | Automotive                      |
| F   | Identity và SSO                 | R   | ICS và OT                       |
| G   | Mobile                          | S   | Smart contract và Web3          |
| H   | Cloud                           | T   | AI, LLM và agent                |
| I   | Container và Kubernetes         | U   | Browser và extension            |
| J   | Network và hạ tầng              | V   | Email, SaaS và workflow         |
| K   | Desktop và thick client         | W   | Quyền riêng tư và đa người thuê |
| L   | Dịch ngược và binary            | X   | Lĩnh vực mới nổi                |

## Tính năng

- **Knowledge Atlas** — đồ thị quan hệ prerequisite, có phiên bản danh sách cho
  màn hình hẹp.
- **Onboarding và diagnostic** — tạo kế hoạch cá nhân mà không khoá bạn vào một lộ trình.
- **Thư viện nguồn** — 13 bộ lọc, phân biệt rõ nguồn chính thức và nguồn cộng đồng.
- **Lab Hub** — chỉ lab hợp pháp, có cảnh báo phạm vi, chi phí và dọn dẹp.
- **Thư viện công cụ** — nêu cả giới hạn và những kết luận **không** được suy ra
  từ output công cụ.
- **Checklist Workspace** — sinh checklist theo ngữ cảnh; mỗi mục là câu hỏi, không
  phải payload.
- **Report Builder** — 22 trường, xuất Markdown, JSON hoặc văn bản thuần.
- **Severity Lab và Triage Simulator** — luyện chấm mức nghiêm trọng và luyện làm
  việc với triager.
- **Gap Analysis** — chỉ ra phần nào của bản đồ còn thiếu, tính trực tiếp từ dữ liệu.
- **Tìm kiếm tiếng Việt không dấu** — gõ `phan quyen doi tuong` vẫn tìm ra
  "Phân quyền ở mức đối tượng".

## Phần mềm này KHÔNG phải công cụ để

Quét mục tiêu Internet · tự động săn bounty · tự động khai thác · lưu payload phá
hoại · credential stuffing · phishing · tạo malware · tấn công từ chối dịch vụ ·
che giấu hoạt động · gửi báo cáo hàng loạt · khuyến khích kiểm thử ngoài phạm vi.

Không có ô nhập mục tiêu ở bất kỳ đâu trong ứng dụng. Ứng dụng không thực hiện
request nào tới hạ tầng bên thứ ba khi chạy.

## An toàn

> Chỉ kiểm thử hệ thống do bạn sở hữu, phòng lab được thiết kế để thực hành,
> thiết bị thuộc quyền sở hữu của bạn, testnet/local chain, hoặc tài sản được một
> chương trình còn hiệu lực cho phép rõ ràng. Luôn đọc phạm vi, giới hạn kỹ thuật,
> safe harbor, quy định xử lý dữ liệu và điều khoản công bố trước khi thử nghiệm.

Xem `SAFETY.md` để có chín quy tắc dừng kiểm thử và ràng buộc riêng theo lĩnh vực.

## Cách dùng

Mở **https://5kym4rk.github.io/bounty-atlas-vn/** trong trình duyệt. Không cần cài
đặt, không cần tài khoản, không cần chạy server.

Ứng dụng chạy hoàn toàn phía trình duyệt và được triển khai trên GitHub Pages.
Tiến trình học của bạn lưu trong IndexedDB của chính trình duyệt đó.

## Phát triển

Phần dưới đây chỉ dành cho người muốn **đóng góp nội dung hoặc mã nguồn**. Người
học bình thường không cần tới nó.

```bash
npm install
npm run dev     # server phát triển, chỉ dùng khi sửa mã
```

Yêu cầu Node 20 trở lên.

### Lệnh chính

```bash
npm run lint            # ESLint, không cho phép warning
npm run test            # Vitest
npm run validate:data   # kiểm tra toàn vẹn dữ liệu kiến thức
npm run build           # typecheck rồi build production
npm run qa              # chạy cả bốn lệnh trên

npm run check:links     # kiểm tra liên kết, ghi reports/link-check.md
npm run coverage:report # sinh reports/coverage.md
npm run build:index     # sinh chỉ mục tìm kiếm tĩnh
```

## Số lượng nội dung

Không có con số nào được viết tay trong README này. Số lượng thực tế nằm ở
[`reports/coverage.md`](reports/coverage.md), sinh bởi `npm run coverage:report`,
và cũng hiển thị trong trang Giới thiệu của ứng dụng.

## Dữ liệu của bạn

Không có backend, không có tài khoản, không có telemetry. Tiến trình học, ghi chú,
bằng chứng và bản nháp báo cáo nằm trong IndexedDB trên máy bạn. Bạn có thể xuất,
nhập hoặc xoá sạch bất cứ lúc nào trong trang Cài đặt. Xuất dữ liệu có tuỳ chọn
loại bỏ nội dung nhạy cảm.

## Kiến trúc

React 18 · TypeScript strict · Vite 5 · Tailwind CSS 3 · React Router (HashRouter) ·
Zustand · Zod · Fuse.js · Vitest · IndexedDB có migration.

Chi tiết và lý do lựa chọn: [`IMPLEMENTATION_PLAN.md`](IMPLEMENTATION_PLAN.md).

## Tài liệu

| Tệp                                              | Nội dung                             |
| ------------------------------------------------ | ------------------------------------ |
| [PRODUCT_SPEC.md](PRODUCT_SPEC.md)               | Sản phẩm là gì và không là gì        |
| [KNOWLEDGE_TAXONOMY.md](KNOWLEDGE_TAXONOMY.md)   | Cây phân loại 24 lĩnh vực            |
| [DATA_SCHEMA.md](DATA_SCHEMA.md)                 | Mô hình dữ liệu và ràng buộc         |
| [SAFETY_MODEL.md](SAFETY_MODEL.md)               | Mô hình an toàn kỹ thuật             |
| [SOURCE_REGISTRY.md](SOURCE_REGISTRY.md)         | Chính sách nguồn và kết quả xác minh |
| [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) | Stack, cấu trúc, thứ tự thực hiện    |
| [SAFETY.md](SAFETY.md)                           | Quy tắc an toàn cho người học        |
| [CONTENT_POLICY.md](CONTENT_POLICY.md)           | Nội dung được phép và bị cấm         |
| [DATA_POLICY.md](DATA_POLICY.md)                 | Chính sách dữ liệu                   |
| [ATTRIBUTION.md](ATTRIBUTION.md)                 | Ghi công nguồn                       |
| [CONTRIBUTING.md](CONTRIBUTING.md)               | Hướng dẫn đóng góp                   |
| [ROADMAP.md](ROADMAP.md)                         | Mục tiêu tiếp theo                   |
| [CHANGELOG.md](CHANGELOG.md)                     | Lịch sử thay đổi                     |
| [HANDOVER.md](HANDOVER.md)                       | Báo cáo bàn giao bản 0.1.0           |

## Giới hạn cần biết trước khi dùng

- Phần lớn nội dung hiện ở trạng thái `draft`: đã viết nhưng chưa đối chiếu từng
  câu với nguồn. Ứng dụng hiển thị trạng thái này ngay trên mỗi mục.
- Chỉ một phần nguồn đã được người biên tập mở và xác minh. Danh sách nguồn chưa
  xác minh nằm trong `reports/coverage.md`.
- Nhiều module chưa có lab, quiz hoặc bài tập viết báo cáo. Trang Gap Analysis liệt
  kê đầy đủ.
- Dự án không được bất kỳ tổ chức nguồn nào bảo trợ, và không hứa hẹn thu nhập.

## Giấy phép

MIT — xem [LICENSE](LICENSE). Giấy phép này áp dụng cho mã nguồn và nội dung tiếng
Việt do dự án biên soạn, **không** áp dụng cho nội dung của các nguồn được liên kết.
