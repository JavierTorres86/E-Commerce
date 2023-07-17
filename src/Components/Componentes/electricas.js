import React from 'react'
import data from './Productos/arrayProductos.json';
import Item from '../ItemListContainer/Item';

const Electricas = () => {
const gelectricas = data.filter((p) => p.category=== 'electricas');
  return (    
    <div className='muestra'>      
      {gelectricas.map((p)=>{   
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
export default Electricas