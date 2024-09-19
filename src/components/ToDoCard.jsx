import React from 'react'

export default function ToDoCard(props) {

    const {children, handleDeleteTodo, handleEditTodo, index} = props;
    
  return (
    <li className='todoItem'>
        <div className='actionsContainer'>
        {children}
        <button
        onClick={() => {handleEditTodo(index)}}
        ><i className="fa-solid fa-pen-to-square"></i></button>
        <button
            onClick={() => {handleDeleteTodo(index)}}
        ><i className="fa-solid fa-trash"></i></button>
        </div>
    </li>
  )
}