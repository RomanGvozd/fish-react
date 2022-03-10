import React, {useState} from "react"
import cx from "classnames"

import "./CardProducts.scss";

const CardProducts = ({product, openModal})=>{

	const handleItem = () => {
		openModal(product.prise, product.title)
	}

    return (
		<>
			<div 
			className={cx("card-products")}
			onClick={handleItem}
			>
				<div className="card__prise">{product.prise} грн/100гр</div>
				<div className="card__footer" >
					<h2 className="card__title">{product.title}</h2>
					<p className="card__subtitle"></p>
				</div>
			</div>
		</>
    )
}

export default CardProducts;