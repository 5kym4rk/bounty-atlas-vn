import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { dataset } from '@/data';
import { moduleById } from '@/utils/lookups';
import { Callout, Card, Chip, PageHeader } from '@/components/ui';

const CATEGORY_LABEL: Record<string, string> = {
  'missing-steps': 'Thiếu bước tái hiện',
  'unclear-scope': 'Phạm vi không rõ',
  duplicate: 'Trùng lặp',
  informative: 'Informative',
  'scanner-only': 'Chỉ có kết quả quét',
  'no-impact': 'Không có tác động',
  overclaim: 'Thổi phồng',
  'excessive-data': 'Thu thập quá mức',
  'high-quality': 'Báo cáo chất lượng',
  'failed-retest': 'Retest thất bại',
  'evidence-request': 'Yêu cầu bằng chứng',
};

const ALL = 'all';

export function TriageSimulatorPage() {
  const [category, setCategory] = useState(ALL);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const filtered = useMemo(
    () => dataset.triageScenarios.filter((s) => category === ALL || s.category === category),
    [category],
  );

  const score = useMemo(() => {
    let correct = 0;
    let answered = 0;
    for (const scenario of dataset.triageScenarios) {
      const chosen = answers[scenario.id];
      if (!chosen) continue;
      answered += 1;
      if (scenario.choices.find((c) => c.id === chosen)?.isBest) correct += 1;
    }
    return { correct, answered };
  }, [answers]);

  return (
    <>
      <PageHeader
        title="Mô phỏng triage"
        description="Đóng vai triager hoặc người báo cáo trong các tình huống thường gặp. Mục tiêu là học cách quyết định, không phải học thuộc trạng thái."
      />

      <div className="mb-6">
        <Callout>
          Đã trả lời {score.answered} trên {dataset.triageScenarios.length} tình huống, khớp lựa
          chọn tốt nhất ở {score.correct} tình huống.
        </Callout>
      </div>

      <div className="mb-4 max-w-sm">
        <label className="ba-label" htmlFor="triage-category">
          Lọc theo nhóm tình huống
        </label>
        <select
          id="triage-category"
          className="ba-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value={ALL}>Tất cả</option>
          {Object.entries(CATEGORY_LABEL).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <ul className="space-y-4">
        {filtered.map((scenario) => {
          const chosen = answers[scenario.id];
          const chosenChoice = scenario.choices.find((c) => c.id === chosen);
          return (
            <li key={scenario.id}>
              <Card>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-semibold">{scenario.titleVi}</h2>
                  <Chip>{CATEGORY_LABEL[scenario.category] ?? scenario.category}</Chip>
                </div>

                <div className="mt-3 rounded-md border border-line bg-surface p-3">
                  <p className="text-xs uppercase tracking-wide text-ink-faint">
                    Báo cáo nhận được
                  </p>
                  <p className="mt-1 whitespace-pre-line text-sm text-ink-muted">
                    {scenario.submissionVi}
                  </p>
                </div>

                <p className="mt-3 text-sm">
                  <span className="font-medium">Ghi chú của triager: </span>
                  <span className="text-ink-muted">{scenario.triagerNoteVi}</span>
                </p>

                <div className="mt-3 space-y-1.5">
                  {scenario.choices.map((choice) => (
                    <label key={choice.id} className="flex items-start gap-2 text-sm">
                      <input
                        type="radio"
                        name={scenario.id}
                        className="mt-1"
                        checked={chosen === choice.id}
                        onChange={() =>
                          setAnswers((prev) => ({ ...prev, [scenario.id]: choice.id }))
                        }
                      />
                      <span className="text-ink-muted">{choice.labelVi}</span>
                    </label>
                  ))}
                </div>

                {chosenChoice ? (
                  <div className="mt-3 rounded-md border border-line bg-surface p-3 text-sm">
                    <p className={chosenChoice.isBest ? 'text-ok' : 'text-warn'}>
                      {chosenChoice.isBest ? 'Lựa chọn tốt nhất' : 'Có cách xử lý tốt hơn'}
                    </p>
                    <p className="mt-1 text-ink-muted">{chosenChoice.feedbackVi}</p>
                    <p className="mt-2 text-ink-muted">
                      <span className="font-medium text-ink">Bài học: </span>
                      {scenario.lessonVi}
                    </p>
                    {scenario.relatedModuleIds.length > 0 ? (
                      <p className="mt-2 text-xs text-ink-faint">
                        Module liên quan:{' '}
                        {scenario.relatedModuleIds.map((id, index) => {
                          const module = moduleById.get(id);
                          if (!module) return null;
                          return (
                            <span key={id}>
                              {index > 0 ? ', ' : ''}
                              <Link to={`/modules/${id}`} className="ba-link">
                                {module.titleVi}
                              </Link>
                            </span>
                          );
                        })}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </Card>
            </li>
          );
        })}
      </ul>
    </>
  );
}
