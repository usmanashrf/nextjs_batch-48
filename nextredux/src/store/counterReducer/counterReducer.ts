import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    add: (state, { payload }) => {
      return (state = state + payload);
    },
  },
});

export default counterSlice.reducer;

export const { add } = counterSlice.actions;
