import useContador from "./UseContador";

function Contador(){

  const {contador,incrementar, decrementar,resetear} = useContador(0);
  return (
    <div className='contador'>
         <h3 className ="count"> {contador}</h3>
         <button className='bt1' onClick={incrementar}>+</button>         
        {/* <button className='bt2' onClick={resetear}>VACIAR</button>*/}
         <button className='bt2' onClick={decrementar}>-</button> 
         <button className='bt3' >Agregar al carrito</button> 
       
    </div>
  )
}

export default Contador

