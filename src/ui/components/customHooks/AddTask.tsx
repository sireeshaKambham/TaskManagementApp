// custom hook to add new task
import { useState } from "react";
import data from "../../data/tasks.json";

const AddTaskHook = () => {
  const [tasks, setTasks] = useState(data);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return {
    tasks,
    addTask,
  };
};
export default AddTaskHook;
