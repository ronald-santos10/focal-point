"use client";

import { Logo } from "@/components/ui/logo";
import "../../../styles/tasks-page.scss";
import { Button } from "@/components/ui/button";
import { Task } from "@/components/ui/task";
import { useEffect, useState } from "react";
import { CreateTaskModal } from "@/components/home-task/create-task-modal";

export default function Page() {
  const [showCreateTask, setShowCreatetask] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleCreateTask = (title: string) => {
    const updatedTasks = [...tasks, title];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    console.log("Criando task:", title);
  };

  return (
    <div className="page">
      <div className="header">
        <Logo size={150} />
        <h2 className="username">Bem-vindo de volta, Marcus</h2>
        <span className="date">Segunda, 01 de dezembro de 2025</span>
      </div>

      <div className="page-container">
        <div className="container">
          <div className="box-tasks">
            <span className="date">Suas tarefas de hoje</span>
            {tasks.map((task, index) => (
              <Task key={index} label={task} />
            ))}
            <span className="date">Tarefas finalizadas</span>
            <Task label="Levar o lixo para fora" />
          </div>
          <Button
            label="Adicionar nova tarefa"
            onClick={() => setShowCreatetask(true)}
            color="primary"
          />
        </div>
        {showCreateTask && (
          <CreateTaskModal
            closeAction={() => setShowCreatetask(false)}
            createAction={handleCreateTask}
          />
        )}
      </div>
    </div>
  );
}
