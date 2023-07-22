import { createServer } from 'http'

import type { Express } from 'express'

export const useHttpServer = (app: Express, PORT: number): void => {
	// 不放到函数执行的时候再拿， 会是undefined
	const server = createServer(app).listen(PORT)

	global.server = server
}
