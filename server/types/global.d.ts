/* eslint-disable no-var */
import type { Server } from 'http'

import type { Express } from 'express'
import type { Logger } from 'winston'
import type { Sequelize } from 'sequelize'

declare global {
	var app: Express
	var logger: Logger
	var rbac: Sequelize
	var server: Server
}
