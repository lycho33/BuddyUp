import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { logout } from '../redux/actionCreators'
import { useNavigate } from 'react-router-dom'

const Logout = ({ logout }) => {

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

export default connect( null, { logout }) (Logout)