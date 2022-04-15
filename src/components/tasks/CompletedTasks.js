import toDoListData from "../../data";
import { IoIosCloseCircle } from 'react-icons/io';

export default function CompletedTasks(props){
    return (
        <div>
            {toDoListData.map((todo) => {
                if(todo.completed === true){
                    return (
                        <ul className="completed-list">
                            <li className="list-item">{todo.title}<button className="remove-button"><IoIosCloseCircle /></button></li>
                        </ul>
                    )
                }
            })}
        </div>
    )
}