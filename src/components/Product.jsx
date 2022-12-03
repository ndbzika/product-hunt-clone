import React from 'react';

import '../styles/Product.css'

const Product = ({product}) => {
    return (  
        <div className='product-container'>
                <div className='product-title'>
                    {product.name}
                </div>
                <div className='product-details'>
                    {product.details}
                </div>
                <div className='buttons-container'>
                    <button className='get-product-button'>See Product</button>
                </div>
        </div>
    );
}

export default Product;