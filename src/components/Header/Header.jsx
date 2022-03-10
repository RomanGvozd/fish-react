import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import './Header.scss';

function Header(props) {

    const setClassName = ({isActive}) => (
        cx("nav__item", {"is-active" : isActive} )
    ) 

	return (
		<>
		<title>Fish</title>
		<header className="header g-content">
                <div className="header__logo">
				
                </div>
                <nav className="header-nav">
                    <ul className="nav__list">
                        <li className="nav__list-item">
                            <NavLink 
                                className={setClassName}
                                to="/"
                            >
                            Категория
                            </NavLink>
                        </li>
                        <li className="nav__list-item">
                            <NavLink 
                                className={setClassName}
                                to="/products"
                            >
                            Продукция
                            </NavLink>
                        </li>
                        <li className="nav__list-item">
                            <NavLink
                                className={setClassName}
                                to="/delivery"
                            >
                            Доставка
                            </NavLink>
                        </li>
                        <li className="nav__list-item">
                            <NavLink
                                className={setClassName}
                                to="/blog"
                            >
                            Блог
                            </NavLink>
                        </li>
                    </ul>
                    <ul className='nav__social'>
                        <li className='nav__social-item'>
                            <div className='item-instagram'></div>
                        </li>
                        <li className='nav__social-item'>
                            <div className='item-telegram'></div>
                        </li>
                        <li className='nav__social-item'>
                            <div className='item-viber'></div>
                        </li>
                    </ul>
                </nav>
		</header>
		</>
	);
}

export default Header;