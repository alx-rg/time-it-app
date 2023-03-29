import { createSlice } from "@reduxjs/toolkit";
import Timer from "./Timer";

const initialState = {
  value: [],
};

export const timersSlice = createSlice({
  name: "timers",
  initialState,
  reducers: {

  },
})

export const { } = timersSlice.actions;

export default timersSlice.reducer;
