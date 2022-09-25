import express from 'express'

// import Role from '~model/role.model'

const subRouter = express.Router()

subRouter.post('/login', async (req, res) => {
	// const fhs = Role.build({ name: 'FHS', description: 'Working hard' })
	// try {
	// 	await fhs.save()
	// 	toClient(res, 'login not done2')
	// } catch (e) {
	// 	toClient(res, (e as any).toString(), 403)
	// }

	// TODO：用户登陆校验
	const userSession = await redis.hget('loginUser', 'DUJINHUA506')
	if (userSession !== undefined && userSession !== req.sessionID) {
		logger.info('同一用户不同会话进行登陆操作s')
	}

	// 模拟登陆后设置cookie
	res.cookie('sid', req.sessionID)
	req.session.userInfo = { um: 'DUJINHUA506' }

	// 做单用户登陆需要记录
	await redis.hset('loginUser', { DUJINHUA506: req.sessionID })

	toClient(res, 'mock login')
})

subRouter.post('/logout', async (req, res) => {
	// 清除客户端cookie（去掉钥匙）
	res.clearCookie('sid')
	// 清除服务端session（清除本体）
	req.session.destroy(() => {
		toClient(res, '已销毁当前session')
	})
})

subRouter.post('/register', async (_, res) => {
	const keys = await redis.keys('*')
	// const values = await redisSession.mget(keys)

	console.log('values', keys)
	toClient(res, 'mock register')
})

export default subRouter
