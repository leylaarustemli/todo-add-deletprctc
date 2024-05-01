import { useState } from "react";
import "./App.css";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, { id: Date.now, title: inputValue }]);
    setInputValue("")
  };

  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id !==id))
    toast('item deleted')
  }

  return (
    <div>
      <form action="">
        <input type="text" onChange={handleInput} value={inputValue} />
        {console.log(inputValue)}
        <button onClick={addTask}>Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
         <div className="btn-li" key={task.id}>
         <li>{task.title}</li>
         <button onClick={()=>deleteTask(task.id)}>delete </button>
         <Toaster/>
         </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
