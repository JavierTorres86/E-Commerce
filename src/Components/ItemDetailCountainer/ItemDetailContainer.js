import React from 'react'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import arrayProductos from '../Componentes/Json/arrayProductos.json';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useNavigate } from "react-router-dom";


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
   const promesa = new Promise((resolve)=>{
   
     setTimeout(()=>{
       resolve(arrayProductos.find(item=> item.id === parseInt(id)))
     }, )
   });
   promesa.then((data)=>{
     setItem(data)
   })
   }, [id])
   
   const volver = () => {
    navigate(-1);   
  };
  return (
    <div className='productoseleccionado'>
      <button className="volver" onClick={volver}> Volver</button> 
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer