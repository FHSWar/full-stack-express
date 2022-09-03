import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

import { mountController } from '~util/index'

dotenv.config()

const app = express()

app.use(cors())

void mountController(app)
