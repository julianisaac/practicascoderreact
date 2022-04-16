import React from 'react';

const CartProduct = ({ producto }) => {

    return (
        <div>
            <img src={producto.image} alt="img" width={'100px'} />
            <h2>Cantidad: {producto.quantity}</h2>
            <h2>{producto.title}</h2>
            <h2>Valor Unitario: ${producto.price}</h2>
            <h2>Valor x Cantidad: ${producto.price * producto.quantity}</h2>
        </div>
    )
}

export default CartProduct;



