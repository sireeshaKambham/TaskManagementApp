// Context to share data
import { createContext } from "react";
import tasks from "../../data/tasks.json";

// Create context
const DataContext = createContext(tasks);

export default DataContext;
