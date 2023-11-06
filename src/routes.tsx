// react-router
import { Route, Routes } from 'react-router-dom'

// routes
import {
  Home,
  Checkout,
  Register
} from './pages'

const AppRouter = () => (
  <Routes>
    <Route path='*' element={<h1>404</h1>} />
    <Route index element={<Home />} />
    <Route path='/register' element={<Register />} />
    <Route path='/checkout' element={<Checkout />} />
  </Routes>
)

export default AppRouter