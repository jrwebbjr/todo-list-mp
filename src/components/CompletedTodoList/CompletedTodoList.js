import { IoIosCloseCircle } from 'react-icons/io';
import TodoListItem from "../TodoListItem/TodoListItem";

const CompletedTodoList = ({ CompletedItems, remove }) => {
    return (
        <>
            <ul className="completed-list">
                {/*CompletedItems.map((item, index) => (
                    <TodoListItem
                        key={item.key}
                        content={item}
                        func={remove}
                        text={<IoIosCloseCircle />}
                        />
                ))*/}
            </ul>
        </>
    );
};

export default CompletedTodoList;