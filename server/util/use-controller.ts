import { resolve } from 'path'

import express from 'express'

import { getFileRecursively } from 'shared'

import type { Express } from 'express'

const router = express.Router()

// 挂载controller中的express路由们，根据目录自动加api prefix
export const useController = async (app: Express): Promise<void> => {
	const controllerAbsolutePath = resolve('controller')

	const filePathArr = getFileRecursively(controllerAbsolutePath)

	for (const filePath of filePathArr) {
		const fileObj = await import(filePath)

		const relativeFilePath = filePath.replace(controllerAbsolutePath, '')
		const prefixByFolderPath = relativeFilePath.slice(
			0,
			relativeFilePath.lastIndexOf('/')
		)

		router.use(prefixByFolderPath, fileObj.default)
	}

	const port = process.env.PORT !== undefined ? process.env.PORT : 80

	app.use('/api', router).listen(port, () => {
		logger.info(`⚡️[server]: Server is running at http://localhost:${port}`)
	})
}
