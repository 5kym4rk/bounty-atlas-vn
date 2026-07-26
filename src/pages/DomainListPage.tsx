import { Link } from 'react-router-dom';
import { orderedDomains, tracksOfDomain } from '@/utils/lookups';
import { Card, Chip, PageHeader } from '@/components/ui';

const STATUS_TONE: Record<string, 'brand' | 'neutral' | 'warn'> = {
  core: 'brand',
  advanced: 'neutral',
  specialist: 'warn',
  planned: 'neutral',
};

const STATUS_LABEL: Record<string, string> = {
  core: 'Cốt lõi',
  advanced: 'Nâng cao',
  specialist: 'Chuyên sâu',
  planned: 'Dự kiến',
};

export function DomainListPage() {
  return (
    <>
      <PageHeader
        title="Lĩnh vực kiến thức"
        description="Bug Bounty không đồng nhất với Web Security. Web chỉ là một trong các lĩnh vực dưới đây."
      />
      <ul className="grid gap-3 md:grid-cols-2">
        {orderedDomains.map((domain) => {
          const tracks = tracksOfDomain(domain.id);
          return (
            <li key={domain.id}>
              <Card className="h-full">
                <div className="flex flex-wrap items-center gap-2">
                  <Chip tone="brand">{domain.code}</Chip>
                  <Link to={`/domains/${domain.id}`} className="font-medium hover:text-brand">
                    {domain.titleVi}
                  </Link>
                  <Chip tone={STATUS_TONE[domain.status] ?? 'neutral'}>
                    {STATUS_LABEL[domain.status]}
                  </Chip>
                </div>
                <p className="mt-2 text-sm text-ink-muted">{domain.descriptionVi}</p>
                <p className="mt-2 text-xs text-ink-faint">
                  {tracks.length} track · {tracks.reduce((n, t) => n + t.moduleIds.length, 0)}{' '}
                  module
                </p>
              </Card>
            </li>
          );
        })}
      </ul>
    </>
  );
}
