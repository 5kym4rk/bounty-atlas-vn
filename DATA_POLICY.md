# DATA_POLICY — Chính sách dữ liệu

## 1. Hai loại dữ liệu

| Loại                                              | Nơi lưu                       | Ai kiểm soát         |
| ------------------------------------------------- | ----------------------------- | -------------------- |
| Dữ liệu kiến thức (domain, module, nguồn, lab…)   | Trong mã nguồn, `src/data/`   | Người biên tập dự án |
| Dữ liệu người học (tiến trình, ghi chú, báo cáo…) | IndexedDB trên máy người dùng | Chính người dùng     |

## 2. Dữ liệu người học

### 2.1 Nguyên tắc

- **Không có backend.** Ứng dụng không gửi dữ liệu người học đi đâu.
- **Không có tài khoản.** Không thu thập email, tên hay bất kỳ định danh nào.
- **Không có telemetry.** Không có analytics, không có script bên thứ ba.
- Dữ liệu chỉ rời khỏi máy khi chính người dùng bấm xuất và chọn nơi lưu tệp.

### 2.2 Những gì được lưu

| Store           | Nội dung                                             |
| --------------- | ---------------------------------------------------- |
| `progress`      | Trạng thái học của từng module                       |
| `notes`         | Ghi chú gắn với module, lab, checklist hoặc báo cáo  |
| `evidence`      | Tham chiếu bằng chứng; ảnh chỉ ở dung lượng giới hạn |
| `checklistRuns` | Phiên chạy checklist và trạng thái từng mục          |
| `reports`       | Bản nháp báo cáo lỗ hổng                             |
| `quizAttempts`  | Kết quả các lần làm quiz                             |
| `profile`       | Hồ sơ onboarding, xác nhận an toàn, hồ sơ kỹ năng    |
| `meta`          | Phiên bản schema và thời điểm migrate                |

LocalStorage chỉ giữ cài đặt giao diện nhỏ: chế độ màu, kiểu hiển thị Atlas.

### 2.3 Bảo vệ trước việc người dùng tự lưu bí mật

Ứng dụng quét nội dung ghi chú và bản nháp báo cáo để phát hiện chuỗi trông giống
JWT, khoá truy cập, private key, header Authorization, token nền tảng và cookie
phiên. Khi phát hiện, ứng dụng hiện cảnh báo và giải thích rủi ro.

Đây là **cảnh báo hỗ trợ**, không phải bộ lọc bảo mật. Trách nhiệm cuối vẫn thuộc
về người dùng.

### 2.4 Xuất và nhập

- Xuất tạo tệp JSON có `app`, `schemaVersion`, `exportedAt`, `redacted` và `data`.
- Tuỳ chọn **redaction** loại bỏ ghi chú, bằng chứng và bản nháp báo cáo, đồng thời
  che các chuỗi nhạy cảm trong phần còn lại.
- Nhập phải qua ba bước: kiểm tra kích thước, validate bằng Zod, xem trước xung đột.
- Người dùng chọn **gộp** hoặc **ghi đè**; không có chế độ tự động.
- Giới hạn kích thước tệp nhập được khai báo tại `src/config/safety.ts`.

### 2.5 Xoá dữ liệu

Trang Cài đặt có chức năng xoá toàn bộ dữ liệu người học, yêu cầu tick xác nhận
trước khi nút được kích hoạt. Thao tác không hoàn tác được.

## 3. Dữ liệu kiến thức

### 3.1 Nguyên tắc biên tập

- Chỉ lưu metadata nguồn và mô tả tiếng Việt tự biên soạn.
- Ba loại ngày độc lập: `metadataLastUpdated`, `lastContentReviewed`, `linkLastChecked`.
- `contentStatus: 'verified'` chỉ được đặt khi người biên tập đã thực sự mở nguồn.
- Thống kê không được hard-code; luôn sinh từ `npm run coverage:report`.

### 3.2 Ràng buộc kỹ thuật

Xem `DATA_SCHEMA.md` §5 để có danh sách đầy đủ các ràng buộc mà validator thực thi,
gồm ID trùng, tham chiếu treo, chu trình prerequisite, module thiếu mục tiêu hoặc
safety note, lab thiếu ghi chú mục tiêu, cloud lab thiếu cleanup, weakness thiếu
remediation, report exercise thiếu rubric và quiz không có đáp án hợp lệ.

### 3.3 URL

Mọi URL trong dữ liệu phải dùng `https:`, trừ `http://localhost` và
`http://127.0.0.1` dành cho lab chạy cục bộ. `javascript:`, `data:`, `vbscript:`,
`file:` và `blob:` bị từ chối ở cả validator lẫn thời điểm render.

## 4. Dữ liệu của bên thứ ba

Dự án **không** lưu trữ:

- Dữ liệu người dùng của bất kỳ hệ thống nào.
- Bằng chứng lỗ hổng của chương trình bug bounty nào.
- Bản sao nội dung có bản quyền của nguồn học.
- Tệp thực thi của công cụ.

## 5. Vòng đời dữ liệu trong ứng dụng

```text
Người dùng nhập → validate bằng Zod → ghi vào IndexedDB → hiển thị lại dưới dạng text node
                                                        → (tuỳ chọn) xuất ra tệp trên máy
```

Không có nhánh nào đi ra mạng.

## 6. Khi schema thay đổi

- Tăng `SCHEMA_VERSION` trong `src/storage/schema.ts`.
- Thêm một migration vào `src/migrations/index.ts` với `from` bằng phiên bản cũ.
- Migration phải idempotent và phải có test.
- Ghi lại thay đổi trong `CHANGELOG.md`.
