import React, {useState} from "react";

function TODO(){

const[tasks, setTasks] = useState([]);
const[newtask, setNewTask] = useState("");


function handleInputChange(event){
  setNewTask(event.target.value);
} 

function addTask(){

  if(newtask.trim() !== ""){
    setTasks(t => [...t, newtask]);
    setNewTask("");
  }

}

function removeTask(index){
   const updateTask = tasks.filter((_, i) => i !== index);
   setTasks(updateTask);
}

function moveTaskUp(index){
 if(index > 0){
  const updateTasks = [...tasks];
  [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]]
  setTasks(updateTasks);
 }

}
function moveTaskDown(index){
  if(index < tasks.length - 1){
    const updateTasks = [...tasks];
    [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]]
    setTasks(updateTasks);

}
}



  return(<div className="to-do-list">

    <h1>TO-DO-LIST</h1>

    <div>
    <input type="text" placeholder="Enter a task.." value={newtask} onChange={handleInputChange}/>
     <button className="add-btn" onClick={addTask}>ADD</button>   
     
    </div>
      
      <ol>
        {tasks.map((task, index) => 
         
         <li key={index}>
          <span className="text">{task}</span>
          <button className="delete-btn" onClick={() => removeTask(index)}>Delete</button>
          <button className="move-btn" onClick={() => moveTaskUp(index)}>👆</button>
          <button className="move-btn" onClick={() => moveTaskDown(index)}>👇</button>
         </li>
        
        )}
      </ol>
  
  </div>);

}


export default TODO;
