import { useNavigate } from 'react-router-dom'

import { PageSpinner } from '../../../shared/ui/page-spinner'
import { useSessionQuery } from '../../../entities/auth'
import { ROUTES } from '../../../shared/const/routes'

export function ProtectedPage({ children }) {
  const { isPending, isError } = useSessionQuery()
  const navigate = useNavigate()

  if (isPending) {
    return <PageSpinner />
  }

  if (isError) {
    navigate(ROUTES.SIGN_IN)
  }

  return children
}
