import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPackageModal: false,
  displayedProposal: "motor",
  showPaymentModal: false,
  showClaimsModal: false,
  proposalForm: {},
  nextRoute: "",
  signUpSection: "verify",
  userDetails: {},
  checked: [1, 0, 0],
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
    setSignUpSection: (state, action) => {
      state.signUpSection = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setChecked: (state, action) => {
      state.checked = action.payload;
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
  setSignUpSection,
  setUserDetails,
  setChecked,
} = modalSlice.actions;
// Action creators are generated for each case reducer function
