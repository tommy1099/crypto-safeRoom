import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  isModalopen: boolean;
}

const initialState: ToggleState = {
  isModalopen: true,
};

const modalToggleSlice = createSlice({
  name: "modalToggle",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalopen = !state.isModalopen;
    },
    toggleModalFalse: (state) => {
      state.isModalopen = false;
    },
    toggleModalTrue: (state) => {
      state.isModalopen = true;
    },
  },
});

export const { toggleModal, toggleModalFalse, toggleModalTrue } =
  modalToggleSlice.actions;

export default modalToggleSlice.reducer;
