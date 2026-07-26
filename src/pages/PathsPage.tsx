import { Link } from 'react-router-dom';
import { dataset } from '@/data';
import { domainById } from '@/utils/lookups';
import { Callout, Card, PageHeader } from '@/components/ui';

export function PathsPage() {
  return (
    <>
      <PageHeader
        title="Lộ trình học gợi ý"
        description="Chín lộ trình cho các hướng khác nhau. Đây là gợi ý thứ tự, không phải ràng buộc — bạn có thể mở bất kỳ lĩnh vực nào bất cứ lúc nào."
      />

      <div className="mb-6">
        <Callout>
          Không lộ trình nào bao phủ toàn bộ bản đồ, và cũng không cần thiết. Chọn một hướng, học
          sâu, rồi mở rộng sang lĩnh vực liền kề khi bạn đã vững.
        </Callout>
      </div>

      <ul className="space-y-4">
        {dataset.learningPaths.map((path) => (
          <li key={path.id}>
            <Card>
              <h2 className="font-semibold">{path.titleVi}</h2>
              <p className="mt-1 text-sm text-ink-muted">{path.summaryVi}</p>
              <p className="mt-1 text-xs text-ink-faint">Phù hợp với: {path.audienceVi}</p>
              <ol className="mt-3 flex flex-wrap items-center gap-2">
                {path.steps.map((step, index) => {
                  const domain = step.domainId ? domainById.get(step.domainId) : undefined;
                  return (
                    <li key={`${path.id}-${index}`} className="flex items-center gap-2">
                      {domain ? (
                        <Link
                          to={`/domains/${domain.id}`}
                          className="ba-chip hover:border-brand hover:text-brand"
                        >
                          {step.label}
                        </Link>
                      ) : (
                        <span className="ba-chip">{step.label}</span>
                      )}
                      {index < path.steps.length - 1 ? (
                        <span aria-hidden="true" className="text-ink-faint">
                          →
                        </span>
                      ) : null}
                    </li>
                  );
                })}
              </ol>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
