/**
 * Chuẩn hoá tiếng Việt để tìm kiếm không dấu.
 *
 * `normalizeVi('Kiểm thử ỦY quyền')` → `'kiem thu uy quyen'`
 * nên gõ "kiem thu uy quyen" hoặc "Kiểm thử uỷ quyền" đều khớp.
 */

/**
 * Bỏ dấu tiếng Việt và hạ chữ thường.
 *
 * Dùng NFD để tách dấu thanh/dấu mũ rồi loại combining marks. Chữ đ/Đ không có
 * dạng phân tách trong Unicode nên phải xử lý riêng.
 */
export function normalizeVi(input: string): string {
  return input
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

/** Chuẩn hoá và gộp khoảng trắng, dùng làm khoá so khớp. */
export function searchKey(input: string): string {
  return normalizeVi(input).replace(/\s+/g, ' ');
}

/** Kiểm tra `haystack` có chứa `needle` theo kiểu không dấu, không phân biệt hoa thường. */
export function containsVi(haystack: string, needle: string): boolean {
  const n = searchKey(needle);
  if (!n) return true;
  return searchKey(haystack).includes(n);
}

/** Tách chuỗi thành token đã chuẩn hoá, bỏ token rỗng. */
export function tokenizeVi(input: string): string[] {
  return searchKey(input)
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}
