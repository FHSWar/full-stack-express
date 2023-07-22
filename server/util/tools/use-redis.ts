import Redis from 'ioredis'

export const useRedis = (REDIS_DB_HOST: string): void => {
	global.redis = new Redis({
		host: REDIS_DB_HOST
	})

	redis.on('error', logger.error)
}
