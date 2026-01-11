import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// 1. Create the Redis client using your env variables
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// 2. Pass that 'redis' client into the Ratelimit config
const RateLimit = new Ratelimit({
  redis: redis, // <--- CHANGE THIS (It was Redis.fromEnv())
  limiter: Ratelimit.slidingWindow(10, '10 s'),
  analytics: true,
});

export default RateLimit;