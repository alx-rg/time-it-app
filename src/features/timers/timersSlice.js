import { createSlice } from "@reduxjs/toolkit";
import Timer from "./Timer";

const initialState = {
  value: [],
};

export const timersSlice = createSlice({
  name: "timers",
  description: "timer info",
  initialState,
  reducers: {
    addTimer: (state, action) => {
      const { name, description } = action.payload
      state.value.push(new Timer(name, description))
    },
    deleteTimer: (state, action) => {
      state.value.splice(action.payload, 1)
    },
    toggleTimer: (state, action) => {
      state.value[action.payload].isRunning =
      !state.value[action.payload].isRunning
    },
    update: (state, action) => {
      state.value.forEach(timer => {
        if (timer.isRunning)
          timer.time += action.payload
      })
    },
    resetTimer: (state, action) => {
      state.value[action.payload].time = 0
    }
  }
})

export const { addTimer, toggleTimer, update, resetTimer, deleteTimer } = timersSlice.actions;

export default timersSlice.reducer;
