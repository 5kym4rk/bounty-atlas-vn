import { useMemo, useState } from 'react';
import { useAppStore } from '@/app/store';
import { dataset } from '@/data';
import { domainById } from '@/utils/lookups';
import { SafetyStatement, StopRules } from '@/components/safety/SafetyGate';
import { Callout, Card, Chip, EmptyState, PageHeader, Section } from '@/components/ui';
import {
  CHECKLIST_STATE_LABEL_VI,
  type ChecklistItemState,
  type ChecklistRun,
} from '@/storage/schema';

const STATES: ChecklistItemState[] = [
  'unchecked',
  'checked',
  'not-applicable',
  'needs-review',
  'notable-observation',
  'stopped-scope',
];

const ASSET_TYPES = [
  'Web',
  'API',
  'Ứng dụng di động',
  'Cloud',
  'Hạ tầng mạng',
  'Desktop',
  'Hợp đồng thông minh',
  'Hệ thống AI',
];
const ROLES = [
  'Khách chưa đăng nhập',
  'Người dùng thường',
  'Quản trị tổ chức',
  'Quản trị hệ thống',
  'Tài khoản khách',
];
const DATA_TYPES = [
  'Dữ liệu công khai',
  'Dữ liệu cá nhân',
  'Dữ liệu tài chính',
  'Dữ liệu nội bộ tổ chức',
  'Thông tin xác thực',
];
const BOUNDARIES = [
  'Client ↔ Server',
  'Người dùng ↔ Người dùng',
  'Tổ chức ↔ Tổ chức',
  'Ứng dụng ↔ Bên thứ ba',
  'Mạng ngoài ↔ Mạng trong',
];

export function ChecklistWorkspacePage() {
  const runs = useAppStore((s) => s.checklistRuns);
  const saveChecklistRun = useAppStore((s) => s.saveChecklistRun);
  const deleteChecklistRun = useAppStore((s) => s.deleteChecklistRun);

  const [assetType, setAssetType] = useState(ASSET_TYPES[0] as string);
  const [feature, setFeature] = useState('');
  const [role, setRole] = useState(ROLES[1] as string);
  const [dataType, setDataType] = useState(DATA_TYPES[1] as string);
  const [trustBoundary, setTrustBoundary] = useState(BOUNDARIES[0] as string);
  const [selectedChecklists, setSelectedChecklists] = useState<string[]>([]);
  const [activeRunId, setActiveRunId] = useState<string | null>(null);

  const activeRun = useMemo(
    () => runs.find((r) => r.id === activeRunId) ?? null,
    [activeRunId, runs],
  );

  const suggested = useMemo(() => {
    const keyword = assetType.toLowerCase();
    return dataset.checklists.filter((c) => {
      if (keyword.includes('web'))
        return ['web-feature', 'authorization', 'authentication', 'business-flow'].includes(
          c.context,
        );
      if (keyword.includes('api')) return c.context === 'api' || c.context === 'authorization';
      if (keyword.includes('di động')) return c.context === 'mobile';
      if (keyword.includes('cloud')) return c.context === 'cloud' || c.context === 'container';
      if (keyword.includes('mạng')) return c.context === 'network';
      if (keyword.includes('desktop')) return c.context === 'desktop';
      if (keyword.includes('hợp đồng')) return c.context === 'web3';
      if (keyword.includes('ai')) return c.context === 'ai';
      return false;
    });
  }, [assetType]);

  async function createRun() {
    const ids = selectedChecklists.length > 0 ? selectedChecklists : suggested.map((c) => c.id);
    if (ids.length === 0) return;
    const now = new Date().toISOString();
    const run: ChecklistRun = {
      id: `run-${Date.now()}`,
      checklistIds: ids,
      labelVi: `${assetType}${feature ? ` — ${feature}` : ''}`,
      context: { assetType, feature, role, dataType, trustBoundary },
      items: {},
      createdAt: now,
      updatedAt: now,
    };
    await saveChecklistRun(run);
    setActiveRunId(run.id);
  }

  async function updateItem(
    itemId: string,
    patch: { state?: ChecklistItemState; noteVi?: string },
  ) {
    if (!activeRun) return;
    const current = activeRun.items[itemId] ?? {
      state: 'unchecked' as ChecklistItemState,
      noteVi: '',
    };
    await saveChecklistRun({
      ...activeRun,
      items: { ...activeRun.items, [itemId]: { ...current, ...patch } },
      updatedAt: new Date().toISOString(),
    });
  }

  const activeChecklists = activeRun
    ? dataset.checklists.filter((c) => activeRun.checklistIds.includes(c.id))
    : [];

  return (
    <>
      <PageHeader
        title="Checklist Workspace"
        description="Chọn ngữ cảnh, ứng dụng sinh checklist tương ứng. Mỗi mục là một câu hỏi hoặc quan sát, không phải payload."
      />

      <div className="mb-6 space-y-3">
        <SafetyStatement />
        <StopRules />
      </div>

      <Section title="Tạo phiên checklist theo ngữ cảnh">
        <Card>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="ba-label" htmlFor="ctx-asset">
                Loại tài sản
              </label>
              <select
                id="ctx-asset"
                className="ba-input"
                value={assetType}
                onChange={(e) => setAssetType(e.target.value)}
              >
                {ASSET_TYPES.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="ba-label" htmlFor="ctx-feature">
                Tính năng
              </label>
              <input
                id="ctx-feature"
                className="ba-input"
                value={feature}
                onChange={(e) => setFeature(e.target.value)}
                placeholder="vi du: xuat bao cao, moi thanh vien"
              />
            </div>
            <div>
              <label className="ba-label" htmlFor="ctx-role">
                Vai trò đang dùng
              </label>
              <select
                id="ctx-role"
                className="ba-input"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                {ROLES.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="ba-label" htmlFor="ctx-data">
                Loại dữ liệu
              </label>
              <select
                id="ctx-data"
                className="ba-input"
                value={dataType}
                onChange={(e) => setDataType(e.target.value)}
              >
                {DATA_TYPES.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="ba-label" htmlFor="ctx-boundary">
                Trust boundary quan tâm
              </label>
              <select
                id="ctx-boundary"
                className="ba-input"
                value={trustBoundary}
                onChange={(e) => setTrustBoundary(e.target.value)}
              >
                {BOUNDARIES.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <fieldset className="mt-4">
            <legend className="ba-label">
              Checklist sẽ dùng (bỏ trống để dùng toàn bộ checklist được gợi ý)
            </legend>
            <div className="flex flex-wrap gap-2">
              {dataset.checklists.map((checklist) => {
                const isSuggested = suggested.some((c) => c.id === checklist.id);
                return (
                  <label
                    key={checklist.id}
                    className={`ba-chip cursor-pointer ${isSuggested ? 'border-brand text-brand' : ''}`}
                  >
                    <input
                      type="checkbox"
                      className="mr-1"
                      checked={selectedChecklists.includes(checklist.id)}
                      onChange={() =>
                        setSelectedChecklists((prev) =>
                          prev.includes(checklist.id)
                            ? prev.filter((id) => id !== checklist.id)
                            : [...prev, checklist.id],
                        )
                      }
                    />
                    {checklist.titleVi}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <button
            type="button"
            className="ba-btn ba-btn-primary mt-4"
            onClick={() => {
              void createRun();
            }}
          >
            Tạo phiên checklist
          </button>
        </Card>
      </Section>

      {runs.length > 0 ? (
        <Section title="Phiên đã lưu">
          <ul className="space-y-2">
            {runs.map((run) => (
              <li
                key={run.id}
                className="ba-card flex flex-wrap items-center justify-between gap-2"
              >
                <div>
                  <p className="font-medium">{run.labelVi}</p>
                  <p className="text-xs text-ink-faint">
                    {run.context.role} · {run.context.dataType} · {run.context.trustBoundary} · cập
                    nhật {run.updatedAt.slice(0, 10)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="ba-btn text-xs"
                    onClick={() => setActiveRunId(run.id)}
                  >
                    Mở
                  </button>
                  <button
                    type="button"
                    className="ba-btn text-xs"
                    onClick={() => {
                      void deleteChecklistRun(run.id);
                      if (activeRunId === run.id) setActiveRunId(null);
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

      {activeRun ? (
        <Section title={`Phiên: ${activeRun.labelVi}`}>
          {activeChecklists.length === 0 ? (
            <EmptyState message="Phiên này không có checklist nào." />
          ) : (
            <ul className="space-y-4">
              {activeChecklists.map((checklist) => {
                const domain = domainById.get(checklist.domainId);
                return (
                  <li key={checklist.id}>
                    <Card>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{checklist.titleVi}</h3>
                        {domain ? <Chip tone="brand">{domain.code}</Chip> : null}
                      </div>
                      <div className="mt-2">
                        <Callout tone="warn">{checklist.safetyNoteVi}</Callout>
                      </div>
                      <ul className="mt-4 space-y-4">
                        {checklist.items.map((item) => {
                          const state = activeRun.items[item.id];
                          return (
                            <li key={item.id} className="border-t border-line pt-3">
                              <p className="font-medium">{item.questionVi}</p>
                              <p className="mt-1 text-sm text-ink-muted">{item.whyVi}</p>
                              {item.stopConditionVi ? (
                                <p className="mt-1 text-sm text-warn">
                                  Điều kiện dừng: {item.stopConditionVi}
                                </p>
                              ) : null}
                              <div className="mt-2 flex flex-wrap items-center gap-2">
                                <label className="sr-only" htmlFor={`state-${item.id}`}>
                                  Trạng thái mục {item.questionVi}
                                </label>
                                <select
                                  id={`state-${item.id}`}
                                  className="ba-input max-w-xs"
                                  value={state?.state ?? 'unchecked'}
                                  onChange={(e) => {
                                    void updateItem(item.id, {
                                      state: e.target.value as ChecklistItemState,
                                    });
                                  }}
                                >
                                  {STATES.map((s) => (
                                    <option key={s} value={s}>
                                      {CHECKLIST_STATE_LABEL_VI[s]}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <textarea
                                className="ba-input mt-2 text-xs"
                                rows={2}
                                placeholder="Quan sát của bạn (không lưu token hay dữ liệu người khác)"
                                value={state?.noteVi ?? ''}
                                onChange={(e) => {
                                  void updateItem(item.id, { noteVi: e.target.value });
                                }}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </Card>
                  </li>
                );
              })}
            </ul>
          )}
        </Section>
      ) : null}
    </>
  );
}
