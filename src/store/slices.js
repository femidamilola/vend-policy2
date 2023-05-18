import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPackageModal: "",
  displayedProposal: "motor",
  proposalForm:{}
};

export const modalSlice = createSlice({
  name: "show_carmodal",
  initialState,
  reducers: {
    showPackageModal: (state, action) => {
      state.showPackageModal = action.payload;
    },
    setDisplayedProposal: (state, action) => {
      state.displayedProposal = action.payload;
    },
    setProposalForm: (state, action) => {
      state.proposalForm = action.payload;
    },
  },
});
export const { showPackageModal, setDisplayedProposal,setProposalForm } = modalSlice.actions;
// Action creators are generated for each case reducer function
