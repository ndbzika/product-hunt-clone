import SendIcon from '@mui/icons-material/Send';

import { Button, TextField } from '@mui/material';
import React from 'react';

const AddProduct = ({handleInputChange, inputData}) => {
    return (  
        <div className='add-product-container'>
            <TextField 
                required 
                id='outlined-required' 
                label='Nome do Produto' 
                variant="filled"
                onChange={handleInputChange} 
                value={inputData}
            />
            <TextField 
                required 
                id="filled-textarea" 
                label="Descrição do Produto" 
                placeholder="Diga o que achou do produto..." 
                multiline 
                variant="filled"
                onChange={handleInputChange} 
                value={inputData}
            />
            <Button variant="contained" endIcon={<SendIcon/>}>
                Adicionar
            </Button>
        </div>
    );
}

export default AddProduct;