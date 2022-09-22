import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const regData = createSlice({
  name: "regData",
  initialState,
  reducers: {
    setReg: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setReg } = regData.actions;

export default regData.reducer;
