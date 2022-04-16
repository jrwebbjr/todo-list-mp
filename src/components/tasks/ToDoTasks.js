import toDoListData from "../../data";
import { IoIosAddCircle } from 'react-icons/io';


export default function ToDoTasks(props){
    // const handleClick = todo.completed = true;
    return (
        <div>
            <ul className="list">
            {toDoListData.map((todo) => {
                if(todo.completed !== true){
                    return (
                        <li className="list-item">{todo.title}<button className="Button"><IoIosAddCircle />Done</button></li>
                    )
                }
            })}
            </ul>
        </div>
    )
}





