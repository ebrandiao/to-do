import React from 'react';
import { TodoItem } from './TodoItem';


const TodoList = ( { todos } ) => {

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map(todo => <TodoItem key={todo._id} {...todo}/>)}

    </div>
  )
}
export default TodoList;
