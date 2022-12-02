import React, { useState } from 'react';
import {v4 as uuidv4} from "uuid"

import BotaoAdicionar from '../components/BotaoFlutuante';

const Home = () => {
    const [products, setProducts] = useState([
        {
            id: '1',
            name: 'Mouse',
            details: 'lorem ipusm dolor'
        }
    ])

    const handleAddProduct = (productTitle, productDetail) => {
        const newProducts = [...products, {
            name: productTitle,
            id: uuidv4(),
            details: productDetail
        }]
        setProducts(newProducts)
    }

    return (  
        <>
            <BotaoAdicionar handleAddProduct={handleAddProduct}/>
        </>
    );
}

export default Home;
