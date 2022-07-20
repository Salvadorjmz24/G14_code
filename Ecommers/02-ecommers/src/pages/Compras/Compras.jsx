import { useLocation, Link } from 'react-router-dom'
const Compras = () => {
  const location = useLocation()
  return (

    <>
      <img className='image-detail' src='https://i.pinimg.com/564x/ec/41/bb/ec41bbdb0073809412f43f45c8f36b1d.jpg' alt='imagen producto' />
      <p>Me aburrí de compras me iré a home :{location.pathname} </p>
      <p><Link to='/'>Regresa al Home</Link></p>
    </>
  )
}

export default Compras
