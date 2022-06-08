import React, { useEffect, useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({createTask}) => {
const [name,setName]=useState("") 


  // NOTE: do not delete `data-testid` key value pair

  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
  onChange={(e)=>{
    setName(e.target.value)
  }}
       
      />
      <button data-testid="add-task-button" onClick={()=>{
        createTask(name)
      }}>
        <b>+</b>
      </button>
    </div>
  );
};

export default AddTask;
