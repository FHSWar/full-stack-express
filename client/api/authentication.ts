import { post } from '~utils/axios'

export const login = (params: Record<string, never>) =>
	post('authentication/login', params)

export const logout = (params: Record<string, never>) =>
	post('authentication/logout', params)

export const register = (params: Record<string, never>) =>
	post('authentication/register', params)

export const test = () => post('nest/nest-two/sayHi')
