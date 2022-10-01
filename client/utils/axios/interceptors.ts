import {} from 'element-plus'
import { axios } from './config'

// const startLoading = () => {
// 	setTimeout(() => {}, 1000)
// }

axios.interceptors.request.use(
	(config) => {
		// if (timestamp && Number(timestamp) > Date.now()) useLogout()
		// const { useLoading } = config
		// eslint-disable-next-line no-param-reassign
		config.headers = {
			...config.headers
		}

		// if (useLoading) startLoading()

		return config
	},
	(error) => {
		console.log('interceptors request error:', error)
	}
)

axios.interceptors.response.use(
	(response) => {
		const { config } = response

		console.log(
			'axios.interceptors.response.config',
			config,
			'\naxios.interceptors.response',
			response
		)

		return response
	},
	(error) => {
		// 不是AxiosError就离谱了
		if (!axios.isAxiosError(error)) {
			console.log('interceptors unexpected error:', error)
			throw error
		}

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
