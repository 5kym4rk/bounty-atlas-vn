/**
 * Cổng an toàn: chặn nội dung thực hành cho tới khi người dùng xác nhận đã đọc
 * tuyên bố an toàn. Xem SAFETY_MODEL.md §1.
 */
import type { ReactNode } from 'react';
import { SAFETY_STATEMENT_VI, STOP_TESTING_RULES_VI } from '@/config/safety';
import { useAppStore, useSafetyAcknowledged } from '@/app/store';
import { Callout, Card } from '@/components/ui';

export function SafetyStatement() {
  return (
    <Callout tone="warn" title="Tuyên bố an toàn bắt buộc">
      <p>{SAFETY_STATEMENT_VI}</p>
    </Callout>
  );
}

export function StopRules() {
  return (
    <Card>
      <h3 className="mb-2 font-semibold">Dừng kiểm thử ngay khi</h3>
      <ol className="list-decimal space-y-1 pl-5 text-sm text-ink-muted">
        {STOP_TESTING_RULES_VI.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ol>
    </Card>
  );
}

export function SafetyGate({ children }: { children: ReactNode }) {
  const acknowledged = useSafetyAcknowledged();
  const acknowledgeSafety = useAppStore((s) => s.acknowledgeSafety);

  if (acknowledged) return <>{children}</>;

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <h1 className="text-2xl font-semibold">Xác nhận trước khi mở nội dung thực hành</h1>
      <SafetyStatement />
      <StopRules />
      <Card>
        <p className="mb-3 text-sm text-ink-muted">
          Bạn cần xác nhận đã đọc và hiểu tuyên bố trên trước khi mở Lab Hub, Checklist Workspace,
          Report Builder và Triage Simulator.
        </p>
        <button
          type="button"
          className="ba-btn ba-btn-primary"
          onClick={() => {
            void acknowledgeSafety();
          }}
        >
          Tôi đã đọc và hiểu
        </button>
      </Card>
    </div>
  );
}
