import type { AxiosRequestConfig } from 'axios'

export interface ExtendedAxiosRequestConfig extends AxiosRequestConfig<any> {
	useLoading?: boolean
	useMessage?: boolean
	handleError?: boolean
	useFormData?: boolean
}
