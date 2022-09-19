import { useState, useEffect } from 'react';
import Error from './Error';

function Formulario({ pacientes, setPacientes, paciente, setPaciente}) {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);


    //useEffect\\
    useEffect( () => {
  
        if( Object.keys(paciente).length > 0 ){

            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)

        }
       
    }, [paciente])



   
// Generando id para el Formulario
    const generarId = () => {

        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        //Validacion del formulario\\
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {

            console.log('Hay almenos un campo vacio')

            setError(true)
         
            return;
        } 

     setError(false)

     //Objeto de pacientes

     const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas
     }

     if (paciente.id){
      //Editando el Registro
      objetoPaciente.id = paciente.id
     const pacientesActualizados = pacientes.map( pacienteState =>  pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)

      setPaciente({})

     }else{
    // Nuevo Registro
    objetoPaciente.id = generarId();
    setPacientes([...pacientes, objetoPaciente]);
    
     }

     

     //reiniciar el form

   setNombre('')
     setEmail('')
     setFecha("")
     setPropietario('')
     setSintomas("")


    }

    return (
        <div className='md:w-1/2   lg:w-2/5 mx-5 '>

            <h2 className='font-black text-3xl  text-center'>
                Seguimiento de pacientes
            </h2>

            <p className='text-lg mt-5 text-center mb-10' >
                Añadir Pacientes y {""}

                <span className='text-indigo-600  font-bold '>
                    Administralos
                </span>

            </p>


            <form

                onSubmit={handleSubmit}

                className='bg-white  shadow-md  rounded-lg  py-10  px-5  mb-10' >

                {error &&  <Error> <p> Todos los campos son obligatorios </p> </Error> }

                <div className='mb-5'>

                    <label htmlFor="mascota" className='block text-gray-700  uppercase font-bold'>

                        Nombre de Mascota

                    </label>

                    <input
                        type="text"
                        placeholder='Nombre de la Mascota'
                        className='border-4  w-full p-4 mt-2  placeholder-green-300 rounded-md'
                        id='mascota'

                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}

                    />

                </div>


                <div className='mb-5'>

                    <label htmlFor="propietario" className='block text-gray-700  uppercase font-bold'>

                        Nombre de el Propietario

                    </label>

                    <input
                        type="text"
                        placeholder='Nombre de el Propietario'
                        className='border-4  w-full p-4 mt-2  placeholder-green-300 rounded-md'
                        id='propietario'
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}

                    />

                </div>



                <div className='mb-5'>

                    <label htmlFor="email" className='block text-gray-700  uppercase font-bold'>

                        Email

                    </label>

                    <input
                        type="email"
                        placeholder='Email Contacto Propietario'
                        className='border-4  w-full p-4 mt-2  placeholder-green-300 rounded-md'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />

                </div>


                <div className='mb-5'>

                    <label htmlFor="alta" className='block text-gray-700  uppercase font-bold'>

                        Fecha

                    </label>

                    <input
                        type="date"
                        className='border-4  w-full p-4 mt-2  placeholder-green-300 rounded-md'
                        id='alta'
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}

                    />

                </div>


                <div className='mb-5'>

                    <label htmlFor="sintomas" className='block text-gray-700  uppercase font-bold'>

                        Sintomas

                    </label>

                    <textarea

                        id='sintomas'
                        className='border-4  w-full p-4 mt-2  placeholder-green-300 rounded-md'
                        placeholder="Describir los Sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}

                    />

                </div>


                <input

                    type="submit"
                    className='bg-indigo-600  w-full  text-white  p-3  uppercase font-bold  hover:bg-indigo-800 cursor-pointer transition-all'
                    value={paciente.id ? "Editar Paciente" :  "Agregar Paciente" }

                />


            </form>


        </div>
    )
}

export default Formulario
