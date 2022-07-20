import {useNavigate} from 'react-router-dom'

const Clientes = ({cliente,handleEliminar}) => {

  const navegate = useNavigate()

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">
          <button type="button" className="text-sky-300 hover:text-sky-600" onClick={() => navegate(`/clientes/${cliente.id}`)}>{cliente.nombre}</button>
       </td>
      <td className="p-3">
          <p><span className="text-gray-800 uppercase font-bold">Correo: </span>{cliente.correo}</p>
          <p><span className="text-gray-800 uppercase font-bold">Tel: </span>{cliente.telefono}</p>
      </td>
      <td className="p-3">{cliente.empresa}</td>
      <td className="p-3">
          <div className="content-center ml-24">
          <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white p-2 uppercase fond-bold text-xs" 
            onClick={() => navegate(`/clientes/editar/${cliente.id}`)}>Editar</button> 
          <button type="button" className="bg-red-600 hover:bg-red-700 text-white p-2 uppercase fond-bold text-xs" onClick={ () => handleEliminar(cliente.id)} >Eliminar</button> 
          </div>
      </td>
    </tr>
  )
}

export default Clientes
