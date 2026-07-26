/**
 * Lớp liên kết chéo giữa các entity.
 *
 * Tách riêng khỏi file định nghĩa để mỗi entity chỉ khai báo nội dung của nó,
 * còn quan hệ giữa chúng nằm ở một chỗ duy nhất và dễ kiểm tra.
 *
 * Một số quan hệ được SUY RA tự động trong `dataset.ts` thay vì khai báo tay:
 * - `module.quizIds`   ← quiz.moduleId
 * - `module.labIds`    ← lab.moduleIds
 * - `module.requiredResourceIds` ← resource.moduleIds
 */

export interface ModuleLinks {
  conceptIds?: string[];
  weaknessIds?: string[];
  checklistIds?: string[];
  reportExerciseIds?: string[];
}

export const MODULE_LINKS: Record<string, ModuleLinks> = {
  // ── Domain A: Policy ───────────────────────────────────────────────
  'mod-policy-program-types': {
    conceptIds: ['cpt-scope'],
    checklistIds: ['chk-program-policy'],
  },
  'mod-policy-safe-harbor': {
    conceptIds: ['cpt-safe-harbor', 'cpt-scope'],
    checklistIds: ['chk-program-policy'],
  },
  'mod-policy-scope-reading': {
    conceptIds: ['cpt-scope'],
    checklistIds: ['chk-program-policy'],
  },
  'mod-policy-asset-identifiers': {
    conceptIds: ['cpt-scope', 'cpt-attack-surface'],
    checklistIds: ['chk-program-policy', 'chk-asset-mapping'],
  },
  'mod-policy-stop-rules': {
    conceptIds: ['cpt-minimal-poc', 'cpt-evidence-hygiene'],
    checklistIds: ['chk-program-policy'],
    reportExerciseIds: ['rex-privacy-exposure'],
  },
  'mod-policy-worklog': {
    conceptIds: ['cpt-evidence-hygiene'],
    checklistIds: ['chk-reporting'],
  },
  'mod-policy-practice-plan': {
    conceptIds: ['cpt-knowledge-gap'],
  },
  'mod-policy-report-structure': {
    conceptIds: ['cpt-severity-vs-impact', 'cpt-evidence-hygiene'],
    checklistIds: ['chk-reporting'],
    reportExerciseIds: ['rex-idor-basic'],
  },
  'mod-policy-severity': {
    conceptIds: ['cpt-severity-vs-impact'],
    checklistIds: ['chk-reporting'],
    reportExerciseIds: ['rex-idor-basic'],
  },
  'mod-policy-triage-states': {
    conceptIds: ['cpt-severity-vs-impact', 'cpt-false-positive'],
    checklistIds: ['chk-reporting'],
  },

  // ── Domain B: Foundations ──────────────────────────────────────────
  'mod-found-linux': { conceptIds: ['cpt-least-privilege'], checklistIds: ['chk-foundations'] },
  'mod-found-windows': { conceptIds: ['cpt-least-privilege'], checklistIds: ['chk-foundations'] },
  'mod-found-tcpip': { conceptIds: ['cpt-attack-surface'], checklistIds: ['chk-foundations'] },
  'mod-found-dns-tls': {
    conceptIds: ['cpt-trust-boundary'],
    weaknessIds: ['wkn-tls-misconfig', 'wkn-dangling-dns'],
    checklistIds: ['chk-foundations'],
  },
  'mod-found-http': { conceptIds: ['cpt-cache-key'], checklistIds: ['chk-foundations'] },
  'mod-found-browser-model': {
    conceptIds: ['cpt-same-origin-policy', 'cpt-output-encoding'],
    weaknessIds: ['wkn-cors-misconfig'],
    checklistIds: ['chk-foundations'],
  },
  'mod-found-reading-code': { conceptIds: ['cpt-source-sink'] },
  'mod-found-encoding': {
    conceptIds: ['cpt-normalization'],
    weaknessIds: ['wkn-path-traversal'],
  },
  'mod-found-crypto-basics': { conceptIds: ['cpt-token-lifecycle'] },
  'mod-found-git': { conceptIds: ['cpt-provenance'], weaknessIds: ['wkn-secret-exposure'] },
  'mod-found-sdlc': { conceptIds: ['cpt-sbom', 'cpt-provenance'] },
  'mod-found-authn-authz-model': {
    conceptIds: ['cpt-authentication', 'cpt-authorization', 'cpt-least-privilege'],
    checklistIds: ['chk-foundations'],
  },
  'mod-found-threat-model': {
    conceptIds: ['cpt-trust-boundary', 'cpt-attack-surface', 'cpt-defense-in-depth'],
    checklistIds: ['chk-asset-mapping'],
  },

  // ── Domain C: Methodology ──────────────────────────────────────────
  'mod-method-asset-mapping': {
    conceptIds: ['cpt-attack-surface', 'cpt-trust-boundary'],
    checklistIds: ['chk-asset-mapping'],
  },
  'mod-method-passive-active': { conceptIds: ['cpt-scope'], checklistIds: ['chk-asset-mapping'] },
  'mod-method-workflow': {
    conceptIds: ['cpt-minimal-poc', 'cpt-false-positive'],
    checklistIds: ['chk-asset-mapping', 'chk-reporting'],
    reportExerciseIds: ['rex-idor-basic'],
  },
  'mod-method-false-positive': {
    conceptIds: ['cpt-false-positive', 'cpt-tool-output-not-evidence'],
  },
  'mod-method-evidence': {
    conceptIds: ['cpt-evidence-hygiene', 'cpt-minimal-poc'],
    checklistIds: ['chk-reporting'],
    reportExerciseIds: ['rex-privacy-exposure'],
  },
  'mod-method-proxy': { conceptIds: ['cpt-trust-boundary'] },
  'mod-method-tool-output': { conceptIds: ['cpt-tool-output-not-evidence', 'cpt-false-positive'] },

  // ── Domain D: Web ──────────────────────────────────────────────────
  'mod-web-architecture': {
    conceptIds: ['cpt-attack-surface', 'cpt-cache-key'],
    checklistIds: ['chk-web-feature'],
  },
  'mod-web-login': {
    conceptIds: ['cpt-authentication'],
    weaknessIds: ['wkn-user-enumeration', 'wkn-weak-session'],
    checklistIds: ['chk-authentication'],
    reportExerciseIds: ['rex-auth-bypass'],
  },
  'mod-web-password-reset': {
    conceptIds: ['cpt-authentication', 'cpt-token-lifecycle'],
    weaknessIds: ['wkn-weak-reset'],
    checklistIds: ['chk-authentication'],
    reportExerciseIds: ['rex-auth-bypass'],
  },
  'mod-web-session': {
    conceptIds: ['cpt-authentication'],
    weaknessIds: ['wkn-weak-session'],
    checklistIds: ['chk-authentication'],
  },
  'mod-web-idor': {
    conceptIds: ['cpt-authorization', 'cpt-minimal-poc'],
    weaknessIds: ['wkn-idor'],
    checklistIds: ['chk-authorization'],
    reportExerciseIds: ['rex-idor-basic'],
  },
  'mod-web-privilege-escalation': {
    conceptIds: ['cpt-authorization'],
    weaknessIds: ['wkn-bfla', 'wkn-mass-assignment'],
    checklistIds: ['chk-authorization'],
    reportExerciseIds: ['rex-idor-basic'],
  },
  'mod-web-tenant-isolation': {
    conceptIds: ['cpt-multi-tenancy'],
    weaknessIds: ['wkn-tenant-isolation'],
    checklistIds: ['chk-authorization'],
    reportExerciseIds: ['rex-tenant-leak'],
  },
  'mod-web-sqli': {
    conceptIds: ['cpt-parameterized-query', 'cpt-source-sink'],
    weaknessIds: ['wkn-sqli', 'wkn-nosql-injection'],
    checklistIds: ['chk-web-feature'],
    reportExerciseIds: ['rex-idor-basic'],
  },
  'mod-web-command-injection': {
    conceptIds: ['cpt-parameterized-query'],
    weaknessIds: ['wkn-command-injection'],
    checklistIds: ['chk-web-feature'],
  },
  'mod-web-ssti': {
    conceptIds: ['cpt-source-sink'],
    weaknessIds: ['wkn-ssti'],
    checklistIds: ['chk-web-feature'],
  },
  'mod-web-xxe': {
    conceptIds: ['cpt-source-sink'],
    weaknessIds: ['wkn-xxe'],
    checklistIds: ['chk-web-feature'],
  },
  'mod-web-xss': {
    conceptIds: ['cpt-output-encoding', 'cpt-same-origin-policy'],
    weaknessIds: ['wkn-xss-reflected', 'wkn-xss-stored'],
    checklistIds: ['chk-web-feature'],
    reportExerciseIds: ['rex-stored-xss'],
  },
  'mod-web-dom-xss': {
    conceptIds: ['cpt-output-encoding'],
    weaknessIds: ['wkn-dom-xss', 'wkn-prototype-pollution'],
    checklistIds: ['chk-web-feature'],
    reportExerciseIds: ['rex-stored-xss'],
  },
  'mod-web-postmessage': {
    conceptIds: ['cpt-same-origin-policy'],
    weaknessIds: ['wkn-dom-xss'],
    checklistIds: ['chk-web-feature'],
  },
  'mod-web-csp': {
    conceptIds: ['cpt-defense-in-depth', 'cpt-output-encoding'],
    weaknessIds: ['wkn-xss-stored'],
    checklistIds: ['chk-web-feature'],
  },
  'mod-web-csrf': {
    conceptIds: ['cpt-same-origin-policy'],
    weaknessIds: ['wkn-csrf'],
    checklistIds: ['chk-web-feature'],
  },
  'mod-web-cors': {
    conceptIds: ['cpt-same-origin-policy'],
    weaknessIds: ['wkn-cors-misconfig'],
    checklistIds: ['chk-web-feature'],
  },
  'mod-web-ssrf': {
    conceptIds: ['cpt-trust-boundary', 'cpt-minimal-poc'],
    weaknessIds: ['wkn-ssrf', 'wkn-open-redirect'],
    checklistIds: ['chk-web-feature'],
    reportExerciseIds: ['rex-ssrf-safe'],
  },
  'mod-web-cache': {
    conceptIds: ['cpt-cache-key'],
    weaknessIds: ['wkn-cache-poisoning'],
    checklistIds: ['chk-web-feature'],
  },
  'mod-web-smuggling': {
    conceptIds: ['cpt-protocol-desync'],
    weaknessIds: ['wkn-request-smuggling'],
    checklistIds: ['chk-web-feature'],
  },
  'mod-web-file-upload': {
    conceptIds: ['cpt-normalization'],
    weaknessIds: ['wkn-unrestricted-upload'],
    checklistIds: ['chk-web-feature'],
  },
  'mod-web-path-traversal': {
    conceptIds: ['cpt-normalization'],
    weaknessIds: ['wkn-path-traversal'],
    checklistIds: ['chk-web-feature'],
  },
  'mod-web-info-disclosure': {
    conceptIds: ['cpt-data-minimization'],
    weaknessIds: ['wkn-secret-exposure', 'wkn-excessive-data'],
    checklistIds: ['chk-web-feature'],
    reportExerciseIds: ['rex-privacy-exposure'],
  },
  'mod-web-deserialization': {
    conceptIds: ['cpt-source-sink'],
    weaknessIds: ['wkn-deserialization', 'wkn-prototype-pollution'],
    checklistIds: ['chk-web-feature'],
  },
  'mod-web-race-condition': {
    conceptIds: ['cpt-idempotency'],
    weaknessIds: ['wkn-race-condition'],
    checklistIds: ['chk-business-flow'],
    reportExerciseIds: ['rex-race-condition'],
  },
  'mod-web-webhook': {
    conceptIds: ['cpt-idempotency', 'cpt-federation-trust'],
    weaknessIds: ['wkn-ssrf'],
    checklistIds: ['chk-business-flow'],
  },
  'mod-web-business-logic': {
    conceptIds: ['cpt-invariant'],
    weaknessIds: ['wkn-business-logic'],
    checklistIds: ['chk-business-flow'],
    reportExerciseIds: ['rex-race-condition'],
  },
  'mod-web-payment-flow': {
    conceptIds: ['cpt-invariant', 'cpt-idempotency'],
    weaknessIds: ['wkn-business-logic', 'wkn-race-condition'],
    checklistIds: ['chk-business-flow'],
    reportExerciseIds: ['rex-race-condition'],
  },
  'mod-web-websocket': {
    conceptIds: ['cpt-authorization'],
    weaknessIds: ['wkn-csrf'],
    checklistIds: ['chk-web-feature'],
  },
  'mod-web-wasm': { conceptIds: ['cpt-trust-boundary'], checklistIds: ['chk-web-feature'] },
  'mod-web-edge': {
    conceptIds: ['cpt-cache-key', 'cpt-protocol-desync'],
    weaknessIds: ['wkn-cache-poisoning'],
    checklistIds: ['chk-web-feature'],
  },

  // ── Domain E: API ──────────────────────────────────────────────────
  'mod-api-fundamentals': { conceptIds: ['cpt-attack-surface'], checklistIds: ['chk-api'] },
  'mod-api-graphql': {
    conceptIds: ['cpt-authorization'],
    weaknessIds: ['wkn-resource-consumption', 'wkn-excessive-data'],
    checklistIds: ['chk-api'],
  },
  'mod-api-bola': {
    conceptIds: ['cpt-authorization', 'cpt-minimal-poc'],
    weaknessIds: ['wkn-idor'],
    checklistIds: ['chk-api', 'chk-authorization'],
    reportExerciseIds: ['rex-bola-api'],
  },
  'mod-api-mass-assignment': {
    conceptIds: ['cpt-authorization'],
    weaknessIds: ['wkn-mass-assignment'],
    checklistIds: ['chk-api'],
    reportExerciseIds: ['rex-bola-api'],
  },
  'mod-api-bfla': {
    conceptIds: ['cpt-authorization'],
    weaknessIds: ['wkn-bfla'],
    checklistIds: ['chk-api'],
    reportExerciseIds: ['rex-bola-api'],
  },
  'mod-api-tokens': {
    conceptIds: ['cpt-token-lifecycle'],
    weaknessIds: ['wkn-secret-exposure'],
    checklistIds: ['chk-api'],
  },
  'mod-api-jwt': {
    conceptIds: ['cpt-token-lifecycle', 'cpt-federation-trust'],
    weaknessIds: ['wkn-jwt-validation'],
    checklistIds: ['chk-api', 'chk-identity'],
  },
  'mod-api-resource-abuse': {
    conceptIds: ['cpt-defense-in-depth'],
    weaknessIds: ['wkn-resource-consumption'],
    checklistIds: ['chk-api'],
  },
  'mod-api-excessive-data': {
    conceptIds: ['cpt-data-minimization'],
    weaknessIds: ['wkn-excessive-data'],
    checklistIds: ['chk-api', 'chk-privacy'],
    reportExerciseIds: ['rex-privacy-exposure'],
  },
  'mod-api-testing-workflow': {
    conceptIds: ['cpt-authorization'],
    weaknessIds: ['wkn-idor', 'wkn-bfla'],
    checklistIds: ['chk-api'],
    reportExerciseIds: ['rex-bola-api'],
  },

  // ── Domain F: Identity ─────────────────────────────────────────────
  'mod-identity-oauth': {
    conceptIds: ['cpt-federation-trust', 'cpt-token-lifecycle'],
    weaknessIds: ['wkn-oauth-redirect', 'wkn-open-redirect'],
    checklistIds: ['chk-identity'],
    reportExerciseIds: ['rex-oauth-redirect'],
  },
  'mod-identity-oidc-jwt': {
    conceptIds: ['cpt-federation-trust'],
    weaknessIds: ['wkn-jwt-validation'],
    checklistIds: ['chk-identity'],
    reportExerciseIds: ['rex-oauth-redirect'],
  },
  'mod-identity-account-linking': {
    conceptIds: ['cpt-federation-trust', 'cpt-authentication'],
    weaknessIds: ['wkn-account-linking'],
    checklistIds: ['chk-identity'],
    reportExerciseIds: ['rex-oauth-redirect'],
  },
  'mod-identity-tenant': {
    conceptIds: ['cpt-multi-tenancy', 'cpt-federation-trust'],
    weaknessIds: ['wkn-tenant-isolation'],
    checklistIds: ['chk-identity', 'chk-saas'],
    reportExerciseIds: ['rex-tenant-leak'],
  },
  'mod-identity-passkey-recovery': {
    conceptIds: ['cpt-authentication', 'cpt-defense-in-depth'],
    weaknessIds: ['wkn-weak-reset'],
    checklistIds: ['chk-identity'],
    reportExerciseIds: ['rex-auth-bypass'],
  },

  // ── Domain G: Mobile ───────────────────────────────────────────────
  'mod-mobile-architecture': {
    conceptIds: ['cpt-attack-surface', 'cpt-trust-boundary'],
    checklistIds: ['chk-mobile'],
  },
  'mod-mobile-android-components': {
    conceptIds: ['cpt-trust-boundary'],
    weaknessIds: ['wkn-exported-component'],
    checklistIds: ['chk-mobile'],
    reportExerciseIds: ['rex-mobile-storage'],
  },
  'mod-mobile-android-storage': {
    conceptIds: ['cpt-data-minimization'],
    weaknessIds: ['wkn-insecure-local-storage'],
    checklistIds: ['chk-mobile'],
    reportExerciseIds: ['rex-mobile-storage'],
  },
  'mod-mobile-ios-platform': {
    conceptIds: ['cpt-trust-boundary'],
    weaknessIds: ['wkn-exported-component'],
    checklistIds: ['chk-mobile'],
    reportExerciseIds: ['rex-mobile-storage'],
  },
  'mod-mobile-ios-storage': {
    conceptIds: ['cpt-data-minimization'],
    weaknessIds: ['wkn-insecure-local-storage'],
    checklistIds: ['chk-mobile'],
    reportExerciseIds: ['rex-mobile-storage'],
  },
  'mod-mobile-network': {
    conceptIds: ['cpt-trust-boundary', 'cpt-token-lifecycle'],
    weaknessIds: ['wkn-cert-validation'],
    checklistIds: ['chk-mobile'],
    reportExerciseIds: ['rex-mobile-storage'],
  },
  'mod-mobile-test-env': { conceptIds: ['cpt-evidence-hygiene'], checklistIds: ['chk-mobile'] },

  // ── Domain H: Cloud ────────────────────────────────────────────────
  'mod-cloud-shared-responsibility': {
    conceptIds: ['cpt-shared-responsibility'],
    checklistIds: ['chk-cloud'],
  },
  'mod-cloud-iam': {
    conceptIds: ['cpt-least-privilege'],
    weaknessIds: ['wkn-excessive-iam'],
    checklistIds: ['chk-cloud'],
    reportExerciseIds: ['rex-cloud-public-storage'],
  },
  'mod-cloud-aws-iam': {
    conceptIds: ['cpt-least-privilege', 'cpt-trust-boundary'],
    weaknessIds: ['wkn-excessive-iam', 'wkn-metadata-access'],
    checklistIds: ['chk-cloud'],
    reportExerciseIds: ['rex-cloud-public-storage'],
  },
  'mod-cloud-aws-storage': {
    conceptIds: ['cpt-shared-responsibility'],
    weaknessIds: ['wkn-public-storage'],
    checklistIds: ['chk-cloud'],
    reportExerciseIds: ['rex-cloud-public-storage'],
  },
  'mod-cloud-azure': {
    conceptIds: ['cpt-least-privilege'],
    weaknessIds: ['wkn-excessive-iam', 'wkn-public-storage'],
    checklistIds: ['chk-cloud'],
    reportExerciseIds: ['rex-cloud-public-storage'],
  },
  'mod-cloud-gcp': {
    conceptIds: ['cpt-least-privilege'],
    weaknessIds: ['wkn-excessive-iam', 'wkn-secret-exposure'],
    checklistIds: ['chk-cloud'],
    reportExerciseIds: ['rex-cloud-public-storage'],
  },
  'mod-cloud-attack-classes': {
    conceptIds: ['cpt-least-privilege', 'cpt-trust-boundary'],
    weaknessIds: ['wkn-public-storage', 'wkn-metadata-access', 'wkn-secret-exposure'],
    checklistIds: ['chk-cloud'],
    reportExerciseIds: ['rex-cloud-public-storage'],
  },
  'mod-cloud-misconfig-vs-vuln': {
    conceptIds: ['cpt-shared-responsibility'],
    checklistIds: ['chk-cloud'],
    reportExerciseIds: ['rex-cloud-public-storage'],
  },

  // ── Domain I: Container ────────────────────────────────────────────
  'mod-container-basics': {
    conceptIds: ['cpt-trust-boundary', 'cpt-least-privilege'],
    weaknessIds: ['wkn-container-escape-config', 'wkn-secret-exposure'],
    checklistIds: ['chk-container'],
    reportExerciseIds: ['rex-container-privileged'],
  },
  'mod-k8s-rbac': {
    conceptIds: ['cpt-least-privilege'],
    weaknessIds: ['wkn-k8s-rbac-escalation'],
    checklistIds: ['chk-container'],
    reportExerciseIds: ['rex-container-privileged'],
  },
  'mod-k8s-workload-security': {
    conceptIds: ['cpt-defense-in-depth', 'cpt-multi-tenancy'],
    weaknessIds: ['wkn-container-escape-config'],
    checklistIds: ['chk-container'],
    reportExerciseIds: ['rex-container-privileged'],
  },

  // ── Domain J: Network ──────────────────────────────────────────────
  'mod-net-scope': { conceptIds: ['cpt-scope'], checklistIds: ['chk-network'] },
  'mod-net-services': {
    conceptIds: ['cpt-attack-surface'],
    weaknessIds: ['wkn-exposed-service'],
    checklistIds: ['chk-network'],
  },
  'mod-net-flaws': {
    conceptIds: ['cpt-tool-output-not-evidence'],
    weaknessIds: ['wkn-exposed-service'],
    checklistIds: ['chk-network'],
    reportExerciseIds: ['rex-network-exposed-admin'],
  },
  'mod-net-tls-dns': {
    conceptIds: ['cpt-trust-boundary'],
    weaknessIds: ['wkn-tls-misconfig', 'wkn-dangling-dns'],
    checklistIds: ['chk-network'],
    reportExerciseIds: ['rex-network-exposed-admin'],
  },
  'mod-net-tools': {
    conceptIds: ['cpt-tool-output-not-evidence'],
    checklistIds: ['chk-network'],
  },

  // ── Domain K: Desktop ──────────────────────────────────────────────
  'mod-desktop-architecture': {
    conceptIds: ['cpt-trust-boundary'],
    checklistIds: ['chk-desktop'],
  },
  'mod-desktop-flaws': {
    conceptIds: ['cpt-least-privilege'],
    weaknessIds: ['wkn-ipc-authz', 'wkn-unsafe-update', 'wkn-secret-exposure'],
    checklistIds: ['chk-desktop'],
    reportExerciseIds: ['rex-desktop-ipc'],
  },
  'mod-desktop-electron': {
    conceptIds: ['cpt-trust-boundary', 'cpt-output-encoding'],
    weaknessIds: ['wkn-xss-stored'],
    checklistIds: ['chk-desktop'],
    reportExerciseIds: ['rex-desktop-ipc'],
  },
  'mod-desktop-method': {
    conceptIds: ['cpt-evidence-hygiene'],
    checklistIds: ['chk-desktop'],
    reportExerciseIds: ['rex-desktop-ipc'],
  },

  // ── Domain L: Binary ───────────────────────────────────────────────
  'mod-binary-foundations': { conceptIds: ['cpt-memory-safety'], checklistIds: ['chk-binary'] },
  'mod-binary-memory-safety': {
    conceptIds: ['cpt-memory-safety'],
    weaknessIds: ['wkn-buffer-overflow', 'wkn-use-after-free'],
    checklistIds: ['chk-binary'],
    reportExerciseIds: ['rex-binary-crash'],
  },
  'mod-binary-mitigations': {
    conceptIds: ['cpt-defense-in-depth', 'cpt-memory-safety'],
    weaknessIds: ['wkn-buffer-overflow'],
    checklistIds: ['chk-binary'],
    reportExerciseIds: ['rex-binary-crash'],
  },
  'mod-binary-fuzzing': {
    conceptIds: ['cpt-invariant'],
    weaknessIds: ['wkn-buffer-overflow', 'wkn-use-after-free'],
    checklistIds: ['chk-binary'],
    reportExerciseIds: ['rex-binary-crash'],
  },

  // ── Domain M: Code review ──────────────────────────────────────────
  'mod-code-source-sink': {
    conceptIds: ['cpt-source-sink'],
    weaknessIds: ['wkn-sqli', 'wkn-command-injection', 'wkn-path-traversal'],
    checklistIds: ['chk-code-review'],
    reportExerciseIds: ['rex-code-review-variant'],
  },
  'mod-code-authz-review': {
    conceptIds: ['cpt-authorization', 'cpt-source-sink'],
    weaknessIds: ['wkn-idor', 'wkn-bfla'],
    checklistIds: ['chk-code-review'],
    reportExerciseIds: ['rex-code-review-variant'],
  },
  'mod-code-diff-review': {
    conceptIds: ['cpt-variant-analysis'],
    checklistIds: ['chk-code-review'],
    reportExerciseIds: ['rex-code-review-variant'],
  },
  'mod-code-variant-analysis': {
    conceptIds: ['cpt-variant-analysis', 'cpt-source-sink'],
    checklistIds: ['chk-code-review'],
    reportExerciseIds: ['rex-code-review-variant'],
  },
  'mod-code-sast': {
    conceptIds: ['cpt-tool-output-not-evidence', 'cpt-source-sink'],
    checklistIds: ['chk-code-review'],
    reportExerciseIds: ['rex-code-review-variant'],
  },
  'mod-code-oss-disclosure': {
    conceptIds: ['cpt-safe-harbor'],
    checklistIds: ['chk-code-review', 'chk-reporting'],
    reportExerciseIds: ['rex-code-review-variant'],
  },

  // ── Domain N: Supply chain ─────────────────────────────────────────
  'mod-supply-dependencies': {
    conceptIds: ['cpt-sbom', 'cpt-provenance'],
    weaknessIds: ['wkn-dependency-confusion'],
    checklistIds: ['chk-supply-chain'],
    reportExerciseIds: ['rex-supply-chain-secret'],
  },
  'mod-supply-provenance': {
    conceptIds: ['cpt-provenance', 'cpt-sbom'],
    weaknessIds: ['wkn-dependency-confusion'],
    checklistIds: ['chk-supply-chain'],
    reportExerciseIds: ['rex-supply-chain-secret'],
  },
  'mod-supply-cicd-trust': {
    conceptIds: ['cpt-federation-trust', 'cpt-trust-boundary'],
    weaknessIds: ['wkn-cicd-trust'],
    checklistIds: ['chk-supply-chain'],
    reportExerciseIds: ['rex-supply-chain-secret'],
  },
  'mod-supply-secrets': {
    conceptIds: ['cpt-token-lifecycle'],
    weaknessIds: ['wkn-secret-exposure'],
    checklistIds: ['chk-supply-chain'],
    reportExerciseIds: ['rex-supply-chain-secret'],
  },

  // ── Domain O: IoT ──────────────────────────────────────────────────
  'mod-iot-ecosystem': {
    conceptIds: ['cpt-trust-boundary', 'cpt-attack-surface'],
    weaknessIds: ['wkn-exposed-service'],
    checklistIds: ['chk-iot'],
    reportExerciseIds: ['rex-network-exposed-admin'],
  },
  'mod-iot-firmware': {
    conceptIds: ['cpt-secure-boot'],
    weaknessIds: ['wkn-firmware-hardcoded-cred', 'wkn-unsafe-update'],
    checklistIds: ['chk-iot'],
    reportExerciseIds: ['rex-supply-chain-secret'],
  },
  'mod-iot-hardware-interfaces': {
    conceptIds: ['cpt-secure-boot', 'cpt-trust-boundary'],
    weaknessIds: ['wkn-firmware-hardcoded-cred'],
    checklistIds: ['chk-iot'],
    reportExerciseIds: ['rex-network-exposed-admin'],
  },

  // ── Domain P: Wireless ─────────────────────────────────────────────
  'mod-wireless-ble': {
    conceptIds: ['cpt-authentication', 'cpt-trust-boundary'],
    weaknessIds: ['wkn-ble-weak-pairing'],
    checklistIds: ['chk-wireless'],
    reportExerciseIds: ['rex-wireless-ble'],
  },
  'mod-wireless-regulation': {
    conceptIds: ['cpt-scope', 'cpt-safe-harbor'],
    checklistIds: ['chk-wireless'],
    reportExerciseIds: ['rex-wireless-ble'],
  },

  // ── Domain Q: Automotive ───────────────────────────────────────────
  'mod-automotive-architecture': {
    conceptIds: ['cpt-trust-boundary', 'cpt-safety-over-security'],
    weaknessIds: ['wkn-unsafe-update'],
    checklistIds: ['chk-automotive'],
    reportExerciseIds: ['rex-automotive-backend'],
  },
  'mod-automotive-safety': {
    conceptIds: ['cpt-safety-over-security'],
    weaknessIds: ['wkn-idor'],
    checklistIds: ['chk-automotive'],
    reportExerciseIds: ['rex-automotive-backend'],
  },

  // ── Domain R: ICS/OT ───────────────────────────────────────────────
  'mod-ics-architecture': {
    conceptIds: ['cpt-purdue-model', 'cpt-trust-boundary'],
    weaknessIds: ['wkn-ics-protocol-trust', 'wkn-exposed-service'],
    checklistIds: ['chk-ics-ot'],
    reportExerciseIds: ['rex-ics-segmentation'],
  },
  'mod-ics-safety-constraints': {
    conceptIds: ['cpt-safety-over-security', 'cpt-purdue-model'],
    weaknessIds: ['wkn-ics-protocol-trust'],
    checklistIds: ['chk-ics-ot'],
    reportExerciseIds: ['rex-ics-segmentation'],
  },

  // ── Domain S: Web3 ─────────────────────────────────────────────────
  'mod-web3-foundations': {
    conceptIds: ['cpt-evm-state'],
    checklistIds: ['chk-web3'],
  },
  'mod-web3-access-control': {
    conceptIds: ['cpt-authorization', 'cpt-evm-state'],
    weaknessIds: ['wkn-web3-access-control'],
    checklistIds: ['chk-web3'],
    reportExerciseIds: ['rex-web3-access-control'],
  },
  'mod-web3-reentrancy': {
    conceptIds: ['cpt-checks-effects-interactions'],
    weaknessIds: ['wkn-web3-reentrancy'],
    checklistIds: ['chk-web3'],
    reportExerciseIds: ['rex-web3-access-control'],
  },
  'mod-web3-economic': {
    conceptIds: ['cpt-invariant'],
    weaknessIds: ['wkn-web3-oracle'],
    checklistIds: ['chk-web3'],
    reportExerciseIds: ['rex-web3-access-control'],
  },
  'mod-web3-testing': {
    conceptIds: ['cpt-invariant'],
    weaknessIds: ['wkn-web3-reentrancy', 'wkn-web3-oracle'],
    checklistIds: ['chk-web3'],
    reportExerciseIds: ['rex-web3-access-control'],
  },

  // ── Domain T: AI ───────────────────────────────────────────────────
  'mod-ai-architecture': {
    conceptIds: ['cpt-llm-context-untrusted', 'cpt-trust-boundary'],
    checklistIds: ['chk-ai'],
  },
  'mod-ai-prompt-injection': {
    conceptIds: ['cpt-llm-context-untrusted'],
    weaknessIds: ['wkn-ai-indirect-prompt-injection'],
    checklistIds: ['chk-ai'],
    reportExerciseIds: ['rex-ai-agent-authz'],
  },
  'mod-ai-agent-authz': {
    conceptIds: ['cpt-human-in-the-loop', 'cpt-authorization'],
    weaknessIds: ['wkn-ai-excessive-agency'],
    checklistIds: ['chk-ai'],
    reportExerciseIds: ['rex-ai-agent-authz'],
  },
  'mod-ai-rag-isolation': {
    conceptIds: ['cpt-multi-tenancy'],
    weaknessIds: ['wkn-ai-rag-leak'],
    checklistIds: ['chk-ai', 'chk-privacy'],
    reportExerciseIds: ['rex-ai-agent-authz'],
  },
  'mod-ai-policy': {
    conceptIds: ['cpt-safe-harbor', 'cpt-severity-vs-impact'],
    checklistIds: ['chk-ai', 'chk-reporting'],
    reportExerciseIds: ['rex-ai-agent-authz'],
  },

  // ── Domain U: Browser extension ────────────────────────────────────
  'mod-ext-architecture': {
    conceptIds: ['cpt-least-privilege', 'cpt-same-origin-policy'],
    weaknessIds: ['wkn-ext-message-trust'],
    checklistIds: ['chk-browser-ext'],
    reportExerciseIds: ['rex-ext-message'],
  },
  'mod-ext-message-boundary': {
    conceptIds: ['cpt-trust-boundary'],
    weaknessIds: ['wkn-ext-message-trust'],
    checklistIds: ['chk-browser-ext'],
    reportExerciseIds: ['rex-ext-message'],
  },

  // ── Domain V: SaaS ─────────────────────────────────────────────────
  'mod-saas-tenancy': {
    conceptIds: ['cpt-multi-tenancy'],
    weaknessIds: ['wkn-tenant-isolation', 'wkn-shared-link-exposure'],
    checklistIds: ['chk-saas'],
    reportExerciseIds: ['rex-tenant-leak'],
  },
  'mod-saas-email-auth': {
    conceptIds: ['cpt-federation-trust'],
    weaknessIds: ['wkn-email-auth-weak'],
    checklistIds: ['chk-saas'],
    reportExerciseIds: ['rex-tenant-leak'],
  },
  'mod-saas-integrations': {
    conceptIds: ['cpt-least-privilege', 'cpt-federation-trust'],
    weaknessIds: ['wkn-excessive-data'],
    checklistIds: ['chk-saas'],
    reportExerciseIds: ['rex-tenant-leak'],
  },

  // ── Domain W: Privacy ──────────────────────────────────────────────
  'mod-privacy-classification': {
    conceptIds: ['cpt-data-minimization', 'cpt-multi-tenancy'],
    weaknessIds: ['wkn-excessive-data', 'wkn-shared-link-exposure'],
    checklistIds: ['chk-privacy'],
    reportExerciseIds: ['rex-privacy-exposure'],
  },
  'mod-privacy-impact-without-harm': {
    conceptIds: ['cpt-evidence-hygiene', 'cpt-minimal-poc'],
    weaknessIds: ['wkn-excessive-data'],
    checklistIds: ['chk-privacy', 'chk-reporting'],
    reportExerciseIds: ['rex-privacy-exposure'],
  },

  // ── Domain X: Emerging ─────────────────────────────────────────────
  'mod-emerging-evaluating-new-surfaces': {
    conceptIds: ['cpt-knowledge-gap', 'cpt-content-status', 'cpt-attack-surface'],
    checklistIds: ['chk-emerging'],
    reportExerciseIds: ['rex-emerging-new-surface'],
  },
};
