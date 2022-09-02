import axios from './interceptors'

import type { ExtendedAxiosRequestConfig } from '~types/index'

const defaultOption = {
	useLoading: true,
	useMessage: true,
	handleError: false
} as const

export const get = (
	url = '',
	params = {},
	options: ExtendedAxiosRequestConfig = {}
) => {
	const config = {
		method: 'get',
		url,
		params,
		...defaultOption,
		...options
	}
	return new Promise((resolve, reject) => {
		axios(config as ExtendedAxiosRequestConfig)
			.then((res) => {
				resolve(res)
			})
			.catch((error) => {
				if (options.handleError) return reject(error)
				console.warn('silent get error', error.toString())
			})
	})
}

export const post = (
	url = '',
	params = {},
	options: ExtendedAxiosRequestConfig = {}
) => {
	let config: any
	if (options.useFormData) {
		config = {
			method: 'post',
			url,
			data: params,
			headers: { 'Content-Type': 'multipart/form-data; boundary=boundary' },
			...defaultOption,
			...options
		}
	} else {
		config = {
			method: 'post',
			url,
			data: { ...params },
			...defaultOption,
			...options
		}
	}
	console.log('post config', config)

	return new Promise((resolve, reject) => {
		axios(config as ExtendedAxiosRequestConfig)
			.then((res) => {
				resolve(res)
			})
			.catch((error) => {
				if (options.handleError) return reject(error)
				console.warn('silent post error', error.toString())
			})
	})
}

export const put = (
	url = '',
	params = {},
	options: ExtendedAxiosRequestConfig = {}
) => {
	const config = {
		method: 'put',
		url,
		data: params,
		...defaultOption,
		...options
	}
	return new Promise((resolve, reject) => {
		axios(config as ExtendedAxiosRequestConfig)
			.then((res) => {
				resolve(res)
			})
			.catch((error) => {
				if (options.handleError) return reject(error)
				console.warn('silent get error', error.toString())
			})
	})
}

export const remove = (
	url = '',
	params = {},
	options: ExtendedAxiosRequestConfig = {}
) => {
	const config = {
		method: 'delete',
		url,
		data: params,
		...defaultOption,
		...options
	}
	return new Promise((resolve, reject) => {
		axios(config as ExtendedAxiosRequestConfig)
			.then((res) => {
				resolve(res)
			})
			.catch((error) => {
				if (options.handleError) return reject(error)
				console.warn('silent get error', error.toString())
			})
	})
}

export const update = (
	url = '',
	params = {},
	options: ExtendedAxiosRequestConfig = {}
) => {
	const config = {
		method: 'patch',
		url,
		data: params,
		...defaultOption,
		...options
	}
	return new Promise((resolve, reject) => {
		axios(config as ExtendedAxiosRequestConfig)
			.then((res) => {
				resolve(res)
			})
			.catch((error) => {
				if (options.handleError) return reject(error)
				console.warn('silent get error', error.toString())
			})
	})
}

export default axios
