import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

import { sayHi } from 'shared'
import router from 'controller/authentication'
dotenv.config()

const app = express()

const port = process.env.PORT
sayHi()
app
	.use(cors())
	.use('/api', router)
	.listen(port, () => {
		if (port !== undefined)
			console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
	})
