/**
 * Phát hiện chuỗi trông giống bí mật để cảnh báo người dùng trước khi họ lưu
 * token/credential vào ghi chú. Đây là cảnh báo hỗ trợ, KHÔNG phải bộ lọc bảo mật.
 */

export interface SensitiveHit {
  kind: string;
  hintVi: string;
}

interface Rule {
  kind: string;
  hintVi: string;
  test: RegExp;
}

const RULES: Rule[] = [
  {
    kind: 'jwt',
    hintVi: 'Chuỗi này trông giống một JWT. JWT thường chứa thông tin phiên đăng nhập.',
    test: /\beyJ[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}\b/,
  },
  {
    kind: 'aws-access-key',
    hintVi: 'Chuỗi này trông giống AWS Access Key ID.',
    test: /\b(?:AKIA|ASIA|AIDA|AROA)[0-9A-Z]{16}\b/,
  },
  {
    kind: 'private-key-block',
    hintVi: 'Đây có vẻ là khối private key. Không lưu private key vào ghi chú.',
    test: /-----BEGIN (?:RSA |EC |OPENSSH |PGP )?PRIVATE KEY-----/,
  },
  {
    kind: 'bearer-token',
    hintVi: 'Có header Authorization kèm token. Hãy che token trước khi lưu.',
    test: /\bauthorization\s*:\s*(?:bearer|basic)\s+\S{8,}/i,
  },
  {
    kind: 'github-token',
    hintVi: 'Chuỗi này trông giống GitHub personal access token.',
    test: /\bgh[pousr]_[A-Za-z0-9]{20,}\b/,
  },
  {
    kind: 'slack-token',
    hintVi: 'Chuỗi này trông giống Slack token.',
    test: /\bxox[abprs]-[A-Za-z0-9-]{10,}\b/,
  },
  {
    kind: 'generic-secret-assignment',
    hintVi: 'Có gán giá trị cho biến tên kiểu secret/password/api key.',
    test: /\b(?:api[_-]?key|secret|passwd|password|client[_-]?secret)\b\s*[:=]\s*["']?\S{8,}/i,
  },
  {
    kind: 'session-cookie',
    hintVi: 'Có vẻ là cookie phiên. Cookie phiên có thể dùng để mạo danh tài khoản.',
    test: /\b(?:set-)?cookie\s*:\s*\S*(?:session|sid|jsessionid|phpsessid)\S*=/i,
  },
];

/** Trả về danh sách cảnh báo (rỗng nếu không phát hiện gì). */
export function detectSensitiveString(input: string): SensitiveHit[] {
  if (!input) return [];
  const hits: SensitiveHit[] = [];
  for (const rule of RULES) {
    if (rule.test.test(input)) hits.push({ kind: rule.kind, hintVi: rule.hintVi });
  }
  return hits;
}

/** Thay các chuỗi nhạy cảm bằng nhãn, dùng cho export có redaction. */
export function redactSensitive(input: string): string {
  let output = input;
  for (const rule of RULES) {
    output = output.replace(
      new RegExp(rule.test.source, rule.test.flags.includes('i') ? 'gi' : 'g'),
      `[ĐÃ CHE: ${rule.kind}]`,
    );
  }
  return output;
}
