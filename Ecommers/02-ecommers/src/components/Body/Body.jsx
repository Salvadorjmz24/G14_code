import { useState, useEffect } from 'react'
import './body.css'
import axios from 'axios'

const Body = () => {
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  const getProductos = async () => {
    const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
    console.log('api', res.data)
    setProducto(res.data)
  }
  useEffect(() => {
    setTimeout(() => {
      getProductos()
      setLoading(false)
    }, [2000])
  }, [])
  return (
    <div>Body</div>
  )
}

export default Body
