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
                <img className='imagen' src={validacionUrl(producto.image) ? producto.image : validacionUrl(producto.images) ? producto.images : producto.images || 'https://cf.geekdo-images.com/camo/cba429883803dadea626df689cdbf3ddc0dc1bba/68747470733a2f2f692e696d6775722e636f6d2f456161485557462e6a7067'} alt='' />
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
