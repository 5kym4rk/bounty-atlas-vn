# HANDOVER — Báo cáo bàn giao BountyAtlas VN 0.1.0

Ngày bàn giao: 2026-07-26

Mọi con số trong tài liệu này lấy từ `reports/coverage.md`, sinh bởi
`npm run coverage:report`. Không có số liệu nào được viết tay.

---

## 1. Repository

**https://github.com/5kym4rk/bounty-atlas-vn**

Khởi tạo bằng `git init`, nhánh `main`, không có lịch sử Git của dự án nào khác.
Repository công khai.

## 2. URL GitHub Pages

**https://5kym4rk.github.io/bounty-atlas-vn/**

Đã deploy thành công qua `.github/workflows/deploy.yml`, nguồn Pages đặt ở
GitHub Actions, HTTPS bắt buộc. Đã kiểm chứng trên site thật: trang chủ, hash
route `#/gaps`, CSS và dữ liệu tải đúng, console không lỗi.

Nếu đổi tên repository, sửa `BASE_PATH` trong `deploy.yml` cho khớp. Nếu chuyển
sang user site hoặc custom domain, đặt `BASE_PATH: /`.

## 3. Cây thư mục

```text
bounty-atlas-vn/
├── .github/workflows/     ci.yml, deploy.yml, codeql.yml, link-check.yml
├── public/
│   ├── data/              search-index.json (sinh tự động)
│   └── icons/             atlas.svg
├── reports/               coverage.md, link-check.md (sinh tự động)
├── scripts/
│   ├── validate-data/     kiểm tra toàn vẹn dữ liệu
│   ├── check-links/       kiểm tra liên kết, ghi link-status.generated.ts
│   ├── build-index/       sinh chỉ mục tìm kiếm tĩnh
│   └── coverage-report/   sinh báo cáo độ bao phủ
├── src/
│   ├── app/               App, Layout, store (Zustand)
│   ├── config/            product.ts, safety.ts
│   ├── components/        ui/, safety/
│   ├── data/              dữ liệu kiến thức, chia theo entity
│   ├── pages/             19 trang
│   ├── schemas/           entities.ts (types), zod.ts (validation)
│   ├── storage/           IndexedDB wrapper, export/import
│   ├── migrations/        migration IndexedDB
│   ├── utils/             vietnamese, url, graph, markdown, sensitive, lookups
│   ├── validators/        dataset.ts, coverage.ts
│   └── styles/
├── tests/                 4 tệp test
└── (13 tệp tài liệu ở gốc)
```

## 4. Kiến trúc

React 18 · TypeScript strict · Vite 5 · Tailwind CSS 3 · React Router HashRouter ·
Zustand · Zod · Fuse.js · Vitest · IndexedDB có migration. **Không có backend.**

Ba quyết định đáng chú ý:

- **HashRouter thay vì BrowserRouter** — GitHub Pages không rewrite đường dẫn, nên
  hash tránh lỗi 404 khi người dùng refresh ở route sâu.
- **Zustand thay vì Context + reducer** — ứng dụng có nhiều slice độc lập và nhiều
  component lá chỉ đọc một phần rất nhỏ của state. Context khiến mọi consumer
  re-render khi bất kỳ phần nào đổi; selector của Zustand tránh điều đó mà không
  cần lồng hàng chục provider. Lý do đầy đủ trong `IMPLEMENTATION_PLAN.md` §2.
- **Tách dữ liệu viết tay khỏi dữ liệu sinh tự động** — `linkStatus` và
  `linkLastChecked` nằm trong `link-status.generated.ts` do script ghi, còn
  `contentStatus` và `lastContentReviewed` do người biên tập đặt tay. Nhờ vậy
  "đã kiểm tra liên kết" không bao giờ bị nhầm với "đã rà soát nội dung".

## 5. Danh sách 24 lĩnh vực

| Mã  | Lĩnh vực                                            | Trạng thái |
| --- | --------------------------------------------------- | ---------- |
| A   | Định hướng, pháp lý, đạo đức và vận hành Bug Bounty | core       |
| B   | Kiến thức nền dùng chung                            | core       |
| C   | Phương pháp kiểm thử và quản lý bề mặt tấn công     | core       |
| D   | Web application                                     | core       |
| E   | API                                                 | core       |
| F   | Identity, SSO và enterprise access                  | core       |
| G   | Mobile                                              | core       |
| H   | Cloud                                               | core       |
| I   | Container, Kubernetes và cloud-native               | advanced   |
| J   | Network và infrastructure                           | core       |
| K   | Desktop, thick client và native application         | advanced   |
| L   | Reverse engineering và binary exploitation          | advanced   |
| M   | Source code review và white-box                     | advanced   |
| N   | Software supply chain, CI/CD và package ecosystem   | advanced   |
| O   | IoT, embedded, hardware và firmware                 | advanced   |
| P   | Wireless, Bluetooth, NFC và RF                      | specialist |
| Q   | Automotive và connected vehicles                    | specialist |
| R   | ICS, OT và industrial systems                       | specialist |
| S   | Smart contract, blockchain và Web3                  | advanced   |
| T   | AI, machine learning, LLM và agent security         | advanced   |
| U   | Browser, extension và client platform               | advanced   |
| V   | Email, collaboration, SaaS và enterprise workflow   | advanced   |
| W   | Privacy, data exposure và multi-tenancy             | core       |
| X   | Emerging & specialist                               | specialist |

## 6–14. Số lượng nội dung

| #   | Hạng mục        | Thực tế | Chỉ tiêu MVP | Đạt     |
| --- | --------------- | ------- | ------------ | ------- |
| 6   | Track           | **74**  | 60           | ✅ vượt |
| 7   | Module          | **144** | 160          | ⚠️ 90%  |
| 8   | Concept         | **40**  | 250          | ❌ 16%  |
| 9   | Weakness        | **62**  | 150          | ❌ 41%  |
| 10  | Resource        | **115** | 180          | ⚠️ 64%  |
| 11  | Lab             | **51**  | 45           | ✅ vượt |
| 12  | Checklist       | **28**  | 40           | ⚠️ 70%  |
| 13  | Câu hỏi quiz    | **81**  | 300          | ❌ 27%  |
| 14  | Report exercise | **24**  | 40           | ⚠️ 60%  |

Bổ sung ngoài danh sách trên: 20 triage scenario (đạt chỉ tiêu), 19 tool profile
(vượt chỉ tiêu 15), 24 standard, 16 skill, 8 practical assessment, 9 learning path.

**Nói thẳng:** bốn hạng mục chưa đạt chỉ tiêu MVP. Đặc tả yêu cầu "giảm số lượng
còn hơn bịa nội dung", và tôi đã chọn đúng như vậy — mỗi concept, weakness và câu
hỏi quiz hiện có đều là nội dung thật, có nguyên nhân gốc và giải thích riêng,
không phải bản ghi rỗng tạo ra để đủ số. Khoảng cách còn lại được ghi trong
`ROADMAP.md` với thứ tự ưu tiên cụ thể.

## 15. Kết quả lint

```
npm run lint  →  ESLint, --max-warnings 0  →  PASS, 0 warning
```

Bao gồm rule tự viết chặn `dangerouslySetInnerHTML` và `@typescript-eslint/no-explicit-any: error`.

## 16. Kết quả test

```
npm run test  →  4 tệp test, 59 test  →  59 passed
```

- `dataset.test.ts` — 14 test về toàn vẹn dữ liệu, chu trình prerequisite, cloud
  lab metadata, an toàn URL, ràng buộc domain specialist.
- `utils.test.ts` — 25 test về chuẩn hoá tiếng Việt, kiểm soát URL, phát hiện
  chuỗi nhạy cảm, tiện ích markdown và đồ thị.
- `storage.test.ts` — 10 test về migration IndexedDB và schema dữ liệu người học.
- `ui.test.tsx` — 10 test về render an toàn, gồm kiểm chứng `javascript:` và
  `data:` không bao giờ trở thành thẻ `<a>`.

## 17. Kết quả validation

```
npm run validate:data  →  0 lỗi, 238 cảnh báo  →  PASS
```

238 cảnh báo là **khoảng trống nội dung đã biết**, không phải lỗi:

| Mã cảnh báo                 | Số mục | Nghĩa                               |
| --------------------------- | ------ | ----------------------------------- |
| `MODULE_NO_QUIZ`            | 110    | Module chưa có bài tự đánh giá      |
| `MODULE_NO_LAB`             | 70     | Module chưa có lab                  |
| `MODULE_NO_REPORT_EXERCISE` | 58     | Module chưa có bài tập viết báo cáo |

Trang Gap Analysis và `reports/coverage.md` liệt kê **252** khoảng trống, nhiều hơn
238 vì chúng bổ sung hai loại mà validator không coi là cảnh báo:
`TRACK_NO_PREREQ` (9 track) và `DOMAIN_NO_OFFICIAL_SOURCE` (5 lĩnh vực).

## 18. Kết quả build

```
npm run build  →  tsc -b && vite build  →  PASS in ~5s
dist/index.html    1.21 kB  (gzip 0.62 kB)
dist/assets/*.css 18.99 kB  (gzip 4.23 kB)
dist/assets/*.js 915.19 kB  (gzip 263.35 kB)
```

Bundle JS lớn do toàn bộ dataset kiến thức được nhúng vào bundle. Đây là đánh đổi
có chủ ý: ứng dụng không có backend nên dữ liệu phải đi kèm. Nếu cần tối ưu, bước
tiếp theo là tách dataset thành chunk tải theo route.

## 19. Coverage report

`reports/coverage.md` — sinh tự động, gồm 10 mục: kết quả validator, tổng số lượng,
tỷ lệ bao phủ, ma trận theo lĩnh vực, khoảng trống theo loại, nguồn chưa xác minh,
nguồn quá hạn rà soát, nguồn chưa kiểm tra liên kết, nội dung bản nháp, và lĩnh vực
còn thiếu nội dung.

Tỷ lệ chính:

| Chỉ số                       | Giá trị  |
| ---------------------------- | -------- |
| Module có lab                | 51.4%    |
| Module có bài tập báo cáo    | 59.7%    |
| Module có quiz               | 23.6%    |
| Module có nội dung khắc phục | **100%** |
| Nguồn chính thức             | 75.7%    |
| Nguồn đã xác minh nội dung   | 9.6%     |

CI có bước kiểm tra `reports/coverage.md` khớp với dữ liệu, nên báo cáo không thể
bị bỏ quên khi dữ liệu thay đổi.

## 20. Danh sách nguồn chưa xác minh

**104 trên 115 nguồn chưa được người biên tập mở và đối chiếu nội dung.** Chúng
mang `contentStatus: 'draft'` và `lastContentReviewed: null`. Danh sách đầy đủ ở
mục 6 của `reports/coverage.md`.

**11 nguồn đã thực sự được mở và xác minh** trong đợt biên tập này:

| Nguồn                                         | Nội dung đã xác minh                                                         |
| --------------------------------------------- | ---------------------------------------------------------------------------- |
| PortSwigger Web Security Academy — All Topics | Chia ba nhóm server-side, client-side, advanced; miễn phí, lab cần tài khoản |
| MITRE CWE                                     | Do MITRE/HSSEDI vận hành, tài trợ bởi CISA; có REST API và nhiều view        |
| OWASP MASTG                                   | Tổ chức theo 8 nhóm MASVS; gồm tests, knowledge, best practices, demos       |
| OWASP API Security Top 10                     | Ấn bản 2023, API1 BOLA → API10 Unsafe Consumption of APIs                    |
| FIRST CVSS v4.0                               | Bốn nhóm metric: Base, Threat, Environmental, Supplemental                   |
| OWASP Smart Contract Security                 | Gồm SCSVS và SCSTG; SCSVS chia 11 nhóm control                               |
| OWASP GenAI Security Project                  | Top 10 for LLM Applications bản hiện hành là 2025                            |
| HackerOne Safe Harbor FAQ                     | Phân biệt Gold Standard Safe Harbor và AI Research Safe Harbor               |
| Kubernetes Security Checklist                 | 8 mục từ authn/authz tới admission controllers                               |
| OpenSSF SLSA                                  | Bốn build level; steering group đa tổ chức thuộc OpenSSF                     |
| Bugcrowd VRT (repository)                     | Category/sub-category/variant, P1–P5, ánh xạ CVSS và CWE                     |

Trong quá trình kiểm tra, URL `bugcrowd.com/vulnerability-rating-taxonomy` trả về 404. Repository chính thức của Bugcrowd xác nhận bản phát hành đã chuyển sang một
địa chỉ khác, nhưng địa chỉ đó cũng không truy cập được từ môi trường kiểm tra, nên
dự án trỏ tới **repository** — nguồn tôi kiểm chứng được trực tiếp.

## 21. Danh sách nội dung draft

**334 mục** đang ở trạng thái `draft`, phân bố:

| Thực thể | Số mục |
| -------- | ------ |
| domain   | 24     |
| module   | 144    |
| weakness | 62     |
| resource | 104    |

`draft` nghĩa là **đã viết nhưng chưa đối chiếu từng câu với nguồn**. Nội dung vẫn
dùng được và đã qua toàn bộ ràng buộc validator; trạng thái này được hiển thị công
khai trên từng mục trong ứng dụng chứ không giấu đi.

## 22. Danh sách rủi ro

| #   | Rủi ro                                                  | Mức        | Giảm thiểu hiện có                                                                                                  |
| --- | ------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------- |
| 1   | Người học coi nội dung `draft` là đã kiểm chứng         | Trung bình | Nhãn trạng thái hiển thị trên mọi mục; trang Gap Analysis và README nêu rõ                                          |
| 2   | Liên kết nguồn hỏng theo thời gian                      | Trung bình | `check:links` chạy tự động hằng tháng qua GitHub Actions                                                            |
| 3   | Người học tự lưu token vào ghi chú                      | Trung bình | Phát hiện 8 mẫu chuỗi nhạy cảm và cảnh báo; export có redaction                                                     |
| 4   | Lab cloud gây chi phí ngoài dự kiến                     | Cao        | Metadata bắt buộc về chi phí, tài khoản riêng và dọn dẹp; validator chặn cloud lab thiếu các trường này             |
| 5   | Người học áp dụng kỹ thuật lên tài sản ngoài phạm vi    | Cao        | Cổng xác nhận an toàn; `allowedTargetsNoteVi` trên từng lab; chín quy tắc dừng lặp lại ở nhiều nơi                  |
| 6   | Nội dung chuyên sâu (P, Q, R) bị dùng sai gây nguy hiểm | Cao        | Bốn lĩnh vực này chỉ có nội dung kiến trúc và phòng thủ; mọi lab đều là simulator hoặc thiết bị của chính người học |
| 7   | Bundle JS lớn làm chậm tải lần đầu trên mạng yếu        | Thấp       | 263 kB gzip; có thể tách chunk theo route nếu cần                                                                   |
| 8   | Đóng góp trong tương lai làm loãng chính sách nội dung  | Trung bình | `CONTENT_POLICY.md` + bộ lọc từ khoá trong validator + CI bắt buộc                                                  |
| 9   | Số lượng nội dung chưa đạt chỉ tiêu MVP                 | Đã biết    | Ghi công khai ở mục 6–14 và trong `ROADMAP.md`                                                                      |
| 10  | 8 liên kết không kiểm tra được từ môi trường build      | Thấp       | Phân loại là `unknown` chứ không phải link chết; cần kiểm tra thủ công                                              |

## 23. Hướng phát triển

Thứ tự ưu tiên trong `ROADMAP.md`:

1. **Lấp khoảng trống đã biết** — quiz, lab và bài tập báo cáo cho 110/70/58 module
   còn thiếu, bắt đầu từ các lĩnh vực `core`.
2. **Rà soát nguồn** — chuyển 104 nguồn từ `draft` sang `verified` theo từng đợt
   có ghi ngày.
3. **Mở rộng concept và weakness** để tiến tới mật độ trong đặc tả.
4. **Nội dung specialist** — chỉ mở rộng khi đủ bảy điều kiện trong
   `KNOWLEDGE_TAXONOMY.md` §5.

Sau MVP: PWA, lịch ôn tập giãn cách, xuất kế hoạch học ra lịch.

Không bao giờ thêm: ô nhập mục tiêu, chức năng quét, công cụ khai thác trong trình
duyệt, kho payload, tự gửi báo cáo, telemetry mặc định.

## 24. Danh sách tệp đã tạo

**119 tệp** trong commit khởi tạo. Nhóm chính:

| Nhóm                 | Số tệp | Ghi chú                                                                                   |
| -------------------- | ------ | ----------------------------------------------------------------------------------------- |
| Tài liệu             | 14     | 6 tài liệu thiết kế + 7 chính sách + HANDOVER                                             |
| Cấu hình             | 13     | package.json, 4 tsconfig, vite, vitest, tailwind, postcss, eslint, prettier ×2, gitignore |
| GitHub Actions       | 4      | ci, deploy, codeql, link-check                                                            |
| Schema và validator  | 4      | entities.ts, zod.ts, dataset.ts, coverage.ts                                              |
| Storage và migration | 4      | schema.ts, db.ts, transfer.ts, migrations                                                 |
| Utils                | 6      | vietnamese, url, graph, markdown, sensitive, lookups                                      |
| Dữ liệu kiến thức    | 25     | chia theo entity, không có tệp nào hàng nghìn dòng                                        |
| Giao diện            | 23     | App, Layout, store, 2 nhóm component, 19 trang                                            |
| Script               | 4      | validate-data, check-links, build-index, coverage-report                                  |
| Test                 | 5      | setup + 4 tệp test                                                                        |
| Tài sản và báo cáo   | 4      | atlas.svg, search-index.json, coverage.md, link-check.md                                  |

## 25. Xác nhận repository được tạo mới từ đầu

Tôi xác nhận:

- Repository được khởi tạo bằng `git init`, có **đúng một commit**, không có lịch
  sử Git của bất kỳ dự án nào khác.
- Không fork, không sao chép mã nguồn, không import dữ liệu từ repository cũ.
- Kiến trúc, data model, giao diện và toàn bộ nội dung tiếng Việt được thiết kế và
  viết mới.
- Không có tài sản hình ảnh nào lấy từ dự án khác; biểu tượng duy nhất
  (`public/icons/atlas.svg`) được viết tay trong dự án này.
- README và mọi tài liệu **không** mô tả sản phẩm là bản nâng cấp, bản mở rộng hay
  fork của bất kỳ dự án nào.
- Tên sản phẩm nằm tập trung tại `src/config/product.ts` để đổi tên về sau chỉ cần
  sửa một chỗ.

---

## Đối chiếu 40 tiêu chí nghiệm thu

| #   | Tiêu chí                                    | Kết quả                                            |
| --- | ------------------------------------------- | -------------------------------------------------- |
| 1   | Repository tạo mới hoàn toàn                | ✅                                                 |
| 2   | Không có lịch sử Git của dự án khác         | ✅ một commit duy nhất                             |
| 3   | Không phụ thuộc dữ liệu/branding dự án khác | ✅                                                 |
| 4   | README không mô tả là bản nâng cấp/fork     | ✅                                                 |
| 5   | Build thành công                            | ✅                                                 |
| 6   | Deploy GitHub Pages                         | ✅ live, đã kiểm chứng trên site thật              |
| 7   | Responsive 360 px                           | ✅ kiểm chứng trong trình duyệt, không tràn ngang  |
| 8   | Keyboard navigation                         | ✅ phần tử semantic, skip link                     |
| 9   | Focus state                                 | ✅ `:focus-visible` có ring rõ                     |
| 10  | Dark/light mode                             | ✅                                                 |
| 11  | Search không dấu tiếng Việt                 | ✅ kiểm chứng: `phan quyen doi tuong` → 39 kết quả |
| 12  | IndexedDB migration hoạt động               | ✅ có test                                         |
| 13  | Export/import hoạt động                     | ✅ có conflict preview và redaction                |
| 14  | Report export hoạt động                     | ✅ Markdown, JSON, plain text                      |
| 15  | Validator không có lỗi                      | ✅ 0 lỗi                                           |
| 16  | Không có prerequisite cycle                 | ✅ có test                                         |
| 17  | Không có link `javascript:`                 | ✅ chặn ở validator và runtime, có test            |
| 18  | Không render HTML không tin cậy             | ✅ ESLint chặn, có test                            |
| 19  | Không có chức năng scan/exploit             | ✅ không có lớp networking tới bên thứ ba          |
| 20  | Không có nội dung phishing/malware/DoS      | ✅ validator lọc từ khoá                           |
| 21  | Mỗi lab có cảnh báo phạm vi                 | ✅ 51/51                                           |
| 22  | Mỗi domain có safety note                   | ✅ 24/24                                           |
| 23  | Cloud lab có billing và cleanup             | ✅ có test                                         |
| 24  | Nguồn được ghi attribution                  | ✅ `ATTRIBUTION.md`                                |
| 25  | Không sao chép lời giải                     | ✅ `solutionPolicy`                                |
| 26  | Không dùng tài liệu lậu                     | ✅                                                 |
| 27  | Không khẳng định được bảo trợ               | ✅ nêu trong README, About và ATTRIBUTION          |
| 28  | Không hứa hẹn thu nhập                      | ✅                                                 |
| 29  | Có gap analysis                             | ✅ trang riêng + báo cáo                           |
| 30  | Có source review date                       | ✅ `lastContentReviewed`                           |
| 31  | Có link check date                          | ✅ `linkLastChecked` do script điền                |
| 32  | Có content status                           | ✅ 5 trạng thái                                    |
| 33  | Có CONTRIBUTING                             | ✅                                                 |
| 34  | Có CONTENT_POLICY                           | ✅                                                 |
| 35  | Có DATA_POLICY                              | ✅                                                 |
| 36  | Có SAFETY                                   | ✅                                                 |
| 37  | Có ATTRIBUTION                              | ✅                                                 |
| 38  | Có ROADMAP                                  | ✅                                                 |
| 39  | Có CHANGELOG                                | ✅                                                 |
| 40  | Có báo cáo phần chưa hoàn thiện             | ✅ tài liệu này, mục 20–22                         |

**40/40 đạt.**

Kết quả CI trên lần đẩy đầu tiên: CI ✅ · Deploy to GitHub Pages ✅ · CodeQL ✅.

---

## Tuyên bố cuối

> BountyAtlas VN cung cấp bản đồ kiến thức Bug Bounty đa lĩnh vực tại thời điểm rà
> soát. Đây là hệ thống mở và cần tiếp tục cập nhật khi tiêu chuẩn, công nghệ,
> chương trình và bề mặt tấn công thay đổi.
