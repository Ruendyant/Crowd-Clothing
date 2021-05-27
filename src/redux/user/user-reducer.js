import { UserTypes } from "./action-types";

const INITIAL = {
  currentUser : null
}

const UserReducer = (state=INITIAL, action) => {
  switch(action.type) {
    case UserTypes.SET_CURRENT_USER:
      return {
        ...state, 
        currentUser : action.payload
      }
    default:
      return state;
  }
}

export default UserReducer;