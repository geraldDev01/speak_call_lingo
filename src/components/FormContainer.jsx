import { createEmail } from "@/services/contact";
import { showToast } from "@/utils";
import { useState } from "react";
import { Input } from "./Input";
import { Audio } from "react-loader-spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormType } from "@/context";

export const FormContainer = () => {
  const { formType, setFormType } = useFormType();

  const initialState = {
    name: "",
    last_name: "",
    email: "",
    phone: "",
    course_type: "",
    reason: "",
    exam_type: "",
    date: null,
  };
  const [userData, setUserData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setUserData({
      ...userData,
      date: date,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when submitting form
    try {
      const response = await createEmail(userData);
      if (response) {
        setUserData(initialState);
        cleanInputs();
        showToast(`Tu información ha sido enviada correctamente`, "success");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const cleanInputs = () =>
    setUserData({
      name: "",
      last_name: "",
      email: "",
      phone: "",
      course_type: "",
      reason: "",
      exam_type: "",
      date: null,
    });

  return (
    <section className="FormContainer">
      <div className="FormContainer-content container">
        <div className="FormContainer-formContent">
          <div className="FormContainer-header">
            <span
              className={`FormContainer-headerTitle cursor-pointer ${
                formType ? "bg-gray-300" : "bg-white"
              }`}
              onClick={() => setFormType(true)}
            >
              <h2 className="text-center">QUIERO EMPEZAR DE CERO</h2>
            </span>
            <span
              onClick={() => setFormType(false)}
              className={`FormContainer-headerTitle cursor-pointer ${
                !formType ? "bg-gray-300" : "bg-white"
              }`}
            >
              <h2 className="text-center">MEJORAR MIS HABILIDADES</h2>
            </span>
          </div>
          <div className="FormContainer-container pt-4">
            {loading && (
              <div className="loader-wrapper">
                <Audio
                  height="50"
                  width="50"
                  radius="9"
                  color="blue"
                  ariaLabel="loading"
                />
              </div>
            )}
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
                {formType ? (
                  <>
                    <select
                      className="Input"
                      name="course_type"
                      value={userData.course_type}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una Modalidad</option>
                      <option value="presencial">Presencial</option>
                      <option value="en_linea">En Línea</option>
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
                  </>
                ) : (
                  <>
                    <select
                      className="Input"
                      name="exam_type"
                      value={userData.exam_type}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona un Tipo de Examen</option>
                      <option value="nivelacion">Examen de Nivelación</option>
                    </select>
                    <div>
                      <DatePicker
                        className="Input"
                        selected={userData.date}
                        onChange={handleDateChange}
                        placeholderText="Selecciona una Fecha"
                        minDate={new Date()}
                        dateFormat="dd/MM/yyyy"
                      />
                    </div>
                  </>
                )}
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
      </div>
    </section>
  );
};
