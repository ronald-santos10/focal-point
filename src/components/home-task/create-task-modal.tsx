import "../../../styles/create-task-modal.scss";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Props = {
  closeAction: () => void;
  createAction: () => void;
};

export const CreateTaskModal = ({ closeAction, createAction }: Props) => {
  return (
    <div className="container-modal">
      <h2>Nova tarefa</h2>
      <div className="form">
        <span>Título</span>
        <Input placeholder="Digite" />
      </div>
      <div className="buttons">
        <Button label="Cancelar" onClick={closeAction} color="tertiary"/>
        <Button label="Adicionar" onClick={createAction} color="primary"/>
      </div>
    </div>
  );
};
