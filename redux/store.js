import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./root-reducer";


const initialState = {};
const middleware = [thunk, logger];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
// console.log("store state: " + store.getState());

export default store;

