import { defaultOption } from './config'
import { query } from './query'

import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export const put = <T, R = AxiosResponse<T>>(
	url: string,
	params: T,
	options: AxiosRequestConfig = defaultOption
): Promise<R> => {
	const config = {
		method: 'put',
		url,
		data: params,
		...defaultOption,
		...options
	}

	return query(config, config.handleError)
}
