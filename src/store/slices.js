import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPackageModal: false,
  displayedProposal: "motor",
  showPaymentModal: false,
  proposalForm: {},
};

export const modalSlice = createSlice({
  name: "show_carmodal",
  initialState,
  reducers: {
    showPackageModal: (state) => {
      state.showPackageModal = !state.showPackageModal;
    },
    setDisplayedProposal: (state, action) => {
      state.displayedProposal = action.payload;
    },
    setProposalForm: (state, action) => {
      state.proposalForm = action.payload;
    },
    showPaymentModal: (state, action) => {
      state.showPaymentModal = !state.showPaymentModal;
    },
  },
});
export const {
  showPackageModal,
  setDisplayedProposal,
  setProposalForm,
  showPaymentModal,
} = modalSlice.actions;
// Action creators are generated for each case reducer function
