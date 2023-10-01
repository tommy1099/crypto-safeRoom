import { createSlice } from "@reduxjs/toolkit";
interface Props {
  toggle: boolean;
}

const initialState: Props = {
  toggle: true,
};

const SidePanelToggleSlice = createSlice({
  name: "SidePaneltoggle",
  initialState,
  reducers: {
    SidePanelToggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { SidePanelToggle } = SidePanelToggleSlice.actions;

export default SidePanelToggleSlice.reducer;
