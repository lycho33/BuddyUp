import React from 'react'
import { useState } from 'react'

const FormItem = ({ type, placeholder, name }) => {

  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleInputChange = (e) => {
    setState((prevProps) => ({
        ...prevProps,
        [e.target.name]: e.target.value
    }))
  }

 

  return (
    <>
      <input type={type} placeholder={placeholder} name={name} value={state.name} onChange={handleInputChange}/>
    </>
    
  )
}

export default FormItem