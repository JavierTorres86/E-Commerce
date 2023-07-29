import React, { useContext } from 'react'
import { CartContext } from '../../../context/cartContext'


const CartWidget = () => {
  const {getQuantity} = useContext(CartContext)
  return (
    <div>
        <img className="carrito" src = "https://static.vecteezy.com/system/resources/previews/000/644/984/non_2x/vector-shopping-cart-icon.jpg"  alt = "Carrito" />
    <span className='cartcount'>{
        getQuantity()
       }</span>   
    </div>
  )
}

export default CartWidget

