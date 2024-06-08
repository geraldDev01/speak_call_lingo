import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-reveal";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
import Tada from "react-reveal/Tada";

import metodoImg from "@/static/images/diploma.svg";
import tallerImg from "@/static/images/study.svg";
import workImg from "@/static/images/work.svg";
import logoImg from "@/static/images/logo.jpeg";
import iconLogo from "@/static/images/iconLogo.jpeg";
import waveIndex from "@/static/images/waveIndex.svg";
import phoneGuy from "@/static/images/phoneGuy.png";
import phoneGirl from "@/static/images/phoneGirl.png";
import fiendsImg from "@/static/images/friends.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Layout } from "@/components/Layout";
import { useFormType } from "@/context";

export default function Index() {
  const { setFormType } = useFormType();
  return (
    <Layout>
      <Image alt="wave" src={waveIndex} className="absolute w-full" />
      <Fade>
        <section className="landing">
          <div className="dark-overlay">
            <div className="landing-inner">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <Tada>
                    <figure>
                      <div className="flex justify-center pt-12">
                        <Image
                          className="w-60 md:w-80"
                          src={iconLogo}
                          alt="logo img"
                        />
                      </div>
                    </figure>
                  </Tada>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  <h1 className="text-2xl text-center md:text-3xl lg:text-3xl font-semibold mb-4 max-w-[80%]">
                    ¡Viví la experiencia de aprender inglés con Speak Call Lingo
                    y conquista el mundo!
                  </h1>

                  <div
                    onClick={() => setFormType(true)}
                    className="flex p-6 justify-center items-center bg-baseColor font-medium text-lg h-16 rounded-xl w-[350px]"
                  >
                    <Link href="/Contactanos">
                      <p className="py-4 text-white">QUIERO EMPEZAR DE CERO</p>
                    </Link>
                  </div>
                  <div
                    onClick={() => setFormType(false)}
                    className="flex p-6 justify-center items-center bg-primaryColor font-medium text-lg h-16 rounded-xl w-[350px]"
                  >
                    <Link href="/Contactanos">
                      <p className="py-4 text-white">
                        {" "}
                        MEJORAR MIS HABILIDADES
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <section className="flex flex-col items-center justify-center h-60 bg-primaryColor text-white border-0">
        <Jump>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
            ES EL MOMENTO DE VER LOS RESULTADOS EN 3 MESES.
          </h1>
        </Jump>
      </section>

      <div className="flex justify-center items-center py-6 ">
        <Image className="w-80 md:w-96" alt="icon" src={logoImg} />
      </div>
      <section className="gap-x-30 grid grid-cols-1 md:grid-cols-2 py-10 place-items-center px-8 gap-y-10 xl:px-20 ">
        <Fade>
          <div className="md:w-11/12">
            <h1 className=" text-3xl md:text-4xl font-semibold text-primaryColor">
              Natural, fácil y divertido
            </h1>
            <p className="mt-6 text-gray-600 text-lg md:text-xl ">
              Sabemos que estudiar inglés es aburrido, y aprender es divertido;
              por eso en <strong>Speak Call Lingo</strong> hacemos que cada
              lección sea un aprendizaje diferente. Nuestras clases 100%
              dinámico harán que potencies tu inglés de forma natural como tu
              idioma nativo.
            </p>
          </div>
        </Fade>
        <Fade duration={1500}>
          <div className="h-[600px] overflow-hidden rounded-lg">
            <Image width={500} height={200} alt="bg" src={phoneGuy} />
          </div>
        </Fade>
      </section>

      <section className="gap-x-30  gap-y-4 grid grid-cols-1 md:grid-cols-2 py-10 place-items-center px-8 xl:px-20 mt-10 md:mt-20">
        <Fade duration={1500}>
          <div className="w-[350px] md:w-[500px] overflow-hidden rounded-lg">
            <Image width={500} height={200} alt="bg" src={fiendsImg} />
          </div>
        </Fade>
        <Fade>
          <div className="md:w-11/12">
            <h1 className=" text-3xl  md:text-4xl font-semibold text-primaryColor">
              Metodología basada en la ciencia
            </h1>
            <p className="mt-6 text-gray-600 text-lg md:text-xl">
              La fórmula secreta ¡Aprenderás como tu idioma nativo! Gracias a
              nuestro método de aprendizaje revolucionario “Programación
              Neurolingüística” (PNL) podrás programar tu mente hacia el dominio
              del inglés como fuiste programado con tu idioma nativo. Está
              demostrado que la inmersión profunda es la clave para dominar un
              nuevo idioma y despertar nuestro potencial lingüístico.
            </p>
          </div>
        </Fade>
      </section>

      <section className="gap-x-30  gap-y-16 grid grid-cols-1 md:grid-cols-2 py-10 place-items-center px-8 xl:px-20 mt-10 md:mt-20">
        <Fade>
          <div className="md:w-11/12">
            <h1 className=" text-3xl md:text-4xl font-semibold text-primaryColor">
              Despertamos tu potencial
            </h1>
            <p className="mt-6 text-gray-600 text-lg md:text-xl">
              Creemos en el poder de cada individuo para superar cualquier
              límite y pensar diferente. La motivación es importante para
              aprender un nuevo idioma, pero no lo es todo, ya que la motivación
              naturalmente sube y baja constantemente. La clave del éxito está
              en la disciplina que, pese a la fluctuación de la motivación te
              mantendrá en racha todos los días. Pero la motivación y la
              disciplina no lo es todo… hace falta un ingrediente… ¿Deseas
              conocerlo?
            </p>
          </div>
        </Fade>
        <Fade duration={1500}>
          <div className="w-[350px] h-[550px] md:w-[500px]  overflow-hidden rounded-lg">
            <Image width={500} height={200} alt="bg" src={phoneGirl} />
          </div>
        </Fade>
      </section>

      <Tada>
        <div className="flex justify-center pt-12">
          <Image className="w-44 md:w-60" src={iconLogo} alt="logo img" />
        </div>
      </Tada>

      <section className="py-8 px-8 mt-4">
        <div className="container mx-auto">
          <div className="border-b border-gray-400 pb-4 mb-3">
            <h1 className="text-2xl font-medium">
              Por qué estudiar con nosotros
            </h1>
          </div>
          <p className="pb-6 text-xl text-gray-600 mb-4">
            En Speak Call Lingo te empoderamos brindándote las habilidades
            necesarias para mejorar tu vida y tener éxito en un mundo
            globalizado
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Zoom duration={1500}>
              <div className="bg-white px-6 py-8  rounded-lg shadow-lg border-4 border-primaryColor">
                <div className="flex flex-col text-center justify-center items-center gap-2">
                  <Image src={metodoImg} alt="icon" className="w-20" />
                  <h2 className="text-xl font-semibold text-primaryColor mb-4 uppercase">
                    Calidad académica
                  </h2>
                </div>
                <p className="text-base text-justify">
                  Desde sus inicios, ha demostrado un gran compromiso para
                  transformar el país, tanto en el ámbito educativo como el
                  social.
                </p>
              </div>
            </Zoom>
            <Zoom duration={1500}>
              <div className="bg-white px-6 py-8  rounded-lg shadow-lg  border-4 border-secondaryColor">
                <div className="flex flex-col text-center justify-center items-center gap-2">
                  <Image src={tallerImg} alt="icon" className="w-20" />
                  <h2 className="text-xl  font-semibold text-primaryColor mb-4 uppercase">
                    Becas
                  </h2>
                </div>

                <p className="text-base text-justify">
                  Buscamos formar líderes de excelencia académica, ampliar la
                  proyección social y estimular la inclusión de la diversidad.
                </p>
              </div>
            </Zoom>
            <Zoom duration={1500}>
              <div className="bg-white px-6 py-8  rounded-lg shadow-lg  border-4 border-baseColor">
                <div className="flex flex-col text-center justify-center items-center gap-2">
                  <Image src={workImg} alt="icon" className="w-20" />
                  <h2 className="text-xl font-semibold text-primaryColor mb-4 uppercase">
                    inserción Laboral
                  </h2>
                </div>
                <p className="text-base text-justify">
                  Te ayudamos a conseguir el trabajo que tanto anhelas con los
                  mejores call center del país y empresas internacionales.
                </p>
              </div>
            </Zoom>
          </div>
        </div>
      </section>
    </Layout>
  );
}
