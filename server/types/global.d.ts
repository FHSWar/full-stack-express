/* eslint-disable no-var */
import type { Server } from 'http'

import type { Express } from 'express'
import type { Logger, Profiler } from 'winston'
import type { Redis } from 'ioredis'
import type { Sequelize } from 'sequelize'

import type { ToClient } from '~util'

// 在这个文件里面引不存在的包居然不会报错
declare global {
	var app: Express
	var launchTimer: Profiler
	var logger: Logger
	var rbac: Sequelize
	var redis: Redis
	var server: Server
	var toClient: ToClient
}
