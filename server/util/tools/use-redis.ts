import Redis from 'ioredis'

export const useRedis = (): void => {
	global.redis = new Redis()

	redis.on('error', logger.error)
}
