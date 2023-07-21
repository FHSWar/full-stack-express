import express from 'express'

const subRouter = express.Router()

subRouter.post('/sayHi', (req, res) => {
	toClient(res, '这个feature超级帅')
})

subRouter.get('/wow', (req, res) => {
	toClient(res, '这个feature超级帅')
})

export default subRouter
