import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
  name: 'job',
  initialState: {
    allJobs: [], // Ensure consistency with your initial state
  singleJob:null,
  },
  reducers: {
    setAlljobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setsingleJob:(state,action)=>{
state.singleJob= action.payload
    }
  },
});

export const { setAlljobs, setsingleJob} = jobSlice.actions;
export default jobSlice.reducer;
