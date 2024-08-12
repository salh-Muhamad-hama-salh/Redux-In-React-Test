import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "/src/Redux/CountSlice";

export const stor = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
