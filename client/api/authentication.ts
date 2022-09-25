import { post } from '~utils/axios'

export const login = (params: any) => post('authentication/login', params)
export const logout = (params: any) => post('authentication/logout', params)
export const register = (params: any) => post('authentication/register', params)
export const test = () => post('nest/nest-two/sayHi')
