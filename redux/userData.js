import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    token: "",
    data: {},
  },
};

export const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.user = {
        token: action.payload,
        data: state.user.data,
      };
    },
    setData: (state, action) => {
      state.user = {
        token: state.user.token,
        data: action.payload,
      };
    },
  },
});

export const { setToken, setData } = userData.actions;

export default userData.reducer;
