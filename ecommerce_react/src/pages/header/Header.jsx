import React from "react";
import { InputValue } from "../InputValue/InputValue";

import "./header.css";

export default function Header({ producto, setproductos, getdata }) {
    return (
        <>
        <div className="container">  
                <h2>Incrementamos las ventas gracias a nuestra tienda online</h2>                     
            </div>
        <div className="navbar is-primary">
            <div className="navbar-brand">
                <img id="logo" className="logo-header" src="frh.png" alt="/"/>    
                <InputValue producto={producto} setproductos={setproductos} getdata={getdata} />
                <a className="ai" href="/">Inicio</a>
                <a className="ai" href="/">Hoy</a>
                <a className="ai" href="/">home</a>
            </div>
        </div>
        </>
    );
}