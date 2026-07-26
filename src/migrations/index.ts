/**
 * Migration cho IndexedDB.
 *
 * Mỗi migration nhận `IDBDatabase` và `IDBTransaction` của sự kiện
 * `onupgradeneeded` và chỉ được dùng API đồng bộ của IndexedDB.
 * Migration phải idempotent: kiểm tra store đã tồn tại trước khi tạo.
 */

export interface Migration {
  /** Chạy khi nâng từ `from` lên `from + 1`. */
  from: number;
  descriptionVi: string;
  run: (db: IDBDatabase, tx: IDBTransaction) => void;
}

function ensureStore(db: IDBDatabase, name: string, keyPath: string): IDBObjectStore | null {
  if (db.objectStoreNames.contains(name)) return null;
  return db.createObjectStore(name, { keyPath });
}

export const MIGRATIONS: Migration[] = [
  {
    from: 0,
    descriptionVi: 'Tạo các object store ban đầu.',
    run: (db) => {
      ensureStore(db, 'progress', 'moduleId');
      const notes = ensureStore(db, 'notes', 'id');
      notes?.createIndex('bySubject', 'subjectId', { unique: false });
      const evidence = ensureStore(db, 'evidence', 'id');
      evidence?.createIndex('bySubject', 'subjectId', { unique: false });
      ensureStore(db, 'checklistRuns', 'id');
      ensureStore(db, 'reports', 'id');
      const attempts = ensureStore(db, 'quizAttempts', 'id');
      attempts?.createIndex('byModule', 'moduleId', { unique: false });
      ensureStore(db, 'profile', 'id');
      ensureStore(db, 'meta', 'key');
    },
  },
  {
    from: 1,
    descriptionVi:
      'Thêm trường minutesSpent và reviewDueAt cho progress; thêm index byQuiz cho quizAttempts.',
    run: (db, tx) => {
      if (db.objectStoreNames.contains('quizAttempts')) {
        const store = tx.objectStore('quizAttempts');
        if (!store.indexNames.contains('byQuiz')) {
          store.createIndex('byQuiz', 'quizId', { unique: false });
        }
      }
      if (db.objectStoreNames.contains('progress')) {
        const store = tx.objectStore('progress');
        const request = store.openCursor();
        request.onsuccess = () => {
          const cursor = request.result;
          if (!cursor) return;
          const value = cursor.value as Record<string, unknown>;
          let changed = false;
          if (typeof value.minutesSpent !== 'number') {
            value.minutesSpent = 0;
            changed = true;
          }
          if (!('reviewDueAt' in value)) {
            value.reviewDueAt = null;
            changed = true;
          }
          if (changed) cursor.update(value);
          cursor.continue();
        };
      }
    },
  },
];

/** Chạy tuần tự mọi migration cần thiết để đi từ `oldVersion` lên `newVersion`. */
export function runMigrations(
  db: IDBDatabase,
  tx: IDBTransaction,
  oldVersion: number,
  newVersion: number,
): string[] {
  const applied: string[] = [];
  for (let v = oldVersion; v < newVersion; v += 1) {
    const migration = MIGRATIONS.find((m) => m.from === v);
    if (!migration) continue;
    migration.run(db, tx);
    applied.push(`v${v} → v${v + 1}: ${migration.descriptionVi}`);
  }
  return applied;
}
