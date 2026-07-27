# DATA_SCHEMA — Mô hình dữ liệu BountyAtlas VN

Nguồn sự thật của schema là mã TypeScript trong `src/schemas/`. Mỗi entity có
một interface TypeScript **và** một schema Zod tương ứng; hai thứ này được ràng
buộc với nhau bằng `z.ZodType<T>` nên lệch nhau sẽ gây lỗi biên dịch.

## 1. Enum dùng chung

```ts
type Difficulty =
  | 'foundation'
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'specialist'
  | 'research';
type ContentStatus = 'draft' | 'review-needed' | 'verified' | 'outdated' | 'archived';
type DomainStatus = 'core' | 'advanced' | 'specialist' | 'planned';
type LinkStatus =
  | 'active'
  | 'redirected'
  | 'login-required'
  | 'blocked'
  | 'rate-limited'
  | 'unavailable'
  | 'timeout'
  | 'unknown';
type SourceClass =
  | 'official-standard'
  | 'official-vendor'
  | 'project-primary'
  | 'academic'
  | 'community';
```

## 2. Entity và quan hệ

```text
KnowledgeDomain 1─* LearningTrack 1─* LearningModule
LearningModule *─* Concept
LearningModule *─* Weakness        (qua concept.commonWeaknessIds + module.weaknessIds)
LearningModule *─* LearningResource (required / optional)
LearningModule *─* Lab
LearningModule *─* TestingChecklist
LearningModule 1─* Quiz
LearningModule *─* ReportExercise
Weakness       *─* Lab, ReportExercise
Tool           *─* KnowledgeDomain, Lab
TriageScenario *─1 ReportExercise (tuỳ chọn)
```

## 3. Định danh

Quy ước prefix, kiểm tra bằng regex trong validator:

| Entity          | Prefix  | Ví dụ                            |
| --------------- | ------- | -------------------------------- |
| Domain          | `dom-`  | `dom-web`                        |
| Track           | `trk-`  | `trk-web-authz`                  |
| Module          | `mod-`  | `mod-web-idor`                   |
| Concept         | `cpt-`  | `cpt-trust-boundary`             |
| Weakness        | `wkn-`  | `wkn-idor`                       |
| Resource        | `res-`  | `res-portswigger-academy`        |
| Lab             | `lab-`  | `lab-portswigger-access-control` |
| Tool            | `tool-` | `tool-burp-suite`                |
| Checklist       | `chk-`  | `chk-authorization`              |
| Quiz            | `qz-`   | `qz-web-idor`                    |
| Report exercise | `rex-`  | `rex-idor-basic`                 |
| Triage scenario | `trg-`  | `trg-scanner-only`               |
| Standard        | `std-`  | `std-cwe`                        |
| Skill           | `skl-`  | `skl-read-program-policy`        |

ID phải là kebab-case ASCII: `^[a-z]{2,4}-[a-z0-9-]+$`. ID trùng lặp là lỗi.

## 4. Các interface chính

Xem `src/schemas/entities.ts` để có bản đầy đủ, luôn đồng bộ với mã. Tóm tắt:

```ts
interface KnowledgeDomain {
  id: string;
  code: string;
  titleVi: string;
  descriptionVi: string;
  order: number;
  status: DomainStatus;
  trackIds: string[];
  prerequisiteDomainIds: string[];
  safetyNoteVi: string; // bắt buộc, không rỗng
  architectureVi: string[]; // bản đồ kiến trúc
  attackSurfaceVi: string[]; // bề mặt tấn công
  trustBoundariesVi: string[]; // trust boundary
  careerNoteVi: string; // định hướng, KHÔNG nói về thu nhập
  standardIds: string[];
  toolIds: string[];
  contentStatus: ContentStatus;
  lastReviewed: string | null;
}

interface LearningTrack {
  id: string;
  domainId: string;
  titleVi: string;
  summaryVi: string;
  prerequisiteTrackIds: string[];
  moduleIds: string[];
  skillIds: string[];
  standardIds: string[];
  status: ContentStatus;
}

interface LearningModule {
  id: string;
  trackId: string;
  titleVi: string;
  summaryVi: string;
  difficulty: Difficulty;
  estimatedHours: number | null;
  learningObjectives: string[]; // bắt buộc >= 1
  lessonVi: LessonSection[]; // thân bài học, bắt buộc >= 1 phần
  prerequisiteModuleIds: string[];
  conceptIds: string[];
  weaknessIds: string[];
  methodologyVi: string[]; // phương pháp kiểm thử
  safeImpactProofVi: string[]; // chứng minh tác động an toàn
  requiredResourceIds: string[];
  optionalResourceIds: string[];
  labIds: string[];
  checklistIds: string[];
  quizIds: string[];
  reportExerciseIds: string[];
  remediationTopicIds: string[];
  safetyNoteVi: string; // bắt buộc, không rỗng
  completionCriteria: CompletionCriterion[];
  contentStatus: ContentStatus;
  lastReviewed: string | null;
}
```

`Concept`, `Weakness`, `LearningResource`, `Lab`, `TestingChecklist`, `Quiz`,
`PracticalAssessment`, `ReportExercise`, `Tool`, `TriageScenario` theo đúng đặc tả
trong yêu cầu, có bổ sung các trường cloud-lab bắt buộc:

```ts
interface CloudLabMetadata {
  estimatedCost: string;
  billingWarning: string;
  requiresDedicatedAccount: boolean;
  cleanupRequired: boolean;
  cleanupInstructionsUrl: string | null;
  regionNote: string;
  productionWarning: string;
}
```

Validator bắt buộc mọi lab có `environment === 'cloud-owned-account'` phải có
`cloud` metadata đầy đủ.

## 5. Ràng buộc nội dung (validator thực thi)

| Mã lỗi                      | Ràng buộc                                                      |
| --------------------------- | -------------------------------------------------------------- |
| `DUPLICATE_ID`              | ID trùng trong toàn bộ dataset                                 |
| `BAD_ID_FORMAT`             | ID không đúng quy ước prefix/kebab-case                        |
| `DANGLING_REF`              | Tham chiếu tới ID không tồn tại                                |
| `PREREQ_CYCLE`              | Chu trình prerequisite ở domain/track/module                   |
| `MODULE_NO_OBJECTIVE`       | Module không có learning objective                             |
| `MODULE_NO_LESSON`          | Module không có thân bài học                                   |
| `MODULE_NO_SAFETY`          | Module không có safety note                                    |
| `DOMAIN_NO_SAFETY`          | Domain không có safety note                                    |
| `LAB_NO_ALLOWED_TARGETS`    | Lab thiếu `allowedTargetsNoteVi`                               |
| `CLOUD_LAB_NO_CLEANUP`      | Cloud lab thiếu metadata cleanup/billing                       |
| `SPECIALIST_NO_PREREQ`      | Domain specialist không có prerequisite                        |
| `SPECIALIST_NO_CHECKLIST`   | Domain specialist không có checklist tối thiểu                 |
| `RESOURCE_DOMAIN_MISMATCH`  | Resource official gắn domain không tồn tại/không phù hợp       |
| `COMMUNITY_NO_REASON`       | Resource `community` thiếu `sourceOriginNoteVi`                |
| `VERIFIED_NO_REVIEW_DATE`   | `contentStatus: verified` mà thiếu ngày rà soát                |
| `LINK_ACTIVE_NO_CHECK_DATE` | `linkStatus: active` mà thiếu `linkLastChecked`                |
| `WEAKNESS_NO_REMEDIATION`   | Weakness không có nguyên tắc khắc phục                         |
| `WEAKNESS_NO_ROOT_CAUSE`    | Weakness không có root cause                                   |
| `REPORT_EXERCISE_NO_RUBRIC` | Report exercise không có rubric                                |
| `QUIZ_NO_VALID_ANSWER`      | Quiz có câu hỏi không có đáp án đúng hợp lệ                    |
| `QUIZ_BAD_PASSING_SCORE`    | `passingScorePercent` ngoài khoảng 1–100                       |
| `UNSAFE_URL`                | URL dùng scheme khác `https:` (hoặc `http:` cho localhost lab) |
| `DATE_FORMAT`               | Ngày không đúng `YYYY-MM-DD`                                   |

Thống kê **không được hard-code**: validator quét tài liệu Markdown gốc để phát hiện
số đếm viết tay mâu thuẫn với dữ liệu (xem `scripts/coverage-report`).

## 6. Lưu trữ phía người dùng (IndexedDB)

Database `bounty-atlas-vn`, `SCHEMA_VERSION` khai báo tại `src/storage/schema.ts`.

Object store:

| Store           | Key           | Nội dung                                         |
| --------------- | ------------- | ------------------------------------------------ |
| `progress`      | `moduleId`    | Trạng thái học của module                        |
| `notes`         | `id`          | Ghi chú, gắn với module/lab/checklist            |
| `evidence`      | `id`          | Tham chiếu bằng chứng (mô tả + tuỳ chọn ảnh nhỏ) |
| `checklistRuns` | `id`          | Phiên chạy checklist                             |
| `reports`       | `id`          | Bản nháp report                                  |
| `quizAttempts`  | `id`          | Lần làm quiz                                     |
| `profile`       | `'singleton'` | Skill profile, onboarding, cam kết an toàn       |
| `meta`          | `key`         | Version, thời điểm migrate, backup gần nhất      |

Migration là mảng hàm `migrate_v{n}_to_v{n+1}` trong `src/migrations/`, chạy tuần tự
trong `onupgradeneeded`. Mỗi migration phải có test.

Export tạo file JSON có `{ app, schemaVersion, exportedAt, data }`. Import phải:
validate bằng Zod, giới hạn kích thước, hiển thị conflict preview, cho chọn
merge/overwrite, và có tuỳ chọn **redaction** loại bỏ note/evidence.

## 7. Quy tắc an toàn của chính dữ liệu

- Không lưu payload khai thác vào `Weakness` — chỉ root cause, dấu hiệu,
  nguyên tắc xác minh an toàn và cách khắc phục.
- Checklist item là **câu hỏi và quan sát**, không phải payload.
- Không lưu lời giải lab; `solutionPolicy` chỉ trỏ tới lời giải chính thức của nhà cung cấp.
- Mọi URL phải là `https:`; `javascript:`, `data:`, `vbscript:` bị chặn ở cả
  validator lẫn component link runtime.
