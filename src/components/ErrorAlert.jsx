import React from 'react'

const ErrorAlert = ({children}) => {
  return (
    <div className="text-red-600 font-bold">{children}</div>
  )
}

export default ErrorAlert
