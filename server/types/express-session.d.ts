import 'express-session'

declare module 'express-session' {
	export interface SessionData {
		userInfo: {
			um: string
		}
	}
}
