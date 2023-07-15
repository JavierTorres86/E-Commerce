import useContador from '../../UseContador'

function Contador(){

  const {contador,incrementar, decrementar,resetear} = useContador(0);
  


  return (
    <div className='contador'>
         <h3 className ="count"> {contador}</h3>
         <button className='bt1' onClick={incrementar}>Agregar al Carrito</button> 
         <button className='bt2' onClick={resetear}>VACIAR</button>
         <button className='bt1' onClick={decrementar}>Quitar</button> 
       
    </div>
  )
}

export default Contador

