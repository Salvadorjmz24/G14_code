import { Link } from 'react-router-dom'
import { useProductosContext } from '@/context/ProductosContext'
import FadeLoader from 'react-spinners/FadeLoader'
import './body.css'

const Body = () => {
  const context = useProductosContext()

  const validacionUrl = (url) => {
    if (typeof url !== 'string') {
      return false
    }
    // eslint-disable-next-line no-useless-escape
    return (url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null)
  }


  return (
    <section className='tarjetas'>
      {context.loading
        ? <FadeLoader color='#000000' loading={context.loading} size={100} />
        : context.productos.filter(producto => {
          if (context.buscarProducto === '') {
            return producto
          } else if (producto.product_name.toLowerCase().includes(context.buscarProducto)) {
            return producto
          } return null
        }).map((producto) => (
          <div
            className='app-header'
            key={producto._id}
            onClick={() => {
              context.setProductoSeleccionado(producto)
              console.log(producto)
            }}
          >
            <div className='child'>
              <div className='card'>
                <img className='imagen' src={validacionUrl(producto.image) ? producto.image : validacionUrl(producto.images) ? producto.images : producto.images || 'https://i.pinimg.com/564x/e4/8d/66/e48d66ca946a9d1e4eb61b761f9528e0.jpg'} alt='' />
                <p> {`${producto.product_name} `}</p>
                <p>{`Brand: ${producto.brand} `}</p>
                <p>{`Price: $ ${producto.price} `}</p>
                {/* Duda */}
                <Link
                  className='btn btn-dark'
                  to={{
                    pathname: `/${producto._id}`
                  }}
                >View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
    </section>
  )
}

export default Body
