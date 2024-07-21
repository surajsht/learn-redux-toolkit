import { configureStore } from "@reduxjs/toolkit";
import SurajReducer from "./CounterSlice";

export const store = configureStore({
  reducer: {
    suraj: SurajReducer,
  },
});
