import React from 'react';

const ItemDetail = ({id, title, descripcion, price, pictureUrl, stock, ratingRate, ratingCount}) => {
  return (
    <div className='card'>
        <h1>Detalle</h1>
        <h2>{title} (Id: {id})</h2>
        <div className='container'>
          <img src={pictureUrl} alt="imagen" width="100" height="100"/>
          <p>{descripcion}</p>
          <p>Precio: ${price}</p>
        </div>
    </div>
  )
}

export default ItemDetail;