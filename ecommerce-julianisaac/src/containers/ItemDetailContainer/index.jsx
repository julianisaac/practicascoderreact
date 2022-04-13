import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

import { db } from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});

    const {id} = useParams();

    useEffect(()=> {
        ( async ()=> {
            try {
                /*
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await response.json();
                setProducto(data);
                */
                const docRef = doc(db, "productos", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProducto({id: docSnap.id, ...docSnap.data()})
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }

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