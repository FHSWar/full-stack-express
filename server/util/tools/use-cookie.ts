import connectRedis from 'connect-redis'
import session from 'express-session'
import { createClient } from 'redis'

import { validateCookie } from '~util'

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

	app
		// 这里不转为any有ts的报错：https://stackoverflow.com/questions/65980722/how-to-set-connect-redis-in-typescript
		.use(
			session({
				cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 },
				resave: false,
				saveUninitialized: false,
				secret: SESSION_SECRET,
				store: new RedisStore({ client: redisSession as any })
			})
		)
		// 要在注册session之后再用这个中间件
		.use(validateCookie())
}
