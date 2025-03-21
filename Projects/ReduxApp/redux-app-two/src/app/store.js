import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: composeWithDevTools(),
});
