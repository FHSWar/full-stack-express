import { resolve } from 'path'

import express from 'express'

import { getFileRecursively } from 'shared'

import type { Express } from 'express'

const router = express.Router()

export const mountController = async (app: Express): Promise<void> => {
	const controllerAbsolutePath = resolve('controller')

	const filePathArr = getFileRecursively(controllerAbsolutePath)

	// router.use('/authentication', subRouter)
	for (const filePath of filePathArr) {
		const result = await import(filePath)

		const relativeFilePath = filePath.replace(controllerAbsolutePath, '')
		const prefixByFolderPath = relativeFilePath.slice(
			0,
			relativeFilePath.lastIndexOf('/')
		)

		router.use(prefixByFolderPath, result.default)
	}

	const port = process.env.PORT !== undefined ? process.env.PORT : 7878

	app.use('/api', router).listen(port, () => {
		console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
	})
}
