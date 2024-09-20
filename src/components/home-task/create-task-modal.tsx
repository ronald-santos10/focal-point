import "../../../styles/create-task-modal.scss"
import { Input } from "../ui/input";

type Props = {
    closeAction: () => void;
  };

export const CreateTaskModal = ({ closeAction }: Props) => {
    return (
        <div className="container-modal">
            <h2>Nova tarefa</h2>
            <div>
                <span>Título</span>
            <Input placeholder="Digite"/>
            </div>
            
            <button onClick={closeAction}>Fechar</button>
        </div>
    )
}