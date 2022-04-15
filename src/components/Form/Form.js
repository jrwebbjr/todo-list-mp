import "../../pages/App/App.css";
import { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';

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
        <form className="form" onSubmit={handleSubmit}>
            <input className='input' type="text"
            name="name"
            onChange={handleChange}
            required
            value={task.name}
            />
            <button className="new-button" type="submit"><IoIosAddCircle />New</button>
        </form>
    )
}