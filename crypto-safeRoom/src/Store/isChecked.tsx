import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  switch: boolean;
}

const initialState: ToggleState = {
  switch: true,
};

const toggle = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleSwitch: (state) => {
      state.switch = !state.switch;
    },
  },
});

export const { toggleSwitch } = toggle.actions;

export default toggle.reducer;
