import Image from "next/image";

import Tada from "react-reveal/Tada";

import logoImg from "@/static/images/logo.jpeg";
import iconLogo from "@/static/images/iconLogo.jpeg";
import tallerImg from "@/static/images/book.svg";
import calendarIcon from "@/static/images/calendar.svg";


import { Layout } from "@/components/Layout";
import Carrousel from "@/components/Carrousel";
import Jump from "react-reveal/Jump";

import image1 from "@/static/images/teacherbg.jpg";
import image2 from "@/static/images/study2.jpg";

const Courses = () => {
  const photos = [image1, image2];

  return (
    <Layout>
      <div className="margin-top-page ">
        <section className="flex flex-col items-center justify-center py-8 lg:pb-20 bg-primary text-white border-0">
          <div className="text-center">
            <Jump>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                MODALIDAD PRESENCIAL
              </h1>
            </Jump>
          </div>
        </section>

        <section className="flex justify-center items-center">
          <Image className="w-80 md:w-96" alt="icon" src={logoImg} />
        </section>

        <section className="container mx-auto mt-10 w-3/4 ">
          <div className="border-b border-gray-400 pb-4 mb-3 flex items-center gap-2">
            <h1 className="text-2xl font-medium">Nuestros Cursos</h1>
            <Image src={tallerImg} alt="icon" className="w-14" />
          </div>
          <p className="pb-6 text-xl text-gray-600 mb-4">
            Nuestros cursos están enfocados en que obtengas resultados en tiempos recórd!
          </p>
          <div className="border-b border-gray-400 pb-4 mb-3 flex items-center gap-2">
            <h1 className="text-2xl font-medium">Horarios</h1>
            <Image src={calendarIcon} alt="icon" className="w-12" />
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            
            <div>
              <ul className="list-disc pl-6">
                <li className="mt-4 text-lg md:text-xl text-gray-600 mb-2">Duración: 10 meses – 20 meses</li>
                <li className="mt-4 text-lg md:text-xl text-gray-600 mb-2">Curso Semanal – 1 hora y 20 min. Diarias - 10 meses</li>
                <li className="mt-4 text-lg md:text-xl text-gray-600 mb-2">Curso Fin de Semana - 3 horas semanales - 20 meses</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              {/* You can add any additional content or images here */}
            </div>
          </div>
        </section>

       

        <Tada>
          <div className="flex justify-center pt-12">
            <Image className="w-44 md:w-28" src={iconLogo} alt="logo img" />
          </div>
        </Tada>
      </div>
    </Layout>
  );
};

export default Courses;
