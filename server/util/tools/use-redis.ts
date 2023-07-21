import Redis from 'ioredis'

export const useRedis = (): void => {
	global.redis = new Redis({
		host: 'redis_db_container'
	})

	redis.on('error', logger.error)
}
