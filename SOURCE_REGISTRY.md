# SOURCE_REGISTRY — Sổ đăng ký nguồn BountyAtlas VN

Nguồn sự thật của danh mục nguồn là dữ liệu tại `src/data/resources/`.
File này mô tả **chính sách** và ghi lại **kết quả xác minh thủ công**.

## 1. Thứ tự ưu tiên nguồn

1. Standard / specification chính thức (`official-standard`)
2. Testing guide chính thức (`official-standard` hoặc `project-primary`)
3. Tài liệu chính thức của nền tảng hoặc công cụ (`official-vendor`)
4. Lab chính thức hoặc dự án uy tín (`project-primary`)
5. Tài liệu học thuật (`academic`)
6. Nguồn cộng đồng đã kiểm tra (`community`)

## 2. Quy tắc với nguồn cộng đồng

Chỉ thêm nguồn `community` khi đủ **tất cả**:

- Tác giả rõ ràng.
- Có giá trị khác biệt so với nguồn chính thức.
- Không chứa tài liệu lậu.
- Không đăng lại khoá học trả phí.
- Không hướng dẫn hoạt động ngoài phạm vi.
- Có ngày kiểm tra.
- Có nhãn `community`.
- Có lý do chọn nguồn (`sourceOriginNoteVi`) — validator bắt buộc.
- Không phải nguồn duy nhất cho một kiến thức quan trọng.

Ở phiên bản hiện tại, dataset **không có** nguồn `community` nào. Toàn bộ nguồn seed
thuộc bốn lớp đầu. Đây là lựa chọn có chủ ý cho MVP.

## 3. Không sao chép

Không sao chép toàn bộ bài viết, sách, PDF, transcript video, lời giải lab,
bộ payload phá hoại, hay nội dung khoá học trả phí. Dataset chỉ lưu:

- Metadata (tiêu đề gốc, URL, nhà cung cấp, loại, ngôn ngữ, license note).
- **Mô tả tiếng Việt do dự án tự biên soạn.**

Xem `ATTRIBUTION.md` và `CONTENT_POLICY.md`.

## 4. Ba loại ngày

| Trường                | Do ai đặt             | Ý nghĩa                               |
| --------------------- | --------------------- | ------------------------------------- |
| `metadataLastUpdated` | Người biên tập        | Sửa metadata                          |
| `lastContentReviewed` | Người biên tập        | Đã **mở nguồn** và đối chiếu nội dung |
| `linkLastChecked`     | `npm run check:links` | Kiểm tra HTTP                         |

`linkLastChecked` không bao giờ được dùng để khẳng định nội dung đã rà soát.
Validator từ chối `contentStatus: 'verified'` khi thiếu `lastContentReviewed`.

## 5b. Đợt rà soát 2 (2026-07-27)

Đợt này mở và đọc thật thêm hơn 200 nguồn. Kết quả ghi trong
`src/data/resources/reviewed.ts`: mỗi mục là một ghi chú nêu **điều cụ thể quan
sát được trên trang**, không phải nhắc lại tiêu đề. Ghi chú đó chính là bằng
chứng của việc đã đọc.

Trạng thái module được **suy ra** từ đây: một module chỉ hết `draft` khi mọi
nguồn `core` trong lộ trình của nó đã được rà soát. Suy ra thay vì đặt tay là có
chủ đích — thêm một nguồn chưa rà soát vào lộ trình thì module tự quay về nháp.

Việc đọc thật đã bắt được các sai sót mà kiểm tra link không thể phát hiện:

| Nguồn                        | Vấn đề                                                                                                      |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| MASTG Tools / MASTG Apps     | Mô tả của dự án nói là danh mục công cụ và ứng dụng có lỗi để luyện tập; thực tế cả hai là trang điều hướng |
| Frida docs                   | `/docs/` chỉ là trang chuyển hướng, địa chỉ thật là `/docs/home/`                                           |
| Ghidra                       | `ghidra-sre.org` nay chuyển hướng về kho GitHub của NSA                                                     |
| Linux Journey                | `linuxjourney.com` nay chuyển hướng sang một nền tảng thương mại; đã thay bằng LinuxCommand.org             |
| Semgrep, GitHub Security Lab | Đã đổi host tài liệu                                                                                        |
| PortSwigger business logic   | Đường dẫn thật là `/logic-flaws`                                                                            |

### Nguồn không đọc được từ môi trường này

Sau khi rà soát hết phần đọc được, còn đúng **21 nguồn** chặn 122/144 module
không ra khỏi nháp. Tất cả đều thuộc một nhóm: trả HTTP 403 cho công cụ tự động,
hoặc trả trang rỗng vì nội dung dựng bằng JavaScript. Chúng **vẫn ở `draft`** —
đây là kết quả trung thực, không phải sơ suất.

| Nguồn                                         | Vì sao chưa rà soát được              |
| --------------------------------------------- | ------------------------------------- |
| EUR-Lex (toàn văn GDPR)                       | Trả trang rỗng                        |
| Google Bug Hunters — Rules                    | Nội dung dựng bằng JavaScript         |
| Google Cloud VRP Rules                        | Nội dung dựng bằng JavaScript         |
| UNECE R155                                    | HTTP 403                              |
| Solidity docs (trang chủ và chương an toàn)   | HTTP 403                              |
| CISA (mẫu VDP, chuyên đề ICS, ICS advisories) | HTTP 403                              |
| HackerOne Hacktivity                          | Nội dung dựng bằng JavaScript         |
| Cloudflare Learning — What is DNS             | HTTP 403                              |
| graphql.org/learn/security                    | HTTP 403                              |
| Apple Developer (3 trang)                     | Nội dung dựng bằng JavaScript         |
| ETSI EN 303 645 (PDF)                         | HTTP 403                              |
| eCFR Part 15                                  | Chuyển hướng sang trang chặn truy cập |
| IEC — Understanding IEC 62443                 | HTTP 403                              |
| Damn Vulnerable DeFi                          | HTTP 403                              |
| MITRE ATLAS                                   | Nội dung dựng bằng JavaScript         |
| Nghị định 13/2023/NĐ-CP                       | Nội dung dựng bằng JavaScript         |

Lưu ý về GDPR: nội dung Điều 5 đã được đối chiếu qua một trang gương, nhưng
**đọc trang gương không phải là xác minh URL trong dữ liệu**, nên nguồn này vẫn
để `draft`.

Người biên tập dùng trình duyệt thật mở được toàn bộ số này. Quy trình ở §8 áp
dụng nguyên vẹn: mở, đọc, rồi thêm một dòng vào `src/data/resources/reviewed.ts`
với ghi chú nêu điều cụ thể quan sát được.

## 5. Kết quả xác minh thủ công — đợt 1 (2026-07-26)

Các nguồn dưới đây đã được **mở và đọc nội dung thực tế** trong đợt biên tập đầu tiên.
Chúng mang `contentStatus: 'verified'` và `lastContentReviewed: '2026-07-26'`.

| #   | Nguồn                                         | Điều đã xác minh                                                                                                                                                        |
| --- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | PortSwigger Web Security Academy — All Topics | Chia ba nhóm: server-side, client-side, advanced. Miễn phí; lab yêu cầu tài khoản                                                                                       |
| 2   | MITRE CWE                                     | Danh mục điểm yếu SW & HW do MITRE/HSSEDI vận hành, tài trợ bởi CISA; có REST API và nhiều view                                                                         |
| 3   | OWASP MASTG                                   | Hướng dẫn kiểm thử mobile; tổ chức theo 8 nhóm MASVS (Storage, Crypto, Auth, Network, Platform, Code, Resilience, Privacy); gồm tests, knowledge, best practices, demos |
| 4   | OWASP API Security Top 10                     | Ấn bản 2023, 10 mục từ API1 BOLA tới API10 Unsafe Consumption of APIs                                                                                                   |
| 5   | FIRST CVSS v4.0                               | Bốn nhóm metric: Base, Threat, Environmental, Supplemental; do FIRST.Org CVSS-SIG xuất bản                                                                              |
| 6   | OWASP Smart Contract Security (SCS)           | Gồm SCSVS và SCSTG; SCSVS chia 11 nhóm control (ARCH, CODE, GOV, AUTH, COMM, CRYPTO, ORACLE, BLOCK, BRIDGE, DEFI, COMP)                                                 |
| 7   | OWASP GenAI Security Project                  | Sáng kiến cộng đồng về bảo mật GenAI; Top 10 for LLM Applications bản hiện hành là 2025                                                                                 |
| 8   | HackerOne Safe Harbor Overview & FAQ          | Phân biệt Gold Standard Safe Harbor và AI Research Safe Harbor; nguyên tắc bảo vệ tự động cho nghiên cứu thiện chí                                                      |
| 9   | Kubernetes Security Checklist                 | Các mục: authentication/authorization, network security, pod security, logs & auditing, pod placement, secrets, images, admission controllers                           |
| 10  | OpenSSF SLSA                                  | Bốn build level tăng dần; do steering group đa tổ chức thuộc OpenSSF/Linux Foundation duy trì                                                                           |

## 6. Trạng thái các nguồn còn lại

Mọi nguồn seed khác trong `src/data/resources/` hiện mang:

- `contentStatus: 'draft'` hoặc `'review-needed'`
- `lastContentReviewed: null`
- `linkLastChecked` do script điền

**Đây là tuyên bố trung thực**: các nguồn đó chưa được người biên tập mở và đối chiếu
trong đợt này. Chúng vẫn dùng được vì là nguồn chính thức đã biết, nhưng không được
gắn nhãn `verified`. Danh sách đầy đủ nằm trong `reports/coverage.md`
(mục "Nguồn chưa xác minh nội dung") và trong Gap Analysis của ứng dụng.

## 7. Link checker

`npm run check:links` thực hiện:

- HEAD trước, GET fallback.
- Timeout mặc định 15 s, concurrency 6, retry 1 lần với backoff.
- User-Agent giống trình duyệt để phân biệt "bị chặn bot" với "link chết".
- Phân loại riêng 401 → `login-required`, 403 → `blocked`, 404/410 → `unavailable`,
  429 → `rate-limited`, 5xx → `unavailable`, timeout → `timeout`, 3xx cross-host → `redirected`.
- **Không tự sửa URL.**
- **Không làm fail deploy** khi site chặn bot; chỉ `unavailable` mới được coi là cần xử lý,
  và cũng chỉ cảnh báo chứ không chặn build.
- Sinh `reports/link-check.json` và `reports/link-check.md`.

## 8. Quy trình thêm nguồn mới

1. Mở nguồn, đọc thật.
2. Viết `descriptionVi` bằng lời của mình.
3. Điền đầy đủ metadata, đặc biệt `sourceClass`, `licenseNote`, `contentReuseAllowed`.
4. Đặt `lastContentReviewed` = ngày hôm đó, `contentStatus: 'verified'`.
5. Chạy `npm run check:links` và `npm run validate:data`.
6. Chạy `npm run coverage:report` và commit `reports/coverage.md`.
