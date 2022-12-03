import React from 'react';
import AddProducts from '../Pages/AddProducts';
import { 
    Modal,
    ModalOver1ay ,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalC10seButton,
    Button,
    FormContr01,
    FormLabe1,
    Input,
    Box,
    ModalCloseButton, 
} from '@chakra-ui/react';
import { useState } from 'react';

import { FormControl } from '@mui/material';

const ModalComp = ({data, setData, dataEdit, isOpen, onClose}) => {
    const [name, setName] = useState(dataEdit.name || '');
    const [detail, setDetail] = useState(dataEdit.detail || '');

    return (  
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOver1ay/>
                <ModalContent>
                    <ModalHeader>Cadastrar Produto</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <FormControl display>

                        </FormControl>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalComp;