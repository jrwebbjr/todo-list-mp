import TodoListItem from '../TodoListItem/TodoListItem';
import { IoIosAddCircle } from 'react-icons/io';

const ToDoList = ({ todoListItem, addToCompleted }) => {
    return (
        <>
            <ul>
                {/*TodoList.map((item, index) => (
                    <TodoListItem
                    key={item.key}
                    content={item}
                    func={addToCompleted}
                    text={<IoIosAddCircle />}
                    />
                ))*/}
            </ul>
        </>
    );
};

export default ToDoList;

