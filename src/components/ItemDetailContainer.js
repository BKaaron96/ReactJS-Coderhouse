import React, { useEffect, useState } from 'react';
import Loading from './Loading.js';
import ItemDetail from './ItemDetail.js'

const product = [{id:'1', name: '1', brand: '1', price: 50, initial: 2, min: 2, max: 10, image: 'rogstrix.jpg'}];

const ItemDetailContainer = function(){
const [ item, setItem ] = useState([]);
const [ loading, setLoading] = useState(true);

useEffect( () => {
	const task = new Promise( ( resolve, reject ) => {
		setTimeout(() => {
				resolve(product);
			}, 3000)});

	task.then(
		res => {
			setItem(res);
			setLoading(false)
		},
		err => {console.log(err)},
		);

	}, []);

	return(<div>
		{ loading && <Loading />}
		{item.map(it => 
		<ItemDetail
		id={it.id}
		name={it.name}
		brand={it.brand}
		price={it.price}
		initial={it.initial}
		max={it.max}
		min={it.min}
		image={it.image}
		 />)}
		</div>);
}

export default ItemDetailContainer; 