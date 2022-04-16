import React, { useContext, useEffect, useState } from 'react'
import {Carrito} from '../../context/CartContext';
import CartProduct from '../CartProduct';
import Checkout from '../Checkout';

const Cart = () => {
  const { cart, sumaTotal } = useContext(Carrito)
  const [suma, setSuma] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setSuma(sumaTotal())
  }, [sumaTotal])

  const handleCheckout = () => {
    if(suma !== 0){
      setModal(true);
    }
  }

  return (
    <div className="container">
      {cart.map(item => <CartProduct producto={item} key={item.id} />)}
      <h3>Total: {suma}</h3>
      <button onClick={handleCheckout}>Checkout</button>
      {modal && <Checkout cart={cart} total={suma} />}
    </div>
  )
}

export default Cart;