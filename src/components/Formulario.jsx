import React, {useState , useEffect } from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente , setPaciente}) => {
    const [nombre,setNombre]= useState(' ');
    const [propietario,setPropietario]= useState(' ');
    const [email,setEmail]= useState(' ');
    const [fecha,setFecha]= useState(' ');
    const [sintomas,setSintomas]= useState(' ');
    const [error,setError]= useState(false);
  useEffect(()=>{
    if (Object.keys(paciente).length >0){
     setNombre(paciente.nombre)
     setPropietario(paciente.propietario)
     setEmail(paciente.email)
     setFecha(paciente.fecha)
     setSintomas(paciente.sintomas)
    }

  }, [paciente])

    const generarId = () =>{
      const random = Math.random().toString(36).substr(2);
      const fecha = Date.now().toString(36);
      return random + fecha
    }

const handleSubmit = (e)=>{ 
  e.preventDefault();
  if([nombre, propietario, email, fecha, sintomas].includes(' ')){
    setError(true);
    return;
  } 
  setError(false);
  //Objeto Paciente
  const objetoPaciente = {
    nombre, 
    propietario, 
    email, 
    fecha, 
    sintomas,
    
  }

  if(paciente.id){
    //editando el registro 
    objetoPaciente.id = paciente.id
    const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id 
      ? objetoPaciente : pacienteState)
      setPacientes( pacientesActualizados)
      setPaciente({})
  }else {
    //nuevo registro
    objetoPaciente.id = generarId()
    setPacientes([...pacientes, objetoPaciente]);
  }
  
  
  //reiniciar el formulario
  setNombre('')
  setEmail('')
  setFecha('')
  setSintomas('')
  setPropietario('')

}




  return (
    <div className='md:w-1/2 lg:w-2/5'> <h2 className='font-black text-3xl text-center'>Seguimineto Pacientes</h2> 
    <p className='text-lg font-bold mt-5 text-center mb-10'> Añade Pacientes y {''} 
    <span className='text-indigo-600'>Administralos</span></p>
        <form className='bg-white shadow-md rounded-lg py-10 px-5 mx-5 'onSubmit={handleSubmit}>
          {error && <Error> <p>Todos los campos son obligatorios</p></Error>}
            
            <div className='mb-5'>
            <label htmlFor='mascota' className='block text-gray-700 font-bold uppercase'> Nombre Mascota </label>
            <input id='mascota'  className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md' 
            value={nombre} onChange= {(e) => setNombre(e.target.value)}/>
            </div>
            <div className='mb-5' >
            <label htmlFor='propietario' className='block text-gray-700 font-bold uppercase'> Propietario Mascota</label>
            <input id='propietario' className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md' type="text" placeholder='Nombre del Propietario'
            value={propietario} onChange= {(e) => setPropietario(e.target.value)}/>
            </div>
            <div className='mb-5' >
            <label htmlFor='email' className='block text-gray-700 font-bold uppercase'> Email</label>
            <input id='email' className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md' type="email" placeholder='Email' 
            value={email} onChange= {(e) => setEmail(e.target.value)}/>
            </div>
            <div className='mb-5' >
            <label htmlFor='alta' className='block text-gray-700 font-bold uppercase'>Fecha del Alta</label>
            <input id='alta' className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md' type="date"
            value={fecha} onChange= {(e) => setFecha(e.target.value)}/>
            </div>
            <div className='mb-5' >
            <label htmlFor='sintomas' className='block text-gray-700 font-bold uppercase'>Sintomas</label>
            <textarea  id='sintomas' className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md' type="text" placeholder='Describe los Sintomas' 
            value={sintomas} onChange= {(e) => setSintomas(e.target.value)}> 
            </textarea>
            </div>
            <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md' value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}/>
        </form>
    </div>
  )
}

export default Formulario