/**
 * Sinh báo cáo độ bao phủ vào reports/coverage.md và reports/coverage.json.
 *
 * Mọi con số ở đây được tính từ dataset. Không hard-code thống kê ở bất kỳ đâu.
 * Chạy: npm run coverage:report
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dataset } from '@/data';
import { buildCoverageReport } from '@/validators/coverage';
import { validateDataset } from '@/validators/dataset';
import { PRODUCT } from '@/config/product';

const here = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(here, '..', '..');
const reportsDir = resolve(projectRoot, 'reports');

function table(headers: string[], rows: (string | number)[][]): string {
  const head = `| ${headers.join(' | ')} |`;
  const sep = `| ${headers.map(() => '---').join(' | ')} |`;
  const body = rows.map((row) => `| ${row.join(' | ')} |`).join('\n');
  return [head, sep, body].join('\n');
}

function main(): void {
  const report = buildCoverageReport(dataset);
  const validation = validateDataset(dataset);

  const gapCounts = new Map<string, number>();
  for (const gap of report.gaps) {
    gapCounts.set(gap.code, (gapCounts.get(gap.code) ?? 0) + 1);
  }

  const md = `# Báo cáo độ bao phủ — ${PRODUCT.name}

> Tệp này được sinh tự động bởi \`npm run coverage:report\`. Đừng sửa tay.
> Mọi con số đều tính trực tiếp từ dữ liệu trong \`src/data/\`.

Phiên bản sản phẩm: ${PRODUCT.version}
Ngày rà soát nội dung ở mức sản phẩm: ${PRODUCT.contentReviewDate}

*Tệp này cố ý không chứa dấu thời gian sinh, để CI có thể phát hiện khi nội dung
báo cáo lệch với dữ liệu. Dấu thời gian nằm trong \`reports/coverage.json\`.*

## 1. Kết quả validator

- Lỗi: **${validation.errorCount}**
- Cảnh báo: **${validation.warningCount}**

## 2. Tổng số lượng

${table(
  ['Thực thể', 'Số lượng'],
  Object.entries(report.totals).map(([key, value]) => [key, value]),
)}

## 3. Tỷ lệ bao phủ

${table(
  ['Chỉ số', 'Giá trị'],
  Object.entries(report.ratios).map(([key, value]) => [key, `${value}%`]),
)}

## 4. Ma trận theo lĩnh vực

${table(
  [
    'Mã',
    'Lĩnh vực',
    'Trạng thái',
    'Track',
    'Module',
    'Module có lab',
    'Module có bài báo cáo',
    'Module có quiz',
    'Lab',
    'Checklist',
    'Điểm yếu',
    'Nguồn',
    'Nguồn chuẩn',
  ],
  report.perDomain.map((d) => [
    d.code,
    d.titleVi,
    d.status,
    d.trackCount,
    d.moduleCount,
    `${d.modulesWithLab}/${d.moduleCount}`,
    `${d.modulesWithReportExercise}/${d.moduleCount}`,
    `${d.modulesWithQuiz}/${d.moduleCount}`,
    d.labCount,
    d.checklistCount,
    d.weaknessCount,
    d.resourceCount,
    d.officialResourceCount,
  ]),
)}

## 5. Khoảng trống theo loại

${table(
  ['Mã cảnh báo', 'Số mục'],
  [...gapCounts.entries()].sort((a, b) => b[1] - a[1]),
)}

## 6. Nguồn chưa xác minh nội dung (${report.resourcesNeverReviewed.length})

Những nguồn dưới đây **chưa** được người biên tập mở và đối chiếu. Chúng không mang
nhãn \`verified\`. Đây là tuyên bố trung thực về trạng thái hiện tại.

${report.resourcesNeverReviewed.map((r) => `- \`${r.id}\` — ${r.title}`).join('\n') || '(không có)'}

## 7. Nguồn quá hạn rà soát (${report.resourcesStale.length})

${report.resourcesStale.map((r) => `- \`${r.id}\` — ${r.title} (rà soát ${r.lastContentReviewed})`).join('\n') || '(không có)'}

## 8. Nguồn chưa kiểm tra liên kết (${report.resourcesLinkUnchecked.length})

Chạy \`npm run check:links\` để cập nhật.

${report.resourcesLinkUnchecked.length > 0 ? `Tổng cộng ${report.resourcesLinkUnchecked.length} nguồn.` : '(không có)'}

## 9. Nội dung còn ở trạng thái bản nháp (${report.draftContent.length})

${table(
  ['Thực thể', 'Số mục'],
  Object.entries(
    report.draftContent.reduce<Record<string, number>>((acc, item) => {
      acc[item.entity] = (acc[item.entity] ?? 0) + 1;
      return acc;
    }, {}),
  ),
)}

## 10. Lĩnh vực còn thiếu nội dung

${
  report.perDomain
    .filter((d) => d.labCount === 0 || d.officialResourceCount === 0 || d.checklistCount === 0)
    .map(
      (d) =>
        `- **${d.code}. ${d.titleVi}** — lab: ${d.labCount}, checklist: ${d.checklistCount}, nguồn chuẩn: ${d.officialResourceCount}`,
    )
    .join('\n') || '(mọi lĩnh vực đều có lab, checklist và nguồn chuẩn)'
}
`;

  mkdirSync(reportsDir, { recursive: true });
  writeFileSync(resolve(reportsDir, 'coverage.md'), md, 'utf8');
  writeFileSync(
    resolve(reportsDir, 'coverage.json'),
    `${JSON.stringify({ generatedAt: new Date().toISOString(), validation: { errors: validation.errorCount, warnings: validation.warningCount }, ...report }, null, 2)}\n`,
    'utf8',
  );

  process.stdout.write(
    `Da sinh reports/coverage.md va reports/coverage.json.\n` +
      `Loi: ${validation.errorCount}, canh bao: ${validation.warningCount}, khoang trong: ${report.gaps.length}.\n`,
  );
}

main();
