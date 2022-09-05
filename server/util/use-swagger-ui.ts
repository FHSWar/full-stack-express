import { resolve } from 'path'

import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import type { Express } from 'express'

const swaggerDefinition = {
	openapi: '3.0.0',
	info: {
		title: 'Express API for JSONPlaceholder',
		version: '1.0.0'
	}
}

const options = {
	swaggerDefinition,
	// Paths to files containing OpenAPI definitions
	apis: [resolve('public/doc/*.ts')]
}

export const useSwaggerUI = (app: Express): void => {
	const swaggerSpec = swaggerJSDoc(options)

	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}
