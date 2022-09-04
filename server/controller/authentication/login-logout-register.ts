import express from 'express'

const subRouter = express.Router()

subRouter.post('/login', (req, res) => {
	console.log('req', req.body, '\n', req.baseUrl, req.url)
	res.send('login not done')
})

export default subRouter
