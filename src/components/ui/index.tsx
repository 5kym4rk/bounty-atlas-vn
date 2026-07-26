/**
 * Thành phần giao diện dùng chung.
 *
 * Không thành phần nào ở đây render HTML thô. Nội dung luôn đi qua text node
 * của React, nên dữ liệu và ghi chú của người dùng không thể trở thành mã.
 */
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { ContentStatus, Difficulty, LinkStatus } from '@/schemas/entities';
import { displayHost, safeExternalUrl } from '@/utils/url';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`ba-card ${className}`}>{children}</div>;
}

export function Chip({
  children,
  tone = 'neutral',
  title,
}: {
  children: ReactNode;
  tone?: 'neutral' | 'brand' | 'danger' | 'warn' | 'ok';
  title?: string;
}) {
  const toneClass =
    tone === 'brand'
      ? 'border-brand text-brand'
      : tone === 'danger'
        ? 'border-danger text-danger'
        : tone === 'warn'
          ? 'border-warn text-warn'
          : tone === 'ok'
            ? 'border-ok text-ok'
            : '';
  return (
    <span className={`ba-chip ${toneClass}`} title={title}>
      {children}
    </span>
  );
}

const DIFFICULTY_LABEL: Record<Difficulty | 'mixed', string> = {
  foundation: 'Nền tảng',
  beginner: 'Nhập môn',
  intermediate: 'Trung cấp',
  advanced: 'Nâng cao',
  specialist: 'Chuyên sâu',
  research: 'Nghiên cứu',
  mixed: 'Nhiều mức',
};

export function DifficultyChip({ value }: { value: Difficulty | 'mixed' }) {
  return <Chip title="Mức độ">{DIFFICULTY_LABEL[value]}</Chip>;
}

const STATUS_LABEL: Record<ContentStatus, string> = {
  draft: 'Bản nháp',
  'review-needed': 'Cần rà soát',
  verified: 'Đã xác minh',
  outdated: 'Đã lỗi thời',
  archived: 'Lưu trữ',
};

const STATUS_HINT: Record<ContentStatus, string> = {
  draft: 'Nội dung đã viết nhưng chưa được đối chiếu với nguồn.',
  'review-needed': 'Đủ dùng nhưng đã tới hạn rà soát lại.',
  verified: 'Người biên tập đã mở nguồn và đối chiếu nội dung.',
  outdated: 'Nguồn hoặc chuẩn đã thay đổi; cần viết lại.',
  archived: 'Giữ cho lịch sử, không hiển thị mặc định.',
};

export function ContentStatusChip({ value }: { value: ContentStatus }) {
  const tone = value === 'verified' ? 'ok' : value === 'outdated' ? 'danger' : 'neutral';
  return (
    <Chip tone={tone} title={STATUS_HINT[value]}>
      {STATUS_LABEL[value]}
    </Chip>
  );
}

const LINK_STATUS_LABEL: Record<LinkStatus, string> = {
  active: 'Liên kết hoạt động',
  redirected: 'Đã chuyển hướng',
  'login-required': 'Cần đăng nhập',
  blocked: 'Bị chặn tự động',
  'rate-limited': 'Bị giới hạn tốc độ',
  unavailable: 'Không truy cập được',
  timeout: 'Hết thời gian chờ',
  unknown: 'Chưa kiểm tra',
};

export function LinkStatusChip({ value }: { value: LinkStatus }) {
  const tone = value === 'active' ? 'ok' : value === 'unavailable' ? 'danger' : 'neutral';
  return <Chip tone={tone}>{LINK_STATUS_LABEL[value]}</Chip>;
}

/**
 * Liên kết ngoài an toàn. URL không hợp lệ sẽ được render thành text thay vì
 * thành thẻ <a>, nên `javascript:` và `data:` không bao giờ trở thành liên kết.
 */
export function ExternalLink({
  href,
  children,
  showHost = false,
}: {
  href: string;
  children: ReactNode;
  showHost?: boolean;
}) {
  const safe = safeExternalUrl(href);
  if (!safe) {
    return (
      <span className="text-ink-faint" title="URL bị từ chối vì không an toàn">
        {children}
      </span>
    );
  }
  return (
    <a href={safe} target="_blank" rel="noopener noreferrer" className="ba-link">
      {children}
      {showHost ? <span className="ml-1 text-xs text-ink-faint">({displayHost(safe)})</span> : null}
    </a>
  );
}

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-0">
        <h1 className="text-2xl font-semibold sm:text-3xl">{title}</h1>
        {description ? <p className="mt-2 max-w-3xl text-ink-muted">{description}</p> : null}
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap gap-2">{actions}</div> : null}
    </header>
  );
}

export function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="mb-1 text-lg font-semibold">{title}</h2>
      {description ? <p className="mb-3 text-sm text-ink-muted">{description}</p> : null}
      {children}
    </section>
  );
}

export function Callout({
  tone = 'info',
  title,
  children,
}: {
  tone?: 'info' | 'warn' | 'danger';
  title?: string;
  children: ReactNode;
}) {
  const toneClass =
    tone === 'danger'
      ? 'border-danger/60 bg-danger/5'
      : tone === 'warn'
        ? 'border-warn/60 bg-warn/5'
        : 'border-brand/50 bg-brand-soft/40';
  return (
    <div className={`rounded-lg border-l-4 ${toneClass} p-4`} role="note">
      {title ? <p className="mb-1 font-semibold">{title}</p> : null}
      <div className="text-sm text-ink-muted">{children}</div>
    </div>
  );
}

export function BulletList({ items }: { items: readonly string[] }) {
  if (items.length === 0) {
    return <p className="text-sm text-ink-faint">Chưa có nội dung cho mục này.</p>;
  }
  return (
    <ul className="list-disc space-y-1 pl-5 text-sm text-ink-muted">
      {items.map((item, i) => (
        <li key={`${i}-${item.slice(0, 24)}`}>{item}</li>
      ))}
    </ul>
  );
}

export function EmptyState({ message }: { message: string }) {
  return (
    <p className="rounded-md border border-dashed border-line p-4 text-sm text-ink-faint">
      {message}
    </p>
  );
}

export function StatTile({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint?: string;
}) {
  return (
    <div className="ba-card">
      <p className="text-xs uppercase tracking-wide text-ink-faint">{label}</p>
      <p className="mt-1 text-2xl font-semibold tabular-nums">{value}</p>
      {hint ? <p className="mt-1 text-xs text-ink-faint">{hint}</p> : null}
    </div>
  );
}

export function InternalLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="ba-link">
      {children}
    </Link>
  );
}

/** Khối mã chỉ đọc; nội dung luôn là text node. */
export function CodeBlock({ content, language }: { content: string; language?: string }) {
  return (
    <div className="ba-scroll-x rounded-md border border-line bg-surface-sunken">
      {language ? (
        <div className="border-b border-line px-3 py-1 text-xs text-ink-faint">{language}</div>
      ) : null}
      <pre className="p-3 text-xs leading-relaxed">
        <code className="font-mono">{content}</code>
      </pre>
    </div>
  );
}
