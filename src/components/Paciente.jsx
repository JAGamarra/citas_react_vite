export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const handleEliminar = () => {
    const respuesta = confirm("¿Desea eliminar el paciente?");
    if (respuesta) {
      eliminarPaciente(paciente.idKey);
    }
  };

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold text-gray-700 uppercase mb-3">
        Nombre:{" "}
        <span className="font-normal normal-case">
          {paciente.nombreMascota}
        </span>
      </p>
      <p className="font-bold text-gray-700 uppercase mb-3">
        Propietario:{" "}
        <span className="font-normal normal-case">
          {paciente.nombrePropietario}
        </span>
      </p>
      <p className="font-bold text-gray-700 uppercase mb-3">
        Correo:{" "}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold text-gray-700 uppercase mb-3">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">{paciente.fechaAlta}</span>
      </p>
      <p className="font-bold text-gray-700 uppercase mb-3">
        Síntomas:{" "}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>

      <div className="flex justify-around mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
