import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    useEffect(()=> {
        console.log("useEffect inicio ItemDetailContainer");
        ( async ()=> {
            try {
                const response = await fetch('https://fakestoreapi.com/products/1')
                const data = await response.json();
                setProducto(data);
            } catch (error) {
                console.log(error);
            }
        })()
      }, []);    


    console.log(producto);  
    return (
        <div>
            <ItemDetail 
                key={producto.id} 
                title={producto.title} 
                price={producto.price} 
                id={producto.id} 
                descripcion={producto.description}
                stock='10'
                pictureUrl={producto.image}/>
        </div>
    )
}

export default ItemDetailContainer;