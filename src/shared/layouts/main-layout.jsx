import { Header } from '../ui/header'

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
