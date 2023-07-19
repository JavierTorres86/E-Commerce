import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from '../Componentes/Json/arrayProductos.json';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
     const [item, setItem] = useState([]);
     const {id} = useParams();
   useEffect(()=>{
     const fetchData = async()=>{
        try{
        const data = await new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(id ? arrayProductos.filter(item=> item.category === id) : arrayProductos)
       }, );
        });
        setItem(data);
      }catch(error){
      }
    };
    fetchData();
     }, [id])

  return (
    <div className='muestra'>
      <div className='muestra'>
       <ItemList item={item}/>
      </div>
      
    </div>
  )
}

export default ItemListContainer