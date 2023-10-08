import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define initial state
interface TotalQuantityState {
  totalQuantity: number;
}

const initialState: TotalQuantityState = {
  totalQuantity: 0,
};

// Create a Redux Toolkit slice
const totalQuantitySlice = createSlice({
  name: "totalQuantity",
  initialState,
  reducers: {
    increaseQuantity: (state, action: PayloadAction<number>) => {
      state.totalQuantity += action.payload;
    },
    decreaseQuantity: (state) => {
      state.totalQuantity = state.totalQuantity - 1;
    },
    reset: (state) => {
      state.totalQuantity = 0;
    },
  },
});

// Export action creators and reducer
export const { increaseQuantity, decreaseQuantity, reset } =
  totalQuantitySlice.actions;
export default totalQuantitySlice.reducer;
