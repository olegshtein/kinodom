import { Outlet } from 'react-router'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

export const LayoutPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}