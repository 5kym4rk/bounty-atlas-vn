/**
 * Kiểm tra liên kết của toàn bộ nguồn, lab, công cụ và chuẩn.
 *
 * Nguyên tắc (xem SOURCE_REGISTRY.md §7):
 * - HEAD trước, GET fallback.
 * - Timeout, giới hạn đồng thời, retry một lần có backoff.
 * - User-Agent giống trình duyệt để phân biệt "bị chặn bot" với "link chết".
 * - Phân loại riêng 401/403/404/410/429/5xx/timeout/redirect.
 * - KHÔNG tự sửa URL.
 * - KHÔNG làm fail deploy chỉ vì site chặn bot.
 *
 * Chạy: npm run check:links
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dataset } from '@/data';
import type { LinkStatus } from '@/schemas/entities';

const here = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(here, '..', '..');
const reportsDir = resolve(projectRoot, 'reports');

const TIMEOUT_MS = 15_000;
const CONCURRENCY = 6;
const RETRY_DELAY_MS = 2_000;
const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36';

interface CheckTarget {
  entity: string;
  id: string;
  title: string;
  url: string;
}

interface CheckResult extends CheckTarget {
  status: LinkStatus;
  httpStatus: number | null;
  finalUrl: string | null;
  note: string;
}

function collectTargets(): CheckTarget[] {
  const targets: CheckTarget[] = [];
  for (const r of dataset.resources) {
    targets.push({ entity: 'resource', id: r.id, title: r.title, url: r.url });
  }
  for (const l of dataset.labs) {
    targets.push({ entity: 'lab', id: l.id, title: l.titleVi, url: l.url });
    if (l.cloud?.cleanupInstructionsUrl) {
      targets.push({
        entity: 'lab-cleanup',
        id: l.id,
        title: `${l.titleVi} (hướng dẫn dọn dẹp)`,
        url: l.cloud.cleanupInstructionsUrl,
      });
    }
  }
  for (const t of dataset.tools) {
    targets.push({ entity: 'tool', id: t.id, title: t.name, url: t.officialUrl });
  }
  for (const s of dataset.standards) {
    targets.push({ entity: 'standard', id: s.id, title: s.title, url: s.url });
  }
  // Loại URL trùng để không gọi cùng một đích nhiều lần.
  const seen = new Set<string>();
  return targets.filter((t) => {
    const key = `${t.entity}:${t.id}:${t.url}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function classify(httpStatus: number): { status: LinkStatus; note: string } {
  if (httpStatus >= 200 && httpStatus < 300) return { status: 'active', note: 'OK' };
  if (httpStatus >= 300 && httpStatus < 400) {
    return { status: 'redirected', note: 'Chuyển hướng' };
  }
  if (httpStatus === 401) return { status: 'login-required', note: 'Yêu cầu đăng nhập' };
  if (httpStatus === 403) {
    return {
      status: 'blocked',
      note: 'Bị chặn — nhiều khả năng do chống bot, không phải link chết',
    };
  }
  if (httpStatus === 404 || httpStatus === 410) {
    return { status: 'unavailable', note: 'Không tìm thấy tài nguyên' };
  }
  if (httpStatus === 429) return { status: 'rate-limited', note: 'Bị giới hạn tốc độ' };
  if (httpStatus >= 500) return { status: 'unavailable', note: `Lỗi máy chủ ${httpStatus}` };
  return { status: 'unknown', note: `Mã trạng thái ${httpStatus}` };
}

async function request(url: string, method: 'HEAD' | 'GET'): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, {
      method,
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'User-Agent': USER_AGENT,
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9,vi;q=0.8',
      },
    });
  } finally {
    clearTimeout(timer);
  }
}

async function checkOne(target: CheckTarget): Promise<CheckResult> {
  const attempt = async (): Promise<CheckResult> => {
    let response: Response;
    try {
      response = await request(target.url, 'HEAD');
      // Nhiều máy chủ không hỗ trợ HEAD, hoặc trả 403/404 cho request không giống
      // trình duyệt. Luôn xác nhận lại bằng GET trước khi kết luận link chết.
      if ([403, 404, 405, 410, 501].includes(response.status)) {
        response = await request(target.url, 'GET');
      }
    } catch (error) {
      const aborted = error instanceof Error && error.name === 'AbortError';
      if (aborted) {
        return {
          ...target,
          status: 'timeout',
          httpStatus: null,
          finalUrl: null,
          note: 'Hết thời gian chờ',
        };
      }
      // Lỗi ở tầng mạng có thể do chính môi trường chạy script (DNS, egress,
      // proxy) chứ không phải do liên kết hỏng. Không kết luận là link chết.
      return {
        ...target,
        status: 'unknown',
        httpStatus: null,
        finalUrl: null,
        note: `Không kết nối được từ môi trường chạy script: ${(error as Error).message}. Cần kiểm tra lại thủ công.`,
      };
    }

    const { status, note } = classify(response.status);
    const redirected = response.url && response.url !== target.url;
    return {
      ...target,
      status: status === 'active' && redirected ? 'redirected' : status,
      httpStatus: response.status,
      finalUrl: redirected ? response.url : null,
      note: redirected ? `${note} → ${response.url}` : note,
    };
  };

  const first = await attempt();
  if (first.status === 'timeout' || first.status === 'rate-limited') {
    await new Promise((r) => setTimeout(r, RETRY_DELAY_MS));
    return attempt();
  }
  return first;
}

async function runPool(targets: CheckTarget[]): Promise<CheckResult[]> {
  const results: CheckResult[] = [];
  let cursor = 0;
  const workers = Array.from({ length: Math.min(CONCURRENCY, targets.length) }, async () => {
    for (;;) {
      const index = cursor;
      cursor += 1;
      const target = targets[index];
      if (!target) return;
      const result = await checkOne(target);
      results.push(result);
      process.stdout.write(
        `[${results.length}/${targets.length}] ${result.status.padEnd(15)} ${result.url}\n`,
      );
    }
  });
  await Promise.all(workers);
  return results;
}

async function main(): Promise<void> {
  const targets = collectTargets();
  process.stdout.write(`Kiem tra ${targets.length} lien ket...\n\n`);

  const results = await runPool(targets);
  const today = new Date().toISOString().slice(0, 10);

  const byStatus = new Map<LinkStatus, CheckResult[]>();
  for (const result of results) {
    byStatus.set(result.status, [...(byStatus.get(result.status) ?? []), result]);
  }

  const md = `# Báo cáo kiểm tra liên kết

> Sinh tự động bởi \`npm run check:links\` ngày ${today}.
> Ngày kiểm tra liên kết KHÔNG chứng minh nội dung đã được rà soát — xem SOURCE_REGISTRY.md §4.

Tổng số liên kết: ${results.length}

## Tổng hợp theo trạng thái

| Trạng thái | Số lượng | Ý nghĩa |
| --- | --- | --- |
| active | ${byStatus.get('active')?.length ?? 0} | Truy cập được bình thường |
| redirected | ${byStatus.get('redirected')?.length ?? 0} | Có chuyển hướng, URL đích khác URL khai báo |
| login-required | ${byStatus.get('login-required')?.length ?? 0} | Cần đăng nhập |
| blocked | ${byStatus.get('blocked')?.length ?? 0} | Bị chặn tự động, nhiều khả năng do chống bot |
| rate-limited | ${byStatus.get('rate-limited')?.length ?? 0} | Bị giới hạn tốc độ |
| timeout | ${byStatus.get('timeout')?.length ?? 0} | Hết thời gian chờ |
| unavailable | ${byStatus.get('unavailable')?.length ?? 0} | **Cần xử lý** |
| unknown | ${byStatus.get('unknown')?.length ?? 0} | Chưa phân loại được |

## Liên kết cần xử lý

${
  (byStatus.get('unavailable') ?? [])
    .map((r) => `- \`${r.id}\` (${r.entity}) — ${r.title}\n  - ${r.url}\n  - ${r.note}`)
    .join('\n') || '(không có)'
}

## Toàn bộ kết quả

| Thực thể | ID | Trạng thái | HTTP | URL |
| --- | --- | --- | --- | --- |
${results
  .slice()
  .sort((a, b) => a.entity.localeCompare(b.entity) || a.id.localeCompare(b.id))
  .map(
    (r) =>
      `| ${r.entity} | \`${r.id}\` | ${r.status} | ${r.httpStatus ?? '-'} | ${r.url.replace(/\|/g, '%7C')} |`,
  )
  .join('\n')}
`;

  // Ghi trạng thái liên kết trở lại dataset dưới dạng tệp SINH TỰ ĐỘNG, tách
  // khỏi dữ liệu viết tay. Nhờ vậy `linkLastChecked` luôn do script điền và
  // không bao giờ bị nhầm với `lastContentReviewed` do người biên tập điền.
  const resourceStatuses = results
    .filter((r) => r.entity === 'resource')
    .sort((a, b) => a.id.localeCompare(b.id));

  const generated = `/* eslint-disable */
/**
 * TỆP SINH TỰ ĐỘNG — đừng sửa tay.
 * Nguồn: npm run check:links, ngày ${today}.
 *
 * Chỉ chứa kết quả kiểm tra HTTP. Điều này KHÔNG chứng minh nội dung đã được
 * người biên tập rà soát — xem SOURCE_REGISTRY.md §4.
 */
import type { LinkStatus } from '@/schemas/entities';

export const LINK_CHECK_DATE = '${today}';

export const LINK_STATUS_BY_RESOURCE: Record<string, LinkStatus> = {
${resourceStatuses.map((r) => `  '${r.id}': '${r.status}',`).join('\n')}
};
`;
  writeFileSync(
    resolve(projectRoot, 'src', 'data', 'resources', 'link-status.generated.ts'),
    generated,
    'utf8',
  );

  mkdirSync(reportsDir, { recursive: true });
  writeFileSync(resolve(reportsDir, 'link-check.md'), md, 'utf8');
  writeFileSync(
    resolve(reportsDir, 'link-check.json'),
    `${JSON.stringify({ checkedAt: today, results }, null, 2)}\n`,
    'utf8',
  );

  const unavailable = byStatus.get('unavailable')?.length ?? 0;
  process.stdout.write(
    `\nDa ghi reports/link-check.md va reports/link-check.json.\n` +
      `Can xu ly: ${unavailable} lien ket.\n` +
      `Luu y: trang thai "blocked" thuong la chong bot, khong phai link chet — script khong lam fail deploy vi dieu do.\n`,
  );
}

void main();
