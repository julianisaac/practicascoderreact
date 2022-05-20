import {createContext, useState, useEffect} from 'react';
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../Firebase/config";

export const Carrito = createContext();

const CartContext = ({children}) => {

    const [cart, setCart] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [productos, setProductos] = useState([]);
    const [ordenes, setOrdenes] = useState([]);

    useEffect(()=> {

        (async ()=>{
            
            const queryCollection = query(collection(db, "productos"))
            const queryCollectionCategories = query(collection(db, "categorias"))
            const queryCollectionOrdenes = query(collection(db, "ordenes"))
            
            const querySnapshot = await getDocs(queryCollection);
            const querySnapshotCategories = await getDocs(queryCollectionCategories);
            const querySnapshotOrdenes = await getDocs(queryCollectionOrdenes)
            
            const prods = []
            querySnapshot.forEach((doc)=> {
                const producto = {id: doc.id, ...doc.data()}
                prods.push(producto)
            })

            const categs = []
            querySnapshotCategories.forEach((doc)=> {
                const categoria = {id: doc.id, ...doc.data()};
                categs.push(categoria);
            })

            const orders = []
            querySnapshotOrdenes.forEach((doc)=> {
                const orden = {id: doc.id, ...doc.data()};
                orders.push(orden);
            })

            setProductos([...prods]);
            setCategorias([...categs]);
            setOrdenes([...orders]);

        })()

    }, [])

    const addCart = (product, cantidadAAgregar) => {

        const producto = isInCart(product);
        if (producto) {
            console.log('Existe prod ' + producto);
            producto.quantity += cantidadAAgregar;
            const cartFiltrado = cart.filter(elemento => elemento.id !== producto.id);
            cartFiltrado.push(producto);
            setCart(cartFiltrado);
            console.log(cart);
        } else {
            console.log('NO Existe prod ');
            setCart([...cart, { ...product, quantity: cantidadAAgregar }]);
            console.log(cart);
        }
    }

    //Función auxiliar que me determina si el producto está o no en el cart por ID
    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id);
    }

    //limpia todo el carrito
    const clear = () => {
        cart.clear();
    }

    //elimina item del carrito
    const removeItem = (producto) =>{
        if(isInCart(producto))
            cart.splice(producto);
    } 

    const sumaTotal = () => {
        console.log(cart);
        const suma = cart.reduce(
          (accion, producto) => (accion += producto.price * producto.quantity),
          0
        );
        return suma;
    };
       
    return (
        <Carrito.Provider value = {{productos, categorias, ordenes, addCart, clear, removeItem, sumaTotal}}>
            {children}
        </Carrito.Provider>
    )
}

export default CartContext;