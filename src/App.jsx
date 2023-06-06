import React, { useState, useEffect} from 'react'
import Header from './components/Header'
import Formularios from './components/Formulario.jsx'
import ListadoPacientes from './components/ListadoPacientes.jsx'

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const obtenerLS = () => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; 
    setPacientes(pacientesLS);
  };

  useEffect(() => { 
    obtenerLS();
  }, []);
  
  

  const eliminarPaciente = (id) =>{
   const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
   setPacientes(pacientesActualizados)
   localStorage.setItem("pacientes",JSON.stringify(pacientesActualizados))
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 md:flex'> 
      <Formularios
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
      <ListadoPacientes
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminarPaciente={eliminarPaciente}
      />
      </div>
    </div>
  )
}

export default App