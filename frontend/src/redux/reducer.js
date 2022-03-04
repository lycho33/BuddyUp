const initialState = {
  isLoggedIn: false,
  user: {},
}

export function reducer(state=initialState, action){
    switch(action.type){
          case "LOGIN":
            return {
              isLoggedIn: true,
              user: action.payload.data
            };

            case "LOGOUT":
              return {
                isLoggedIn: false,
                user: {}
              }

              case "SIGNUP":
                return {
                  isLoggedIn: true,
                  user: action.payload.data.user
                };

          default:
              return {...state}
    }
}