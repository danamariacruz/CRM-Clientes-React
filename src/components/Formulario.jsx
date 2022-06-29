import React from 'react'
import {Formik, Form, Field} from 'formik'

const Formulario = () => {
  return (
    <div className="bg-white mt-10 px-5 ppy-10 rounded-md shadow-md md: w-3/4 mx-auto">
    <h1 className="text-gray-600 font-bold text-xl uppercase text-center"> Nuevo Cliente</h1>
      <Formik>
        <Form className="mt-10">
            <div className="mb-4">
                <label className="text-gray-800">Nombre: </label>
                <Field type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Nombre del cliente" />
            </div>

            <div className="mb-4">
                <label className="text-gray-800">Empresa: </label>
                <Field type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Empresa del cliente" />
            </div>

            <div className="mb-4">
                <label className="text-gray-800">Correo</label>
                <Field type="email" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Correo del cliente" />
            </div>

            <div className="mb-4">
                <label className="text-gray-800">Telefono</label>
                <Field type="tel" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Telefono del cliente" />
            </div>

            <div className="mb-4">
                <label className="text-gray-800">Notas</label>
                <Field as="textarea" type="password" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Nombre del cliente" />
            </div>

            <input type="submit" value="Agregar" className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg" />
        </Form>
    </Formik>
    </div>
  )
}

export default Formulario
