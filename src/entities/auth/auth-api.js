import { $api } from '../../shared/api/api'

export const signIn = async ({ username, password }) => {
  const response = await $api.post('/customer/sign-in', { username, password })
  return response.data
}

export const signUp = async ({ username, password }) => {
  const response = await $api.post('/customer/sign-up', { username, password })
  return response.data
}

export const getSession = async () => {
  const response = await $api.get('/customer/session')
  return response.data
}
