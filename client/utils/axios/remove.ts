import { defaultOption } from './config'
import { query } from './query'

import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export const remove = <T, R = AxiosResponse<T>>(
	url: string,
	params: T,
	options: AxiosRequestConfig = defaultOption
): Promise<R> => {
	const config = {
		method: 'delete',
		url,
		data: params,
		...defaultOption,
		...options
	}

	return query(config, config.handleError)
}
