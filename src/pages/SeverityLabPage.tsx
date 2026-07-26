import { useState } from 'react';
import { Callout, Card, PageHeader, Section } from '@/components/ui';

interface SeverityCase {
  id: string;
  titleVi: string;
  scenarioVi: string;
  options: { id: string; labelVi: string }[];
  rubricVi: string;
  bestOptionId: string;
  distinctionVi: string;
}

const CASES: SeverityCase[] = [
  {
    id: 'sev-idor-readonly',
    titleVi: 'IDOR chỉ đọc trên dữ liệu hồ sơ',
    scenarioVi:
      'Người dùng đã đăng nhập có thể đọc hồ sơ của người dùng khác, gồm tên và địa chỉ email. Không sửa được, không xoá được. Định danh là số tuần tự.',
    options: [
      { id: 'low', labelVi: 'Thấp' },
      { id: 'medium', labelVi: 'Trung bình' },
      { id: 'high', labelVi: 'Cao' },
      { id: 'critical', labelVi: 'Nghiêm trọng' },
    ],
    bestOptionId: 'medium',
    rubricVi:
      'Tác động là lộ dữ liệu cá nhân ở quy mô có thể lớn do định danh đoán được, nhưng không có thay đổi dữ liệu và cần đăng nhập. Phần lớn chương trình xếp mức trung bình, có thể lên cao nếu dữ liệu nhạy cảm hơn.',
    distinctionVi:
      'Mức nghiêm trọng kỹ thuật khác tác động kinh doanh: nếu email này thuộc nhóm người dùng cần bảo vệ danh tính, tác động kinh doanh có thể cao hơn nhiều so với điểm CVSS.',
  },
  {
    id: 'sev-self-xss',
    titleVi: 'XSS chỉ tự tác động lên chính mình',
    scenarioVi:
      'Người dùng có thể chèn mã vào một trường mà chỉ chính họ nhìn thấy, không có cách nào khiến người khác xem nội dung đó.',
    options: [
      { id: 'informative', labelVi: 'Không có tác động' },
      { id: 'low', labelVi: 'Thấp' },
      { id: 'medium', labelVi: 'Trung bình' },
      { id: 'high', labelVi: 'Cao' },
    ],
    bestOptionId: 'informative',
    rubricVi:
      'Không có ranh giới tin cậy nào bị vượt qua: người dùng chạy mã trong trình duyệt của chính họ. Phần lớn chương trình đóng dạng này là informative.',
    distinctionVi:
      'Nó chỉ trở thành vấn đề khi kết hợp với một lỗi khác cho phép ép người dùng khác đưa nội dung vào trường đó.',
  },
  {
    id: 'sev-tenant-leak',
    titleVi: 'Rò rỉ chéo người thuê ở chức năng xuất dữ liệu',
    scenarioVi:
      'Chức năng xuất báo cáo trả về bản ghi của tổ chức khác. Cần tài khoản hợp lệ ở một tổ chức bất kỳ.',
    options: [
      { id: 'medium', labelVi: 'Trung bình' },
      { id: 'high', labelVi: 'Cao' },
      { id: 'critical', labelVi: 'Nghiêm trọng' },
      { id: 'informative', labelVi: 'Không có tác động' },
    ],
    bestOptionId: 'critical',
    rubricVi:
      'Vi phạm ranh giới cô lập giữa các khách hàng của nhà cung cấp. Bất kỳ ai đăng ký được tài khoản đều truy cập được dữ liệu của tổ chức khác.',
    distinctionVi:
      'Đây là ví dụ rõ nhất về việc tác động kinh doanh vượt xa mức kỹ thuật: nó ảnh hưởng tới cam kết hợp đồng và nghĩa vụ pháp lý của nhà cung cấp.',
  },
  {
    id: 'sev-version-banner',
    titleVi: 'Banner phiên bản cũ trên một dịch vụ',
    scenarioVi:
      'Trình quét báo cáo máy chủ chạy một phiên bản có lỗ hổng đã biết. Người báo cáo chưa xác minh hệ thống có thực sự bị ảnh hưởng hay không.',
    options: [
      { id: 'informative', labelVi: 'Không đủ để chấm điểm' },
      { id: 'low', labelVi: 'Thấp' },
      { id: 'high', labelVi: 'Cao theo CVSS của lỗ hổng gốc' },
      { id: 'critical', labelVi: 'Nghiêm trọng' },
    ],
    bestOptionId: 'informative',
    rubricVi:
      'Chưa chứng minh được hệ thống bị ảnh hưởng. Bản vá backport thường không đổi số phiên bản hiển thị, nên banner không phải bằng chứng.',
    distinctionVi:
      'Gán CVSS của lỗ hổng gốc cho một banner chưa xác minh là dạng thổi phồng phổ biến nhất và làm giảm uy tín nhanh nhất.',
  },
  {
    id: 'sev-ssrf-internal',
    titleVi: 'SSRF chạm được tới dịch vụ nội bộ',
    scenarioVi:
      'Máy chủ phát sinh request tới địa chỉ do người dùng cung cấp và có thể chạm tới dịch vụ nội bộ. Người báo cáo dừng ở mức chứng minh request tới máy chủ của chính họ.',
    options: [
      { id: 'low', labelVi: 'Thấp' },
      { id: 'medium', labelVi: 'Trung bình' },
      { id: 'high', labelVi: 'Cao' },
      { id: 'critical', labelVi: 'Nghiêm trọng' },
    ],
    bestOptionId: 'high',
    rubricVi:
      'Đã chứng minh được khả năng phát sinh request từ vị trí mạng của máy chủ, và có dấu hiệu chạm tới vùng nội bộ. Mức cao là hợp lý; mức nghiêm trọng cần bằng chứng về dữ liệu hoặc quyền cụ thể lấy được.',
    distinctionVi:
      'Chấm mức nghiêm trọng khi mới chỉ chứng minh khả năng phát sinh request là chấm theo giả định. Nêu rõ ranh giới bạn đã tự đặt và để chương trình quyết định phần còn lại.',
  },
  {
    id: 'sev-rate-limit',
    titleVi: 'Thiếu giới hạn tốc độ ở endpoint gửi email xác minh',
    scenarioVi:
      'Endpoint gửi lại email xác minh không có giới hạn tốc độ. Người báo cáo quan sát thấy điều này nhưng không gửi lượng lớn request.',
    options: [
      { id: 'informative', labelVi: 'Không có tác động rõ' },
      { id: 'low', labelVi: 'Thấp' },
      { id: 'medium', labelVi: 'Trung bình' },
      { id: 'high', labelVi: 'Cao' },
    ],
    bestOptionId: 'low',
    rubricVi:
      'Có rủi ro thật về chi phí và về việc làm phiền người dùng, nhưng không vượt ranh giới tin cậy nào. Nhiều chương trình xếp mức thấp; một số coi là informative.',
    distinctionVi:
      'Điều đúng đắn ở đây là quan sát và mô tả cơ chế bảo vệ còn thiếu, không phải chứng minh bằng cách thực sự gửi hàng loạt email.',
  },
];

export function SeverityLabPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  return (
    <>
      <PageHeader
        title="Phòng thí nghiệm severity"
        description="Luyện phân biệt mức nghiêm trọng kỹ thuật với tác động kinh doanh, và luyện chấm điểm dựa trên bằng chứng thay vì giả định."
      />

      <div className="mb-6">
        <Callout tone="warn" title="Dự án không dự đoán tiền thưởng">
          Bài luyện này chỉ so sánh cách bạn lập luận với rubric. Quyết định mức độ và phần thưởng
          luôn thuộc về chương trình, dựa trên ngữ cảnh mà bạn không thấy hết.
        </Callout>
      </div>

      <Section
        title="Bốn thứ trả lời bốn câu hỏi khác nhau"
        description="Nhầm lẫn giữa chúng là nguyên nhân phổ biến nhất của việc chấm điểm sai."
      >
        <ul className="grid gap-2 sm:grid-cols-2">
          <li className="ba-card text-sm">
            <span className="font-medium">CVSS</span> — mức nghiêm trọng kỹ thuật của bản thân lỗ
            hổng.
          </li>
          <li className="ba-card text-sm">
            <span className="font-medium">CWE</span> — tên của nguyên nhân gốc.
          </li>
          <li className="ba-card text-sm">
            <span className="font-medium">Taxonomy của nền tảng</span> — cách gọi tên thống nhất
            giữa các chương trình.
          </li>
          <li className="ba-card text-sm">
            <span className="font-medium">Thang riêng của chương trình</span> — ngữ cảnh kinh doanh
            mà chỉ tổ chức đó biết.
          </li>
        </ul>
      </Section>

      <Section title="Tình huống thực hành">
        <ul className="space-y-4">
          {CASES.map((item) => {
            const chosen = answers[item.id];
            const isRevealed = revealed[item.id];
            return (
              <li key={item.id}>
                <Card>
                  <p className="font-medium">{item.titleVi}</p>
                  <p className="mt-1 text-sm text-ink-muted">{item.scenarioVi}</p>
                  <div className="mt-3 space-y-1.5">
                    {item.options.map((option) => (
                      <label key={option.id} className="flex items-center gap-2 text-sm">
                        <input
                          type="radio"
                          name={item.id}
                          checked={chosen === option.id}
                          onChange={() => setAnswers((prev) => ({ ...prev, [item.id]: option.id }))}
                        />
                        <span className="text-ink-muted">{option.labelVi}</span>
                      </label>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="ba-btn mt-3 text-xs"
                    disabled={!chosen}
                    onClick={() => setRevealed((prev) => ({ ...prev, [item.id]: true }))}
                  >
                    So sánh với rubric
                  </button>
                  {isRevealed ? (
                    <div className="mt-3 rounded-md border border-line bg-surface p-3 text-sm">
                      <p className={chosen === item.bestOptionId ? 'text-ok' : 'text-warn'}>
                        {chosen === item.bestOptionId
                          ? 'Khớp với rubric.'
                          : 'Khác rubric — đọc lập luận dưới đây.'}
                      </p>
                      <p className="mt-2 text-ink-muted">{item.rubricVi}</p>
                      <p className="mt-2 text-ink-muted">
                        <span className="font-medium text-ink">Kỹ thuật và kinh doanh: </span>
                        {item.distinctionVi}
                      </p>
                    </div>
                  ) : null}
                </Card>
              </li>
            );
          })}
        </ul>
      </Section>
    </>
  );
}
