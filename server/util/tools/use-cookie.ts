import connectRedis from 'connect-redis'
import session from 'express-session'
import { createClient } from 'redis'

import type { Express } from 'express'

// https://www.npmjs.com/package/redis
export const useCookie = (app: Express): void => {
	const { SESSION_SECRET } = process.env
	if (SESSION_SECRET === undefined) {
		throw new Error('必须指定密钥串❗️')
	}

	global.redisSession = createClient({ legacyMode: true })

	redisSession.connect().catch(console.error)

	const RedisStore = connectRedis(session)

	app.use(
		// 这里不转为any有ts的报错：https://stackoverflow.com/questions/65980722/how-to-set-connect-redis-in-typescript
		session({
			store: new RedisStore({ client: redisSession as any }),
			saveUninitialized: false,
			secret: SESSION_SECRET,
			resave: false
		})
	)
}
