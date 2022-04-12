import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Item';
import { db } from '../../firebase/config';
import { collection, getDocs } from "firebase/firestore";

const ItemList = ({categoriaId}) => {

  const [productos, setProductos] = useState ([]);
  const navigate = useNavigate();
  
  useEffect(()=> {
    console.log(`categoriaId: ${categoriaId}`);
    ( async ()=> {
        try {
          /*
            const response = await fetch(`https://fakestoreapi.com/products`)
            const data = await response.json();
*/
            const querySnapshot = await getDocs(collection(db, "productos"));
            const prods = []
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                prods.push({id: doc.id, ...doc.data()})
            });  
            console.log(prods);        

            if (categoriaId) {
              const productosFiltrados = prods.filter(prod => prod.category === categoriaId)
              setProductos(productosFiltrados);
            }
            else{
              setProductos(prods);
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
                      producto={prod}
                      onClick={() => navigate(`/item/${prod.id}`)}
                      />
                })}
            </div>
      </>
  )
}

export default ItemList;