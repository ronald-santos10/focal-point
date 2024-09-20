import "../../../styles/trash-task-modal.scss";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Props = {
  closeAction: () => void;
  trashAction: () => void;
};

export const TrashTaskModal = ({ closeAction, trashAction }: Props) => {
  return (
    <div className="container-modal">
      <h2>Deletar tarefa</h2>
        <span className="description">Tem certeza que você deseja deletar essa tarefa?</span>
      <div className="buttons">
        <Button label="Cancelar" onClick={closeAction} color="tertiary"/>
        <Button label="Deletar" onClick={trashAction} color="secondary"/>
      </div>
    </div>
  );
};
