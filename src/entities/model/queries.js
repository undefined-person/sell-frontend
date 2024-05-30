import { useQuery } from '@tanstack/react-query'
import { getModels, getModel } from './model-api'

const modelsKey = ['models']

export function useGetModelsQuery({ page }) {
  return useQuery({
    queryKey: [modelsKey, page],
    queryFn: () => getModels(page),
  })
}

export function useGetModelQuery({ id }) {
  return useQuery({
    queryKey: [modelsKey, id],
    queryFn: () => getModel(id),
  })
}
