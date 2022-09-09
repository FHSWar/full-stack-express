/* eslint-disable no-var */
import type { Server } from 'http'

import type { Express } from 'express'
import type { Logger } from 'winston'
import type { Sequelize } from 'sequelize'

import type { ToClient } from '~util'

declare global {
	var app: Express
	var logger: Logger
	var rbac: Sequelize
	var server: Server
	var toClient: ToClient
}
