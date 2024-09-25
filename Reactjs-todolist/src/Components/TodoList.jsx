import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList({ todos, handleeditTodo, handledeleteTodo }) {
  return (
    <ul className="main">
      {todos.map((todo, index) => (
        <TodoCard
          key={index}
          indexno={index}
          handleeditTodo={handleeditTodo}
          handledeleteTodo={handledeleteTodo}
        >
          {todo}
        </TodoCard>
      ))}
    </ul>
  );
}
