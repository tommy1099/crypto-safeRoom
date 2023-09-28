import { combineReducers, configureStore } from "@reduxjs/toolkit";
import divs from "./SignalDivs";
import toggle from "./isChecked";
const rootReducer = combineReducers({
  SignalDivs: divs,
  toggleReducer: toggle,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// console.log("store state:", store.getState());
