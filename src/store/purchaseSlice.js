import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  proposalBody: {},
};

export const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    setPurchaseProps: (state, action) => {
      const updated = Object.assign({}, state.proposalBody, action.payload);
      state.proposalBody = updated;
    },
    clearPurchaseProps: (state, action) => {
      state.proposalBody = {};
    },
  },
});
export const { setPurchaseProps, clearPurchaseProps } = purchaseSlice.actions;
// Action creators are generated for each case reducer function
