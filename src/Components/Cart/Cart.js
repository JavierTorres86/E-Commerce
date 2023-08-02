import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom'

export const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <>
         <div className='productoseleccionado'>
            <h1 className='infopantalla2'>Carrito</h1>
            <hr />
            {
                cart.length ===0 ? <h1>Carrito Vacio</h1>
                    :  <div className='muestra'>
                        {cart.map(Item => <div  key={Item.id}>
                            <h3 className='infopantalla3'>Nombre: {Item.name}</h3>
                            <img className='producto2' src={Item.image} />
                            <p className='infopantalla3'>Cantidad: {Item.cant}</p>
                            <p className='infopantalla3'>Precio U$S: {Item.price}</p>
                            <hr /><br />
                        </div>)}
                    </div>
            }
             <Link to='/Checkout'>
                <button className='count'>Finalizar Compra</button>
            </Link>
            </div>

           

        </>
    )
}