const store = new Map();

export async function cached(key, fetcher, ttlMs = 60_000) {
  const now = Date.now();
  const hit = store.get(key);
  if (hit && hit.expiresAt > now) return hit.value;

  const value = await fetcher();
  store.set(key, { value, expiresAt: now + ttlMs });
  return value;
}
