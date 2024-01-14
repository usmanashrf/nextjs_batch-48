import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer/counterReducer";
import userReducer from "./counterReducer/userReducer";

const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
    userReducer: userReducer,
  },
});

export default store;
