import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  signalIndicator: boolean;
}

const initialState: ToggleState = {
  signalIndicator: false,
};

const togglesignalIndicatorSlice = createSlice({
  name: "toggleSignalIndicator",
  initialState,
  reducers: {
    togglesignalIndicator: (state) => {
      state.signalIndicator = !state.signalIndicator;
    },
    togglesignalIndicatorFalse: (state) => {
      state.signalIndicator = false;
    },
    togglesignalIndicatorTrue: (state) => {
      state.signalIndicator = true;
    },
  },
});

export const {
  togglesignalIndicator,
  togglesignalIndicatorFalse,
  togglesignalIndicatorTrue,
} = togglesignalIndicatorSlice.actions;

export default togglesignalIndicatorSlice.reducer;
