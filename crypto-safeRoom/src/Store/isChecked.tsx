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
    toggleSwitchFalse: (state) => {
      state.switch = false;
    },
    toggleSwitchTrue: (state) => {
      state.switch = true;
    },
  },
});

export const { toggleSwitch, toggleSwitchFalse, toggleSwitchTrue } =
  toggle.actions;

export default toggle.reducer;
