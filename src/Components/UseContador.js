import { useState } from "react";

function useContador(valorInicial=0){
    const [contador,setContador]= useState(valorInicial);

    const incrementar =() =>{
        setContador(contador +1);
    };
    const decrementar =() =>{
        setContador(contador -1);
    };
    const resetear =() =>{
        setContador(valorInicial);
    };
    return{contador,incrementar,decrementar,resetear};
}
export default useContador;