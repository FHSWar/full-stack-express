/* eslint-disable no-var */
import type { Logger } from 'winston'
import type { Sequelize } from 'sequelize'

declare global {
	var logger: Logger
	var rbac: Sequelize
}
