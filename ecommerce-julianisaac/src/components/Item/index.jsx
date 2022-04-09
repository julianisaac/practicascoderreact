import React from 'react';
;
const Item = ({producto, onClick}) => {
  return (
    <div className='card' onClick={onClick}>
        <h2>{producto.title} (Id: {producto.id})</h2>
        <div className='container'>
          <img src={producto.image} alt="imagen" width="100" height="100"/>
          <p>{producto.description}</p>
          <p>Cantidad disponible: {producto.stock}</p>
        </div>
    </div>
  );
}
;
export default Item;