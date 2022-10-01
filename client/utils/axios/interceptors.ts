import {} from 'element-plus'
import { axios } from './config'

import type { ExtendedAxiosRequestConfig } from '~types/index'

// const startLoading = () => {
// 	setTimeout(() => {}, 1000)
// }

axios.interceptors.request.use(
	(config: ExtendedAxiosRequestConfig) => {
		// if (timestamp && Number(timestamp) > Date.now()) useLogout()
		// const { useLoading } = config
		config.headers = {
			...config.headers
		}

		// if (useLoading) startLoading()

		return config
	},
	(error) => {
		console.log(error)
	}
)

axios.interceptors.response.use(
	(response) => {
		const { config, data } = response

		console.log(
			'axios.interceptors.response.config',
			config,
			'\naxios.interceptors.response',
			response
		)

		return data
	},
	(error) => {
		const { config, response } = error

		console.log(
			'axios.interceptors.response error config',
			config,
			'\naxios.interceptors.response error response',
			response
		)
		// 错误一定弹，token过期直接退出

		return Promise.reject(error.toString())
	}
)

export default axios
