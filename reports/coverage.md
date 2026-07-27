# Báo cáo độ bao phủ — BountyAtlas VN

> Tệp này được sinh tự động bởi `npm run coverage:report`. Đừng sửa tay.
> Mọi con số đều tính trực tiếp từ dữ liệu trong `src/data/`.

Phiên bản sản phẩm: 0.2.0
Ngày rà soát nội dung ở mức sản phẩm: 2026-07-26

*Tệp này cố ý không chứa dấu thời gian sinh, để CI có thể phát hiện khi nội dung
báo cáo lệch với dữ liệu. Dấu thời gian nằm trong `reports/coverage.json`.*

## 1. Kết quả validator

- Lỗi: **0**
- Cảnh báo: **238**

## 2. Tổng số lượng

| Thực thể | Số lượng |
| --- | --- |
| domain | 24 |
| track | 74 |
| module | 144 |
| concept | 40 |
| weakness | 62 |
| resource | 115 |
| lab | 51 |
| tool | 19 |
| checklist | 28 |
| quiz | 34 |
| quizQuestion | 81 |
| reportExercise | 24 |
| triageScenario | 20 |
| assessment | 8 |
| standard | 24 |
| skill | 16 |
| learningPath | 9 |
| officialResource | 87 |
| communityResource | 0 |
| verifiedResource | 11 |

## 3. Tỷ lệ bao phủ

| Chỉ số | Giá trị |
| --- | --- |
| moduleWithLabPercent | 51.4% |
| moduleWithReportExercisePercent | 59.7% |
| moduleWithQuizPercent | 23.6% |
| moduleWithRemediationPercent | 100% |
| officialResourcePercent | 75.7% |
| verifiedResourcePercent | 9.6% |

## 4. Ma trận theo lĩnh vực

| Mã | Lĩnh vực | Trạng thái | Track | Module | Module có lab | Module có bài báo cáo | Module có quiz | Lab | Checklist | Điểm yếu | Nguồn | Nguồn chuẩn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Định hướng, pháp lý, đạo đức và vận hành Bug Bounty | core | 4 | 10 | 2/10 | 3/10 | 6/10 | 1 | 2 | 0 | 13 | 13 |
| B | Kiến thức nền dùng chung | core | 6 | 13 | 0/13 | 0/13 | 3/13 | 1 | 1 | 5 | 2 | 1 |
| C | Phương pháp kiểm thử và quản lý bề mặt tấn công | core | 3 | 7 | 2/7 | 2/7 | 1/7 | 1 | 1 | 0 | 4 | 4 |
| D | Web application | core | 10 | 31 | 21/31 | 13/31 | 4/31 | 19 | 4 | 29 | 19 | 15 |
| E | API | core | 5 | 10 | 7/10 | 5/10 | 2/10 | 5 | 1 | 7 | 11 | 9 |
| F | Identity, SSO và enterprise access | core | 2 | 5 | 2/5 | 5/5 | 1/5 | 2 | 1 | 6 | 5 | 5 |
| G | Mobile | core | 5 | 7 | 4/7 | 5/7 | 1/7 | 2 | 1 | 3 | 10 | 8 |
| H | Cloud | core | 5 | 8 | 2/8 | 7/8 | 1/8 | 2 | 1 | 4 | 9 | 6 |
| I | Container, Kubernetes và cloud-native | advanced | 2 | 3 | 3/3 | 3/3 | 1/3 | 2 | 1 | 3 | 6 | 5 |
| J | Network và infrastructure | core | 4 | 5 | 3/5 | 2/5 | 1/5 | 2 | 1 | 3 | 6 | 2 |
| K | Desktop, thick client và native application | advanced | 3 | 4 | 2/4 | 3/4 | 1/4 | 1 | 1 | 4 | 6 | 5 |
| L | Reverse engineering và binary exploitation | advanced | 3 | 4 | 3/4 | 3/4 | 1/4 | 2 | 1 | 2 | 6 | 0 |
| M | Source code review và white-box | advanced | 4 | 6 | 2/6 | 6/6 | 1/6 | 1 | 1 | 5 | 8 | 8 |
| N | Software supply chain, CI/CD và package ecosystem | advanced | 2 | 4 | 2/4 | 4/4 | 1/4 | 2 | 1 | 3 | 10 | 7 |
| O | IoT, embedded, hardware và firmware | advanced | 3 | 3 | 2/3 | 3/3 | 0/3 | 2 | 1 | 3 | 5 | 3 |
| P | Wireless, Bluetooth, NFC và RF | specialist | 1 | 2 | 1/2 | 2/2 | 1/2 | 1 | 1 | 1 | 1 | 1 |
| Q | Automotive và connected vehicles | specialist | 1 | 2 | 1/2 | 2/2 | 1/2 | 1 | 1 | 2 | 0 | 0 |
| R | ICS, OT và industrial systems | specialist | 1 | 2 | 2/2 | 2/2 | 1/2 | 1 | 1 | 2 | 3 | 3 |
| S | Smart contract, blockchain và Web3 | advanced | 3 | 5 | 4/5 | 4/5 | 1/5 | 3 | 1 | 3 | 9 | 4 |
| T | AI, machine learning, LLM và agent security | advanced | 3 | 5 | 3/5 | 4/5 | 1/5 | 2 | 1 | 3 | 7 | 7 |
| U | Browser, extension và client platform | advanced | 1 | 2 | 2/2 | 2/2 | 1/2 | 1 | 1 | 1 | 2 | 2 |
| V | Email, collaboration, SaaS và enterprise workflow | advanced | 1 | 3 | 1/3 | 3/3 | 1/3 | 1 | 1 | 4 | 0 | 0 |
| W | Privacy, data exposure và multi-tenancy | core | 1 | 2 | 2/2 | 2/2 | 1/2 | 2 | 1 | 2 | 0 | 0 |
| X | Emerging & specialist | specialist | 1 | 1 | 1/1 | 1/1 | 1/1 | 1 | 1 | 0 | 0 | 0 |

## 5. Khoảng trống theo loại

| Mã cảnh báo | Số mục |
| --- | --- |
| MODULE_NO_QUIZ | 110 |
| MODULE_NO_LAB | 70 |
| MODULE_NO_REPORT_EXERCISE | 58 |
| TRACK_NO_PREREQ | 9 |
| DOMAIN_NO_OFFICIAL_SOURCE | 5 |

## 6. Nguồn chưa xác minh nội dung (104)

Những nguồn dưới đây **chưa** được người biên tập mở và đối chiếu. Chúng không mang
nhãn `verified`. Đây là tuyên bố trung thực về trạng thái hiện tại.

- `res-h1-defining-scope` — Defining Scope
- `res-h1-scope-best-practices` — Scope Best Practices
- `res-hacker101` — Hacker101
- `res-hacker101-ctf` — Hacker101 CTF
- `res-h1-hacktivity` — Hacktivity
- `res-bugcrowd-university` — Bugcrowd University
- `res-bugcrowd-university-repo` — bugcrowd_university (repository)
- `res-intigriti-hackademy` — Intigriti Hackademy
- `res-capec` — Common Attack Pattern Enumeration and Classification
- `res-cvss4-calculator` — CVSS v4.0 Calculator
- `res-owasp-asvs` — OWASP Application Security Verification Standard
- `res-owasp-cheatsheets` — OWASP Cheat Sheet Series
- `res-nist-ssdf` — NIST SP 800-218 Secure Software Development Framework
- `res-nist-800-115` — NIST SP 800-115 Technical Guide to Information Security Testing and Assessment
- `res-portswigger-academy` — Web Security Academy
- `res-portswigger-all-labs` — Web Security Academy — All Labs
- `res-portswigger-learning-paths` — Web Security Academy — Learning Paths
- `res-burp-docs` — Burp Suite Documentation
- `res-owasp-wstg` — OWASP Web Security Testing Guide
- `res-juice-shop` — OWASP Juice Shop
- `res-juice-shop-repo` — juice-shop (repository)
- `res-webgoat` — OWASP WebGoat
- `res-webgoat-repo` — WebGoat (repository)
- `res-crapi` — OWASP crAPI
- `res-crapi-repo` — crAPI (repository)
- `res-portswigger-api-testing` — API Testing
- `res-portswigger-graphql` — GraphQL API Vulnerabilities
- `res-openapi-spec` — OpenAPI Specification
- `res-graphql-spec` — GraphQL Specification
- `res-rfc9700` — RFC 9700 — OAuth 2.0 Security Best Current Practice
- `res-oidc-core` — OpenID Connect Core 1.0
- `res-webauthn` — Web Authentication (WebAuthn) Level 3
- `res-portswigger-oauth` — OAuth 2.0 Authentication Vulnerabilities
- `res-portswigger-jwt` — JWT Attacks
- `res-owasp-mas` — OWASP Mobile Application Security
- `res-owasp-masvs` — OWASP MASVS
- `res-mastg-tests` — MASTG Tests
- `res-mastg-tools` — MASTG Tools
- `res-mastg-apps` — MASTG Apps
- `res-android-security` — Android Platform Security
- `res-android-dev-security` — Android Developers — Privacy and Security
- `res-apple-platform-security` — Apple Platform Security
- `res-frida-docs` — Frida Documentation
- `res-aws-security-docs` — AWS Security Documentation
- `res-aws-iam-best-practices` — AWS IAM Security Best Practices
- `res-aws-well-architected-security` — AWS Well-Architected — Security Pillar
- `res-azure-security-docs` — Azure Security Documentation
- `res-azure-best-practices` — Azure Security Best Practices and Patterns
- `res-gcp-well-architected-security` — Google Cloud Well-Architected — Security
- `res-cloudgoat` — CloudGoat
- `res-wrongsecrets` — OWASP WrongSecrets
- `res-wrongsecrets-repo` — wrongsecrets (repository)
- `res-docker-security` — Docker Engine Security
- `res-k8s-security` — Kubernetes Security Concepts
- `res-k8s-app-security-checklist` — Kubernetes Application Security Checklist
- `res-k8s-disclosure` — Kubernetes Security and Disclosure Information
- `res-nmap-book` — Nmap Network Scanning
- `res-nmap-reference` — Nmap Reference Guide
- `res-wireshark-guide` — Wireshark User's Guide
- `res-openssl-docs` — OpenSSL Documentation
- `res-owasp-wifi-testing` — OWASP Wi-Fi Security Testing Guide
- `res-owasp-tcasvs` — OWASP Thick Client Application Security Verification Standard
- `res-owasp-thick-client-top10` — OWASP Thick Client Top 10
- `res-electron-security` — Electron Security
- `res-microsoft-sdl` — Microsoft Security Development Lifecycle
- `res-ghidra` — Ghidra
- `res-pwn-college` — pwn.college
- `res-pwn-college-binary` — pwn.college — Binary Exploitation
- `res-pwn-college-software-exploitation` — pwn.college — Software Exploitation
- `res-address-sanitizer` — AddressSanitizer
- `res-aflplusplus` — AFL++
- `res-owasp-code-review-cheatsheet` — Secure Code Review Cheat Sheet
- `res-owasp-code-review-guide` — OWASP Code Review Guide
- `res-owasp-scvs` — OWASP Software Component Verification Standard
- `res-scvs-site` — SCVS
- `res-openssf-scorecard` — OpenSSF Scorecard
- `res-openssf-baseline` — OpenSSF Security Baseline
- `res-sigstore` — Sigstore Documentation
- `res-codeql` — CodeQL Documentation
- `res-gh-actions-security` — Security for GitHub Actions
- `res-gh-private-vuln-reporting` — Configuring Private Vulnerability Reporting
- `res-owasp-iot-testing-guide` — OWASP IoT Security Testing Guide
- `res-owasp-istg` — OWASP ISTG
- `res-owasp-iot-project` — OWASP Internet of Things Project
- `res-iotgoat` — OWASP IoTGoat
- `res-nist-800-82` — NIST SP 800-82 Rev. 3 — Guide to Operational Technology Security
- `res-attack-ics` — MITRE ATT&CK for ICS
- `res-cisa-ics` — CISA — Industrial Control Systems
- `res-owasp-scsvs` — OWASP Smart Contract Security Verification Standard
- `res-owasp-scstg` — OWASP SCSTG
- `res-scstg-tests` — SCSTG Tests
- `res-solidity-docs` — Solidity Documentation
- `res-foundry-book` — Foundry Book
- `res-openzeppelin-docs` — OpenZeppelin Documentation
- `res-ethernaut` — Ethernaut
- `res-damn-vulnerable-defi` — Damn Vulnerable DeFi
- `res-owasp-llm-top10` — OWASP Top 10 for Large Language Model Applications
- `res-owasp-llmsvs` — OWASP LLM Verification Standard
- `res-owasp-aisvs` — OWASP AI Security Verification Standard
- `res-portswigger-llm-attacks` — Web LLM Attacks (Learning Path)
- `res-h1-ai-safe-harbor` — AI Research Safe Harbor Statement
- `res-nist-ai-rmf` — NIST AI Risk Management Framework
- `res-chrome-extension-security` — Chrome Extensions — Stay Secure
- `res-mozilla-secure-extension` — Build a Secure Extension

## 7. Nguồn quá hạn rà soát (0)

(không có)

## 8. Nguồn chưa kiểm tra liên kết (0)

Chạy `npm run check:links` để cập nhật.

(không có)

## 9. Nội dung còn ở trạng thái bản nháp (334)

| Thực thể | Số mục |
| --- | --- |
| domain | 24 |
| module | 144 |
| weakness | 62 |
| resource | 104 |

## 10. Lĩnh vực còn thiếu nội dung

- **L. Reverse engineering và binary exploitation** — lab: 2, checklist: 1, nguồn chuẩn: 0
- **Q. Automotive và connected vehicles** — lab: 1, checklist: 1, nguồn chuẩn: 0
- **V. Email, collaboration, SaaS và enterprise workflow** — lab: 1, checklist: 1, nguồn chuẩn: 0
- **W. Privacy, data exposure và multi-tenancy** — lab: 2, checklist: 1, nguồn chuẩn: 0
- **X. Emerging & specialist** — lab: 1, checklist: 1, nguồn chuẩn: 0
