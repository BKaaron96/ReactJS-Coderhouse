import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList.js';
export default function App(){
return (
  <div className="App">
    <Navbar/>
    <ItemListContainer title="Saludos!!!"/>
    <ItemList />
    
  </div>
);
}
