import React from 'react';

import Product from './Product'

import '../styles/Product.css'

const Products = ({products}) => {
    return (  
        <>
        <div className='products-container'>
            {products.map((product) => (
                <Product product={product}/>
            ))}
        </div>
        </>
    );
}

export default Products;