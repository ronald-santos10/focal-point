"use client";

import { useState } from "react";
import "../../../styles/create-task-modal.scss";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Props = {
  closeAction: () => void;
  createAction: (title: string) => void;
};

export const CreateTaskModal = ({ closeAction, createAction }: Props) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    createAction(taskTitle);
    setTaskTitle("");
    closeAction();
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  return (
    <div className="container-modal">
      <h2>Nova tarefa</h2>
      <div className="form">
        <span>Título</span>
        <Input
          placeholder="Digite"
          value={taskTitle}
          onChange={handleInputChange}
        />
      </div>
      <div className="buttons">
        <Button label="Cancelar" onClick={closeAction} color="tertiary" />
        <Button label="Adicionar" onClick={handleAddTask} color="primary" />
      </div>
    </div>
  );
};
