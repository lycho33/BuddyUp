import axios from 'axios';

export const loginStatus = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/logged_in',
    {withCredentials: true})

    .then(res => {
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
            // debugger
            if(r.data.logged_in){
                dispatch({
                    type:"LOGIN",
                    payload: r
                })
            }
        })
        .catch(error => console.log('api errors:', error))

    }
}

export const logout = () => {
    return (dispatch) => {
        axios.delete('http://localhost:3001/logout', {withCredentials: true})
        .then(response => {
            dispatch({
                type:login,
                payload: response
            })
        })
        .catch(error => console.log(error))
    }

  }
