import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux";

import SelectProductsModal from '../SelectProductsModal/SelectProductsModal';
import {createItem} from '../../store/basked/actions';

import "./ProductsModal.scss";

const ProductsModal = ({setOpenProductsModal, prise, title}) => {
    const store = useSelector((store) => store); 
    const dispatch = useDispatch();

	const handleAddItem = () => {
		setOpenProductsModal(false)
        dispatch(createItem(title, allPrise, weight));
	}

    const [selected, setSelected] = useState(100);

    let allPrise = selected * prise / 100;
    let weight = selected;

    return (
        <div className="background-modal">
            <div className="products-modal">
                <div className="modal__header">
                    <h1 className="header__title">Название продукта</h1>
                    <button 
                    className="header__delete"
                    onClick={()=>setOpenProductsModal(false)}
                    ></button>
                </div>
                <div className="modal__content">
                    <div className="content__imputs">
                        <SelectProductsModal 
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <p className="content__prise">Общая стоимость: {selected * prise / 100} грн</p>
                    </div>
                    <div className="content__image"></div>
                </div>
                <button 
                className="modal__submit"
                onClick={handleAddItem}
                >Добавить</button>
            </div>
        </div>
    )
}

export default ProductsModal;