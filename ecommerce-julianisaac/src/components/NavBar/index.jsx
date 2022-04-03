import React from 'react';
import CartWidget from '../CartWidget';
import "./styles.css";
import logo from '../../imgs/logo.png';

const NavBar = () => {
    return (
        <>              
            <h3><a href='/'><img src={logo} width="60" height="40" alt='logo'/></a></h3>
            <nav className='nav'>
                <ul className="list">                
                    <li className="items"><CartWidget /></li>
                    <li className="items"><a href="/">Inicio</a></li>
                    <li className="items"><a href="/category/jewelery" >jewelery</a></li>
                    <li className="items"><a href="/category/electronics">electronics</a></li>
                    <li className="items"><a href="/category/men's clothing">men's clothing</a></li>
                    <li className="items"><a href="/category/women's clothing">women's clothing</a></li>
                </ul>
            </nav>        
             
        </>
    );
}

export default NavBar