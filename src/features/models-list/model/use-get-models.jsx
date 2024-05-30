import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useGetModelsQuery } from '../../../entities/model'

export const useGetModels = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { data, isPending, isError } = useGetModelsQuery({
    page: searchParams.get('page'),
  })

  const handleNextPage = () => {
    setSearchParams({ page: Number(searchParams.get('page')) + 1 })
  }

  const handlePrevPage = () => {
    setSearchParams({ page: Number(searchParams.get('page')) - 1 })
  }

  useEffect(() => {
    if (!searchParams.get('page')) {
      setSearchParams({ page: 1 })
    }
  }, [])

  return {
    models: data?.models,
    isNextPage: data?.isNextPage,
    isPrevPage: data?.isPrevPage,
    isPending,
    isError,
    handleNextPage,
    handlePrevPage,
  }
}
