import { useState, useEffect } from "react";
import { ErrorMessage } from "./ErrorMessage";

export const Form = ({ setPacientes, paciente, pacientes, setPaciente }) => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombrePropietario, setNombrePropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fechaAlta, setFechaAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombreMascota(paciente.nombreMascota);
      setNombrePropietario(paciente.nombrePropietario);
      setEmail(paciente.email);
      setFechaAlta(paciente.fechaAlta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del formulario
    if (
      [nombreMascota, nombrePropietario, email, fechaAlta, sintomas].includes(
        ""
      )
    ) {
      setError(true);
      return;
    }
    setError(false);

    //Construir objeto con los datos de los pacientes
    const datosPaciente = {
      nombreMascota,
      nombrePropietario,
      email,
      fechaAlta,
      sintomas,
    };
    console.log(paciente);
    if (paciente.idKey) {
      //Editando el registro
      datosPaciente.idKey = paciente.idKey;
      console.log("Editanto");
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.idKey === paciente.idKey ? datosPaciente : pacienteState
      );
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Nuevo registro
      datosPaciente.idKey = generarIdKey();
      setPacientes((pacientes) => [datosPaciente, ...pacientes]);
    }

    resetInputValues();
  };

  const resetInputValues = () => {
    setNombreMascota("");
    setNombrePropietario("");
    setEmail("");
    setFechaAlta("");
    setSintomas("");
  };

  const generarIdKey = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="mt-5 text-lg mb-10 text-center">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-3"
        onSubmit={handleSubmit}
      >
        {error && <ErrorMessage mensaje="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="nombre_mascota"
          >
            Nombre Mascota
          </label>
          <input
            id="nombre_mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="nombre_propietario"
          >
            Nombre Propietario
          </label>
          <input
            id="nombre_propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            type="text"
            placeholder="Nombre del propietario"
            value={nombrePropietario}
            onChange={(e) => setNombrePropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Correo electrónico
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="fecha_alta"
          >
            Fecha alta
          </label>
          <input
            id="fecha_alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            type="date"
            value={fechaAlta}
            onChange={(e) => setFechaAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomatología
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
          value={paciente.idKey ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};
