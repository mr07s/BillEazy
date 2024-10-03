import reducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
export const store = configureStore(
  {
    reducer: reducers,
  },
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(thunk))
);
