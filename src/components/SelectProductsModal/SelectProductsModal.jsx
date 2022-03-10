import React, {useState} from 'react'

import './SelectProductsModal.scss';

const SelectProductsModal = ({selected, setSelected}) => {

    const [isActive, setIsActive] = useState(false);
    

    const options = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

    return(
        <div className='select-products-modal'>
            <div 
            className={isActive ? 'select-products-modal__button select-products-modal__button-active' : 'select-products-modal__button'}
            onClick={() => setIsActive(!isActive)}
            >
            {selected} гр
            </div>
            {isActive && (
                <div className='select-products-modal__content'>
                    {options.map(option => (
                        <div 
                        className='content-modal__item'
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

export default SelectProductsModal;