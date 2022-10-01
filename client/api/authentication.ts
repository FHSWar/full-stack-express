import { post } from '~utils/axios'

export const login = (params: null): Promise<string> =>
	post('authentication/login', params)

export const logout = (params: null) => post('authentication/logout', params)

export const register = (params: null) =>
	post('authentication/register', params)

export const test = (params: null) => post('nest/nest-two/sayHi', params)
