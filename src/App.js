import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Estilos/EstilosProyecto.css';
import ItemDetailContainer from './Components/ItemDetailCountainer/ItemDetailContainer';
import Error404 from './Components/Error404';
import Condicional from './Components/Condicional';
import { StyledButton } from './Styled';
import CartProvider from './context/cartContext';
function App() {
  return (
    <div > 
      <CartProvider>
      <BrowserRouter>      
        <NavBar />
        <Condicional/>    
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>        
      </BrowserRouter>
      </CartProvider>
      


     
    </div>
);
}

export default App;