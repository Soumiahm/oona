import { combineReducers } from "redux";

import offers from "./offers";
import shipper from "./shipper";

export default combineReducers({ shipper, offers });
