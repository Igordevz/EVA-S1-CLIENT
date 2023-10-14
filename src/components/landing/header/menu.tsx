"use client";
import Image from "next/image";
import menuImg from "../../../../public/menu-aberto.png";
import { useState } from "react";
import close from "../../../../public/x.png";

import * as S from "./headerstyle";
import Link from "next/link";
import github from "../../../../public/mdi_github.png";

export default function MenuContainer() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {menu ? (
        <>
          <S.MenuDrop>
            <Image src={close} alt="close" onClick={() => setMenu(!menu)} />
            <nav>
              <nav className="items-nav">
                <Link href="/IA/differential">Diferencial</Link>
                <a href="#">Intelêgincia Artificial</a>
                <Link href="/auth/login">Login</Link>
                <Link href="/auth/singin">Cadastro</Link>
                <a href="#">
                  Para Desenvolvedores <code>if(dev)</code>
                </a>
                <a href="">Github</a>
              </nav>
            </nav>
          </S.MenuDrop>
        </>
      ) : (
        <S.Menus>
          <Image alt="menu" src={menuImg} onClick={() => setMenu(!menu)} />
        </S.Menus>
      )}
    </>
  );
}
