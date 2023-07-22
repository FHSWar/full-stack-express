import { resolve } from 'path'

import { Sequelize } from 'sequelize-typescript'

export const useSequelize = async (dbConfig: {
	DB_HOST: string
	DB_USERNAME: string
	DB_PASSWORD: string
	DB_RBAC: string
}): Promise<void> => {
	const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_RBAC } = dbConfig
	// role based access control，鉴权专用库
	const rbac = new Sequelize({
		database: DB_RBAC,
		username: DB_USERNAME,
		password: DB_PASSWORD,
		host: DB_HOST,
		dialect: 'mysql',
		logging: (msg) => logger.info(msg),
		sync: { alter: true },
		// logging: logger.debug.bind(logger),
		timezone: '+08:00',
		models: [resolve('model') + '/**/*.model.ts']
	})

	try {
		await rbac.authenticate({ logging: false })
		await rbac.sync({ logging: false })

		global.rbac = rbac
	} catch (error) {
		logger.error('Unable to connect to the database:', error)
	}
}
