import "../../pages/App/App.css";
import { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
const axios = require('axios');

export default function Form(props){
    const [ task, setTask ] = useState("")

    const handleChange = (evt) => {
        setTask({...task, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = async () => {
        try{
          const response = await axios.post(`http://localhost:3001/`, {
            title: task,
            completed: false
          })
        } catch (err) {
          console.log(err)
        }
      }
    

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input className='input' type="text"
            name="name"
            onChange={handleChange}
            required
            value={task.name}
            />
            <button className="new-button" type="submit"><IoIosAddCircle />Task</button>
        </form>
    )
}