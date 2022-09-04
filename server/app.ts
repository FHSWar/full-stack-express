import cors from 'cors'

import express from 'express'
import swaggerUi from 'swagger-ui-express'

import {
	swaggerSpec,
	useDotenv,
	useController,
	useLogger,
	useSequelize
} from '~util'

const launchApp = async (): Promise<void> => {
	global.logger = useLogger(process.env.LOG_TARGET)

	const app = express()
		.use(cors())
		.use(express.json())
		.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

	await useSequelize()
	await useController(app)
}

useDotenv()
void launchApp()
