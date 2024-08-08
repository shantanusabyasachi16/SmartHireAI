import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
  name: 'job',
  initialState: {
    allJobs: [], // Ensure consistency with your initial state
    allAdminjobs: [],
    singleJob: null,
    searchJobByText: "", // This is the filter text
  },
  reducers: {
    setAlljobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setsingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setallAdminjobs: (state, action) => {
      state.allAdminjobs = action.payload;
    },
    setsearchJobByText: (state, action) => {
      state.searchJobByText = action.payload; // Update state with filter text
    }
  },
});

export const { setAlljobs, setsingleJob, setallAdminjobs, setsearchJobByText } = jobSlice.actions;
export default jobSlice.reducer;
