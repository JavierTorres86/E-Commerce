import {useState} from 'react'

const Contador = () => {
    
    const[contador,setContador] = useState(0);
    const sumarUno = () => {
        setContador(contador +1);
    }
 
    const Setear = () => {
        setContador(contador - contador);
    }
  return (
    <div className='contador'>
         <h3 className ="count"> {contador}</h3>
        <button className='bt1' onClick={sumarUno}>Agregar</button> 
        <button className='bt2' onClick={Setear}>Eliminar</button>
    </div>
  )
}

export default Contador