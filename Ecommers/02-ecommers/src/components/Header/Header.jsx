import { Link } from 'react-router-dom'
import { useProductosContext } from '@/context/ProductosContext'
import logo from '../../assets/img/logo.png'

import './header.css'

const Header = () => {
  const context = useProductosContext()

  const handleInputInfo = (e) => {
    context.setBuscarProducto(e.target.value)
    console.log('buscarProducto', context.buscadorProducto)
  }

  return (
    <>
      <div className='header-container'>
        <div className='container'>
          <h2>ENVÍO GRATIS en toda la tienda - Entregas de 1 a 3 días hábiles.</h2>
        </div>
        <div className='navbar is-primary'>
          <div className='navbar-brand'>
            <img className='logo-header' img src={logo} alt='logo' />
            <div className='input-box'>
              <div className='main-input'>
                <div className='main-input-container'>
                  <input
                    className='input-header' type='search' placeholder='Search...'
                    onChange={handleInputInfo}
                  />
                </div>
              </div>
            </div>
            <header>
              <nav>
                <ul className='list-links'>
                  <li className='nav-items'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='nav-items'>
                    <Link to='/categorias'>Categorias</Link>
                  </li>
                  <li className='nav-items'>
                    <Link to='/login'>Login</Link>
                  </li>
                  <li className='nav-items'>
                    <Link to='/signup'>Sign up</Link>
                  </li>
                  <li className='nav-items'>
                    <Link to='/compras'>Compras</Link>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header
