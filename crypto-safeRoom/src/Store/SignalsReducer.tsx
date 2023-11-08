import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NewItem {
  id: string;
  img: string;
  crypto: string;
  desc: {
    desc1: string;
    desc2: string;
    desc3: string;
  };
  tags: {
    tag1: string;
    tag2: string;
  };
  vip: boolean;
  blur: boolean;
  state: boolean;
  tp: {
    tp1: boolean;
    tp2: boolean;
    tp3: boolean;
  };
}

interface ItemsState {
  signals: NewItem[];
}

const initialState: ItemsState = {
  signals: [],
};

const signalsSlice = createSlice({
  name: "signals",
  initialState,
  reducers: {
    setSignals: (state, action: PayloadAction<NewItem[]>) => {
      state.signals = action.payload;
    },
  },
});

export const { setSignals } = signalsSlice.actions;
export default signalsSlice.reducer;
