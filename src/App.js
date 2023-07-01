/*import logo from './logo.svg';*/
import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import Componente1 from './Components/Componentes/Componente1';
import Contador from './Components/useState/Contador';
import './Estilos/EstilosProyecto.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App" >
   
     <NavBar/>
     <Componente1/>
     <Contador/>
     <ItemListContainer greeting="GIBSON LES PAUL MODELO 1959" />
     </div>
  );
}

export default App;
