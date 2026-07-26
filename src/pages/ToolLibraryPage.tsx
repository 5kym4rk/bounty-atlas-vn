import { useMemo, useState } from 'react';
import { dataset } from '@/data';
import { domainById, orderedDomains } from '@/utils/lookups';
import { containsVi } from '@/utils/vietnamese';
import {
  BulletList,
  Callout,
  Card,
  Chip,
  DifficultyChip,
  EmptyState,
  ExternalLink,
  PageHeader,
} from '@/components/ui';

const ALL = 'all';

export function ToolLibraryPage() {
  const [query, setQuery] = useState('');
  const [domainId, setDomainId] = useState(ALL);

  const filtered = useMemo(
    () =>
      dataset.tools.filter((tool) => {
        if (domainId !== ALL && !tool.domainIds.includes(domainId)) return false;
        if (!query.trim()) return true;
        return containsVi(tool.name, query) || containsVi(tool.purposeVi, query);
      }),
    [domainId, query],
  );

  return (
    <>
      <PageHeader
        title="Thư viện công cụ"
        description="Mỗi công cụ nêu rõ mục đích, giới hạn, nguồn tải chính thức và những kết luận không được suy ra chỉ từ output của nó."
      />

      <div className="mb-6">
        <Callout tone="warn" title="Nguyên tắc quan trọng nhất">
          Output của công cụ là một giả thuyết cần xác minh, không phải một báo cáo. Dự án không
          nhúng bất kỳ tệp thực thi nào; mọi công cụ đều tải từ nguồn chính thức của nó.
        </Callout>
      </div>

      <Card className="mb-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="ba-label" htmlFor="tool-q">
              Tìm công cụ
            </label>
            <input
              id="tool-q"
              className="ba-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="vi du: proxy, bat goi, dich nguoc"
            />
          </div>
          <div>
            <label className="ba-label" htmlFor="tool-domain">
              Lĩnh vực
            </label>
            <select
              id="tool-domain"
              className="ba-input"
              value={domainId}
              onChange={(e) => setDomainId(e.target.value)}
            >
              <option value={ALL}>Tất cả</option>
              {orderedDomains.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.code}. {d.titleVi}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {filtered.length === 0 ? (
        <EmptyState message="Không có công cụ nào khớp bộ lọc hiện tại." />
      ) : (
        <ul className="space-y-4">
          {filtered.map((tool) => (
            <li key={tool.id}>
              <Card>
                <div className="flex flex-wrap items-center gap-2">
                  <ExternalLink href={tool.officialUrl} showHost>
                    {tool.name}
                  </ExternalLink>
                  <DifficultyChip value={tool.difficulty} />
                  <Chip>{tool.license}</Chip>
                  {tool.operatingSystems.map((os) => (
                    <Chip key={os}>{os}</Chip>
                  ))}
                </div>
                <p className="mt-2 text-sm text-ink-muted">{tool.purposeVi}</p>

                <div className="mt-3 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="mb-1 text-sm font-medium">Giới hạn</p>
                    <BulletList items={tool.limitationsVi} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium">Sai lầm thường gặp</p>
                    <BulletList items={tool.commonMistakesVi} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium">Dùng an toàn</p>
                    <BulletList items={tool.safeUsageVi} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium text-warn">
                      Không được kết luận điều này chỉ từ output
                    </p>
                    <BulletList items={tool.notEvidenceForVi} />
                  </div>
                </div>

                <p className="mt-3 text-xs text-ink-faint">
                  Lĩnh vực:{' '}
                  {tool.domainIds.map((id) => domainById.get(id)?.titleVi ?? id).join(', ')}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
