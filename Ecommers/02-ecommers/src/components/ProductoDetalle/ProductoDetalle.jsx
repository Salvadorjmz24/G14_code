import { useProductosContext } from '@/context/ProductosContext'
import './productoDetalle.css'

const ProductoDetalle = () => {
  const context = useProductosContext()

  const validacionUrl = (url) => {
    if (typeof url !== 'string') {
      return false
    }
    // eslint-disable-next-line no-useless-escape
    return (url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null)
  }

  return (
    <>
      {
        context.setProductoSeleccionado.product_name
          ? <div className='child'>
            <div className='card'>
              <img className='imagen' src={validacionUrl(context.producto.image) ? context.producto.image : validacionUrl(context.producto.images) ? context.producto.images : context.producto.images || 'https://cf.geekdo-images.com/camo/cba429883803dadea626df689cdbf3ddc0dc1bba/68747470733a2f2f692e696d6775722e636f6d2f456161485557462e6a7067'} alt='' />
              <p> {`${context.producto.product_name} `}</p>
              <p>{`Brand: ${context.producto.brand} `}</p>
              <p>{`Price: $ ${context.producto.price} `}</p>
            </div>
          </div>
          : <h1 className='titulo'>Selecciona un producto</h1>
      }
    </>

  )
}

export default ProductoDetalle
