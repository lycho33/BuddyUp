import axios from 'axios';

const DOMAIN = "http://localhost:4000"

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

// const authFailed = error => ({
//     type: 'AUTH_FAILED',
//     payload: error
// })

const fetchUsersFulfilled = (users) => ({
    type: 'FETCH_USERS_FULFILLED',
    payload: users
})

export const register = (user) => {
    return (dispatch) => {
        dispatch({ type: 'CREATING_OR_GETTING_USER' })
      axios.post(`${DOMAIN}/users`, {user})
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
      axios.post(`${DOMAIN}/login`, {user})
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
    axios.get(`${DOMAIN}/auto_login`,
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
        axios.get(`${DOMAIN}/users`, {headers: {'Authorization': `Bearer ${token}`}})
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
      axios.get(`${DOMAIN}/conversations`)
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
    axios.post(`${DOMAIN}/conversations`, {conversation}, {headers: {'Authorization': `Bearer ${token}`}})
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

export const getConvoData = (id) => {
  return dispatch => {
    axios.get(`${DOMAIN}/conversations/${id}`)
      .then(r => {
        dispatch({
          type: 'GET_CONVERSATION',
          payload: r.data
        })
    })
  }
}

export const createMessage = (message) => {
  return (dispatch) => {
    const token = localStorage.token
    axios.post(`${DOMAIN}/conversations/${parseInt(message.conversation_id)}/messages`, {message}, {headers: {'Authorization': `Bearer ${token}`}})
  }
}

export const saveMessage = message => ({
  type: 'SaveMessage',
  payload: message
})

export const createVocab = (word, user_id) => {
  return dispatch => {
    const token = localStorage.token
    axios.post(`${DOMAIN}/users/${user_id}/wordbanks`, {word, user_id}, {headers: {'Authorization': `Bearer ${token}`}})
  }
}

export const getWords = (id) => {
  console.log("fetch", id)
  return (dispatch) => {
      axios.get(`${DOMAIN}/users/${id}/wordbanks`)
      .then(r => {
            dispatch({
              type: 'GET_VOCABS',
              payload: r.data
            })
      })
  }
}

export const getDictionary = word => {
  return dispatch => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(r => {
      dispatch({
        type: 'GET_VOCAB_INFO',
        payload: {
          word: r.data[0].word,
          definition: r.data[0].meanings[0].definitions, 
          sentence: r.data[0].meanings,
          // IMAGE
          synonyms: r.data[0].meanings[0].synonyms
        }
      })
    })
  }
}

export const saveDictionary = (user_id, id, definition) => {
  return dispatch => {
    const token = localStorage.token
    axios.patch(`${DOMAIN}/users/${user_id}/wordbanks/${id}`, {definition, id, user_id}, {headers: {'Authorization': `Bearer ${token}`}})
    .then(r => {
      dispatch({
        type: 'SAV_DEF',
        payload: {
          definition: r.data.definition,
          id: r.data.id,
          user: r.data.user
        }
      })
    })
  }
}