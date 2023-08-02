import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Estilos/EstilosProyecto.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './Components/Error404';
import CartProvider from './context/cartContext';
import { Cart } from '../src/Components/Cart/Cart';
import { Checkout } from './Components/Checkout/Checkout';
function App() {
  return (
    <div > 
      <CartProvider>
      <BrowserRouter>      
        <NavBar />  
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>        
      </BrowserRouter>
      </CartProvider>
      


     
    </div>
);
}

export default App;