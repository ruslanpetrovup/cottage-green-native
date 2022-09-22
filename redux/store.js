import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./userData.js";
import regDataReducer from "./regData.js";

export const store = configureStore({
  reducer: { userData: userDataReducer, regData: regDataReducer },
});
