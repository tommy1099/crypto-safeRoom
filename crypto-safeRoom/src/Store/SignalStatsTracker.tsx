import { createSlice } from "@reduxjs/toolkit";
interface Props {
  statsObj: {
    all: number;
    successful: number;
    failed: number;
  };
}

const initialState: Props = {
  statsObj: {
    all: 0,
    successful: 0,
    failed: 0,
  },
};

const stateSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    successfulSignal: (state) => {
      state.statsObj = {
        all: state.statsObj.all + 1,
        successful: state.statsObj.successful + 1,
        failed: state.statsObj.failed,
      };
    },
    failedSignal: (state) => {
      state.statsObj = {
        all: state.statsObj.all + 1,
        successful: state.statsObj.successful,
        failed: state.statsObj.failed + 1,
      };
    },
    reset: () => initialState,
  },
});

export const { successfulSignal, failedSignal, reset } = stateSlice.actions;

export default stateSlice.reducer;
