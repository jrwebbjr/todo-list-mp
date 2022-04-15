import toDoListData from "../../data";
import { IoIosAddCircle } from 'react-icons/io';




export default function ToDoTasks(props){
    return (
        <div>
            {toDoListData.map((todo) => {
                if(todo.completed !== true){
                    return (
                        <ul className="list">
                            <li className="list-item">{todo.title}<button className="Button"><IoIosAddCircle />Done</button></li>
                        </ul>
                    )
                }
            })}
        </div>
    )
}





