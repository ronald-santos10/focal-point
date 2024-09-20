type Props = {
  label: string;
  onClick?: () => void;
  color: "primary" | "secondary" | "tertiary";
};

export const Button = ({ label, onClick, color }: Props) => {
  return (
    <button onClick={onClick} className={`button ${color}`}>
      {label}
    </button>
  );
};
