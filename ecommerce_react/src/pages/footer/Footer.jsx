import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <div className="navbar is-primary-footer">
            <div className="navbar-brand-footer">
            <a className="aio" href="/">
                    <img src="dev.png"/>               
                </a>
                <a className="aio" href="/">
                    <img src="react.png"/>               
                </a>
                <a className="aio" href="/">
                    <img src="gc.png"/>               
                </a>
                <a className="aio" href="/">
                    <img src="face.png"/>               
                </a>
                <a className="aho" href="/">
                    <img src="insta.png"/> 
                </a>
                <a className="ahor" href="/">
                    <img src="twitter.png"/> 
                </a>
            </div>
        </div>
    );
}