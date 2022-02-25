import React, { useEffect } from 'react'
import { logout } from '../redux/actionCreators'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    let navigate = useNavigate();

    useEffect(() => {
        logout()
        redirect()
      }, [])

    const redirect = () => {
        navigate('/')
    }

  return (
    <div>Logout</div>
  )
}

export default Logout