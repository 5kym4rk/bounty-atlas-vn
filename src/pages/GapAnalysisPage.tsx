import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { dataset } from '@/data';
import { buildCoverageReport } from '@/validators/coverage';
import { validateDataset } from '@/validators/dataset';
import { Callout, Card, Chip, EmptyState, PageHeader, Section, StatTile } from '@/components/ui';

export function GapAnalysisPage() {
  const report = useMemo(() => buildCoverageReport(dataset), []);
  const validation = useMemo(() => validateDataset(dataset), []);
  const [gapFilter, setGapFilter] = useState('all');

  const gapCodes = useMemo(
    () => [...new Set(report.gaps.map((g) => g.code))].sort(),
    [report.gaps],
  );

  const filteredGaps = useMemo(
    () => report.gaps.filter((g) => gapFilter === 'all' || g.code === gapFilter),
    [gapFilter, report.gaps],
  );

  return (
    <>
      <PageHeader
        title="Khoảng trống kiến thức"
        description="Mọi con số ở đây được tính trực tiếp từ dữ liệu, không hard-code. Bản đồ này là hệ thống mở nên khoảng trống là điều bình thường và cần được nhìn thấy."
      />

      <div className="mb-6">
        <Callout title="Vì sao trang này tồn tại">
          Bề mặt tấn công thay đổi liên tục nên không bản đồ nào đầy đủ mãi mãi. Thừa nhận khoảng
          trống trung thực hơn là tuyên bố bao phủ tuyệt đối.
        </Callout>
      </div>

      <Section title="Tổng quan">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatTile label="Lỗi dữ liệu" value={validation.errorCount} hint="phải bằng 0" />
          <StatTile label="Cảnh báo dữ liệu" value={validation.warningCount} />
          <StatTile
            label="Module có lab"
            value={`${report.ratios.moduleWithLabPercent}%`}
            hint={`${report.totals.module} module`}
          />
          <StatTile
            label="Module có bài báo cáo"
            value={`${report.ratios.moduleWithReportExercisePercent}%`}
          />
          <StatTile label="Module có quiz" value={`${report.ratios.moduleWithQuizPercent}%`} />
          <StatTile
            label="Module có khắc phục"
            value={`${report.ratios.moduleWithRemediationPercent}%`}
          />
          <StatTile
            label="Nguồn chính thức"
            value={`${report.ratios.officialResourcePercent}%`}
            hint={`${report.totals.resource} nguồn`}
          />
          <StatTile
            label="Nguồn đã xác minh nội dung"
            value={`${report.ratios.verifiedResourcePercent}%`}
          />
        </div>
      </Section>

      <Section
        title="Ma trận theo lĩnh vực"
        description="Lĩnh vực × module × lab × checklist × bài báo cáo × nguồn chuẩn."
      >
        <div className="ba-scroll-x">
          <table className="min-w-max border-collapse text-sm">
            <caption className="sr-only">
              Bảng độ bao phủ nội dung theo từng lĩnh vực kiến thức
            </caption>
            <thead>
              <tr className="border-b border-line text-left">
                <th scope="col" className="p-2">
                  Lĩnh vực
                </th>
                <th scope="col" className="p-2">
                  Track
                </th>
                <th scope="col" className="p-2">
                  Module
                </th>
                <th scope="col" className="p-2">
                  Có lab
                </th>
                <th scope="col" className="p-2">
                  Có bài báo cáo
                </th>
                <th scope="col" className="p-2">
                  Có quiz
                </th>
                <th scope="col" className="p-2">
                  Lab
                </th>
                <th scope="col" className="p-2">
                  Checklist
                </th>
                <th scope="col" className="p-2">
                  Điểm yếu
                </th>
                <th scope="col" className="p-2">
                  Nguồn chuẩn
                </th>
              </tr>
            </thead>
            <tbody>
              {report.perDomain.map((row) => (
                <tr key={row.domainId} className="border-b border-line">
                  <th scope="row" className="p-2 text-left font-normal">
                    <Link to={`/domains/${row.domainId}`} className="ba-link">
                      {row.code}. {row.titleVi}
                    </Link>
                  </th>
                  <td className="p-2 tabular-nums">{row.trackCount}</td>
                  <td className="p-2 tabular-nums">{row.moduleCount}</td>
                  <td className="p-2 tabular-nums">
                    {row.modulesWithLab}/{row.moduleCount}
                  </td>
                  <td className="p-2 tabular-nums">
                    {row.modulesWithReportExercise}/{row.moduleCount}
                  </td>
                  <td className="p-2 tabular-nums">
                    {row.modulesWithQuiz}/{row.moduleCount}
                  </td>
                  <td className="p-2 tabular-nums">{row.labCount}</td>
                  <td className="p-2 tabular-nums">{row.checklistCount}</td>
                  <td className="p-2 tabular-nums">{row.weaknessCount}</td>
                  <td className="p-2 tabular-nums">
                    {row.officialResourceCount === 0 ? (
                      <span className="text-warn">0</span>
                    ) : (
                      row.officialResourceCount
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title={`Cảnh báo khoảng trống (${report.gaps.length})`}>
        <div className="mb-3 max-w-sm">
          <label className="ba-label" htmlFor="gap-filter">
            Lọc theo loại
          </label>
          <select
            id="gap-filter"
            className="ba-input"
            value={gapFilter}
            onChange={(e) => setGapFilter(e.target.value)}
          >
            <option value="all">Tất cả</option>
            {gapCodes.map((code) => (
              <option key={code} value={code}>
                {code} ({report.gaps.filter((g) => g.code === code).length})
              </option>
            ))}
          </select>
        </div>
        {filteredGaps.length === 0 ? (
          <EmptyState message="Không có cảnh báo nào khớp bộ lọc." />
        ) : (
          <ul className="space-y-1.5">
            {filteredGaps.slice(0, 100).map((gap) => (
              <li key={`${gap.code}-${gap.id}`} className="ba-card text-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <Chip tone={gap.severity === 'error' ? 'danger' : 'warn'}>{gap.code}</Chip>
                  <span className="text-ink-muted">{gap.messageVi}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
        {filteredGaps.length > 100 ? (
          <p className="mt-2 text-xs text-ink-faint">
            Hiển thị 100 mục đầu tiên trên tổng số {filteredGaps.length}. Bản đầy đủ nằm trong
            reports/coverage.md.
          </p>
        ) : null}
      </Section>

      <Section title="Trạng thái nguồn">
        <div className="grid gap-3 sm:grid-cols-3">
          <Card>
            <p className="font-medium">Chưa rà soát nội dung</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">
              {report.resourcesNeverReviewed.length}
            </p>
            <p className="mt-1 text-xs text-ink-faint">
              Nguồn chưa được người biên tập mở và đối chiếu. Chúng không mang nhãn đã xác minh.
            </p>
          </Card>
          <Card>
            <p className="font-medium">Quá hạn rà soát</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">
              {report.resourcesStale.length}
            </p>
            <p className="mt-1 text-xs text-ink-faint">
              Đã rà soát nhưng quá lâu so với ngưỡng của dự án.
            </p>
          </Card>
          <Card>
            <p className="font-medium">Chưa kiểm tra liên kết</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">
              {report.resourcesLinkUnchecked.length}
            </p>
            <p className="mt-1 text-xs text-ink-faint">
              Chạy npm run check:links để cập nhật trạng thái liên kết.
            </p>
          </Card>
        </div>
      </Section>

      <Section title={`Nội dung còn ở trạng thái bản nháp (${report.draftContent.length})`}>
        <p className="mb-3 text-sm text-ink-muted">
          Nội dung bản nháp đã được viết nhưng chưa đối chiếu với nguồn. Đây là tuyên bố trung thực,
          không phải lỗi.
        </p>
        <ul className="ba-scroll-x flex max-h-64 flex-col gap-1 overflow-y-auto text-sm">
          {report.draftContent.slice(0, 200).map((item) => (
            <li key={`${item.entity}-${item.id}`} className="text-ink-muted">
              <span className="text-ink-faint">[{item.entity}]</span> {item.titleVi}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
