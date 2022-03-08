import axios from 'axios';

export const loginStatus = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/logged_in', {withCredentials: true})
        .then(res => {
            console.log(res)
            debugger
            if(res.data.logged_in){
                dispatch({
                    type:"LOGIN",
                    payload: res
                })
            } 
        })
        .catch(error => console.log('api errors:', error))
    }  
}

export const login = (user) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
        .then(r => {
            // if(r.data.logged_in){
                dispatch({
                    type:"LOGIN",
                    payload: r
                })
            // }
        })
        .catch(error => console.log('api errors:', error))
    }
}

export const logout = () => {
    return (dispatch) => {
        axios.delete('http://localhost:3001/logout', {withCredentials: true})
        .then(response => {
            // if(response.data.logged_out)
            dispatch({
                type:"LOGOUT",
                payload: response
            })
        })
        .catch(error => console.log(error))
    }
}

  export const signup = (user) => {
      return (dispatch) => {
        axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
        .then(r => {
            debugger
            if(r.data.status === 'created'){
                console.log(r)
                dispatch({
                    type:"SIGNUP",
                    payload: r
                })
            } 
        })
        .catch(error => console.log('api errors:', error))
      }
  }