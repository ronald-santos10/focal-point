"use client";

import { Logo } from "@/components/ui/logo";
import "../../../styles/tasks-page.scss";
import { Button } from "@/components/ui/button";
import { Task } from "@/components/ui/task";
import { useState } from "react";
import { CreateTaskModal } from "@/components/home-task/create-task-modal";

export default function Page() {
  const [showCreateTask, setShowCreatetask] = useState(false);

  const handleCreateTask = () => {
    console.log("criando task");
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
            <Task label="Lavar as mãos" />
            <Task label="Fazer um bolo" />
            <Task label="Lavar a louça" />
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
