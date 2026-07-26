import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '@/app/store';
import { dataset } from '@/data';
import { domainById, orderedDomains, tracksOfDomain } from '@/utils/lookups';
import { containsVi } from '@/utils/vietnamese';
import { transitivePrerequisites } from '@/utils/graph';
import { Callout, Card, Chip, EmptyState, PageHeader } from '@/components/ui';
import { PROGRESS_ORDER } from '@/storage/schema';

const STATUS_LABEL: Record<string, string> = {
  core: 'Cốt lõi',
  advanced: 'Nâng cao',
  specialist: 'Chuyên sâu',
  planned: 'Dự kiến',
};

/** Đồ thị đơn giản dựng bằng SVG: cột theo trạng thái, cạnh là prerequisite. */
function DomainGraph({ highlight }: { highlight: string | null }) {
  const columns: Record<string, number> = { core: 0, advanced: 1, specialist: 2, planned: 3 };
  const positions = new Map<string, { x: number; y: number }>();
  const counters: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };

  for (const domain of orderedDomains) {
    const col = columns[domain.status] ?? 0;
    const row = counters[col] ?? 0;
    counters[col] = row + 1;
    positions.set(domain.id, { x: 40 + col * 220, y: 40 + row * 58 });
  }

  const maxRow = Math.max(...Object.values(counters));
  const height = 60 + maxRow * 58;

  return (
    <div className="ba-scroll-x rounded-lg border border-line bg-surface-raised">
      <svg
        viewBox={`0 0 940 ${height}`}
        className="min-w-[720px]"
        role="img"
        aria-label="Đồ thị quan hệ prerequisite giữa các lĩnh vực"
      >
        {orderedDomains.map((domain) =>
          domain.prerequisiteDomainIds.map((prereqId) => {
            const from = positions.get(prereqId);
            const to = positions.get(domain.id);
            if (!from || !to) return null;
            const active = highlight === domain.id || highlight === prereqId;
            return (
              <line
                key={`${prereqId}-${domain.id}`}
                x1={from.x + 150}
                y1={from.y + 16}
                x2={to.x}
                y2={to.y + 16}
                stroke={active ? 'rgb(var(--ba-brand))' : 'rgb(var(--ba-line))'}
                strokeWidth={active ? 2 : 1}
              />
            );
          }),
        )}
        {orderedDomains.map((domain) => {
          const pos = positions.get(domain.id);
          if (!pos) return null;
          const active = highlight === domain.id;
          return (
            <g key={domain.id}>
              <rect
                x={pos.x}
                y={pos.y}
                width={150}
                height={32}
                rx={6}
                fill={active ? 'rgb(var(--ba-brand-soft))' : 'rgb(var(--ba-surface))'}
                stroke={active ? 'rgb(var(--ba-brand))' : 'rgb(var(--ba-line))'}
              />
              <text
                x={pos.x + 8}
                y={pos.y + 20}
                fontSize={11}
                fill="rgb(var(--ba-ink))"
                className="font-medium"
              >
                {domain.code}. {domain.titleVi.slice(0, 22)}
                {domain.titleVi.length > 22 ? '…' : ''}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function AtlasPage() {
  const view = useAppStore((s) => s.settings.atlasView);
  const setAtlasView = useAppStore((s) => s.setAtlasView);
  const progress = useAppStore((s) => s.progress);

  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selected, setSelected] = useState<string | null>(null);

  const domainNodes = useMemo(
    () => orderedDomains.map((d) => ({ id: d.id, prerequisiteIds: d.prerequisiteDomainIds })),
    [],
  );

  const filtered = useMemo(
    () =>
      orderedDomains.filter((domain) => {
        if (statusFilter !== 'all' && domain.status !== statusFilter) return false;
        if (!query.trim()) return true;
        return (
          containsVi(domain.titleVi, query) ||
          containsVi(domain.descriptionVi, query) ||
          containsVi(domain.code, query)
        );
      }),
    [query, statusFilter],
  );

  const coverage = useMemo(() => {
    const map = new Map<string, { total: number; touched: number }>();
    for (const domain of orderedDomains) {
      const trackIds = new Set(tracksOfDomain(domain.id).map((t) => t.id));
      const modules = dataset.modules.filter((m) => trackIds.has(m.trackId));
      const touched = modules.filter((m) => {
        const state = progress[m.id]?.state;
        return state ? PROGRESS_ORDER.indexOf(state as never) > 0 : false;
      }).length;
      map.set(domain.id, { total: modules.length, touched });
    }
    return map;
  }, [progress]);

  return (
    <>
      <PageHeader
        title="Bản đồ kiến thức"
        description="24 lĩnh vực, quan hệ prerequisite và mức bao phủ của bạn. Đồ thị có phiên bản danh sách để dùng trên màn hình hẹp."
        actions={
          <div className="flex gap-2">
            <button
              type="button"
              className={`ba-btn text-xs ${view === 'graph' ? 'ba-btn-primary' : ''}`}
              onClick={() => setAtlasView('graph')}
              aria-pressed={view === 'graph'}
            >
              Đồ thị
            </button>
            <button
              type="button"
              className={`ba-btn text-xs ${view === 'list' ? 'ba-btn-primary' : ''}`}
              onClick={() => setAtlasView('list')}
              aria-pressed={view === 'list'}
            >
              Danh sách
            </button>
          </div>
        }
      />

      <div className="mb-4 grid gap-3 sm:grid-cols-2">
        <div>
          <label className="ba-label" htmlFor="atlas-search">
            Tìm lĩnh vực (gõ có dấu hoặc không dấu đều được)
          </label>
          <input
            id="atlas-search"
            className="ba-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="vi du: bao mat web, danh tinh, chuoi cung ung"
          />
        </div>
        <div>
          <label className="ba-label" htmlFor="atlas-status">
            Lọc theo trạng thái
          </label>
          <select
            id="atlas-status"
            className="ba-input"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Tất cả</option>
            <option value="core">Cốt lõi</option>
            <option value="advanced">Nâng cao</option>
            <option value="specialist">Chuyên sâu</option>
            <option value="planned">Dự kiến</option>
          </select>
        </div>
      </div>

      {view === 'graph' ? (
        <div className="mb-6 hidden md:block">
          <DomainGraph highlight={selected} />
          <p className="mt-2 text-xs text-ink-faint">
            Cột từ trái sang phải: cốt lõi, nâng cao, chuyên sâu, dự kiến. Đường nối biểu thị quan
            hệ prerequisite.
          </p>
        </div>
      ) : null}

      {view === 'graph' ? (
        <div className="mb-6 md:hidden">
          <Callout>
            Màn hình hẹp dùng chế độ danh sách để giữ hiệu năng. Nội dung hoàn toàn tương đương với
            đồ thị.
          </Callout>
        </div>
      ) : null}

      {filtered.length === 0 ? (
        <EmptyState message="Không có lĩnh vực nào khớp bộ lọc hiện tại." />
      ) : (
        <ul className="space-y-3">
          {filtered.map((domain) => {
            const stats = coverage.get(domain.id);
            const prereqs = [...transitivePrerequisites(domainNodes, domain.id)];
            return (
              <li key={domain.id}>
                <Card>
                  <div
                    onMouseEnter={() => setSelected(domain.id)}
                    onMouseLeave={() => setSelected(null)}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <Chip tone="brand">{domain.code}</Chip>
                      <Link
                        to={`/domains/${domain.id}`}
                        className="text-base font-medium hover:text-brand"
                      >
                        {domain.titleVi}
                      </Link>
                      <Chip>{STATUS_LABEL[domain.status]}</Chip>
                      {stats ? (
                        <Chip tone={stats.touched > 0 ? 'ok' : 'neutral'}>
                          {stats.touched}/{stats.total} module đã chạm
                        </Chip>
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm text-ink-muted">{domain.descriptionVi}</p>
                    {prereqs.length > 0 ? (
                      <p className="mt-2 text-xs text-ink-faint">
                        Nên học trước:{' '}
                        {prereqs.map((id) => domainById.get(id)?.titleVi ?? id).join(', ')}. Lý do:
                        những lĩnh vực này cung cấp mô hình hệ thống và trust boundary mà nội dung ở
                        đây giả định bạn đã có.
                      </p>
                    ) : null}
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
