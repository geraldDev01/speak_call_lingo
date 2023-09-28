import Link from "next/link";

export const Header = () => {
  const itemStyle =
    "cursor-pointer text-primary hover:text-baseColor font-semibold ";

  return (
    <header className=" text-lg flex justify-between items-center border-b border-slate-300 h-24 w-full fixed top-0 bg-white">
      <div className="flex gap-x-8 ml-8 text-baseColor font-bold text-2xl ">
        SPEACK CALL (lOGO)
      </div>
      <div className="flex gap-x-8 mr-8">
        <span className={itemStyle}>Inicio</span>
        <span className={itemStyle}>Sobre Nosotros</span>
        <span className={itemStyle}>Cursos</span>
        <span className={itemStyle}>Blog</span>
        <span className={itemStyle}>Contactanos</span>
      </div>
    </header>
  );
};
