import express from 'express'

const subRouter = express.Router()

subRouter.post('/sayHi', (req, res) => {
	res.send('这个feature帅死了')
})

export default subRouter
