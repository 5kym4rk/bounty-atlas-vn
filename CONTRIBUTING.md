# CONTRIBUTING — Hướng dẫn đóng góp

## 1. Trước khi bắt đầu

Đọc ba tài liệu này:

- `SAFETY.md` — quy tắc an toàn.
- `CONTENT_POLICY.md` — nội dung nào được phép, nội dung nào bị cấm.
- `SOURCE_REGISTRY.md` — quy tắc chọn và ghi nhận nguồn.

Đóng góp vi phạm chính sách nội dung sẽ bị từ chối bất kể chất lượng kỹ thuật.

## 2. Dựng môi trường

```bash
npm install
npm run dev
```

Yêu cầu Node 20 trở lên.

## 3. Lệnh bắt buộc trước khi gửi thay đổi

```bash
npm run lint
npm run test
npm run validate:data
npm run build
```

Hoặc chạy gộp:

```bash
npm run qa
```

Nếu bạn đổi dữ liệu, chạy thêm:

```bash
npm run coverage:report
```

và commit `reports/coverage.md` cùng thay đổi của bạn.

## 4. Quy tắc khi gặp lỗi

- Sửa lỗi gốc, **không** tắt hoặc bỏ qua test.
- **Không** dùng `any` để né kiểu; ESLint chặn điều này.
- **Không** bỏ qua validator.
- **Không** hard-code thống kê; số liệu đến từ `coverage:report`.
- **Không** tạo dữ liệu rỗng chỉ để đạt số lượng.
- **Không** đánh dấu `verified` khi chưa thực sự mở nguồn.

## 5. Thêm nội dung mới

### 5.1 Thêm một module

1. Tạo module trong `src/data/modules/<nhóm>.ts` bằng `defineModule`.
2. Thêm ID module vào `moduleIds` của track tương ứng.
3. Bắt buộc có: `learningObjectives` (ít nhất một), `safetyNoteVi`, `difficulty`.
4. Nếu có liên kết chéo (concept, weakness, checklist, bài tập báo cáo), khai báo
   trong `src/data/links.ts` chứ không nhét vào file module.
5. Chạy `npm run validate:data`.

Quan hệ với quiz, lab và nguồn được **suy ra tự động** từ `quiz.moduleId`,
`lab.moduleIds` và `resource.moduleIds` — không khai báo hai lần.

### 5.2 Thêm một nguồn

1. **Mở nguồn và đọc thật.** Đây là bước không thể bỏ qua.
2. Viết `descriptionVi` bằng lời của bạn; không dịch máy nguyên văn.
3. Điền `sourceClass`, `sourceOriginNoteVi`, `licenseNote`, `contentReuseAllowed`.
4. Đặt `lastContentReviewed` là ngày bạn đọc và `contentStatus: 'verified'`.
5. Chạy `npm run check:links` rồi `npm run validate:data`.

Nguồn `community` phải đáp ứng đủ chín điều kiện trong `SOURCE_REGISTRY.md` §2.

### 5.3 Thêm một lab

Bắt buộc có `allowedTargetsNoteVi` và `safetyNoteVi`. Lab chạy trên tài khoản cloud
của người học (`environment: 'cloud-owned-account'`) bắt buộc có đủ metadata
`cloud`: chi phí ước tính, cảnh báo hoá đơn, tài khoản riêng, cảnh báo môi trường
sản xuất, ghi chú vùng và hướng dẫn dọn dẹp.

Không thêm lời giải lab vào dự án.

### 5.4 Thêm một điểm yếu

Bắt buộc có `rootCauseVi`, `safeValidationPrinciplesVi`, `impactDimensions` và
`remediationPrinciplesVi`.

`safeValidationPrinciplesVi` mô tả **nguyên tắc xác minh an toàn**, không phải
payload. Nếu bạn định viết một chuỗi khai thác cụ thể, dừng lại và viết lại thành
nguyên tắc.

### 5.5 Mở một specialization mới

Chỉ chuyển domain từ `planned` sang `active` khi đủ bảy điều kiện trong
`KNOWLEDGE_TAXONOMY.md` §5. Nếu chưa đủ, để nguyên trạng thái `planned` — điều đó
trung thực hơn.

## 6. Quy ước mã nguồn

- TypeScript strict; không `any`.
- Không dùng `dangerouslySetInnerHTML`; ESLint chặn bằng `no-restricted-syntax`.
- Liên kết ngoài phải đi qua component `ExternalLink`.
- URL mới phải qua `isSafeExternalUrl`.
- Tên sản phẩm đọc từ `src/config/product.ts`, không hard-code chuỗi.
- Tuyên bố an toàn đọc từ `src/config/safety.ts`.
- Prettier quyết định định dạng: `npm run format`.

## 7. Kiểm thử

Thay đổi ở `src/utils/`, `src/validators/`, `src/storage/` hoặc `src/migrations/`
phải kèm test. Thay đổi schema lưu trữ phải kèm migration **và** test cho migration
đó.

## 8. Commit và pull request

- Commit message viết bằng tiếng Việt hoặc tiếng Anh, mô tả **vì sao** chứ không
  chỉ **cái gì**.
- Một pull request nên tập trung vào một chủ đề.
- Mô tả PR nêu rõ: bạn đã mở nguồn nào, ngày nào, và đã chạy lệnh QA nào.

## 9. Báo cáo vấn đề bảo mật của chính dự án

Không mở public issue. Dùng chức năng báo cáo riêng tư của repository.
