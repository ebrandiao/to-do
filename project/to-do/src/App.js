import './App.css';
import {Navbar} from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {AddTodo} from './components/AddTodo';

import {TodoList} from './components/TodoList';
import {useState} from 'react';
import axios from 'axios';


function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const {data} = await axios.get('https://lab-to-do-api.herokuapp.com/todo/')
    setTodos(data)
  }

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addtodo' element={<AddTodo />} />
        <Route path='/todolist' element={<TodoList todos={todos} getTodos={getTodos} />} />
      </Routes>

    </div>
  );
}

export default App;
