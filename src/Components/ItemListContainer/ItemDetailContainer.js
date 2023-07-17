import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../Componentes/Productos/arrayProductos.json";
import Contador from "../Componentes/Contador/Contador";
import { useNavigate } from "react-router-dom";
import Error from '../Componentes/error';

const ItemDetailContainer = () => {
  const { category,id } = useParams();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();
  const [productoExiste, setProductoExiste] = useState(true);

  useEffect(() => {   
    const seleccionarProducto = data.find((p) =>p.category === category && p.id === parseInt(id));
    setProducto(seleccionarProducto);
    setProductoExiste(!!seleccionarProducto);
    
  }, [id,category]);
  
if(!productoExiste){
  return  <Error />;
 
}else{
  const volver = () => {
    navigate(-1);   
  };
  return (
    <div className="productoseleccionado">
      {producto && (
        <div>
        <button className="volver" onClick={volver}> Volver</button> 
         <h3 className="infopantalla3">{producto.name}</h3>
         <img className=" producto1" src={producto.image} alt={producto.name} />
         <p className='infopantalla3'>{producto.description}</p>
         <p className='infopantalla3'>{producto.price}</p>
         <Contador/>
        </div>
  
      )}
      
    </div>
  );
      }     
};

export default ItemDetailContainer;
