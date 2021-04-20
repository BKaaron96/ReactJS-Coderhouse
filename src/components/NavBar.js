import './styles.css';
import CartWidget from './CartWidget.js';
function Navbar(){
    return(
    <div className="container">
    <h1>Menú de navegación</h1>
    <nav className="navigationMenu">
    <ul>
      <li>
        <a href="#" target="_blank">Home</a>
      </li>
      <li>
        <a href="#" target="_blank">Productos</a>
      </li>
      <li>
        <a href="#" target="_blank">Categorías</a>
      </li>
      <li>
        <a href="#" target="_blank">Contacto</a>
      </li>
    </ul>
    </nav>
    <CartWidget/>

  </div>

    );
}
export default Navbar;