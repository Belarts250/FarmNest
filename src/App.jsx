import { Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Cart from './pages/cart/Cart'
import Pay from './pages/pay/pay'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/pay' element={<Pay />} />
    </Routes>
    </>
  )
}

export default App
