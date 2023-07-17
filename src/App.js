import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Electricas from './Components/Componentes/electricas';

import Acusticas from './Components/Componentes/acusticas';
import Error from './Components/Componentes/error';
import './Estilos/EstilosProyecto.css';
import ItemDetailContainer from './Components/ItemListContainer/ItemDetailContainer';
import ApiConteiner2 from './Components/Componentes/Accesorios2';
import Accesorios2 from './Components/Componentes/Accesorios2';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>          
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/home' element={<ItemListContainer />} />  
          <Route path='/electricas' element={<Electricas />} />
          <Route path='/acusticas' element={<Acusticas />} />
          <Route path='/accesorios' element={<Accesorios2 />} />
          <Route path='/carrito'  />
          <Route path = '*' element= {<Error/>}/>
          <Route path = '/:category/:id/' element={<ItemDetailContainer/>}/>
          <Route path = '*' element= {<Error/>}/>
      
        
         
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
