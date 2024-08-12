import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

// Export the actions
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

// Export the slice itself if needed
export const { reducer: counterReducer } = counterSlice;

export default counterSlice.reducer;
