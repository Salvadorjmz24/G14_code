import { ProductosProvider } from '../../context/ProductosContext'
import React from 'react'
import Body from '../../components/Body/Body'
import Header from '../../components/Header/Header'

const Home = () => {
  return (
    <div className='home-container'>
      <ProductosProvider>
        <div>
          <Header />
        </div>
        <div>
          <Body />
        </div>
      </ProductosProvider>
    </div>
  )
}

export default Home
