import { post } from '~utils/axios'

export const login = () => post('authentication/login')
export const test = () => post('nest/nest-two/sayHi')
