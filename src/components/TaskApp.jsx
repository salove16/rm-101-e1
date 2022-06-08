import React, { useState, useEffect } from "react";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import { AddTask } from "./AddTask";
// import { useState, useEffect } from "react";
import { Tasks } from "./Tasks";

const TaskApp = () => {
  const [allTask, setAllTask] = useState([
    {
      id: 1,
      text: "Push up",
      done: true,
      count: 2,
    },
    {
      id: 2,
      text: "Pull Up",
      done: true,
      count: 3,
    },
    {
      id: 3,
      text: "Squats",
      done: false,
      count: 1,
    },
    {
      id: 4,
      text: "Sprint",
      done: false,
      count: 5,
    },
    {
      id: 5,
      text: "Stairs",
      done: false,
      count: 200,
    },
  ]);
const [completed,setCompleted]=useState(0)

const createTask=(name)=>{
  let count = 0;
for (let i = 0; i < allTask.length; i++) {
  if (allTask[i].text !== name) {
    count++;
  }
}
if (count === allTask.length) {
  let payload = {
    text: name,
    done: false,
    count: 1,
    id: allTask.length,
  }
  setAllTask([...allTask,payload])
}
}


  const check = (id) => {
    let arr = [];
    let c=0;
    for (let i = 0; i < allTask.length; i++) {
      if (allTask[i].id == id) {
        allTask[i].done = !allTask[i].done;
      }
      if(allTask[i].done===true){
        c++;
      }

   
      arr.push(allTask[i]);
    }
    console.log(arr,c);
    setAllTask(arr);
    setCompleted(c)
  };

  const counter = (count, id) => {
    console.log(count);
    let arr = [];
    for (let i = 0; i < allTask.length; i++) {
      if (allTask[i].id == id) {
        allTask[i].count = allTask[i].count + count;
      }
    
      arr.push(allTask[i]);
    }
    setAllTask(arr);
  };
  const deleteItem=(id)=>{
    let arr=[]
    for (let i = 0; i < allTask.length; i++) {
      if (allTask[i].id === id) {
        continue;
      }
    
      arr.push(allTask[i]);
    } 
    setAllTask(arr)
  }
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader tasks={allTask} completed={completed} />
      <AddTask tasks={allTask} createTask={createTask} />
      <Tasks tasks={allTask} counter={counter} check={check} deleteItem={deleteItem}  />
    </div>
  );
};

export default TaskApp;
