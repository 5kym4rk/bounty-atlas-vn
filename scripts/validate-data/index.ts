/**
 * Kiểm tra toàn vẹn dataset kiến thức.
 *
 * Chạy: npm run validate:data
 * Thoát với mã 1 nếu có lỗi (severity = 'error'). Cảnh báo không làm fail.
 */
import { dataset } from '@/data';
import { validateDataset, type ValidationIssue } from '@/validators/dataset';

function group(issues: ValidationIssue[]): Map<string, ValidationIssue[]> {
  const byCode = new Map<string, ValidationIssue[]>();
  for (const issue of issues) {
    byCode.set(issue.code, [...(byCode.get(issue.code) ?? []), issue]);
  }
  return new Map([...byCode.entries()].sort((a, b) => b[1].length - a[1].length));
}

function main(): void {
  const result = validateDataset(dataset);
  const errors = result.issues.filter((i) => i.severity === 'error');
  const warnings = result.issues.filter((i) => i.severity === 'warning');

  process.stdout.write('\n=== BountyAtlas VN — kiem tra du lieu ===\n\n');

  if (errors.length > 0) {
    process.stdout.write(`LOI (${errors.length}):\n`);
    for (const [code, items] of group(errors)) {
      process.stdout.write(`\n  [${code}] ${items.length} muc\n`);
      for (const issue of items.slice(0, 20)) {
        process.stdout.write(`    - ${issue.entity} ${issue.id}: ${issue.messageVi}\n`);
      }
      if (items.length > 20) {
        process.stdout.write(`    ... va ${items.length - 20} muc khac\n`);
      }
    }
    process.stdout.write('\n');
  }

  if (warnings.length > 0) {
    process.stdout.write(`CANH BAO (${warnings.length}):\n`);
    for (const [code, items] of group(warnings)) {
      process.stdout.write(`  [${code}] ${items.length} muc\n`);
    }
    process.stdout.write('\n');
  }

  const counts = {
    domain: dataset.domains.length,
    track: dataset.tracks.length,
    module: dataset.modules.length,
    concept: dataset.concepts.length,
    weakness: dataset.weaknesses.length,
    resource: dataset.resources.length,
    lab: dataset.labs.length,
    tool: dataset.tools.length,
    checklist: dataset.checklists.length,
    quiz: dataset.quizzes.length,
    'quiz question': dataset.quizzes.reduce((n, q) => n + q.questions.length, 0),
    'report exercise': dataset.reportExercises.length,
    'triage scenario': dataset.triageScenarios.length,
    assessment: dataset.assessments.length,
    standard: dataset.standards.length,
    skill: dataset.skills.length,
    'learning path': dataset.learningPaths.length,
  };
  process.stdout.write('So luong thuc te:\n');
  for (const [key, value] of Object.entries(counts)) {
    process.stdout.write(`  ${key.padEnd(18)} ${value}\n`);
  }

  process.stdout.write(`\nKet qua: ${errors.length} loi, ${warnings.length} canh bao.\n`);

  if (errors.length > 0) {
    process.stdout.write('Validator that bai. Sua loi goc, khong bo qua validator.\n\n');
    process.exit(1);
  }
  process.stdout.write('Validator dat.\n\n');
}

main();
