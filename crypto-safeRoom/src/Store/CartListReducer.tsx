import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Div {
  id: string;
  title: string;
  link: string;
  img: string;
  quantity: number;
  price: number;
}

interface DiscountInterface {
  amount: number;
  state: boolean;
}

interface DivsState {
  list: Div[];
  priceAfter: number;
  priceBefore: number;
  discountAmount: number;
  isDiscounted: boolean;
}

const initialState: DivsState = {
  list: [],
  priceAfter: 0,
  priceBefore: 0,
  discountAmount: 0,
  isDiscounted: false,
};

const shoppingCartListSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Div>) => {
      const existingItem = state.list.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem: Div = {
          ...action.payload,
          quantity: 1,
        };
        state.list.push(newItem);
      }
      state.priceBefore += action.payload.price;
      state.priceAfter = state.priceBefore;
    },
    setDiscount: (state, action: PayloadAction<DiscountInterface>) => {
      const { amount, state: discountState } = action.payload;
      if (discountState) {
        const discountAmount = state.priceBefore * (amount / 100);
        state.discountAmount = discountAmount;
        state.priceAfter -= discountAmount;
      } else {
        state.discountAmount = 0;
        state.priceAfter = state.priceBefore;
      }
      state.isDiscounted = discountState;
    },

    removeItem: (state, action: PayloadAction<Div>) => {
      state.isDiscounted = false;
      const existingItem = state.list.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        state.list = state.list.filter((item) => item.id !== action.payload.id);
        state.priceBefore -= existingItem.price;

        if (state.isDiscounted) {
          state.priceAfter = state.priceBefore - state.discountAmount;
        } else {
          state.priceAfter = state.priceBefore;
        }
      }
    },
    resetShippingCart: (state) => {
      state.list = [];
      state.priceAfter = 0;
      state.priceBefore = 0;
      state.discountAmount = 0;
      state.isDiscounted = false;
    },
  },
});

export const { addItem, removeItem, resetShippingCart, setDiscount } =
  shoppingCartListSlice.actions;

export default shoppingCartListSlice.reducer;
