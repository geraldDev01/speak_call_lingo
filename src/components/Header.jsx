import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-reveal";

import menuImg from "@/static/images/menu.svg";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const itemStyle =
    "text-primary font-semibold cursor-pointer hover:text-baseColor block py-4 py-0";

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <header className="text-lg flex justify-between items-center border-b border-slate-300 h-24 w-full bg-white  fixed top-0 z-50">
        <Fade duration={1500} top>
          <div className="flex gap-x-8 ml-8 text-baseColor font-bold text-2xl ">
            (lOGO)
          </div>
          <div className="md:hidden mr-8 mt-2">
            <button onClick={toggleMenu} className="focus:outline-none">
              <Image width={40} src={menuImg} alt="menu icon" />
            </button>
          </div>
          <div className="hidden md:flex gap-x-8 mr-8">
            <span className={itemStyle}>Inicio</span>
            <span className={itemStyle}>Sobre Nosotros</span>
            <span className={itemStyle}>Cursos</span>
            <span className={itemStyle}>Contáctanos</span>
          </div>
        </Fade>
      </header>
      {isOpen && (
        <Fade>
          <div className="md:hidden bg-white w-full absolute mt-24 z-50 text-center text-lg border-primary border-b-2 shadow-lg">
            <span className={itemStyle}>Inicio</span>
            <span className={itemStyle}>Sobre Nosotros</span>
            <span className={itemStyle}>Cursos</span>
            <span className={itemStyle}>Contáctanos</span>
          </div>
        </Fade>
      )}
    </>
  );
};
