import React from 'react'
import Item from '../Item/Item';


const ItemList = ({item}) => {
  return (
    <div className='muestra' id='itemlist'>
      {
      item.map(item=>
      
      <div className=''
       key={item.id}>
       <Item item={item}/> 
       </div>
      )   
      }
   </div>
  )
}

export default ItemList