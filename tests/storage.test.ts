import { describe, expect, it } from 'vitest';
import { MIGRATIONS, runMigrations } from '@/migrations';
import {
  SCHEMA_VERSION,
  createDefaultProfile,
  exportBundleSchema,
  progressRecordSchema,
  reportDraftSchema,
} from '@/storage/schema';

/** Bản mô phỏng tối thiểu của IDBDatabase để kiểm tra logic migration. */
class FakeStore {
  indexNames: { contains: (name: string) => boolean };
  private indexes = new Set<string>();

  constructor(public name: string) {
    this.indexNames = { contains: (n: string) => this.indexes.has(n) };
  }

  createIndex(name: string): void {
    this.indexes.add(name);
  }

  openCursor(): { onsuccess: (() => void) | null; result: null } {
    return { onsuccess: null, result: null };
  }

  listIndexes(): string[] {
    return [...this.indexes];
  }
}

class FakeDb {
  stores = new Map<string, FakeStore>();
  objectStoreNames = {
    contains: (name: string) => this.stores.has(name),
  };

  createObjectStore(name: string): FakeStore {
    const store = new FakeStore(name);
    this.stores.set(name, store);
    return store;
  }
}

class FakeTx {
  constructor(private db: FakeDb) {}
  objectStore(name: string): FakeStore {
    const store = this.db.stores.get(name);
    if (!store) throw new Error(`Không có store ${name}`);
    return store;
  }
}

describe('migration IndexedDB', () => {
  it('mỗi bước từ 0 tới SCHEMA_VERSION đều có migration', () => {
    for (let v = 0; v < SCHEMA_VERSION; v += 1) {
      expect(
        MIGRATIONS.some((m) => m.from === v),
        `thiếu migration từ v${v}`,
      ).toBe(true);
    }
  });

  it('chạy từ v0 tạo đủ các object store', () => {
    const db = new FakeDb();
    const tx = new FakeTx(db);
    const applied = runMigrations(
      db as unknown as IDBDatabase,
      tx as unknown as IDBTransaction,
      0,
      SCHEMA_VERSION,
    );

    expect(applied).toHaveLength(SCHEMA_VERSION);
    for (const name of [
      'progress',
      'notes',
      'evidence',
      'checklistRuns',
      'reports',
      'quizAttempts',
      'profile',
      'meta',
    ]) {
      expect(db.stores.has(name), name).toBe(true);
    }
  });

  it('nâng từ v1 lên v2 thêm index byQuiz mà không tạo lại store', () => {
    const db = new FakeDb();
    const tx = new FakeTx(db);
    runMigrations(db as unknown as IDBDatabase, tx as unknown as IDBTransaction, 0, 1);
    expect(db.stores.get('quizAttempts')?.listIndexes()).not.toContain('byQuiz');

    runMigrations(db as unknown as IDBDatabase, tx as unknown as IDBTransaction, 1, 2);
    expect(db.stores.get('quizAttempts')?.listIndexes()).toContain('byQuiz');
  });

  it('migration idempotent: chạy lại không ném lỗi', () => {
    const db = new FakeDb();
    const tx = new FakeTx(db);
    runMigrations(db as unknown as IDBDatabase, tx as unknown as IDBTransaction, 0, SCHEMA_VERSION);
    expect(() =>
      runMigrations(
        db as unknown as IDBDatabase,
        tx as unknown as IDBTransaction,
        0,
        SCHEMA_VERSION,
      ),
    ).not.toThrow();
  });
});

describe('schema dữ liệu người học', () => {
  it('hồ sơ mặc định hợp lệ và chưa xác nhận an toàn', () => {
    const profile = createDefaultProfile(new Date().toISOString());
    expect(profile.safetyAcknowledgedAt).toBeNull();
    expect(profile.onboardingCompleted).toBe(false);
  });

  it('từ chối bản ghi tiến trình có trạng thái không hợp lệ', () => {
    const parsed = progressRecordSchema.safeParse({
      moduleId: 'mod-web-idor',
      state: 'không-tồn-tại',
      updatedAt: '2026-07-26T00:00:00.000Z',
      reviewDueAt: null,
      minutesSpent: 0,
    });
    expect(parsed.success).toBe(false);
  });

  it('chấp nhận bản ghi tiến trình hợp lệ', () => {
    const parsed = progressRecordSchema.safeParse({
      moduleId: 'mod-web-idor',
      state: 'studied',
      updatedAt: '2026-07-26T00:00:00.000Z',
      reviewDueAt: null,
      minutesSpent: 30,
    });
    expect(parsed.success).toBe(true);
  });

  it('từ chối bundle import sai định dạng', () => {
    expect(exportBundleSchema.safeParse({ app: 'khac', schemaVersion: 1 }).success).toBe(false);
  });

  it('chấp nhận bundle import rỗng đúng định dạng', () => {
    const parsed = exportBundleSchema.safeParse({
      app: 'bounty-atlas-vn',
      schemaVersion: SCHEMA_VERSION,
      exportedAt: new Date().toISOString(),
      redacted: false,
      data: {
        progress: [],
        notes: [],
        evidence: [],
        checklistRuns: [],
        reports: [],
        quizAttempts: [],
        profile: null,
      },
    });
    expect(parsed.success).toBe(true);
  });

  it('bản nháp báo cáo yêu cầu đủ trường', () => {
    expect(reportDraftSchema.safeParse({ id: 'report-1' }).success).toBe(false);
  });
});
