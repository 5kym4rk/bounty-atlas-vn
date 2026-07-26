# IMPLEMENTATION_PLAN — BountyAtlas VN

## 1. Stack và lý do chọn

| Thành phần  | Lựa chọn                                               | Lý do                                                                       |
| ----------- | ------------------------------------------------------ | --------------------------------------------------------------------------- |
| UI          | React 18 + TypeScript strict                           | Hệ sinh thái ổn định, type an toàn cho dataset lớn                          |
| Build       | Vite 5                                                 | Build nhanh, output tĩnh phù hợp GitHub Pages                               |
| CSS         | Tailwind CSS 3 + CSS variable                          | Theme sáng/tối bằng biến, không cần runtime CSS-in-JS                       |
| Router      | React Router 6 **HashRouter**                          | GitHub Pages không rewrite path; hash tránh 404 khi refresh                 |
| State       | **Zustand**                                            | Xem §2                                                                      |
| Validation  | Zod 3                                                  | Một schema dùng cho dữ liệu tĩnh lẫn import JSON của người dùng             |
| Search      | Fuse.js 7                                              | Fuzzy search phía client, kết hợp bộ chuẩn hoá tiếng Việt không dấu tự viết |
| Test        | Vitest + Testing Library + jsdom                       | Cùng transform pipeline với Vite                                            |
| Lint/format | ESLint 8 + Prettier 3                                  | Có rule tự viết chặn `dangerouslySetInnerHTML`                              |
| Persist     | IndexedDB (wrapper tự viết) + LocalStorage cho setting | Dữ liệu học có thể lớn; LocalStorage chỉ giữ theme/ngôn ngữ                 |
| CI/CD       | GitHub Actions → GitHub Pages                          | Không backend                                                               |

Không có backend trong MVP.

## 2. Zustand thay vì Context + reducer — giải thích

Ứng dụng có nhiều slice trạng thái độc lập (progress, notes, checklist run,
report draft, filter của Resource Library, cài đặt UI) và nhiều component lá đọc
một phần rất nhỏ của state.

- Với **Context + reducer**, mọi consumer re-render khi bất kỳ phần nào của state đổi,
  trừ khi tách thành hàng chục context lồng nhau. Trang Atlas và Resource Library
  render hàng trăm node nên chi phí này là thật.
- **Zustand** cho phép selector chi tiết (`useStore(s => s.filters.domainId)`),
  chỉ re-render component thực sự phụ thuộc, không cần provider lồng nhau,
  và middleware `persist` ghép thẳng vào lớp IndexedDB tự viết.
- Bù lại Zustand là dependency ngoài (~1 kB gzip) và store là singleton — chấp nhận được
  cho một SPA không SSR.

Kết luận: chọn Zustand; store chia theo slice tại `src/app/store/`.

## 3. Cấu trúc thư mục

```text
bounty-atlas-vn/
  .github/workflows/        ci.yml, deploy.yml, codeql.yml
  public/icons/
  src/
    app/                    App shell, router, store slices, providers
    config/                 product.ts (tên sản phẩm), safety.ts, features.ts
    data/                   dữ liệu kiến thức, chia theo entity và domain
    components/             atlas, learning, labs, reports, progress, safety, search, ui
    pages/                  một file cho mỗi route
    hooks/
    storage/                IndexedDB wrapper, export/import
    schemas/                types + Zod
    validators/             logic kiểm tra dùng chung cho script và test
    migrations/
    utils/                  vietnamese.ts, url.ts, markdown.ts, graph.ts
    styles/
  scripts/                  validate-data, check-links, build-index, coverage-report
  reports/                  đầu ra script (coverage.md được commit)
  tests/
```

## 4. Route

| Path                 | Trang                               |
| -------------------- | ----------------------------------- |
| `/`                  | Dashboard "Hôm nay học gì?"         |
| `/onboarding`        | Onboarding + cam kết an toàn        |
| `/diagnostic`        | Diagnostic assessment               |
| `/atlas`             | Knowledge Atlas (graph + list view) |
| `/domains`           | Danh sách domain                    |
| `/domains/:domainId` | Trang domain                        |
| `/modules/:moduleId` | Trang module (12 tab)               |
| `/paths`             | Lộ trình học gợi ý                  |
| `/resources`         | Resource Library                    |
| `/labs`              | Lab Hub                             |
| `/tools`             | Tool Library                        |
| `/checklists`        | Checklist Workspace                 |
| `/report-builder`    | Report Builder                      |
| `/severity`          | Severity Lab                        |
| `/triage`            | Triage Simulator                    |
| `/gaps`              | Gap Analysis                        |
| `/search`            | Tìm kiếm                            |
| `/settings`          | Cài đặt, export/import, xoá dữ liệu |
| `/about`             | Giới thiệu, attribution, giới hạn   |

## 5. Thứ tự thực hiện

1. ✅ Khởi tạo repo mới bằng `git init` (không có lịch sử của dự án khác).
2. ✅ Sáu tài liệu thiết kế.
3. Taxonomy đầy đủ trong dữ liệu.
4. Source registry.
5. Xác minh nguồn seed (thủ công mẫu + `check:links` tự động).
6. Schema (types + Zod).
7. Validator.
8. Test.
9. Storage (IndexedDB + migration).
10. UI shell (router, theme, layout, a11y).
11. Atlas.
12. Nội dung core.
13. Lab Hub.
14. Checklist.
15. Report Builder.
16. Triage Simulator.
17. Gap Analysis.
18. QA toàn bộ.
19. Deploy.
20. Báo cáo bàn giao (`HANDOVER.md`).

Sau mỗi giai đoạn chạy:

```bash
npm run lint && npm run test && npm run validate:data && npm run build
```

## 6. Quy tắc khi gặp lỗi

- Sửa lỗi gốc, không tắt test.
- Không dùng `any` để né type (`@typescript-eslint/no-explicit-any: error`).
- Không bỏ qua validator.
- Không hard-code thống kê.
- Không tạo dữ liệu rỗng cho đủ số lượng.
- Không đánh dấu `verified` khi chưa thực sự mở nguồn.

## 7. Accessibility và responsive

- Breakpoint nhỏ nhất hỗ trợ: **360 px**.
- Atlas có **list view** thay thế, tự chọn trên màn hình hẹp hoặc khi
  `prefers-reduced-motion`.
- Mọi control tương tác là phần tử semantic, có `:focus-visible` rõ ràng.
- Skip link tới nội dung chính; landmark `header/nav/main`.
- Màu đạt tương phản tối thiểu 4.5:1 ở cả hai theme.

## 8. Deploy

`deploy.yml` build với `BASE_PATH=/bounty-atlas-vn/`, upload `dist/` và publish
bằng `actions/deploy-pages`. Có `404.html` sao chép từ `index.html` để hash route
không vỡ khi người dùng vào sâu.
