import { createContext, useState, useEffect, useContext} from "react";

const listaDeProductosContext = createContext()

function productProvider() {
    const [producto, setProductos] = useState([]);
    const [buscador, setBuscador] = useState("")

    const getProductos = async () => {
    
        const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
        console.log('api', res.data);
        setProductos(res.data)
    }


    useEffect(() => {
        getProductos();
    }, [])

    const value = {
        producto, setProductos, 
        buscador, setBuscador,
        
    }
    return (
        <listaDeProductosContext.Provider value={value}/>
    )
}

const useProductContext = () => {
    const context = useContext(useProductContext)
    return context
}

export { productProvider, useProductContext }