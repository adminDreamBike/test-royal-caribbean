import { TaskList } from "./TaskList"
import { TaskForm } from "./TaskForm"
import { useContext } from "react"
import { TaskContext } from "../contexts/task"

export const Task = () => {
    const { tasks } = useContext(TaskContext)
    return (
        <>
            <TaskForm />
            <TaskList tasks={tasks}/>
        </>
    )
}