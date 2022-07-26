import React from 'react'
import {Formik, Form, Field} from 'formik'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import ErrorAlert from './ErrorAlert'

const Formulario = ({cliente,cargando}) => {

    const navegate = useNavigate()

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string().min(3, 'El nombre tiene que ser mayor a 3 caracteres').required('El nombre es obligatorio'),
        empresa: Yup.string().required('La empresa es requerida'),
        correo: Yup.string().email('El correo no es valido').required('El correo es requerido'),
        telefono: Yup.number().positive('Numero de telefono no es valido').integer('Numero de telefono no es valido').typeError('Numero de telefono no es valido')        
    })

    const handleSubmit = async (valores)  => {
        try {
            let respuesta ;
           if (cliente.id) {
            const url=`${import.meta.env.VITE_API_URL}/${cliente.id}`

            respuesta = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type': 'application/json'
                  }   
                })
                
           } 
           else 
           {
            const url=import.meta.env.VITE_API_URL

            respuesta = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type': 'application/json'
                  }   
                })                
           }

           await respuesta.json()
                
           navegate('/clientes')

        } catch (error) {
            console.log(error)
        }
    }

  return (
      cargando ? 'Cargando ...' : (
        <div className="bg-white mt-10 px-5 ppy-10 rounded-md shadow-md md: w-3/4 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">{cliente?.nombre ? 'Editar cliente' : 'Agregar cliente'}</h1>

        <Formik 
            initialValues={{
                nombre: cliente?.nombre ?? "", //esta es una forma de escribir un termario en react, funcina de la misma manera 
                empresa: cliente?.empresa  ?? "",
                correo:cliente?.correo ?? "",
                telefono: cliente?.telefono ?? "",
                notas: cliente?.notas ?? ""
            }}

            enableReinitialize={true}

            onSubmit={async (values,{resetForm}) => {
                await handleSubmit(values)

                resetForm()
            }}

            validationSchema={nuevoClienteSchema}
        >
        {({errors,touched}) => {        
            return(
            <Form className="mt-10">
                <div className="mb-4">
                    <label className="text-gray-800" htmlFor="nombre">Nombre: </label>
                    <Field id="nombre" name="nombre" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Nombre del cliente" />
                    {errors.nombre && touched.nombre ? (
                        <ErrorAlert>{errors.nombre}</ErrorAlert>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label className="text-gray-800">Empresa: </label>
                    <Field name="empresa" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Empresa del cliente" />
                    {errors.empresa && touched.empresa ? (
                        <ErrorAlert>{errors.empresa}</ErrorAlert>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label className="text-gray-800">Correo</label>
                    <Field type="email" name="correo" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Correo del cliente" />
                    {errors.correo && touched.correo ? (
                        <ErrorAlert>{errors.correo}</ErrorAlert>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label className="text-gray-800">Telefono</label>
                    <Field type="tel" name="telefono" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Telefono del cliente" />
                    {errors.telefono && touched.telefono ? (
                        <ErrorAlert>{errors.telefono}</ErrorAlert>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label className="text-gray-800" >Notas</label>
                    <Field as="textarea" name="notas" type="password" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Nota del cliente" />
                </div>

                <input type="submit" value={cliente?.nombre ? 'Editar cliente' : 'Agregar cliente'} className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg" />
            </Form>
            )}}
        </Formik>
        </div>
    )
  )
}

Formulario.defaultProps = {
    cliente:{},
    cargando:false
}

export default Formulario
