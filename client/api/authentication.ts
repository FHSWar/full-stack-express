import { post } from '~utils/axios/methods'

export const login = () => post('authentication/login')
export const test = () => post('nest/nest-2/sayHi')
