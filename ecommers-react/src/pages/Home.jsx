import { useState, useEffect } from "react"
import axios from 'axios'
import '../Styles/home.css'

const Home = () => {

    const [productos, setProductos] = useState([])

    const getProductos = async () => {
        // setloading(false)
        const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
        console.log('api', res.data);
        setProductos(res.data)
        // setloading(true)
    }
    useEffect(() => {
        getProductos();

    }, [])

    const validacionUrl = (url) => {
        if (typeof url !== 'string') {
            return false;
        }
        return (url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null);
    }



    return (
        <>
            {
                productos.map((producto) => (
                    < div className="app-header" >
                        <div className="child">
                            <div key={producto._id} className="card">

                                <img className="imagen" src={validacionUrl(producto.image) ? producto.image : validacionUrl(producto.images) ? producto.images : producto.images || "https://cf.geekdo-images.com/camo/cba429883803dadea626df689cdbf3ddc0dc1bba/68747470733a2f2f692e696d6775722e636f6d2f456161485557462e6a7067"} alt="" />

                                <p>{`Price: $ ${producto.price} `}</p>
                                <p> {`${producto.product_name} `}</p>
                                <p>{`Brand: ${producto.brand} `}</p>
                                <button className="btn">Buy now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Home