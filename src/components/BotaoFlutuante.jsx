import * as React from 'react';

import {Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
//import Product from './AddProduct';

const BotaoAdicionar = ({handleAddPageProduct}) => {

    return (  
        <Fab color="primary" aria-label="add" onClick={handleAddPageProduct}>
            <AddIcon />
        </Fab>
    );
}

export default BotaoAdicionar;