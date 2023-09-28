import { Header } from "@/components/Header";
import Image from "next/image";
import bgImage from "@/static/images/studyBackground.jpg";

export default function Index() {
  return (
    <main>
      <Header />
      <section className="flex items-center p-12 justify-between min-h-screen">
        <div className="flex flex-col w-1/3">
          <h1 className="text-4xl font-semibold text-primary">
            Aprender inglés con nosotros es fácil y divertido.
          </h1>
          <p className="mt-6 text-gray-600 font-medium text-xl">
            Te ayudamos a superar cualquier barrera de aprendizaje y hablarlo en
            3 meses. 100% Garantizado.{" "}
          </p>
        </div>
        <div>
          <Image
            className="rounded-xl shadow-xl"
            width={700}
            alt="bg"
            src={bgImage}
          />
        </div>
      </section>
    </main>
  );
}
