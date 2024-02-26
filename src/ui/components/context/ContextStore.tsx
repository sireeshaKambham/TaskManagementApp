// Context wrapper component
import type { Dispatch, SetStateAction} from 'react';
import React, { useState } from 'react';
import tasks from '../../data/tasks.json'

interface ITask {
    id: string;
    title: string;
    description: string;
    deadline: string,
    status: string
}
interface TaskContextInterface {
    task: ITask[];
    setTask: Dispatch<SetStateAction<any>>;
}

export const TaskContext = React.createContext<TaskContextInterface>({} as TaskContextInterface);

interface TaskProps {
    children: React.ReactNode;
}

export const ContextStore = ({ children }: TaskProps): JSX.Element => {
    const [task, setTask] = useState<ITask[]>(tasks);
    return (
        <TaskContext.Provider value={{task,
            setTask}}>
            {children}
        </TaskContext.Provider>
    );
};
