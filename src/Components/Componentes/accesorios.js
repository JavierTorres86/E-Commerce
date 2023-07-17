import React from 'react'
import data from './Productos/arrayProductos.json';
import Item from '../ItemListContainer/Item';

const Accesorios = () => {
const datos = data.filter((p) => p.category=== 'accesorios');
  return (    
    <div className='muestra'>      
      {datos.map((p)=>{   
        return(
          <div>
            <Item
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