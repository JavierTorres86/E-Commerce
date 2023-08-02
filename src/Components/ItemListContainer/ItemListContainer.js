import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from '../../Components/Spinner/Spiner';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore,query, where } from 'firebase/firestore';

const ItemListContainer = () => {

  const { id } = useParams()

  const [items, setItems] = useState() 
  const [load, setLoad] = useState(true) 

  const getData = async (id) => {
    setLoad(true)
    const querydb = getFirestore();
    const queryCollection = id ? query(collection(querydb, 'Items'), where("category", "==", id))
      : collection(querydb, 'Items');
    const resultado = await getDocs(queryCollection)
    const datos = resultado.docs.map(p => ({ id: p.id, ...p.data() }))
    setItems(datos)
    setLoad(false)
  }

  useEffect(() => {
    getData(id)
  }, [id])

  return (
    <>
      {load ? <Spinner /> : <ItemList data={items} />}
    </>
  );
};

export default ItemListContainer;