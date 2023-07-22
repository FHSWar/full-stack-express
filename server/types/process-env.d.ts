// 在每个使用 process.env的地方都判空有点脏，在这里生命后在useDotenv内统一处理更优雅
declare namespace NodeJS {
	interface ProcessEnv {
		REDIS_DB_HOST: string
		DB_HOST: string
		DB_USERNAME: string
		DB_RBAC: string
		LOG_PATH: string
		NODE_ENV: string
		PORT: number
		SESSION_SECRET: string
		STATIC_PATH: string
	}
}
