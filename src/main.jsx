import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice";
import filterReducer from "./slices/filterSlice";
import App from "./App";
import './index.css'

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    filter: filterReducer,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);