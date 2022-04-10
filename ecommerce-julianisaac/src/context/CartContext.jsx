import {createContext, useState} from 'react';

export const Cart = createContext();

const CartContext = ({children}) => {

    const [cart, setCart] = useState([]);

    const addCart = (product, cantidadAAgregar) => {

        const producto = isInCart(product);
        if (producto) {
            producto.quantity += cantidadAAgregar;
            const cartFiltrado = cart.filter(elemento => elemento.id !== producto.id);
            cartFiltrado.push(producto);
            setCart(cartFiltrado);
        } else {
            setCart([...cart, { ...product, quantity: cantidadAAgregar }]);
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

    return (
        <Cart.Provider value = {{cart, addCart, clear, removeItem}}>
            {children}
        </Cart.Provider>
    )
}

export default CartContext;