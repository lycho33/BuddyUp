const initialState = {
  isLoggedIn: false,
  user: {},
}

export function reducer(state=initialState, action){
    switch(action.type){
          case "LOGIN":
            return {
              isLoggedIn: true,
              user: action.payload.data.user
            };

            case "LOGOUT":
              // debugger
              return {
                isLoggedIn: false,
                user: {}
              }

          default:
              return {...state}
    }
}