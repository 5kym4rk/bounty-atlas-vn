import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { COVERAGE_DISCLAIMER_VI, PRODUCT } from '@/config/product';
import { useAppStore } from '@/app/store';
import { dataset } from '@/data';
import { domainOfModule, moduleById, orderedDomains } from '@/utils/lookups';
import { PROGRESS_LABEL_VI, PROGRESS_ORDER } from '@/storage/schema';
import { Callout, Card, Chip, EmptyState, PageHeader, Section, StatTile } from '@/components/ui';

function depth(state: string | undefined): number {
  if (!state) return 0;
  const index = PROGRESS_ORDER.indexOf(state as (typeof PROGRESS_ORDER)[number]);
  return index < 0 ? 0 : index;
}

export function DashboardPage() {
  const progress = useAppStore((s) => s.progress);
  const profile = useAppStore((s) => s.profile);
  const reports = useAppStore((s) => s.reports);

  const stats = useMemo(() => {
    const touched = Object.values(progress).filter((p) => depth(p.state) > 0);
    const studied = Object.values(progress).filter((p) => depth(p.state) >= 2);
    const needsReview = Object.values(progress).filter((p) => p.state === 'needs-review');
    const domainsTouched = new Set(
      touched.map((p) => domainOfModule(p.moduleId)?.id).filter((v): v is string => Boolean(v)),
    );
    return {
      touched: touched.length,
      studied: studied.length,
      needsReview,
      domainsTouched: domainsTouched.size,
    };
  }, [progress]);

  /** Gợi ý module tiếp theo: ưu tiên cần ôn lại, sau đó module chưa bắt đầu ở domain sớm nhất. */
  const suggestions = useMemo(() => {
    const review = stats.needsReview
      .map((p) => moduleById.get(p.moduleId))
      .filter((m): m is NonNullable<typeof m> => Boolean(m))
      .slice(0, 3);

    const interest = new Set(profile?.interestDomainIds ?? []);
    const candidateDomains = orderedDomains.filter(
      (d) => interest.size === 0 || interest.has(d.id),
    );

    const next: typeof review = [];
    for (const domain of candidateDomains) {
      const trackIds = new Set(
        dataset.tracks.filter((t) => t.domainId === domain.id).map((t) => t.id),
      );
      for (const module of dataset.modules) {
        if (!trackIds.has(module.trackId)) continue;
        if (progress[module.id]) continue;
        next.push(module);
        break;
      }
      if (next.length >= 3) break;
    }
    return { review, next };
  }, [profile, progress, stats.needsReview]);

  const draftReports = reports.filter((r) => !r.title || !r.steps).length;

  return (
    <>
      <PageHeader
        title="Hôm nay học gì?"
        description={PRODUCT.descriptionVi}
        actions={
          !profile?.onboardingCompleted ? (
            <Link to="/onboarding" className="ba-btn ba-btn-primary">
              Bắt đầu onboarding
            </Link>
          ) : (
            <Link to="/atlas" className="ba-btn">
              Mở bản đồ kiến thức
            </Link>
          )
        }
      />

      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile
          label="Module đã chạm"
          value={stats.touched}
          hint={`trên ${dataset.modules.length}`}
        />
        <StatTile label="Module đã học" value={stats.studied} />
        <StatTile
          label="Lĩnh vực đã chạm"
          value={stats.domainsTouched}
          hint={`trên ${dataset.domains.length}`}
        />
        <StatTile label="Cần ôn lại" value={stats.needsReview.length} />
      </div>

      {!profile?.onboardingCompleted ? (
        <div className="mb-8">
          <Callout title="Chưa có kế hoạch cá nhân">
            Hoàn thành onboarding để nhận gợi ý phù hợp với nền tảng, thiết bị và số giờ mỗi tuần
            của bạn. Bạn không bị khoá vào một lộ trình nào — mọi lĩnh vực luôn mở.
          </Callout>
        </div>
      ) : null}

      <Section title="Kiến thức sắp quên" description="Module bạn đã đánh dấu cần ôn lại.">
        {suggestions.review.length === 0 ? (
          <EmptyState message="Chưa có module nào được đánh dấu cần ôn lại." />
        ) : (
          <ul className="space-y-2">
            {suggestions.review.map((module) => (
              <li key={module.id}>
                <Card>
                  <Link to={`/modules/${module.id}`} className="font-medium hover:text-brand">
                    {module.titleVi}
                  </Link>
                  <p className="mt-1 text-sm text-ink-muted">{module.summaryVi}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Chip tone="warn">{PROGRESS_LABEL_VI['needs-review']}</Chip>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section
        title="Module tiếp theo được gợi ý"
        description="Dựa trên lĩnh vực bạn quan tâm và thứ tự prerequisite. Đây là gợi ý, không phải ràng buộc."
      >
        {suggestions.next.length === 0 ? (
          <EmptyState message="Bạn đã bắt đầu ít nhất một module ở mọi lĩnh vực quan tâm." />
        ) : (
          <ul className="space-y-2">
            {suggestions.next.map((module) => {
              const domain = domainOfModule(module.id);
              return (
                <li key={module.id}>
                  <Card>
                    <div className="flex flex-wrap items-center gap-2">
                      {domain ? <Chip tone="brand">{domain.code}</Chip> : null}
                      <Link to={`/modules/${module.id}`} className="font-medium hover:text-brand">
                        {module.titleVi}
                      </Link>
                    </div>
                    <p className="mt-1 text-sm text-ink-muted">{module.summaryVi}</p>
                  </Card>
                </li>
              );
            })}
          </ul>
        )}
      </Section>

      <Section title="Việc cần hoàn thiện">
        <div className="grid gap-3 sm:grid-cols-2">
          <Card>
            <p className="font-medium">Báo cáo còn dang dở</p>
            <p className="mt-1 text-sm text-ink-muted">
              {draftReports > 0
                ? `${draftReports} bản nháp chưa có tiêu đề hoặc chưa có bước tái hiện.`
                : 'Không có bản nháp nào đang thiếu phần bắt buộc.'}
            </p>
            <Link to="/report-builder" className="ba-btn mt-3 text-xs">
              Mở trình soạn báo cáo
            </Link>
          </Card>
          <Card>
            <p className="font-medium">Khoảng trống kiến thức</p>
            <p className="mt-1 text-sm text-ink-muted">
              Xem phần nào của bản đồ còn thiếu lab, bài tập báo cáo hoặc nguồn chuẩn.
            </p>
            <Link to="/gaps" className="ba-btn mt-3 text-xs">
              Mở gap analysis
            </Link>
          </Card>
        </div>
      </Section>

      <Callout title="Giới hạn của bản đồ này">{COVERAGE_DISCLAIMER_VI}</Callout>
    </>
  );
}
