import { UserTypes } from "./action-types";

export const Users = user => ({
  type: UserTypes.SET_CURRENT_USER,
  payload: user
})