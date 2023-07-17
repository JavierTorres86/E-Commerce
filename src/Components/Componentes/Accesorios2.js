import { useState, useEffect } from 'react';
import Item from '../ItemListContainer/Item';
import data from './Productos/arrayProductos.json';

const Accesorios2 = () => {
  const [productos, setProductos] = useState([]);
  const data1 = data.filter((p) => p.category=== 'accesorios');

  useEffect(() => {
    setProductos(data1);
  }, []);

  return (
    <div className='muestra'>      
      {productos.map((p) => (
        <Item
          key={p.id}
          name={p.name}
          description={p.description}
          stock={p.stock}
          image={p.image}
          price={p.price}
          id={p.id}
          category={p.category}
        />
      ))}
    </div>
  );
};

export default Accesorios2;
