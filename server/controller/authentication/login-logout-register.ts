import express from 'express'

import Role from '~model/role.model'

const subRouter = express.Router()

subRouter.post('/login', async (_, res) => {
	const fhs = Role.build({ name: 'FHS', description: 'Working hard' })
	try {
		await fhs.save()
		toClient(res, 'login not done2')
	} catch (e) {
		toClient(res, (e as any).toString(), 403)
	}
})

export default subRouter
