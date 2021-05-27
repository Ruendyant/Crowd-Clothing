import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store, {periststore} from './redux/store';

import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById("root");
ReactDOM.render(
  
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate persistor={periststore}>
        <App />
      </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  rootElement
);
