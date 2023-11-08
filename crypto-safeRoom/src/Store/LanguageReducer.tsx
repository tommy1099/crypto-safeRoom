import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  isFa: boolean;
}

const initialState: ToggleState = {
  isFa: true,
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    toggleLang: (state) => {
      state.isFa = !state.isFa;
    },
    toggleLangToFa: (state) => {
      state.isFa = true;
    },
    toggleLangToEn: (state) => {
      state.isFa = false;
    },
  },
});

export const { toggleLang, toggleLangToFa, toggleLangToEn } = langSlice.actions;

export default langSlice.reducer;
