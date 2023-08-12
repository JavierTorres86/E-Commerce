import React, { useState } from 'react';


const ItemCount = ({ stock, initial, onAdd }) => {

  const [count, setCount] = useState(initial);
 
  const incrementar = () => {
    if(count<stock){
      setCount(count+1)
    }
  }
  const decrementar = () => {
    if(count>initial){
      setCount(count-1)
    }
  }
  return (
    <div>
      <div className='muestra'>
        <div className='col'>
          <button onClick={() => decrementar()} className='btn btn_item_count'   >-</button>
        </div>
        <div className='col'>
          <h3 className='cantidad'>{count}</h3>
        </div>
        <div className='col'>
          <button onClick={() => incrementar()} className='btn btn_item_count' >+</button>
        </div>
      </div>
      <div >
        <button className='count'  onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;