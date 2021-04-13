import React, { useEffect, useState } from 'react';
import Item from './Item.js';
import Loading from './Loading.js'

const catalog = [
{id:'1', name: '1', brand: '1', price: 50, initial: 2, min: 2, max: 10},
{id:'2', name: '2', brand: '2', price: 100, initial: 1, min: 1, max: 10},
{id:'3', name: '3', brand: '3', price: 20, initial: 4, min: 4, max: 8}
];

const ItemList = function(){
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const task =  new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(catalog);
			}, 2000)});

	task.then(
		res => {
			setProducts(res);
			setLoading(false)
		},
		err => {console.log(err)},
		);

	}, []);

				return <> 
				{loading && <Loading />}
				<div className='row'>
					{products.map(product => 
								<Item 
								id={product.id}
								name={product.name}
								brand={product.brand}
								price={product.price}
								initial={product.initial}
								min={product.min}
								max={product.max}
								/>)};
				</div>
				</>
}

export default ItemList; 