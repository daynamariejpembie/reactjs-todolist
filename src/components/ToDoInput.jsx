import React, { useState } from 'react';

export default function ToDoInput(props) {
    const {todoValue, setTodoValue, handleAddTodos} = props;

    const handleChange = (e) => {
        setTodoValue(e.target.value);
    }

  return (
    <header>
        <input value={todoValue}
        onChange={handleChange}
         placeholder="Enter todo..."
         />
        <button onClick={() => {
            handleAddTodos(todoValue);
            setTodoValue('');
        }}>Add</button>
    </header>
  )
}
