import React, { useState } from 'react'
import { Logout } from './Logout';
import Spiner from './Spiner';

const Condicional = () => {
    const[condicion, setCondicion] = useState(true);
    
  return (
    <div>
        <h2>Renderizado con ternario</h2>
        <button onClick={()=>setCondicion(!condicion)}>Iniciar Sesion / Salir</button>
        <p>{condicion ?<Spiner/> : <Logout/>}</p>
    </div>
  )
}

export default Condicional