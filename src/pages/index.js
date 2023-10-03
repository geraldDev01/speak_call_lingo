import { Header } from "@/components/Header";
import Image from "next/image";
import { Slide, Fade } from "react-reveal";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import metodoImg from "@/static/images/diploma.svg";
import tallerImg from "@/static/images/study.svg";
import workImg from "@/static/images/work.svg";
import bgImage from "@/static/images/studyBackground.jpg";
import bgImage2 from "@/static/images/study2.jpg";

export default function Index() {
  return (
    <main>
      <Header />

      <Slide duration={1500} bottom>
        <section className="flex flex-col lg:flex-row items-center p-12 gap-6 lg:justify-between lg:min-h-screen">
          <div className="flex flex-col lg:w-1/3">
            <h1 className="mt-24 text-4xl font-semibold text-primary">
              Aprender inglés con nosotros es fácil y divertido.
            </h1>
            <p className="mt-6 text-gray-600 font-medium text-xl">
              Te ayudamos a superar cualquier barrera de aprendizaje y hablarlo
              en 3 meses.
            </p>
            <p className="mt-2 font-semibold text-2xl">100% Garantizado !</p>
          </div>
          <div>
            {/* <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              // autoplay={{ delay: 3000 }}
              // loop={true}
              navigation
              pagination={{ clickable: true }}
              // className="rounded-xl shadow-xl"
            >
              <SwiperSlide>
                <Image width={700} alt="bg" src={bgImage} />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={700} alt="bg" src={bgImage2} />
                <Image width={700} alt="bg" src={bgImage} />
              </SwiperSlide>
            </Swiper> */}
          </div>
        </section>
      </Slide>

      <section className="flex flex-col items-center justify-center py-8 lg:py-20 bg-primary text-white">
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

      <section className="py-8 px-8 mt-4">
        <div className="container mx-auto">
          <div className="border-b border-gray-400 pb-4 mb-12">
            <h1 className="text-2xl">Por qué estudiar con nosotros</h1>
          </div>

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

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Zoom duration={1500}>
              <div className="bg-white px-6 py-8  rounded-lg shadow-lg border-4 border-primary">
                <div className="flex flex-col text-center justify-center items-center gap-2">
                  <Image src={metodoImg} alt="icon" className="w-20" />
                  <h2 className="text-xl font-semibold text-primary mb-4">
                    NUESTRA METODOLOGÍA
                  </h2>
                </div>
                <p className="text-base text-justify">
                  Olvida los viejos métodos que no funcionan. Gracias a nuestra
                  método de aprendizaje moderno “Programación Neurolingüística”
                  (PNL) podrás aprender desde cero y comunicarte en 3 meses.
                  100% garantizado.
                </p>
              </div>
            </Zoom>
            <Zoom duration={1500}>
              <div className="bg-white px-6 py-8  rounded-lg shadow-lg  border-4 border-secondary">
                <div className="flex flex-col text-center justify-center items-center gap-2">
                  <Image src={tallerImg} alt="icon" className="w-20" />
                  <h2 className="text-xl  font-semibold text-primary mb-4">
                    TALLERES PERSONALIZADOS
                  </h2>
                </div>

                <p className="text-base text-justify">
                  En Speak Call Lingo no estás solo, con nuestros entrenadores
                  (profesores) tendrás la oportunidad de recibir talleres
                  totalmente personalizados para fortalecer el área de
                  aprendizaje que más necesites.
                </p>
              </div>
            </Zoom>
            <Zoom duration={1500}>
              <div className="bg-white px-6 py-8  rounded-lg shadow-lg  border-4 border-baseColor">
                <div className="flex flex-col text-center justify-center items-center gap-2">
                  <Image src={workImg} alt="icon" className="w-20" />
                  <h2 className="text-xl font-semibold text-primary mb-4">
                    PROFESORES CERTIFICADOS
                  </h2>
                </div>
                <p className="text-base text-justify">
                  Nuestro equipo de profesores está conformado por
                  profesionales. Cada profesor trae consigo años de experiencia
                  y una dedicación incomparable para ayudarte a alcanzar la
                  fluidez que tanto deseas.
                </p>
              </div>
            </Zoom>
          </div> */}
        </div>
      </section>

      {/* <section className="flex items-center justify-center py-8 lg:py-20 bg-baseColor text-white">
        <Jump>
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4">
            Por que estudiar con nosotros?
          </h1>
        </Jump>
      </section> */}
    </main>
  );
}
