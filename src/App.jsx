
import {useState, useEffect} from "react"

import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {


  const  [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  //Utilizando useEffect para un LocalStorage

  useEffect(() =>{
    const obtenerLS = () =>{
const pacientesLS =  JSON.parse(localStorage.getItem('pacientes')) ?? [];
setPacientes(pacientesLS)
    }
    obtenerLS();
  },[]);

  useEffect( () => {
   localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  //metodo para elimnar paciente//
  const eliminarPaciente =  (id) => {

    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)

  }

  return (
    <div className="container mx-auto mt-10">

<Header

/>

      <div className='mt-12   md:flex '>

        <Formulario 

        pacientes = {pacientes}
        setPacientes = {setPacientes}
        paciente = {paciente}
        setPaciente = {setPaciente}
        
        />
        <ListadoPacientes
        
        pacientes = {pacientes}
        setPaciente = {setPaciente}
        eliminarPaciente = {eliminarPaciente}

        />

      </div>

    


    </div>
  )
}

export default App
