import express from 'express'

import type { Express } from 'express'

export const useStaticServer = (app: Express): void => {
	const { STATIC_PATH } = process.env
	if (STATIC_PATH === undefined) throw new Error('静态资源路径不能为空❗️')

	app.use(express.static(STATIC_PATH)) // 静态资源服务
}
