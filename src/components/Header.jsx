import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-reveal";

import menuImg from "@/static/images/menu.svg";
import logoImg from "@/static/images/logo.jpeg";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const itemStyle =
    " font-semibold cursor-pointer hover:text-baseColor block py-4 py-0";

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <header className="text-lg flex justify-between items-center border-b-2 border-secondaryColor h-24 w-full bg-white  fixed top-0 z-50">
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
            <span  className={`${router.pathname == "/" ? "text-baseColor" : "text-primaryColor"} ${itemStyle}`}>Inicio</span>
          </Link>
          <Link href="/AboutUs">
            <span className={`${router.pathname == "/AboutUs" ? "text-baseColor" : "text-primaryColor"} ${itemStyle}`}>Sobre Nosotros</span>
          </Link>
          <Link href="/Courses">
            <span className={`${router.pathname == "/Courses" ? "text-baseColor" : "text-primaryColor"} ${itemStyle}`}>Cursos</span>
          </Link>
          <Link href="/Contact">
            <span className={`${router.pathname == "/Contact" ? "text-baseColor" : "text-primaryColor"} ${itemStyle}`}>Contáctanos</span>
          </Link>
        </div>
      </header>
      {isOpen && (
        <Fade>
          <div className="md:hidden bg-white w-full absolute z-50 text-center text-lg border-primaryColor border-b-2 shadow-lg">
            <Link href="/">
              <span className={`${router.pathname == "/" ? "text-baseColor" : "text-primaryColor"} ${itemStyle}`}>Inicio</span>
            </Link>
            <Link href="/AboutUs">
              <span className={`${router.pathname == "/AboutUs" ? "text-baseColor" : "text-primaryColor"} ${itemStyle}`}>Sobre Nosotros</span>
            </Link>
            <Link href="/Courses">
              <span className={`${router.pathname == "/Courses" ? "text-baseColor" : "text-primaryColor"} ${itemStyle}`}>Cursos</span>
            </Link>
            <Link href="/Contact">
            <span className={`${router.pathname == "/Contact" ? "text-baseColor" : "text-primaryColor"} ${itemStyle}`}>Contáctanos</span>
            </Link>
          </div>
        </Fade>
      )}
    </>
  );
};
