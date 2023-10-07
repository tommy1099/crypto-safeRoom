import { createSlice } from "@reduxjs/toolkit";
interface Props {
  fullScreen: boolean;
}

const initialState: Props = {
  fullScreen: false,
};

const fullScreenToggleSlice = createSlice({
  name: "fullScreen",
  initialState,
  reducers: {
    fullScreenToggle: (state) => {
      state.fullScreen = !state.fullScreen;
    },
  },
});

export const { fullScreenToggle } = fullScreenToggleSlice.actions;

export default fullScreenToggleSlice.reducer;
