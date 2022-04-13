import "./App/App.css";

export default function Form(){
    return (
        <form className="app" onSubmit={handleSubmit}>
            <input type="text"
            name="task"
            onChange={handleChange}
            value={formData.task}
            />
            <input type="submit" value="Submit Task" />
        </form>
    )
}