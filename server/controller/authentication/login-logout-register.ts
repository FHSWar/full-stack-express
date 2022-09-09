import express from 'express'

// import Role from '~model/role.model'

const subRouter = express.Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
subRouter.post('/login', async (req, res) => {
	// const fhs = Role.build({ name: 'FHS', description: 'Working hard' })
	// await fhs.save()
	toClient(res, 'login not done2')
})

export default subRouter
