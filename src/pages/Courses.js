import { Layout } from "@/components/Layout";
import Jump from "react-reveal/Jump";
import image1 from "@/static/images/teacherbg.jpg";
import image2 from "@/static/images/study2.jpg";
import imageCard from "@/static/images/study2.jpg";
import saveImage from "@/static/images/save.jpeg";
import teacherImg from "@/static/images/teacherbg.jpg";
import { CourseCard } from "@/components/CourseCard";

const Courses = () => {
  return (
    <Layout>
      <div className="margin-top-page ">
        <section className="flex flex-col items-center justify-center py-8 lg:pb-20 bg-secondaryColor text-white border-0">
          <div className="text-center">
            <Jump>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold my-4">
                Nuestro programa de inglés profesional
              </h1>
            </Jump>
          </div>
        </section>
  
        <div className="flex justify-center items-center bg-gray-100 py-32 px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <CourseCard
              title="Programa Semanal"
              items={[
                "Programa ESL (Inglés como Segunda Lengua)",
                "Lunes a viernes (1 hr y 20 min)",
                "80% práctico y 20% gramatical",
                "Enfoque conversacional",
                "Clubes de conversación y fluidez",
                "Plataforma digital 24/7",
                "Entrenadores certificados",
                "Certificaciones internacionales y oportunidad de crecimiento",
              ]}
              schedule="Lunes a viernes (1 hr y 20 min)"
              duration="80% práctico y 20% gramatical"
              imageCard={imageCard}
            />

            <CourseCard
              title="Programa Fin de Semanal"
              items={[
                "Programa ESL (Inglés como Segunda Lengua)",
                "Sábados o domingos (3 horas)",
                "80% práctico y 20% gramatical",
                "Enfoque conversacional",
                "Clubes de conversación y fluidez",
                "Plataforma digital 24/7",
                "Entrenadores certificados",
                "Certificaciones internacionales y oportunidad de crecimiento",
              ]}
              schedule="Sábados o domingos (3 horas)"
              duration="80% práctico y 20% gramatical"
              imageCard={saveImage}
            />

            <CourseCard
              title="Programa Online"
              items={[
                "Programa ESL (Inglés como Segunda Lengua)",
                "Lunes a viernes (1 hr y 20 min)",
                "Clases en vivo",
                "80% práctico y 20% gramatical",
                "Enfoque conversacional",
                "Plataforma digital 24/7",
                "Entrenadores certificados",
                "Certificaciones internacionales y oportunidad de crecimiento",
              ]}
              schedule="Lunes a viernes (1 hr y 20 min)"
              duration="Clases en vivo, 80% práctico y 20% gramatical"
           imageCard={teacherImg}
           />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
