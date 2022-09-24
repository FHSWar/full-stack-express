import axios from 'axios'

const { VITE_API_BASE, VITE_DOMAIN, VITE_PORT } = import.meta.env

// baseUrl
axios.defaults.baseURL = `http://${VITE_DOMAIN}:${VITE_PORT}/${VITE_API_BASE}/`
// 30s超时
axios.defaults.timeout = 30000
// 使前端允许跨域携带cookie
axios.defaults.withCredentials = true

export { axios }

export const defaultOption = {
	useLoading: true,
	useMessage: true,
	handleError: false
} as const
