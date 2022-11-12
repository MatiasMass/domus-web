import * as React from "react";
import "./Contact.css";

import { NavBar } from "../../layout";
import { Button2, InputL, Textarea } from "../../components/atomics";

const Contact = () => {
  return (
    <div className="backgroundd">
      <NavBar />
      <div className="text-containerc">
        <p className="fw-bold justify-content-start fs-3 mb-3">Contactanos</p>
        <p className="fw-semibold justify-content-start fs-5 mb-3">
          Estamos a su disposición para cualquier consulta que necesite
          realizar. Puede comunicarse con nosotros a través del formulario,
          llamándonos o acercándose a nuestras oficinas.
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <div />
        <div className="d-flex flex-column align-items-end">
          <form className="form-containerc">
            <div>
              <p className="fw-bold mt-3 fs-5 mb-4">Nombre y Apellido</p>
              <InputL />
            </div>
            <div>
              <p className="fw-bold mt-3 fs-5 mt-2 mb-4">Correo</p>
              <InputL />
            </div>
            <div>
              <p className="fw-bold mt-3 fs-5 mt-2 mb-4">Consulta</p>
              <InputL />
            </div>
            <div>
              <p className="fw-bold mt-3 fs-5 mt-2 mb-4">Mensaje</p>
              <Textarea />
            </div>
            <Button2 className="mt-4 fs-5">ENVIAR</Button2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
