import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Forms = ({crearCita}) => {
  const datosIniciales = {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  };

  const [cita, setCita] = useState(datosIniciales);
  const [error, setError] = useState(false)

  const actualizarState = (e) => {
    setCita({ ...cita, [e.target.name]: e.target.value });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

const addCita = (e) => {
    e.preventDefault();

    if(mascota.trim() ==='' || propietario.trim() ==='' || fecha.trim() ==='' || hora.trim() ==='' || sintomas.trim() ==='') {
     setError(true)
        return
    }

    setError(false)

    cita.id= uuidv4()
    console.log(cita)

    crearCita(cita);

}

  return (
    <>
      <h2> Crear Cita</h2>

      {error ? <p className="alerta-error">Debes llenar todos los campos, Son obligatiorios</p> : null }
      <form onSubmit={addCita} >
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label htmlFor="">Nombre Dueño Mascota</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Propietario"
          onChange={actualizarState}
          value={propietario}
        />
        <label htmlFor="">Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label htmlFor="">Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label htmlFor="">Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Forms;
