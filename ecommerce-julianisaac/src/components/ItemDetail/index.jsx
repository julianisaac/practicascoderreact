import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount';

const ItemDetail = ({id, title, descripcion, price, pictureUrl, stock, ratingRate, ratingCount}) => {

  const [cantidad, setCantidad] = React.useState(0)
  const navigate = useNavigate();

  const onAgregarAlCarrito = (cant) => {
    setCantidad(cant);
  }

  const handleTerminate = () => {
    console.log(`Terminó la compra - Cantidad: ${cantidad}`);
    navigate(`/Cart`);
  }
  
  return (
    <div className='card'>
        <h1>Detalle</h1>
        <h2>{title} (Id: {id})</h2>
        <div className='container'>
          <img src={pictureUrl} alt="imagen" width="100" height="100"/>
          <p>{descripcion}</p>
          <p>Precio: ${price}</p>

          {cantidad === 0 ? 
              <ItemCount stock={10} onAgregarAlCarrito={onAgregarAlCarrito}/> 
              :
              <button className="boton" onClick={handleTerminate}>Finalizar compra</button>     
          }
        </div>
    </div>    
  )
}

export default ItemDetail;