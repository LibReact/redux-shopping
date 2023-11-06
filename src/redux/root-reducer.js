import { combineReducers } from "redux";

import userReducer from "./user/reducer"; // com react-redux
import cartReducer from "./cart/slice";// com redux-toolkit

const rootReducer = combineReducers({ userReducer, cartReducer });

export default rootReducer;
