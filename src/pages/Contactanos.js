import Image from "next/image";

import Tada from "react-reveal/Tada";

import logoImg from "@/static/images/logo.jpeg";
import iconLogo from "@/static/images/iconLogo.jpeg";
import { FormContainer } from "@/components/FormContainer";

import { Layout } from "@/components/Layout";

const Contactanos = () => {
  return (
    <Layout>
      {/* <div className="margin-top-page ">
        <section className="flex justify-center items-center">
          <Image className="w-80 md:w-96" alt="icon" src={logoImg} />
        </section>

        <Tada>
          <div className="flex justify-center pt-12">
            <Image className="w-44 md:w-28" src={iconLogo} alt="logo img" />
          </div>
        </Tada>
        
      </div> */}
      <FormContainer />
    </Layout>
  );
};

export default Contactanos;
