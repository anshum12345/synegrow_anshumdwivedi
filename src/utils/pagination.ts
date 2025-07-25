export function paginate<T>(array: T[], page: number, limit: number): { data: T[]; total: number; page: number; limit: number; } {
  const total = array.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  const data = array.slice(start, end);
  return { data, total, page, limit };
} 