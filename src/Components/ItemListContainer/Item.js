import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({ id, image, name, description, price, category }) => {
  return (
    <div className='info'>
      <NavLink to={`/${category}/${id}`} className='logoCarrito' >                                   
        <img className='producto' src={image} alt={name} />
      </NavLink>
      <h3 className='infopantalla'>{name}</h3>
      <p className='infopantalla2'>{price}</p>

    </div>
  );
};

export default Item ;
