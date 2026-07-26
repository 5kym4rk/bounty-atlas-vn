# Báo cáo kiểm tra liên kết

> Sinh tự động bởi `npm run check:links` ngày 2026-07-26.
> Ngày kiểm tra liên kết KHÔNG chứng minh nội dung đã được rà soát — xem SOURCE_REGISTRY.md §4.

Tổng số liên kết: 210

## Tổng hợp theo trạng thái

| Trạng thái | Số lượng | Ý nghĩa |
| --- | --- | --- |
| active | 185 | Truy cập được bình thường |
| redirected | 13 | Có chuyển hướng, URL đích khác URL khai báo |
| login-required | 0 | Cần đăng nhập |
| blocked | 2 | Bị chặn tự động, nhiều khả năng do chống bot |
| rate-limited | 1 | Bị giới hạn tốc độ |
| timeout | 0 | Hết thời gian chờ |
| unavailable | 0 | **Cần xử lý** |
| unknown | 9 | Chưa phân loại được |

## Liên kết cần xử lý

(không có)

## Toàn bộ kết quả

| Thực thể | ID | Trạng thái | HTTP | URL |
| --- | --- | --- | --- | --- |
| lab | `lab-automotive-simulator` | active | 200 | https://csrc.nist.gov/pubs/sp/800/82/r3/final |
| lab | `lab-ble-owned-device` | active | 200 | https://owasp.org/www-project-iot-security-testing-guide/ |
| lab | `lab-cicd-local` | redirected | 200 | https://docs.github.com/en/actions/security-for-github-actions |
| lab | `lab-cloudgoat` | active | 200 | https://github.com/RhinoSecurityLabs/cloudgoat |
| lab | `lab-codeql-local` | active | 200 | https://codeql.github.com/docs/ |
| lab | `lab-crapi` | active | 200 | https://github.com/OWASP/crAPI |
| lab | `lab-damn-vulnerable-defi` | active | 200 | https://www.damnvulnerabledefi.xyz/ |
| lab | `lab-desktop-vm-analysis` | active | 200 | https://www.electronjs.org/docs/latest/tutorial/security |
| lab | `lab-emerging-surface-eval` | active | 200 | https://csrc.nist.gov/pubs/sp/800/115/final |
| lab | `lab-ethernaut` | active | 200 | https://ethernaut.openzeppelin.com/ |
| lab | `lab-extension-local` | active | 200 | https://developer.chrome.com/docs/extensions/develop/security-privacy/stay-secure |
| lab | `lab-firmware-static` | active | 200 | https://owasp.org/owasp-istg/index.html |
| lab | `lab-foundry-invariant` | redirected | 200 | https://book.getfoundry.sh/ |
| lab | `lab-fuzzing-local` | active | 200 | https://aflplus.plus/ |
| lab | `lab-hacker101-ctf` | active | 200 | https://ctf.hacker101.com/ |
| lab | `lab-ics-simulator` | active | 200 | https://www.cisa.gov/topics/industrial-control-systems |
| lab | `lab-iotgoat` | active | 200 | https://github.com/OWASP/IoTGoat |
| lab | `lab-juice-shop` | active | 200 | https://github.com/juice-shop/juice-shop |
| lab | `lab-k8s-local-rbac` | active | 200 | https://kubernetes.io/docs/concepts/security/security-checklist/ |
| lab | `lab-mastg-apps` | active | 200 | https://mas.owasp.org/MASTG/apps/ |
| lab | `lab-mobile-android-storage` | active | 200 | https://mas.owasp.org/MASTG/tests/ |
| lab | `lab-network-local` | unknown | - | https://nmap.org/book/ |
| lab | `lab-policy-reading` | active | 200 | https://docs.hackerone.com/en/articles/8494552-defining-scope |
| lab | `lab-privacy-evidence` | active | 200 | https://owasp.org/www-project-application-security-verification-standard/ |
| lab | `lab-proxy-setup` | active | 200 | https://portswigger.net/burp/documentation |
| lab | `lab-psa-access-control` | active | 200 | https://portswigger.net/web-security/access-control |
| lab | `lab-psa-api-testing` | active | 200 | https://portswigger.net/web-security/api-testing |
| lab | `lab-psa-auth` | active | 200 | https://portswigger.net/web-security/authentication |
| lab | `lab-psa-business-logic` | active | 200 | https://portswigger.net/web-security/logic-flaws |
| lab | `lab-psa-cache-poisoning` | active | 200 | https://portswigger.net/web-security/web-cache-poisoning |
| lab | `lab-psa-cors` | active | 200 | https://portswigger.net/web-security/cors |
| lab | `lab-psa-csrf` | active | 200 | https://portswigger.net/web-security/csrf |
| lab | `lab-psa-deserialization` | active | 200 | https://portswigger.net/web-security/deserialization |
| lab | `lab-psa-file-upload` | active | 200 | https://portswigger.net/web-security/file-upload |
| lab | `lab-psa-graphql` | active | 200 | https://portswigger.net/web-security/graphql |
| lab | `lab-psa-jwt` | active | 200 | https://portswigger.net/web-security/jwt |
| lab | `lab-psa-llm-attacks` | active | 200 | https://portswigger.net/web-security/llm-attacks |
| lab | `lab-psa-oauth` | active | 200 | https://portswigger.net/web-security/oauth |
| lab | `lab-psa-path-traversal` | active | 200 | https://portswigger.net/web-security/file-path-traversal |
| lab | `lab-psa-race-conditions` | active | 200 | https://portswigger.net/web-security/race-conditions |
| lab | `lab-psa-request-smuggling` | active | 200 | https://portswigger.net/web-security/request-smuggling |
| lab | `lab-psa-sqli` | active | 200 | https://portswigger.net/web-security/sql-injection |
| lab | `lab-psa-ssrf` | active | 200 | https://portswigger.net/web-security/ssrf |
| lab | `lab-psa-websockets` | active | 200 | https://portswigger.net/web-security/websockets |
| lab | `lab-psa-xss` | active | 200 | https://portswigger.net/web-security/cross-site-scripting |
| lab | `lab-pwn-college` | active | 200 | https://pwn.college/ |
| lab | `lab-rag-isolation-local` | active | 200 | https://genai.owasp.org/ |
| lab | `lab-saas-tenancy-selfhosted` | active | 200 | https://owasp.org/www-project-application-security-verification-standard/ |
| lab | `lab-tls-inspection` | active | 200 | https://docs.openssl.org/ |
| lab | `lab-webgoat` | active | 200 | https://github.com/WebGoat/WebGoat |
| lab | `lab-wrongsecrets` | active | 200 | https://github.com/OWASP/wrongsecrets |
| lab-cleanup | `lab-cloudgoat` | active | 200 | https://github.com/RhinoSecurityLabs/cloudgoat |
| resource | `res-address-sanitizer` | active | 200 | https://clang.llvm.org/docs/AddressSanitizer.html |
| resource | `res-aflplusplus` | active | 200 | https://aflplus.plus/ |
| resource | `res-android-dev-security` | unknown | - | https://developer.android.com/privacy-and-security/security |
| resource | `res-android-security` | unknown | - | https://source.android.com/docs/security |
| resource | `res-apple-platform-security` | redirected | 200 | https://support.apple.com/guide/security/welcome/web |
| resource | `res-attack-ics` | active | 200 | https://attack.mitre.org/matrices/ics/ |
| resource | `res-aws-iam-best-practices` | active | 200 | https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html |
| resource | `res-aws-security-docs` | active | 200 | https://docs.aws.amazon.com/security/ |
| resource | `res-aws-well-architected-security` | active | 200 | https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html |
| resource | `res-azure-best-practices` | active | 200 | https://learn.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns |
| resource | `res-azure-security-docs` | active | 200 | https://learn.microsoft.com/en-us/azure/security/ |
| resource | `res-bugcrowd-university` | active | 200 | https://www.bugcrowd.com/bugcrowd-university/ |
| resource | `res-bugcrowd-university-repo` | active | 200 | https://github.com/bugcrowd/bugcrowd_university |
| resource | `res-bugcrowd-vrt` | active | 200 | https://github.com/bugcrowd/vulnerability-rating-taxonomy |
| resource | `res-burp-docs` | active | 200 | https://portswigger.net/burp/documentation |
| resource | `res-capec` | active | 200 | https://capec.mitre.org/ |
| resource | `res-chrome-extension-security` | active | 200 | https://developer.chrome.com/docs/extensions/develop/security-privacy/stay-secure |
| resource | `res-cisa-ics` | active | 200 | https://www.cisa.gov/topics/industrial-control-systems |
| resource | `res-cloudgoat` | active | 200 | https://github.com/RhinoSecurityLabs/cloudgoat |
| resource | `res-codeql` | active | 200 | https://codeql.github.com/docs/ |
| resource | `res-crapi` | active | 200 | https://owasp.org/www-project-crapi/ |
| resource | `res-crapi-repo` | active | 200 | https://github.com/OWASP/crAPI |
| resource | `res-cvss4` | active | 200 | https://www.first.org/cvss/v4.0/ |
| resource | `res-cvss4-calculator` | active | 200 | https://www.first.org/cvss/calculator/cvsscalc40 |
| resource | `res-cwe` | active | 200 | https://cwe.mitre.org/ |
| resource | `res-damn-vulnerable-defi` | active | 200 | https://www.damnvulnerabledefi.xyz/ |
| resource | `res-docker-security` | active | 200 | https://docs.docker.com/engine/security/ |
| resource | `res-electron-security` | active | 200 | https://www.electronjs.org/docs/latest/tutorial/security |
| resource | `res-ethernaut` | active | 200 | https://ethernaut.openzeppelin.com/ |
| resource | `res-foundry-book` | redirected | 200 | https://book.getfoundry.sh/ |
| resource | `res-frida-docs` | active | 200 | https://frida.re/docs/ |
| resource | `res-gcp-well-architected-security` | redirected | 200 | https://cloud.google.com/architecture/framework/security |
| resource | `res-gh-actions-security` | redirected | 200 | https://docs.github.com/en/actions/security-for-github-actions |
| resource | `res-gh-private-vuln-reporting` | redirected | 200 | https://docs.github.com/en/code-security/security-advisories/working-with-repository-security-advisories/configuring-private-vulnerability-reporting-for-a-repository |
| resource | `res-ghidra` | redirected | 200 | https://ghidra-sre.org/ |
| resource | `res-graphql-spec` | active | 200 | https://spec.graphql.org/ |
| resource | `res-h1-ai-safe-harbor` | active | 200 | https://docs.hackerone.com/en/articles/13376522-ai-research-safe-harbor-statement |
| resource | `res-h1-defining-scope` | active | 200 | https://docs.hackerone.com/en/articles/8494552-defining-scope |
| resource | `res-h1-hacktivity` | redirected | 200 | https://hackerone.com/hacktivity |
| resource | `res-h1-safe-harbor` | active | 200 | https://docs.hackerone.com/en/articles/8494502-safe-harbor-overview-faq |
| resource | `res-h1-scope-best-practices` | active | 200 | https://docs.hackerone.com/en/articles/8495670-scope-best-practices |
| resource | `res-hacker101` | active | 200 | https://www.hackerone.com/hackers/hacker101 |
| resource | `res-hacker101-ctf` | active | 200 | https://ctf.hacker101.com/ |
| resource | `res-intigriti-hackademy` | active | 200 | https://www.intigriti.com/researchers/hackademy |
| resource | `res-iotgoat` | active | 200 | https://github.com/OWASP/IoTGoat |
| resource | `res-juice-shop` | active | 200 | https://owasp.org/www-project-juice-shop/ |
| resource | `res-juice-shop-repo` | active | 200 | https://github.com/juice-shop/juice-shop |
| resource | `res-k8s-app-security-checklist` | active | 200 | https://kubernetes.io/docs/concepts/security/application-security-checklist/ |
| resource | `res-k8s-disclosure` | active | 200 | https://kubernetes.io/docs/reference/issues-security/security/ |
| resource | `res-k8s-security` | active | 200 | https://kubernetes.io/docs/concepts/security/ |
| resource | `res-k8s-security-checklist` | active | 200 | https://kubernetes.io/docs/concepts/security/security-checklist/ |
| resource | `res-mastg-apps` | active | 200 | https://mas.owasp.org/MASTG/apps/ |
| resource | `res-mastg-tests` | active | 200 | https://mas.owasp.org/MASTG/tests/ |
| resource | `res-mastg-tools` | active | 200 | https://mas.owasp.org/MASTG/tools/ |
| resource | `res-microsoft-sdl` | active | 200 | https://www.microsoft.com/en-us/securityengineering/sdl |
| resource | `res-mozilla-secure-extension` | active | 200 | https://extensionworkshop.com/documentation/develop/build-a-secure-extension/ |
| resource | `res-nist-800-115` | active | 200 | https://csrc.nist.gov/pubs/sp/800/115/final |
| resource | `res-nist-800-82` | active | 200 | https://csrc.nist.gov/pubs/sp/800/82/r3/final |
| resource | `res-nist-ai-rmf` | active | 200 | https://www.nist.gov/itl/ai-risk-management-framework |
| resource | `res-nist-ssdf` | active | 200 | https://csrc.nist.gov/pubs/sp/800/218/final |
| resource | `res-nmap-book` | unknown | - | https://nmap.org/book/ |
| resource | `res-nmap-reference` | unknown | - | https://nmap.org/book/man.html |
| resource | `res-oidc-core` | active | 200 | https://openid.net/specs/openid-connect-core-1_0.html |
| resource | `res-openapi-spec` | active | 200 | https://spec.openapis.org/oas/latest.html |
| resource | `res-openssf-baseline` | active | 200 | https://baseline.openssf.org/ |
| resource | `res-openssf-scorecard` | active | 200 | https://securityscorecards.dev/ |
| resource | `res-openssl-docs` | active | 200 | https://docs.openssl.org/ |
| resource | `res-openzeppelin-docs` | active | 200 | https://docs.openzeppelin.com/ |
| resource | `res-owasp-aisvs` | active | 200 | https://owasp.org/www-project-artificial-intelligence-security-verification-standard-aisvs-docs/ |
| resource | `res-owasp-api-security` | active | 200 | https://owasp.org/API-Security/ |
| resource | `res-owasp-asvs` | active | 200 | https://owasp.org/www-project-application-security-verification-standard/ |
| resource | `res-owasp-cheatsheets` | active | 200 | https://cheatsheetseries.owasp.org/ |
| resource | `res-owasp-code-review-cheatsheet` | active | 200 | https://cheatsheetseries.owasp.org/cheatsheets/Secure_Code_Review_Cheat_Sheet.html |
| resource | `res-owasp-code-review-guide` | active | 200 | https://owasp.org/www-project-code-review-guide/ |
| resource | `res-owasp-genai` | active | 200 | https://genai.owasp.org/ |
| resource | `res-owasp-iot-project` | active | 200 | https://owasp.org/www-project-internet-of-things/ |
| resource | `res-owasp-iot-testing-guide` | active | 200 | https://owasp.org/www-project-iot-security-testing-guide/ |
| resource | `res-owasp-istg` | active | 200 | https://owasp.org/owasp-istg/index.html |
| resource | `res-owasp-llm-top10` | active | 200 | https://owasp.org/www-project-top-10-for-large-language-model-applications/ |
| resource | `res-owasp-llmsvs` | active | 200 | https://owasp.org/www-project-llm-verification-standard/ |
| resource | `res-owasp-mas` | active | 200 | https://mas.owasp.org/ |
| resource | `res-owasp-mastg` | active | 200 | https://mas.owasp.org/MASTG/ |
| resource | `res-owasp-masvs` | active | 200 | https://mas.owasp.org/MASVS/ |
| resource | `res-owasp-scs` | active | 200 | https://scs.owasp.org/ |
| resource | `res-owasp-scstg` | active | 200 | https://scs.owasp.org/SCSTG/ |
| resource | `res-owasp-scsvs` | active | 200 | https://owasp.org/www-project-smart-contract-security-verification-standard/ |
| resource | `res-owasp-scvs` | active | 200 | https://owasp.org/www-project-software-component-verification-standard/ |
| resource | `res-owasp-tcasvs` | active | 200 | https://owasp.org/TCASVS/ |
| resource | `res-owasp-thick-client-top10` | active | 200 | https://owasp.org/www-project-thick-client-top-10/ |
| resource | `res-owasp-wifi-testing` | active | 200 | https://owasp.org/www-project-wi-fi-security-testing-guide/ |
| resource | `res-owasp-wstg` | active | 200 | https://owasp.org/www-project-web-security-testing-guide/ |
| resource | `res-portswigger-academy` | active | 200 | https://portswigger.net/web-security |
| resource | `res-portswigger-all-labs` | active | 200 | https://portswigger.net/web-security/all-labs |
| resource | `res-portswigger-all-topics` | active | 200 | https://portswigger.net/web-security/all-topics |
| resource | `res-portswigger-api-testing` | active | 200 | https://portswigger.net/web-security/api-testing |
| resource | `res-portswigger-graphql` | active | 200 | https://portswigger.net/web-security/graphql |
| resource | `res-portswigger-jwt` | active | 200 | https://portswigger.net/web-security/jwt |
| resource | `res-portswigger-learning-paths` | active | 200 | https://portswigger.net/web-security/learning-paths |
| resource | `res-portswigger-llm-attacks` | active | 200 | https://portswigger.net/web-security/learning-paths/llm-attacks |
| resource | `res-portswigger-oauth` | active | 200 | https://portswigger.net/web-security/oauth |
| resource | `res-pwn-college` | active | 200 | https://pwn.college/ |
| resource | `res-pwn-college-binary` | active | 200 | https://pwn.college/intro-to-cybersecurity/binary-exploitation/ |
| resource | `res-pwn-college-software-exploitation` | active | 200 | https://pwn.college/software-exploitation/ |
| resource | `res-rfc9700` | redirected | 200 | https://www.rfc-editor.org/rfc/rfc9700 |
| resource | `res-scstg-tests` | active | 200 | https://scs.owasp.org/SCSTG/tests/ |
| resource | `res-scvs-site` | active | 200 | https://scvs.owasp.org/ |
| resource | `res-sigstore` | active | 200 | https://docs.sigstore.dev/ |
| resource | `res-slsa` | active | 200 | https://slsa.dev/ |
| resource | `res-solidity-docs` | rate-limited | 429 | https://docs.soliditylang.org/ |
| resource | `res-webauthn` | blocked | 403 | https://www.w3.org/TR/webauthn-3/ |
| resource | `res-webgoat` | active | 200 | https://owasp.org/www-project-webgoat/ |
| resource | `res-webgoat-repo` | active | 200 | https://github.com/WebGoat/WebGoat |
| resource | `res-wireshark-guide` | active | 200 | https://www.wireshark.org/docs/wsug_html_chunked/ |
| resource | `res-wrongsecrets` | active | 200 | https://owasp.org/www-project-wrongsecrets/ |
| resource | `res-wrongsecrets-repo` | active | 200 | https://github.com/OWASP/wrongsecrets |
| standard | `std-attack-ics` | active | 200 | https://attack.mitre.org/matrices/ics/ |
| standard | `std-bugcrowd-vrt` | active | 200 | https://github.com/bugcrowd/vulnerability-rating-taxonomy |
| standard | `std-capec` | active | 200 | https://capec.mitre.org/ |
| standard | `std-cvss4` | active | 200 | https://www.first.org/cvss/v4.0/ |
| standard | `std-cwe` | active | 200 | https://cwe.mitre.org/ |
| standard | `std-graphql` | active | 200 | https://spec.graphql.org/ |
| standard | `std-nist-800-115` | active | 200 | https://csrc.nist.gov/pubs/sp/800/115/final |
| standard | `std-nist-800-82` | active | 200 | https://csrc.nist.gov/pubs/sp/800/82/r3/final |
| standard | `std-nist-ai-rmf` | active | 200 | https://www.nist.gov/itl/ai-risk-management-framework |
| standard | `std-nist-ssdf` | active | 200 | https://csrc.nist.gov/pubs/sp/800/218/final |
| standard | `std-oidc-core` | active | 200 | https://openid.net/specs/openid-connect-core-1_0.html |
| standard | `std-openapi` | active | 200 | https://spec.openapis.org/oas/latest.html |
| standard | `std-owasp-api-top10` | active | 200 | https://owasp.org/API-Security/ |
| standard | `std-owasp-asvs` | active | 200 | https://owasp.org/www-project-application-security-verification-standard/ |
| standard | `std-owasp-istg` | active | 200 | https://owasp.org/www-project-iot-security-testing-guide/ |
| standard | `std-owasp-llm-top10` | active | 200 | https://genai.owasp.org/ |
| standard | `std-owasp-mastg` | active | 200 | https://mas.owasp.org/MASTG/ |
| standard | `std-owasp-masvs` | active | 200 | https://mas.owasp.org/MASVS/ |
| standard | `std-owasp-scsvs` | active | 200 | https://scs.owasp.org/ |
| standard | `std-owasp-scvs` | active | 200 | https://owasp.org/www-project-software-component-verification-standard/ |
| standard | `std-owasp-wstg` | active | 200 | https://owasp.org/www-project-web-security-testing-guide/ |
| standard | `std-rfc9700` | redirected | 200 | https://www.rfc-editor.org/rfc/rfc9700 |
| standard | `std-slsa` | active | 200 | https://slsa.dev/ |
| standard | `std-webauthn` | blocked | 403 | https://www.w3.org/TR/webauthn-3/ |
| tool | `tool-adb` | unknown | - | https://developer.android.com/tools/adb |
| tool | `tool-android-emulator` | unknown | - | https://developer.android.com/studio/run/emulator |
| tool | `tool-api-client` | active | 200 | https://spec.openapis.org/oas/latest.html |
| tool | `tool-burp` | active | 200 | https://portswigger.net/burp/documentation |
| tool | `tool-curl` | active | 200 | https://curl.se/docs/ |
| tool | `tool-debugger` | unknown | - | https://sourceware.org/gdb/documentation/ |
| tool | `tool-devtools` | active | 200 | https://developer.chrome.com/docs/devtools |
| tool | `tool-dig` | active | 200 | https://www.isc.org/bind/ |
| tool | `tool-docker` | active | 200 | https://docs.docker.com/engine/security/ |
| tool | `tool-foundry` | redirected | 200 | https://book.getfoundry.sh/ |
| tool | `tool-frida` | active | 200 | https://frida.re/docs/ |
| tool | `tool-fuzzer` | active | 200 | https://aflplus.plus/ |
| tool | `tool-ghidra` | redirected | 200 | https://ghidra-sre.org/ |
| tool | `tool-git` | active | 200 | https://git-scm.com/doc |
| tool | `tool-nmap` | unknown | - | https://nmap.org/book/ |
| tool | `tool-openssl` | active | 200 | https://docs.openssl.org/ |
| tool | `tool-static-analyzer` | active | 200 | https://codeql.github.com/docs/ |
| tool | `tool-vm` | active | 200 | https://www.virtualbox.org/wiki/Documentation |
| tool | `tool-wireshark` | active | 200 | https://www.wireshark.org/docs/wsug_html_chunked/ |
