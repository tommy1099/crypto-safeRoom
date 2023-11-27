import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NewItem {
  id: string;
  img: string;
  crypto: string;
  entryPoint: string;
  desc: {
    desc1: string;
    desc2: string;
    desc3: string;
  };
  alertDesc: string;
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
  tpPrices: {
    tp1Price: string;
    tp2Price: string;
    tp3Price: string;
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
    resetSignals: (state) => {
      state.signals = [];
    },
  },
});

export const { setSignals, resetSignals } = signalsSlice.actions;
export default signalsSlice.reducer;
