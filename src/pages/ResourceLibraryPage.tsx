import { useMemo, useState } from 'react';
import { dataset } from '@/data';
import { orderedDomains } from '@/utils/lookups';
import { containsVi } from '@/utils/vietnamese';
import {
  Card,
  Chip,
  ContentStatusChip,
  EmptyState,
  ExternalLink,
  LinkStatusChip,
  PageHeader,
} from '@/components/ui';

const ALL = 'all';

export function ResourceLibraryPage() {
  const [query, setQuery] = useState('');
  const [domainId, setDomainId] = useState(ALL);
  const [resourceType, setResourceType] = useState(ALL);
  const [difficulty, setDifficulty] = useState(ALL);
  const [language, setLanguage] = useState(ALL);
  const [accessType, setAccessType] = useState(ALL);
  const [sourceClass, setSourceClass] = useState(ALL);
  const [handsOnOnly, setHandsOnOnly] = useState(false);
  const [contentStatus, setContentStatus] = useState(ALL);
  const [linkStatus, setLinkStatus] = useState(ALL);
  const [reviewedOnly, setReviewedOnly] = useState(false);

  const filtered = useMemo(
    () =>
      dataset.resources.filter((r) => {
        if (domainId !== ALL && !r.domainIds.includes(domainId)) return false;
        if (resourceType !== ALL && r.resourceType !== resourceType) return false;
        if (difficulty !== ALL && r.difficulty !== difficulty) return false;
        if (language !== ALL && r.language !== language) return false;
        if (accessType !== ALL && r.accessType !== accessType) return false;
        if (sourceClass !== ALL && r.sourceClass !== sourceClass) return false;
        if (handsOnOnly && !r.handsOn) return false;
        if (contentStatus !== ALL && r.contentStatus !== contentStatus) return false;
        if (linkStatus !== ALL && r.linkStatus !== linkStatus) return false;
        if (reviewedOnly && !r.lastContentReviewed) return false;
        if (!query.trim()) return true;
        return (
          containsVi(r.title, query) ||
          containsVi(r.descriptionVi, query) ||
          containsVi(r.provider, query)
        );
      }),
    [
      accessType,
      contentStatus,
      difficulty,
      domainId,
      handsOnOnly,
      language,
      linkStatus,
      query,
      resourceType,
      reviewedOnly,
      sourceClass,
    ],
  );

  return (
    <>
      <PageHeader
        title="Thư viện nguồn"
        description="Chỉ lưu metadata và mô tả tiếng Việt do dự án tự biên soạn. Không sao chép nội dung nguồn."
      />

      <Card className="mb-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-3">
            <label className="ba-label" htmlFor="res-q">
              Tìm kiếm (không dấu vẫn khớp)
            </label>
            <input
              id="res-q"
              className="ba-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="vi du: kiem thu di dong, chuoi cung ung, hop dong thong minh"
            />
          </div>

          <div>
            <label className="ba-label" htmlFor="res-domain">
              Lĩnh vực
            </label>
            <select
              id="res-domain"
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
            <label className="ba-label" htmlFor="res-type">
              Loại nguồn
            </label>
            <select
              id="res-type"
              className="ba-input"
              value={resourceType}
              onChange={(e) => setResourceType(e.target.value)}
            >
              <option value={ALL}>Tất cả</option>
              <option value="standard">Chuẩn</option>
              <option value="specification">Đặc tả</option>
              <option value="testing-guide">Hướng dẫn kiểm thử</option>
              <option value="documentation">Tài liệu</option>
              <option value="course">Khoá học</option>
              <option value="lab-platform">Nền tảng lab</option>
              <option value="repository">Repository</option>
              <option value="taxonomy">Taxonomy</option>
              <option value="book">Sách</option>
              <option value="article">Bài viết</option>
              <option value="video">Video</option>
            </select>
          </div>

          <div>
            <label className="ba-label" htmlFor="res-difficulty">
              Mức độ
            </label>
            <select
              id="res-difficulty"
              className="ba-input"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value={ALL}>Tất cả</option>
              <option value="foundation">Nền tảng</option>
              <option value="beginner">Nhập môn</option>
              <option value="intermediate">Trung cấp</option>
              <option value="advanced">Nâng cao</option>
              <option value="specialist">Chuyên sâu</option>
              <option value="research">Nghiên cứu</option>
              <option value="mixed">Nhiều mức</option>
            </select>
          </div>

          <div>
            <label className="ba-label" htmlFor="res-language">
              Ngôn ngữ
            </label>
            <select
              id="res-language"
              className="ba-input"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value={ALL}>Tất cả</option>
              <option value="vi">Tiếng Việt</option>
              <option value="en">Tiếng Anh</option>
              <option value="mixed">Nhiều thứ tiếng</option>
              <option value="unknown">Chưa rõ</option>
            </select>
          </div>

          <div>
            <label className="ba-label" htmlFor="res-access">
              Hình thức truy cập
            </label>
            <select
              id="res-access"
              className="ba-input"
              value={accessType}
              onChange={(e) => setAccessType(e.target.value)}
            >
              <option value={ALL}>Tất cả</option>
              <option value="free">Miễn phí</option>
              <option value="paid">Trả phí</option>
              <option value="mixed">Kết hợp</option>
              <option value="unknown">Chưa rõ</option>
            </select>
          </div>

          <div>
            <label className="ba-label" htmlFor="res-class">
              Lớp nguồn
            </label>
            <select
              id="res-class"
              className="ba-input"
              value={sourceClass}
              onChange={(e) => setSourceClass(e.target.value)}
            >
              <option value={ALL}>Tất cả</option>
              <option value="official-standard">Chuẩn chính thức</option>
              <option value="official-vendor">Tài liệu nhà cung cấp</option>
              <option value="project-primary">Dự án gốc</option>
              <option value="academic">Học thuật</option>
              <option value="community">Cộng đồng</option>
            </select>
          </div>

          <div>
            <label className="ba-label" htmlFor="res-content-status">
              Trạng thái nội dung
            </label>
            <select
              id="res-content-status"
              className="ba-input"
              value={contentStatus}
              onChange={(e) => setContentStatus(e.target.value)}
            >
              <option value={ALL}>Tất cả</option>
              <option value="verified">Đã xác minh</option>
              <option value="review-needed">Cần rà soát</option>
              <option value="draft">Bản nháp</option>
              <option value="outdated">Đã lỗi thời</option>
            </select>
          </div>

          <div>
            <label className="ba-label" htmlFor="res-link-status">
              Trạng thái liên kết
            </label>
            <select
              id="res-link-status"
              className="ba-input"
              value={linkStatus}
              onChange={(e) => setLinkStatus(e.target.value)}
            >
              <option value={ALL}>Tất cả</option>
              <option value="active">Hoạt động</option>
              <option value="redirected">Đã chuyển hướng</option>
              <option value="login-required">Cần đăng nhập</option>
              <option value="blocked">Bị chặn tự động</option>
              <option value="rate-limited">Bị giới hạn tốc độ</option>
              <option value="unavailable">Không truy cập được</option>
              <option value="timeout">Hết thời gian chờ</option>
              <option value="unknown">Chưa kiểm tra</option>
            </select>
          </div>

          <div className="flex items-end gap-4">
            <label className="flex items-center gap-2 text-sm text-ink-muted">
              <input
                type="checkbox"
                checked={handsOnOnly}
                onChange={(e) => setHandsOnOnly(e.target.checked)}
              />
              Chỉ nguồn thực hành
            </label>
            <label className="flex items-center gap-2 text-sm text-ink-muted">
              <input
                type="checkbox"
                checked={reviewedOnly}
                onChange={(e) => setReviewedOnly(e.target.checked)}
              />
              Đã rà soát nội dung
            </label>
          </div>
        </div>
      </Card>

      <p className="mb-3 text-sm text-ink-faint">
        {filtered.length} trên {dataset.resources.length} nguồn khớp bộ lọc.
      </p>

      {filtered.length === 0 ? (
        <EmptyState message="Không có nguồn nào khớp bộ lọc hiện tại." />
      ) : (
        <ul className="space-y-3">
          {filtered.map((resource) => (
            <li key={resource.id}>
              <Card>
                <div className="flex flex-wrap items-center gap-2">
                  <ExternalLink href={resource.url} showHost>
                    {resource.title}
                  </ExternalLink>
                  <Chip>{resource.provider}</Chip>
                  <ContentStatusChip value={resource.contentStatus} />
                  <LinkStatusChip value={resource.linkStatus} />
                  {resource.handsOn ? <Chip tone="ok">Thực hành</Chip> : null}
                  {resource.accountRequired === true ? <Chip>Cần tài khoản</Chip> : null}
                </div>
                <p className="mt-2 text-sm text-ink-muted">{resource.descriptionVi}</p>
                <p className="mt-2 text-xs text-ink-faint">
                  Lý do chọn nguồn: {resource.sourceOriginNoteVi}
                </p>
                <p className="mt-1 text-xs text-ink-faint">
                  Metadata cập nhật: {resource.metadataLastUpdated ?? 'chưa có'} · Rà soát nội dung:{' '}
                  {resource.lastContentReviewed ?? 'chưa rà soát'} · Kiểm tra liên kết:{' '}
                  {resource.linkLastChecked ?? 'chưa kiểm tra'}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
