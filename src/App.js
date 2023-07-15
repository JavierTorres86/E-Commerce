import React from 'react';
import './App.css';
import ApiContainer from './Components/ApiContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Electricas from './Components/Componentes/electricas';
import Accesorios from './Components/Componentes/accesorios';
import Acusticas from './Components/Componentes/acusticas';
import Error from './Components/Componentes/error';
import './Estilos/EstilosProyecto.css';
import Home from './Components/Componentes/home';
import ProductoId from './Components/Componentes/ProductoId';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>          
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/electricas' element={<Electricas />} />
          <Route path='/acusticas' element={<Acusticas />} />
          <Route path='/accesorios' element={<Accesorios />} />
          <Route path = '/accesorios/:id' element={<ProductoId/>}/>
          <Route path = '/acusticas/:id' element={<ProductoId/>}/>
          <Route path = '/electricas/:id' element={<ProductoId/>}/>
          <Route path = '/home/:id' element={<ProductoId/>}/>
          <Route path='/carrito'  />
        {/*  <Route path = '*' element= {<Error/>}/>*/}
         
        </Routes>      
       {/* 
        <ItemListContainer greeting="GIBSON" />
        <ApiContainer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
