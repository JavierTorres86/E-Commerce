import React from 'react'
import Producto from './Producto';
import data from './Productos/arrayProductos.json';

const Accesorios = () => {
const cosas = data.filter((p) => p.category=== 'accesorios');
  return (    
    <div className='muestra'>      
      {cosas.map((p)=>{   
        return(
          <div>
            <Producto
              key={p.id}
              name={p.name}
              description={p.description}
              stock={p.stock}
              image={p.image}
              price={p.price}
              id={p.id}
              category={p.category}
             />
          </div>
        ) 
})}

</div>
  )};

export default Accesorios