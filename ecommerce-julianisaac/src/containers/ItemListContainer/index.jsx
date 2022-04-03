import React from 'react'
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const { id } = useParams() //Siempre trae un string

  return (
    <>
        <ItemList categoriaId={id}/>
    </>
  )
}

export default ItemListContainer