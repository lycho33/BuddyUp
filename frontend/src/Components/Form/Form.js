import { useState } from "react"


const Form = ({ handler }) => {

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
    <form  onSubmit={handler}>
            <input type="text" placeholder="username" name="username" value={state.username} onChange={handleInputChange}/>
            <input type="text" placeholder="email" name="email" value={state.email} onChange={handleInputChange}/>
            <input type="text" placeholder="password" name="password" value={state.password} onChange={handleInputChange}/>
            <button placeholder="submit" type="submit">Log In</button>
    </form>
  )
}

export default Form