import './styles'
import { BrowserRouter, Route, Routes } from 'react-router'
import { MainPage } from '@/components/MainPage/MainPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movies/:movie" element={<div>Страница фильма</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
