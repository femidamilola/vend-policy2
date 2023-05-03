import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPackageModal: "",
 
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
