import {useState} from 'react';
import AddProduct from '../components/AddProduct';

const AddProducts = () => {
    const [inputData, setInputData] = useState("")

    const handleInputChange = (e) =>{
        setInputData(e.target.value);
    };

    const handleAddProductClick = () => {
        handleAddProduct(inputData)
        setInputData("");
    }
    return (  
        <AddProduct/>
    );
}

export default AddProducts;