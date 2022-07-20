
import { useLocation, Link } from 'react-router-dom'

const Error404 = () => {
  const location = useLocation()
  return (
    <div>
      <img src='https://www.pinterest.com.mx/pin/360639882664728801/' alt='' />
      <p>No encontre:{location.pathname} </p>
      <p><Link to='/'>Regresa al Home</Link></p>
    </div>

  )
}

export default Error404
