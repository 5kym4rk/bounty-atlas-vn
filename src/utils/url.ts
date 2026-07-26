/**
 * Kiểm soát URL. Xem SAFETY_MODEL.md §5.
 *
 * Ứng dụng không bao giờ tự fetch các URL này — chúng chỉ là đích của thẻ <a>
 * do người dùng chủ động bấm.
 */

const BLOCKED_PROTOCOLS = new Set([
  'javascript:',
  'data:',
  'vbscript:',
  'file:',
  'blob:',
  'about:',
]);

const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '[::1]']);

/** true nếu URL an toàn để render thành liên kết ngoài. */
export function isSafeExternalUrl(value: string): boolean {
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    return false;
  }
  if (BLOCKED_PROTOCOLS.has(parsed.protocol)) return false;
  if (parsed.protocol === 'https:') return true;
  // http chỉ chấp nhận cho lab chạy trên máy người học.
  if (parsed.protocol === 'http:') return LOCAL_HOSTS.has(parsed.hostname);
  return false;
}

/** Trả về URL nếu an toàn, ngược lại trả `null` để component bỏ qua liên kết. */
export function safeExternalUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  return isSafeExternalUrl(value) ? value : null;
}

/** Ném lỗi nếu URL không an toàn. Dùng trong validator và test. */
export function assertSafeUrl(value: string, context: string): void {
  if (!isSafeExternalUrl(value)) {
    throw new Error(`URL không an toàn tại ${context}: ${value}`);
  }
}

/** Tên miền hiển thị cạnh liên kết ngoài để người dùng biết mình sắp đi đâu. */
export function displayHost(value: string): string {
  try {
    return new URL(value).host;
  } catch {
    return '';
  }
}
