import { useMemo, useState } from 'react';
import { useAppStore } from '@/app/store';
import { dataset } from '@/data';
import { detectSensitiveString, redactSensitive } from '@/utils/sensitive';
import {
  bulletList,
  escapeMarkdown,
  fencedCodeBlock,
  heading,
  joinSections,
  stripControlChars,
} from '@/utils/markdown';
import { SafetyStatement } from '@/components/safety/SafetyGate';
import { Callout, Card, CodeBlock, EmptyState, PageHeader, Section } from '@/components/ui';
import type { ReportDraft } from '@/storage/schema';

type Field = {
  key: keyof ReportDraft;
  label: string;
  hint: string;
  multiline?: boolean;
};

const FIELDS: Field[] = [
  { key: 'program', label: 'Chương trình', hint: 'Tên chương trình hoặc tổ chức nhận báo cáo.' },
  {
    key: 'asset',
    label: 'Tài sản bị ảnh hưởng',
    hint: 'Định danh chính xác theo cách chính sách mô tả.',
  },
  {
    key: 'scopeEvidence',
    label: 'Bằng chứng tài sản nằm trong phạm vi',
    hint: 'Trích dẫn phần chính sách cho thấy tài sản này in-scope, kèm ngày bạn đọc.',
    multiline: true,
  },
  { key: 'title', label: 'Tiêu đề', hint: 'Một dòng: tài sản, loại vấn đề, tác động.' },
  {
    key: 'summary',
    label: 'Tóm tắt',
    hint: 'Bản rút gọn của điều bạn đã chứng minh.',
    multiline: true,
  },
  {
    key: 'preconditions',
    label: 'Điều kiện cần',
    hint: 'Vai trò, trạng thái tài khoản, cấu hình cần có để tái hiện.',
    multiline: true,
  },
  {
    key: 'steps',
    label: 'Bước tái hiện',
    hint: 'Đủ để người khác làm theo mà không cần hỏi lại.',
    multiline: true,
  },
  {
    key: 'actualResult',
    label: 'Kết quả thực tế',
    hint: 'Điều hệ thống thực sự làm.',
    multiline: true,
  },
  {
    key: 'expectedResult',
    label: 'Kết quả mong đợi',
    hint: 'Điều lẽ ra phải xảy ra.',
    multiline: true,
  },
  {
    key: 'impact',
    label: 'Tác động',
    hint: 'Tách rõ tác động kỹ thuật và tác động kinh doanh.',
    multiline: true,
  },
  { key: 'affectedRoles', label: 'Vai trò bị ảnh hưởng', hint: 'Ai bị ảnh hưởng và ở mức nào.' },
  {
    key: 'affectedRecords',
    label: 'Phạm vi bản ghi bị ảnh hưởng',
    hint: 'Ước lượng từ cấu trúc hệ thống, không từ việc thu thập dữ liệu.',
  },
  {
    key: 'dataExposure',
    label: 'Dữ liệu đã tiếp xúc',
    hint: 'Nêu chính xác bạn đã thấy gì và đã che gì.',
    multiline: true,
  },
  {
    key: 'minimalPoc',
    label: 'PoC tối thiểu',
    hint: 'Phép thử nhỏ nhất đủ chứng minh, với tác động thấp nhất.',
    multiline: true,
  },
  {
    key: 'safetyActions',
    label: 'Hành động giảm thiểu đã thực hiện',
    hint: 'Ví dụ: dừng ngay khi chạm dữ liệu thật, xoá dữ liệu đã tải, thời điểm thực hiện.',
    multiline: true,
  },
  {
    key: 'evidence',
    label: 'Bằng chứng',
    hint: 'Mô tả ảnh chụp và bản ghi đã đính kèm.',
    multiline: true,
  },
  { key: 'cwe', label: 'CWE', hint: 'Ví dụ: CWE-639. Gán theo nguyên nhân gốc.' },
  {
    key: 'cvssVector',
    label: 'Vector CVSS',
    hint: 'Chấm theo điều đã chứng minh, không theo giả định.',
  },
  { key: 'vrtCategory', label: 'Phân loại taxonomy', hint: 'Ví dụ: nhóm VRT tương ứng.' },
  {
    key: 'remediation',
    label: 'Khuyến nghị khắc phục',
    hint: 'Nêu nguyên nhân gốc và nguyên tắc; không áp đặt giải pháp cụ thể.',
    multiline: true,
  },
  {
    key: 'timeline',
    label: 'Timeline',
    hint: 'Thời điểm phát hiện, xác minh và gửi báo cáo.',
    multiline: true,
  },
  {
    key: 'disclosureNote',
    label: 'Ghi chú về công bố',
    hint: 'Nhắc rằng bạn sẽ không công bố khi chưa được phép.',
    multiline: true,
  },
];

function emptyDraft(): ReportDraft {
  const now = new Date().toISOString();
  const base: Record<string, string> = {};
  for (const field of FIELDS) base[field.key] = '';
  return {
    ...(base as unknown as ReportDraft),
    id: `report-${Date.now()}`,
    linkedExerciseId: null,
    createdAt: now,
    updatedAt: now,
  };
}

function toMarkdown(draft: ReportDraft, redact: boolean): string {
  const value = (key: keyof ReportDraft): string => {
    const raw = String(draft[key] ?? '');
    return stripControlChars(redact ? redactSensitive(raw) : raw);
  };

  return joinSections([
    heading(1, value('title') || 'Báo cáo lỗ hổng'),
    `**Chương trình:** ${escapeMarkdown(value('program'))}`,
    `**Tài sản:** ${escapeMarkdown(value('asset'))}`,
    value('scopeEvidence')
      ? `${heading(2, 'Bằng chứng phạm vi')}\n\n${value('scopeEvidence')}`
      : '',
    value('summary') ? `${heading(2, 'Tóm tắt')}\n\n${value('summary')}` : '',
    value('preconditions') ? `${heading(2, 'Điều kiện cần')}\n\n${value('preconditions')}` : '',
    value('steps')
      ? `${heading(2, 'Bước tái hiện')}\n\n${fencedCodeBlock(value('steps'), 'text')}`
      : '',
    value('actualResult') ? `${heading(2, 'Kết quả thực tế')}\n\n${value('actualResult')}` : '',
    value('expectedResult')
      ? `${heading(2, 'Kết quả mong đợi')}\n\n${value('expectedResult')}`
      : '',
    value('impact') ? `${heading(2, 'Tác động')}\n\n${value('impact')}` : '',
    heading(2, 'Phạm vi ảnh hưởng'),
    bulletList([
      `Vai trò bị ảnh hưởng: ${value('affectedRoles')}`,
      `Bản ghi bị ảnh hưởng: ${value('affectedRecords')}`,
    ]),
    value('dataExposure') ? `${heading(2, 'Dữ liệu đã tiếp xúc')}\n\n${value('dataExposure')}` : '',
    value('minimalPoc') ? `${heading(2, 'PoC tối thiểu')}\n\n${value('minimalPoc')}` : '',
    value('safetyActions')
      ? `${heading(2, 'Hành động giảm thiểu đã thực hiện')}\n\n${value('safetyActions')}`
      : '',
    value('evidence') ? `${heading(2, 'Bằng chứng')}\n\n${value('evidence')}` : '',
    heading(2, 'Phân loại'),
    bulletList([
      `CWE: ${value('cwe')}`,
      `CVSS: ${value('cvssVector')}`,
      `Taxonomy: ${value('vrtCategory')}`,
    ]),
    value('remediation') ? `${heading(2, 'Khuyến nghị khắc phục')}\n\n${value('remediation')}` : '',
    value('timeline') ? `${heading(2, 'Timeline')}\n\n${value('timeline')}` : '',
    value('disclosureNote')
      ? `${heading(2, 'Ghi chú về công bố')}\n\n${value('disclosureNote')}`
      : '',
  ]);
}

function toPlainText(draft: ReportDraft, redact: boolean): string {
  return FIELDS.map((field) => {
    const raw = String(draft[field.key] ?? '');
    const value = stripControlChars(redact ? redactSensitive(raw) : raw);
    return `${field.label}:\n${value || '(chưa điền)'}\n`;
  }).join('\n');
}

export function ReportBuilderPage() {
  const reports = useAppStore((s) => s.reports);
  const saveReport = useAppStore((s) => s.saveReport);
  const deleteReport = useAppStore((s) => s.deleteReport);

  const [draft, setDraft] = useState<ReportDraft>(() => reports[0] ?? emptyDraft());
  const [format, setFormat] = useState<'markdown' | 'json' | 'text'>('markdown');
  const [redact, setRedact] = useState(false);

  const sensitiveHits = useMemo(() => {
    const combined = FIELDS.map((f) => String(draft[f.key] ?? '')).join('\n');
    return detectSensitiveString(combined);
  }, [draft]);

  const missingRequired = useMemo(
    () =>
      (
        [
          ['title', 'Tiêu đề'],
          ['asset', 'Tài sản bị ảnh hưởng'],
          ['steps', 'Bước tái hiện'],
          ['impact', 'Tác động'],
          ['dataExposure', 'Dữ liệu đã tiếp xúc'],
          ['safetyActions', 'Hành động giảm thiểu'],
        ] as [keyof ReportDraft, string][]
      ).filter(([key]) => !String(draft[key] ?? '').trim()),
    [draft],
  );

  const output = useMemo(() => {
    if (format === 'markdown') return toMarkdown(draft, redact);
    if (format === 'text') return toPlainText(draft, redact);
    const data = redact
      ? Object.fromEntries(
          Object.entries(draft).map(([k, v]) => [
            k,
            typeof v === 'string' ? redactSensitive(v) : v,
          ]),
        )
      : draft;
    return JSON.stringify(data, null, 2);
  }, [draft, format, redact]);

  function update(key: keyof ReportDraft, value: string) {
    setDraft((prev) => ({ ...prev, [key]: value, updatedAt: new Date().toISOString() }));
  }

  async function handleDownload() {
    const extension = format === 'markdown' ? 'md' : format === 'json' ? 'json' : 'txt';
    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `bao-cao-${draft.id}.${extension}`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <PageHeader
        title="Trình soạn báo cáo"
        description="Soạn báo cáo đầy đủ và xuất ra Markdown, JSON hoặc văn bản thuần. Ứng dụng không tự gửi báo cáo đi đâu."
      />

      <div className="mb-6 space-y-3">
        <SafetyStatement />
        <Callout tone="warn" title="Ứng dụng không gửi báo cáo">
          Mọi nội dung ở đây chỉ nằm trên máy của bạn. Việc gửi báo cáo do chính bạn thực hiện qua
          kênh của chương trình, sau khi đã đọc lại điều khoản công bố.
        </Callout>
      </div>

      {reports.length > 0 ? (
        <Section title="Bản nháp đã lưu">
          <ul className="space-y-2">
            {reports.map((report) => (
              <li
                key={report.id}
                className="ba-card flex flex-wrap items-center justify-between gap-2"
              >
                <div>
                  <p className="font-medium">{report.title || '(chưa có tiêu đề)'}</p>
                  <p className="text-xs text-ink-faint">
                    {report.program || 'chưa có chương trình'} · cập nhật{' '}
                    {report.updatedAt.slice(0, 10)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button type="button" className="ba-btn text-xs" onClick={() => setDraft(report)}>
                    Mở
                  </button>
                  <button
                    type="button"
                    className="ba-btn text-xs"
                    onClick={() => {
                      void deleteReport(report.id);
                    }}
                  >
                    Xoá
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section title="Nội dung báo cáo">
        <Card>
          <div className="mb-4">
            <label className="ba-label" htmlFor="linked-exercise">
              Gắn với bài tập báo cáo (tuỳ chọn)
            </label>
            <select
              id="linked-exercise"
              className="ba-input"
              value={draft.linkedExerciseId ?? ''}
              onChange={(e) =>
                setDraft((prev) => ({ ...prev, linkedExerciseId: e.target.value || null }))
              }
            >
              <option value="">Không gắn</option>
              {dataset.reportExercises.map((exercise) => (
                <option key={exercise.id} value={exercise.id}>
                  {exercise.titleVi}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            {FIELDS.map((field) => (
              <div key={String(field.key)}>
                <label className="ba-label" htmlFor={`field-${String(field.key)}`}>
                  {field.label}
                </label>
                {field.multiline ? (
                  <textarea
                    id={`field-${String(field.key)}`}
                    className="ba-input min-h-24 text-sm"
                    value={String(draft[field.key] ?? '')}
                    onChange={(e) => update(field.key, e.target.value)}
                  />
                ) : (
                  <input
                    id={`field-${String(field.key)}`}
                    className="ba-input"
                    value={String(draft[field.key] ?? '')}
                    onChange={(e) => update(field.key, e.target.value)}
                  />
                )}
                <p className="mt-1 text-xs text-ink-faint">{field.hint}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              className="ba-btn ba-btn-primary"
              onClick={() => {
                void saveReport(draft);
              }}
            >
              Lưu bản nháp
            </button>
            <button type="button" className="ba-btn" onClick={() => setDraft(emptyDraft())}>
              Bản nháp mới
            </button>
          </div>
        </Card>
      </Section>

      {missingRequired.length > 0 ? (
        <div className="mb-6">
          <Callout tone="warn" title="Còn thiếu phần quan trọng">
            <ul className="list-disc space-y-0.5 pl-5">
              {missingRequired.map(([, label]) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </Callout>
        </div>
      ) : null}

      {sensitiveHits.length > 0 ? (
        <div className="mb-6">
          <Callout tone="danger" title="Nội dung có thể chứa thông tin nhạy cảm">
            <ul className="list-disc space-y-0.5 pl-5">
              {sensitiveHits.map((hit) => (
                <li key={hit.kind}>{hit.hintVi}</li>
              ))}
            </ul>
            <p className="mt-2">
              Bật tuỳ chọn che thông tin nhạy cảm trước khi xuất, hoặc sửa nội dung trực tiếp.
            </p>
          </Callout>
        </div>
      ) : null}

      <Section title="Xuất báo cáo">
        <Card>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <div>
              <label className="ba-label" htmlFor="export-format">
                Định dạng
              </label>
              <select
                id="export-format"
                className="ba-input"
                value={format}
                onChange={(e) => setFormat(e.target.value as typeof format)}
              >
                <option value="markdown">Markdown</option>
                <option value="json">JSON</option>
                <option value="text">Văn bản thuần</option>
              </select>
            </div>
            <label className="mt-6 flex items-center gap-2 text-sm text-ink-muted">
              <input
                type="checkbox"
                checked={redact}
                onChange={(e) => setRedact(e.target.checked)}
              />
              Che chuỗi trông giống token và khoá
            </label>
            <button
              type="button"
              className="ba-btn mt-6"
              onClick={() => {
                void handleDownload();
              }}
            >
              Tải xuống
            </button>
          </div>

          {output.trim() ? (
            <CodeBlock content={output} language={format} />
          ) : (
            <EmptyState message="Điền nội dung ở trên để xem bản xuất." />
          )}
        </Card>
      </Section>
    </>
  );
}
