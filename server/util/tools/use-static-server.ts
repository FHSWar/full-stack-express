import express from 'express'

import type { Express } from 'express'

export const useStaticServer = (app: Express, STATIC_PATH: string): void => {
	app.use(express.static(STATIC_PATH)) // 静态资源服务
}
