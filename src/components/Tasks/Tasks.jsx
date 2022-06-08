import React from "react";
import styles from "./tasks.module.css";
import { Task } from "../Task/index";

const Tasks = ({ tasks, counter, check }) => {
  // NOTE: do not delete `data-testid` key value pair

  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {tasks.map((el) => (
          <Task el={el} key={el.id} counter={counter} check={check} />
        ))}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
