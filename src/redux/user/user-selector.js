import { createSelector } from "reselect";


const selectorUser = (state) => state.user;

export const selectorUserCurrent = createSelector(
  [selectorUser],
  (user) => user.currentUser
)