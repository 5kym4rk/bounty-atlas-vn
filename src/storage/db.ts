/**
 * Lớp bọc IndexedDB tối giản. Không dùng thư viện ngoài để giữ số dependency thấp
 * và để migration nằm hoàn toàn trong tầm kiểm soát của dự án.
 */
import { runMigrations } from '@/migrations';
import { DB_NAME, SCHEMA_VERSION, type StoreName } from './schema';

let dbPromise: Promise<IDBDatabase> | null = null;

/** true nếu môi trường có IndexedDB (không có trong một số test runner). */
export function isStorageAvailable(): boolean {
  return typeof indexedDB !== 'undefined';
}

function wrap<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('Lỗi IndexedDB không xác định'));
  });
}

export function openDatabase(): Promise<IDBDatabase> {
  if (!isStorageAvailable()) {
    return Promise.reject(new Error('Trình duyệt không hỗ trợ IndexedDB.'));
  }
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, SCHEMA_VERSION);
    request.onupgradeneeded = (event) => {
      const db = request.result;
      const tx = request.transaction;
      if (!tx) return;
      const applied = runMigrations(db, tx, event.oldVersion, event.newVersion ?? SCHEMA_VERSION);
      if (db.objectStoreNames.contains('meta')) {
        const meta = tx.objectStore('meta');
        meta.put({ key: 'schemaVersion', value: SCHEMA_VERSION });
        meta.put({ key: 'lastMigratedAt', value: new Date().toISOString() });
        meta.put({ key: 'migrationsApplied', value: applied });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('Không mở được IndexedDB.'));
    request.onblocked = () =>
      reject(new Error('IndexedDB bị chặn: hãy đóng các tab khác đang mở ứng dụng.'));
  });
  return dbPromise;
}

/** Chỉ dùng trong test để buộc mở lại kết nối. */
export function resetDatabaseHandle(): void {
  dbPromise = null;
}

async function withStore<T>(
  store: StoreName,
  mode: IDBTransactionMode,
  fn: (s: IDBObjectStore) => IDBRequest<T>,
): Promise<T> {
  const db = await openDatabase();
  return new Promise<T>((resolve, reject) => {
    const tx = db.transaction(store, mode);
    const request = fn(tx.objectStore(store));
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error(`Lỗi khi thao tác store ${store}`));
    tx.onabort = () => reject(tx.error ?? new Error(`Transaction ${store} bị huỷ`));
  });
}

export async function getAll<T>(store: StoreName): Promise<T[]> {
  return withStore<T[]>(store, 'readonly', (s) => s.getAll() as IDBRequest<T[]>);
}

export async function getOne<T>(store: StoreName, key: IDBValidKey): Promise<T | undefined> {
  return withStore<T | undefined>(
    store,
    'readonly',
    (s) => s.get(key) as IDBRequest<T | undefined>,
  );
}

export async function put<T>(store: StoreName, value: T): Promise<void> {
  await withStore(store, 'readwrite', (s) => s.put(value) as IDBRequest<IDBValidKey>);
}

export async function putMany<T>(store: StoreName, values: T[]): Promise<void> {
  if (values.length === 0) return;
  const db = await openDatabase();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    const objectStore = tx.objectStore(store);
    for (const value of values) objectStore.put(value);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error(`Lỗi ghi hàng loạt vào ${store}`));
    tx.onabort = () => reject(tx.error ?? new Error(`Transaction ${store} bị huỷ`));
  });
}

export async function remove(store: StoreName, key: IDBValidKey): Promise<void> {
  await withStore(store, 'readwrite', (s) => s.delete(key) as IDBRequest<undefined>);
}

export async function clearStore(store: StoreName): Promise<void> {
  await withStore(store, 'readwrite', (s) => s.clear() as IDBRequest<undefined>);
}

export async function getMeta<T>(key: string): Promise<T | undefined> {
  const record = await getOne<{ key: string; value: T }>('meta', key);
  return record?.value;
}

export async function setMeta<T>(key: string, value: T): Promise<void> {
  await put('meta', { key, value });
}

/** Xoá toàn bộ dữ liệu người học. Dùng ở Settings, có xác nhận hai bước ở UI. */
export async function clearAllUserData(): Promise<void> {
  const stores: StoreName[] = [
    'progress',
    'notes',
    'evidence',
    'checklistRuns',
    'reports',
    'quizAttempts',
    'profile',
  ];
  for (const store of stores) await clearStore(store);
  await setMeta('lastClearedAt', new Date().toISOString());
}

export { wrap };
