import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./slice";
export default configureStore({
  reducer: stateReducer,
});
