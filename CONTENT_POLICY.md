# CONTENT_POLICY — Chính sách nội dung

## 1. Nội dung được phép

BountyAtlas VN chỉ chứa:

- Mô tả kiến trúc hệ thống, trust boundary và bề mặt tấn công.
- Nguyên nhân gốc của các nhóm điểm yếu.
- Dấu hiệu nhận biết và **nguyên tắc** xác minh an toàn.
- Nguyên tắc khắc phục.
- Metadata của nguồn học và lab, kèm mô tả tiếng Việt do dự án tự biên soạn.
- Checklist dạng câu hỏi và quan sát.
- Bài tập tự đánh giá và bài tập viết báo cáo.

## 2. Nội dung bị cấm tuyệt đối

Không được đưa vào dự án:

- Payload khai thác sẵn dùng cho phần mềm đang vận hành.
- Bộ khai thác nhắm tới sản phẩm cụ thể.
- Hướng dẫn phishing hoặc mẫu thư lừa đảo.
- Công cụ hoặc hướng dẫn credential stuffing.
- Mã hoặc hướng dẫn tạo malware.
- Công cụ hoặc hướng dẫn tấn công từ chối dịch vụ.
- Kỹ thuật né phát hiện nhằm mục đích che giấu hoạt động.
- Hướng dẫn gây mất điều khiển hoặc gián đoạn hệ thống công nghiệp và phương tiện.
- Lời giải lab sao chép từ nhà cung cấp.
- Tài liệu lậu hoặc nội dung khoá học trả phí đăng lại.

`scripts/validate-data` chạy bộ lọc từ khoá để chặn các dạng nội dung này. Vi phạm
làm fail CI.

## 3. Quy tắc viết nội dung kỹ thuật

### 3.1 Điểm yếu (`Weakness`)

Mỗi bản ghi phải có nguyên nhân gốc và nguyên tắc khắc phục. Trường
`safeValidationPrinciplesVi` mô tả **cách xác minh an toàn**, không phải payload.

Sai: "Gửi chuỗi X vào tham số Y để lấy toàn bộ bảng người dùng."
Đúng: "Ưu tiên phép thử logic đúng/sai chỉ đọc; chứng minh bằng một giá trị vô hại
như phiên bản cơ sở dữ liệu; không trích xuất dữ liệu người dùng."

### 3.2 Lộ trình học của module (`studyPlan`)

**Dự án không tự viết bài giảng và không sao chép nội dung của nguồn.** Nội dung
chính của mỗi module là danh sách nguồn học uy tín, xếp theo thứ tự nên học;
người học bấm vào để mở và học tại chính nguồn gốc.

Đây là lựa chọn có chủ đích. Một bài giảng tự viết sẽ lạc hậu ngay khi tiêu chuẩn
đổi, và không bao giờ tốt bằng tài liệu gốc của OWASP, IETF hay chính nhà cung cấp.
Việc dự án làm được tốt hơn là **chọn đúng nguồn, xếp đúng thứ tự, và nói rõ vì
sao học nguồn đó ở bước đó**.

Yêu cầu với mỗi bước:

- `resourceId` trỏ tới một nguồn có thật trong danh mục.
- `roleVi` nói vì sao học nguồn này, **ở đúng bước này** — không phải nhãn chung
  chung như "tài liệu tham khảo". Đây là phần dự án tự viết.
- `necessity` phân biệt `core` (cần để nắm module) với `optional` (mở rộng).
- Thứ tự học là vị trí trong mảng, không có trường thứ tự riêng.

Yêu cầu với URL:

- **Trỏ thẳng tới đúng chương, đúng khoá học hoặc đúng nhóm lab**, không trỏ vào
  trang chủ chung chung.
- **Không được bịa URL.** Mọi URL phải qua `npm run check:links`, và link không
  phản hồi thì gỡ hoặc sửa chứ không giữ lại.
- Khi script không kết nối được tới một host (trạng thái `unknown`), người biên
  tập phải tự mở link để xác minh trước khi giữ.

Mỗi nguồn đưa vào lộ trình phải có đủ siêu dữ liệu để người học quyết định trước
khi bấm: tên, nhà cung cấp, trình độ, ngôn ngữ, miễn phí hay trả phí, có thực hành
hay không. `language` và `accessType` không được để `unknown`.

Test trong `tests/dataset.test.ts` thực thi các ràng buộc này.

### 3.3 Checklist

Mỗi mục là một **câu hỏi** hoặc một **quan sát**, kèm lý do vì sao câu hỏi đó quan
trọng. Mục có rủi ro cao phải có `stopConditionVi`.

Sai: "Thử payload A, B, C ở ô tìm kiếm."
Đúng: "Dữ liệu bạn nhập xuất hiện ở những ngữ cảnh đầu ra nào?"

### 3.4 Lab

Mỗi lab phải có `allowedTargetsNoteVi` nêu chính xác mục tiêu nào được phép đụng
vào. Lab chạy trên tài khoản cloud của người học phải có đầy đủ metadata chi phí,
tài khoản riêng, cảnh báo môi trường sản xuất và hướng dẫn dọn dẹp.

### 3.5 Bài tập báo cáo

Kịch bản phải đặt trong lab hoặc trong phạm vi được phép, và phải thể hiện được
nguyên tắc PoC tối thiểu. Rubric bắt buộc có.

## 4. Nguồn và bản quyền

- Chỉ lưu metadata: tiêu đề gốc, URL, nhà cung cấp, loại, ngôn ngữ, ghi chú giấy phép.
- Mô tả tiếng Việt phải do dự án tự viết, không dịch máy nguyên văn nguồn.
- Không sao chép toàn bộ bài viết, sách, PDF, transcript video.
- Không đăng lại nội dung khoá học trả phí.
- Trích dẫn ngắn phải có nguồn rõ ràng và chỉ ở mức cần thiết để hiểu ngữ cảnh.

Thứ tự ưu tiên nguồn và quy tắc với nguồn cộng đồng: xem `SOURCE_REGISTRY.md`.

## 5. Trung thực về trạng thái

- Không đặt `contentStatus: 'verified'` khi chưa thực sự mở nguồn và đối chiếu.
- `linkLastChecked` không thay thế `lastContentReviewed`.
- Nội dung mới soạn mặc định là `draft`.
- Số lượng nội dung không được viết tay ở bất kỳ tài liệu nào; nó đến từ
  `npm run coverage:report`.

## 6. Ngôn ngữ và giọng văn

- Tiếng Việt, câu ngắn, không dùng từ gây hoang mang.
- Không hứa hẹn thu nhập, không dự đoán tiền thưởng.
- Không tuyên bố được bất kỳ tổ chức nguồn nào bảo trợ.
- Không tuyên bố bao phủ tuyệt đối; luôn kèm ngày rà soát.

## 7. Khi không chắc

Nếu bạn không chắc một nội dung có nên đưa vào hay không, hãy tự hỏi:

> Nội dung này giúp người học **hiểu và phòng thủ**, hay giúp một người **gây hại
> nhanh hơn** mà không cần hiểu?

Nếu là vế thứ hai, không đưa vào.
