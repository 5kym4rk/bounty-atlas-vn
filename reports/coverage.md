# Báo cáo độ bao phủ — BountyAtlas VN

> Tệp này được sinh tự động bởi `npm run coverage:report`. Đừng sửa tay.
> Mọi con số đều tính trực tiếp từ dữ liệu trong `src/data/`.

Phiên bản sản phẩm: 0.4.0
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
| resource | 367 |
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
| officialResource | 309 |
| communityResource | 10 |
| verifiedResource | 228 |

## 3. Tỷ lệ bao phủ

| Chỉ số | Giá trị |
| --- | --- |
| moduleWithLabPercent | 51.4% |
| moduleWithReportExercisePercent | 59.7% |
| moduleWithQuizPercent | 23.6% |
| moduleWithRemediationPercent | 100% |
| officialResourcePercent | 84.2% |
| verifiedResourcePercent | 62.1% |

## 4. Ma trận theo lĩnh vực

| Mã | Lĩnh vực | Trạng thái | Track | Module | Module có lab | Module có bài báo cáo | Module có quiz | Lab | Checklist | Điểm yếu | Nguồn | Nguồn chuẩn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Định hướng, pháp lý, đạo đức và vận hành Bug Bounty | core | 4 | 10 | 2/10 | 3/10 | 6/10 | 1 | 2 | 0 | 29 | 28 |
| B | Kiến thức nền dùng chung | core | 6 | 13 | 0/13 | 0/13 | 3/13 | 1 | 1 | 5 | 28 | 22 |
| C | Phương pháp kiểm thử và quản lý bề mặt tấn công | core | 3 | 7 | 2/7 | 2/7 | 1/7 | 1 | 1 | 0 | 14 | 13 |
| D | Web application | core | 10 | 31 | 21/31 | 13/31 | 4/31 | 19 | 4 | 29 | 108 | 103 |
| E | API | core | 5 | 10 | 7/10 | 5/10 | 2/10 | 5 | 1 | 7 | 30 | 26 |
| F | Identity, SSO và enterprise access | core | 2 | 5 | 2/5 | 5/5 | 1/5 | 2 | 1 | 6 | 19 | 17 |
| G | Mobile | core | 5 | 7 | 4/7 | 5/7 | 1/7 | 2 | 1 | 3 | 20 | 18 |
| H | Cloud | core | 5 | 8 | 2/8 | 7/8 | 1/8 | 2 | 1 | 4 | 25 | 22 |
| I | Container, Kubernetes và cloud-native | advanced | 2 | 3 | 3/3 | 3/3 | 1/3 | 2 | 1 | 3 | 15 | 8 |
| J | Network và infrastructure | core | 4 | 5 | 3/5 | 2/5 | 1/5 | 2 | 1 | 3 | 16 | 9 |
| K | Desktop, thick client và native application | advanced | 3 | 4 | 2/4 | 3/4 | 1/4 | 1 | 1 | 4 | 10 | 7 |
| L | Reverse engineering và binary exploitation | advanced | 3 | 4 | 3/4 | 3/4 | 1/4 | 2 | 1 | 2 | 10 | 1 |
| M | Source code review và white-box | advanced | 4 | 6 | 2/6 | 6/6 | 1/6 | 1 | 1 | 5 | 16 | 15 |
| N | Software supply chain, CI/CD và package ecosystem | advanced | 2 | 4 | 2/4 | 4/4 | 1/4 | 2 | 1 | 3 | 21 | 17 |
| O | IoT, embedded, hardware và firmware | advanced | 3 | 3 | 2/3 | 3/3 | 0/3 | 2 | 1 | 3 | 8 | 5 |
| P | Wireless, Bluetooth, NFC và RF | specialist | 1 | 2 | 1/2 | 2/2 | 1/2 | 1 | 1 | 1 | 4 | 4 |
| Q | Automotive và connected vehicles | specialist | 1 | 2 | 1/2 | 2/2 | 1/2 | 1 | 1 | 2 | 3 | 3 |
| R | ICS, OT và industrial systems | specialist | 1 | 2 | 2/2 | 2/2 | 1/2 | 1 | 1 | 2 | 5 | 5 |
| S | Smart contract, blockchain và Web3 | advanced | 3 | 5 | 4/5 | 4/5 | 1/5 | 3 | 1 | 3 | 15 | 7 |
| T | AI, machine learning, LLM và agent security | advanced | 3 | 5 | 3/5 | 4/5 | 1/5 | 2 | 1 | 3 | 13 | 12 |
| U | Browser, extension và client platform | advanced | 1 | 2 | 2/2 | 2/2 | 1/2 | 1 | 1 | 1 | 6 | 6 |
| V | Email, collaboration, SaaS và enterprise workflow | advanced | 1 | 3 | 1/3 | 3/3 | 1/3 | 1 | 1 | 4 | 6 | 6 |
| W | Privacy, data exposure và multi-tenancy | core | 1 | 2 | 2/2 | 2/2 | 1/2 | 2 | 1 | 2 | 4 | 4 |
| X | Emerging & specialist | specialist | 1 | 1 | 1/1 | 1/1 | 1/1 | 1 | 1 | 0 | 2 | 2 |

## 5. Khoảng trống theo loại

| Mã cảnh báo | Số mục |
| --- | --- |
| MODULE_NO_QUIZ | 110 |
| MODULE_NO_LAB | 70 |
| MODULE_NO_REPORT_EXERCISE | 58 |
| TRACK_NO_PREREQ | 9 |

## 6. Nguồn chưa xác minh nội dung (139)

Những nguồn dưới đây **chưa** được người biên tập mở và đối chiếu. Chúng không mang
nhãn `verified`. Đây là tuyên bố trung thực về trạng thái hiện tại.

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
- `res-portswigger-academy` — Web Security Academy
- `res-portswigger-all-labs` — Web Security Academy — All Labs
- `res-burp-docs` — Burp Suite Documentation
- `res-juice-shop` — OWASP Juice Shop
- `res-juice-shop-repo` — juice-shop (repository)
- `res-webgoat` — OWASP WebGoat
- `res-webgoat-repo` — WebGoat (repository)
- `res-crapi` — OWASP crAPI
- `res-crapi-repo` — crAPI (repository)
- `res-graphql-spec` — GraphQL Specification
- `res-webauthn` — Web Authentication (WebAuthn) Level 3
- `res-owasp-mas` — OWASP Mobile Application Security
- `res-android-dev-security` — Android — Improve your app’s security
- `res-apple-platform-security` — Apple Platform Security
- `res-aws-security-docs` — AWS Security Documentation
- `res-aws-well-architected-security` — AWS Well-Architected — Security Pillar
- `res-azure-security-docs` — Azure Security Documentation
- `res-azure-best-practices` — Azure Security Best Practices and Patterns
- `res-gcp-well-architected-security` — Google Cloud Well-Architected — Security
- `res-cloudgoat` — CloudGoat
- `res-wrongsecrets` — OWASP WrongSecrets
- `res-wrongsecrets-repo` — wrongsecrets (repository)
- `res-k8s-app-security-checklist` — Kubernetes Application Security Checklist
- `res-k8s-disclosure` — Kubernetes Security and Disclosure Information
- `res-nmap-book` — Nmap Network Scanning
- `res-openssl-docs` — OpenSSL Documentation
- `res-owasp-wifi-testing` — OWASP Wi-Fi Security Testing Guide
- `res-microsoft-sdl` — Microsoft Security Development Lifecycle
- `res-pwn-college` — pwn.college
- `res-pwn-college-binary` — pwn.college — Binary Exploitation
- `res-aflplusplus` — AFL++
- `res-owasp-scvs` — OWASP Software Component Verification Standard
- `res-scvs-site` — SCVS
- `res-openssf-baseline` — OpenSSF Security Baseline
- `res-codeql` — CodeQL Documentation
- `res-gh-private-vuln-reporting` — Configuring Private Vulnerability Reporting
- `res-owasp-iot-testing-guide` — OWASP IoT Security Testing Guide
- `res-owasp-iot-project` — OWASP Internet of Things Project
- `res-iotgoat` — OWASP IoTGoat
- `res-attack-ics` — MITRE ATT&CK for ICS
- `res-cisa-ics` — CISA — Industrial Control Systems
- `res-owasp-scsvs` — OWASP Smart Contract Security Verification Standard
- `res-owasp-scstg` — OWASP SCSTG
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
- `res-cloudflare-learning-dns` — What is DNS?
- `res-mozilla-tls-config` — Mozilla SSL Configuration Generator
- `res-unicode-tr36` — Unicode Technical Report #36 — Security Considerations
- `res-cryptopals` — The Cryptopals Crypto Challenges
- `res-mitmproxy-docs` — mitmproxy documentation
- `res-cisa-vdp-guidance` — CISA — Vulnerability Disclosure Policy template
- `res-iso-29147` — ISO/IEC 29147 — Vulnerability disclosure
- `res-google-bughunters-rules` — Google Bug Hunters — Program rules
- `res-cs-credential-stuffing` — Credential Stuffing Prevention Cheat Sheet
- `res-cs-injection` — Injection Prevention Cheat Sheet
- `res-cs-clickjacking` — Clickjacking Defense Cheat Sheet
- `res-cs-third-party-js` — Third Party JavaScript Management Cheat Sheet
- `res-trusted-types` — Trusted Types
- `res-cs-redirects` — Unvalidated Redirects and Forwards Cheat Sheet
- `res-grpc-web` — gRPC-Web
- `res-graphql-security-docs` — GraphQL — Security
- `res-oauth-security-topics` — OAuth 2.0 Security Best Current Practice
- `res-cs-saml` — SAML Security Cheat Sheet
- `res-apple-keychain` — Keychain services
- `res-apple-universal-links` — Supporting universal links in your app
- `res-apple-data-protection` — Data Protection
- `res-cs-mobile-app-security` — Mobile Application Security Cheat Sheet
- `res-msrc-cloud-bounty` — Microsoft Azure Bounty Program
- `res-gcp-workload-identity` — Google Cloud — Workload Identity Federation
- `res-gcp-vrp` — Google Cloud VRP
- `res-oci-image-spec` — OCI Image Format Specification
- `res-testssl` — testssl.sh
- `res-electron-checklist` — Electron — Security checklist
- `res-electron-context-isolation` — Electron — Context Isolation
- `res-ms-dll-search-order` — Dynamic-link library search order
- `res-nightmare-fuzzing` — Nightmare — Intro to binary exploitation
- `res-llvm-sanitizers` — UndefinedBehaviorSanitizer
- `res-libfuzzer` — libFuzzer — a library for coverage-guided fuzz testing
- `res-oss-fuzz` — OSS-Fuzz documentation
- `res-gh-coordinated-disclosure` — GitHub — Coordinated disclosure of security vulnerabilities
- `res-cve-program` — CVE Program — Reporting a vulnerability
- `res-slsa-levels` — SLSA — Security levels
- `res-cyclonedx-spec` — CycloneDX Specification
- `res-spdx-spec` — SPDX Specification
- `res-gh-actions-hardening` — GitHub Actions — Security hardening
- `res-gh-oidc` — GitHub Actions — OpenID Connect
- `res-npm-provenance` — npm — Generating provenance statements
- `res-etsi-en-303-645` — ETSI EN 303 645 — Cyber Security for Consumer IoT
- `res-binwalk` — Binwalk
- `res-firmware-analysis-toolkit` — OWASP Firmware Security Testing Methodology
- `res-bluetooth-specs` — Bluetooth Core Specification
- `res-nordic-ble-gatt` — Bluetooth Low Energy — GATT
- `res-fcc-part15` — FCC Rules — Part 15 Radio Frequency Devices
- `res-iso-21434` — ISO/SAE 21434 — Road vehicles: cybersecurity engineering
- `res-unece-r155` — UN Regulation No. 155 — Cyber security management system
- `res-auto-isac` — Auto-ISAC — Best practices
- `res-iec-62443` — IEC 62443 — Industrial communication networks security
- `res-cisa-ics-advisories` — CISA — ICS Advisories
- `res-solidity-security` — Solidity — Security Considerations
- `res-openzeppelin-upgrades` — OpenZeppelin — Proxy Upgrade Pattern
- `res-foundry-fuzz` — Foundry Book — Fuzz Testing
- `res-ethereum-evm` — Ethereum — Ethereum Virtual Machine
- `res-chainlink-oracle-security` — Chainlink — Data Feeds API Reference
- `res-immunefi-severity` — Immunefi Vulnerability Severity Classification System
- `res-owasp-llm06` — OWASP LLM06:2025 — Excessive Agency
- `res-owasp-llm08` — OWASP LLM08:2025 — Vector and Embedding Weaknesses
- `res-mitre-atlas` — MITRE ATLAS
- `res-nist-ai-600-1` — NIST AI 600-1 — Generative AI Profile
- `res-mcp-security` — Model Context Protocol — Security Best Practices
- `res-chrome-permissions` — Chrome Extensions — Declare permissions
- `res-chrome-message-passing` — Chrome Extensions — Message passing
- `res-chrome-content-scripts` — Chrome Extensions — Content scripts
- `res-google-workspace-security` — Google Workspace — Security best practices
- `res-gdpr-text` — General Data Protection Regulation — full text
- `res-cs-user-privacy` — User Privacy Protection Cheat Sheet
- `res-vn-pdpd` — Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân
- `res-attack-enterprise` — MITRE ATT&CK — Enterprise Matrix

## 7. Nguồn quá hạn rà soát (0)

(không có)

## 8. Nguồn chưa kiểm tra liên kết (0)

Chạy `npm run check:links` để cập nhật.

(không có)

## 9. Nội dung còn ở trạng thái bản nháp (275)

| Thực thể | Số mục |
| --- | --- |
| domain | 24 |
| module | 50 |
| weakness | 62 |
| resource | 139 |

## 10. Lĩnh vực còn thiếu nội dung

(mọi lĩnh vực đều có lab, checklist và nguồn chuẩn)
