import { combineReducers } from "redux";
import authReducers from "./auth";
import behavReducer from "./behavReducer";
import behavTypeReducer from "./behavTypeReducer";

export const reducers = combineReducers({ list: behavReducer,behaviour:behavTypeReducer,auth:authReducers });

