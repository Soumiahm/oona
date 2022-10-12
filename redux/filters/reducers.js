import types from "./types";

const initialState = {
  status: "All",
  //can be All, published, accepted, completed, expired
  //when accepted and not marked as complete by the carrier
  //then it is marked as expired, otherwise it marked as completed
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
