import Image from "next/image";

import Tada from "react-reveal/Tada";

import logoImg from "@/static/images/logo.jpeg";
import iconLogo from "@/static/images/iconLogo.jpeg";

import { Layout } from "@/components/Layout";
import Carrousel from "@/components/Carrousel";

import image1 from "@/static/images/teacherbg.jpg";
import image2 from "@/static/images/study2.jpg";
import officeImage from "@/static/images/friends.png";

const AboutUs = () => {
  const photos = [image1, image2];

  return (
    <Layout>
      <div className="margin-top-page ">
        {/* <div>
          <Carrousel photos={photos} />
        </div> */}

        <section className="flex justify-center items-center pt-6 ">
          <Image className="w-80 md:w-96" alt="icon" src={logoImg} />
        </section>
          <section className="flex flex-col items-center ">
          <h1 className="  w-3/4 text-3xl  md:text-4xl  font-semibold text-primaryColor mt-8 mb-4">
            ¡Queremos verte triunfar y te ayudaremos a que lo logres!
          </h1>
        </section>

        <section className="container mx-auto mt-10  w-3/4 ">
          <p className="pb-6 text-lg md:text-xl text-gray-600 mb-4">
            En Speak Call Lingo, no solo enseñamos inglés, sino que también
            transformamos vidas. Somos más que una academia; somos una comunidad
            dinámica donde el aprendizaje se fusiona con el desarrollo personal
            y el liderazgo. Nuestro enfoque va más allá de la enseñanza de
            gramática y vocabulario; se trata de empoderar a jóvenes y adultos
            para que se conviertan en líderes en un mundo cada vez más
            globalizado. Nos comprometemos a proporcionar un ambiente de
            aprendizaje estimulante y de apoyo, utilizando métodos modernos y
            tecnología avanzada para garantizar el éxito de nuestros estudiantes
            en un mundo en constante evolución.
          </p>
        </section>

        <section className="container mx-auto mt-10  w-3/4 ">
          <div className="border-b border-gray-400 pb-4 mb-3">
            <h1 className="text-2xl font-medium">Nuestra misión</h1>
          </div>
          <p className="pb-6 text-lg md:text-xl text-gray-600 mb-4">
            Transformar el proceso de aprendizaje del inglés con los altos
            estándares internacionales y orientar a los estudiantes a las nuevas
            tendencias globales de oportunidades y crecimiento profesional
          </p>
        </section>

        <section className="container mx-auto mt-10  w-3/4 ">
          <div className="border-b border-gray-400 pb-4 mb-3">
            <h1 className="text-2xl font-medium">Nuestra visión</h1>
          </div>
          <p className="pb-6 text-lg md:text-xl text-gray-600 mb-4">
            Ser referencia internacional en la transformación de vidas a través
            de la enseñanza del inglés y el fortalecimiento mental,
            proporcionando a los estudiantes las herramientas y conocimientos
            alineados a las tendencias actuales y futuras, para aprovechar las
            oportunidades de crecimiento
          </p>
        </section>
        {/* <section className="flex justify-center items-center pt-6 ">
          <Image width={400} alt="icon" src={officeImage} />
        </section> */}
      
        <Tada>
          <div className="flex justify-center pt-12">
            <Image className="w-44 md:w-28" src={iconLogo} alt="logo img" />
          </div>
        </Tada>
      </div>
    </Layout>
  );
};

export default AboutUs;
