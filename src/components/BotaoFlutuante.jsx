import * as React from 'react';
import {Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add'

const BotaoAdicionar = () => {
    return (  
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    );
}

export default BotaoAdicionar;