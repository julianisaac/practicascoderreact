import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});

    const {id} = useParams();

    useEffect(()=> {
        ( async ()=> {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await response.json();
                setProducto(data);
            } catch (error) {
                console.log(error);
            }
        })()
      }, []);    


    return (
        <div>
            <ItemDetail 
                key={producto.id}
                producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer;