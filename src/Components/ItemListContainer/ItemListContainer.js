import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import {getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
     const [item, setItem] = useState([]);
     const {id} = useParams();

   useEffect(()=>{
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'Items');
    let filtroQuery;

    if (id) {
      const filtroCategory = where('category', '==', id);
      filtroQuery = query(queryCollection, filtroCategory);
    } else {
      filtroQuery = queryCollection;
    }
    getDocs(filtroQuery)
      .then((res) => setItem(res.docs.map((p) => ({ id: p.id, ...p.data() }))));
  }, [id]);

  return (
    <div className='muestra'>
      <div className='muestra'>
       <ItemList item={item}/>
      </div>
      
    </div>
  )
}

export default ItemListContainer