import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 1
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    incrementCounter: (state, action) => {
      state.counter++
    },
    decrementCounter: (state, action) => {
      if (state.counter > 1) {
        state.counter--
      }
    },
    resetCounter: (state) => {
      state.counter = 1
    }
  }
})

export const {incrementCounter, decrementCounter, resetCounter} = counterSlice.actions
export default counterSlice.reducer