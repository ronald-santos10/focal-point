import Image from "next/image";
import Link from "next/link";
type Props = {
  size: number;
};

export const Logo = ({ size }: Props) => {
  return (
    <Link href={"/"}>
      <Image
        src={"/logo.svg"}
        alt="logo FocalPoint"
        width={size}
        height={size / 4}
        quality={100}
      />
    </Link>
  );
};
