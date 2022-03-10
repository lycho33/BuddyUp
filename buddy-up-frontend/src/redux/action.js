import { postConfig } from "../helpers/configOption";
import axios from 'axios';

const DOMAIN = "http://localhost:3001"

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

const authFailed = error => ({
    type: 'AUTH_FAILED',
    payload: error
})

// export const login = (user) => {

//     return async dispatch => {
//         try {
//             dispatch({ type: 'CREATING_OR_GETTING_USER' })
//             const data = await fetch(`${DOMAIN}/login`, postConfig(user)).then(resp => resp.json())
//             if (data.failure) {
//                 dispatch(authFailed(data.failure))
//             } else {
//                 localStorage.setItem('token', data.jwt)
//                 dispatch(loginUser(data.user))
//                 // success(`Welcome back ${data.user.username}`)
//             };
//         } catch (e) {
//             // error(e)
//             throw e
//         }
//     };
// };

// export const register = (user) => {
//     return async dispatch => {
//         try {
//             dispatch({ type: 'CREATING_OR_GETTING_USER' })
//             const data = await fetch(`${DOMAIN}/users`, postConfig(user)).then(resp => resp.json())
            
//             if (data.errors) {
//                 dispatch(authFailed(data.errors))
//             } else {
//                 localStorage.setItem('token', data.jwt)
//                 dispatch(loginUser(data.user))
//                 // success(`Welcome ${data.user.username}, your account has been created!`)

//             };
//         } catch (e) {
//             // error(e)
//             throw e
//         }
//     };
// };

export const register = (user) => {
    return (dispatch) => {
        dispatch({ type: 'CREATING_OR_GETTING_USER' })
      axios.post('http://localhost:3001/users', {user})
      .then(r => {
          if(r.statusText === 'Created'){
            localStorage.setItem('token', r.data.jwt)
            dispatch(loginUser(r.data.user))
          } 
      })
      .catch(error => console.log('api errors:', error))
    }
}

export const login = (user) => {
    return (dispatch) => {
        dispatch({ type: 'CREATING_OR_GETTING_USER' })
      axios.post('http://localhost:3001/users', {user})
      .then(r => {
          if(r.statusText === 'Created'){
            localStorage.setItem('token', r.data.jwt)
            dispatch(loginUser(r.data.user))
          } 
      })
      .catch(error => console.log('api errors:', error))
    }
}

export const logoutUser = () => {
    return { type: 'LOGOUT_USER' };
}