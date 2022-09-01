import React, { useState } from "react";

const ToDoForm = ({addTask}) => {
    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Task:
                <input type="text" name="task" value={userInput} onChange={handleChange} placeholder="Enter Task"/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default ToDoForm;