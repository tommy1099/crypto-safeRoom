import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import divs from "./SignalDivs";
import Filtertoggle from "./isChecked";
import FullScreenToggle from "./IsFullScreen";
import stats from "./SignalStatsTracker";
import radioReducer from "./RadioState";
import DropDownReducer from "./DropDownReducer";
import { persistConfig } from "../../reduxPersistConfig";
import CartListReducer from "./CartListReducer";
import ShoppingCartBadge from "./ShoppingCartBadge";
import priceReducer from "./priceReducer";
import editModeReducer from "./EditModeReducer";
import ThemeToggleReducer from "./ThemeToggleReducer";
import IsLoggedin from "./isLoggedInReducer";
import setUser from "./UserReducer";
import SignalsReducer from "./SignalsReducer";
import LanguageReducer from "./LanguageReducer";
import signalIndicator from "./signalIndicator";
import AllSignalsReducer from "./AlltheSignals";
import IsModalOpen from "./IsModalOpen";
const rootReducer = combineReducers({
  SignalDivs: divs,
  toggleReducer: Filtertoggle,
  FullScreenToggleReducer: FullScreenToggle,
  statsTracker: stats,
  Radio: radioReducer,
  dropDown: DropDownReducer,
  cartList: CartListReducer,
  wholeQuantity: ShoppingCartBadge,
  Price: priceReducer,
  editMode: editModeReducer,
  themeToggle: ThemeToggleReducer,
  isLoggedin: IsLoggedin,
  user: setUser,
  signals: SignalsReducer,
  lang: LanguageReducer,
  signalIndicator: signalIndicator,
  allSignals: AllSignalsReducer,
  isModalOpen: IsModalOpen,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
const persistor = persistStore(store);
export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
