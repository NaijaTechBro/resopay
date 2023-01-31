import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import { Provider } from "react-redux";
import store, { persistor } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";
import Loading from './components/loading';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <PersistGate loading={<Loading />} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>
)

