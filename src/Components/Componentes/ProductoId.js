import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import arrayProductos from "./Productos/arrayProductos.json";
import Contador from "./Contador/Contador";

const ProductoId = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const seleccionarProducto = arrayProductos.find((p) => p.id === parseInt(id));
    setProducto(seleccionarProducto);
  }, [id]);

  return (
    <div className="productoseleccionado">
      {producto && (
        <div>
         <h3 className="infopantalla3">{producto.name}</h3>
         <img className=" producto1" src={producto.image} alt={producto.name} />
         <p className='infopantalla3'>{producto.description}</p>
         <p className='infopantalla3'>{producto.price}</p>
         <Contador/>

        </div>
      )}
    </div>
  );
};

export default ProductoId;
