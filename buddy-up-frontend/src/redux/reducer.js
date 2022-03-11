const initialState = {
    all: [],
    user: {},
    errors: []
}
  
  export function reducer(state=initialState, action){
      switch(action.type){
        case 'AUTH_FAILED':
          return {
              ...state,
              errors: [].concat(action.payload)
          }
        case 'LOGIN_USER':
          const newUser = state.all.find(user => user.id === action.payload.id)
          if (newUser) {
              return {...state, user: action.payload, errors: [] }
          } else {
              return {...state, all: state.all.concat(action.payload), user: action.payload, errors: [] }
          };
          case 'LOGOUT_USER':
            return {...state, user: {} }
          case 'CREATING_OR_GETTING_USER':
            return {...state, errors: [] }
          case 'FETCH_USERS_FULFILLED': 
            return {...state, all: state.all.concat(action.payload)}
          default:
            return {...state}
      }
  }