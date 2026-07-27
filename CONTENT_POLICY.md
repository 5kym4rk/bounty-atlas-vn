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

### 3.2 Thân bài học (`lessonVi`)

Mỗi module phải có thân bài học thật, không phải danh sách link. Yêu cầu:

- Mỗi phần có tiêu đề và ít nhất một đoạn văn.
- Nội dung viết bằng lời của dự án, sau khi đối chiếu với nguồn chính thức.
  **Không dịch máy nguyên văn và không sao chép từ nguồn nào.**
- Giải thích **vì sao** chứ không chỉ **là gì**. Người học phải hiểu nguyên nhân
  gốc, không phải thuộc danh sách.
- Ví dụ mã, request hay log phải do dự án tự soạn, dùng dữ liệu giả.
- Phần nói về kiểm thử phải nêu ranh giới an toàn ngay trong đó, không tách rời.
- Không chứa payload khai thác sẵn dùng.

Test trong `tests/dataset.test.ts` thực thi các ràng buộc định lượng: mỗi phần
phải đủ dài, mỗi module phải đủ nội dung, và không module nào dùng chung cấu
trúc bài học với module khác.

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
