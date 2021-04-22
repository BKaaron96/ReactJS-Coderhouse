import React from 'react';
import PanelContainer from './PanelContainer.js';
import ProductImage from './rogstrix.jpg';

const style = {
	card: {
		marginTop: 20,
		width: '30%',
		marginRight: 'auto',
		marginLeft: 'auto',
		paddingTop: 20,
	},
	image: {
		width: 200,
		heigth: 200,
		marginRight: 'auto',
		marginLeft: 'auto',
	},
}

const Item = function({id, name, brand, price, initial, min, max}){
	const addToCart = function(quantity){console.log('Se agregaron '+ quantity + ' unidades al carrito')}
	return(
		<div className="card" style={style.card}>
			<h3>{name}</h3>
			<h5>{brand}</h5>
			<p>${price}</p>
  			<img style={style.image} className="card-img-top img-thumbnail" src={ProductImage} alt="product-image"/>
			  <PanelContainer max={max} min={min} initial={initial} onAdd={addToCart} text="Agregar al carrito"/>
		</div>
		);
}

export default Item; 