import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Div {
  id: string;
  title: string;
  // link: string;
  img?: string;
  quantity: number;
  price: number;
  physical: boolean;
}

interface DivsState {
  list: Div[];
}

const initialState: DivsState = {
  list: [],
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
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          physical: action.payload.physical,
          quantity: 1,
        };

        // Check if img property is present in action.payload
        if (action.payload.img) {
          newItem.img = action.payload.img;
        }

        state.list.push(newItem);
      }
    },

    removeItem: (state, action: PayloadAction<Div>) => {
      const existingItem = state.list.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        state.list = state.list.filter((item) => item.id !== action.payload.id);
      }
    },
    decreaseOne: (state, action: PayloadAction<Div>) => {
      const existingItem = state.list.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity -= 1;
      }
      if (existingItem && existingItem.quantity === 0) {
        state.list = state.list.filter((item) => item.id !== action.payload.id);
      }
    },
    resetShippingCart: (state) => {
      state.list = [];
    },
  },
});

export const { addItem, removeItem, decreaseOne, resetShippingCart } =
  shoppingCartListSlice.actions;

export default shoppingCartListSlice.reducer;
