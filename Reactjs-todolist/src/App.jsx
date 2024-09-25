import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  // Load todos from localStorage when the app mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Function to add a new todo
  function handleAddTodo(newTodo) {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));  // Update localStorage as well
    setTodoValue(""); // Clear input after adding
  }

  // Function to delete a todo by its index
  function handledeleteTodo(id) {
    console.log("Deleting todo with index: ", id);  // Debugging log
    const newTodos = todos.filter((_, index) => index !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));  // Update localStorage as well
  }

  // Function to edit a todo
  function handleeditTodo(indexno) {
    console.log("Editing todo with index: ", indexno);  // Debugging log
    const valuetobeEdit = todos[indexno];
    setTodoValue(valuetobeEdit);
    handledeleteTodo(indexno); // Delete the todo before editing
  }

  return (
    <>
      <TodoInput 
        todoValue={todoValue} 
        setTodoValue={setTodoValue} 
        handleAddTodo={handleAddTodo} 
      />
      <TodoList 
        handleeditTodo={handleeditTodo} 
        handledeleteTodo={handledeleteTodo} 
        todos={todos} 
      />
    </>
  );
}

export default App;
