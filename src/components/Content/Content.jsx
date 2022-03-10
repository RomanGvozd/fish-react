import React from 'react';
import { Routes, Route } from "react-router-dom";

import Categories from '../Content/ContentPages/Categories/Categories';
import Products from '../Content/ContentPages/Products/Products';
import Delivery from '../Content/ContentPages/Delivery/Delivery';
import Blog from '../Content/ContentPages/Blog/Blog';

import './Content.scss';

function Content() {

    return (
        <main className='content'>
            <Routes>
                <Route path="/" element={<Categories />} />
                <Route path="/products" element={<Products />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </main>
    );
}


export default Content;