import toDoListData from "../../data";
import { IoIosCloseCircle } from 'react-icons/io';
import { IoIosAddCircle } from 'react-icons/io';

export default function(props){
    return (
        <div>
            {toDoListData.map((todo) => {
                if(todo.completed !== true){
                    return (
                        <div>
                            <h5>Not Completed:</h5>
                            <ul className="list">
                                <li>{todo.title}<button className="Button"><IoIosAddCircle /></button></li>
                            </ul>
                        </div>
                    )
                } else if(todo.completed === true){
                    return (
                        <div>
                        <h5>Completed:</h5>
                        <ul className="list">
                            <li>{todo.title}<button className="remove-button"><IoIosCloseCircle /></button></li>
                        </ul>
                        </div>
                    )
                   
                }
            })}
        </div>
    )
}