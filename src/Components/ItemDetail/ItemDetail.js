import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = ({item}) => {
  return (
    <div className=''>
     
        <img src={item.image} className='producto1'alt={item.name}/>
        <h2 className='infopantalla3'>{item.name}</h2>
        <p  className='infopantalla3'>{item.description}</p>
        <p  className='infopantalla3'> U$S{item.price}</p>
        <p  className='infopantalla3'> Cantidad: {item.stock}</p>
  
     <div>
        <ItemCount stockItems={10}/>
     </div>
     </div>
  )
}

export default ItemDetail