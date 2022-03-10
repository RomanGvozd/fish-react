import React, {useState} from 'react'

import './SelectProducts.scss';

const SelectProducts = ({selected, setSelected}) => {

    const [isActive, setIsActive] = useState(false);
    

    const options = ["По рейтингу", "От дешевых к дорогим", "От дорогих к дешевым", "Акционные"];

    return(
        <div className='select-products'>
            <div 
            className={isActive ? 'select-products__button select-products__button-active' : 'select-products__button'}
            onClick={() => setIsActive(!isActive)}
            >
            {selected}
            </div>
            {isActive && (
                <div className='select-products__content'>
                    {options.map(option => (
                        <div 
                        className='content__item'
                        onClick={
                            (e) => {
                                setIsActive(false)
                                setSelected(option)
                            }
                        }
                        >
                        {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SelectProducts;