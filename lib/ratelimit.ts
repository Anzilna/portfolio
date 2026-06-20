import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let ratelimit: Ratelimit | null = null;

if (
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN
) {
  ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    analytics: false,
    prefix: "portfolio:contact",
  });
}

// In-memory fallback when Redis is not configured
const inMemoryStore = new Map<string, { count: number; reset: number }>();

export async function checkRateLimit(
  ip: string
): Promise<{ success: boolean; remaining: number }> {
  if (ratelimit) {
    const result = await ratelimit.limit(ip);
    return { success: result.success, remaining: result.remaining };
  }

  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxRequests = 5;

  const record = inMemoryStore.get(ip);

  if (!record || now > record.reset) {
    inMemoryStore.set(ip, { count: 1, reset: now + windowMs });
    return { success: true, remaining: maxRequests - 1 };
  }

  if (record.count >= maxRequests) {
    return { success: false, remaining: 0 };
  }

  record.count += 1;
  return { success: true, remaining: maxRequests - record.count };
}
