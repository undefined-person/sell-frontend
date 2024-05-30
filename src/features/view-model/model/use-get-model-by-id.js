import { useParams } from 'react-router-dom'

import { useGetModelQuery } from '../../../entities/model'

export const useGetModelById = () => {
  const { id } = useParams()
  const { data, isError, isPending } = useGetModelQuery({ id })

  return {
    isError,
    isPending,
    model: data,
  }
}
