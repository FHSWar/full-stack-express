import { post } from '~utils/axios'

export const login = (params: any) => post('authentication/login', params)
export const test = () => post('nest/nest-two/sayHi')
