
import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

// #1 Creación del contexto vacio
const ProductosContext = createContext()

// #2 Creacion del proveedor del contexto
// Maneja de donde se obtiene y como se pasa la información

function ProductosProvider(props) {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [buscarProducto, setBuscarProducto] = useState('')
  const [ProductoSeleccionado, setProductoSeleccionado] = useState({})

  const getProductos = async () => {
    const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
    console.log('api', res.data)
    setProductos(res.data)
  }
  useEffect(() => {
    setTimeout(() => {
      getProductos()
      setLoading(false)
    }, [2000])
  }, [])

  const value = {
    productos,
    setProductos,
    buscarProducto,
    setBuscarProducto,
    loading,
    ProductoSeleccionado,
    setProductoSeleccionado
  }

  return (
    <ProductosContext.Provider value={value} {...props} />
  )
}
// 3# Consumidor del contexto - Brinda el acceso a la data para los compoenentes
const useProductosContext = () => {
  const context = useContext(ProductosContext)
  return context
}
// #4 Exportar las funciones del provider y el consumer  para que sean invocadas
export {
  ProductosProvider,
  useProductosContext
}