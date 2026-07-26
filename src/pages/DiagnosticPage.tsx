import { useMemo, useState } from 'react';
import { useAppStore } from '@/app/store';
import { dataset } from '@/data';
import { domainOfModule, domainById } from '@/utils/lookups';
import { Callout, Card, CodeBlock, PageHeader, Section } from '@/components/ui';
import type { QuizQuestion } from '@/schemas/entities';

interface DiagnosticItem {
  question: QuizQuestion;
  domainId: string;
  domainTitle: string;
}

/** Lấy tối đa một câu hỏi cho mỗi domain, ưu tiên câu dễ nhất của domain đó. */
function buildDiagnostic(): DiagnosticItem[] {
  const rank: Record<string, number> = {
    foundation: 0,
    beginner: 1,
    intermediate: 2,
    advanced: 3,
    specialist: 4,
    research: 5,
  };
  const byDomain = new Map<string, DiagnosticItem>();
  for (const quiz of dataset.quizzes) {
    const domain = domainOfModule(quiz.moduleId);
    if (!domain) continue;
    for (const question of quiz.questions) {
      const current = byDomain.get(domain.id);
      if (!current || (rank[question.difficulty] ?? 9) < (rank[current.question.difficulty] ?? 9)) {
        byDomain.set(domain.id, {
          question,
          domainId: domain.id,
          domainTitle: domain.titleVi,
        });
      }
    }
  }
  return [...byDomain.values()].sort(
    (a, b) => (domainById.get(a.domainId)?.order ?? 0) - (domainById.get(b.domainId)?.order ?? 0),
  );
}

export function DiagnosticPage() {
  const items = useMemo(buildDiagnostic, []);
  const saveProfile = useAppStore((s) => s.saveProfile);
  const profile = useAppStore((s) => s.profile);

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;
    const perDomain: Record<string, number> = {};
    let correct = 0;
    for (const item of items) {
      const chosen = answers[item.question.id];
      const isCorrect = Boolean(chosen && item.question.correctOptionIds.includes(chosen));
      if (isCorrect) correct += 1;
      perDomain[item.domainId] = isCorrect ? 100 : 0;
    }
    return { perDomain, correct, total: items.length };
  }, [answers, items, submitted]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
    const perDomain: Record<string, number> = {};
    for (const item of items) {
      const chosen = answers[item.question.id];
      perDomain[item.domainId] =
        chosen && item.question.correctOptionIds.includes(chosen) ? 100 : 0;
    }
    await saveProfile({
      skillProfile: perDomain,
      diagnosticCompletedAt: new Date().toISOString(),
    });
  }

  return (
    <>
      <PageHeader
        title="Bài kiểm tra đầu vào"
        description="Một câu cho mỗi lĩnh vực, gồm câu lý thuyết và câu đọc hiểu request, log hoặc mã. Không có câu nào yêu cầu tấn công mục tiêu thật."
      />

      <div className="mb-6">
        <Callout title="Kết quả dùng để làm gì">
          Kết quả tạo hồ sơ kỹ năng ban đầu và được dùng để gợi ý thứ tự học. Bạn vẫn có thể học lại
          phần nền tảng hoặc bỏ qua nó — nếu bỏ qua, ứng dụng sẽ cảnh báo và giải thích lý do
          prerequisite tồn tại, chứ không chặn bạn.
        </Callout>
      </div>

      {profile?.diagnosticCompletedAt && !submitted ? (
        <div className="mb-6">
          <Callout>
            Bạn đã hoàn thành bài kiểm tra đầu vào ngày {profile.diagnosticCompletedAt.slice(0, 10)}
            . Làm lại sẽ ghi đè hồ sơ kỹ năng cũ.
          </Callout>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-4">
        {items.map((item, index) => {
          const chosen = answers[item.question.id];
          const isCorrect =
            submitted && chosen ? item.question.correctOptionIds.includes(chosen) : null;
          return (
            <Card key={item.question.id}>
              <p className="mb-1 text-xs uppercase tracking-wide text-ink-faint">
                Câu {index + 1} — {item.domainTitle}
              </p>
              <p className="mb-2 font-medium">{item.question.promptVi}</p>
              {item.question.contextBlock ? (
                <div className="mb-3">
                  <CodeBlock
                    content={item.question.contextBlock.content}
                    language={item.question.contextBlock.language}
                  />
                </div>
              ) : null}
              <div className="space-y-1.5">
                {item.question.options.map((option) => (
                  <label key={option.id} className="flex items-start gap-2 text-sm">
                    <input
                      type="radio"
                      name={item.question.id}
                      value={option.id}
                      className="mt-1"
                      checked={chosen === option.id}
                      disabled={submitted}
                      onChange={() =>
                        setAnswers((prev) => ({ ...prev, [item.question.id]: option.id }))
                      }
                    />
                    <span className="text-ink-muted">{option.textVi}</span>
                  </label>
                ))}
              </div>
              {submitted ? (
                <div className="mt-3 rounded-md border border-line bg-surface p-3 text-sm">
                  <p className={isCorrect ? 'text-ok' : 'text-warn'}>
                    {isCorrect ? 'Đúng' : 'Chưa đúng'}
                  </p>
                  <p className="mt-1 text-ink-muted">{item.question.explanationVi}</p>
                </div>
              ) : null}
            </Card>
          );
        })}

        {!submitted ? (
          <button type="submit" className="ba-btn ba-btn-primary">
            Nộp bài và tạo hồ sơ kỹ năng
          </button>
        ) : null}
      </form>

      {result ? (
        <Section title="Hồ sơ kỹ năng ban đầu">
          <p className="mb-3 text-sm text-ink-muted">
            Đúng {result.correct} trên {result.total} câu. Đây là ảnh chụp rất thô, chỉ dùng để gợi
            ý điểm bắt đầu.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {Object.entries(result.perDomain).map(([domainId, score]) => {
              const domain = domainById.get(domainId);
              if (!domain) return null;
              return (
                <li key={domainId} className="ba-card flex items-center justify-between gap-2">
                  <span className="text-sm">
                    {domain.code}. {domain.titleVi}
                  </span>
                  <span className={score > 0 ? 'text-sm text-ok' : 'text-sm text-warn'}>
                    {score > 0 ? 'Có nền' : 'Nên học lại'}
                  </span>
                </li>
              );
            })}
          </ul>
        </Section>
      ) : null}
    </>
  );
}
