import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToggleState {
  pic?: string;
  email: string;
  username: string;
  plan: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  sub?: number;
  refcode: string;
  isConfirmed: boolean;
}

const initialState: ToggleState = {
  pic: "",
  email: "",
  username: "?",
  plan: "",
  firstname: "",
  lastname: "",
  refcode: "",
  phone: "",
  isConfirmed: false,
  sub: 0,
};

const userProfile = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<ToggleState>>) => {
      // Merge action.payload into state, overwriting existing properties
      Object.assign(state, action.payload);
    },
    resetUser: (state) => {
      // Merge action.payload into state, overwriting existing properties
      Object.assign(state, initialState);
    },
  },
});

export const { setUser, resetUser } = userProfile.actions;

export default userProfile.reducer;
