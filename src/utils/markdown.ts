/**
 * Sinh và thoát Markdown cho phần export của Report Builder.
 *
 * KHÔNG có hàm nào ở đây trả về HTML. Việc hiển thị nội dung do người dùng nhập
 * luôn đi qua React text node, không qua `dangerouslySetInnerHTML`.
 */

/** Thoát các ký tự có ý nghĩa trong Markdown để nội dung người dùng không phá cấu trúc. */
export function escapeMarkdown(input: string): string {
  return input.replace(/([\\`*_{}[\]()#+\-.!|>])/g, '\\$1');
}

/** Thoát nội dung đưa vào ô của bảng Markdown. */
export function escapeTableCell(input: string): string {
  return input.replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
}

/**
 * Chống công thức bị thực thi khi người dùng dán nội dung vào bảng tính.
 * Thêm dấu nháy đơn dẫn đầu cho ô bắt đầu bằng = + - @ tab hoặc CR.
 */
export function neutralizeFormula(input: string): string {
  return /^[=+\-@\t\r]/.test(input) ? `'${input}` : input;
}

/** Bỏ ký tự điều khiển (trừ tab/newline) khỏi nội dung export. */
export function stripControlChars(input: string): string {
  // eslint-disable-next-line no-control-regex
  return input.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, '');
}

/** Khối mã Markdown có rào chắn đủ dài để nội dung bên trong không thoát ra. */
export function fencedCodeBlock(content: string, language = ''): string {
  const longest = (content.match(/`+/g) ?? []).reduce((max, run) => Math.max(max, run.length), 0);
  const fence = '`'.repeat(Math.max(3, longest + 1));
  return `${fence}${language}\n${stripControlChars(content)}\n${fence}`;
}

/** Ghép các phần thành tài liệu Markdown, bỏ phần rỗng. */
export function joinSections(sections: (string | null | undefined)[]): string {
  return sections.filter((s): s is string => Boolean(s && s.trim())).join('\n\n');
}

/** Tiêu đề Markdown ở cấp cho trước. */
export function heading(level: number, text: string): string {
  return `${'#'.repeat(Math.min(6, Math.max(1, level)))} ${stripControlChars(text)}`;
}

/** Danh sách gạch đầu dòng. */
export function bulletList(items: string[]): string {
  return items
    .filter((i) => i.trim())
    .map((i) => `- ${stripControlChars(i)}`)
    .join('\n');
}
