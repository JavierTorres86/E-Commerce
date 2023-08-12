import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const { cart } = useContext(CartContext);
    const total = cart.reduce((acum, unItem) => acum + unItem.price * unItem.cant, 0);
    const { removeItem } = useContext(CartContext);
    const navigate = useNavigate();

    const volver = () => {
        navigate('../');
    };

    const isCartEmpty = cart.length === 0;

    return (
        <>
            <div className='productoseleccionado'>
                <h1 className='infopantalla2'>Carrito</h1>
                <hr />
                {isCartEmpty ? (
                    <h1>Oooops, Tu Carrito Está Vacio</h1>
                ) : (
                    <div className='muestra'>
                        {cart.map((Item) => (
                            <div key={Item.id}>
                                <h3 className='infopantalla3'>Producto: {Item.name}</h3>
                                <img className='producto2' src={Item.image} alt={Item.name} />
                                <p className='infopantalla3'>Cantidad: {Item.cant}</p>
                                <p className='infopantalla3'>Precio U$S: {Item.price * Item.cant}</p>
                                <button className='eliminar' onClick={() => removeItem(Item.id)}>
                                    Eliminar Producto
                                </button>
                                <hr />
                                <br />
                            </div>
                        ))}
                    </div>
                )}
                     <p className='infopantalla2'>Total a pagar: U$S {total}</p>
                     <div className='botones-container'>
                        <div className='center-button'>
                            {!isCartEmpty && (
                            <Link to='/Checkout'>
                                <button className='finalizar'>Finalizar Compra</button>
                            </Link>
                            )}
                        </div>
                            <button className='menuprincipal' onClick={volver}>
                                Menu Principal
                            </button>
                            </div>

            </div>
        </>
    );
};
