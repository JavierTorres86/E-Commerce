import React from 'react'
import data from "../Componentes/Productos/arrayProductos.json";
import Item from './Item';
const ItemListContainer = ()=>{
  return (
    <div className='muestra'>
      {data.map((p)=>{
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
export default ItemListContainer
