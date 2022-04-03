import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Item';

const ItemList = ({categoriaId}) => {

  const [productos, setProductos] = useState ([]);
  const navigate = useNavigate();
  
  useEffect(()=> {
    console.log(`categoriaId: ${categoriaId}`);
    ( async ()=> {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`)
            const data = await response.json();
            if (categoriaId) {
              const productosFiltrados = data.filter(prod => prod.category === categoriaId)
              setProductos(productosFiltrados);
            }
            else{
              setProductos(data);
            }
            
        } catch (error) {
            console.log(error);
        }
    })()

  }, [])

  return (
    <>
            <div>
            <h1>Listado</h1>
                {productos.map(prod => {
                     return <Item 
                      key={prod.id} 
                      title={prod.title} 
                      price={prod.price} 
                      id={prod.id} 
                      descripcion={prod.description}
                      stock='10'
                      pictureUrl={prod.image}
                      onClick={() => navigate(`/item/${prod.id}`)}
                      />
                })}
            </div>
      </>
  )
}

export default ItemList;