import React, { useState } from 'react';
import "./styles.css";

const ItemCount = ({nombreProducto, stock, onAgregarAlCarrito}) => {

    const[cantidad, setCantidad] = useState(1);

    const onDecrement = () => {
        if(cantidad > 1){
            setCantidad(cantidad - 1);
        }
    }

    const onIncrement = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1);
        }
    }

  return (
    <div className='card'>
        <h2>Producto {nombreProducto} (Cantidad disponible: {stock})</h2>
        <div className='container'>            
            <button onClick={onDecrement} className='boton'>-</button>
            <span>{cantidad}</span>
            <button onClick={onIncrement} className='boton'>+</button>
        </div>
        <button className='boton' onClick={() => stock > 0 ? onAgregarAlCarrito(cantidad) : null}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount