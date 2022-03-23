import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddTodo from "./components/AddTodo";

import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    console.log("get todos")
    try {

      const { data } = await axios.get("https://lab-to-do-api.herokuapp.com/todo");
      console.log(data)
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log('carregou esse cara')
    getTodos();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtodo" element={<AddTodo />} />
        <Route
          path="/todolist"
          element={<TodoList todos={todos} getTodos={getTodos} />}
        />
      </Routes>
    </div>
  );
}

export default App;
