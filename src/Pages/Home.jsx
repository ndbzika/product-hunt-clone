import React, { useState } from 'react';

//import BotaoAdicionar from '../components/BotaoFlutuante';
import Products from '../components/Products';

const Home = () => {
    const [products, /*setProducts*/] = useState([
        {
            id: '1',
            name: 'Mouse',
            details: 'lorem ipusm dolor'
        },        {
            id: '2',
            name: 'Mouse',
            details: 'lorem ipusm dolor'
        },
    ])

    return (  
        <>
            <Products products={products}/>
        </>
    );
}

export default Home;
