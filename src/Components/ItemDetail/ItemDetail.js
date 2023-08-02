import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import { CartContext} from '../../context/cartContext';

const ItemDetail = ({ item }) => {
    const [stock, setStock] = useState(item.stock)
   
    const { addItem } = useContext(CartContext)


    const handleOnAdd = (count) => {

        addItem({ id: item.id, price: item.price, name: item.name, image: item.image }, count)
        

    };

    const handleStock = () => {
        const querydb = getFirestore()
        const itemDoc = doc(querydb, "Items", item.id)
        const stockNuevo = stock + 3
        updateDoc(itemDoc, { stock: stockNuevo })
        setStock(stockNuevo)
        console.log(item.stock)
    }
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