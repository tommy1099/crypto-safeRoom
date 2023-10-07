import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RadioState {
  selectedValue: string | null;
}

const initialState: RadioState = {
  selectedValue: "",
};

const radioSlice = createSlice({
  name: "radio",
  initialState,
  reducers: {
    setSelectedValue: (state, action: PayloadAction<string | null>) => {
      state.selectedValue = action.payload;
    },
  },
});

export const { setSelectedValue } = radioSlice.actions;
export default radioSlice.reducer;
