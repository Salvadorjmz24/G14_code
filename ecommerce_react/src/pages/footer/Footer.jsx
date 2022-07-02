import React from "react";
import "./footer.css";
export default function Footer() {
    return (
        <div className="navbar is-primary-footer">
            <div className="navbar-brand-footer">
                <div>
                    <a className="footer" href="/">Productos</a>
                    <a className="footer" href="/">Términos y condiciones</a>
                    <a className="footer" href="/">Aviso de privacidad</a>
                </div>                
                    <a id="etiqueta_a" href="/">Dev.f Hackeando Latinoamérica desde 2022_ </a>
                </div>  
                <div className="bancos">
                    <a id="metop" href="/">Medios de pago</a>
                    <li >< img src="LOGOS-NEGRO.png"/></li>
                </div>
            <div className="final">
                <a id="final" href="/">© 2022 DEV.F®</a>
            </div>
        </div>
);
}