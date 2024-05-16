import { showToast } from "@/utils";
import { useState } from "react";
import { Input } from "./Input";

export const FormContainer = () => {
  const initialState = {
    name: "",
    last_name: "",
    email: "",
    phone: "",
    course_type: "",
    reason: "",
  };

  const [formType, setFormType] = useState(true);
  const [userData, setUserData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    // setErrors({
    //   ...errors,
    //   [name]: undefined,
    // });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
    cleanInputs();
    showToast(`Tu información ha sido enviada correctamente`, "success");
  };

  const cleanInputs = () =>
    setUserData({
      name: "",
      last_name: "",
      email: "",
      phone: "",
      course_type: "",
      reason: "",
    });
  return (
    <section className="FormContainer">
      <div className="FormContainer-content container">
        <div className="FormContainer-formContent">
          <div className="FormContainer-header">
            <span
              className={`FormContainer-headerTitle ${
                formType ? "bg-gray-300" : "bg-white"
              }`}
            >
              <h2>QUIERO EMPEZAR DE CERO</h2>
            </span>
            <span
              className={`FormContainer-headerTitle ${
                !formType ? "bg-gray-300" : "bg-white"
              }`}
            >
              <h2>MEJORAR MIS HABILIDADES</h2>
            </span>
          </div>
          <div className="FormContainer-container">
            <form onSubmit={handleSubmit}>
              <section className="FormContainer-containerInputs">
                <Input
                  name="name"
                  placeholder="Nombre"
                  type="text"
                  value={userData.name}
                  handleChange={handleChange}
                  required={true}
                />
                <Input
                  name="last_name"
                  placeholder="Apellido"
                  type="text"
                  value={userData.last_name}
                  handleChange={handleChange}
                  required={true}
                />
                <Input
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={userData.email}
                  handleChange={handleChange}
                />
                <Input
                  name="phone"
                  placeholder="Teléfono"
                  type="text"
                  value={userData.phone}
                  handleChange={handleChange}
                />
                <select
                  className="Input"
                  name="course_type"
                  handleChange={handleChange}
                  value={userData.course_type}
                  onChange={handleChange}
                >
                  <option value="">Selecciona una Modalidad</option>
                  <option value="presencial">Presencial</option>
                </select>

                <select
                  className="Input"
                  name="reason"
                  value={userData.reason}
                  onChange={handleChange}
                >
                  <option value="">Selecciona un Motivo</option>
                  <option value="trabajo">Trabajo</option>
                  <option value="viaje">Viaje</option>
                  <option value="estudio">Estudio</option>
                </select>
              </section>

              <section className="FormContainer-containerButton">
                <button className="FormContainer-button" type="submit">
                  Únete
                </button>
                <div className="FormContainer-checkboxes">
                  <span className="FormContainer-checkBoxContainer">
                    <input type="checkbox" />
                    <p>
                      Quiero recibir descuentos exclusivos y noticias por email,
                      correo y mensajes de texto.
                    </p>
                  </span>
                  <span className="FormContainer-checkBoxContainer">
                    <input type="checkbox" required />
                    <p>
                      Al enviar tu formulario aceptas nuestros Términos y
                      condiciones.
                    </p>
                  </span>
                </div>
              </section>
            </form>
          </div>
        </div>
        {/* <h2 className="FormContainer-title">¿Por qué Bellify?</h2>
        <p className="FormContainer-subTitle">
          Bellify es la primera plataforma de servicios de belleza en España que
          nace de profesionales del sector pensada e ideada por y para ellos. Ya
          seas un salón de belleza deseando aumentar la rentabilidad de tu
          centro o un profesional autónomo, Bellify es la herramienta ideal para
          ti.{" "}
        </p> */}
      </div>
    </section>
  );
};
