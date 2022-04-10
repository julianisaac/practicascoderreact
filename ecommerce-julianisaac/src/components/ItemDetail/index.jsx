import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {Cart} from '../../context/CartContext';
import ItemCount from '../ItemCount';

const ItemDetail = ({producto}) => {

  const [cantidad, setCantidad] = React.useState(0)
  const navigate = useNavigate();
  const {addCart} = useContext(Cart);

  const onAgregarAlCarrito = (cant) => {
    setCantidad(cant);
  }

  const handleTerminate = () => {
    console.log(`Terminó la compra - Cantidad: ${cantidad}`);
    addCart(producto, cantidad);
    navigate(`/Cart`);
  }
  
  return (
    <div className='card'>
        <h1>Detalle</h1>
        <h2>{producto.title} (Id: {producto.id})</h2>
        <div className='container'>
          <img src={producto.image} alt="imagen" width="100" height="100"/>
          <p>{producto.description}</p>
          <p>Precio: ${producto.price}</p>

          {cantidad === 0 ? 
              <ItemCount nombreProducto={producto.title} stock={10} onAgregarAlCarrito={onAgregarAlCarrito}/> 
              :
              <button className="boton" onClick={handleTerminate}>Finalizar compra</button>     
          }
        </div>
    </div>    
  )
}

export default ItemDetail;