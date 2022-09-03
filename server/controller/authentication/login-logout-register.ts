import express from 'express'

const subRouter = express.Router()

subRouter.post('/login', (req, res) => {
	res.send('123123')
})

export default subRouter
