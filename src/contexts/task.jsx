import { useState } from "react";
import { createContext } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const intialTask = [
    {
      id: 1,
      title: "default task",
      description: "default description",
      isComplete: false,
    },
  ];
  const [tasks, setTasks] = useState(intialTask);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const editTask = (task) => {
    const indexTask = tasks.indexOf(task);
    console.log(indexTask);
  };

  const deleteTask = (taskId) => {
   const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks([...updatedTasks])
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
