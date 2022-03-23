import React from 'react';
import CartWidget from '../CartWidget';
import "./styles.css";
import logo from '../../imgs/logo.png';

const NavBar = () => {
    return (
        <>              
            <h3><img src={logo} width="60" height="40" alt='logo'/></h3>            
            <nav className='nav'>             
                <ul className="list">                
                    <li className="items"><CartWidget /></li>
                    <li className="items"><a href="/home">Inicio</a></li>
                    <li className="items"><a href="/vehiculos">Vehiculos</a></li>
                    <li className="items"><a href="/electronica">Electronica</a></li>
                    <li className="items"><a href="/libros">Libros</a></li>
                    <li className="items"><a href="/login">Login</a></li>
                </ul>
            </nav>        
            
        </>
    );
}

export default NavBar