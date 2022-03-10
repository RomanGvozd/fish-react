import React from 'react';

import CardCategories from '../../../CardCategories/CardCategories';

import './Categories.scss';

function Categories() {

    return (
        <main className='categories g-content'>
            <div className="categories-header">
				<h1 className="header__title">Категории</h1>
			</div>
			<div className="categories__content">
				<CardCategories
				 className="categories-card"
				 title="Название категории"
				 subtitle="Здесь должно быть описание категории"
				 />
				<CardCategories
				 className="categories-card"
				 title="Название категории"
				 subtitle="Здесь должно быть описание категории"
				 />
				<CardCategories
				 className="categories-card"
				 title="Название категории"
				 subtitle="Здесь должно быть описание категории"
				 />
				<CardCategories
				 className="categories-card"
				 title="Название категории"
				 subtitle="Здесь должно быть описание категории"
				 />
				<CardCategories
				 className="categories-card"
				 title="Название категории"
				 subtitle="Здесь должно быть описание категории"
				 />
			</div>
        </main>
    );
}


export default Categories;