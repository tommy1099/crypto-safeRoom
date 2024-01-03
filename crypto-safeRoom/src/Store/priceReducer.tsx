import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define initial state
interface TotalQuantityState {
  price: number;
  shippingPrice: number;
  discount: number;
}

const initialState: TotalQuantityState = {
  price: 0,
  shippingPrice: 0,
  discount: 0,
};

// Create a Redux Toolkit slice
const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    priceCalculator: (state, action: PayloadAction<number>) => {
      state.price += action.payload;
    },
    shippingPriceCalculator: (state, action: PayloadAction<number>) => {
      state.shippingPrice += action.payload;
    },
    discountPriceCalculator: (state, action: PayloadAction<number>) => {
      state.discount += action.payload;
    },
    reset: (state) => {
      state.price = 0;
      state.discount = 0;
      state.shippingPrice = 0;
    },
  },
});

// Export action creators and reducer
export const {
  priceCalculator,
  shippingPriceCalculator,
  discountPriceCalculator,
  reset,
} = priceSlice.actions;
export default priceSlice.reducer;
