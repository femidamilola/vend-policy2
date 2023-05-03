import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "../store/slices";

export const store = configureStore({
  reducer: {
    state: modalSlice.reducer,
    
  },
});
