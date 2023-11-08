import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
interface ToggleState {
  isLoggedin: boolean;
}

const initialState: ToggleState = {
  isLoggedin: Cookies.get("accessToken") != undefined ? true : false,
};

const toggle = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleisLoggedin: (state) => {
      state.isLoggedin = !state.isLoggedin;
    },
    toggleisLoggedinFalse: (state) => {
      state.isLoggedin = false;
    },
    toggleisLoggedinTrue: (state) => {
      state.isLoggedin = true;
    },
  },
});

export const { toggleisLoggedin, toggleisLoggedinFalse, toggleisLoggedinTrue } =
  toggle.actions;

export default toggle.reducer;
