import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: "",
  reducers: {
    add: (state, payload) => {
      state = state + "John";
    },
  },
});

export default userReducer.reducer;
export const { add } = userReducer.actions;
