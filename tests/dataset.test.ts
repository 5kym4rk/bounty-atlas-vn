import { describe, expect, it } from 'vitest';
import { dataset } from '@/data';
import { validateDataset } from '@/validators/dataset';
import { buildCoverageReport } from '@/validators/coverage';
import { findCycles } from '@/utils/graph';
import { isSafeExternalUrl } from '@/utils/url';

describe('dataset', () => {
  const result = validateDataset(dataset);

  it('không có lỗi validation', () => {
    const errors = result.issues.filter((i) => i.severity === 'error');
    expect(errors.map((e) => `${e.code} ${e.entity} ${e.id}: ${e.messageVi}`)).toEqual([]);
  });

  it('có đủ 24 domain và mỗi domain có safety note', () => {
    expect(dataset.domains).toHaveLength(24);
    for (const domain of dataset.domains) {
      expect(domain.safetyNoteVi.trim().length).toBeGreaterThan(0);
    }
  });

  it('mã domain là duy nhất và chạy từ A tới X', () => {
    const codes = dataset.domains.map((d) => d.code).sort();
    expect(new Set(codes).size).toBe(codes.length);
    expect(codes[0]).toBe('A');
    expect(codes[codes.length - 1]).toBe('X');
  });

  it('không có chu trình prerequisite ở domain, track và module', () => {
    expect(
      findCycles(
        dataset.domains.map((d) => ({ id: d.id, prerequisiteIds: d.prerequisiteDomainIds })),
      ),
    ).toEqual([]);
    expect(
      findCycles(
        dataset.tracks.map((t) => ({ id: t.id, prerequisiteIds: t.prerequisiteTrackIds })),
      ),
    ).toEqual([]);
    expect(
      findCycles(
        dataset.modules.map((m) => ({ id: m.id, prerequisiteIds: m.prerequisiteModuleIds })),
      ),
    ).toEqual([]);
  });

  it('mọi module có mục tiêu học và safety note', () => {
    for (const module of dataset.modules) {
      expect(module.learningObjectives.length).toBeGreaterThan(0);
      expect(module.safetyNoteVi.trim().length).toBeGreaterThan(0);
      expect(module.completionCriteria.length).toBeGreaterThan(0);
    }
  });

  it('mọi module có thân bài học thật', () => {
    for (const module of dataset.modules) {
      expect(module.lessonVi.length, module.id).toBeGreaterThan(0);
      for (const section of module.lessonVi) {
        const where = `${module.id}: ${section.headingVi}`;
        expect(section.headingVi.trim().length, module.id).toBeGreaterThan(0);
        expect(section.paragraphsVi.length, module.id).toBeGreaterThan(0);

        // Khong doan nao duoc la chuoi giu cho.
        for (const paragraph of section.paragraphsVi) {
          expect(paragraph.trim().length, where).toBeGreaterThan(30);
        }

        // Moi phan phai co du noi dung. Doan dan ngan truoc mot danh sach gach
        // dau dong la loi viet hop le, nen nguong tinh tren toan bo phan chu
        // khong tinh tren tung doan.
        const sectionText = [...section.paragraphsVi, ...(section.bulletsVi ?? [])].join(' ');
        expect(sectionText.trim().length, where).toBeGreaterThan(200);
      }
    }
  });

  it('bài học đủ dày để dạy được, không phải khung rỗng', () => {
    for (const module of dataset.modules) {
      const words = module.lessonVi
        .flatMap((s) => [...s.paragraphsVi, ...(s.bulletsVi ?? [])])
        .join(' ')
        .split(/\s+/).length;
      expect(words, module.id).toBeGreaterThan(120);
    }
  });

  it('không có hai module nào dùng chung nguyên văn bài học', () => {
    const seen = new Map<string, string>();
    for (const module of dataset.modules) {
      const key = module.lessonVi.map((s) => s.headingVi).join('|');
      const previous = seen.get(key);
      expect(previous, `${module.id} trùng bài học với ${previous}`).toBeUndefined();
      seen.set(key, module.id);
    }
  });

  it('mọi lab có ghi chú mục tiêu được phép', () => {
    for (const lab of dataset.labs) {
      expect(lab.allowedTargetsNoteVi.trim().length).toBeGreaterThan(0);
      expect(lab.safetyNoteVi.trim().length).toBeGreaterThan(0);
    }
  });

  it('mọi cloud lab có cảnh báo chi phí và bắt buộc dọn dẹp', () => {
    const cloudLabs = dataset.labs.filter((l) => l.environment === 'cloud-owned-account');
    expect(cloudLabs.length).toBeGreaterThan(0);
    for (const lab of cloudLabs) {
      expect(lab.cloud).not.toBeNull();
      expect(lab.cloud?.cleanupRequired).toBe(true);
      expect(lab.cloud?.billingWarning.trim().length).toBeGreaterThan(0);
      expect(lab.cloud?.estimatedCost.trim().length).toBeGreaterThan(0);
      expect(lab.cloud?.productionWarning.trim().length).toBeGreaterThan(0);
    }
  });

  it('mọi weakness có root cause và nguyên tắc khắc phục', () => {
    for (const weakness of dataset.weaknesses) {
      expect(weakness.rootCauseVi.trim().length).toBeGreaterThan(0);
      expect(weakness.remediationPrinciplesVi.length).toBeGreaterThan(0);
    }
  });

  it('mọi report exercise có rubric', () => {
    for (const exercise of dataset.reportExercises) {
      expect(exercise.rubric.length).toBeGreaterThan(0);
    }
  });

  it('mọi câu hỏi quiz có đáp án đúng hợp lệ và không phải mọi lựa chọn đều đúng', () => {
    for (const quiz of dataset.quizzes) {
      for (const question of quiz.questions) {
        const valid = question.correctOptionIds.filter((id) =>
          question.options.some((o) => o.id === id),
        );
        expect(valid.length).toBeGreaterThan(0);
        expect(valid.length).toBeLessThan(question.options.length);
      }
    }
  });

  it('mọi URL trong dataset đều an toàn', () => {
    const urls = [
      ...dataset.resources.map((r) => r.url),
      ...dataset.labs.map((l) => l.url),
      ...dataset.tools.map((t) => t.officialUrl),
      ...dataset.standards.map((s) => s.url),
    ];
    for (const url of urls) {
      expect(isSafeExternalUrl(url), url).toBe(true);
    }
  });

  it('domain specialist có prerequisite, checklist và bài tập báo cáo', () => {
    const trackById = new Map(dataset.tracks.map((t) => [t.id, t]));
    for (const domain of dataset.domains.filter((d) => d.status === 'specialist')) {
      expect(domain.prerequisiteDomainIds.length, domain.id).toBeGreaterThan(0);
      expect(
        dataset.checklists.filter((c) => c.domainId === domain.id).length,
        domain.id,
      ).toBeGreaterThan(0);
      const hasExercise = dataset.modules.some(
        (m) => trackById.get(m.trackId)?.domainId === domain.id && m.reportExerciseIds.length > 0,
      );
      expect(hasExercise, domain.id).toBe(true);
    }
  });

  it('không có nguồn nào mang nhãn verified mà thiếu ngày rà soát', () => {
    for (const resource of dataset.resources) {
      if (resource.contentStatus === 'verified') {
        expect(resource.lastContentReviewed, resource.id).toBeTruthy();
      }
    }
  });

  it('coverage report tính được và không hard-code số liệu', () => {
    const report = buildCoverageReport(dataset);
    expect(report.totals.domain).toBe(dataset.domains.length);
    expect(report.totals.module).toBe(dataset.modules.length);
    expect(report.totals.quizQuestion).toBe(
      dataset.quizzes.reduce((n, q) => n + q.questions.length, 0),
    );
    expect(report.perDomain).toHaveLength(dataset.domains.length);
  });
});
