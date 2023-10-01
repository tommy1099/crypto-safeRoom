import { combineReducers, configureStore } from "@reduxjs/toolkit";
import divs from "./SignalDivs";
import Filtertoggle from "./isChecked";
import SidePaneltoggle from "./IsShrunk";
import stats from "./SignalStatsTracker";

const rootReducer = combineReducers({
  SignalDivs: divs,
  toggleReducer: Filtertoggle,
  SidePanelToggle: SidePaneltoggle,
  statsTracker: stats,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// console.log("store state:", store.getState());
