import React from 'react';
import { NavLink } from 'react-router-dom';

const Producto = ({ id, image, name, description, price, category }) => {
  console.log(id)
  return (
    <div>
      <NavLink to={`/${category}/${id}`} className='logoCarrito'>                                   
        <img className='producto' src={image} alt={name} />
      </NavLink>
      <h3 className='infopantalla'>{name}</h3>
      <p className='infopantalla2'>{price}</p>

    </div>
  );
};

export default Producto;
