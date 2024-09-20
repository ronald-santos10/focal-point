import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import "../../styles/home-page.scss";
import { Logo } from "@/components/ui/logo";

export default function Home() {
  return (
    <div className="view">
      <div className="container">
        <Logo size={200}/>
        <div className="box">
          <Input placeholder="Digite seu nome..." />
        <Link href={"/tasks"}>
          <Button label="Entrar" color="primary"/>
        </Link>
        </div>
      </div>
    </div>
  );
}
