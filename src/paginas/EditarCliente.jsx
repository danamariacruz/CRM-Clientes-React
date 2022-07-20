import Formulario from '../components/Formulario'
import {useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'

const EditarCliente = () => {

  const {id} = useParams()
  const [cliente, setCliente] = useState({})
  const [cargando,setCargando] = useState(true)

  useEffect(() => {
      
      const obtenerCliente = async () => {
          try {
              const url=`http://localhost:4000/clientes/${id}`
  
              const respuesta = await fetch(url)                    
              const resultado = await respuesta.json()                                    

              setCliente(resultado)
  
          } catch (error) {
              console.log(error)
          }
          setCargando(!cargando)
      }
      obtenerCliente()
  }, [])

  return (
    <>
     <h1 className="font-black text-3xl text-blue-900">Editar Cliente</h1>  
     {cliente?.nombre ? (
       <Formulario 
       cliente={cliente}
       cargando={cargando}
      />
     ) : <p><span className="text-red-600 font-bold">El id del cliente {cliente.nombre} no es valido</span></p>}    
     
    </>
  )
}

export default EditarCliente
