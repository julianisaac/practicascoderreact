import React, {useEffect, useState} from 'react';
import Item from '../Item';

const ItemList = () => {

  const [productos, setProductos] = useState ([]);
  
  useEffect(()=> {
    console.log("useEffect inicio ");
    ( async ()=> {
        try {
            const response = await fetch('/data.json');
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            console.log(error);
        }
    })()

}, [])

  return (
    <>
            <div>
                {productos.map(prod => {
                     return <Item 
                      key={prod.id} 
                      title={prod.title} 
                      price={prod.price} 
                      id={prod.id} 
                      descripcion={prod.description}
                      stock='10'
                      pictureUrl={prod.image}/>
                })}
            </div>
      </>
  )
}

export default ItemList;