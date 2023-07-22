import connectRedis from 'connect-redis'
import session from 'express-session'

// import { validateCookie } from '~util'

import type { Client } from 'connect-redis'
import type { Express } from 'express'

// https://www.npmjs.com/package/redis
export const useSessionRedis = (app: Express, SESSION_SECRET: string): void => {
	const RedisStore = connectRedis(session)

	app
		// 这里不强转有ts的报错：https://stackoverflow.com/questions/65980722/how-to-set-connect-redis-in-typescript
		.use(
			session({
				cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 },
				resave: false,
				saveUninitialized: false,
				secret: SESSION_SECRET,
				store: new RedisStore({ client: redis as unknown as Client })
			})
		)
	// 要在注册session之后再用这个中间件
	// .use(validateCookie())
}
