import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import divs from "./SignalDivs";
import Filtertoggle from "./isChecked";
import FullScreenToggle from "./IsFullScreen";
import stats from "./SignalStatsTracker";
import radioReducer from "./RadioState";
import DropDownReducer from "./DropDownReducer";
import { persistConfig } from "../../reduxPersistConfig";
const rootReducer = combineReducers({
  SignalDivs: divs,
  toggleReducer: Filtertoggle,
  FullScreenToggleReducer: FullScreenToggle,
  statsTracker: stats,
  Radio: radioReducer,
  dropDown: DropDownReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);
export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
