import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {deleteItem} from '../../store/basked/actions';


import "./Basked.scss";

const Basked = ()=> {
    const store = useSelector((store) => store); 
    const dispatch = useDispatch();

    const [isShow, setIsShow] = useState(false);

    const toggleIsShow = () => {
        setIsShow(!isShow);
    }

    const deleteItemClick = (id) => {
        dispatch(deleteItem(id));
    };

    console.log(store.basked)

    const totalPrise = store.basked.reduce((acc, item) => (acc + item.prise), 0);
    const totalWeight = store.basked.reduce((acc, item) => (acc + item.weight), 0);

    return (
        <div className={isShow ? "basked basked-open" : "basked"}>
            <div 
            className="basked__button" 
            onClick={toggleIsShow}
            >
                <div className="number-length-item">{store.basked.length}</div>
                <div className="button__image"></div>
            </div>

            <div className="basked__list">
                {store.basked.map((baskedItem, index) => (
                    <div 
                    key={index}
                    className="basked__item"
                    >
                        <div className="basked__item-image">
                        </div>
                        <div className="basked__item-content">
                            <h4 className="item-content__title">{baskedItem.title}</h4>
                            <p className="item-content__prise">{baskedItem.prise} грн за {baskedItem.weight} гр</p>
                            <button className="item-content__delete" onClick={() =>deleteItemClick(baskedItem.id)}></button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="basked__footer">
                <p className="footer__prise">
                    Сумма к оплате: {totalPrise} грн
                </p>
                <button className="footer__button">
                    Купить
                </button>
            </div>
		</div>
    )
}

export default Basked;