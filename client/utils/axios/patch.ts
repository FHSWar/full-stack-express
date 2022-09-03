import { defaultOption } from './config'
import axios from './interceptors'

import type { ExtendedAxiosRequestConfig } from '~types/index'

export const patch = (
	url = '',
	params = {},
	options: ExtendedAxiosRequestConfig = {}
) => {
	const config = {
		method: 'patch',
		url,
		data: params,
		...defaultOption,
		...options
	}
	return new Promise((resolve, reject) => {
		axios(config as ExtendedAxiosRequestConfig)
			.then((res) => {
				resolve(res)
			})
			.catch((error) => {
				if (options.handleError) return reject(error)
				console.warn('silent get error', error.toString())
			})
	})
}
