import Types from "./types";
import fetch from "isomorphic-fetch";
import { API } from "../../config";

const login = (dispatch) => (email, password) => {
  dispatch({ type: Types.FETCH_USER, payload: { email, password } });
  fetch("api to fetch user")
    .then((response) =>
      dispatch({ type: Types.FETCH_USER_FULFILLED, payload: response.data })
    )
    .catch((error) =>
      dispatch({ type: Types.FETCH_USER_REJECTED, payload: error })
    );
};

const signup = (dispatch) => (user) => {
  dispatch({ type: Types.ADD_USER, payload: user });
  fetch(`${API}/signup/POST${user}`)
    .then((response) => {
      dispatch({ type: Types.FETCH_USER_FULFILLED, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: Types.FETCH_USER_REJECTED, payload: error })
    );
};

export default {
  login,
  signup,
};
