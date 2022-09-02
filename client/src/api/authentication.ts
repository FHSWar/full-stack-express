import { get } from '@/utils/axios/methods'

export const login = () => get('authentication/login')
