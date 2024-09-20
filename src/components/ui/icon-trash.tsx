import Image from "next/image";
type Props = {
  size: number;
  onClick: () => void;
};

export const IconTrash = ({ size, onClick }: Props) => {
  return (
      <Image
        src={"/icon-trash.svg"}
        alt="icon trash"
        width={size}
        height={size}
        quality={100}
        onClick={onClick}
      />
  );
};
