import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext} from '../../context/cartContext';

const ItemDetail = ({ item }) => {
    const [stock] = useState(item.stock)   
    const { addItem } = useContext(CartContext)


    const handleOnAdd = (count) => {
        addItem({ id: item.id, price: item.price, name: item.name, image: item.image }, count)

    };
    return (
        <div>
            <img src={item.image} className='producto1' alt={item.nombre} />
            <h1 className='infopantalla3' >{item.name}</h1>
            <p className='infopantalla3'>{item.description}</p>
            <p className='infopantalla3'>PRECIO: U$S {item.price}</p>
            <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
         </div>
       
    )
}

export default ItemDetail