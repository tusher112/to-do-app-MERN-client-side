import React, { useState } from 'react';

const Todo = () => {
    const [itemText, setItemText] = useState('');
    const [Listitems, setListItems] = useState([]);
    const [isUpdating, setIsUpdating] = useState('');
    const [updateItemText, setUpdateItemText] = useState('');



    return (
        <div>
            <h1>To do list </h1>
            <form action="">
                <input type="text" placeholder='Add to do item' />
                <button type='submit'>Add Task</button>
            </form>

        </div>
    );
};

export default Todo;