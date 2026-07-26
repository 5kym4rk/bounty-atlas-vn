import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { Link } from 'react-router-dom';
import { dataset } from '@/data';
import { searchKey } from '@/utils/vietnamese';
import { Card, Chip, EmptyState, ExternalLink, PageHeader } from '@/components/ui';

type Kind =
  | 'domain'
  | 'module'
  | 'concept'
  | 'weakness'
  | 'resource'
  | 'lab'
  | 'tool'
  | 'checklist'
  | 'standard';

interface SearchDoc {
  kind: Kind;
  id: string;
  title: string;
  subtitle: string;
  /** Chuỗi đã chuẩn hoá không dấu, dùng cho so khớp. */
  haystack: string;
  to?: string;
  url?: string;
}

const KIND_LABEL: Record<Kind, string> = {
  domain: 'Lĩnh vực',
  module: 'Module',
  concept: 'Khái niệm',
  weakness: 'Điểm yếu',
  resource: 'Nguồn',
  lab: 'Lab',
  tool: 'Công cụ',
  checklist: 'Checklist',
  standard: 'Chuẩn',
};

function buildDocs(): SearchDoc[] {
  const docs: SearchDoc[] = [];
  const add = (doc: Omit<SearchDoc, 'haystack'> & { extra?: string[] }) => {
    const { extra = [], ...rest } = doc;
    docs.push({
      ...rest,
      haystack: searchKey([rest.title, rest.subtitle, ...extra].join(' ')),
    });
  };

  for (const d of dataset.domains) {
    add({
      kind: 'domain',
      id: d.id,
      title: `${d.code}. ${d.titleVi}`,
      subtitle: d.descriptionVi,
      to: `/domains/${d.id}`,
      extra: [...d.attackSurfaceVi, ...d.trustBoundariesVi],
    });
  }
  for (const m of dataset.modules) {
    add({
      kind: 'module',
      id: m.id,
      title: m.titleVi,
      subtitle: m.summaryVi,
      to: `/modules/${m.id}`,
      extra: m.learningObjectives,
    });
  }
  for (const c of dataset.concepts) {
    add({ kind: 'concept', id: c.id, title: c.titleVi, subtitle: c.definitionVi });
  }
  for (const w of dataset.weaknesses) {
    add({
      kind: 'weakness',
      id: w.id,
      title: w.titleVi,
      subtitle: w.rootCauseVi,
      extra: [...w.aliases, ...w.cweIds, ...w.capecIds, ...w.owaspReferences],
    });
  }
  for (const r of dataset.resources) {
    add({
      kind: 'resource',
      id: r.id,
      title: r.title,
      subtitle: r.descriptionVi,
      url: r.url,
      extra: [r.provider, r.resourceType],
    });
  }
  for (const l of dataset.labs) {
    add({
      kind: 'lab',
      id: l.id,
      title: l.titleVi,
      subtitle: l.descriptionVi,
      url: l.url,
      extra: [l.provider, l.environment],
    });
  }
  for (const t of dataset.tools) {
    add({
      kind: 'tool',
      id: t.id,
      title: t.name,
      subtitle: t.purposeVi,
      url: t.officialUrl,
      extra: t.operatingSystems,
    });
  }
  for (const c of dataset.checklists) {
    add({
      kind: 'checklist',
      id: c.id,
      title: c.titleVi,
      subtitle: c.safetyNoteVi,
      to: '/checklists',
      extra: [c.context, ...c.items.map((i) => i.questionVi)],
    });
  }
  for (const s of dataset.standards) {
    add({
      kind: 'standard',
      id: s.id,
      title: s.title,
      subtitle: s.descriptionVi,
      url: s.url,
      extra: [s.organization],
    });
  }
  return docs;
}

export function SearchPage() {
  const docs = useMemo(buildDocs, []);
  const fuse = useMemo(
    () =>
      new Fuse(docs, {
        keys: ['haystack'],
        threshold: 0.35,
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
    [docs],
  );

  const [query, setQuery] = useState('');
  const [kind, setKind] = useState<'all' | Kind>('all');

  const results = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return [];
    const normalized = searchKey(trimmed);
    const found = fuse.search(normalized).map((r) => r.item);
    return kind === 'all' ? found : found.filter((d) => d.kind === kind);
  }, [fuse, kind, query]);

  return (
    <>
      <PageHeader
        title="Tìm kiếm"
        description="Tìm được cả khi gõ không dấu. Tra được theo alias, mã CWE, mã chuẩn, tên công cụ, nền tảng, tính năng và khái niệm."
      />

      <Card className="mb-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <label className="ba-label" htmlFor="global-search">
              Từ khoá
            </label>
            <input
              id="global-search"
              className="ba-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="vi du: phan quyen doi tuong, CWE-639, kiem thu di dong, burp"
              autoFocus
            />
          </div>
          <div>
            <label className="ba-label" htmlFor="search-kind">
              Loại kết quả
            </label>
            <select
              id="search-kind"
              className="ba-input"
              value={kind}
              onChange={(e) => setKind(e.target.value as 'all' | Kind)}
            >
              <option value="all">Tất cả</option>
              {Object.entries(KIND_LABEL).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {!query.trim() ? (
        <EmptyState message={`Nhập từ khoá để tìm trong ${docs.length} mục.`} />
      ) : results.length === 0 ? (
        <EmptyState message="Không tìm thấy kết quả nào. Thử từ khoá ngắn hơn hoặc bỏ dấu." />
      ) : (
        <>
          <p className="mb-3 text-sm text-ink-faint">{results.length} kết quả.</p>
          <ul className="space-y-2">
            {results.slice(0, 80).map((doc) => (
              <li key={`${doc.kind}-${doc.id}`}>
                <Card>
                  <div className="flex flex-wrap items-center gap-2">
                    <Chip tone="brand">{KIND_LABEL[doc.kind]}</Chip>
                    {doc.to ? (
                      <Link to={doc.to} className="font-medium hover:text-brand">
                        {doc.title}
                      </Link>
                    ) : doc.url ? (
                      <ExternalLink href={doc.url} showHost>
                        {doc.title}
                      </ExternalLink>
                    ) : (
                      <span className="font-medium">{doc.title}</span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-ink-muted">{doc.subtitle}</p>
                </Card>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
