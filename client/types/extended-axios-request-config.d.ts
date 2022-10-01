import type { AxiosRequestConfig } from 'axios'

export interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
	useLoading?: boolean
	useMessage?: boolean
	handleError?: boolean
	useFormData?: boolean
}

