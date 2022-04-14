
import { useState } from 'react';

export default function Form(props){
    const [ task, setTask ] = useState({name: ''})

    const handleChange = (evt) => {
        setTask({...task, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        alert(JSON.stringify(task))
    }

    return (
        <form className="app" onSubmit={handleSubmit}>
            <input type="text"
            name="name"
            onChange={handleChange}
            value={task.name}
            />
            <input type="submit" value="Submit Task" />
        </form>
    )
}