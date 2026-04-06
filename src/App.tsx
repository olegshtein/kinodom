import './styles'
import { BrowserRouter, Route, Routes } from 'react-router'
import { MainPage } from '@/components/MainPage/MainPage'
import { LayoutPage } from '@/components/LayoutPage/LayoutPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/movies/:movie" element={<div>Страница фильма</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
