# KNOWLEDGE_TAXONOMY — Cây phân loại kiến thức BountyAtlas VN

## 1. Bốn tầng

```text
Domain (24)  →  Track  →  Module  →  Concept / Weakness / Lab / Checklist / Quiz / Report exercise
```

Ngoài trục dọc đó còn ba trục ngang dùng chung cho mọi domain:

- **Skill** — kỹ năng có thể đánh giá được, gắn với module.
- **Standard** — tham chiếu chuẩn (CWE, CAPEC, CVSS, OWASP ASVS/WSTG/MASVS/SCSVS…).
- **Resource** — nguồn học, có metadata và ba loại ngày.

## 2. Chuỗi 12 bước bắt buộc cho mỗi lĩnh vực

Mỗi track phải dựng nội dung theo chuỗi này, không được thay bằng danh sách link:

```text
1. Khái niệm
2. Kiến trúc hệ thống
3. Trust boundary
4. Bề mặt tấn công
5. Nhóm điểm yếu
6. Phương pháp kiểm thử
7. Công cụ
8. Lab hợp pháp
9. Cách chứng minh tác động an toàn
10. Cách khắc phục
11. Cách viết báo cáo
12. Bài tự đánh giá
```

Validator kiểm tra bước 5, 8, 10, 11, 12 ở mức dữ liệu (weakness / lab / remediation /
report exercise / quiz). Bước 1–4, 6–7, 9 nằm trong nội dung module và concept.

## 3. Danh sách 24 domain

| ID                 | Mã  | Tên                                                 | Trạng thái |
| ------------------ | --- | --------------------------------------------------- | ---------- |
| `dom-policy`       | A   | Định hướng, pháp lý, đạo đức và vận hành Bug Bounty | core       |
| `dom-foundations`  | B   | Kiến thức nền dùng chung                            | core       |
| `dom-methodology`  | C   | Phương pháp kiểm thử và quản lý bề mặt tấn công     | core       |
| `dom-web`          | D   | Web application                                     | core       |
| `dom-api`          | E   | API                                                 | core       |
| `dom-identity`     | F   | Identity, SSO và enterprise access                  | core       |
| `dom-mobile`       | G   | Mobile                                              | core       |
| `dom-cloud`        | H   | Cloud                                               | core       |
| `dom-container`    | I   | Container, Kubernetes và cloud-native               | advanced   |
| `dom-network`      | J   | Network và infrastructure                           | core       |
| `dom-desktop`      | K   | Desktop, thick client và native application         | advanced   |
| `dom-binary`       | L   | Reverse engineering và binary exploitation          | advanced   |
| `dom-code-review`  | M   | Source code review và white-box                     | advanced   |
| `dom-supply-chain` | N   | Software supply chain, CI/CD và package ecosystem   | advanced   |
| `dom-iot`          | O   | IoT, embedded, hardware và firmware                 | advanced   |
| `dom-wireless`     | P   | Wireless, Bluetooth, NFC và RF                      | specialist |
| `dom-automotive`   | Q   | Automotive và connected vehicles                    | specialist |
| `dom-ics-ot`       | R   | ICS, OT và industrial systems                       | specialist |
| `dom-web3`         | S   | Smart contract, blockchain và Web3                  | advanced   |
| `dom-ai`           | T   | AI, machine learning, LLM và agent security         | advanced   |
| `dom-browser-ext`  | U   | Browser, extension và client platform               | advanced   |
| `dom-saas`         | V   | Email, collaboration, SaaS và enterprise workflow   | advanced   |
| `dom-privacy`      | W   | Privacy, data exposure và multi-tenancy             | core       |
| `dom-emerging`     | X   | Emerging & specialist                               | specialist |

Thứ tự `order` trong dữ liệu trùng thứ tự bảng trên.

## 4. Quan hệ prerequisite ở mức domain

```text
A (policy)  ─────────────────────────────► mọi domain khác
B (foundations) ──► C ──► D ──► E ──► F
                     │      │     └──► G, H, V
                     │      └────────► W
B ──► J ──► H ──► I
B ──► K ──► L ──► O ──► P, Q
B ──► M ──► N
D + E ──► T, U, S
J + O ──► R
```

Ràng buộc kỹ thuật: đồ thị prerequisite (domain, track, module) phải **không có chu trình**.
`scripts/validate-data` phát hiện chu trình bằng DFS ba màu và fail nếu tìm thấy.

## 5. Quy tắc mở specialization

Một specialization chỉ chuyển từ `planned` sang `active` khi đủ **7 điều kiện**:

1. Có ít nhất một nguồn phương pháp đáng tin cậy.
2. Có ít nhất một lab hợp pháp hoặc môi trường mô phỏng.
3. Người biên tập đã xác minh metadata (có `lastContentReviewed`).
4. Có cảnh báo pháp lý/phạm vi (`safetyNoteVi` khác rỗng).
5. Có prerequisite rõ ràng (`prerequisiteDomainIds` khác rỗng).
6. Có checklist tối thiểu.
7. Có ít nhất một report exercise mẫu.

Validator thực thi điều kiện 4, 5 (và 1, 2, 6, 7 ở mức domain `specialist`).

## 6. Cấp độ và trạng thái

```ts
type Difficulty =
  | 'foundation'
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'specialist'
  | 'research';

type ContentStatus = 'draft' | 'review-needed' | 'verified' | 'outdated' | 'archived';
```

- `draft` — đã viết nhưng chưa rà soát đối chiếu nguồn.
- `review-needed` — nội dung đủ dùng nhưng đã quá hạn rà soát hoặc nguồn có thay đổi.
- `verified` — người biên tập đã mở nguồn, đối chiếu và ghi `lastReviewed`.
  **Không được đặt `verified` nếu chưa thực sự truy cập nguồn.**
- `outdated` — nguồn/chuẩn đã đổi, nội dung cần viết lại.
- `archived` — giữ lại cho lịch sử, không hiển thị mặc định.

## 7. Ba loại ngày (không được lẫn lộn)

| Trường                | Nghĩa                                                        |
| --------------------- | ------------------------------------------------------------ |
| `metadataLastUpdated` | Lần cuối sửa metadata (tiêu đề, phân loại, mô tả tiếng Việt) |
| `lastContentReviewed` | Lần cuối **người** mở nguồn và đối chiếu nội dung            |
| `linkLastChecked`     | Lần cuối **script** kiểm tra HTTP tới URL                    |

`linkLastChecked` **không** chứng minh nội dung đã được rà soát. Validator từ chối
`contentStatus: 'verified'` mà thiếu `lastContentReviewed`.

## 8. Lộ trình học gợi ý

Chín lộ trình (General, Web/API, Mobile, Cloud-native, Native/IoT, Code review, Web3,
AI/LLM, OT/Automotive) được mô tả trong dữ liệu tại `src/data/tracks/learning-paths.ts`
và hiển thị trong trang Lộ trình. Người dùng **không bị khóa** vào một lộ trình:
mọi domain luôn mở, prerequisite chỉ là cảnh báo có giải thích lý do.
