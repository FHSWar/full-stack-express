import { defaultOption } from './config'
import { query } from './query'

import type { AxiosResponse, AxiosRequestConfig } from 'axios'

export const get = <T, R = AxiosResponse<T>>(
	url: string,
	params: T,
	options: AxiosRequestConfig = defaultOption
): Promise<R> => {
	const config = {
		method: 'get',
		url,
		params,
		...defaultOption,
		...options
	}

	return query(config, config.handleError)
}
