'use client'

import "../../../styles/task.scss";
import { IconTrash } from "./icon-trash";

type Props = {
  label: string;
};

export const Task = ({ label }: Props) => {
  const handleDeleteTask = () => {
    console.log("apagado");
  };

  return (
    <div className="task">
      <div className="start">
        <input type="checkbox" id={label} className="custom-checkbox"></input>
        <span className="name-task">{label}</span>
      </div>
      <IconTrash size={24} onClick={handleDeleteTask} />
    </div>
  );
};
