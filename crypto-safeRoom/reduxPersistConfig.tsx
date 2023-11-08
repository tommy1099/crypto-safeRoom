import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web

const persistConfig = {
  key: "root", // The key to use for storing the data
  storage, // The storage engine to use (localStorage, sessionStorage, etc.)
  whitelist: [
    "dropDown",
    "Radio",
    "cartList",
    "Price",
    "themeToggle",
    "user",
    "signals",
    "lang",
    "signalIndicator",
  ], // An array of reducers to persist (only 'dropDown' in this example)
};

export { persistConfig };
