import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from '../../Components/Spinner/Spiner';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Error404 from '../Error404';

const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);

  const getData = async (id) => {
    try {
      setError(false);
      setItems([]);
      setLoad(true); 

      const querydb = getFirestore();
      let queryCollection;

      if (!id) {
        queryCollection = collection(querydb, 'Items');
      } else {
        queryCollection = query(collection(querydb, 'Items'), where('category', '==', id));
      }

      const resultado = await getDocs(queryCollection);
      const datos = resultado.docs.map((p) => ({ id: p.id, ...p.data() }));

      if (datos.length === 0) {
        setError(true);
      } else {
        setItems(datos);
      }
    } catch (error) {
      setError(true);
    }
    setLoad(false);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  if (error) {
    return <Error404 />;
  }
  return (
    <>
      {load ? <Spinner /> : <ItemList data={items} />}
    </>
  );
};

export default ItemListContainer;
