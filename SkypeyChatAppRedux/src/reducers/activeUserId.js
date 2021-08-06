import { SET_ACTIVE_USER_ID } from "../actions/constants/action-types";

export default function activeUserId(state = null, action) {
    const {type,payload} = action
  switch (type) {
    case SET_ACTIVE_USER_ID:
      return payload;
    default:
      return state;
  }
}