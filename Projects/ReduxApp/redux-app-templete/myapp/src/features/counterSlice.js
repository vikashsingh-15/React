import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: null,
  },
  reducers: {
    login: (state, action) => {
      state.counter = action.payload;
    },
    logout: (state) => {
      state.counter = null;
    },
  },
});

export const { login, logout } = counterSlice.actions;
export const selectCounter = (state) => state.counter.name;
export default counterSlice.reducer;
