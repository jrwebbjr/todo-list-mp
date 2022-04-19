import { useState } from 'react';
import './App.css';
import Form from '../../components/form/Form';
import TodoListItem from '../../components/TodoListItem/TodoListItem';
import TodoList from '../../components/TodoList/TodoList';
import CompletedTodoList from '../../components/CompletedTodoList/CompletedTodoList';



function App() {
  const [task, setTask] = useState([]);
  return (
    <div className="App">
      <div className='container'>
        <h1>My To Do List:</h1>
        <p className='p'>New Task</p>
        <Form />
        <h2 className='h2'>To Do Items:</h2>
        <TodoList />
        <h2>Completed Tasks</h2>
        <CompletedTodoList />
      </div>
    </div>
  );
}

export default App;
