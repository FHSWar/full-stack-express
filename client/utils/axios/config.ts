import axios from 'axios'

const {
	VITE_API_BASE: BASE,
	VITE_DOMAIN: DOMAIN,
	VITE_PORT: PORT
} = import.meta.env

if (BASE === undefined || DOMAIN === undefined || PORT === undefined)
	throw new Error('基本变量不能为空❗️')

// baseUrl
axios.defaults.baseURL = `http://${DOMAIN}:${PORT}/${BASE}/`
// 30s超时
axios.defaults.timeout = 30000
// 使前端允许跨域携带cookie
axios.defaults.withCredentials = true

export { axios }

export const defaultOption = {
	useLoading: true,
	useFormData: false,
	useMessage: true,
	handleError: false
} as const
