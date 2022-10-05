import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import responseTime from 'response-time'

import {
	useController,
	useDotenv,
	useHttpServer,
	useRedis,
	useScheduler,
	useSequelize,
	useSessionRedis,
	useStaticServer,
	useSwaggerUI,
	useToClient,
	useWinston
} from '~util'

const launchApp = async (): Promise<void> => {
	const launchStart = performance.now()

	useDotenv() // 读入环境变量
	useWinston() // 全局挂载日志对象
	useScheduler() // 全局挂载定时任务
	useRedis() // 全局挂载ioredis实例
	useToClient() // 全局挂载响应方法，统一响应格式

	const app = express()
		.use(cors({ credentials: true, origin: true })) // 使后端具有跨域写入cookie的能力
		.use(cookieParser()) // 使express请求中能拿到cookie对象
		.use(responseTime()) // 给响应头里写入响应时间
		.use(express.json()) // 解析json格式的请求

	useSessionRedis(app) // 使用cookie
	useStaticServer(app) // 静态资源服务
	useHttpServer(app) // 包一层http server，使可以停止，方便单测
	useSwaggerUI(app) // api文档

	await useSequelize() // mysql的ORM框架
	await useController(app) // 动态注册controller

	logger.debug(`项目启动：${Math.ceil(performance.now() - launchStart)}毫秒`)
}

const stopApp = async (): Promise<void> => {
	scheduler.stopScheduler()
	server.close()
	redis.disconnect()
	await rbac.close()
}

if (process.env.NODE_ENV !== 'testing') void launchApp() // 非单测时启动项目

export { launchApp, stopApp } // 暴露给单测手动调用
