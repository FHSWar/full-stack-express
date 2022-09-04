import express from 'express'

import Role from '~model/role.model'

const subRouter = express.Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
subRouter.post('/login', async (req, res) => {
	const jane = Role.build({ name: 'FHS', description: 'Working hard' })
	await jane.save()
	// console.log('req', req.body, '\n', req.baseUrl, req.url)
	res.send('login not done')
})

export default subRouter
