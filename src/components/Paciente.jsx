
import {useEffect} from 'react';

function Paciente({ paciente, setPaciente, eliminarPaciente }) {

   
    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
    
       const respuesta = confirm("Desea eliminar este paciente?");

        if(respuesta){
            eliminarPaciente(id)
        }

    }

    return (

        <div className='mx-5 my-7 bg-white shadow-md px-5 py-10  rounded-xl'>

            <p className='font-bold mb-3 text-gray-700 uppercase'>

                Nombre: {""}

                <span className='font-normal normal-case'>{nombre}</span>

            </p>


            <p className='font-bold mb-3 text-gray-700 uppercase'>

                Propietario: {""}

                <span className='font-normal normal-case'>{propietario}</span>

            </p>


            <p className='font-bold mb-3 text-gray-700 uppercase'>

                Email: {""}

                <span className='font-normal normal-case'>{email}</span>

            </p>


            <p className='font-bold mb-3 text-gray-700 uppercase'>

                Fecha Alta: {""}

                <span className='font-normal normal-case'>{fecha}</span>

            </p>


            <p className='font-bold mb-3 text-gray-700 uppercase'>

                Sintomas: {""}

                <span className='font-normal normal-case'>{sintomas}</span>

            </p>

            <div className="flex justify-between mt-14">

                <button
                    type="button"
                    className="bg-indigo-600 py-2 px-10 hover:bg-indigo-400 text-white font-bold uppercase rounded-lg"
                    onClick={ () => setPaciente(paciente) }
                >Editar</button>

                <button
                    type="button"
                    className="bg-red-600 py-2 px-10 hover:bg-red-400 text-white font-bold uppercase rounded-lg"
                    onClick={ handleEliminar}
                >Eliminar</button>

            </div>


        </div>

    );
}

export default Paciente;
