import { useMemo } from 'react';
import {
  COVERAGE_DISCLAIMER_VI,
  NO_INCOME_PROMISE_NOTE_VI,
  NO_SPONSORSHIP_NOTE_VI,
  PRODUCT,
} from '@/config/product';
import { NOT_A_TOOL_FOR_VI } from '@/config/safety';
import { dataset } from '@/data';
import { buildCoverageReport } from '@/validators/coverage';
import { SafetyStatement } from '@/components/safety/SafetyGate';
import { Callout, Card, PageHeader, Section, StatTile } from '@/components/ui';

export function AboutPage() {
  const report = useMemo(() => buildCoverageReport(dataset), []);

  return (
    <>
      <PageHeader title={`Giới thiệu ${PRODUCT.name}`} description={PRODUCT.taglineVi} />

      <div className="mb-6 space-y-3">
        <Callout title="Tuyên bố phạm vi">{COVERAGE_DISCLAIMER_VI}</Callout>
        <SafetyStatement />
      </div>

      <Section
        title="Số lượng nội dung hiện có"
        description="Mọi con số được tính trực tiếp từ dữ liệu tại thời điểm bạn mở trang, không hard-code."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatTile label="Lĩnh vực" value={report.totals.domain ?? 0} />
          <StatTile label="Track" value={report.totals.track ?? 0} />
          <StatTile label="Module" value={report.totals.module ?? 0} />
          <StatTile label="Khái niệm" value={report.totals.concept ?? 0} />
          <StatTile label="Điểm yếu" value={report.totals.weakness ?? 0} />
          <StatTile label="Nguồn" value={report.totals.resource ?? 0} />
          <StatTile label="Lab" value={report.totals.lab ?? 0} />
          <StatTile label="Công cụ" value={report.totals.tool ?? 0} />
          <StatTile label="Checklist" value={report.totals.checklist ?? 0} />
          <StatTile label="Câu hỏi quiz" value={report.totals.quizQuestion ?? 0} />
          <StatTile label="Bài tập báo cáo" value={report.totals.reportExercise ?? 0} />
          <StatTile label="Tình huống triage" value={report.totals.triageScenario ?? 0} />
        </div>
      </Section>

      <Section title="Phần mềm này không phải công cụ để">
        <Card>
          <ul className="list-disc space-y-1 pl-5 text-sm text-ink-muted">
            {NOT_A_TOOL_FOR_VI.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-ink-muted">
            Ứng dụng không có ô nhập mục tiêu và không thực hiện bất kỳ request nào tới hạ tầng của
            bên thứ ba trong lúc chạy. Liên kết ngoài chỉ mở khi bạn chủ động bấm.
          </p>
        </Card>
      </Section>

      <Section title="Nguồn và ghi công">
        <Card>
          <p className="text-sm text-ink-muted">{NO_SPONSORSHIP_NOTE_VI}</p>
          <p className="mt-2 text-sm text-ink-muted">
            Dự án chỉ lưu metadata và mô tả tiếng Việt do chính dự án biên soạn. Không sao chép bài
            viết, sách, PDF, transcript video, lời giải lab hay nội dung khoá học trả phí. Không sử
            dụng tài liệu lậu.
          </p>
          <p className="mt-2 text-sm text-ink-muted">
            Trong tổng số {report.totals.resource ?? 0} nguồn, có{' '}
            {report.totals.verifiedResource ?? 0} nguồn đã được người biên tập thực sự mở và đối
            chiếu nội dung. Số còn lại mang trạng thái bản nháp hoặc cần rà soát — đây là tuyên bố
            trung thực, không phải sơ suất.
          </p>
        </Card>
      </Section>

      <Section title="Ba loại ngày">
        <Card>
          <ul className="space-y-2 text-sm text-ink-muted">
            <li>
              <span className="font-medium text-ink">Ngày cập nhật metadata</span> — lần cuối sửa
              tiêu đề, phân loại hoặc mô tả tiếng Việt.
            </li>
            <li>
              <span className="font-medium text-ink">Ngày rà soát nội dung</span> — lần cuối một
              người mở nguồn và đối chiếu nội dung.
            </li>
            <li>
              <span className="font-medium text-ink">Ngày kiểm tra liên kết</span> — lần cuối script
              kiểm tra HTTP tới URL. Điều này không chứng minh nội dung đã được rà soát.
            </li>
          </ul>
        </Card>
      </Section>

      <Section title="Cam kết">
        <Card>
          <ul className="list-disc space-y-1 pl-5 text-sm text-ink-muted">
            <li>{NO_INCOME_PROMISE_NOTE_VI}</li>
            <li>Không thu thập telemetry và không có backend trong phiên bản này.</li>
            <li>
              Dữ liệu học của bạn nằm trên máy bạn và không rời khỏi đó nếu bạn không xuất ra.
            </li>
            <li>Không đánh dấu nội dung là đã xác minh khi chưa thực sự mở nguồn.</li>
          </ul>
        </Card>
      </Section>

      <p className="text-xs text-ink-faint">
        {PRODUCT.name} phiên bản {PRODUCT.version}, rà soát nội dung ngày{' '}
        {PRODUCT.contentReviewDate}.
      </p>
    </>
  );
}
