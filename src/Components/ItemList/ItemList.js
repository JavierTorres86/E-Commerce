import React from 'react';
import Item from '../Item/Item'

const ItemList = ({ data }) => {
    return (
        <div className='muestra'>
          
                {data.map((i) => 
                (<Item 
                  item={i}
                  name={i.name} 
                  key={i.id} 
                  id={i.id} image={i.image} 
                  price={i.price}/>))}
           
        </div>
    )
}

export default ItemList