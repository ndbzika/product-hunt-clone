import React from 'react';
import { 
    Modal,
    ModalOverlay ,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    FormControl,
    Input,
    Box,
    ModalCloseButton,
    FormLabel, 
} from '@chakra-ui/react';
import { useState } from 'react';

const ModalComp = ({data, setData, dataEdit, isOpen, onClose}) => {
    const [name, setName] = useState(dataEdit.name || '');
    const [detail, setDetail] = useState(dataEdit.detail || '');

    const handleSave = () => {
        if(!name || !detail) return;

        if(nameAlreadyExists()){
            return alert("Produto já cadastrado!")
        }
        if(Object.keys(dataEdit).length){
            data[dataEdit.index] = {name, detail};
        }

        const newDataArray = !Object.keys(dataEdit).length
            ? [...(data ? data : []), {name, detail}]
            : [...(data ? data : [])];

        localStorage.setItem('cad_product', JSON.stringify(newDataArray));

        setData(newDataArray);

        onClose();
    }

    const nameAlreadyExists = () =>{
        if(dataEdit.name!== name && data?.lenght){
            return data.find((item) => item.name === name);
        }
    }



    return (  
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Cadastrar Produto</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <FormControl display='flex' flexDir='column' gap={4}>
                            <Box>
                                <FormLabel>Nome do Produto</FormLabel>
                                <Input
                                    type='text'
                                    value={name}
                                    onChange={(e)=> setName(e.target.value)}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Descrição do Produto</FormLabel>
                                <Input
                                    type='text'
                                    value={detail}
                                    onChange={(e)=> setDetail(e.target.value)}
                                />
                            </Box>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter justifyContent='start'>
                        <Button colorScheme='green' mr={3} onClick={handleSave}>
                            Salvar
                        </Button>
                        <Button colorScheme='red' onClick={onClose}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalComp;