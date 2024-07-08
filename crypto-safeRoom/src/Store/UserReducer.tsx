import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userState } from "../Interfaces/Interfaces";

interface IuserModel {
  user: userState | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: IuserModel = {
  user: null,
  isLoading: false,
  error: null,
};

const userProfile = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<IuserModel>>) => {
      Object.assign(state, action.payload);
    },
    resetUser: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setUser, resetUser } = userProfile.actions;

export default userProfile.reducer;
