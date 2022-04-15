import toDoListData from "../../data";
import { IoIosAddCircle } from 'react-icons/io';




export default function ToDoTasks(props){
    return (
        <div>
            {toDoListData.map((todo) => {
                if(todo.completed !== true){
                    return (
                        <ul className="list">
                            <li>{todo.title}<button className="Button"><IoIosAddCircle /></button></li>
                        </ul>
                    )
                }
            })}
        </div>
    )
}





