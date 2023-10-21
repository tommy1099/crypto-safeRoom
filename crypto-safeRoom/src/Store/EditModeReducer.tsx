import { createSlice } from "@reduxjs/toolkit";

interface EditModeState {
  Edit: boolean;
}

const initialState: EditModeState = {
  Edit: false,
};

const EditModeSlice = createSlice({
  name: "editMode",
  initialState,
  reducers: {
    EditModeToggle: (state) => {
      state.Edit = !state.Edit;
    },
  },
});
export const { EditModeToggle } = EditModeSlice.actions;
export default EditModeSlice.reducer;
