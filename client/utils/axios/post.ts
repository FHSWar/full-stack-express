import { defaultOption } from './config'
import { query } from './query'

import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export const post = async <T, R = AxiosResponse<T>>(
	url: string,
	params: T,
	options: AxiosRequestConfig = defaultOption
): Promise<R> => {
	options
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

	return query<R>(config, options.handleError)
}
