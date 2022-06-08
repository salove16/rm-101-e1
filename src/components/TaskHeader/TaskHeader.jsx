import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({tasks,completed}) => {
  // sample values to be replaced
  let totalTask = 0+tasks.length;
  let unCompletedTask =totalTask-completed ;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      
      You have <b data-testid="header-remaining-task">{unCompletedTask}  </b>
      of 
      <b data-testid="header-total-task"> {totalTask} </b> Taks remaining
    </div>
  );
};

export default TaskHeader;
