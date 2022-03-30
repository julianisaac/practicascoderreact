import React from 'react';
;
const Item = ({id, title, descripcion, price, pictureUrl, stock}) => {
  return (
    <div className='card'>
        <h2>{title} (Id: {id})</h2>
        <div className='container'>
          <img src={pictureUrl} alt="imagen" width="100" height="100"/>
          <p>{descripcion}</p>
          <p>Cantidad disponible: {stock}</p>
        </div>
    </div>
  );
}
;
export default Item;