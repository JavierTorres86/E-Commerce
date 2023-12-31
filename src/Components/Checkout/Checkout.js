import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
  const [orderId, setOrderId] = useState();
  const navigate = useNavigate();
  const [buyer, setBuyer] = useState({
    Nombre: '',
    Email: '',
    Telefono: '',
  });
  const { Nombre, Email, Telefono } = buyer;
  const { cart, clearCart } = useContext(CartContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'ConfirmarEmail') {
      if (value !== buyer.Email) {
        alert('Los campos de correo electrónico no coinciden.');
        return;
      }
    }

    setBuyer({
      ...buyer,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = cart.reduce((acum, unItem) => acum + unItem.price * unItem.cant, 0);
    const dia = new Date();
    const data = { buyer, cart, total, dia };
    generateOrder(data);
  };

  const generateOrder = async (data) => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'Orders');
    const order = await addDoc(queryCollection, data);
    setOrderId(order.id);
    clearCart();
  };

  const volver = () => {
    navigate('../');
  };

  return (
    <>
      <div className='infopantallacheckout'>
        <h1>La compra ya es casi tuya!</h1>
        <hr />
        {!orderId && (
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='Nombre'
              placeholder='Nombre'
              value={Nombre}
              onChange={handleInputChange}
              required
            />
            <br />
            <br />
            <input
              type='email'
              name='Email'
              placeholder='Email'
              value={Email}
              onChange={handleInputChange}
              required
            />
            <br />
            <br />
            <input
              type='email'
              name='ConfirmarEmail'
              placeholder='Confirmar Email'
              onChange={handleInputChange}
              required
            />
            <br />
            <br />
            <input
              type='number'
              name='Telefono'
              placeholder='Telefono'
              value={Telefono}
              onChange={handleInputChange}
              required
            />
            <br />
            <br />
            <input className='finalizar' type='submit' value='Confirmar Compra' />
          </form>
        )}
        {orderId && (
          <>
            <h1>Compra realizada con éxito!</h1>
            <h3>Tu ID de Compra es: {orderId}</h3>
            <button className='' onClick={volver}>
              Menú Principal
            </button>
          </>
        )}
      </div>
    </>
  );
};
