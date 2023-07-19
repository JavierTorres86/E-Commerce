import React from 'react'
import {Link} from 'react-router-dom';


const Item = ({item}) => {
  return (
    <div className='muestra'>
        <div className='info'>
         <Link to={"/item/" + item.id} className=''>
           <img src= {item.image} className='producto' alt={item.name}/>
           </Link>
            <div className=''>
            <p className='infopantalla1'>{item.name}</p>
            <p className='infopantalla2'>{item.price}</p>
            </div>
                      
    
    </div>
    </div>
  )
}

export default Item;