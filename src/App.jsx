import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

function App() {
  const INITIAL = JSON.parse(localStorage.getItem("pacientes") ?? []);
  const [pacientes, setPacientes] = useState(INITIAL);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (idKey) => {
    console.log("ELIMINANDO", idKey);
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.idKey !== idKey
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          setPacientes={setPacientes}
          paciente={paciente}
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          eliminarPaciente={eliminarPaciente}
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  );
}

export default App;
