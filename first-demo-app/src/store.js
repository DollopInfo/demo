import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers";
import AdminReducer from "./reducers/admin-reducer";

const reducer = combineReducers({
  UserReducer,
  AdminReducer,
});

const store = configureStore({
  reducer,
});

export default store;
