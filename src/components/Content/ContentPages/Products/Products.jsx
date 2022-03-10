import React, { useState } from 'react';

import CardProducts from '../../../CardProducts/CardProducts';
import SelectProducts from '../../../SelectProducts/SelectProducts';
import ProductsModal from '../../../ProductsModal/ProductsModal';

import "./Products.scss";

const Products = (props) => {

	const products = [
		{
			id: Math.random(),
			title: "Марлин холодного копчения",
			prise: 55
		},
		{
			id: Math.random(),
			title: "Голец холодного копчения ",
			prise: 45
		},
		{
			id: Math.random(),
			title: "Клыкач холодного копчения",
			prise: 320
		},
		{
			id: Math.random(),
			title: "Кижуч холодного копчения",
			prise: 80
		},
		{
			id: Math.random(),
			title: "Филе сом копченый",
			prise: 15
		},
		{
			id: Math.random(),
			title: "Копченая тушка сома",
			prise: 35
		},
		{
			id: Math.random(),
			title: "Масляная рыба",
			prise: 64
		},
		{
			id: Math.random(),
			title: "Палтус холодного копчения",
			prise: 100
		}
	]

	const [selected, setSelected] = useState("Сортировать");

	const [openProductsModal, setOpenProductsModal] = useState(false);
	const [prise, setPrise] = useState();
	const [title, setTitle] = useState();

	if(selected === "От дешевых к дорогим"){
		products.sort((a, b) => a.prise - b.prise);
	} else if (selected === "От дорогих к дешевым"){
		products.sort((a, b) => b.prise - a.prise);
	} else if (selected === "Акционные"){

	} else if (selected === "По рейтингу"){
		
	}

	const openModal = (prise, title) => {
		setOpenProductsModal(true);
		setPrise(prise)
		setTitle(title)

	}

	return (
		<>
			<main className="g-content products">
				<div className="products-header">
					<h1 className="header__title">Продукция</h1>
					<SelectProducts 
					selected={selected} 
					setSelected={setSelected} 
					/>
				</div>
				<div className="products__content">
					{products.map(product => (
						<CardProducts
						key={product.id}
						product={product}
						openModal={openModal}
						/>
						
					))}
				</div>
			</main>
			{openProductsModal && <ProductsModal setOpenProductsModal={setOpenProductsModal} prise={prise} title={title} />}
		</>
	);
}

export default Products;