import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { PRODUCT } from '@/config/product';
import { useAppStore } from '@/app/store';

interface NavItem {
  to: string;
  label: string;
}

const NAV_GROUPS: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'Học',
    items: [
      { to: '/', label: 'Hôm nay học gì' },
      { to: '/atlas', label: 'Bản đồ kiến thức' },
      { to: '/domains', label: 'Lĩnh vực' },
      { to: '/paths', label: 'Lộ trình' },
      { to: '/diagnostic', label: 'Bài kiểm tra đầu vào' },
    ],
  },
  {
    heading: 'Tra cứu',
    items: [
      { to: '/resources', label: 'Thư viện nguồn' },
      { to: '/labs', label: 'Lab hợp pháp' },
      { to: '/tools', label: 'Công cụ' },
      { to: '/search', label: 'Tìm kiếm' },
    ],
  },
  {
    heading: 'Thực hành',
    items: [
      { to: '/checklists', label: 'Checklist' },
      { to: '/report-builder', label: 'Soạn báo cáo' },
      { to: '/severity', label: 'Phòng thí nghiệm severity' },
      { to: '/triage', label: 'Mô phỏng triage' },
    ],
  },
  {
    heading: 'Hệ thống',
    items: [
      { to: '/gaps', label: 'Khoảng trống kiến thức' },
      { to: '/settings', label: 'Cài đặt' },
      { to: '/about', label: 'Giới thiệu' },
    ],
  },
];

function ThemeToggle() {
  const theme = useAppStore((s) => s.settings.theme);
  const toggleTheme = useAppStore((s) => s.toggleTheme);
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="ba-btn text-xs"
      aria-label={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
    >
      {theme === 'dark' ? 'Giao diện sáng' : 'Giao diện tối'}
    </button>
  );
}

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const storageError = useAppStore((s) => s.storageError);

  return (
    <div className="min-h-screen bg-surface">
      <a
        href="#noi-dung-chinh"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-surface-raised focus:px-3 focus:py-2"
      >
        Bỏ qua điều hướng, tới nội dung chính
      </a>

      <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
          <NavLink to="/" className="min-w-0 truncate text-base font-semibold">
            {PRODUCT.name}
          </NavLink>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="ba-btn text-xs lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="dieu-huong-chinh"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? 'Đóng menu' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:flex-row">
        <nav
          id="dieu-huong-chinh"
          aria-label="Điều hướng chính"
          className={`${menuOpen ? 'block' : 'hidden'} shrink-0 lg:block lg:w-56`}
        >
          <div className="space-y-5">
            {NAV_GROUPS.map((group) => (
              <div key={group.heading}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-faint">
                  {group.heading}
                </p>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        end={item.to === '/'}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-md px-2 py-1.5 text-sm transition-colors ${
                            isActive
                              ? 'bg-brand-soft font-medium text-brand'
                              : 'text-ink-muted hover:bg-surface-raised hover:text-ink'
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        <main id="noi-dung-chinh" className="min-w-0 flex-1" key={location.pathname}>
          {storageError ? (
            <div className="mb-4 rounded-md border border-warn/60 bg-warn/5 p-3 text-sm text-ink-muted">
              {storageError}
            </div>
          ) : null}
          <Outlet />
        </main>
      </div>

      <footer className="border-t border-line px-4 py-6 text-center text-xs text-ink-faint">
        <p>
          {PRODUCT.name} v{PRODUCT.version} — rà soát nội dung ngày {PRODUCT.contentReviewDate}.
        </p>
        <p className="mt-1">
          Bản đồ kiến thức mở, cần tiếp tục cập nhật khi tiêu chuẩn và bề mặt tấn công thay đổi.
        </p>
      </footer>
    </div>
  );
}
