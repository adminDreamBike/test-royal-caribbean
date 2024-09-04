
import { Container, TableTask } from "./TaskList.styled"
import { useContext } from "react";
import { TaskContext } from "../contexts/task";
import { useState } from "react";

export const TaskList = ({ tasks = [] }) => {
    const { editTask, deleteTask } = useContext(TaskContext);
    const [editableInput, setEditableInput] = useState(true)

    const handleEditTask = (task) => { 
        event.preventDefault()
        
        setEditableInput(false)
    }
    console.log('tsask', tasks)
    return (
        <Container>            
            <TableTask>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Completed?</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks?.map(task => {
                            return (
                                <tr key={task.id}>
                                    <td>{task.id}</td>
                                    <td><input type="text" defaultValue={task.title} disabled={editableInput} /></td>
                                    <td><input type="text" defaultValue={task.description} disabled={editableInput} /></td>
                                    <td><input type="checkbox" disabled={editableInput} checked={task.isComplete ? true : false}/></td>
                                    <td><button onClick={() => deleteTask(task.id)}>❌</button></td>
                                    <td><button onClick={() => handleEditTask(task)}>📝</button></td>
                                </tr>
                            )
                        })
                    }                    
                </tbody>
            </TableTask>
        </Container>
    )
}