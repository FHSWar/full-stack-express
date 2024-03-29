import { scheduleJob } from 'node-schedule'
import { useWinston } from './use-winston'

import type { Job } from 'node-schedule'

// 停掉所有定时任务，单测要用到
const stopScheduler = (): void => {
	const schedules = scheduler.schedules
	Object.keys(schedules).forEach((job) => schedules[job].cancel())
}

// 每天零点更新日志输出的文件夹，这样方便灵活定制
const updateLogger = (LOG_PATH: string): Job => {
	return scheduleJob('upateLogger', '0 0 * * *', () => {
		useWinston(LOG_PATH)
		logger.debug(`rotate file daily, ${new Date().toLocaleString()}`)
	})
}

export const useScheduler = (LOG_PATH: string): void => {
	// 初始化全局scheduler对象
	global.scheduler = {
		schedules: {},
		stopScheduler: () => {}
	}

	scheduler.schedules.upateLoggerJob = updateLogger(LOG_PATH)
	scheduler.stopScheduler = stopScheduler
}
