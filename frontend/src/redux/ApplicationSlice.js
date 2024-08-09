import { createSlice } from "@reduxjs/toolkit";
const ApplicationSlice = createSlice({
  name: "application",
  initialState: {
    allApplicants: [],
  },
  reducers: {
    setallApplicants: (state, action) => {
      state.allApplicants = action.payload;
    },
  },
});
export const {setallApplicants}= ApplicationSlice.actions;
export default ApplicationSlice.reducer
