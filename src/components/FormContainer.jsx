import { Input } from "./Input";

export const FormContainer = () => {
  return (
    <section className="FormContainer">
      <div className="FormContainer-content container">
        <div className="FormContainer-formContent">
          <div className="FormContainer-header">
            <span className="FormContainer-headerTitle bg-white">
              <h2>QUIERO EMPEZAR DE CERO</h2>
              {/* <p>Estoy cualificado y quiero trabajar</p> */}
            </span>
            <span className="FormContainer-headerTitle bg-white">
              <h2>MEJORAR MIS HABILIDADES</h2>
              {/* <p>
                No estoy cualificado y quiero formarme en la academia Bellify
              </p> */}
            </span>
          </div>
          <div className="FormContainer-container">
            {/* <span className="FormContainer-titleForm">
              <p>
              No estoy cualificado y quiero formarme en la academia Bellify
              </p>
            </span> */}
            <form>
              <section className="FormContainer-containerInputs">
                <Input name="nombre " placeholder="Nombre" type="text" />
                <Input name="apellido " placeholder="Apellido" type="text" />
                <Input name="email" placeholder="Email" type="email" />
                <Input name="telefono" placeholder="Teléfono" type="text" />
                <select className="Input" name="modalidad">
                  <option value="">Selecciona una Modalidad</option>
                  <option value="presencial">Presencial</option>
                </select>
                {/* Dropdown for Motivo */}
                <select className="Input" name="motivo">
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
                    <input type="checkbox" />
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
