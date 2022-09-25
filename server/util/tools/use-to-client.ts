import type { Response } from 'express'

type ContentType =
	| string
	| {
			message: string
			[key: string]: any
	  }

const statusCodeArr = [
	100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300,
	301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407,
	408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424,
	425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508,
	509, 510, 511
] as const
type StatusCode = typeof statusCodeArr[number]

// 返回内容统一为{message: xxx, ...}的格式
const toClient = (
	res: Response,
	content: ContentType,
	status: StatusCode = 200
): void => {
	const result = typeof content === 'string' ? { message: content } : content

	Number(status) !== undefined
		? res.status(status).send(result)
		: res.send(result)
}

export type ToClient = typeof toClient

export const useToClient = (): void => {
	global.toClient = toClient
}
