// App routes component
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../shared/ErrorPage";
import TaskList from "../tasks/TaskList";
import EditTask from "../tasks/EditTask";
import AddTask from "../tasks/AddTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "taskList",
    element: <TaskList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "editTask",
    element: <EditTask />,
    errorElement: <ErrorPage />,
  },
  {
    path: "addTask",
    element: <AddTask />,
    errorElement: <ErrorPage />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
