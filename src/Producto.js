import React from 'react'
import Contador from './Components/Contador/Contador'

const Producto = ({image,name,description,stock,price}) => {
  return (
    <div>
    <img className='producto' src={image}></img>
    <h3 className='infopantalla'>{name}</h3>
    <p className='infopantalla1'>{description}</p>
    <p className='infopantalla2'>{price}</p>
    <Contador/>
    </div>
    



  )
}

export default Producto