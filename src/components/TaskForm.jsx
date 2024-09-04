import { useContext } from "react";
import { TaskContext } from "../contexts/task";
import { useState } from "react";
import { FormStyled, FormInputsStyled } from "./TaskForm.styled";

export const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [isCompleted, setIsCompleted] = useState();

  const handleNewTask = () => {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      description: description,
      isComplete: isCompleted
    };
    addTask(newTask);
  };
  return (
    <FormStyled>
      <FormInputsStyled>
        <label htmlFor="newTask">New Task</label>
        <input
          type="text"
          id="newTask"
          placeholder="Enter title"
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <label htmlFor="description">Task Descrition</label>
        <input
          type="text"
          id="description"
          placeholder="Enter descrition"
          onChange={(event) => setDescription(event.target.value)}
          required
        />
        <label htmlFor="completed">Completedo</label>
        <input id="completed" type="checkbox" onChange={() => setIsCompleted(event.target.value)} />
      </FormInputsStyled>
      <button type="button" onClick={handleNewTask}>
        Add
      </button>
    </FormStyled>
  );
};
