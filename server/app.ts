import cors from 'cors'
import express from 'express'

import {
	useController,
	useDotenv,
	useHttpServer,
	useLogger,
	useSequelize,
	useSwaggerUI
} from '~util'

const launchApp = async (): Promise<void> => {
	global.logger = useLogger(process.env.LOG_TARGET)

	const app = express().use(cors()).use(express.json())

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
