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

	// 模拟登陆后获取cookie
	res.cookie('connect.sid', req.sessionID)
	req.session.userInfo = { um: 'DUJINHUA506' }

	toClient(res, 'mock login')
})

subRouter.post('/logout', async (req, res) => {
	// 清除客户端cookie（去掉钥匙）
	res.clearCookie('connect.sid')
	// 清除服务端session（清除本体）
	req.session.destroy(() => {
		toClient(res, '已销毁当前session')
	})
})

subRouter.post('/register', async (_, res) => {
	toClient(res, 'mock register')
})

export default subRouter
