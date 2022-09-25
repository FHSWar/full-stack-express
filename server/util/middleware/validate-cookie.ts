import type { RequestHandler } from 'express'

export const validateCookie = (): RequestHandler => {
	const apiWhiteList = [
		'/api/authentication/login',
		'/api/authentication/logout',
		'/api/authentication/register'
	]

	return async (req, res, next) => {
		// 白名单接口豁免
		if (apiWhiteList.includes(req.url)) return next()

		// sess:LVPti7kmLdNTh37bul9uQcvRqF-IZgH-
		if (req.cookies.sid === undefined)
			return toClient(res, '无权限，请登陆', 403)

		// TODO：非白名单校验session内容正确性
		req.session.regenerate((err) => {
			err === null ? next() : toClient(res, '刷新cookie出错', 403)
		})
	}
}
