import React, { useState } from 'react';
import data from "./data.json";

//Components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

import './App.css';

function App() {
  const [ toDoList, setToDoList ] = useState(data);
  const [ toDoListID, setListID ] = useState(1);
  
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoListID, task: userInput, complete: false }];
    setListID(toDoListID+1);
    setToDoList(copy)
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask} />
    </div>
  );
}



export default App;
