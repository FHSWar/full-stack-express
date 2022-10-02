import axios from './interceptors'

import type { AxiosRequestConfig } from 'axios'

export const query = async <T>(
	config: AxiosRequestConfig,
	handleError: boolean
) => {
	try {
		const res = await axios(config)
		return res.data as T
	} catch (error) {
		if (handleError) throw error

		if (axios.isAxiosError(error)) console.error(error.toString())
		else console.error('unexpected error: ', error)

		return '错误' as T
	}
}
