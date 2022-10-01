import type { AxiosRequestConfig } from 'axios'

// https://stackoverflow.com/questions/58777924/axios-typescript-customize-axiosrequestconfig
declare module 'axios' {
	export interface AxiosRequestConfig {
		useLoading: boolean
		useMessage: boolean
		handleError: boolean
		useFormData: boolean
	}
}

