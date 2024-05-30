import { cn } from '../utils/cn'
import { Spinner } from './spinner'

export const PageSpinner = ({ className }) => {
  return (
    <div className={cn('fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-white', className)}>
      <Spinner className="w-20 h-20" />
    </div>
  )
}
