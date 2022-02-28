import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tenantReducer from "../reducers/tenantReducer";

export const store = configureStore({
  reducer: combineReducers({
    tenants: tenantReducer,
  }),
});
