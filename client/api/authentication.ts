import { post } from '~utils/axios'

export const login = (): Promise<string> => post('authentication/login', null)

export const logout = () => post('authentication/logout', null)

export const register = () => post('authentication/register', null)

export const test = () => post('nest/nest-two/sayHi', null)
