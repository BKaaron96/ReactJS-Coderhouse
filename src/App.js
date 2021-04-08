import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Contador from './components/ItemCount';
export default function App(){
return (
  <div className="App">
    <Navbar/>
    <ItemListContainer title="Saludos!!!"/>
    <Contador/>
    
  </div>
);
}
