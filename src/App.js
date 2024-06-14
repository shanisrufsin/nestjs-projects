import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

const App = () => {
    const [itemObjects, setItemObjects] = useState({});
    const [currentId, setCurrentId] = useState('');

    const addOrEditItem = (obj) => {
        if (currentId === '') {
            setItemObjects({ ...itemObjects, [`${Date.now()}`]: obj });
        } else {
            setItemObjects({ ...itemObjects, [currentId]: obj });
        }
        setCurrentId('');
    };

    const deleteItem = (id) => {
        const updatedItems = { ...itemObjects };
        delete updatedItems[id];
        setItemObjects(updatedItems);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Fruit Shop
            </Typography>
            <Box mb={4}>
                <ItemForm {...{ addOrEditItem, currentId, itemObjects }} />
            </Box>
            <ItemList {...{ itemObjects, setCurrentId, deleteItem }} />
        </Container>
    );
};

export default App;
