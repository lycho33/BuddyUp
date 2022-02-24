import { useState, useEffect } from "react"
import FormItem from "./FormItem"


const Form = ({ handler, input }) => {

  // useEffect(() => {
  //   console.log(handler)
  // }, [])

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

  const render = input.map(i => <FormItem type={i.type} placeholder={i.placeholder} name={i.name} /> )


  return (
    <form  onSubmit={handler}>
            {render}
            <button placeholder="submit" type="submit">Log In</button>
    </form>
  )
}

export default Form