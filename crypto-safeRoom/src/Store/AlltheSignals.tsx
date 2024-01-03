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
  allSignals: NewItem[];
}

const initialState: ItemsState = {
  allSignals: [],
};

const allSignalsSlice = createSlice({
  name: "allSignals",
  initialState,
  reducers: {
    setAllSignals: (state, action: PayloadAction<NewItem[]>) => {
      state.allSignals = action.payload;
    },
    resetAllSignals: (state) => {
      state.allSignals = [];
    },
  },
});

export const { setAllSignals, resetAllSignals } = allSignalsSlice.actions;
export default allSignalsSlice.reducer;
