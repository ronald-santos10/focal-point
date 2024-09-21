"use client";

import { Logo } from "@/components/ui/logo";
import "../../../styles/tasks-page.scss";
import { Button } from "@/components/ui/button";
import { Task } from "@/components/ui/task";
import { useEffect, useState } from "react";
import { CreateTaskModal } from "@/components/home-task/create-task-modal";

export default function Page() {
  const [showCreateTask, setShowCreatetask] = useState(false);
  const [tasks, setTasks] = useState<{ title: string; completed: boolean }[]>(
    []
  );

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleCreateTask = (title: string) => {
    const newTask = { title, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    console.log("Criando task:", title);
  };

  const handleTrashTask = (taskTitle: string) => {
    const updatedTasks = tasks.filter((task) => task.title !== taskTitle);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleToggleTask = (taskTitle: string) => {
    const updatedTasks = tasks.map((task) =>
      task.title === taskTitle ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
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
            <div className="task-width">
              {tasks
                .filter((task) => !task.completed)
                .map((task, index) => (
                  <Task
                    key={index}
                    label={task.title}
                    onDelete={handleTrashTask}
                    onToggle={() => handleToggleTask(task.title)}
                    completed={task.completed}
                  />
                ))}
            </div>
            <span className="date">Tarefas finalizadas</span>
            <div className="task-width">
              {tasks
                .filter((task) => task.completed)
                .map((task, index) => (
                  <Task
                    key={index}
                    label={task.title}
                    onDelete={handleTrashTask}
                    onToggle={() => handleToggleTask(task.title)}
                    completed={task.completed}
                  />
                ))}
            </div>
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
