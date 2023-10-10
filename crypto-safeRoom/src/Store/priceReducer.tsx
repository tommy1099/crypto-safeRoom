import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define initial state
interface TotalQuantityState {
  price: number;
}

const initialState: TotalQuantityState = {
  price: 0,
};

// Create a Redux Toolkit slice
const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    priceCalculator: (state, action: PayloadAction<number>) => {
      state.price += action.payload;
    },

    reset: (state) => {
      state.price = 0;
    },
  },
});

// Export action creators and reducer
export const { priceCalculator, reset } = priceSlice.actions;
export default priceSlice.reducer;
