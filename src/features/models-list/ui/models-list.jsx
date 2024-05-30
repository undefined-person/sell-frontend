import { Link } from 'react-router-dom'

import { useGetModels } from '../model/use-get-models'
import { PageSpinner } from '../../../shared/ui/page-spinner'
import { getImageUrl } from '../../../shared/utils/get-image-url'
import { Button } from '../../../shared/ui/button'

export function ModelsList() {
  const { handleNextPage, handlePrevPage, isError, isNextPage, isPending, isPrevPage, models } = useGetModels()

  if (isPending) return <PageSpinner />

  if (isError) return <div>Something went wrong</div>

  return (
    <div>
      <div className="grid grid-cols-5">
        {models.map((model) => (
          <Link key={model._id} to={`/view-model/${model._id}`}>
            <div className="relative">
              <img src={getImageUrl(model.images)} alt={model.name} />
              <div
                className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 p-2 flex justify-between"
                style={{ backdropFilter: 'blur(10px)' }}>
                <h2 className="text-xl font-semibold leading-none tracking-tight">{model.name}</h2>
                <div>{model.price}₴</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <Button disabled={!isPrevPage} onClick={handlePrevPage}>
          Prev
        </Button>
        <Button disabled={!isNextPage} onClick={handleNextPage}>
          Next
        </Button>
      </div>
    </div>
  )
}
