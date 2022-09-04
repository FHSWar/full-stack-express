import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

import { useController, useLogger, useSequelize } from '~util'

const launchApp = async (): Promise<void> => {
	dotenv.config()

	global.logger = useLogger(process.env.LOG_TARGET)

	const app = express().use(cors()).use(express.json())

	await useSequelize()
	await useController(app)
}

void launchApp()
