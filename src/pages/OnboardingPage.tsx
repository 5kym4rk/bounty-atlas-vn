import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NOT_A_TOOL_FOR_VI } from '@/config/safety';
import { useAppStore } from '@/app/store';
import { orderedDomains } from '@/utils/lookups';
import { SafetyStatement, StopRules } from '@/components/safety/SafetyGate';
import { Callout, Card, PageHeader } from '@/components/ui';
import type { LearnerProfile } from '@/storage/schema';

const BASE_LEVELS: { value: LearnerProfile['baseLevel']; label: string }[] = [
  { value: 'none', label: 'Chưa có nền tảng kỹ thuật' },
  { value: 'some-it', label: 'Biết dùng máy tính và mạng ở mức cơ bản' },
  { value: 'developer', label: 'Lập trình viên' },
  { value: 'security-adjacent', label: 'Làm vận hành hệ thống hoặc lĩnh vực liên quan' },
  { value: 'security-pro', label: 'Đã làm bảo mật chuyên nghiệp' },
];

const GOALS: { value: LearnerProfile['goal']; label: string }[] = [
  { value: 'general', label: 'Học tổng quát' },
  { value: 'web-api', label: 'Web và API' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'cloud', label: 'Cloud và hạ tầng' },
  { value: 'native', label: 'Native và dịch ngược' },
  { value: 'iot', label: 'IoT và phần cứng' },
  { value: 'web3', label: 'Web3' },
  { value: 'ai', label: 'AI và LLM' },
  { value: 'code-review', label: 'Rà soát mã nguồn' },
];

const LANGUAGES = [
  'Python',
  'JavaScript/TypeScript',
  'C/C++',
  'Java/Kotlin',
  'Go',
  'Rust',
  'PHP',
  'C#',
];

export function OnboardingPage() {
  const navigate = useNavigate();
  const profile = useAppStore((s) => s.profile);
  const saveProfile = useAppStore((s) => s.saveProfile);
  const acknowledged = Boolean(profile?.safetyAcknowledgedAt);

  const [baseLevel, setBaseLevel] = useState<LearnerProfile['baseLevel']>(
    profile?.baseLevel ?? 'none',
  );
  const [goal, setGoal] = useState<LearnerProfile['goal']>(profile?.goal ?? 'general');
  const [hours, setHours] = useState(profile?.hoursPerWeek ?? 5);
  const [languages, setLanguages] = useState<string[]>(profile?.knownLanguages ?? []);
  const [interests, setInterests] = useState<string[]>(profile?.interestDomainIds ?? []);
  const [hasDockerOrVm, setHasDockerOrVm] = useState(profile?.hasDockerOrVm ?? false);
  const [hasAndroidEnv, setHasAndroidEnv] = useState(profile?.hasAndroidEnv ?? false);
  const [hasIosEnv, setHasIosEnv] = useState(profile?.hasIosEnv ?? false);
  const [hasCloudSandbox, setHasCloudSandbox] = useState(profile?.hasCloudSandbox ?? false);
  const [hasOwnedHardware, setHasOwnedHardware] = useState(profile?.hasOwnedHardware ?? false);
  const [agreed, setAgreed] = useState(acknowledged);

  function toggle(list: string[], value: string, setter: (next: string[]) => void) {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    await saveProfile({
      onboardingCompleted: true,
      safetyAcknowledgedAt: profile?.safetyAcknowledgedAt ?? new Date().toISOString(),
      baseLevel,
      goal,
      hoursPerWeek: hours,
      knownLanguages: languages,
      interestDomainIds: interests,
      hasDockerOrVm,
      hasAndroidEnv,
      hasIosEnv,
      hasCloudSandbox,
      hasOwnedHardware,
    });
    navigate('/');
  }

  return (
    <>
      <PageHeader
        title="Onboarding"
        description="Vài câu hỏi để tạo kế hoạch cá nhân. Bạn không bị khoá vào một lộ trình — mọi lĩnh vực luôn mở và bạn đổi được bất cứ lúc nào."
      />

      <div className="mb-6 space-y-4">
        <SafetyStatement />
        <StopRules />
        <Callout title="Phần mềm này không phải công cụ để">
          <ul className="list-disc space-y-0.5 pl-5">
            {NOT_A_TOOL_FOR_VI.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Callout>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Card>
          <label className="ba-label" htmlFor="base-level">
            Nền tảng hiện tại của bạn
          </label>
          <select
            id="base-level"
            className="ba-input"
            value={baseLevel}
            onChange={(e) => setBaseLevel(e.target.value as LearnerProfile['baseLevel'])}
          >
            {BASE_LEVELS.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </Card>

        <Card>
          <fieldset>
            <legend className="ba-label">Ngôn ngữ lập trình bạn đọc hiểu được</legend>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <label key={lang} className="ba-chip cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-1"
                    checked={languages.includes(lang)}
                    onChange={() => toggle(languages, lang, setLanguages)}
                  />
                  {lang}
                </label>
              ))}
            </div>
          </fieldset>
        </Card>

        <Card>
          <fieldset>
            <legend className="ba-label">Môi trường thực hành bạn đang có</legend>
            <div className="space-y-2 text-sm">
              {[
                { label: 'Docker hoặc máy ảo', value: hasDockerOrVm, set: setHasDockerOrVm },
                {
                  label: 'Môi trường thử nghiệm Android',
                  value: hasAndroidEnv,
                  set: setHasAndroidEnv,
                },
                { label: 'Môi trường thử nghiệm iOS', value: hasIosEnv, set: setHasIosEnv },
                {
                  label: 'Tài khoản cloud riêng dành cho việc học',
                  value: hasCloudSandbox,
                  set: setHasCloudSandbox,
                },
                {
                  label: 'Thiết bị phần cứng thuộc sở hữu của bạn để thực hành',
                  value: hasOwnedHardware,
                  set: setHasOwnedHardware,
                },
              ].map((item) => (
                <label key={item.label} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={item.value}
                    onChange={(e) => item.set(e.target.checked)}
                  />
                  <span className="text-ink-muted">{item.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </Card>

        <Card>
          <label className="ba-label" htmlFor="goal">
            Mục tiêu chính
          </label>
          <select
            id="goal"
            className="ba-input"
            value={goal}
            onChange={(e) => setGoal(e.target.value as LearnerProfile['goal'])}
          >
            {GOALS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </Card>

        <Card>
          <label className="ba-label" htmlFor="hours">
            Số giờ học mỗi tuần: {hours}
          </label>
          <input
            id="hours"
            type="range"
            min={1}
            max={40}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full"
          />
        </Card>

        <Card>
          <fieldset>
            <legend className="ba-label">
              Lĩnh vực bạn quan tâm (bỏ trống nghĩa là quan tâm tất cả)
            </legend>
            <div className="flex flex-wrap gap-2">
              {orderedDomains.map((domain) => (
                <label key={domain.id} className="ba-chip cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-1"
                    checked={interests.includes(domain.id)}
                    onChange={() => toggle(interests, domain.id, setInterests)}
                  />
                  {domain.code}. {domain.titleVi}
                </label>
              ))}
            </div>
          </fieldset>
        </Card>

        <Card>
          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              className="mt-1"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span className="text-ink-muted">
              Tôi đã đọc và hiểu tuyên bố an toàn cùng chín quy tắc dừng kiểm thử ở trên.
            </span>
          </label>
          <button type="submit" className="ba-btn ba-btn-primary mt-4" disabled={!agreed}>
            Lưu và tạo kế hoạch
          </button>
        </Card>
      </form>
    </>
  );
}
