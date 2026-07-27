import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppStore } from '@/app/store';
import {
  checklistById,
  conceptById,
  domainOfModule,
  labById,
  moduleById,
  pick,
  quizById,
  reportExerciseById,
  resourceById,
  standardById,
  weaknessById,
} from '@/utils/lookups';
import { PROGRESS_LABEL_VI, type ProgressState } from '@/storage/schema';
import { detectSensitiveString } from '@/utils/sensitive';
import {
  BulletList,
  Callout,
  Card,
  Chip,
  CodeBlock,
  ContentStatusChip,
  DifficultyChip,
  EmptyState,
  ExternalLink,
  PageHeader,
} from '@/components/ui';

const TABS = [
  'Bài học',
  'Mục tiêu',
  'Khái niệm',
  'Kiến trúc',
  'Nhóm điểm yếu',
  'Phương pháp',
  'Nguồn học',
  'Lab',
  'Checklist',
  'Khắc phục',
  'Quiz',
  'Bài tập báo cáo',
  'Ghi chú',
] as const;

const PROGRESS_OPTIONS: ProgressState[] = [
  'not-started',
  'viewed',
  'studied',
  'quiz-passed',
  'lab-guided',
  'lab-unguided',
  'report-written',
  'assessment-passed',
  'needs-review',
  'refreshed',
];

export function ModuleDetailPage() {
  const { moduleId } = useParams();
  const module = moduleId ? moduleById.get(moduleId) : undefined;
  const [tab, setTab] = useState<(typeof TABS)[number]>('Bài học');

  const progress = useAppStore((s) => (moduleId ? s.progress[moduleId] : undefined));
  const setProgress = useAppStore((s) => s.setProgress);
  const notes = useAppStore((s) => s.notes);
  const saveNote = useAppStore((s) => s.saveNote);

  const moduleNote = useMemo(
    () => notes.find((n) => n.subjectType === 'module' && n.subjectId === moduleId),
    [notes, moduleId],
  );
  const [noteBody, setNoteBody] = useState(moduleNote?.body ?? '');
  const sensitiveHits = useMemo(() => detectSensitiveString(noteBody), [noteBody]);

  if (!module || !moduleId) {
    return (
      <>
        <PageHeader title="Không tìm thấy module" />
        <Link to="/domains" className="ba-btn">
          Quay lại danh sách lĩnh vực
        </Link>
      </>
    );
  }

  const domain = domainOfModule(module.id);
  const concepts = pick(conceptById, module.conceptIds);
  const weaknesses = pick(weaknessById, module.weaknessIds);
  const requiredResources = pick(resourceById, module.requiredResourceIds);
  const optionalResources = pick(resourceById, module.optionalResourceIds);
  const labs = pick(labById, module.labIds);
  const checklists = pick(checklistById, module.checklistIds);
  const quizzes = pick(quizById, module.quizIds);
  const exercises = pick(reportExerciseById, module.reportExerciseIds);

  async function handleSaveNote() {
    const now = new Date().toISOString();
    await saveNote({
      id: moduleNote?.id ?? `note-${moduleId}-${Date.now()}`,
      subjectType: 'module',
      subjectId: moduleId as string,
      titleVi: module?.titleVi ?? '',
      body: noteBody,
      tags: [],
      createdAt: moduleNote?.createdAt ?? now,
      updatedAt: now,
      sensitiveAcknowledged: sensitiveHits.length > 0,
    });
  }

  return (
    <>
      <PageHeader
        title={module.titleVi}
        description={module.summaryVi}
        actions={
          <div className="flex flex-wrap gap-2">
            <DifficultyChip value={module.difficulty} />
            <ContentStatusChip value={module.contentStatus} />
          </div>
        }
      />

      {domain ? (
        <p className="mb-4 text-sm text-ink-faint">
          Thuộc lĩnh vực{' '}
          <Link to={`/domains/${domain.id}`} className="ba-link">
            {domain.code}. {domain.titleVi}
          </Link>
          {module.estimatedHours ? ` · ước tính ${module.estimatedHours} giờ` : ''}
        </p>
      ) : null}

      <div className="mb-6">
        <Callout tone="warn" title="Cảnh báo an toàn của module">
          {module.safetyNoteVi}
        </Callout>
      </div>

      <Card className="mb-6">
        <label className="ba-label" htmlFor="progress-state">
          Trạng thái học của bạn
        </label>
        <select
          id="progress-state"
          className="ba-input max-w-md"
          value={progress?.state ?? 'not-started'}
          onChange={(e) => {
            void setProgress(moduleId, e.target.value as ProgressState);
          }}
        >
          {PROGRESS_OPTIONS.map((state) => (
            <option key={state} value={state}>
              {PROGRESS_LABEL_VI[state]}
            </option>
          ))}
        </select>
        <p className="mt-2 text-xs text-ink-faint">
          Tiến trình phản ánh mức độ thành thạo, không chỉ việc đã đọc.
        </p>
      </Card>

      <div className="ba-scroll-x mb-4 border-b border-line">
        <div role="tablist" aria-label="Nội dung module" className="flex min-w-max gap-1">
          {TABS.map((name) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={tab === name}
              onClick={() => setTab(name)}
              className={`whitespace-nowrap rounded-t-md px-3 py-2 text-sm transition-colors ${
                tab === name
                  ? 'border-b-2 border-brand font-medium text-brand'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div role="tabpanel">
        {tab === 'Bài học' ? (
          <article className="max-w-3xl">
            {module.lessonVi.map((section, index) => (
              <section key={`${module.id}-lesson-${index}`} className="mb-8">
                <h2 className="mb-2 text-lg font-semibold">{section.headingVi}</h2>
                {section.paragraphsVi.map((paragraph, pIndex) => (
                  <p
                    key={`${module.id}-lesson-${index}-p-${pIndex}`}
                    className="mb-3 leading-relaxed text-ink-muted"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bulletsVi && section.bulletsVi.length > 0 ? (
                  <BulletList items={section.bulletsVi} />
                ) : null}
                {section.example ? (
                  <figure className="mt-3">
                    <CodeBlock
                      content={section.example.content}
                      language={section.example.language}
                    />
                    <figcaption className="mt-1 text-xs text-ink-faint">
                      {section.example.captionVi}
                    </figcaption>
                  </figure>
                ) : null}
              </section>
            ))}
          </article>
        ) : null}

        {tab === 'Mục tiêu' ? (
          <>
            <BulletList items={module.learningObjectives} />
            <h3 className="mb-2 mt-6 font-semibold">Tiêu chí hoàn thành</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-ink-muted">
              {module.completionCriteria.map((c) => (
                <li key={c.id}>{c.labelVi}</li>
              ))}
            </ul>
          </>
        ) : null}

        {tab === 'Khái niệm' ? (
          concepts.length === 0 ? (
            <EmptyState message="Module này chưa gắn khái niệm nào." />
          ) : (
            <ul className="space-y-3">
              {concepts.map((concept) => (
                <li key={concept.id}>
                  <Card>
                    <p className="font-medium">{concept.titleVi}</p>
                    <p className="mt-1 text-sm text-ink-muted">{concept.definitionVi}</p>
                    <p className="mt-2 text-sm text-ink-muted">
                      <span className="font-medium text-ink">Vì sao quan trọng: </span>
                      {concept.whyItMattersVi}
                    </p>
                    <p className="mt-2 text-sm text-ink-muted">
                      <span className="font-medium text-ink">Trong kiến trúc: </span>
                      {concept.architectureContextVi}
                    </p>
                    {concept.standardReferences.length > 0 ? (
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {concept.standardReferences.map((ref) => {
                          const standard = standardById.get(ref.standardId);
                          if (!standard) return null;
                          return (
                            <li key={`${ref.standardId}-${ref.sectionId}`}>
                              <Chip>
                                {standard.title} · {ref.sectionId}
                              </Chip>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </Card>
                </li>
              ))}
            </ul>
          )
        ) : null}

        {tab === 'Kiến trúc' ? (
          domain ? (
            <>
              <h3 className="mb-2 font-semibold">Kiến trúc hệ thống của lĩnh vực</h3>
              <BulletList items={domain.architectureVi} />
              <h3 className="mb-2 mt-6 font-semibold">Trust boundary</h3>
              <BulletList items={domain.trustBoundariesVi} />
              <h3 className="mb-2 mt-6 font-semibold">Bề mặt tấn công</h3>
              <BulletList items={domain.attackSurfaceVi} />
            </>
          ) : (
            <EmptyState message="Không xác định được lĩnh vực của module này." />
          )
        ) : null}

        {tab === 'Nhóm điểm yếu' ? (
          weaknesses.length === 0 ? (
            <EmptyState message="Module này chưa gắn nhóm điểm yếu nào." />
          ) : (
            <ul className="space-y-3">
              {weaknesses.map((weakness) => (
                <li key={weakness.id}>
                  <Card>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium">{weakness.titleVi}</span>
                      {weakness.cweIds.map((cwe) => (
                        <Chip key={cwe}>{cwe}</Chip>
                      ))}
                    </div>
                    <p className="mt-2 text-sm text-ink-muted">
                      <span className="font-medium text-ink">Nguyên nhân gốc: </span>
                      {weakness.rootCauseVi}
                    </p>
                    {weakness.indicatorsVi.length > 0 ? (
                      <>
                        <p className="mt-2 text-sm font-medium">Dấu hiệu nhận biết</p>
                        <BulletList items={weakness.indicatorsVi} />
                      </>
                    ) : null}
                    <p className="mt-3 text-sm font-medium">Xác minh an toàn</p>
                    <BulletList items={weakness.safeValidationPrinciplesVi} />
                    <p className="mt-3 text-sm font-medium">Chiều tác động</p>
                    <BulletList items={weakness.impactDimensions} />
                  </Card>
                </li>
              ))}
            </ul>
          )
        ) : null}

        {tab === 'Phương pháp' ? (
          <>
            <h3 className="mb-2 font-semibold">Phương pháp kiểm thử</h3>
            <BulletList items={module.methodologyVi} />
            <h3 className="mb-2 mt-6 font-semibold">Chứng minh tác động một cách an toàn</h3>
            <BulletList items={module.safeImpactProofVi} />
          </>
        ) : null}

        {tab === 'Nguồn học' ? (
          <>
            <h3 className="mb-2 font-semibold">Nguồn bắt buộc</h3>
            {requiredResources.length === 0 ? (
              <EmptyState message="Module này chưa gắn nguồn bắt buộc." />
            ) : (
              <ul className="space-y-2">
                {requiredResources.map((resource) => (
                  <li key={resource.id} className="ba-card">
                    <ExternalLink href={resource.url} showHost>
                      {resource.title}
                    </ExternalLink>
                    <p className="mt-1 text-sm text-ink-muted">{resource.descriptionVi}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Chip>{resource.provider}</Chip>
                      <ContentStatusChip value={resource.contentStatus} />
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <h3 className="mb-2 mt-6 font-semibold">
              Nguồn bổ sung của lĩnh vực ({optionalResources.length})
            </h3>
            <Link to="/resources" className="ba-btn text-xs">
              Mở thư viện nguồn để lọc chi tiết
            </Link>
          </>
        ) : null}

        {tab === 'Lab' ? (
          labs.length === 0 ? (
            <EmptyState message="Module này chưa có lab. Khoảng trống này được ghi nhận trong gap analysis." />
          ) : (
            <ul className="space-y-2">
              {labs.map((lab) => (
                <li key={lab.id} className="ba-card">
                  <p className="font-medium">{lab.titleVi}</p>
                  <p className="mt-1 text-sm text-ink-muted">{lab.descriptionVi}</p>
                  <Callout tone="warn" title="Mục tiêu được phép">
                    {lab.allowedTargetsNoteVi}
                  </Callout>
                  <Link to="/labs" className="ba-link mt-2 inline-block text-xs">
                    Mở trong Lab Hub
                  </Link>
                </li>
              ))}
            </ul>
          )
        ) : null}

        {tab === 'Checklist' ? (
          checklists.length === 0 ? (
            <EmptyState message="Module này chưa gắn checklist." />
          ) : (
            <ul className="space-y-2">
              {checklists.map((checklist) => (
                <li key={checklist.id} className="ba-card">
                  <p className="font-medium">{checklist.titleVi}</p>
                  <p className="mt-1 text-sm text-ink-muted">{checklist.safetyNoteVi}</p>
                  <Link to="/checklists" className="ba-link mt-2 inline-block text-xs">
                    Mở Checklist Workspace
                  </Link>
                </li>
              ))}
            </ul>
          )
        ) : null}

        {tab === 'Khắc phục' ? (
          <>
            <h3 className="mb-2 font-semibold">Chủ đề khắc phục của module</h3>
            <BulletList items={module.remediationTopicIds} />
            {weaknesses.length > 0 ? (
              <>
                <h3 className="mb-2 mt-6 font-semibold">Nguyên tắc khắc phục theo điểm yếu</h3>
                <ul className="space-y-3">
                  {weaknesses.map((weakness) => (
                    <li key={weakness.id}>
                      <Card>
                        <p className="font-medium">{weakness.titleVi}</p>
                        <BulletList items={weakness.remediationPrinciplesVi} />
                      </Card>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </>
        ) : null}

        {tab === 'Quiz' ? (
          quizzes.length === 0 ? (
            <EmptyState message="Module này chưa có bài tự đánh giá." />
          ) : (
            <ul className="space-y-4">
              {quizzes.map((quiz) => (
                <li key={quiz.id}>
                  <Card>
                    <p className="font-medium">{quiz.titleVi}</p>
                    <p className="mt-1 text-xs text-ink-faint">
                      {quiz.questions.length} câu · điểm đạt {quiz.passingScorePercent}%
                    </p>
                    <ul className="mt-3 space-y-4">
                      {quiz.questions.map((question) => (
                        <li key={question.id}>
                          <p className="text-sm font-medium">{question.promptVi}</p>
                          {question.contextBlock ? (
                            <div className="mt-2">
                              <CodeBlock
                                content={question.contextBlock.content}
                                language={question.contextBlock.language}
                              />
                            </div>
                          ) : null}
                          <details className="mt-2">
                            <summary className="cursor-pointer text-xs text-ink-faint">
                              Xem đáp án và giải thích
                            </summary>
                            <ul className="mt-2 space-y-1 text-sm">
                              {question.options.map((option) => (
                                <li
                                  key={option.id}
                                  className={
                                    question.correctOptionIds.includes(option.id)
                                      ? 'text-ok'
                                      : 'text-ink-muted'
                                  }
                                >
                                  {option.textVi}
                                </li>
                              ))}
                            </ul>
                            <p className="mt-2 text-sm text-ink-muted">{question.explanationVi}</p>
                          </details>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </li>
              ))}
            </ul>
          )
        ) : null}

        {tab === 'Bài tập báo cáo' ? (
          exercises.length === 0 ? (
            <EmptyState message="Module này chưa có bài tập viết báo cáo." />
          ) : (
            <ul className="space-y-3">
              {exercises.map((exercise) => (
                <li key={exercise.id}>
                  <Card>
                    <p className="font-medium">{exercise.titleVi}</p>
                    <p className="mt-1 text-sm text-ink-muted">{exercise.scenarioVi}</p>
                    <p className="mt-2 text-sm">
                      <span className="font-medium">Phạm vi: </span>
                      <span className="text-ink-muted">{exercise.scopeVi}</span>
                    </p>
                    <p className="mt-2 text-sm font-medium">Rubric chấm điểm</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-ink-muted">
                      {exercise.rubric.map((item) => (
                        <li key={item.id}>
                          {item.criterionVi} ({item.maxPoints} điểm)
                        </li>
                      ))}
                    </ul>
                    <Link to="/report-builder" className="ba-btn mt-3 text-xs">
                      Soạn báo cáo cho bài này
                    </Link>
                  </Card>
                </li>
              ))}
            </ul>
          )
        ) : null}

        {tab === 'Ghi chú' ? (
          <Card>
            <label className="ba-label" htmlFor="module-note">
              Ghi chú của bạn (lưu cục bộ trên máy này)
            </label>
            <textarea
              id="module-note"
              className="ba-input min-h-40 font-mono text-xs"
              value={noteBody}
              onChange={(e) => setNoteBody(e.target.value)}
              placeholder="Câu hỏi còn thắc mắc, quan sát, ý tưởng kiểm thử…"
            />
            {sensitiveHits.length > 0 ? (
              <div className="mt-3">
                <Callout tone="danger" title="Ghi chú có thể chứa thông tin nhạy cảm">
                  <ul className="list-disc space-y-0.5 pl-5">
                    {sensitiveHits.map((hit) => (
                      <li key={hit.kind}>{hit.hintVi}</li>
                    ))}
                  </ul>
                  <p className="mt-2">
                    Không lưu token, khoá hay cookie phiên vào ghi chú. Hãy che chúng trước khi lưu.
                  </p>
                </Callout>
              </div>
            ) : null}
            <button
              type="button"
              className="ba-btn ba-btn-primary mt-3"
              onClick={() => {
                void handleSaveNote();
              }}
            >
              Lưu ghi chú
            </button>
          </Card>
        ) : null}
      </div>
    </>
  );
}
