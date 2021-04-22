import './styles.css';
import React from 'react';
import CartIcon from './CartIcon.js';
import NavBarElement from './NavBarElement.js';
import { Link } from 'react-router-dom';
const categories = [
  {id:1, category: '1'},
  {id:2, category: '2'},
  {id:3, category: '3'}
  ]
function Navbar(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">InterstellarFall</Link>
				<div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
					<ul className="navbar-nav ml-auto">
		  				<NavBarElement name="Home" destination="/" />
				      	<NavBarElement name="Productos" destination="/" />
                <li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categorías</a>
							<div className="dropdown-menu" aria-labelledby="dropdown01">
								{categories.map(category =>
												<a href={`/category/${category.id}`} className="dropdown-item">{category.category}</a>
												)}
							</div>
						</li>
						<NavBarElement name="Contacto" destination="/" />
						<CartIcon />
					</ul>
	  			</div>
			</nav>
		)
}

export default Navbar;