/**
 * Tiện ích đồ thị dùng cho prerequisite và Knowledge Atlas.
 */

export interface GraphNode {
  id: string;
  prerequisiteIds: string[];
}

/**
 * Tìm chu trình bằng DFS ba màu (trắng / xám / đen).
 *
 * Trả về danh sách chu trình, mỗi chu trình là chuỗi id theo thứ tự gặp phải,
 * phần tử đầu lặp lại ở cuối để nhìn rõ vòng: `['a','b','a']`.
 */
export function findCycles(nodes: GraphNode[]): string[][] {
  const prereqOf = new Map<string, string[]>();
  for (const node of nodes) prereqOf.set(node.id, node.prerequisiteIds);

  const WHITE = 0;
  const GRAY = 1;
  const BLACK = 2;
  const color = new Map<string, number>();
  for (const node of nodes) color.set(node.id, WHITE);

  const cycles: string[][] = [];
  const stack: string[] = [];

  const visit = (id: string): void => {
    color.set(id, GRAY);
    stack.push(id);
    for (const next of prereqOf.get(id) ?? []) {
      // Tham chiếu treo do validator khác báo cáo; ở đây bỏ qua.
      if (!color.has(next)) continue;
      const c = color.get(next);
      if (c === GRAY) {
        const start = stack.indexOf(next);
        cycles.push([...stack.slice(start), next]);
      } else if (c === WHITE) {
        visit(next);
      }
    }
    stack.pop();
    color.set(id, BLACK);
  };

  for (const node of nodes) {
    if (color.get(node.id) === WHITE) visit(node.id);
  }
  return cycles;
}

/**
 * Sắp xếp topo theo prerequisite. Node không có prerequisite ra trước.
 * Nếu có chu trình, các node trong chu trình được đẩy về cuối theo thứ tự gốc.
 */
export function topologicalOrder(nodes: GraphNode[]): string[] {
  const indegree = new Map<string, number>();
  const dependents = new Map<string, string[]>();
  const known = new Set(nodes.map((n) => n.id));

  for (const node of nodes) {
    const prereqs = node.prerequisiteIds.filter((p) => known.has(p));
    indegree.set(node.id, prereqs.length);
    for (const p of prereqs) {
      dependents.set(p, [...(dependents.get(p) ?? []), node.id]);
    }
  }

  const queue = nodes.filter((n) => (indegree.get(n.id) ?? 0) === 0).map((n) => n.id);
  const order: string[] = [];
  while (queue.length > 0) {
    const id = queue.shift() as string;
    order.push(id);
    for (const dep of dependents.get(id) ?? []) {
      const next = (indegree.get(dep) ?? 0) - 1;
      indegree.set(dep, next);
      if (next === 0) queue.push(dep);
    }
  }

  for (const node of nodes) {
    if (!order.includes(node.id)) order.push(node.id);
  }
  return order;
}

/** Tập prerequisite bắc cầu của một node. */
export function transitivePrerequisites(nodes: GraphNode[], id: string): Set<string> {
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const seen = new Set<string>();
  const walk = (current: string): void => {
    for (const p of byId.get(current)?.prerequisiteIds ?? []) {
      if (seen.has(p)) continue;
      seen.add(p);
      walk(p);
    }
  };
  walk(id);
  return seen;
}
