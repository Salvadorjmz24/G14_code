import { Routes, Route } from 'react-router-dom'
import './App.css'
import Error404 from './components/404Error/Error404'
import Categorias from './components/Categorias/Categorias'
import Footer from '@/components/Footer/Footer'
import ProductoDetalle from './components/ProductoDetalle/ProductoDetalle'
import Kids from './components/Categorias/Subcategorias/Kids'
import Automotive from './components/Categorias/Subcategorias/Automotive'
import Baby from './components/Categorias/Subcategorias/Baby'
import Beauty from './components/Categorias/Subcategorias/Beauty'
import Books from './components/Categorias/Subcategorias/Books'
import Clothing from './components/Categorias/Subcategorias/Clothing'
import Computers from './components/Categorias/Subcategorias/Computers'
import Electronics from './components/Categorias/Subcategorias/Electronics'
import Games from './components/Categorias/Subcategorias/Games'
import Garden from './components/Categorias/Subcategorias/Garden'
import Grocery from './components/Categorias/Subcategorias/Grocery'
import Health from './components/Categorias/Subcategorias/Health'
import HomeCat from './components/Categorias/Subcategorias/HomeCat'
import Industrial from './components/Categorias/Subcategorias/Industrial'
import Jewerly from './components/Categorias/Subcategorias/Jewerly'
import Movies from './components/Categorias/Subcategorias/Movies'
import Music from './components/Categorias/Subcategorias/Music'
import Shoes from './components/Categorias/Subcategorias/Shoes'
import Sports from './components/Categorias/Subcategorias/Sports'
import Tools from './components/Categorias/Subcategorias/Tools'
import Toys from './components/Categorias/Subcategorias/Toys'
import Login from './pages/Login/Login'
import Singup from './pages/Signup/Signup'
import Compras from './pages/Compras/Compras'
import Home from './pages/Home'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ProductoDetalle />} />
        <Route path='/categorias' element={<Categorias />} />
        <Route path='/categorias/categoria/Kids' element={<Kids />} />
        <Route path='/categorias/categoria/Automotive' element={<Automotive />} />
        <Route path='/categorias/categoria/Baby' element={<Baby />} />
        <Route path='/categorias/categoria/Beauty' element={<Beauty />} />
        <Route path='/categorias/categoria/Books' element={<Books />} />
        <Route path='/categorias/categoria/Clothing' element={<Clothing />} />
        <Route path='/categorias/categoria/Computers' element={<Computers />} />
        <Route path='/categorias/categoria/Electronics' element={<Electronics />} />
        <Route path='/categorias/categoria/Games' element={<Games />} />
        <Route path='/categorias/categoria/Garden' element={<Garden />} />
        <Route path='/categorias/categoria/Grocery' element={<Grocery />} />
        <Route path='/categorias/categoria/Health' element={<Health />} />
        <Route path='/categorias/categoria/HomeCat' element={<HomeCat />} />
        <Route path='/categorias/categoria/Industrial' element={<Industrial />} />
        <Route path='/categorias/categoria/Jewerly' element={<Jewerly />} />
        <Route path='/categorias/categoria/Movies' element={<Movies />} />
        <Route path='/categorias/categoria/Music' element={<Music />} />
        <Route path='/categorias/categoria/Shoes' element={<Shoes />} />
        <Route path='/categorias/categoria/Sports' element={<Sports />} />
        <Route path='/categorias/categoria/Tools' element={<Tools />} />
        <Route path='/categorias/categoria/Toys' element={<Toys />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Singup />} />
        <Route path='/compras' element={<Compras />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
