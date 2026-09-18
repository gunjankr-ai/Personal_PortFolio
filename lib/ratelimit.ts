interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();

/**
 * In-memory sliding window rate limiter.
 * @param key Unique key (e.g. IP address or identifier)
 * @param limit Maximum requests allowed in the window
 * @param windowMs Time window in milliseconds (default 15 minutes)
 */
export function checkRateLimit(
  key: string,
  limit: number = 5,
  windowMs: number = 15 * 60 * 1000
): { success: boolean; remaining: number; reset: number } {
  const now = Date.now();
  const record = rateLimitMap.get(key) ?? { timestamps: [] };

  // Filter timestamps within current sliding window
  const windowStart = now - windowMs;
  const validTimestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (validTimestamps.length >= limit) {
    const oldestTimestamp = validTimestamps[0];
    const resetTime = oldestTimestamp + windowMs;
    return {
      success: false,
      remaining: 0,
      reset: Math.ceil((resetTime - now) / 1000),
    };
  }

  validTimestamps.push(now);
  rateLimitMap.set(key, { timestamps: validTimestamps });

  // Clean up stale entries every 100 items
  if (rateLimitMap.size > 500) {
    for (const [k, v] of rateLimitMap.entries()) {
      const active = v.timestamps.filter((t) => t > windowStart);
      if (active.length === 0) {
        rateLimitMap.delete(k);
      } else {
        rateLimitMap.set(k, { timestamps: active });
      }
    }
  }

  return {
    success: true,
    remaining: limit - validTimestamps.length,
    reset: Math.ceil(windowMs / 1000),
  };
}
