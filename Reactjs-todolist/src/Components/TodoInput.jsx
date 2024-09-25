import React, { useState } from 'react';

function TodoInput(props) {
  const { handleAddTodo,todoValue,setTodoValue } = props;  // Destructure props correctly

  function onChangeValue(e) {
    setTodoValue(e.target.value);
  }

  return (
    <header>
      <input value={todoValue} onChange={onChangeValue} placeholder="Add a new task" />
      <button onClick={() => {handleAddTodo(todoValue)
        setTodoValue('')
      }}>Add</button>  {/* Correct handleAddTodo */}
    </header>
  );
}

export default TodoInput;
