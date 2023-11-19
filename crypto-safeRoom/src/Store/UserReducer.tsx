import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userState } from "../../Interfaces/Interfaces";

const initialState: userState = {
  pic: "",
  email: {
    email: "",
    confirm: false,
  },
  username: "?",
  plan: {
    remaining: 0,
    maxDays: 0,
    type: "",
  },
  firstname: "",
  lastname: "",
  refcode: "",
  phone: "",
  orders: [],
};

const userProfile = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<userState>>) => {
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
