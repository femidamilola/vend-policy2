import { configureStore } from "@reduxjs/toolkit";
import { modalSlice, proposalSlice } from "../store/slices";

export const store = configureStore({
  reducer: {
    state: modalSlice.reducer,
    proposalState: proposalSlice.reducer,
  },
});
