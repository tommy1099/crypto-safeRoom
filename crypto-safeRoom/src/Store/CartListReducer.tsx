import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Div {
  id: string;
  title: string;
  // link: string;
  img: string;
  quantity: number;
}

interface DivsState {
  list: Div[];
}

const initialState: DivsState = {
  list: [],
};

const CartListSlice = createSlice({
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
        state.list.push({
          id: action.payload.id,
          title: action.payload.title,
          img: action.payload.img,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action: PayloadAction<Div>) => {
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
    reset: (state) => {
      state.list = [];
    },
  },
});

export const { addItem, removeItem, reset } = CartListSlice.actions;

export default CartListSlice.reducer;
