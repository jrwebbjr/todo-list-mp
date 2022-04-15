import toDoListData from "../../data";
import { IoIosCloseCircle } from 'react-icons/io';

export default function CompletedTasks(props){
    const handleClick = todo.completed = true
    return (
        <div>
            <ul className="completed-list">
                {toDoListData.map((todo) => {
                    if(todo.completed === true){
                        return (
                            <li className="list-item">{todo.title}<button className="remove-button"><IoIosCloseCircle /></button></li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}