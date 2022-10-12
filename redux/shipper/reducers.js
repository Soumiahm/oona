import { combineReducers } from "redux";
import Types from "./types";



const initialState = {
  user: {
    firstName: null,
    lastName: null,
    jobTitle: null,
    company: null,
    email: null,
    phone: null,
    password: null,
  },
  fetching: false,
  fetched: false,
  loading: false,
  error: null,
  message: null,
  showForm: true,
};

const shipperReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_USER:
      return { ...state, user: action.payload, loading: true };
    case Types.ADD_USER_FULFILLED:
      return {
        ...state,
        user: action.payload,
        loading: false,
        message: "user successfully added!",
      };
      case Types.ADD_USER_REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default combineReducers({
  shipperReducer,
});
