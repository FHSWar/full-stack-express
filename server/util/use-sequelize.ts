import { Sequelize } from 'sequelize'

export const useSequelize = async (): Promise<void> => {
	// 不放到函数执行的时候再拿， 会是undefined
	const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_RBAC } = process.env

	if (
		DB_HOST === undefined ||
		DB_USERNAME === undefined ||
		DB_RBAC === undefined
	) {
		throw new Error('数据库连接缺少参数')
	}

	const sequelize = new Sequelize(DB_RBAC, DB_USERNAME, DB_PASSWORD, {
		dialect: 'mysql',
		host: DB_HOST,
		logging: (msg) => logger.info(msg),
		// logging: logger.debug.bind(logger),
		timezone: '+08:00'
	})

	try {
		await sequelize.authenticate()
	} catch (error) {
		logger.error('Unable to connect to the database:', error)
	}
}
