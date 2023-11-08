import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./Store/Store.tsx";
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import Loading from "./components/forms/Loading/Loading.tsx";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import Language from "./Locales/Language/Language.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      {/* <AuthProvider></AuthProvider> */}
      <BrowserRouter>
        <Provider store={store}>
          <Language />
          <PersistGate loading={<Loading />} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </I18nextProvider>
);
