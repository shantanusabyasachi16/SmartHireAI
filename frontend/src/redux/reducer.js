import { combineReducers } from "@reduxjs/toolkit";
import userslice from "./userslice";


const rootReducer = combineReducers({
  user: userslice
});

export { rootReducer };