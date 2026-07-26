# SAFETY — Quy tắc an toàn khi dùng BountyAtlas VN

Tài liệu này dành cho **người học**. Mô hình an toàn ở mức kỹ thuật nằm trong
`SAFETY_MODEL.md`.

## 1. Tuyên bố an toàn bắt buộc

> Chỉ kiểm thử hệ thống do bạn sở hữu, phòng lab được thiết kế để thực hành,
> thiết bị thuộc quyền sở hữu của bạn, testnet/local chain, hoặc tài sản được một
> chương trình còn hiệu lực cho phép rõ ràng. Luôn đọc phạm vi, giới hạn kỹ thuật,
> safe harbor, quy định xử lý dữ liệu và điều khoản công bố trước khi thử nghiệm.

Bạn phải xác nhận đã đọc tuyên bố này trước khi mở Lab Hub, Checklist Workspace,
Report Builder, Severity Lab và Triage Simulator.

## 2. Chín quy tắc dừng kiểm thử

Dừng ngay khi:

1. Bạn chạm tới dữ liệu của người khác.
2. Có dấu hiệu gây suy giảm dịch vụ.
3. Phải vượt quá PoC tối thiểu mới chứng minh được.
4. Phải thay đổi hoặc xoá dữ liệu.
5. Phải gửi email hoặc tin nhắn hàng loạt.
6. Phải thao tác lên tài khoản thật của người khác.
7. Phải tác động tới nhà cung cấp bên thứ ba.
8. Chính sách chương trình không rõ ràng.
9. Bạn không chắc asset nằm trong phạm vi.

Vượt quá PoC tối thiểu là ranh giới giữa nghiên cứu thiện chí và hành vi có thể bị
coi là tấn công. Nó có thể làm bạn mất bảo vệ safe harbor.

## 3. Phần mềm này không làm gì

- Không có ô nhập mục tiêu.
- Không quét, không khai thác, không gửi request tới hạ tầng bên thứ ba.
- Không lưu payload phá hoại.
- Không hướng dẫn phishing, credential stuffing, tạo malware, DoS/DDoS hay né phát hiện.
- Không tự gửi báo cáo.
- Không sao chép lời giải lab.

Liên kết ngoài chỉ mở khi bạn chủ động bấm.

## 4. Ràng buộc riêng theo lĩnh vực

| Lĩnh vực                         | Ràng buộc bổ sung                                                          |
| -------------------------------- | -------------------------------------------------------------------------- |
| Cloud, container, chuỗi cung ứng | Tài khoản riêng cho việc học, đặt cảnh báo chi phí, dọn dẹp sau khi xong   |
| Mạng, phần cứng, IoT             | Chỉ thiết bị và dải địa chỉ thuộc sở hữu của bạn                           |
| Wireless và RF                   | Quy định khác nhau theo quốc gia; không gây nhiễu, không phát trái phép    |
| Automotive                       | Không thử trên phương tiện đang vận hành, không chạm hệ thống an toàn      |
| ICS/OT                           | Không bao giờ thử trên hạ tầng vận hành thật; chỉ simulator hoặc bench lab |
| Web3                             | Chỉ testnet hoặc chain cục bộ; ví riêng không chứa tài sản thật            |
| AI/LLM                           | Không dùng dữ liệu người thật, không tạo chi phí suy luận lớn              |
| Email và SaaS                    | Không gửi thư giả mạo hay tin nhắn hàng loạt trong bất kỳ hoàn cảnh nào    |
| Quyền riêng tư                   | Không tải hàng loạt dữ liệu; xoá dữ liệu đã tiếp xúc sau khi báo cáo       |

## 5. Dữ liệu của bạn

- Toàn bộ tiến trình, ghi chú, bằng chứng và bản nháp báo cáo nằm trong IndexedDB
  trên máy bạn.
- Không có backend, không có tài khoản, không có telemetry.
- Ứng dụng cảnh báo khi ghi chú của bạn trông giống token, khoá hay cookie phiên.
- Chức năng xuất dữ liệu có tuỳ chọn loại bỏ nội dung nhạy cảm.
- Cài Settings có nút xoá toàn bộ dữ liệu, yêu cầu xác nhận hai bước.

## 6. Nếu bạn vô tình đi quá giới hạn

1. Dừng ngay lập tức.
2. Ghi lại chính xác việc đã xảy ra và thời điểm.
3. Không thu thập thêm gì nữa.
4. Xoá dữ liệu đã tiếp xúc.
5. Chủ động báo cho chương trình, kèm mô tả trung thực và hành động giảm thiểu.

Chủ động báo cáo gần như luôn là cách xử lý tốt hơn im lặng.

## 7. Báo cáo vấn đề bảo mật của chính dự án này

Nếu bạn tìm thấy vấn đề bảo mật trong bản thân ứng dụng BountyAtlas VN, hãy dùng
kênh báo cáo riêng tư của repository thay vì mở public issue.
