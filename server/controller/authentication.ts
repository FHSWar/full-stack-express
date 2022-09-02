import express from 'express'

const router = express.Router()
const subRouter = express.Router()
subRouter.get('/login', (req, res) => {
	res.send('123123')
})
router.use('/authentication', subRouter)

export default router
