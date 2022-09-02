import express from 'express'

const router = express.Router()
const subRouter = express.Router()

subRouter.post('/login', (req, res) => {
	res.send('123123')
})

router.use('/authentication', subRouter)

export default router
