import { Link, useParams } from 'react-router-dom';
import {
  checklistsOfDomain,
  domainById,
  labsOfDomain,
  moduleById,
  pick,
  resourcesOfDomain,
  standardById,
  toolsOfDomain,
  tracksOfDomain,
} from '@/utils/lookups';
import {
  BulletList,
  Callout,
  Card,
  Chip,
  ContentStatusChip,
  EmptyState,
  ExternalLink,
  PageHeader,
  Section,
} from '@/components/ui';

export function DomainDetailPage() {
  const { domainId } = useParams();
  const domain = domainId ? domainById.get(domainId) : undefined;

  if (!domain) {
    return (
      <>
        <PageHeader title="Không tìm thấy lĩnh vực" />
        <Link to="/domains" className="ba-btn">
          Quay lại danh sách lĩnh vực
        </Link>
      </>
    );
  }

  const tracks = tracksOfDomain(domain.id);
  const labs = labsOfDomain(domain.id);
  const resources = resourcesOfDomain(domain.id);
  const checklists = checklistsOfDomain(domain.id);
  const tools = toolsOfDomain(domain.id);
  const standards = pick(standardById, domain.standardIds);
  const prereqs = domain.prerequisiteDomainIds
    .map((id) => domainById.get(id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <>
      <PageHeader
        title={`${domain.code}. ${domain.titleVi}`}
        description={domain.descriptionVi}
        actions={<ContentStatusChip value={domain.contentStatus} />}
      />

      <div className="mb-6">
        <Callout tone="warn" title="Cảnh báo an toàn của lĩnh vực này">
          {domain.safetyNoteVi}
        </Callout>
      </div>

      {prereqs.length > 0 ? (
        <Section
          title="Nên học trước"
          description="Prerequisite là gợi ý có giải thích, không phải khoá chặn."
        >
          <ul className="flex flex-wrap gap-2">
            {prereqs.map((d) => (
              <li key={d.id}>
                <Link
                  to={`/domains/${d.id}`}
                  className="ba-chip hover:border-brand hover:text-brand"
                >
                  {d.code}. {d.titleVi}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section title="Bản đồ kiến trúc">
        <BulletList items={domain.architectureVi} />
      </Section>

      <Section title="Bề mặt tấn công">
        <BulletList items={domain.attackSurfaceVi} />
      </Section>

      <Section title="Trust boundary">
        <BulletList items={domain.trustBoundariesVi} />
      </Section>

      <Section title="Track và module">
        {tracks.length === 0 ? (
          <EmptyState message="Lĩnh vực này chưa có track nào." />
        ) : (
          <ul className="space-y-3">
            {tracks.map((track) => (
              <li key={track.id}>
                <Card>
                  <p className="font-medium">{track.titleVi}</p>
                  <p className="mt-1 text-sm text-ink-muted">{track.summaryVi}</p>
                  <ul className="mt-3 space-y-1">
                    {track.moduleIds.map((moduleId) => {
                      const module = moduleById.get(moduleId);
                      if (!module) return null;
                      return (
                        <li key={moduleId} className="text-sm">
                          <Link to={`/modules/${moduleId}`} className="ba-link">
                            {module.titleVi}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section title="Chuẩn tham chiếu">
        {standards.length === 0 ? (
          <EmptyState message="Lĩnh vực này chưa gắn chuẩn tham chiếu nào." />
        ) : (
          <ul className="space-y-2">
            {standards.map((standard) => (
              <li key={standard.id} className="ba-card">
                <ExternalLink href={standard.url} showHost>
                  {standard.title}
                </ExternalLink>
                <p className="mt-1 text-sm text-ink-muted">{standard.descriptionVi}</p>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section title="Lab hợp pháp">
        {labs.length === 0 ? (
          <EmptyState message="Lĩnh vực này chưa có lab. Đây là một khoảng trống được ghi nhận trong gap analysis." />
        ) : (
          <ul className="space-y-2">
            {labs.map((lab) => (
              <li key={lab.id} className="ba-card">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium">{lab.titleVi}</span>
                  <Chip>{lab.provider}</Chip>
                  {lab.cloud ? <Chip tone="warn">Có chi phí</Chip> : null}
                </div>
                <p className="mt-1 text-sm text-ink-muted">{lab.allowedTargetsNoteVi}</p>
                <Link to="/labs" className="ba-link mt-2 inline-block text-xs">
                  Xem chi tiết trong Lab Hub
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section title="Checklist">
        {checklists.length === 0 ? (
          <EmptyState message="Lĩnh vực này chưa có checklist." />
        ) : (
          <ul className="flex flex-wrap gap-2">
            {checklists.map((checklist) => (
              <li key={checklist.id}>
                <Link to="/checklists" className="ba-chip hover:border-brand hover:text-brand">
                  {checklist.titleVi}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section title="Công cụ">
        {tools.length === 0 ? (
          <EmptyState message="Lĩnh vực này chưa gắn công cụ nào." />
        ) : (
          <ul className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li key={tool.id}>
                <Link to="/tools" className="ba-chip hover:border-brand hover:text-brand">
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section title="Nguồn học" description={`${resources.length} nguồn gắn với lĩnh vực này.`}>
        <Link to="/resources" className="ba-btn text-xs">
          Mở thư viện nguồn
        </Link>
      </Section>

      <Section title="Định hướng nghề nghiệp">
        <Card>
          <p className="text-sm text-ink-muted">{domain.careerNoteVi}</p>
          <p className="mt-2 text-xs text-ink-faint">
            Dự án không hứa hẹn thu nhập và không dự đoán tiền thưởng.
          </p>
        </Card>
      </Section>
    </>
  );
}
