import './App.css';
import Navbar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList.js';
import Cart from './components/Cart.js';
import Footer from './components/Footer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App(){
return (
  <BrowserRouter>
  <div className="App">
  <Navbar/>
  <Switch>
  <Route exact path='/'>
		      		<ItemList />
		      	</Route>
            <Route path='/item/:id'>
		      		<ItemDetailContainer />
		      	</Route>
            <Route path='/cart'>
		      		<Cart />
		      	</Route>
            </Switch>
    		<Footer />
    	</div>
    </BrowserRouter>
);
}
