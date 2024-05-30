import { Routes, Route } from 'react-router-dom'

import { ROUTES } from '../../shared/const/routes'

import { HomePage } from '../../pages/home-page'
import { ViewModelPage } from '../../pages/view-model-page'
import { SignInPage } from '../../pages/sign-in-page'
import { SignUpPage } from '../../pages/sign-up-page'
// import { ProtectedPage } from '../../features/auth/ui/protected-page'
import { MainLayout } from '../../shared/layouts/main-layout'

export const RouteProvider = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          // <ProtectedPage>
          <MainLayout>
            <HomePage />
          </MainLayout>
          // </ProtectedPage>
        }
      />
      <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
      <Route
        path={`${ROUTES.VIEW_MODEL}/:id`}
        element={
          // <ProtectedPage>
          <MainLayout>
            <ViewModelPage />
          </MainLayout>
          // </ProtectedPage>
        }
      />
    </Routes>
  )
}
