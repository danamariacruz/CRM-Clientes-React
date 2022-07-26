import {useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'

const VerCliente = () => {

    const {id} = useParams()
    const [cliente, setCliente] = useState({})
    const [cargando,setCargando] = useState(true)

    useEffect(() => {
        
        const obtenerCliente = async () => {
            try {
                const url=`${import.meta.env.VITE_API_URL}/${id}`
    
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

    cargando ? <p>Cargando ...</p> : Object.keys(cliente).length === 0 ? <p>No hay resultados</p> : (

        <div>
            {cargando ? 'cargando ...' : (
                <>
                <h1 className="font-black text-2xl text-blue-900">Informacion del cliente: {cliente.nombre}</h1>         

                <p className="text-1xl text-gray-700 mt-8"><span className="uppercase font-bold">Cliente: </span> {cliente.nombre}</p>
                <p className="text-1xl text-gray-700 mt-2"><span className="uppercase font-bold">Correo: </span> {cliente.correo}</p>
                <p className="text-1xl text-gray-700 mt-2"><span className="uppercase font-bold">Telefono: </span> {cliente.telefono}</p>
                <p className="text-1xl text-gray-700 mt-2"><span className="uppercase font-bold">Empresa: </span> {cliente.empresa}</p>
                {cliente.notas && (
                    <p className="text-1xl text-gray-700 mt-2"><span className="uppercase font-bold">Notas: </span> {cliente.notas}</p>
                )}       
    </>
            )}
            
        </div>
    )
  )
}

export default VerCliente
