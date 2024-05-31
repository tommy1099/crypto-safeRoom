import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  backgroundBlur: boolean;
}

const initialState: ToggleState = {
  backgroundBlur: true,
};

const backgroundBlurSlice = createSlice({
  name: "backgroundBlur",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.backgroundBlur = !state.backgroundBlur;
    },
    toggleModalFalse: (state) => {
      state.backgroundBlur = false;
    },
    toggleModalTrue: (state) => {
      state.backgroundBlur = true;
    },
  },
});

export const { toggleModal, toggleModalFalse, toggleModalTrue } =
  backgroundBlurSlice.actions;

export default backgroundBlurSlice.reducer;
