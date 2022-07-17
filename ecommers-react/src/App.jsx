import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Home from "./pages/Home"
import Categorias from "./pages/Categorias"
import Login from "./pages/Login";
import ProductoDetalle from "./pages/ProductoDetalle"
import Footer from "./components/Footer";
import Error404 from "./pages/Error404";
import './App.css'
import axios from "axios";



function App() {

  const [producto, setproductos] = useState([]);
  // const [loading, setloading] = useState(false);

  const getProductos = async () => {
    // setloading(false)
    const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
    console.log('api', res.data);
    setproductos(res.data)
    // setloading(true)
  }


  useEffect(() => {
    getProductos();
  }, [])

  useEffect(() => {
    console.log(producto);
  }, [producto])


  return (

    <div className="App">
      <Header producto={producto} productosFiltrados={(productosFiltrados) => setproductos(productosFiltrados)} getdata={getProductos}  />
      <header className="images-container">
        <Routes>
          <Route path="/" element={<Home producto={producto} productosFiltrados={(productosFiltrados) => setproductos(productosFiltrados)} getdata={getProductos}   />} />
          <Route path="/categorias" element={<Categorias />}>
            <Route path=":pid" element={<ProductoDetalle />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </header>
      <Footer />
    </div>
  )
}

export default App
