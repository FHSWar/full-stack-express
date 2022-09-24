import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import responseTime from 'response-time'

import {
	useController,
	useCookie,
	useDotenv,
	useHttpServer,
	useSequelize,
	useSwaggerUI,
	useToClient,
	useWinston
} from '~util'

const launchApp = async (): Promise<void> => {
	const { LOG_PATH, STATIC_PATH } = process.env

	if (STATIC_PATH === undefined) throw new Error('静态资源路径不能为空❗️')

	global.logger = useWinston(LOG_PATH)

	const app = express()
		.use(cors({ credentials: true, origin: true })) // 使后端具有跨域写入cookie的能力
		.use(cookieParser()) // 使express请求中能拿到cookie对象
		.use(responseTime()) // 给相应头里写入响应时间
		.use(express.json()) // 解析json格式的请求
		.use(express.static(STATIC_PATH)) // 静态资源服务

	useToClient() // 统一响应格式
	useCookie(app) // 使用cookie
	useHttpServer(app) // 包一层http server，使可以停止，方便单测
	useSwaggerUI(app) // api文档

	await useSequelize() // mysql的ORM框架
	await useController(app) // 动态注册controller
}

const stopApp = async (): Promise<void> => {
	server.close()
	await redisSession.disconnect()
	await rbac.close()
}

useDotenv() // 读入环境变量

if (process.env.NODE_ENV !== 'test') void launchApp() // 非单测时启动项目

export { launchApp, stopApp } // 暴露给单测手动调用
