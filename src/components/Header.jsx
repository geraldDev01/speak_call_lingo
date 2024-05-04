import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-reveal";

import menuImg from "@/static/images/menu.svg";
import logoImg from "@/static/images/logo.jpeg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const itemStyle =
    "text-primary font-semibold cursor-pointer hover:text-baseColor block py-4 py-0";

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <header className="text-lg flex justify-between items-center border-b-2 border-secondary h-24 w-full bg-white  fixed top-0 z-50">
      
          <div className="flex gap-x-8 ml-8 text-2xl w-44 md:w-60  ">
            <Link href="/">
              <Image alt="icon" src={logoImg} />
            </Link>
          </div>
          <div className="md:hidden mr-8 mt-2">
            <button onClick={toggleMenu} className="focus:outline-none">
              <Image width={40} src={menuImg} alt="menu icon" />
            </button>
          </div>
          <div className="hidden md:flex gap-x-8 mr-8">
            <Link href="/">
              <span className={itemStyle}>Inicio</span>
            </Link>
            <Link href="/AboutUs">
              <span className={itemStyle}>Sobre Nosotros</span>
            </Link>
            <Link href="/Courses">
              <span className={itemStyle}>Cursos</span>
            </Link>
            <span className={itemStyle}>Contáctanos</span>
          </div>
      
      </header>
      {isOpen && (
        <Fade>
          <div className="md:hidden bg-white w-full absolute z-50 text-center text-lg border-primary border-b-2 shadow-lg">
            <Link href="/">
              <span className={itemStyle}>Inicio</span>
            </Link>
            <Link href="/AboutUs">
              <span className={itemStyle}>Sobre Nosotros</span>
            </Link>
            <Link href="/Courses">
              <span className={itemStyle}>Cursos</span>
            </Link>
            <span className={itemStyle}>Contáctanos</span>
          </div>
        </Fade>
      )}
    </>
  );
};
