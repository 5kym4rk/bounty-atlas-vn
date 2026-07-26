# SAFETY_MODEL — Mô hình an toàn BountyAtlas VN

## 1. Tuyên bố an toàn bắt buộc

Chuỗi sau là **nguồn duy nhất**, khai báo tại `src/config/safety.ts` và hiển thị
tại onboarding, Lab Hub, Checklist Workspace và Report Builder:

> Chỉ kiểm thử hệ thống do bạn sở hữu, phòng lab được thiết kế để thực hành,
> thiết bị thuộc quyền sở hữu của bạn, testnet/local chain, hoặc tài sản được một
> chương trình còn hiệu lực cho phép rõ ràng. Luôn đọc phạm vi, giới hạn kỹ thuật,
> safe harbor, quy định xử lý dữ liệu và điều khoản công bố trước khi thử nghiệm.

Người dùng phải xác nhận đã đọc (`profile.safetyAcknowledgedAt`) **trước khi**
mở nội dung thực hành: Lab Hub, Checklist Workspace, Report Builder, Triage Simulator.
Cổng chặn nằm ở `src/components/safety/SafetyGate.tsx`.

## 2. Ranh giới năng lực sản phẩm

| Được phép                                        | Bị cấm tuyệt đối                                     |
| ------------------------------------------------ | ---------------------------------------------------- |
| Mô tả kiến trúc, trust boundary, bề mặt tấn công | Cung cấp exploit sẵn dùng cho phần mềm đang vận hành |
| Nêu nguyên tắc xác minh an toàn                  | Cung cấp payload phá hoại                            |
| Liệt kê lab hợp pháp kèm URL chính thức          | Nhận "target" của người dùng và tự đi truy vấn       |
| Dạy đọc output công cụ                           | Chạy scanner/exploit trong trình duyệt               |
| Dạy viết report                                  | Tự gửi report tới chương trình                       |
| Dạy phân loại severity                           | Khẳng định số tiền thưởng                            |

**Không có ô nhập mục tiêu nào trong toàn bộ ứng dụng.** Đây là ràng buộc kiến trúc:
ứng dụng không có lớp networking tới bên thứ ba.

## 3. Quy tắc dừng kiểm thử (dạy trong domain A, nhắc trong Checklist Workspace)

Phải dừng và báo cáo/hỏi chương trình khi:

1. Chạm tới dữ liệu của người khác.
2. Có dấu hiệu gây suy giảm dịch vụ.
3. Phải vượt quá PoC tối thiểu mới chứng minh được.
4. Phải thay đổi hoặc xoá dữ liệu.
5. Phải gửi email/tin nhắn hàng loạt.
6. Phải thao tác lên tài khoản thật của người khác.
7. Phải tác động tới nhà cung cấp bên thứ ba.
8. Chính sách không rõ ràng.
9. Không chắc asset nằm trong scope.

Checklist Workspace có trạng thái riêng `stopped-scope` để người học ghi lại việc dừng.

## 4. Phân loại rủi ro nội dung theo domain

| Mức                         | Domain           | Ràng buộc bổ sung                                                                   |
| --------------------------- | ---------------- | ----------------------------------------------------------------------------------- |
| Thấp                        | A, B, C, M, W    | Không                                                                               |
| Trung bình                  | D, E, F, G, U, V | Lab bắt buộc là môi trường có kiểm soát                                             |
| Cao (chi phí)               | H, I, N          | Bắt buộc billing warning + cleanup + tài khoản riêng                                |
| Cao (pháp lý)               | J, L, O, P       | Chỉ thiết bị/binary thuộc sở hữu; cảnh báo quy định RF theo quốc gia                |
| Rất cao (an toàn con người) | Q, R             | Chỉ simulator/test bench; cấm thử trên phương tiện đang vận hành và hạ tầng OT thật |
| Cao (tài sản)               | S                | Chỉ testnet/local chain; không giao dịch trên contract thật                         |
| Đặc thù                     | T                | Không khai thác dữ liệu người dùng thật, không gây chi phí lớn                      |

Domain P nêu rõ: **quy định RF khác nhau theo quốc gia**, không mặc định kỹ thuật RF
được phép ở mọi nơi. Domain Q và R nêu rõ: không can thiệp hệ thống an toàn.

## 5. An toàn của chính ứng dụng

| Rủi ro                    | Biện pháp                                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| XSS qua nội dung          | Không dùng `dangerouslySetInnerHTML`; ESLint chặn bằng `no-restricted-syntax`. Markdown render bằng renderer tự viết chỉ tạo phần tử React |
| URL độc hại               | `assertSafeUrl()` chỉ cho `https:` (và `http://localhost` cho lab cục bộ); `javascript:`/`data:` bị từ chối ở validator và runtime         |
| Rò rỉ referrer            | `rel="noopener noreferrer"`, `<meta name="referrer" content="no-referrer">`                                                                |
| Script bên thứ ba         | CSP `script-src 'self'`; không CDN, không font ngoài, không analytics                                                                      |
| Import độc hại            | Zod validate + giới hạn kích thước (`MAX_IMPORT_BYTES`) + conflict preview                                                                 |
| Người dùng lưu secret     | `detectSensitiveString()` cảnh báo khi note trông giống token/khoá; export có redaction                                                    |
| Telemetry                 | Không có. Không request ra ngoài lúc chạy                                                                                                  |
| API key                   | Không có key nào trong repo; CodeQL + secret scanning trong CI                                                                             |
| Markdown export injection | Escape ký tự điều khiển và ký tự dẫn đầu công thức (`=`, `+`, `-`, `@`) khi xuất CSV-like                                                  |

## 6. Nội dung bị cấm trong dữ liệu

Script `validate-data` chạy bộ lọc từ khoá để chặn dữ liệu chứa:
hướng dẫn phishing, credential stuffing, malware, DoS/DDoS, né phát hiện, và
lời giải lab sao chép. Vi phạm làm fail CI.

## 7. Bảo vệ dữ liệu người học

- Toàn bộ dữ liệu ở IndexedDB/LocalStorage trên máy người dùng.
- Không upload trong MVP.
- Ảnh bằng chứng giới hạn dung lượng; khuyến khích lưu **reference** thay vì ảnh.
- Export mặc định hỏi có redact note/evidence không.
- Có nút xoá toàn bộ dữ liệu trong Settings, có xác nhận hai bước.

## 8. Không hứa hẹn

Sản phẩm không nêu mức thu nhập, không xếp hạng người dùng theo tiền thưởng,
không gamify theo số lượng mục tiêu đã quét, và không tuyên bố được bất kỳ
tổ chức nguồn nào bảo trợ. Xem `ATTRIBUTION.md`.
