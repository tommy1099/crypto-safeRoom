import { createSlice } from "@reduxjs/toolkit";

interface ThemeToggleState {
  Dark: boolean;
}

const initialState: ThemeToggleState = {
  Dark: false,
};

const ThemeToggleSlice = createSlice({
  name: "themeToggle",
  initialState,
  reducers: {
    ThemeToggle: (state) => {
      state.Dark = !state.Dark;
    },
  },
});
export const { ThemeToggle } = ThemeToggleSlice.actions;
export default ThemeToggleSlice.reducer;
