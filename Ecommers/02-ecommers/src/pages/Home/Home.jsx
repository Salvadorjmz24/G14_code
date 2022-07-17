import React from 'react'
import Body from '../../components/Body/Body'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { ProductosProvider } from '../../context/ProductosContext'


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
        <div>
          <Footer />
        </div>
      </ProductosProvider>
    </div>
  )
}

export default Home
