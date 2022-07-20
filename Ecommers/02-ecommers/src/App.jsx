import { Routes, Route } from 'react-router-dom'
import './App.css'
import Error404 from './components/404Error/Error404'
import Categorias from './components/Categorias/Categorias'
import Kids from './components/Categorias/SubCategorias/Kids'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import ProductoDetalle from './components/ProductoDetalle/ProductoDetalle'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ProductoDetalle />} />
        <Route path='/categorias' element={<Categorias />} />
        <Route path='/categorias/categorias/Kids' element={<Kids />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
