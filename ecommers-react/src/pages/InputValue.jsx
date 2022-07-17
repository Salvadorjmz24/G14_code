import React, { useState, useEffect } from 'react'
import "../Styles/inputvalue.css"

export const InputValue = ({ producto, productosFiltrados, getdata }) => {
      const [buscador, setbuscador] = useState("")

      useEffect(() => {
        let resultado = [];

        if (buscador !== '') {
            resultado = producto.filter(item => item.product_name.toLocaleLowerCase().includes(buscador))
        }
        else {
            getdata();
        }
        console.log(resultado);
        productosFiltrados(resultado, 'hola', true)


    }, [buscador])

    const searchItem = (valorInput) => {

        setbuscador(valorInput)


    }
    

    return (
        <>
            <div className='input-box'>
                <div className='main-input'>
                    <div className='main-input-container'>
                        <span className="search-icon"></span>
                        <input type="text" placeholder='Search...' value={buscador}
                            onChange={(e) => searchItem(e.target.value)} />
                        <a className="micro-icon" href="/"></a>
                    </div>
                </div>
            </div>
        </>
    )

}

