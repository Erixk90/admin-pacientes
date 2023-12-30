import React, { useState } from "react";
import Forms from "./components/Forms";

const App = () => {
  const [citas, setcitas] = useState([]);

  const crearCita = (cita) => {
    console.log(cita);
  };
  return (
    <>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            {" "}
            <Forms creaCita={crearCita} />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </>
  );
};

export default App;
