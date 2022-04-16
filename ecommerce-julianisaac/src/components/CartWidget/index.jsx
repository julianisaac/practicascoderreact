import React from 'react';
import cart from '../../imgs/Cart.png';
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {

  const navigate = useNavigate();           
  
  const goToCart = () =>{
    navigate(`/cart`); 
  }  

  return (
    <>
        <button onClick={goToCart}>
          <img src={cart} width="60" height="40" alt='cart'/>
        </button>
    </>
  )
}

export default CartWidget