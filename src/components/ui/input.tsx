type Props = {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string
};

export const Input = ({ placeholder, onChange, value }: Props) => {
  return <input type="text" placeholder={placeholder} className="input" onChange={onChange} value={value}/>;
};
