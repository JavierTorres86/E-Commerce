/*import logo from './logo.svg';*/
import './App.css';
import ApiContainer from './Components/ApiContainer';
import { NavBar } from './Components/NavBar/NavBar';
import './Estilos/EstilosProyecto.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Productos from './Productos';


function App() {
  return (
    <div className="App" >
     <NavBar/> 
     <Productos/>
     <ItemListContainer greeting="GIBSON" />
    {/*<ApiContainer/>*/}
    </div>
  );
}

export default App;
