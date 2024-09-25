import React from 'react';

export default function TodoCard({ children, handledeleteTodo, indexno, handleeditTodo }) {
  return (
    <li className='todoItem'>
      {children} {/* The todo text */}
      <div className='actionsContainer'>
        <button
          onClick={() => {
            console.log("Edit button clicked for index: ", indexno);  // Debugging log
            handleeditTodo(indexno);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            console.log("Delete button clicked for index: ", indexno);  // Debugging log
            handledeleteTodo(indexno);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
