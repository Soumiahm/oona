import types from "./types";

const initialState = {
  crrentUser: null,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      //log user into firebase and
      //getcurrent user at didMount ==> ??
      return { ...state, currentUser: action.payload };
    case types.SIGN_UP:
      return { ...state, users: [...users, action.payload] }; //payload= user
    default:
      return state;
  }
};

export default userReducer;
