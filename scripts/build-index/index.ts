/**
 * Sinh chỉ mục tìm kiếm tĩnh vào public/data/search-index.json.
 *
 * Ứng dụng hiện dựng chỉ mục trong bộ nhớ lúc chạy, nên tệp này là tuỳ chọn:
 * nó dùng cho việc kiểm tra dữ liệu và cho khả năng tải chỉ mục sẵn về sau.
 *
 * Chạy: npm run build:index
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dataset } from '@/data';
import { searchKey } from '@/utils/vietnamese';

const here = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(here, '..', '..');
const outputDir = resolve(projectRoot, 'public', 'data');

interface IndexEntry {
  kind: string;
  id: string;
  title: string;
  subtitle: string;
  haystack: string;
}

function main(): void {
  const entries: IndexEntry[] = [];
  const add = (kind: string, id: string, title: string, subtitle: string, extra: string[] = []) => {
    entries.push({
      kind,
      id,
      title,
      subtitle,
      haystack: searchKey([title, subtitle, ...extra].join(' ')),
    });
  };

  for (const d of dataset.domains) {
    add('domain', d.id, `${d.code}. ${d.titleVi}`, d.descriptionVi, [
      ...d.attackSurfaceVi,
      ...d.trustBoundariesVi,
    ]);
  }
  for (const m of dataset.modules) {
    add('module', m.id, m.titleVi, m.summaryVi, m.learningObjectives);
  }
  for (const c of dataset.concepts) add('concept', c.id, c.titleVi, c.definitionVi);
  for (const w of dataset.weaknesses) {
    add('weakness', w.id, w.titleVi, w.rootCauseVi, [
      ...w.aliases,
      ...w.cweIds,
      ...w.capecIds,
      ...w.owaspReferences,
    ]);
  }
  for (const r of dataset.resources) {
    add('resource', r.id, r.title, r.descriptionVi, [r.provider, r.resourceType]);
  }
  for (const l of dataset.labs) {
    add('lab', l.id, l.titleVi, l.descriptionVi, [l.provider, l.environment]);
  }
  for (const t of dataset.tools) {
    add('tool', t.id, t.name, t.purposeVi, t.operatingSystems);
  }
  for (const c of dataset.checklists) {
    add(
      'checklist',
      c.id,
      c.titleVi,
      c.safetyNoteVi,
      c.items.map((i) => i.questionVi),
    );
  }
  for (const s of dataset.standards) {
    add('standard', s.id, s.title, s.descriptionVi, [s.organization]);
  }

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(
    resolve(outputDir, 'search-index.json'),
    `${JSON.stringify({ generatedAt: new Date().toISOString(), count: entries.length, entries }, null, 0)}\n`,
    'utf8',
  );

  process.stdout.write(`Da sinh public/data/search-index.json voi ${entries.length} muc.\n`);
}

main();
