import axios from 'axios'

const { VITE_API_BASE, VITE_DOMAIN, VITE_PORT } = import.meta.env

// baseUrl
axios.defaults.baseURL = `http://${VITE_DOMAIN}:${VITE_PORT}/${VITE_API_BASE}/`
// 30s 超时
axios.defaults.timeout = 30000

export { axios }

export const defaultOption = {
	useLoading: true,
	useMessage: true,
	handleError: false
} as const
