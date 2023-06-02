import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPackageModal: false,
  displayedProposal: "motor",
  showPaymentModal: false,
  showClaimsModal: false,
  proposalForm: {},
  nextRoute: "",
};

export const modalSlice = createSlice({
  name: "show_carmodal",
  initialState,
  reducers: {
    showPackageModal: (state) => {
      state.showPackageModal = !state.showPackageModal;
    },
    showClaimsModal: (state) => {
      state.showClaimsModal = !state.showClaimsModal;
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
    setNextRoute: (state, action) => {
      state.nextRoute = action.payload;
    },
  },
});
export const {
  showPackageModal,
  setDisplayedProposal,
  setProposalForm,
  showPaymentModal,
  showClaimsModal,
  setNextRoute,
} = modalSlice.actions;
// Action creators are generated for each case reducer function
