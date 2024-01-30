import Image from "next/image";

import Tada from "react-reveal/Tada";

import logoImg from "@/static/images/logo.jpeg";
import iconLogo from "@/static/images/iconLogo.jpeg";

import { Layout } from "@/components/Layout";
import Carrousel from "@/components/Carrousel";

import image1 from "@/static/images/teacherbg.jpg";
import image2 from "@/static/images/study2.jpg";

const AboutUs = () => {
  const photos = [image1, image2];

  return (
    <Layout>
      <div className="margin-top-page ">
        <div>
          <Carrousel photos={photos} />
        </div>
        <section className="flex justify-center items-center pt-6 ">
          <Image className="w-80 md:w-96" alt="icon" src={logoImg} />
        </section>
        <section className="flex flex-col items-center">
          <h1 className="  w-3/4 text-3xl  md:text-4xl  font-semibold text-primary mt-8">
            ¡Queremos verte triunfar y te ayudaremos a que lo logres!
          </h1>
          <p className="text-justify mt-4 w-3/4 text-lg md:text-xl text-gray-600 mb-2">
            Somos una academia comprometida en la enseñanza y el desarrollo de
            nuevas habilidades que te permita cambiar tu vida aprendiendo un
            nuevo idioma como el inglés y proporcionarte las herramientas
            necesarias para tener éxito en un mundo cada vez más globalizado.
          </p>
          <p className="text-justify mt-4 w-3/4 text-lg md:text-xl text-gray-600 mb-2">
            Nos enfocamos en brindarte un programa educativo de calidad y
            moderno donde alcances la fluidez, combinado con grandes
            oportunidades de empleo en la industria de los call center y
            servicios profesionales con empresas extranjeras.
          </p>
        </section>
        <Tada>
          <div className="flex justify-center pt-12">
            <Image className="w-44 md:w-28" src={iconLogo} alt="logo img" />
          </div>
        </Tada>

        <section className="container mx-auto mt-10  w-3/4 ">
          <div className="border-b border-gray-400 pb-4 mb-3">
            <h1 className="text-2xl font-medium">Nuestro equipo</h1>
          </div>
          <p className="pb-6 text-lg md:text-xl text-gray-600 mb-4">
            Nuestro equipo está integrado por entrenadores (profesores)
            altamente calificados y certificados.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;
