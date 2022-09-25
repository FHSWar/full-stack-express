import express from 'express'

const subRouter = express.Router()

subRouter.post('/sayHi', (req, res) => {
	res.cookie('connect.sid', req.sessionID, {
		maxAge: 60000 * 60 * 24,
		httpOnly: true
	})
	// @ts-expect-error
	if (req.cookies['connect.sid'] !== undefined) req.session.a = 1

	toClient(res, '这个feature超级帅')
})

export default subRouter
