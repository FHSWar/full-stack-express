import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

import { mountController } from '~util'

dotenv.config()

const app = express().use(cors())

void mountController(app)
