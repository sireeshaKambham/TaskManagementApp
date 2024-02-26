// // custom hook to delete task 

// import { useContext, useEffect, useState } from "react"
// import {TaskContext} from "../context/ContextStore";

// const useDeleteTask = () => {
//     const [tasks, setTasks] = useState([]);

//     useEffect(() => {
//         // setTasks(getDataFromLocalStorage)
//     },[])

//     const handleDeleteTask = (taskId) => {
//         const updatedTasks = tasks.filter(task => task.id !== taskId)
//         localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//         setTasks(updatedTasks);
//     }
//     return {tasks, handleDeleteTask}

// }
// export default useDeleteTask;