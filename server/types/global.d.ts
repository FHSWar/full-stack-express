/* eslint-disable no-var */
import type { Server } from 'http'

import type { Express } from 'express'
import type { Redis } from 'ioredis'
import type { Job } from 'node-schedule'
import type { Sequelize } from 'sequelize'
import type winston from 'winston'

import type { ToClient } from '~util'

// 定时任务相关
interface Scheduler {
	schedules: {
		// 单测结束需要cancel掉定时器
		[key: string]: Job
	}
	stopScheduler: () => void
}

// 在这个文件里面引不存在的包居然不会报错
declare global {
	var app: Express
	var logger: {
		info: winston.LeveledLogMethod
		debug: winston.LeveledLogMethod
		warn: winston.LeveledLogMethod
		error: winston.LeveledLogMethod
	}
	var rbac: Sequelize
	var redis: Redis
	var scheduler: Scheduler
	var server: Server
	var toClient: ToClient
}
