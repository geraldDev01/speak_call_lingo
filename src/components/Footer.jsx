import Image from "next/image";
import Link from "next/link";

import logoImg from "@/static/images/logo.jpeg";
import instagram from "@/static/images/instagram.svg";
import facebook from "@/static/images/facebook.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" text-primary pt-6 pb-2 border-t border-slate-300 mt-8 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <div className="w-60 md:w-80">
            <Link href="/">
              <Image alt="icon" src={logoImg} />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/speakcalllingo?mibextid=LQQJ4d"
          >
            <Image className="w-9" src={facebook} alt="instagram icon" />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/speakcalllingo?igshid=MzRlODBiNWFlZA=="
          >
            <Image className="w-10" src={instagram} alt="instagram icon" />
          </Link>
        </div>
      </div>
      <div className="text-center">
        &copy; {currentYear} Speak Call Lingo. Todos los derechos reservados.
      </div>
    </footer>
  );
};
