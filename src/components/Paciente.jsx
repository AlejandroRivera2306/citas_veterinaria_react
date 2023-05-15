import React from 'react'

const Paciente = ({paciente, setPaciente,eliminarPaciente}) => {

  const{nombre, propietario, email, fecha, sintomas, id} = paciente
  return (
    <div className='mx-5 my-10 bg-white shadow-md rounded-lg py-10 px-5'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:{" "}<span className='font-normal normal-case'>{nombre}</span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:{" "}<span className='font-normal normal-case'>{propietario}</span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Email:{" "}<span className='font-normal normal-case'>{email}</span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Alta:{" "}<span className='font-normal normal-case'>{fecha}</span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas:{" "}<span className='font-normal normal-case'>{sintomas}</span></p>
        <div className='flex justify-between mt-10'>
          <button type= "button" className="py-2 px-10 bg-green-500 hover:bg-green-800 text-white font-bold uppercase rounded-lg"  
          onClick={ () => setPaciente(paciente)}> Editar</button>
          <button type= "button" className="py-2 px-7  bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg"  
          onClick={() => eliminarPaciente(id)}> Eliminar</button>
        </div>
      
      
       </div>
  )
}

export default Paciente