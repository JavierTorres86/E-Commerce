import React from 'react'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useNavigate } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore';


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchItem = async () => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'Items', id);
    
    const data = await getDoc(queryDoc);
      if (data.exists()) {
        setItem({ id: data.id, ...data.data() });
      }
  };
  fetchItem();
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