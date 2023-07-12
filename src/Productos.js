import React from 'react'
import { useState } from 'react'
import Producto from './Producto'
import Contador from './Components/Contador/Contador';
import data from './Components/Componentes/Productos/arrayProductos.json';

const Productos = ()=>{

  return (
    <div className='muestra'>
      {data.map((p)=>{
        return(
          <div>
             
            <Producto
             key={p.id}
             name={p.name}
             description={p.description}
             stock={p.stock}
              image={p.image}
              price={p.price}
             />
        
          </div>
    
    
  )
})}

</div>
  )};

export default Productos
