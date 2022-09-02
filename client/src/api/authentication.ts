import { post } from '@/utils/axios/methods'

export const login = () => post('authentication/login')
