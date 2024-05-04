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
        <section className="flex flex-col items-center ">
          <h1 className="  w-3/4 text-3xl  md:text-4xl  font-semibold text-primary mt-8 mb-4">
            ¡Queremos verte triunfar y te ayudaremos a que lo logres!
          </h1>
          <p className="text-justify mt-4 w-3/4 text-lg md:text-xl text-gray-600 mb-2">
            En Speak Call Lingo, no solo enseñamos inglés, sino que
            transformamos vidas. Somos más que una academia; somos una comunidad
            dinámica donde el aprendizaje se fusiona con el desarrollo personal
            y el liderazgo. ¿Por qué elegirnos? Porque entendemos que el mundo
            está cambiando constantemente, y estamos aquí para liderar esa
            transformación.
          </p>
          <p className="text-justify mt-4 w-3/4 text-lg md:text-xl text-gray-600 mb-2">
            Más que solo aprender un idioma; hablamos de empoderar a jóvenes y
            adultos para que se conviertan en líderes en un mundo cada vez más
            globalizado. Nuestro enfoque innovador no se limita a enseñar
            gramática y vocabulario, sino que despierta el potencial de cada
            individuo, impulsándolos hacia un futuro brillante.
          </p>
          <p className="text-justify mt-4 w-3/4 text-lg md:text-xl text-gray-600 mb-2">
            El estudiante es nuestro centro de atención. Nos comprometemos a
            proporcionar un ambiente de aprendizaje estimulante y de apoyo,
            donde cada meta se convierta en una realidad. Nos enorgullecemos de
            estar a la vanguardia de las tendencias globales, utilizando métodos
            de enseñanza modernos y tecnología de punta para garantizar el éxito
            de nuestros estudiantes en un mundo en constante evolución.
          </p>
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

export default AboutUs;
