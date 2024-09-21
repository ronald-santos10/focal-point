'use client';

import { useState } from "react";
import "../../../styles/task.scss";
import { IconTrash } from "./icon-trash";
import { TrashTaskModal } from "../home-task/trash-task-modal";

type Props = {
  label: string;
  onDelete: (task: string) => void;
  onToggle: () => void;
  completed: boolean;
};

export const Task = ({ label, onDelete, onToggle, completed }: Props) => {
  const [showTrashTask, setShowTrashtask] = useState(false);

  const handleDeleteTask = () => {
    onDelete(label);
    setShowTrashtask(false);
  };

  return (
    <div className="task">
      <div className="start">
        <input 
          type="checkbox" 
          id={label} 
          className="custom-checkbox" 
          checked={completed} 
          onChange={onToggle} 
        />
        <span className={`name-task ${completed ? "completed" : ""}`}>{label}</span>
      </div>
      <IconTrash size={24} onClick={() => setShowTrashtask(true)} />
      {showTrashTask && (
        <TrashTaskModal 
          closeAction={() => setShowTrashtask(false)} 
          trashAction={handleDeleteTask}
        />
      )}
    </div>
  );
};
