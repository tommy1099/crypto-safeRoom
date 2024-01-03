import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISignalsProps } from "../Interfaces/Interfaces";

interface ItemsState {
  signals: ISignalsProps[];
}

const initialState: ItemsState = {
  signals: [],
};

const signalsSlice = createSlice({
  name: "signals",
  initialState,
  reducers: {
    setSignals: (state, action: PayloadAction<ISignalsProps[]>) => {
      state.signals = action.payload;
    },
    resetSignals: (state) => {
      state.signals = [];
    },
  },
});

export const { setSignals, resetSignals } = signalsSlice.actions;
export default signalsSlice.reducer;
