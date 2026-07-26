# ROADMAP

> Số lượng nội dung **hiện có** không nằm trong tệp này. Nó được sinh bởi
> `npm run coverage:report` và lưu tại `reports/coverage.md`.
> Tệp này chỉ nêu **mục tiêu** và **thứ tự ưu tiên**.

## Trạng thái hiện tại

Phiên bản 0.1.0 là bản nền tảng: đầy đủ 24 lĩnh vực, toàn bộ chức năng phần mềm,
và nội dung ở mức bộ khung có chất lượng cho mọi lĩnh vực.

Phần lớn nội dung mang `contentStatus: 'draft'` — đã viết nhưng chưa được đối
chiếu từng câu với nguồn. Đây là tuyên bố trung thực. Danh sách đầy đủ nằm trong
`reports/coverage.md`.

## Chỉ tiêu MVP theo đặc tả gốc

| Hạng mục        | Chỉ tiêu MVP |
| --------------- | ------------ |
| Domain          | 24           |
| Track           | 60           |
| Module          | 160          |
| Concept         | 250          |
| Weakness        | 150          |
| Resource        | 180          |
| Lab             | 45           |
| Checklist       | 40           |
| Câu hỏi quiz    | 300          |
| Report exercise | 40           |
| Triage scenario | 20           |
| Tool profile    | 15           |

So sánh giữa chỉ tiêu và thực tế nằm ở mục 2 của `reports/coverage.md`.
Nguyên tắc: **giảm số lượng còn hơn bịa nội dung.**

## Ưu tiên tiếp theo

### Ưu tiên 1 — Lấp khoảng trống đã biết

Ba loại cảnh báo chiếm phần lớn danh sách khoảng trống hiện tại:

1. `MODULE_NO_QUIZ` — module chưa có bài tự đánh giá.
2. `MODULE_NO_LAB` — module chưa có lab thực hành.
3. `MODULE_NO_REPORT_EXERCISE` — module chưa có bài tập viết báo cáo.

Thứ tự lấp: bắt đầu từ các lĩnh vực `core` (A, B, C, D, E, F, G, H, J, W), rồi tới
`advanced`, cuối cùng là `specialist`.

### Ưu tiên 2 — Rà soát nguồn

Chuyển nguồn từ `draft` sang `verified` bằng cách mở từng nguồn và đối chiếu.
Danh sách nguồn chưa rà soát nằm ở mục 6 của `reports/coverage.md`.

Mục tiêu: 100% nguồn có `sourceClass`, và tỷ lệ `verified` tăng dần theo từng đợt
biên tập có ghi ngày.

### Ưu tiên 3 — Mở rộng concept và weakness

Tăng số concept và weakness để đạt mật độ trong đặc tả, ưu tiên các lĩnh vực có
`weaknessCount` thấp trong ma trận bao phủ.

### Ưu tiên 4 — Nội dung specialist

Bốn lĩnh vực `specialist` (P Wireless, Q Automotive, R ICS/OT, X Emerging) hiện có
bộ khung tối thiểu: prerequisite, cảnh báo an toàn, checklist và bài tập báo cáo.
Mở rộng chúng chỉ khi đủ bảy điều kiện trong `KNOWLEDGE_TAXONOMY.md` §5.

## Mục tiêu bản 1.0

- Mọi lĩnh vực `core` có đủ concept, phương pháp, lab, checklist, remediation và
  bài tập báo cáo.
- Ít nhất 80% module `core` có lab.
- 100% module `core` có bài đánh giá.
- 100% weakness có root cause và remediation. _(đã đạt)_
- 100% lab có metadata an toàn. _(đã đạt)_
- 100% cloud lab có cleanup và cảnh báo chi phí. _(đã đạt)_
- 100% nguồn có `sourceClass`. _(đã đạt)_
- Không có tham chiếu treo. _(đã đạt)_
- Không có chu trình prerequisite. _(đã đạt)_
- Build, test và deploy thành công. _(đã đạt)_

## Sau MVP

Các hạng mục dưới đây **không** nằm trong MVP:

- PWA và khả năng dùng ngoại tuyến.
- Giao diện đa ngôn ngữ.
- Lịch ôn tập giãn cách dựa trên đường cong quên.
- Xuất kế hoạch học ra định dạng lịch.
- Chế độ đóng góp nội dung ngay trong ứng dụng.

Các hạng mục sau sẽ **không bao giờ** được thêm vào, bất kể phiên bản:

- Ô nhập mục tiêu hoặc bất kỳ chức năng quét nào.
- Công cụ khai thác chạy trong trình duyệt.
- Kho payload phá hoại.
- Chức năng tự gửi báo cáo.
- Telemetry mặc định.

## Nhịp rà soát

- Chạy `npm run check:links` hằng tháng và commit lại `reports/link-check.md`.
- Rà soát nội dung theo từng lĩnh vực, mỗi lĩnh vực ít nhất một lần mỗi 12 tháng.
- Cập nhật `PRODUCT.contentReviewDate` sau mỗi đợt rà soát lớn.
