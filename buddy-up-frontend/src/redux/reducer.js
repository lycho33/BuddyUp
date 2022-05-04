const initialState = {
    all: [],
    user: {},
    conversations: [],
    wordbank: [],
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
          case 'FETCH_ALL_CONVERSATIONS':
            return {...state,
               conversations: [...action.payload]}
          case 'CREATE_CONVERSATIONS':
            const updatedUser = {
              ...state.user[0],
              conversations: [...state.user[0].conversations, action.payload]
            }
            return {...state, user: [updatedUser]}
          case 'GET_CONVERSATION':
            return {...state, conversations: [action.payload]}
          case 'saveMessage':
              const index = state.conversations.findIndex(c => c.id === action.payload.conversation.id)
              
              const updatedConvo = {
                ...state.conversations[index],
                messages: [...state.conversations[index].messages, action.payload.text]
              }
            return {...state,
              conversations: [...state.conversations.slice(0,index), updatedConvo, state.conversations.slice(index+1)]
            }
          // case 'CREATE_VOCAB':
          //   const updatedWordBank = {
          //     ...state.user,
          //     wordbank: [...state.user.wordbank, action.payload]
          //   }
          //   return {
          //     ...state,
          //     user: [updatedWordBank]
          //   }
          case 'GET_VOCABS':
            return {...state, wordbank: [...action.payload]}
          case 'GET_VOCAB_INFO':
              let wordIndex = state.wordbank.findIndex(wb => wb.word === action.payload.word)
              let sentence = action.payload.sentence.map(info => info.definitions.map(sent => sent.example))

              //save all wordInfo into the right word
              state.wordbank[wordIndex].definition = action.payload.definition
              state.wordbank[wordIndex].synonyms = action.payload.synonyms
              state.wordbank[wordIndex].sentence = sentence

            return {...state, wordbank: [...state.wordbank]}
          default:
            return {...state}
      }
  }