import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useProductContext } from "./context/ProductosContext";

import Home from "../pages/Home"
import Login from "../pages/Login";
import logo from '../Assets/images/logo.png'
import Categorias from "../pages/Categorias";

import '../Styles/header.css'



const Header = () => {

        function filtrarProductos(e) {
            let resultado = [];
        
            if (buscador !== '') {
                resultado = producto.filter(item => item.product_name.toLocaleLowerCase().includes(buscador))
                console.log(resultado);
            }
            else {
                getdata();
            }
            console.log(resultado);
            productosFiltrados(resultado, 'hola', true)
        }


    const searchItem = (valorInput) => {
    
        setBuscador(valorInput)
    
            
        }
    }  

    return (
        <>
            <div className="container">
                {/* <h2>Ajolote Shops</h2> */}
                <h2>ENVÍO GRATIS en toda la tienda - Entregas de 1 a 3 días hábiles.</h2>
            </div>
            <div className="navbar is-primary">
                <div className="navbar-brand">
                    <img className="logo-header" img src={logo} alt="logo" />
                    {/* <InputValue producto={producto} productosFiltrados={productosFiltrados} getdata={getdata} /> */}
                    <div className='input-box'>
                        <div className='main-input'>
                            <div className='main-input-container'>
                                {/* <img src={search} alt="search" /> */}
                                {<input className="input-header" type="text" placeholder='Search...' 
                                onChange={(e) => filtrarProductos(e.target.value)}
                                    />}
                                {/* <img src={microphone} alt="microphone" /> */}
                            </div>
                        </div>
                    </div>
                    <header >
                        <nav>
                            <ul>
                                <li className="nav-items">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-items">
                                    <Link to="/categorias">Categorias</Link>
                                </li>
                                <li className="nav-items">
                                    <Link to="/login">Log in</Link>
                                </li>
                            </ul>
                        </nav>


                    </header>
                </div>
            </div>




        </>
    )


export default Header