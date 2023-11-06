import { Route, Routes } from 'react-router-dom'
import { Home, Checkout } from './pages'

const AppRouter = () => (
  <Routes>
    <Route path='*' element={<h1>404</h1>} />
    <Route index element={<Home />} />
    <Route path='/checkout' element={<Checkout />} />
  </Routes>
)

export default AppRouter