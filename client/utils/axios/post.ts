import { defaultOption } from './config'
import axios from './interceptors'

import type { AxiosRequestConfig } from 'axios'
import type { ExtendedAxiosRequestConfig } from '~types/index'

export const post = (
	url = '',
	params = {},
	options: ExtendedAxiosRequestConfig = {}
) => {
	let config: AxiosRequestConfig

	if (options.useFormData) {
		config = {
			method: 'post',
			url,
			data: params,
			headers: { 'Content-Type': 'multipart/form-data; boundary=boundary' },
			...defaultOption,
			...options
		}
	} else {
		config = {
			method: 'post',
			url,
			data: { ...params },
			...defaultOption,
			...options
		}
	}

	return new Promise((resolve, reject) => {
		axios(config as ExtendedAxiosRequestConfig)
			.then((res) => {
				resolve(res)
			})
			.catch((error) => {
				if (options.handleError) return reject(error)
				console.warn('silent post error', error.toString())
			})
	})
}
