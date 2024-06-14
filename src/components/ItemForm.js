import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ItemForm = ({ addOrEditItem, currentId, itemObjects }) => {
    const initialFieldValues = { name: '' };
    const [values, setValues] = useState(initialFieldValues);

    useEffect(() => {
        if (currentId === '') {
            setValues({ ...initialFieldValues });
        } else {
            setValues({ ...itemObjects[currentId] });
        }
    }, [currentId, itemObjects]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addOrEditItem(values);
    };

    return (
        <Box component="form" onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
            <TextField
                name="name"
                label="Item Name"
                value={values.name}
                onChange={handleInputChange}
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                {currentId === '' ? 'Add' : 'Update'}
            </Button>
        </Box>
    );
};

export default ItemForm;
