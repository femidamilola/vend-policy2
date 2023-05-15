import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  proposalBody: {},
};

export const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    setPurchaseProps: (state, action) => {
      state.proposalBody = { ...state.proposalBody, ...action.payload };
    },
  },
});
export const { setPurchaseProps } = purchaseSlice.actions;
// Action creators are generated for each case reducer function
