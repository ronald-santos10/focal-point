'use client'

import { useState } from "react";
import "../../../styles/task.scss";
import { IconTrash } from "./icon-trash";
import { TrashTaskModal } from "../home-task/trash-task-modal";

type Props = {
  label: string;
};

export const Task = ({ label }: Props) => {
  const [showTrashTask, setShowTrashtask] = useState(false);

  const handleDeleteTask = () => {
    console.log("apagado");
  };

  return (
    <div className="task">
      <div className="start">
        <input type="checkbox" id={label} className="custom-checkbox"></input>
        <span className="name-task">{label}</span>
      </div>
      <IconTrash size={24} onClick={() => setShowTrashtask(true)} />
      {showTrashTask && <TrashTaskModal closeAction={() => setShowTrashtask(false)} trashAction={handleDeleteTask}/>}
    </div>
  );
};
