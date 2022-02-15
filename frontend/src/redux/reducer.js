const initialState = {
    isLoggedIn: false,
    id: null,
    username: '',
}

  export function reducer(state=initialState, action){
      switch(action.type){
            case "LOGIN_USER":
              return {
                isLoggedIn: true,
                id: action.user.id,
                username: action.user.username,
              };
            case 'ADD_ERROR':
                return [action.error]
            case 'CLEAR_ERROR':
                return []
            default:
                return {...state}
      }
  }