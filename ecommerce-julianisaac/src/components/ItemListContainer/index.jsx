import React from 'react'
import ItemCount from '../ItemCount'

const ItemListContainer = ({greeting}) => {

  const onAgregarAlCarrito = (cantidad) => {
    console.log(`Se agrego ${cantidad} productos al carrito`);
  }

  return (
    <>
        <h5>{greeting}</h5>
        <ItemCount nombreProducto={"Monitor 24 pulgadas"} stock={10} onAgregarAlCarrito={onAgregarAlCarrito}></ItemCount>
        <ItemCount nombreProducto={"Teclado inalambrico"} stock={0} onAgregarAlCarrito={onAgregarAlCarrito}></ItemCount>
    </>
  )
}

export default ItemListContainer