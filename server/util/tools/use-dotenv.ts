import dotenv from 'dotenv'

// 从.env.**文件中加载环境变量们
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useDotenv = () => {
	// NODE_ENV从命令行传入，其他变量通过dotenv.config注入
	const { NODE_ENV } = process.env
	if (NODE_ENV === undefined) throw new Error('必须指定已定义的运行环境❗️')

	dotenv.config({ path: `.env.${NODE_ENV}` })

	const {
		DB_HOST,
		DB_USERNAME,
		DB_RBAC,
		LOG_PATH,
		PORT,
		REDIS_DB_HOST,
		SESSION_SECRET,
		STATIC_PATH
	} = process.env

	if (
		DB_HOST === undefined ||
		DB_USERNAME === undefined ||
		DB_RBAC === undefined
	) {
		throw new Error('数据库连接缺少参数❗️')
	}

	if (PORT === undefined) throw new Error('缺少监听的端口号❗️')

	if (REDIS_DB_HOST === undefined) throw new Error('缺少REDIS_DB_HOST❗️')

	if (SESSION_SECRET === undefined) throw new Error('必须指定密钥串❗️')

	if (STATIC_PATH === undefined) throw new Error('静态资源路径不能为空❗️')

	if (LOG_PATH === undefined) throw new Error('日志文件路径不能为空❗️')

	return {
		DB_HOST,
		DB_USERNAME,
		DB_RBAC,
		LOG_PATH,
		NODE_ENV,
		PORT,
		REDIS_DB_HOST,
		SESSION_SECRET,
		STATIC_PATH
	}
}
