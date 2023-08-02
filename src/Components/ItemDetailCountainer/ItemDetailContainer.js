import db from '../../Firebase/config';
import { doc, getDoc} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spiner';
import { useNavigate } from "react-router-dom";



const ItemDetailContainer = () => {

    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState()  
    const [load, setLoad] = useState(true)
    const navigate = useNavigate();



    const getSelected = async (idItem) => {
        try {
            const document = doc(db, "Items", idItem)
            const response = await getDoc(document)
            const result = { id: response.id, ...response.data() }
            setSelectedItem(result)
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSelected(id)
    }, [id])

    const volver = () => {
        navigate(-1);   
      };
      return (
        <div className='productoseleccionado'>
          <button className="volver" onClick={volver}> Volver</button> 
          {load ? <Spinner /> : <ItemDetail item={selectedItem} />}
        </div>
      )
    
}


export default ItemDetailContainer