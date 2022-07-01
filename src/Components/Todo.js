import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Todo = () => {
    const [itemText, setItemText] = useState('');
    const [Listitems, setListItems] = useState([]);
    const [isUpdating, setIsUpdating] = useState('');
    const [updateItemText, setUpdateItemText] = useState('');

    //add new todo item to database
    const addItem = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://shielded-lake-04986.herokuapp.com/api/item', { item: itemText })
            setListItems(prev => [...prev, res.data]);
            setItemText('');
        } catch (err) {
            console.log(err);
        }
    }

    //fetch all todo items from database
    useEffect(() => {
        const getItemsList = async () => {
            try {
                const res = await axios.get('https://shielded-lake-04986.herokuapp.com/api/items')
                setListItems(res.data);
                console.log('render')
            } catch (err) {
                console.log(err);
            }
        }
        getItemsList()
    }, []);




    return (
        <div>
            <h1>To do list </h1>
            <form action="" onSubmit={e => addItem(e)}>
                <input type="text" placeholder='Add to do item' onSubmit={e => addItem(e)} />
                <button type='submit'>Add Task</button>
            </form>

        </div>
    );
};

export default Todo;