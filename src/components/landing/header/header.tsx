import Image from "next/image";
import { Container } from "./headerstyle";
import github from "../../../../public/mdi_github.png";
import evas from "../../../../public/robobranco.png";
import Link from "next/link";
import MenuContainer from "./menu";

export default function Header() {
  return (
    <Container>
      <div className="title">
        <Link href="/">
          {" "}
          <Image alt="logo" src={evas} width={30} /> EVA - S1
        </Link>
      </div>
      <nav className="items-nav">
        <Link href="/IA/differential">Differential</Link>
        <a href="#">Artificial Intelligence</a>
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/singin">Register</Link>
        <a href="#">
          To Developers<code>if(dev)</code>
        </a>
      </nav>
        <MenuContainer/>
      <div className="external">
        <Image alt="logo-github" src={github} width={25} />
      </div>
    </Container>
  );
}
