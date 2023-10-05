import { Header } from "@/components/Header";
import Image from "next/image";
import { Slide, Fade } from "react-reveal";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
import Tada from "react-reveal/Tada";

import metodoImg from "@/static/images/diploma.svg";
import tallerImg from "@/static/images/study.svg";
import workImg from "@/static/images/work.svg";
import bgImage from "@/static/images/studyBackground.jpg";
import teacherBg from "@/static/images/teacherbg.jpg";
import metodoBg from "@/static/images/metodo.jpg";

import waveImg from "@/static/images/wave.svg";
import logoImg from "@/static/images/iconLogo.jpeg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function Index() {
  return (
    <main>
      <Header />
      <Fade>
        <section className="landing">
          <div className="dark-overlay">
            <div className="landing-inner text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ">
                Aprender inglés con nosotros es fácil y divertido
              </h1>
              <p className="text-xl pb-1 font-medium">
                Te ayudamos a superar cualquier barrera de aprendizaje y
                hablarlo en 3 meses
              </p>
              <p className="text-2xl pb-1 font-semibold mt-2">
                100% garantizado
              </p>
              <div className="mt-6">
                <Link href="/contactanos">
                  <span className="p-4 bg-baseColor font-medium text-lg mt-12">
                    ¡Matricúlate YA!
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <section className="gap-x-30 grid grid-cols-1 md:grid-cols-2 py-10 place-items-center px-8 xl:px-20 mt-16">
        <Slide left>
          <div className="md:w-11/12">
            <h1 className="mt-24 text-3xl md:text-4xl font-semibold text-primary">
              Nuestra metodología
            </h1>
            <p className="mt-6 text-gray-600 text-lg md:text-xl">
              Olvida los viejos métodos que no funcionan. Gracias a nuestra
              método de aprendizaje moderno “Programación Neurolingüística”
              (PNL) podrás aprender desde cero y comunicarte en 3 meses. 100%
              garantizado.
            </p>
          </div>
        </Slide>
        <Fade duration={1500}>
          <Image
            width={500}
            height={200}
            className="rounded-lg"
            alt="bg"
            src={metodoBg}
          />
        </Fade>
      </section>

      <section className="gap-x-30 grid grid-cols-1 md:grid-cols-2 py-10 place-items-center px-8 xl:px-20 mt-20">
        <Fade duration={1500}>
          <Image width={500} className="rounded-lg" alt="bg" src={bgImage} />
        </Fade>
        <Slide right>
          <div className="md:w-11/12">
            <h1 className="mt-24 text-3xl md:text-4xl font-semibold text-primary">
              Talleres Personalizados
            </h1>
            <p className="mt-6 text-gray-600 text-lg md:text-xl">
              En Speak Call Lingo no estás solo, con nuestros entrenadores
              (profesores) tendrás la oportunidad de recibir talleres totalmente
              personalizados para fortalecer el área de aprendizaje que más
              necesites.
            </p>
          </div>
        </Slide>
      </section>

      <section className="gap-x-30 grid grid-cols-1 md:grid-cols-2 py-10 place-items-center px-8 xl:px-20 mt-20">
        <Slide left>
          <div className="md:w-11/12">
            <h1 className="mt-24 text-3xl md:text-4xl font-semibold text-primary">
              Profesores Certificados
            </h1>
            <p className="mt-6 text-gray-600 text-lg md:text-xl">
              Nuestro equipo de profesores está conformado por profesionales.
              Cada profesor trae consigo años de experiencia y una dedicación
              incomparable para ayudarte a alcanzar la fluidez que tanto deseas.
            </p>
          </div>
        </Slide>
        <Fade duration={1500}>
          <Image width={500} className="rounded-lg" alt="bg" src={teacherBg} />
        </Fade>
      </section>

      <Image alt="wave" src={waveImg} className="border-0" />
      <section className="flex flex-col items-center justify-center py-8 lg:pb-20 bg-primary text-white border-0">
        <div className="text-center">
          <Jump>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Clases Divertidas
            </h1>
          </Jump>
          <Slide duration={1500} bottom>
            <p className="md:text-xl px-8 leading-relaxed">
              Estudiar es aburrido, aprender es divertido; con nuestra
              metodología de aprendizaje podrás aprender de manera fácil y
              divertida.
            </p>
          </Slide>
        </div>
      </section>

      <Tada>
        <div className="flex justify-center pt-12">
          <Image className="w-44 md:w-60" src={logoImg} alt="logo img" />
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
              <div className="bg-white px-6 py-8  rounded-lg shadow-lg border-4 border-primary">
                <div className="flex flex-col text-center justify-center items-center gap-2">
                  <Image src={metodoImg} alt="icon" className="w-20" />
                  <h2 className="text-xl font-semibold text-primary mb-4 uppercase">
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
              <div className="bg-white px-6 py-8  rounded-lg shadow-lg  border-4 border-secondary">
                <div className="flex flex-col text-center justify-center items-center gap-2">
                  <Image src={tallerImg} alt="icon" className="w-20" />
                  <h2 className="text-xl  font-semibold text-primary mb-4 uppercase">
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
                  <h2 className="text-xl font-semibold text-primary mb-4 uppercase">
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

      <Footer />
    </main>
  );
}
