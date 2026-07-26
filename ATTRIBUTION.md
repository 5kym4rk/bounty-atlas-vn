# ATTRIBUTION — Ghi công nguồn

## 1. Tuyên bố quan trọng nhất

**BountyAtlas VN không được bất kỳ tổ chức nào dưới đây bảo trợ, xác nhận, tài trợ
hay liên kết.** Mọi tên gọi, nhãn hiệu và thương hiệu thuộc về chủ sở hữu tương ứng.

Dự án chỉ liên kết tới các nguồn công khai và viết mô tả bằng lời của chính mình.

## 2. Dự án chỉ lưu gì

| Lưu                                        | Không lưu                 |
| ------------------------------------------ | ------------------------- |
| Tiêu đề gốc của nguồn                      | Toàn văn bài viết         |
| URL công khai                              | Bản sao PDF hoặc sách     |
| Tên nhà cung cấp                           | Transcript video          |
| Phân loại và metadata                      | Lời giải lab              |
| Mô tả tiếng Việt **do dự án tự biên soạn** | Nội dung khoá học trả phí |

Không sử dụng tài liệu lậu dưới bất kỳ hình thức nào.

## 3. Tổ chức và dự án được tham chiếu

Danh sách đầy đủ nằm trong `src/data/resources/` và hiển thị trong Thư viện nguồn
của ứng dụng. Các nhóm chính:

### Tổ chức chuẩn và phi lợi nhuận

- MITRE — CWE, CAPEC, ATT&CK for ICS
- FIRST.Org — CVSS
- NIST — SP 800-115, SP 800-218, SP 800-82, AI Risk Management Framework
- OWASP — ASVS, WSTG, API Security, MASVS, MASTG, SCSVS, SCSTG, SCVS, ISTG,
  GenAI Security, Cheat Sheet Series, và các dự án lab (Juice Shop, WebGoat, crAPI,
  WrongSecrets, IoTGoat)
- OpenSSF và Linux Foundation — SLSA, Scorecard, Security Baseline
- IETF — RFC 9700
- OpenID Foundation — OpenID Connect Core
- W3C — WebAuthn
- OpenAPI Initiative, GraphQL Foundation
- CISA — tài nguyên về hệ thống điều khiển công nghiệp

### Nền tảng và nhà cung cấp

- HackerOne — tài liệu chính sách, Hacker101, Hacktivity
- Bugcrowd — Bugcrowd University, Vulnerability Rating Taxonomy
- Intigriti — Hackademy
- PortSwigger — Web Security Academy, tài liệu Burp Suite
- Amazon Web Services, Microsoft, Google Cloud — tài liệu bảo mật nền tảng
- Google (Android, Chrome Extensions), Apple (Platform Security), Mozilla
  (Extension Workshop)
- Docker, Kubernetes, GitHub

### Dự án nguồn mở và công cụ

- Nmap Project, Wireshark Foundation, OpenSSL Project, ISC (BIND)
- Ghidra Project, LLVM Project, AFL++, GDB
- Frida
- Solidity, Foundry, OpenZeppelin (bao gồm Ethernaut)
- Damn Vulnerable DeFi
- Sigstore
- Rhino Security Labs — CloudGoat

### Học thuật

- Arizona State University — pwn.college

## 4. Giấy phép của dự án này

Mã nguồn và nội dung tiếng Việt do dự án biên soạn được phát hành theo giấy phép
trong `LICENSE`. Giấy phép đó **không** áp dụng cho nội dung của các nguồn được
liên kết — mỗi nguồn có điều khoản riêng của nó.

Trường `licenseNote` và `contentReuseAllowed` trong mỗi bản ghi nguồn ghi lại điều
đã biết về khả năng tái sử dụng. Giá trị `unknown` nghĩa là dự án chưa xác minh,
và bạn phải tự kiểm tra trước khi tái sử dụng.

## 5. Báo lỗi ghi công

Nếu bạn là chủ sở hữu một nguồn và cho rằng cách dự án tham chiếu là chưa phù hợp,
hãy mở issue hoặc dùng kênh liên hệ trong `CONTRIBUTING.md`. Dự án sẽ chỉnh sửa
hoặc gỡ bỏ tham chiếu.

## 6. Trạng thái xác minh

Không phải mọi nguồn đều đã được người biên tập mở và đối chiếu. Chỉ những nguồn
mang `contentStatus: 'verified'` mới đã qua bước đó, và danh sách nguồn **chưa**
xác minh được liệt kê đầy đủ trong `reports/coverage.md`.

Đây là tuyên bố trung thực về trạng thái hiện tại, không phải sơ suất.
