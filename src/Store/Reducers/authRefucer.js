
const initialState = { userdata:false }
function authReducer(state=initialState , action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_DATA_USER':
            nextState = {
              ...state,
              userdata:action.value
          }
          return nextState || state
      default:
        return state
      }
  }

  export default authReducer