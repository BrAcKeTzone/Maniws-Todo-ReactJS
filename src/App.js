import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [todos, setTodos] = useState([
  ]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    console.log(newTodos)
    setTodos(newTodos)
  }

  const addTodo = (text, date, description) => {
    const id = todos.length + 1;
    const newTodo = { id, text, date, description};
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="border border-primary w-75 p-2 mx-auto rounded m-5 bg-dark">
      <Header title="Todo App"/>
      <AddTodo onAdd={addTodo}/>
     {todos.length > 0 ?  <Todos todos={todos} onDelete={deleteTodo} />:<h3 className="mx-auto d-flex justify-content-center" style={{color:"orange"}}>Task is empty.</h3>}
    </div>
  );
}

export default App;
