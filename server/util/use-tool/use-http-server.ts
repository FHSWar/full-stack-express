import { createServer } from 'http'

import type { Express } from 'express'

export const useHttpServer = (app: Express): void => {
	// 不放到函数执行的时候再拿， 会是undefined
	const { PORT } = process.env

	if (PORT === undefined) throw new Error('缺少监听的端口号❗️')

	const server = createServer(app).listen(PORT, () => {
		logger.info(`⚡️[server]: Server is running at http://localhost:${PORT}`)
	})

	global.server = server
}
