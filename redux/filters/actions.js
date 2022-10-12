import types from "./types";

const setCurrentUser = (userCredentials) => {
  return {
    type: types.SET_CURRENT_USER,
    payload: userCredentials,
  };
};

const signup = () => {
  // return
};

export default {
  login: setCurrentUser,
  signup,
};
