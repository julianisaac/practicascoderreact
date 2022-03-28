import React from 'react'
import ItemCount from '../ItemCount'
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

  const onAgregarAlCarrito = (cantidad) => {
    console.log(`Se agrego ${cantidad} productos al carrito`);
  }

  return (
    <>
        <h5>{greeting}</h5>
        <ItemList/>
    </>
  )
}

export default ItemListContainer