import toDoListData from '../../data'; 
import './App.css';
import Form from '../../components/form/Form';
import Tasks from '../../components/tasks/CompletedTasks';
import ToDoTasks from '../../components/tasks/ToDoTasks';
import CompletedTasks from '../../components/tasks/CompletedTasks';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>My To Do List:</h1>
        <p className='p'>New Task</p>
        <Form />
        <h2 className='h2'>To Do Items:</h2>
        <ToDoTasks />
        <h2>Completed Tasks</h2>
        <CompletedTasks />
      </div>
    </div>
  );
}

export default App;
