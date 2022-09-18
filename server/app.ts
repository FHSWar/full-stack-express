import cors from 'cors'
import express from 'express'
import responseTime from 'response-time'

import {
	useController,
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
		.use(cors())
		.use(responseTime())
		.use(express.json())
		.use(express.static(STATIC_PATH))

	useToClient()
	await useSequelize()
	await useController(app)
	useHttpServer(app)
	useSwaggerUI(app)
}

const stopApp = async (): Promise<void> => {
	server.close()
	await rbac.close()
}

useDotenv()

if (process.env.NODE_ENV !== 'test') void launchApp()

export { launchApp, stopApp }
