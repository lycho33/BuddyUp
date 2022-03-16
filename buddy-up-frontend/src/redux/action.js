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

const fetchUsersFulfilled = (users) => ({
    type: 'FETCH_USERS_FULFILLED',
    payload: users
})

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
      axios.post('http://localhost:3001/login', {user})
      .then(r => {
          if(r.statusText === 'Accepted'){
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

export const autoLogin = () => {
  return (dispatch) => {
    const token = localStorage.token
    axios.get('http://localhost:3001/auto_login',
    {headers: {
      'Authorization': `Bearer ${token}`
    }})
    .then(r => {
      if(r.data.message) {
        localStorage.removeItem('token')
      } else {
        dispatch(loginUser(r.data.user))
      }
    })
  };
};

export const allUsers = () => {
    return (dispatch) => {
        const token = localStorage.token
        axios.get('http://localhost:3001/users', {headers: {'Authorization': `Bearer ${token}`}})
        .then(r => {
            if(r.data.message){
                localStorage.removeItem('token')
            } else {
                dispatch(fetchUsersFulfilled(r.data))
            }
        })
    }
}

export const getConversations = () => {
  return (dispatch) => {
      axios.get('http://localhost:3001/conversations')
      .then(r => {
            dispatch({
              type: 'FETCH_ALL_CONVERSATIONS',
              payload: r.data
            })
      })
  }
}

export const createConvo = (conversation) => {

  return (dispatch) => {
    const token = localStorage.token
    axios.post('http://localhost:3001/conversations', {conversation}, {headers: {'Authorization': `Bearer ${token}`}}
     )
    .then(r => {
      if(r.statusText === 'Created'){
        dispatch({
          type: 'CREATE_CONVERSATIONS',
          payload: r.data
        })
      }
    })
  }
}

export const getConvoData = id => {
  
  return dispatch => {
    axios.get(`http://localhost:3001/conversations/${id}`)
      .then(r => {
        debugger
        dispatch({
          type: 'GET_CONVERSATION',
          payload: r.data
        })
      })
  }
}

