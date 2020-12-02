
const initialState = { datamessage:[] }
function chatdataReducer(state=initialState , action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_CHAT':
            nextState = {
              ...state,
              datamessage: [...state.datamessage, action.value]
          }
          return nextState || state
      default:
        return state
      }
  }

  export default chatdataReducer