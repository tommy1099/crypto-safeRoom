import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Div {
  id: number;
  isBlurred: boolean;
}

interface DivsState {
  divs: Div[];
}

const initialState: DivsState = {
  divs: [],
};

const divsSlice = createSlice({
  name: "divs",
  initialState,
  reducers: {
    addDiv: (state, action: PayloadAction<Div>) => {
      state.divs.push({ id: action.payload.id, isBlurred: false });
      setTimeout(() => {
        blurDiv(action.payload.id);
        // dispatch(reset());
      }, 5000);
    },

    blurDiv: (state, action: PayloadAction<number>) => {
      state.divs = state.divs.map((div) =>
        div.id === action.payload ? { ...div, isBlurred: true } : div
      );
    },
    reset: (state) => {
      state.divs = [];
    },
  },
});

export const { addDiv, blurDiv, reset } = divsSlice.actions;

export default divsSlice.reducer;
