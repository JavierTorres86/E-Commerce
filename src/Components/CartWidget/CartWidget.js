import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/cartContext';


const CartWidget = () => {
  const {getQuantity} = useContext(CartContext)
  return (
    <>
    
        <img className="carrito" src = "https://static.vecteezy.com/system/resources/previews/000/644/984/non_2x/vector-shopping-cart-icon.jpg"  alt = "Carrito" />
        <Link to="/cart">
        <span className='carrito2'>{getQuantity()}</span>  
        </Link>
    </>
  );
};
export default CartWidget

