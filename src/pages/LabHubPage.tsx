import { useMemo, useState } from 'react';
import { dataset } from '@/data';
import { orderedDomains } from '@/utils/lookups';
import { containsVi } from '@/utils/vietnamese';
import { SafetyStatement } from '@/components/safety/SafetyGate';
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

const ENV_LABEL: Record<string, string> = {
  'controlled-online': 'Trực tuyến có kiểm soát',
  browser: 'Trình duyệt',
  docker: 'Container',
  vm: 'Máy ảo',
  'android-emulator': 'Máy ảo Android',
  'ios-simulator': 'Trình mô phỏng iOS',
  'cloud-owned-account': 'Tài khoản cloud riêng',
  testnet: 'Testnet',
  'local-chain': 'Chain cục bộ',
  'owned-hardware': 'Phần cứng của bạn',
  'network-simulator': 'Mô phỏng mạng',
  other: 'Khác',
};

export function LabHubPage() {
  const [query, setQuery] = useState('');
  const [domainId, setDomainId] = useState(ALL);
  const [environment, setEnvironment] = useState(ALL);
  const [freeOnly, setFreeOnly] = useState(false);

  const filtered = useMemo(
    () =>
      dataset.labs.filter((lab) => {
        if (domainId !== ALL && !lab.domainIds.includes(domainId)) return false;
        if (environment !== ALL && lab.environment !== environment) return false;
        if (freeOnly && lab.requiresPayment === true) return false;
        if (!query.trim()) return true;
        return (
          containsVi(lab.titleVi, query) ||
          containsVi(lab.descriptionVi, query) ||
          containsVi(lab.provider, query)
        );
      }),
    [domainId, environment, freeOnly, query],
  );

  return (
    <>
      <PageHeader
        title="Lab hợp pháp"
        description="Danh mục môi trường thực hành được thiết kế cho việc học. Ứng dụng này không nhận mục tiêu và không chạy bất kỳ công cụ quét hay khai thác nào."
      />

      <div className="mb-6 space-y-3">
        <SafetyStatement />
        <Callout tone="danger" title="Điều Lab Hub không làm">
          Không có ô nhập mục tiêu, không có chức năng quét, không có công cụ khai thác chạy trong
          trình duyệt. Mọi liên kết chỉ mở khi bạn chủ động bấm.
        </Callout>
      </div>

      <Card className="mb-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <label className="ba-label" htmlFor="lab-q">
              Tìm lab
            </label>
            <input
              id="lab-q"
              className="ba-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="vi du: phan quyen, firmware, hop dong"
            />
          </div>
          <div>
            <label className="ba-label" htmlFor="lab-domain">
              Lĩnh vực
            </label>
            <select
              id="lab-domain"
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
          <div>
            <label className="ba-label" htmlFor="lab-env">
              Môi trường
            </label>
            <select
              id="lab-env"
              className="ba-input"
              value={environment}
              onChange={(e) => setEnvironment(e.target.value)}
            >
              <option value={ALL}>Tất cả</option>
              {Object.entries(ENV_LABEL).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <label className="flex items-center gap-2 text-sm text-ink-muted">
              <input
                type="checkbox"
                checked={freeOnly}
                onChange={(e) => setFreeOnly(e.target.checked)}
              />
              Ẩn lab phát sinh chi phí
            </label>
          </div>
        </div>
      </Card>

      <p className="mb-3 text-sm text-ink-faint">
        {filtered.length} trên {dataset.labs.length} lab khớp bộ lọc.
      </p>

      {filtered.length === 0 ? (
        <EmptyState message="Không có lab nào khớp bộ lọc hiện tại." />
      ) : (
        <ul className="space-y-4">
          {filtered.map((lab) => (
            <li key={lab.id}>
              <Card>
                <div className="flex flex-wrap items-center gap-2">
                  <ExternalLink href={lab.url} showHost>
                    {lab.titleVi}
                  </ExternalLink>
                  <Chip>{lab.provider}</Chip>
                  <Chip>{ENV_LABEL[lab.environment] ?? lab.environment}</Chip>
                  <DifficultyChip value={lab.difficulty} />
                  {lab.requiresAccount === true ? <Chip>Cần tài khoản</Chip> : null}
                  {lab.requiresLocalInstall ? <Chip>Cần cài đặt cục bộ</Chip> : null}
                  {lab.cloud ? <Chip tone="warn">Phát sinh chi phí</Chip> : null}
                </div>

                <p className="mt-2 text-sm text-ink-muted">{lab.descriptionVi}</p>

                <div className="mt-3 space-y-3">
                  <Callout tone="warn" title="Mục tiêu được phép">
                    {lab.allowedTargetsNoteVi}
                  </Callout>
                  <Callout title="Ghi chú an toàn">{lab.safetyNoteVi}</Callout>

                  {lab.cloud ? (
                    <Callout tone="danger" title="Cảnh báo chi phí và dọn dẹp">
                      <ul className="list-disc space-y-1 pl-5">
                        <li>Chi phí ước tính: {lab.cloud.estimatedCost}</li>
                        <li>{lab.cloud.billingWarning}</li>
                        <li>
                          {lab.cloud.requiresDedicatedAccount
                            ? 'Bắt buộc dùng tài khoản riêng dành cho việc học.'
                            : 'Nên dùng tài khoản riêng dành cho việc học.'}
                        </li>
                        <li>Ghi chú về vùng: {lab.cloud.regionNote}</li>
                        <li>{lab.cloud.productionWarning}</li>
                        <li>
                          Bắt buộc dọn dẹp sau khi học xong.
                          {lab.cloud.cleanupInstructionsUrl ? (
                            <>
                              {' '}
                              <ExternalLink href={lab.cloud.cleanupInstructionsUrl}>
                                Hướng dẫn dọn dẹp
                              </ExternalLink>
                            </>
                          ) : null}
                        </li>
                      </ul>
                    </Callout>
                  ) : null}

                  {lab.evidenceSuggestionsVi.length > 0 ? (
                    <div>
                      <p className="mb-1 text-sm font-medium">Gợi ý ghi bằng chứng</p>
                      <BulletList items={lab.evidenceSuggestionsVi} />
                    </div>
                  ) : null}

                  <p className="text-xs text-ink-faint">
                    {lab.solutionPolicy === 'no-solution'
                      ? 'Dự án không lưu lời giải cho lab này.'
                      : 'Dự án không sao chép lời giải; nếu cần, hãy dùng lời giải chính thức của nhà cung cấp.'}
                  </p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
