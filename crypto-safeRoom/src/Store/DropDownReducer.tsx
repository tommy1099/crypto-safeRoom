import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define initial state
interface DropdownState {
  selectedOption: string;
}

const initialState: DropdownState = {
  selectedOption: "", // Initial state can be an empty string or some default value
};

// Create a Redux Toolkit slice
const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    setSelectedOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
  },
});

// Export action creators and reducer
export const { setSelectedOption } = dropdownSlice.actions;
export default dropdownSlice.reducer;
