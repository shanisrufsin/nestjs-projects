import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const ItemList = ({ itemObjects, setCurrentId, deleteItem }) => {
    return (
        <List>
            {Object.keys(itemObjects).map((id) => (
                <ListItem key={id}>
                    <ListItemText primary={itemObjects[id].name} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="edit" onClick={() => setCurrentId(id)}>
                            <Edit />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(id)}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};

export default ItemList;
