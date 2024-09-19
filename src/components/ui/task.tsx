import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/task.scss";

type Props = {
  label: string;
};

export const Task = ({ label }: Props) => {
  return (
    <div className="task">
      <div className="start">
        <input type="checkbox" id={label} className="custom-checkbox"></input>
        <span className="name-task">{label}</span>
      </div>
      <FontAwesomeIcon icon={faTrashCan} className="icon-trash" />
    </div>
  );
};
