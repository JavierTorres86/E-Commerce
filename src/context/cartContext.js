import { createContext,useState } from "react"
import React from "react";

export const CartContext = createContext();
const CartProvider = ({children})=>{

    const [cart,setCart] =useState([])
    
   
    const getQuantity = ()=>{
      return 14
    }
    
    return(
        <CartContext.Provider value = {{cart,getQuantity,setCart}}>
        {children}
        </CartContext.Provider>
    )
}
export default CartProvider