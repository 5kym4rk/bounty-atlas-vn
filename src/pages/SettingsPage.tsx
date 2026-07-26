import { useState } from 'react';
import { useAppStore } from '@/app/store';
import { PRODUCT } from '@/config/product';
import { MAX_IMPORT_BYTES } from '@/config/safety';
import { SCHEMA_VERSION } from '@/storage/schema';
import {
  applyImport,
  buildExportBundle,
  previewImport,
  serializeBundle,
  type ImportPreview,
} from '@/storage/transfer';
import { Callout, Card, CodeBlock, PageHeader, Section } from '@/components/ui';

export function SettingsPage() {
  const settings = useAppStore((s) => s.settings);
  const setTheme = useAppStore((s) => s.setTheme);
  const setShowDraftContent = useAppStore((s) => s.setShowDraftContent);
  const storageAvailable = useAppStore((s) => s.storageAvailable);
  const reload = useAppStore((s) => s.reload);
  const wipeAll = useAppStore((s) => s.wipeAll);

  const [redactExport, setRedactExport] = useState(true);
  const [preview, setPreview] = useState<ImportPreview | null>(null);
  const [importError, setImportError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [confirmWipe, setConfirmWipe] = useState(false);

  async function handleExport() {
    const bundle = await buildExportBundle({ redact: redactExport });
    const blob = new Blob([serializeBundle(bundle)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${PRODUCT.slug}-du-lieu-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    setMessage('Đã tạo tệp xuất. Tệp chỉ được tải xuống máy bạn, không gửi đi đâu.');
  }

  async function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    setImportError(null);
    setPreview(null);
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_IMPORT_BYTES) {
      setImportError(`Tệp lớn hơn giới hạn ${Math.round(MAX_IMPORT_BYTES / 1024 / 1024)} MB.`);
      return;
    }
    try {
      const text = await file.text();
      setPreview(await previewImport(text));
    } catch (error) {
      setImportError(error instanceof Error ? error.message : 'Không đọc được tệp.');
    }
  }

  async function handleApply(mode: 'merge' | 'overwrite') {
    if (!preview) return;
    await applyImport(preview.bundle, mode);
    await reload();
    setPreview(null);
    setMessage(
      mode === 'overwrite'
        ? 'Đã ghi đè dữ liệu cục bộ bằng nội dung trong tệp.'
        : 'Đã gộp dữ liệu từ tệp vào dữ liệu hiện có.',
    );
  }

  return (
    <>
      <PageHeader
        title="Cài đặt"
        description="Toàn bộ dữ liệu học của bạn nằm trên máy này. Không có tài khoản, không có đồng bộ đám mây, không có telemetry."
      />

      {message ? (
        <div className="mb-4">
          <Callout>{message}</Callout>
        </div>
      ) : null}

      <Section title="Giao diện">
        <Card>
          <div className="space-y-3">
            <div>
              <label className="ba-label" htmlFor="theme-select">
                Chế độ màu
              </label>
              <select
                id="theme-select"
                className="ba-input max-w-xs"
                value={settings.theme}
                onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
              >
                <option value="dark">Tối</option>
                <option value="light">Sáng</option>
              </select>
            </div>
            <label className="flex items-center gap-2 text-sm text-ink-muted">
              <input
                type="checkbox"
                checked={settings.showDraftContent}
                onChange={(e) => setShowDraftContent(e.target.checked)}
              />
              Hiển thị nội dung còn ở trạng thái bản nháp
            </label>
          </div>
        </Card>
      </Section>

      <Section title="Kho dữ liệu cục bộ">
        <Card>
          <ul className="space-y-1 text-sm text-ink-muted">
            <li>Trạng thái: {storageAvailable ? 'IndexedDB khả dụng' : 'Không khả dụng'}</li>
            <li>Phiên bản schema: {SCHEMA_VERSION}</li>
            <li>Giới hạn tệp import: {Math.round(MAX_IMPORT_BYTES / 1024 / 1024)} MB</li>
          </ul>
        </Card>
      </Section>

      <Section title="Xuất dữ liệu">
        <Card>
          <label className="mb-3 flex items-start gap-2 text-sm text-ink-muted">
            <input
              type="checkbox"
              className="mt-1"
              checked={redactExport}
              onChange={(e) => setRedactExport(e.target.checked)}
            />
            <span>
              Loại bỏ dữ liệu nhạy cảm khi xuất: bỏ ghi chú, bằng chứng và bản nháp báo cáo, đồng
              thời che các chuỗi trông giống token trong phần còn lại.
            </span>
          </label>
          <button
            type="button"
            className="ba-btn ba-btn-primary"
            onClick={() => {
              void handleExport();
            }}
          >
            Tạo tệp xuất
          </button>
        </Card>
      </Section>

      <Section title="Nhập dữ liệu">
        <Card>
          <label className="ba-label" htmlFor="import-file">
            Chọn tệp JSON đã xuất trước đó
          </label>
          <input
            id="import-file"
            type="file"
            accept="application/json,.json"
            className="ba-input"
            onChange={(e) => {
              void handleFile(e);
            }}
          />
          {importError ? (
            <div className="mt-3">
              <Callout tone="danger" title="Không nhập được">
                {importError}
              </Callout>
            </div>
          ) : null}

          {preview ? (
            <div className="mt-4 space-y-3">
              {preview.schemaVersionMismatch ? (
                <Callout tone="warn" title="Khác phiên bản schema">
                  Tệp được tạo ở phiên bản schema {preview.bundle.schemaVersion}, ứng dụng đang dùng{' '}
                  {SCHEMA_VERSION}. Dữ liệu vẫn hợp lệ theo schema hiện tại nhưng hãy kiểm tra lại
                  sau khi nhập.
                </Callout>
              ) : null}

              <div>
                <p className="mb-1 text-sm font-medium">So sánh trước khi ghi</p>
                <CodeBlock
                  language="text"
                  content={Object.keys(preview.incomingCounts)
                    .map(
                      (key) =>
                        `${key.padEnd(16)} hiện có ${String(preview.existingCounts[key] ?? 0).padStart(4)}   trong tệp ${String(preview.incomingCounts[key] ?? 0).padStart(4)}`,
                    )
                    .join('\n')}
                />
              </div>

              {preview.conflicts.length > 0 ? (
                <Callout tone="warn" title={`${preview.conflicts.length} mục trùng khoá`}>
                  <ul className="list-disc space-y-0.5 pl-5">
                    {preview.conflicts.slice(0, 10).map((conflict) => (
                      <li key={`${conflict.store}-${conflict.key}`}>
                        [{conflict.store}] {conflict.labelVi}
                      </li>
                    ))}
                  </ul>
                  {preview.conflicts.length > 10 ? (
                    <p className="mt-1">…và {preview.conflicts.length - 10} mục khác.</p>
                  ) : null}
                </Callout>
              ) : (
                <Callout>Không có mục nào trùng khoá.</Callout>
              )}

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="ba-btn"
                  onClick={() => {
                    void handleApply('merge');
                  }}
                >
                  Gộp vào dữ liệu hiện có
                </button>
                <button
                  type="button"
                  className="ba-btn"
                  onClick={() => {
                    void handleApply('overwrite');
                  }}
                >
                  Ghi đè toàn bộ
                </button>
                <button type="button" className="ba-btn" onClick={() => setPreview(null)}>
                  Huỷ
                </button>
              </div>
            </div>
          ) : null}
        </Card>
      </Section>

      <Section title="Xoá toàn bộ dữ liệu">
        <Card>
          <Callout tone="danger" title="Thao tác không hoàn tác được">
            Xoá toàn bộ tiến trình, ghi chú, bằng chứng, phiên checklist, bản nháp báo cáo và hồ sơ
            học tập trên máy này. Hãy xuất dữ liệu trước nếu bạn muốn giữ lại.
          </Callout>
          <label className="mt-3 flex items-center gap-2 text-sm text-ink-muted">
            <input
              type="checkbox"
              checked={confirmWipe}
              onChange={(e) => setConfirmWipe(e.target.checked)}
            />
            Tôi hiểu và muốn xoá toàn bộ dữ liệu
          </label>
          <button
            type="button"
            className="ba-btn mt-3"
            disabled={!confirmWipe}
            onClick={() => {
              void wipeAll();
              setConfirmWipe(false);
              setMessage('Đã xoá toàn bộ dữ liệu người học trên máy này.');
            }}
          >
            Xoá toàn bộ dữ liệu
          </button>
        </Card>
      </Section>
    </>
  );
}
