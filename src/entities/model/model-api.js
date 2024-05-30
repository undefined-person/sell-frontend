import { $api } from '../../shared/api/api'

export const getModels = async (page) => {
  const response = await $api.get('/model', {
    params: {
      page,
    },
  })

  return response.data
}

export const getModel = async (id) => {
  const response = await $api.get(`/model/${id}`)

  return response.data
}

export const buyModel = async (id) => {
  const response = await $api.post('/buy-model', { id })

  return response.data
}
