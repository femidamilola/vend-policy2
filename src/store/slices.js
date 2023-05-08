import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPackageModal: "",
  displayedProposal: "motor",
};

export const modalSlice = createSlice({
  name: "show_carmodal",
  initialState,
  reducers: {
    showPackageModal: (state, action) => {
      state.showPackageModal = action.payload;
    },
  },
});
export const { showPackageModal } = modalSlice.actions;
// Action creators are generated for each case reducer function
export const proposalSlice = createSlice({
  name: "show_carmodal",
  initialState,
  reducers: {
    setDisplayedProposal: (state, action) => {
      state.displayedProposal = action.payload;
    },
  },
});
export const { setDisplayedProposal } = proposalSlice.actions;
