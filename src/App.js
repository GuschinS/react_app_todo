import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from './Todo/AddTodo'

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купить хлеб" },
    { id: 2, completed: false, title: "Купить масло" },
    { id: 3, completed: false, title: "Купить молоко" },
    { id: 4, completed: false, title: "Купить лук" },
    { id: 5, completed: false, title: "Купить помидор" },
    { id: 6, completed: false, title: "Купить огурец" },
    { id: 7, completed: false, title: "Купить яблоко" },
    { id: 8, completed: false, title: "Купить пиццу" },
    { id: 9, completed: false, title: "Купить шоколад" },
    { id: 10, completed: false, title: "Купить сыр" },
    { id: 11, completed: false, title: "Купить сосиски" },
    { id: 12, completed: false, title: "Купить воду" }
  ]);
  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
