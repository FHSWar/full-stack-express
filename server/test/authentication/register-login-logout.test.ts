import request from 'supertest'

import { launchApp, stopApp } from '../../app'

beforeAll(async () => {
	await launchApp()

	// 有这个drop单测就很方便了
	await rbac.drop({ logging: false })
	await rbac.sync({ logging: false })
})

afterAll(async () => {
	await stopApp()
})

describe('auth/login', () => {
	it('should login', async () => {
		const res = await request('http://localhost:7878').post(
			'/api/authentication/login'
		)
		expect(res.statusCode).toEqual(200)
	})
})
