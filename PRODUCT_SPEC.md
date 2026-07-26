# PRODUCT_SPEC — BountyAtlas VN

> Tài liệu này là đặc tả sản phẩm. Tên sản phẩm được đặt tập trung tại
> `src/config/product.ts`; mọi nơi khác trong mã nguồn phải đọc tên từ file đó.

## 1. Tuyên bố sản phẩm

BountyAtlas VN là một **ứng dụng web học tập độc lập, chạy hoàn toàn phía trình duyệt**,
cung cấp bản đồ kiến thức Bug Bounty đa bề mặt bằng tiếng Việt.

Sản phẩm trả lời bốn câu hỏi của người học:

1. Tôi cần học **cái gì**?
2. Tôi học **theo thứ tự nào**?
3. Tôi thực hành **ở đâu cho hợp pháp**?
4. Tôi **chứng minh và báo cáo** kết quả như thế nào?

Đây là một **bản đồ mở, có version, có ngày rà soát**. Bề mặt tấn công thay đổi liên tục,
nên sản phẩm không tuyên bố bao phủ tuyệt đối; thay vào đó nó cung cấp cơ chế
**gap analysis** để người học và người biên tập nhìn thấy phần còn thiếu.

## 2. Sản phẩm KHÔNG phải là gì

BountyAtlas VN không chứa và sẽ không bao giờ chứa:

- Máy quét mục tiêu Internet, hoặc bất kỳ ô nhập "target" nào để phần mềm tự đi truy vấn.
- Công cụ tự động săn bounty hoặc tự động khai thác.
- Kho payload phá hoại.
- Công cụ credential stuffing, phishing, malware builder, DoS/DDoS toolkit.
- Công cụ che giấu hoạt động hoặc né phát hiện.
- Công cụ gửi báo cáo hàng loạt.
- Lời giải sao chép từ lab của bên thứ ba.

Ứng dụng **không thực hiện bất kỳ request mạng nào tới hạ tầng của bên thứ ba**
trong lúc chạy. Liên kết ngoài chỉ được mở bằng thao tác chủ động của người dùng.

## 3. Người dùng mục tiêu

| Nhóm                    | Nhu cầu chính                                               |
| ----------------------- | ----------------------------------------------------------- |
| Người mới hoàn toàn     | Biết bắt đầu từ đâu, tránh học lệch, tránh vi phạm pháp lý  |
| Người đã biết web       | Mở rộng sang API, Identity, Mobile, Cloud, Native, Web3, AI |
| Người đang săn bounty   | Checklist theo ngữ cảnh, kỹ năng viết report, hiểu triage   |
| Người biên tập nội dung | Quy trình nguồn, metadata, gap analysis                     |

## 4. Nguyên tắc thiết kế

1. **Hợp pháp và an toàn trước tiên.** Mọi lab đều có `allowedTargetsNoteVi`.
2. **Không đồng nhất Bug Bounty với Web Security.** Web chỉ là 1 trong 24 domain.
3. **Chuỗi kiến thức, không phải danh sách link.** Mỗi lĩnh vực đi theo 12 bước
   (xem `KNOWLEDGE_TAXONOMY.md` §2).
4. **Trung thực về trạng thái.** Nội dung chưa rà soát là `draft`, không phải `verified`.
5. **Không hứa hẹn thu nhập.** Không có bất kỳ con số payout nào trong sản phẩm.
6. **Dữ liệu người dùng ở lại máy người dùng.** Không backend, không telemetry.
7. **Số liệu luôn tính từ dữ liệu.** Không hard-code thống kê trong UI hay README.

## 5. Phạm vi MVP

### Có trong MVP

- 24 knowledge domain (A–X) với safety note riêng.
- Track / module / concept / weakness / resource / lab / tool / checklist / quiz /
  report exercise / triage scenario, tất cả lưu dưới dạng dữ liệu có schema.
- Onboarding + cam kết an toàn bắt buộc.
- Diagnostic assessment sinh skill profile.
- Knowledge Atlas (đồ thị + list view thay thế cho mobile).
- Learning dashboard "Hôm nay học gì?".
- Resource Library với 13 bộ lọc.
- Lab Hub với cảnh báo chi phí / cleanup.
- Tool Library.
- Checklist Workspace theo ngữ cảnh.
- Report Builder xuất Markdown / JSON / plain text.
- Severity Lab và Triage Simulator.
- Gap Analysis.
- Tìm kiếm tiếng Việt không dấu.
- IndexedDB có schema version, migration, export/import, redaction.
- Dark/light mode, responsive từ 360 px, keyboard navigation.

### Không có trong MVP

- Backend, tài khoản, đồng bộ đám mây.
- PWA offline installability (dự kiến sau MVP, xem `ROADMAP.md`).
- Đa ngôn ngữ giao diện (tiếng Việt là ngôn ngữ chính).
- Nội dung do cộng đồng đóng góp trực tiếp trong ứng dụng.

## 6. Chỉ tiêu số lượng

Chỉ tiêu MVP đầy đủ theo đặc tả nằm trong `ROADMAP.md`. Số lượng **thực tế hiện có**
không được viết tay ở bất kỳ đâu — nó được sinh bởi `npm run coverage:report`
và lưu tại `reports/coverage.md`. Nếu một con số xuất hiện trong tài liệu mà không
đến từ script đó, đấy là lỗi.

Nguyên tắc: **giảm số lượng còn hơn bịa nội dung.** Mọi mục chưa được biên tập đầy đủ
phải mang `contentStatus: "draft"` và xuất hiện trong gap analysis.

## 7. Kiến trúc ở mức sản phẩm

```text
Người dùng (trình duyệt)
  ├── React SPA (HashRouter, GitHub Pages)
  ├── Dữ liệu kiến thức: TypeScript module, validate bằng Zod lúc khởi động (dev) và trong test
  ├── Trạng thái học: IndexedDB (có migration) + LocalStorage cho setting nhỏ
  └── Không có network call ra ngoài
```

Chi tiết kỹ thuật: `DATA_SCHEMA.md` và `IMPLEMENTATION_PLAN.md`.

## 8. Đo lường thành công

- Người học mở app lần đầu biết được bước tiếp theo trong dưới 2 phút.
- 100% lab hiển thị phạm vi hợp pháp trước khi mở liên kết.
- Gap analysis luôn phản ánh đúng dữ liệu hiện tại.
- `npm run qa` xanh trên CI.
