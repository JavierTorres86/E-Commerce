import React from 'react'
import Producto from './Producto';
import data from './Productos/arrayProductos.json';

const Acusticas = () => {
const gacusticas = data.filter((p) => p.category=== 'acusticas');
  return (    
    <div className='muestra'>      
      {gacusticas.map((p)=>{   
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

export default Acusticas